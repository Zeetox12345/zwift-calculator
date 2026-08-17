import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Mountain, ArrowUpDown, Info, ArrowRight } from "lucide-react";

import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { zwiftClimbs, zwiftWorlds, impliedGradientPct, type ZwiftClimb } from "@/lib/zwiftClimbs";
import { estimateClimb, formatDuration, DEFAULT_EQUIPMENT_KG } from "@/lib/climbPhysics";

type SortKey = "name" | "world" | "lengthKm" | "elevationM" | "avgGradientPct";

const SORT_LABELS: Record<SortKey, string> = {
  name: "Climb",
  world: "World",
  lengthKm: "Length",
  elevationM: "Elevation",
  avgGradientPct: "Avg gradient",
};

/** Reference time for a 75 kg rider at 3.5 W/kg, for climbs a model can describe. */
function referenceTime(climb: ZwiftClimb): string | null {
  if (climb.lengthKm < 1 || climb.avgGradientPct < 3) return null;
  const estimate = estimateClimb({
    riderKg: 75,
    riderCm: 178,
    equipmentKg: DEFAULT_EQUIPMENT_KG,
    watts: 3.5 * 75,
    lengthKm: climb.lengthKm,
    elevationM: climb.elevationM,
  });
  return formatDuration(estimate.seconds);
}

const ZwiftClimbs = () => {
  const [sortKey, setSortKey] = useState<SortKey>("elevationM");
  const [ascending, setAscending] = useState(false);
  const [world, setWorld] = useState<string>("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const rows = useMemo(() => {
    const filtered = world === "all" ? zwiftClimbs : zwiftClimbs.filter((c) => c.world === world);

    return [...filtered].sort((a, b) => {
      const left = a[sortKey];
      const right = b[sortKey];
      const comparison =
        typeof left === "string" && typeof right === "string" ? left.localeCompare(right) : Number(left) - Number(right);
      return ascending ? comparison : -comparison;
    });
  }, [sortKey, ascending, world]);

  const toggleSort = (key: SortKey) => {
    if (key === sortKey) setAscending((value) => !value);
    else {
      setSortKey(key);
      setAscending(key === "name" || key === "world");
    }
  };

  const totals = useMemo(
    () => ({
      count: zwiftClimbs.length,
      worlds: zwiftWorlds.length,
      biggest: [...zwiftClimbs].sort((a, b) => b.elevationM - a.elevationM)[0],
      steepest: [...zwiftClimbs].sort((a, b) => b.avgGradientPct - a.avgGradientPct)[0],
      longest: [...zwiftClimbs].sort((a, b) => b.lengthKm - a.lengthKm)[0],
    }),
    []
  );

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 pb-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Breadcrumbs className="mb-4 sm:mb-6" />

            <AnimatedText delay={100}>
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-zwift-dark/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-purple-500 shadow-sm border border-purple-100 dark:border-purple-900/20 mb-4">
                <Mountain size={16} className="text-purple-500" />
                <span>
                  {totals.count} timed segments across {totals.worlds} worlds
                </span>
              </div>
            </AnimatedText>

            <AnimatedText delay={200}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Every Timed <span className="zwift-gradient-text">Climb</span> in Zwift
              </h1>
            </AnimatedText>

            <AnimatedText delay={300} className="mt-5">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Length, elevation gain and average gradient for every KOM and QOM segment in the game, in one sortable
                table. The reference times are what a 75 kg rider holding 3.5 W/kg would expect, calculated with the
                same model behind the{" "}
                <Link to="/zwift-climb-time-calculator" className="text-zwift-orange hover:underline">
                  climb time calculator
                </Link>
                .
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="py-4 sm:py-6 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-4 sm:p-6">
                {/* World filter */}
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <button
                    type="button"
                    onClick={() => setWorld("all")}
                    aria-pressed={world === "all"}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                      world === "all"
                        ? "bg-zwift-orange text-white"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    All worlds
                  </button>
                  {zwiftWorlds.map((name) => (
                    <button
                      key={name}
                      type="button"
                      onClick={() => setWorld(name)}
                      aria-pressed={world === name}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                        world === name
                          ? "bg-zwift-orange text-white"
                          : "bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <caption className="sr-only">
                      Zwift timed climb segments with length, elevation gain and average gradient
                    </caption>
                    <thead>
                      <tr className="border-b-2 border-border text-left">
                        {(["name", "world", "lengthKm", "elevationM", "avgGradientPct"] as SortKey[]).map((key) => (
                          <th key={key} scope="col" className="py-2 pr-4 font-semibold text-foreground">
                            <button
                              type="button"
                              onClick={() => toggleSort(key)}
                              className="inline-flex items-center gap-1 hover:text-zwift-orange transition-colors"
                              aria-label={`Sort by ${SORT_LABELS[key]}`}
                            >
                              {SORT_LABELS[key]}
                              <ArrowUpDown size={12} className={sortKey === key ? "text-zwift-orange" : "opacity-40"} />
                            </button>
                          </th>
                        ))}
                        <th scope="col" className="py-2 font-semibold text-foreground whitespace-nowrap">
                          At 3.5 W/kg
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((climb) => {
                        const implied = impliedGradientPct(climb);
                        const divergent = Math.abs(implied - climb.avgGradientPct) > 0.4;
                        const time = referenceTime(climb);

                        return (
                          <tr key={`${climb.world}-${climb.name}`} className="border-b border-border">
                            <td className="py-2.5 pr-4 font-medium text-foreground">{climb.name}</td>
                            <td className="py-2.5 pr-4 text-muted-foreground whitespace-nowrap">{climb.world}</td>
                            <td className="py-2.5 pr-4 font-mono text-foreground whitespace-nowrap">
                              {climb.lengthKm} km
                            </td>
                            <td className="py-2.5 pr-4 font-mono text-foreground whitespace-nowrap">
                              {climb.elevationM} m
                            </td>
                            <td className="py-2.5 pr-4 font-mono text-foreground whitespace-nowrap">
                              {climb.avgGradientPct}%
                              {divergent && (
                                <span
                                  className="ml-1 text-muted-foreground"
                                  title={`Gain divided by distance gives ${implied.toFixed(1)}%`}
                                >
                                  *
                                </span>
                              )}
                            </td>
                            <td className="py-2.5 font-mono text-muted-foreground whitespace-nowrap">{time ?? "-"}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                  * The published average gradient and the gain divided by the distance disagree by more than 0.4
                  points, which almost always means the segment contains a descent. Reference times are only shown for
                  segments at least 1 km long and at least 3% average, because below that a result is decided by how
                  hard you can go anaerobically and by the draft, not by sustainable power.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Editorial */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-blue/5 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <AnimatedCard delay={100}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">How to read this table</h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Three numbers describe a climb, and they answer different questions. Length tells you how long you
                    will be riding. Elevation gain tells you how much work you have to do against gravity. Average
                    gradient tells you how hard that work will feel at any moment.
                  </p>
                  <p>
                    Elevation is the one that actually sets the effort. Lifting {80} kg of rider and bike through{" "}
                    {totals.biggest.elevationM} m takes a fixed amount of energy no matter how you spread it out, and
                    on any climb steeper than about 6% that lifting is where more than 90% of your power goes. That is
                    the entire reason power-to-weight ratio, rather than raw watts, decides climbing performance -
                    there is more on the mechanism in{" "}
                    <Link to="/blog/power-to-weight-ratio-science" className="text-zwift-orange hover:underline">
                      the power-to-weight article
                    </Link>
                    .
                  </p>
                  <p>
                    Gradient decides what kind of effort it is. Anything above roughly 8% is a pure grind where drag
                    barely exists and there is nowhere to hide. Between 3% and 6% you are fast enough for the draft to
                    matter and for a group to pull you along. Below 3% a "climb" is really a hard flat effort with a
                    tilt, and races on those segments are won by whoever can produce the biggest one-minute number.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    <div className="rounded-lg border border-border p-4">
                      <p className="text-xs text-muted-foreground mb-1">Most elevation</p>
                      <p className="font-semibold text-foreground">{totals.biggest.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {totals.biggest.elevationM} m over {totals.biggest.lengthKm} km
                      </p>
                    </div>
                    <div className="rounded-lg border border-border p-4">
                      <p className="text-xs text-muted-foreground mb-1">Steepest average</p>
                      <p className="font-semibold text-foreground">{totals.steepest.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {totals.steepest.avgGradientPct}% over {totals.steepest.lengthKm} km
                      </p>
                    </div>
                    <div className="rounded-lg border border-border p-4">
                      <p className="text-xs text-muted-foreground mb-1">Longest</p>
                      <p className="font-semibold text-foreground">{totals.longest.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {totals.longest.lengthKm} km, {totals.longest.elevationM} m
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={200}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">
                  Why there is no maximum gradient column
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    You will find maximum-gradient figures for Zwift climbs quoted all over the internet. Almost none
                    of them trace back to a source. Neither Zwift nor the community reference sites publish a maximum
                    gradient for any timed segment, and the numbers that circulate are usually the average of a
                    particular steep section, which by definition cannot be the maximum of the segment containing it.
                  </p>
                  <p>
                    Rather than fill the column with plausible-looking numbers, it is left out. Where a climb has a
                    genuinely notable steep section, that belongs in prose with the section described honestly, not in
                    a table cell pretending to be data. The same principle applies everywhere on this site and is set
                    out in the{" "}
                    <Link to="/editorial-policy" className="text-zwift-orange hover:underline">
                      editorial policy
                    </Link>
                    .
                  </p>
                  <p>
                    The elevation and length figures here are cross-checked against the community reference list of
                    timed segments. If you spot one that has drifted after a Zwift update,{" "}
                    <Link to="/contact" className="text-zwift-orange hover:underline">
                      let us know
                    </Link>{" "}
                    and it gets fixed.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={300}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">
                  Picking a climb that suits your training
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    A climb is a training tool, and the right one depends on what you are trying to build. Matching the
                    duration of the climb to the duration of the effort you want to train is more useful than picking
                    whichever one is famous.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b-2 border-border text-left">
                          <th scope="col" className="py-2 pr-4 font-semibold text-foreground">
                            If you want to train
                          </th>
                          <th scope="col" className="py-2 pr-4 font-semibold text-foreground">
                            Look for
                          </th>
                          <th scope="col" className="py-2 font-semibold text-foreground">
                            Examples
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="py-2.5 pr-4 text-foreground">Neuromuscular and anaerobic punch</td>
                          <td className="py-2.5 pr-4">Under 1 km, steep</td>
                          <td className="py-2.5 text-muted-foreground">23rd St. KOM, Leg Snapper, Libby Hill</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2.5 pr-4 text-foreground">VO2 max repeats</td>
                          <td className="py-2.5 pr-4">3 to 6 minutes at threshold or above</td>
                          <td className="py-2.5 text-muted-foreground">Radio Tower KOM, Yorkshire KOM, New York KOM</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2.5 pr-4 text-foreground">Threshold work</td>
                          <td className="py-2.5 pr-4">10 to 25 minutes of steady climbing</td>
                          <td className="py-2.5 text-muted-foreground">The Grade KOM, Innsbruck KOM, Epic KOM</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2.5 pr-4 text-foreground">Sustained tempo and pacing discipline</td>
                          <td className="py-2.5 pr-4">45 minutes or more</td>
                          <td className="py-2.5 text-muted-foreground">Alpe du Zwift, Ventoux KOM</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 bg-zwift-blue/10 rounded-lg border border-zwift-blue/30 flex gap-3">
                    <Info size={18} className="text-zwift-blue flex-shrink-0 mt-0.5" />
                    <p className="text-sm">
                      Durations above assume a rider around 3.5 W/kg. If you are well above or below that, scale
                      accordingly - or put your own numbers into the{" "}
                      <Link to="/zwift-climb-time-calculator" className="text-zwift-orange hover:underline font-medium">
                        climb time calculator
                      </Link>{" "}
                      and read the duration off directly.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={400}>
              <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-2xl p-6 md:p-8 border-2 border-zwift-orange/20">
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground">Related</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { to: "/alpeduzwiftcalculator", label: "Alpe du Zwift time calculator" },
                    { to: "/ventop-calculator", label: "Ven-Top time calculator" },
                    { to: "/alpe-vs-ventop", label: "Alpe du Zwift versus Ven-Top" },
                    { to: "/blog/conquer-alpe-du-zwift", label: "How to pace Alpe du Zwift" },
                    { to: "/blog/mastering-ven-top", label: "How to pace Ven-Top" },
                    { to: "/blog/the-data-behind-zwift-climbing", label: "The data behind Zwift climbing" },
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

export default ZwiftClimbs;
