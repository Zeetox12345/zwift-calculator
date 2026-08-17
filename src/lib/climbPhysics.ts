/**
 * A steady-state climbing model for Zwift.
 *
 * The equation is the standard road-cycling power balance validated by Martin
 * et al. (1998), reduced to its steady-state form because a sustained climb has
 * no meaningful acceleration term:
 *
 *   P = [ m*g*(sin(theta) + Crr*cos(theta)) + 0.5*rho*CdA*v^2 ] * v
 *
 * Solving that cubic for v gives climbing speed, and distance divided by speed
 * gives the time.
 *
 * The honest caveat, stated on the page as well as here: Zwift has never
 * published its physics engine, the drag area it assigns an avatar, or the
 * weight of any in-game frame. Every Zwift-specific constant below is
 * community-derived, and the whole model is then scaled by a single calibration
 * constant fitted against ZwiftInsider's published Alpe du Zwift estimates.
 * Across 3.0 to 6.5 W/kg that calibration brings the model to within about 1%
 * of the reference on average, and within 4% at worst.
 */

/** Standard gravity, in m/s^2. */
export const GRAVITY = 9.8067;

/**
 * Air density in kg/m^3. Zwift appears to use a single fixed value rather than
 * varying density with in-game altitude; this is the value the community
 * ZwifterBikes project recovered.
 */
export const AIR_DENSITY = 1.22601;

/** Rolling resistance for road wheels on tarmac, from ZwiftInsider's testing. */
export const CRR_TARMAC = 0.004;

/** Drag coefficient recovered by fitting frontal area against timed tests. */
export const DRAG_COEFFICIENT = 0.889;

/**
 * Time multiplier fitting the raw model to ZwiftInsider's published Alpe du
 * Zwift estimates over 3.0-6.5 W/kg, at a 75 kg / 183 cm rider with 9 kg of
 * bike and kit. Recompute this if any constant above changes.
 */
export const CALIBRATION = 0.9524;

/** Default combined weight of bike, wheels, shoes and kit, in kg. */
export const DEFAULT_EQUIPMENT_KG = 9;

/**
 * Anthropometric frontal-area estimate, in m^2, from body-surface-area scaling.
 * `heightM` is in metres and `massKg` in kilograms.
 */
export function frontalArea(heightM: number, massKg: number): number {
  return 0.0293 * Math.pow(heightM, 0.725) * Math.pow(massKg, 0.425) + 0.0604;
}

export function dragArea(heightM: number, massKg: number): number {
  return DRAG_COEFFICIENT * frontalArea(heightM, massKg);
}

export interface ClimbInput {
  /** Rider body mass in kg. */
  riderKg: number;
  /** Rider height in cm. */
  riderCm: number;
  /** Bike, wheels and kit in kg. */
  equipmentKg: number;
  /** Sustainable power for the duration of the climb, in watts. */
  watts: number;
  /** Climb length in km. */
  lengthKm: number;
  /** Total elevation gain in m. */
  elevationM: number;
  /** Rolling resistance coefficient. */
  crr?: number;
}

export interface ClimbEstimate {
  /** Estimated time in seconds. */
  seconds: number;
  /** Average speed in km/h. */
  speedKmh: number;
  /** Average vertical speed in metres climbed per hour. */
  vamMetresPerHour: number;
  /** Share of power spent lifting the rider and bike, 0-1. */
  gravityShare: number;
  rollingShare: number;
  aeroShare: number;
  wattsPerKg: number;
  gradePct: number;
}

/**
 * Solve the power balance for speed. The left-hand side rises monotonically
 * with v, so a bisection is both simple and guaranteed to converge.
 */
function solveSpeed(watts: number, massKg: number, grade: number, cda: number, crr: number): number {
  const theta = Math.atan(grade);
  const sin = Math.sin(theta);
  const cos = Math.cos(theta);

  let low = 0.05;
  let high = 40;

  for (let i = 0; i < 120; i += 1) {
    const mid = (low + high) / 2;
    const required = (massKg * GRAVITY * (sin + crr * cos) + 0.5 * AIR_DENSITY * cda * mid * mid) * mid;
    if (required < watts) low = mid;
    else high = mid;
  }

  return (low + high) / 2;
}

export function estimateClimb(input: ClimbInput): ClimbEstimate {
  const crr = input.crr ?? CRR_TARMAC;
  const totalMass = input.riderKg + input.equipmentKg;
  const distanceM = input.lengthKm * 1000;
  const grade = input.elevationM / distanceM;
  const cda = dragArea(input.riderCm / 100, input.riderKg);

  const speed = solveSpeed(input.watts, totalMass, grade, cda, crr);
  const seconds = (distanceM / speed) * CALIBRATION;

  const theta = Math.atan(grade);
  const gravityForce = totalMass * GRAVITY * Math.sin(theta);
  const rollingForce = totalMass * GRAVITY * crr * Math.cos(theta);
  const aeroForce = 0.5 * AIR_DENSITY * cda * speed * speed;
  const totalForce = gravityForce + rollingForce + aeroForce;

  return {
    seconds,
    speedKmh: (distanceM / seconds) * 3.6,
    vamMetresPerHour: (input.elevationM / seconds) * 3600,
    gravityShare: gravityForce / totalForce,
    rollingShare: rollingForce / totalForce,
    aeroShare: aeroForce / totalForce,
    wattsPerKg: input.watts / input.riderKg,
    gradePct: grade * 100,
  };
}

/** Format seconds as h:mm:ss or m:ss. */
export function formatDuration(seconds: number): string {
  const total = Math.round(seconds);
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const rest = total % 60;

  if (hours > 0) return `${hours}:${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}
