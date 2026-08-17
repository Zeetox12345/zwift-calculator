/**
 * The Zwift timed-climb reference dataset.
 *
 * Length, elevation gain and average gradient for every timed KOM/QOM segment
 * in the game, cross-checked against ZwiftInsider's master KOM list. Two things
 * are deliberately absent:
 *
 *   - Maximum gradient. Neither Zwift nor ZwiftInsider publishes a maximum
 *     gradient for any segment, so there is no honest number to put here.
 *   - Any figure we could not confirm against a published source.
 *
 * Note on the gradients: `avgGradientPct` is the figure ZwiftInsider publishes,
 * which is not always equal to elevation divided by distance. Segments that
 * contain a descent report gross elevation gain, so dividing gain by distance
 * overstates the true average slope. `impliedGradientPct` exposes that second
 * number so the difference is visible rather than hidden.
 */

export interface ZwiftClimb {
  name: string;
  world: string;
  lengthKm: number;
  elevationM: number;
  /** Average gradient as published by ZwiftInsider. */
  avgGradientPct: number;
}

export const zwiftClimbs: ZwiftClimb[] = [
  { name: "Alpe du Zwift KOM", world: "Watopia", lengthKm: 12.2, elevationM: 1036, avgGradientPct: 8.5 },
  { name: "Ventoux KOM (Mont Ventoux)", world: "France", lengthKm: 19, elevationM: 1481, avgGradientPct: 7.8 },
  { name: "Mostly Ventoux", world: "France", lengthKm: 17.1, elevationM: 1383, avgGradientPct: 8.1 },
  { name: "Ventoux Half KOM", world: "France", lengthKm: 9.5, elevationM: 760, avgGradientPct: 8 },
  { name: "Petit KOM", world: "France", lengthKm: 2.7, elevationM: 105.2, avgGradientPct: 3.9 },
  { name: "Epic KOM", world: "Watopia", lengthKm: 9.5, elevationM: 415.7, avgGradientPct: 3.9 },
  { name: "Epic KOM Reverse", world: "Watopia", lengthKm: 6.3, elevationM: 402.6, avgGradientPct: 5.9 },
  { name: "Radio Tower KOM", world: "Watopia", lengthKm: 1.16, elevationM: 150, avgGradientPct: 12.8 },
  { name: "The Grade KOM", world: "Watopia", lengthKm: 3.52, elevationM: 305, avgGradientPct: 8.6 },
  { name: "Volcano KOM", world: "Watopia", lengthKm: 3.8, elevationM: 128.6, avgGradientPct: 3.2 },
  { name: "Titans Grove KOM", world: "Watopia", lengthKm: 2.6, elevationM: 59.4, avgGradientPct: 2.2 },
  { name: "Titans Grove KOM Reverse", world: "Watopia", lengthKm: 0.89, elevationM: 39, avgGradientPct: 4.4 },
  { name: "Hilly KOM", world: "Watopia", lengthKm: 0.9, elevationM: 50.9, avgGradientPct: 5.5 },
  { name: "Hilly KOM Reverse", world: "Watopia", lengthKm: 2.4, elevationM: 55.8, avgGradientPct: 2 },
  { name: "Itza KOM", world: "Watopia", lengthKm: 3.75, elevationM: 95, avgGradientPct: 2 },
  { name: "Mayan Mountainside KOM", world: "Watopia", lengthKm: 1.99, elevationM: 62, avgGradientPct: 3.1 },
  { name: "Jarvis KOM", world: "Watopia", lengthKm: 1.8, elevationM: 38, avgGradientPct: 1.8 },
  { name: "Jarvis KOM Reverse", world: "Watopia", lengthKm: 1.3, elevationM: 41, avgGradientPct: 3.1 },
  { name: "Box Hill KOM", world: "London", lengthKm: 3, elevationM: 134.7, avgGradientPct: 4.4 },
  { name: "Leith Hill KOM", world: "London", lengthKm: 1.9, elevationM: 132.6, avgGradientPct: 7 },
  { name: "Keith Hill KOM", world: "London", lengthKm: 4.3, elevationM: 225.2, avgGradientPct: 5 },
  { name: "Fox Hill KOM", world: "London", lengthKm: 2.4, elevationM: 120.7, avgGradientPct: 4.3 },
  { name: "Innsbruck KOM", world: "Innsbruck", lengthKm: 7.4, elevationM: 399.9, avgGradientPct: 5.4 },
  { name: "Innsbruck KOM Reverse", world: "Innsbruck", lengthKm: 5.8, elevationM: 396.8, avgGradientPct: 6.9 },
  { name: "Leg Snapper KOM", world: "Innsbruck", lengthKm: 0.43, elevationM: 29.6, avgGradientPct: 6.9 },
  { name: "Yorkshire KOM", world: "Yorkshire", lengthKm: 1.2, elevationM: 65.8, avgGradientPct: 5.5 },
  { name: "Yorkshire KOM Reverse", world: "Yorkshire", lengthKm: 1.2, elevationM: 47.9, avgGradientPct: 4 },
  { name: "Libby Hill KOM", world: "Richmond", lengthKm: 0.64, elevationM: 38.1, avgGradientPct: 6 },
  { name: "Libby Hill KOM Reverse", world: "Richmond", lengthKm: 0.7, elevationM: 26.2, avgGradientPct: 3.6 },
  { name: "23rd St. KOM", world: "Richmond", lengthKm: 0.26, elevationM: 24.1, avgGradientPct: 9.3 },
  { name: "23rd St. KOM Reverse", world: "Richmond", lengthKm: 1.1, elevationM: 38.1, avgGradientPct: 3.5 },
  { name: "New York KOM", world: "New York", lengthKm: 1.4, elevationM: 88.7, avgGradientPct: 6.3 },
  { name: "New York KOM Reverse", world: "New York", lengthKm: 1.1, elevationM: 89, avgGradientPct: 8.1 },
  { name: "Brooklyn Bridge KOM", world: "New York", lengthKm: 2, elevationM: 52, avgGradientPct: 1.7 },
  { name: "The Hill KOM", world: "New York", lengthKm: 0.5, elevationM: 19, avgGradientPct: 3.7 },
  { name: "Temple KOM", world: "Makuri Islands", lengthKm: 2.5, elevationM: 99.4, avgGradientPct: 3.6 },
  { name: "Temple KOM Reverse", world: "Makuri Islands", lengthKm: 1.9, elevationM: 68, avgGradientPct: 3.5 },
  { name: "Castle KOM", world: "Makuri Islands", lengthKm: 2.5, elevationM: 66.4, avgGradientPct: 2.1 },
  { name: "Rooftop KOM", world: "Makuri Islands", lengthKm: 1.9, elevationM: 53.6, avgGradientPct: 2.7 },
  { name: "Montmartre KOM", world: "Paris", lengthKm: 1.2, elevationM: 51, avgGradientPct: 4.2 },
  { name: "Sgurr Summit North", world: "Scotland", lengthKm: 1.6, elevationM: 59, avgGradientPct: 3.7 },
  { name: "Sgurr Summit South", world: "Scotland", lengthKm: 1, elevationM: 34, avgGradientPct: 3.3 },
  { name: "Breakaway Brae", world: "Scotland", lengthKm: 0.62, elevationM: 14.6, avgGradientPct: 2.4 },
  { name: "The Clyde Kicker", world: "Scotland", lengthKm: 0.3, elevationM: 10.7, avgGradientPct: 3.6 },  { name: "Aqueduc KOM", world: "France", lengthKm: 0.42, elevationM: 4.9, avgGradientPct: 0.9 },
  { name: "Aqueduc KOM Reverse", world: "France", lengthKm: 0.4, elevationM: 9.4, avgGradientPct: 2.3 },
];

export const zwiftWorlds = [...new Set(zwiftClimbs.map((c) => c.world))].sort();

/** Elevation gain divided by distance, which is not always the published average. */
export function impliedGradientPct(climb: ZwiftClimb): number {
  return (climb.elevationM / (climb.lengthKm * 1000)) * 100;
}

/**
 * Climbs long and steep enough for a steady-state model to be meaningful.
 * Below roughly a kilometre or 3%, a rider's result is decided by how hard they
 * can go anaerobically and by the draft, not by sustainable power.
 */
export function sustainedClimbs(): ZwiftClimb[] {
  return zwiftClimbs
    .filter((c) => c.lengthKm >= 1 && c.avgGradientPct >= 3)
    .sort((a, b) => b.elevationM - a.elevationM);
}

export function findClimb(name: string): ZwiftClimb | undefined {
  return zwiftClimbs.find((c) => c.name === name);
}
