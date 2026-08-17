import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Mountain, Timer, TrendingUp, Wind, Gauge, ArrowRight } from "lucide-react";

import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { sustainedClimbs } from "@/lib/zwiftClimbs";
import {
  AIR_DENSITY,
  CALIBRATION,
  CRR_TARMAC,
  DEFAULT_EQUIPMENT_KG,
  DRAG_COEFFICIENT,
  GRAVITY,
  dragArea,
  estimateClimb,
  formatDuration,
} from "@/lib/climbPhysics";

const CLIMBS = sustainedClimbs();
const REFERENCE_WKG = [2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5];

const ZwiftClimbTimeCalculator = () => {
  const [climbName, setClimbName] = useState(CLIMBS[0].name);
  const [riderKg, setRiderKg] = useState(75);
  const [riderCm, setRiderCm] = useState(178);
  const [watts, setWatts] = useState(250);
  const [equipmentKg, setEquipmentKg] = useState(DEFAULT_EQUIPMENT_KG);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const climb = useMemo(() => CLIMBS.find((c) => c.name === climbName) ?? CLIMBS[0], [climbName]);

  const estimate = useMemo(
    () =>
      estimateClimb({
        riderKg,
        riderCm,
        equipmentKg,
        watts,
        lengthKm: climb.lengthKm,
        elevationM: climb.elevationM,
      }),
    [climb, riderKg, riderCm, equipmentKg, watts]
  );

  const referenceRows = useMemo(
    () =>
      REFERENCE_WKG.map((wkg) => ({
        wkg,
        watts: Math.round(wkg * riderKg),
        time: formatDuration(
          estimateClimb({
            riderKg,
            riderCm,
            equipmentKg,
            watts: wkg * riderKg,
            lengthKm: climb.lengthKm,
            elevationM: climb.elevationM,
          }).seconds
        ),
      })),
    [climb, riderKg, riderCm, equipmentKg]
  );

  const cda = dragArea(riderCm / 100, riderKg);
  const lowerBound = formatDuration(estimate.seconds * 0.95);
  const upperBound = formatDuration(estimate.seconds * 1.05);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 pb-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-green/10 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs className="mb-4 sm:mb-6" />

            <AnimatedText delay={100}>
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-zwift-dark/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-zwift-green shadow-sm border border-green-100 dark:border-green-900/20 mb-4">
                <Mountain size={16} className="text-zwift-green" />
                <span>{CLIMBS.length} climbs, one physics model</span>
              </div>
            </AnimatedText>

            <AnimatedText delay={200}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Zwift <span className="zwift-gradient-text">Climb Time</span> Calculator
              </h1>
            </AnimatedText>

            <AnimatedText delay={300} className="mt-5">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Pick any sustained climb in the game, put in your weight and the power you can hold, and get a time.
                Unlike the{" "}
                <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">
                  Alpe du Zwift calculator
                </Link>
                , which is fitted to real finishing times on one specific climb, this one runs the physics from first
                principles, so it works anywhere. The full equation and every constant it uses are written out below.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-4 sm:py-6 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-5 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Inputs */}
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="climb" className="text-sm font-semibold">
                        Climb
                      </Label>
                      <select
                        id="climb"
                        value={climbName}
                        onChange={(event) => setClimbName(event.target.value)}
                        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zwift-green"
                      >
                        {CLIMBS.map((option) => (
                          <option key={option.name} value={option.name}>
                            {option.name} ({option.world})
                          </option>
                        ))}
                      </select>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {climb.lengthKm} km, {climb.elevationM} m of climbing, {climb.avgGradientPct}% average as
                        published. This model uses {estimate.gradePct.toFixed(1)}%, which is the gain divided by the
                        distance.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-baseline justify-between">
                        <Label htmlFor="weight" className="text-sm font-semibold">
                          Your weight
                        </Label>
                        <span className="font-mono text-sm text-zwift-green">{riderKg} kg</span>
                      </div>
                      <Slider
                        id="weight"
                        className="mt-3"
                        min={40}
                        max={130}
                        step={1}
                        value={[riderKg]}
                        onValueChange={(value) => setRiderKg(value[0])}
                      />
                    </div>

                    <div>
                      <div className="flex items-baseline justify-between">
                        <Label htmlFor="power" className="text-sm font-semibold">
                          Power you can hold
                        </Label>
                        <span className="font-mono text-sm text-zwift-green">{watts} W</span>
                      </div>
                      <Slider
                        id="power"
                        className="mt-3"
                        min={80}
                        max={500}
                        step={5}
                        value={[watts]}
                        onValueChange={(value) => setWatts(value[0])}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="height" className="text-xs font-semibold">
                          Height (cm)
                        </Label>
                        <Input
                          id="height"
                          type="number"
                          min={140}
                          max={210}
                          value={riderCm}
                          onChange={(event) => setRiderCm(Number(event.target.value) || 178)}
                          className="mt-1.5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="equipment" className="text-xs font-semibold">
                          Bike + kit (kg)
                        </Label>
                        <Input
                          id="equipment"
                          type="number"
                          min={5}
                          max={15}
                          step={0.5}
                          value={equipmentKg}
                          onChange={(event) => setEquipmentKg(Number(event.target.value) || DEFAULT_EQUIPMENT_KG)}
                          className="mt-1.5"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Height only affects the aerodynamic term, which is close to irrelevant on a steep climb and
                      starts to matter on shallow ones. Zwift does not publish the weight of its in-game frames, so
                      9 kg is a reasonable stand-in for bike, wheels, shoes and kit rather than a known value.
                    </p>
                  </div>

                  {/* Results */}
                  <div className="space-y-5">
                    <div className="rounded-xl bg-gradient-to-br from-zwift-green/10 to-zwift-blue/10 border-2 border-zwift-green/30 p-6 text-center">
                      <p className="text-sm font-medium text-muted-foreground mb-1">Estimated time</p>
                      <p className="text-5xl font-bold font-mono text-foreground">{formatDuration(estimate.seconds)}</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Realistically somewhere between {lowerBound} and {upperBound}
                      </p>
                    </div>

                    <dl className="grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-lg border border-border p-3">
                        <dt className="flex items-center text-xs text-muted-foreground mb-1">
                          <Gauge size={13} className="mr-1.5" /> Power-to-weight
                        </dt>
                        <dd className="font-mono font-semibold text-foreground">
                          {estimate.wattsPerKg.toFixed(2)} W/kg
                        </dd>
                      </div>
                      <div className="rounded-lg border border-border p-3">
                        <dt className="flex items-center text-xs text-muted-foreground mb-1">
                          <Timer size={13} className="mr-1.5" /> Average speed
                        </dt>
                        <dd className="font-mono font-semibold text-foreground">
                          {estimate.speedKmh.toFixed(1)} km/h
                        </dd>
                      </div>
                      <div className="rounded-lg border border-border p-3">
                        <dt className="flex items-center text-xs text-muted-foreground mb-1">
                          <TrendingUp size={13} className="mr-1.5" /> VAM
                        </dt>
                        <dd className="font-mono font-semibold text-foreground">
                          {Math.round(estimate.vamMetresPerHour)} m/h
                        </dd>
                      </div>
                      <div className="rounded-lg border border-border p-3">
                        <dt className="flex items-center text-xs text-muted-foreground mb-1">
                          <Wind size={13} className="mr-1.5" /> Spent on drag
                        </dt>
                        <dd className="font-mono font-semibold text-foreground">
                          {(estimate.aeroShare * 100).toFixed(1)}%
                        </dd>
                      </div>
                    </dl>

                    <div className="rounded-lg border border-border p-4">
                      <p className="text-xs font-semibold text-foreground mb-2">Where your power goes</p>
                      <div className="flex h-3 w-full overflow-hidden rounded-full">
                        <div
                          className="bg-zwift-orange"
                          style={{ width: `${estimate.gravityShare * 100}%` }}
                          title="Lifting you and the bike"
                        />
                        <div
                          className="bg-zwift-blue"
                          style={{ width: `${estimate.rollingShare * 100}%` }}
                          title="Rolling resistance"
                        />
                        <div
                          className="bg-zwift-green"
                          style={{ width: `${estimate.aeroShare * 100}%` }}
                          title="Air drag"
                        />
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">
                        Gravity {(estimate.gravityShare * 100).toFixed(0)}%, rolling{" "}
                        {(estimate.rollingShare * 100).toFixed(0)}%, drag {(estimate.aeroShare * 100).toFixed(0)}%.
                        This split is the whole reason W/kg matters more than watts on a climb.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reference table */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h2 className="text-lg font-bold mb-3 text-foreground">
                    {climb.name} at every power-to-weight ratio
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Same climb, same {riderKg} kg rider, different sustainable power. Use it to see what a training
                    block would actually buy you.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b-2 border-border text-left">
                          <th scope="col" className="py-2 pr-4 font-semibold text-foreground">
                            W/kg
                          </th>
                          <th scope="col" className="py-2 pr-4 font-semibold text-foreground">
                            Watts at {riderKg} kg
                          </th>
                          <th scope="col" className="py-2 font-semibold text-foreground">
                            Estimated time
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {referenceRows.map((row) => (
                          <tr key={row.wkg} className="border-b border-border">
                            <td className="py-2 pr-4 font-mono font-semibold text-foreground">{row.wkg.toFixed(1)}</td>
                            <td className="py-2 pr-4 text-muted-foreground">{row.watts} W</td>
                            <td className="py-2 font-mono text-foreground">{row.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The model, written out */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-blue/5 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <AnimatedCard delay={100}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">The equation this uses</h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    A rider climbing at a steady speed is fighting three forces. Gravity pulls the combined mass of
                    rider and bike back down the slope. Rolling resistance opposes the tyres turning. Air drag opposes
                    forward motion. At a constant speed the power you produce exactly balances the sum of the three:
                  </p>

                  <div className="bg-muted/60 rounded-lg p-4 font-mono text-sm text-foreground overflow-x-auto">
                    P = [ m &middot; g &middot; (sin&theta; + Crr &middot; cos&theta;) + &frac12; &middot; &rho;
                    &middot; CdA &middot; v&sup2; ] &middot; v
                  </div>

                  <p>
                    This is the steady-state form of the road-cycling power model validated by Martin and colleagues in
                    1998, with the acceleration and kinetic-energy terms dropped because a sustained climb has no
                    meaningful speed change. The equation is a cubic in v, so the calculator solves it numerically
                    rather than in closed form, then divides the climb distance by the resulting speed.
                  </p>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">The constants</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="border-b-2 border-border text-left">
                            <th scope="col" className="py-2 pr-4 font-semibold text-foreground">
                              Symbol
                            </th>
                            <th scope="col" className="py-2 pr-4 font-semibold text-foreground">
                              Value
                            </th>
                            <th scope="col" className="py-2 font-semibold text-foreground">
                              Where it comes from
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4 font-mono text-foreground">g</td>
                            <td className="py-2 pr-4 font-mono text-foreground">{GRAVITY} m/s&sup2;</td>
                            <td className="py-2">Standard gravity. Not in dispute.</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4 font-mono text-foreground">&rho;</td>
                            <td className="py-2 pr-4 font-mono text-foreground">{AIR_DENSITY} kg/m&sup3;</td>
                            <td className="py-2">
                              Air density. Zwift appears to hold this fixed rather than thinning the air as you climb.
                              Community-derived, not published by Zwift.
                            </td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4 font-mono text-foreground">Crr</td>
                            <td className="py-2 pr-4 font-mono text-foreground">{CRR_TARMAC}</td>
                            <td className="py-2">
                              Rolling resistance for road wheels on tarmac, from community timed testing. Gravel and
                              dirt are considerably higher, which is why this calculator only offers paved climbs.
                            </td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4 font-mono text-foreground">CdA</td>
                            <td className="py-2 pr-4 font-mono text-foreground">{cda.toFixed(4)} m&sup2;</td>
                            <td className="py-2">
                              Drag area for your height and weight, from body-surface-area scaling multiplied by a drag
                              coefficient of {DRAG_COEFFICIENT}. Estimated, not measured.
                            </td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4 font-mono text-foreground">m</td>
                            <td className="py-2 pr-4 font-mono text-foreground">{riderKg + equipmentKg} kg</td>
                            <td className="py-2">Your weight plus bike and kit.</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-2 pr-4 font-mono text-foreground">k</td>
                            <td className="py-2 pr-4 font-mono text-foreground">{CALIBRATION}</td>
                            <td className="py-2">
                              A single calibration multiplier on the final time, fitted so the model reproduces the
                              best public Alpe du Zwift reference times.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={200}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">
                  Why there is a calibration constant at all
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Zwift has never published its physics engine. It has never published the drag area it assigns your
                    avatar, the rolling resistance of each surface, or the weight of a single in-game frame. Everything
                    the community knows has been recovered by riding controlled tests and working backwards.
                  </p>
                  <p>
                    That means a first-principles model built from public numbers will be systematically off by a few
                    percent, and it is more honest to say so and correct for it than to quietly tune a physical
                    constant until the answer looks right. So the raw physics runs, and then one clearly-labelled
                    multiplier of {CALIBRATION} scales the result.
                  </p>
                  <p>
                    That constant was fitted by comparing the model against the best publicly available Alpe du Zwift
                    time estimates across 3.0 to 6.5 W/kg. After calibration the model sits within about 1% of that
                    reference on average, and within 4% at its worst point. Below 3 W/kg it drifts further, because the
                    reference data itself thins out down there.
                  </p>

                  <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
                    <p className="text-foreground font-semibold mb-2">Which calculator should you use?</p>
                    <p className="text-sm">
                      For{" "}
                      <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline font-medium">
                        Alpe du Zwift
                      </Link>{" "}
                      and{" "}
                      <Link to="/ventop-calculator" className="text-zwift-orange hover:underline font-medium">
                        Ven-Top
                      </Link>
                      , use the dedicated calculators. They are fitted directly to observed finishing times on those
                      climbs, so they capture whatever the physics model misses. Use this page for everything else, and
                      for understanding why the numbers land where they do.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={300}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">What the model cannot see</h2>

                <ul className="space-y-4 text-muted-foreground leading-relaxed list-disc list-outside ml-5">
                  <li>
                    <strong className="text-foreground">Your pacing.</strong> It assumes you hold the power you entered
                    for the entire climb. Almost nobody does on their first attempt at a long ascent, and the cost of
                    going out too hard is far larger than any modelling error here.
                  </li>
                  <li>
                    <strong className="text-foreground">Descents inside a segment.</strong> Several timed segments
                    include short downhill sections. Their published elevation figure is total gain, so dividing it by
                    the distance overstates the real slope and the model comes out slow. The climbs where this matters
                    most are the shallow, rolling ones.
                  </li>
                  <li>
                    <strong className="text-foreground">Surface changes.</strong> A few climbs switch to dirt, ice or
                    snow partway up, all of which roll slower than tarmac. This calculator assumes tarmac throughout.
                  </li>
                  <li>
                    <strong className="text-foreground">The draft.</strong> On anything steep the draft is close to
                    irrelevant, which is why it is ignored here. On the shallow climbs in the list it is not, and
                    riding in a group will beat this estimate.
                  </li>
                  <li>
                    <strong className="text-foreground">Your equipment choice in game.</strong> Frames and wheels carry
                    different weight and drag values that Zwift does not publish.
                  </li>
                  <li>
                    <strong className="text-foreground">Heat, hydration and how your day is going.</strong> These are
                    worth more minutes than every parameter above put together.
                  </li>
                </ul>

                <p className="mt-6 text-muted-foreground leading-relaxed">
                  If your real time disagrees with this by more than a few percent, that is genuinely useful to know -{" "}
                  <Link to="/contact" className="text-zwift-orange hover:underline">
                    send the numbers over
                  </Link>{" "}
                  and the model gets better. The{" "}
                  <Link to="/editorial-policy" className="text-zwift-orange hover:underline">
                    editorial policy
                  </Link>{" "}
                  explains how corrections are handled.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={400}>
              <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-2xl p-6 md:p-8 border-2 border-zwift-orange/20">
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground">Keep going</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { to: "/zwift-climbs", label: "Every timed climb in Zwift, with its numbers" },
                    { to: "/alpe-vs-ventop", label: "Alpe du Zwift versus Ven-Top, compared" },
                    { to: "/zwift-ftp-calculator", label: "Work out the power you can actually hold" },
                    { to: "/blog/power-to-weight-ratio-science", label: "Why W/kg decides a climb" },
                  ].map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="flex items-center justify-between rounded-lg bg-background/60 px-4 py-3 text-sm font-medium hover:text-zwift-orange transition-colors"
                    >
                      {link.label}
                      <ArrowRight size={16} className="ml-3 flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZwiftClimbTimeCalculator;
