import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Activity, AlertTriangle, ArrowRight, Fan, Gauge, Target, Timer, Zap } from "lucide-react";

import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { AUTHOR } from "@/lib/siteConfig";

/* ------------------------------------------------------------------ *
 * Module-scope data. The calculator, the zone table and every         *
 * reference table below all read from these arrays, so the numbers    *
 * on this page cannot disagree with each other.                       *
 * ------------------------------------------------------------------ */

type Protocol = {
  id: string;
  name: string;
  shortName: string;
  multiplier: number;
  /** Label on the number input, so it is never ambiguous what to type. */
  inputLabel: string;
  /** Typical starting value, used when you switch protocol. */
  defaultRaw: number;
  origin: string;
  effort: string;
  repeatability: string;
  suits: string;
};

const PROTOCOLS: Protocol[] = [
  {
    id: "20min",
    name: "20-minute test (Allen & Coggan)",
    shortName: "20-min test",
    multiplier: 0.95,
    inputLabel: "Average watts for your 20-minute effort",
    defaultRaw: 260,
    origin: "Allen & Coggan",
    effort: "One maximal, self-paced 20-minute effort after a full warm-up",
    repeatability: "Good if you can pace, poor if you cannot",
    suits: "Riders who already know roughly what they can hold",
  },
  {
    id: "8min",
    name: "8-minute test (2 x 8 min)",
    shortName: "8-min test",
    multiplier: 0.9,
    inputLabel: "Watts for your 8-minute effort (see the note below on which one)",
    defaultRaw: 274,
    origin: "CTS / Chris Carmichael, not Coggan",
    effort: "Two maximal 8-minute efforts, 10 minutes easy between them",
    repeatability: "Reasonable, but the two efforts rarely match",
    suits: "Riders who cannot face a single 20-minute effort",
  },
  {
    id: "ramp",
    name: "Ramp test (MAP test)",
    shortName: "ramp test",
    multiplier: 0.75,
    inputLabel: "Your best 1-minute average watts in the ramp",
    defaultRaw: 329,
    origin: "Maximal aerobic power protocols",
    effort: "Steps up until you cannot turn the pedals, with no pacing decisions at all",
    repeatability: "Very high, because there is nothing to pace",
    suits: "First-time testers and anyone who paces badly",
  },
  {
    id: "60min",
    name: "60-minute test / 40 km time trial",
    shortName: "60-minute test",
    multiplier: 1,
    inputLabel: "Average watts for the full hour",
    defaultRaw: 247,
    origin: "Coggan's primary definition",
    effort: "The highest of any test here, and the hardest to schedule",
    repeatability: "High, but few riders repeat it often enough to find out",
    suits: "Time triallists, long-climb specialists, anyone who wants no argument",
  },
  {
    id: "friel30",
    name: "Joe Friel 30-minute time trial",
    shortName: "Friel 30-min TT",
    multiplier: 1,
    inputLabel: "Average watts for the FINAL 20 minutes of the 30-minute effort",
    defaultRaw: 247,
    origin: "Joe Friel",
    effort: "30 minutes solo, with the first 10 minutes deliberately restrained",
    repeatability: "Good, and the pacing rule is easier to follow than the 20-minute one",
    suits: "Riders who want a threshold number without a correction factor",
  },
  {
    id: "20km",
    name: "Coggan 20 km time trial",
    shortName: "20 km TT",
    multiplier: 0.93,
    inputLabel: "Average watts for the 20 km time trial",
    defaultRaw: 266,
    origin: "Coggan's own 2003 correction factor",
    effort: "Half the distance of the 40 km test Coggan brackets at 50 to 70 minutes",
    repeatability: "Good on a fixed course or a fixed Zwift route",
    suits: "Riders who already do 20 km efforts and want to reuse them",
  },
  {
    id: "zwift-ftp",
    name: "Zwift FTP Test (and FTP Test shorter)",
    shortName: "Zwift FTP Test",
    multiplier: 0.95,
    inputLabel: "Average watts for the 20-minute test interval",
    defaultRaw: 260,
    origin: "Zwift's in-game workout",
    effort: "Same as the 20-minute test, with a guided warm-up built in",
    repeatability: "Good, and the warm-up is identical every time",
    suits: "Anyone testing inside Zwift who wants the standard number",
  },
  {
    id: "zwift-ramp",
    name: "Zwift Ramp Test (and Ramp Test Lite)",
    shortName: "Zwift Ramp Test",
    multiplier: 0.75,
    inputLabel: "Your highest 1-minute average watts in the ramp",
    defaultRaw: 329,
    origin: "Zwift's in-game workout, ERG controlled",
    effort: "Ride until you cannot turn the pedals, seated throughout",
    repeatability: "Very high, ERG removes every decision",
    suits: "New Zwifters, and Ramp Test Lite for riders under 60 kg",
  },
];

type Zone = {
  n: number;
  name: string;
  lowPct: number | null;
  highPct: number | null;
  pctLabel: string;
  hr: string;
  rpe: string;
  duration: string;
  purpose: string;
};

/** Coggan's published seven-zone model. Percentages are his, not a third-party rounding. */
const ZONES: Zone[] = [
  {
    n: 1,
    name: "Active Recovery",
    lowPct: null,
    highPct: 55,
    pctLabel: "under 55%",
    hr: "under 68%",
    rpe: "under 2",
    duration: "30-60+ min",
    purpose:
      "Warm-up, cool-down and the easy spinning between intervals. On its own it is too low to drive significant adaptation.",
  },
  {
    n: 2,
    name: "Endurance",
    lowPct: 56,
    highPct: 75,
    pctLabel: "56-75%",
    hr: "69-83%",
    rpe: "2-3",
    duration: "60 min to 5+ hours",
    purpose: "All-day pace and the backbone of aerobic volume. Conversation is comfortable throughout.",
  },
  {
    n: 3,
    name: "Tempo",
    lowPct: 76,
    highPct: 90,
    pctLabel: "76-90%",
    hr: "84-94%",
    rpe: "3-4",
    duration: "20-60+ min blocks",
    purpose: "Spirited group-ride pace. Breathing is deeper and holding a conversation becomes work.",
  },
  {
    n: 4,
    name: "Lactate Threshold",
    lowPct: 91,
    highPct: 105,
    pctLabel: "91-105%",
    hr: "95-105%",
    rpe: "4-5",
    duration: "Repeats of 10-30 min",
    purpose: "Just below to just above time-trial effort. Physically hard and mentally taxing.",
  },
  {
    n: 5,
    name: "VO2 Max",
    lowPct: 106,
    highPct: 120,
    pctLabel: "106-120%",
    hr: "over 106%",
    rpe: "6-7",
    duration: "3-8 min intervals, usually 4-6 repeats",
    purpose: "Severe fatigue within a couple of minutes and conversation is impossible.",
  },
  {
    n: 6,
    name: "Anaerobic Capacity",
    lowPct: 121,
    highPct: null,
    pctLabel: "over 121%",
    hr: "not useful",
    rpe: "over 7",
    duration: "30 seconds to 3 min",
    purpose:
      "Coggan's table gives a lower bound only. The 121-150% ceiling you see everywhere is a later third-party convention, not his published figure.",
  },
  {
    n: 7,
    name: "Neuromuscular Power",
    lowPct: null,
    highPct: null,
    pctLabel: "not defined",
    hr: "not useful",
    rpe: "maximal",
    duration: "Under 30 sec, often 5-15 sec",
    purpose:
      "Coggan's table prints N/A for power, because power is not a meaningful percentage of FTP at this duration. The widely quoted 'over 150% of FTP' is a third-party convention, not his figure.",
  },
];

type Band = {
  label: string;
  context: string;
  men: [number, number];
  women: [number, number];
};

/**
 * Coggan's power profile chart for FTP in W/kg. This is an expert-derived
 * reference scale built by anchoring the extremes to known world-champion and
 * untrained performance and interpolating between them. It is not a measured
 * population distribution.
 */
const POWER_PROFILE: Band[] = [
  { label: "World class", context: "international professional", men: [5.69, 6.4], women: [5.03, 5.69] },
  { label: "Exceptional", context: "domestic professional", men: [5.15, 5.6], women: [4.54, 4.95] },
  { label: "Excellent", context: "category 1", men: [4.62, 5.07], women: [4.05, 4.46] },
  { label: "Very good", context: "category 2", men: [4.09, 4.53], women: [3.55, 3.97] },
  { label: "Good", context: "category 3", men: [3.55, 4.0], women: [3.06, 3.47] },
  { label: "Moderate", context: "category 4", men: [3.02, 3.47], women: [2.57, 2.98] },
  { label: "Fair", context: "category 5", men: [2.49, 2.93], women: [2.08, 2.49] },
  { label: "Untrained", context: "non-racer", men: [1.86, 2.4], women: [1.5, 1.99] },
];

/** Cycling Analytics, June 2018: 20-minute best power from thousands of male power-meter users. */
const REAL_WORLD_MEN = [
  { percentile: "5th", watts: "202 W" },
  { percentile: "10th", watts: "222 W" },
  { percentile: "25th", watts: "about 250 W" },
  { percentile: "50th (median)", watts: "286 W" },
  { percentile: "70th", watts: "312 W" },
  { percentile: "90th", watts: "349 W" },
  { percentile: "95th", watts: "375 W" },
];

const LADDER_WKG = [2.0, 2.5, 3.0, 3.2, 3.5, 4.0, 4.5, 5.0, 5.5];

type Scale = "men" | "women";

function bandFor(wkg: number, scale: Scale): Band | null {
  return POWER_PROFILE.find((band) => wkg >= band[scale][0]) ?? null;
}

function zoneRange(zone: Zone, ftp: number): string {
  if (zone.lowPct === null && zone.highPct === null) return "Not a % of FTP";
  if (zone.lowPct === null && zone.highPct !== null) return `up to ${Math.round((ftp * zone.highPct) / 100)} W`;
  if (zone.lowPct !== null && zone.highPct === null) return `${Math.round((ftp * zone.lowPct) / 100)} W and up`;
  return `${Math.round((ftp * (zone.lowPct as number)) / 100)} - ${Math.round((ftp * (zone.highPct as number)) / 100)} W`;
}

const ZONE_BY_NUMBER = new Map<number, Zone>(ZONES.map((zone) => [zone.n, zone]));

/** Summary tiles read the same zone definitions as the table, so they cannot drift apart. */
function zoneWatts(n: number, ftp: number): string {
  const zone = ZONE_BY_NUMBER.get(n);
  return zone ? zoneRange(zone, ftp) : "";
}

const linkClass = "text-zwift-orange hover:underline";

/** The range the raw-power box advertises with `min`/`max`, enforced in code too. */
const RAW_WATTS = { min: 50, max: 900 };

/**
 * The box holds a string so it can be cleared and retyped, and the number the
 * calculator uses is clamped to the advertised range. Without the clamp an
 * empty box reads as 0 W and a typed minus sign produces a negative FTP and a
 * whole zone table of negative watts.
 */
function clampWatts(raw: string): number {
  const parsed = Number(raw);
  if (!Number.isFinite(parsed) || raw.trim() === "") return RAW_WATTS.min;
  return Math.min(RAW_WATTS.max, Math.max(RAW_WATTS.min, parsed));
}

const ZwiftFtpCalculator = () => {
  const [protocolId, setProtocolId] = useState(PROTOCOLS[0].id);
  const [rawWattsInput, setRawWattsInput] = useState(String(PROTOCOLS[0].defaultRaw));
  const [weightKg, setWeightKg] = useState(75);
  const [scale, setScale] = useState<Scale>("men");

  const rawWatts = clampWatts(rawWattsInput);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const protocol = useMemo(
    () => PROTOCOLS.find((p) => p.id === protocolId) ?? PROTOCOLS[0],
    [protocolId]
  );

  const ftp = Math.round(rawWatts * protocol.multiplier);
  const wkg = ftp / weightKg;
  const band = bandFor(wkg, scale);
  const topOfScale = POWER_PROFILE[0][scale][1];
  const bottomOfScale = POWER_PROFILE[POWER_PROFILE.length - 1][scale][0];

  const zoneRows = useMemo(
    () => ZONES.map((zone) => ({ zone, range: zoneRange(zone, ftp) })),
    [ftp]
  );

  const ladderRows = useMemo(
    () =>
      LADDER_WKG.map((target) => {
        const targetFtp = Math.round(target * weightKg);
        return {
          target,
          targetFtp,
          rawNeeded: Math.round(targetFtp / protocol.multiplier),
          bandLabel: bandFor(target, scale)?.label ?? "Below the published scale",
        };
      }),
    [weightKg, protocol, scale]
  );

  const handleProtocolChange = (id: string) => {
    setProtocolId(id);
    const next = PROTOCOLS.find((p) => p.id === id);
    if (next) setRawWattsInput(String(next.defaultRaw));
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 pb-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-orange/10 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs className="mb-4 sm:mb-6" />

            <AnimatedText delay={100}>
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-zwift-dark/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-zwift-orange shadow-sm border border-orange-100 dark:border-orange-900/20 mb-4">
                <Zap size={16} className="text-zwift-orange" />
                <span>{PROTOCOLS.length} test protocols, one set of zones</span>
              </div>
            </AnimatedText>

            <AnimatedText delay={200}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Zwift <span className="zwift-gradient-text">FTP</span> Calculator and Training Zones
              </h1>
            </AnimatedText>

            <AnimatedText delay={300} className="mt-5">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Put in the raw number from whichever test you did, and this turns it into an FTP in watts, an FTP in
                W/kg, and the full Coggan seven-zone table in your own watts. Every multiplier it uses is printed next
                to the result, so you can check the arithmetic yourself. What it will not do is tell you your FTP
                without a test - there is no way to guess this number from your weight, your age or your ride history.
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
                      <Label htmlFor="protocol" className="text-sm font-semibold">
                        Which test did you do?
                      </Label>
                      <select
                        id="protocol"
                        value={protocolId}
                        onChange={(event) => handleProtocolChange(event.target.value)}
                        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zwift-orange"
                      >
                        {PROTOCOLS.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                      <p className="mt-2 text-xs text-muted-foreground">
                        This test multiplies your effort by {protocol.multiplier.toFixed(2)}. Changing the protocol
                        resets the box below to the raw number that test would need in order to produce the same FTP,
                        which is the quickest way to see that a 1-minute ramp figure and a 20-minute average are not
                        the same kind of number at all.
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="raw" className="text-sm font-semibold">
                        {protocol.inputLabel}
                      </Label>
                      <Input
                        id="raw"
                        type="number"
                        inputMode="numeric"
                        min={RAW_WATTS.min}
                        max={RAW_WATTS.max}
                        step={1}
                        value={rawWattsInput}
                        onChange={(event) => setRawWattsInput(event.target.value)}
                        onBlur={() => setRawWattsInput(String(rawWatts))}
                        className="mt-2"
                      />
                      <p className="mt-2 text-xs text-muted-foreground">
                        Use average power for the interval, not normalised power. Normalised power inflates any effort
                        that was not perfectly steady, which is exactly the effort a test is trying to measure.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-baseline justify-between">
                        <Label htmlFor="weight" className="text-sm font-semibold">
                          Your weight
                        </Label>
                        <span className="font-mono text-sm text-zwift-orange">{weightKg} kg</span>
                      </div>
                      <Slider
                        id="weight"
                        className="mt-3"
                        min={40}
                        max={130}
                        step={1}
                        value={[weightKg]}
                        onValueChange={(value) => setWeightKg(value[0])}
                      />
                      <p className="mt-2 text-xs text-muted-foreground">
                        Weight only affects the W/kg figure and the power-profile band. Your zones in watts do not
                        change with weight.
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="scale" className="text-sm font-semibold">
                        Power profile scale
                      </Label>
                      <select
                        id="scale"
                        value={scale}
                        onChange={(event) => setScale(event.target.value as Scale)}
                        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zwift-orange"
                      >
                        <option value="men">Men&apos;s chart</option>
                        <option value="women">Women&apos;s chart</option>
                      </select>
                      <p className="mt-2 text-xs text-muted-foreground">
                        Coggan published separate columns for men and women. This only changes the comparison band, not
                        your FTP or your zones.
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-5">
                    <div className="rounded-xl bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 border-2 border-zwift-orange/30 p-6 text-center">
                      <p className="text-sm font-medium text-muted-foreground mb-1">Your FTP</p>
                      <p className="text-5xl font-bold font-mono text-foreground">{ftp} W</p>
                      <p className="mt-2 font-mono text-sm text-muted-foreground">
                        {rawWatts} W &times; {protocol.multiplier.toFixed(2)} = {ftp} W
                      </p>
                    </div>

                    <dl className="grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-lg border border-border p-3">
                        <dt className="flex items-center text-xs text-muted-foreground mb-1">
                          <Gauge size={13} className="mr-1.5" /> Power-to-weight
                        </dt>
                        <dd className="font-mono font-semibold text-foreground">{wkg.toFixed(2)} W/kg</dd>
                      </div>
                      <div className="rounded-lg border border-border p-3">
                        <dt className="flex items-center text-xs text-muted-foreground mb-1">
                          <Timer size={13} className="mr-1.5" /> Threshold (Z4)
                        </dt>
                        <dd className="font-mono font-semibold text-foreground">{zoneWatts(4, ftp)}</dd>
                      </div>
                      <div className="rounded-lg border border-border p-3">
                        <dt className="flex items-center text-xs text-muted-foreground mb-1">
                          <Activity size={13} className="mr-1.5" /> Endurance (Z2)
                        </dt>
                        <dd className="font-mono font-semibold text-foreground">{zoneWatts(2, ftp)}</dd>
                      </div>
                      <div className="rounded-lg border border-border p-3">
                        <dt className="flex items-center text-xs text-muted-foreground mb-1">
                          <Target size={13} className="mr-1.5" /> VO2 max (Z5)
                        </dt>
                        <dd className="font-mono font-semibold text-foreground">{zoneWatts(5, ftp)}</dd>
                      </div>
                    </dl>

                    <div className="rounded-lg border border-border p-4">
                      <p className="text-xs font-semibold text-foreground mb-2">
                        Where {wkg.toFixed(2)} W/kg sits on the Coggan power profile
                      </p>
                      {band ? (
                        <p className="text-sm text-foreground">
                          Approximately the <strong>{band.label}</strong> band ({band.context}), which runs roughly{" "}
                          <span className="font-mono">
                            {band[scale][0].toFixed(1)} - {band[scale][1].toFixed(1)}
                          </span>{" "}
                          W/kg on the {scale === "men" ? "men's" : "women's"} chart.
                          {wkg > band[scale][1] && wkg <= topOfScale
                            ? " You are just above the printed top of that band, in the gap between it and the one above, which is exactly the region the chart cannot resolve."
                            : ""}
                        </p>
                      ) : (
                        <p className="text-sm text-foreground">
                          Below the bottom anchor of the published chart, which is{" "}
                          <span className="font-mono">{bottomOfScale.toFixed(2)}</span> W/kg on the{" "}
                          {scale === "men" ? "men's" : "women's"} scale. That is a starting point, not a verdict.
                        </p>
                      )}
                      {wkg > topOfScale && (
                        <p className="mt-2 text-sm text-foreground">
                          This is above the top anchor of the chart ({topOfScale.toFixed(2)} W/kg). Check your weight
                          entry and your power source before you celebrate.
                        </p>
                      )}
                      <p className="mt-2 text-xs text-muted-foreground">
                        Treat the band as approximate. The internal boundaries on the original chart are ambiguous by
                        roughly 0.09 W/kg because the category braces overlap in the graphic, so only the outer anchors
                        are unambiguous: {POWER_PROFILE[POWER_PROFILE.length - 1].men[0].toFixed(2)} to{" "}
                        {POWER_PROFILE[0].men[1].toFixed(2)} W/kg for men and{" "}
                        {POWER_PROFILE[POWER_PROFILE.length - 1].women[0].toFixed(2)} to{" "}
                        {POWER_PROFILE[0].women[1].toFixed(2)} for women.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Zone table, computed from the FTP above */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h2 className="text-lg font-bold mb-3 text-foreground">
                    Your Coggan training zones at {ftp} W
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Percentages, heart-rate ranges and perceived-effort ratings are Coggan&apos;s published figures.
                    The watt columns are those percentages applied to your FTP, rounded to the nearest watt.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b-2 border-border text-left">
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            Zone
                          </th>
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            % of FTP
                          </th>
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            Your watts
                          </th>
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            HR / RPE
                          </th>
                          <th scope="col" className="py-2 text-left font-semibold text-foreground">
                            What it is for
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {zoneRows.map(({ zone, range }) => (
                          <tr key={zone.n} className="border-b border-border align-top">
                            <td className="py-2 pr-4 font-semibold text-foreground whitespace-nowrap">
                              Z{zone.n} {zone.name}
                            </td>
                            <td className="py-2 pr-4 font-mono text-muted-foreground whitespace-nowrap">
                              {zone.pctLabel}
                            </td>
                            <td className="py-2 pr-4 font-mono font-semibold text-foreground whitespace-nowrap">
                              {range}
                            </td>
                            <td className="py-2 pr-4 text-muted-foreground whitespace-nowrap">
                              {zone.hr} / {zone.rpe}
                            </td>
                            <td className="py-2 text-muted-foreground">
                              <span className="block text-foreground">{zone.duration}</span>
                              {zone.purpose}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Reverse table: what you would have to average to hit a target */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h2 className="text-lg font-bold mb-3 text-foreground">
                    What you would need to average in the {protocol.shortName}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Same weight, same protocol, run backwards. This is the calculator&apos;s own arithmetic in reverse:
                    target W/kg times {weightKg} kg gives the FTP, and dividing by{" "}
                    {protocol.multiplier.toFixed(2)} gives the raw test number that would produce it.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b-2 border-border text-left">
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            Target W/kg
                          </th>
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            FTP at {weightKg} kg
                          </th>
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            Raw {protocol.shortName} number
                          </th>
                          <th scope="col" className="py-2 text-left font-semibold text-foreground">
                            Power profile band
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {ladderRows.map((row) => (
                          <tr key={row.target} className="border-b border-border">
                            <td className="py-2 pr-4 font-mono font-semibold text-foreground">
                              {row.target.toFixed(1)}
                            </td>
                            <td className="py-2 pr-4 font-mono text-foreground">{row.targetFtp} W</td>
                            <td className="py-2 pr-4 font-mono text-muted-foreground">{row.rawNeeded} W</td>
                            <td className="py-2 text-muted-foreground">{row.bandLabel}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">
                    The 3.2 W/kg row is there for a reason: that is roughly where the hour mark on Alpe du Zwift sits
                    for a mid-weight rider. Check it against the{" "}
                    <Link to="/alpeduzwiftcalculator" className={linkClass}>
                      Alpe du Zwift calculator
                    </Link>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The writing */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-blue/5 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <AnimatedCard delay={100}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">
                  What FTP is, and what it is not
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Functional threshold power is the highest power you can hold in a quasi-steady state for roughly an
                    hour. Andrew Coggan, who introduced the term to cyclists, was blunt about how to find it:
                    &quot;probably the easiest and most direct way of estimating a rider&apos;s functional threshold
                    power is to simply measure their average power during a ~40 km (50-70 min) TT.&quot; Every other
                    protocol on this page is a shortcut to that hour, and every multiplier is an admission that the
                    shortcut is not the thing itself.
                  </p>
                  <p>
                    What FTP is not is a fitness score. It is one point on a power-duration curve that runs from a
                    standing-start sprint out to an all-day ride, and a single point cannot describe a curve. Two
                    riders can test at exactly the same FTP and be completely different athletes. One has a huge
                    sprint and a large anaerobic capacity, and comes apart once the effort stretches much past an
                    hour. The other has almost no sprint and is still riding strongly deep into a long day. On a Zwift
                    crit those two have almost nothing in common, and their identical FTP tells you nothing about
                    which one wins. This is also why the zone table below matters more than the single headline
                    number: the zones are what you actually train in, and the headline number only sets their scale.
                  </p>
                  <p>
                    FTP also is not a ranking. The Coggan power profile in the calculator above is an expert-derived
                    reference scale, not a percentile of the riding population. Coggan built it by anchoring the
                    extremes to known world-champion and untrained performance and interpolating between them, which
                    means the bands in the middle are informed judgement rather than measurement. That is a perfectly
                    reasonable way to build a coaching tool, and it is a bad way to work out whether you are
                    &quot;above average&quot;.
                  </p>
                  <p>
                    Finally, FTP is not a fixed property of your body that holds still. It moves with heat, with
                    sleep, with how much training load you are carrying, and with the time of day. A number measured
                    on the last day of a recovery week and the same number measured on the fourth day of a hard block
                    are not the same measurement, even if the same rider produced both.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={150}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">
                  Every protocol, compared honestly
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b-2 border-border text-left">
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            Test
                          </th>
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            Multiplier
                          </th>
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            Origin
                          </th>
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            What it costs you
                          </th>
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            Repeatability
                          </th>
                          <th scope="col" className="py-2 text-left font-semibold text-foreground">
                            Who it suits
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {PROTOCOLS.map((row) => (
                          <tr key={row.id} className="border-b border-border align-top">
                            <td className="py-2 pr-4 font-semibold text-foreground">{row.shortName}</td>
                            <td className="py-2 pr-4 font-mono text-foreground whitespace-nowrap">
                              &times; {row.multiplier.toFixed(2)}
                            </td>
                            <td className="py-2 pr-4">{row.origin}</td>
                            <td className="py-2 pr-4">{row.effort}</td>
                            <td className="py-2 pr-4">{row.repeatability}</td>
                            <td className="py-2">{row.suits}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-bold text-foreground pt-2">The 20-minute test</h3>
                  <p>
                    FTP is 95% of your average power for a single maximal, self-paced 20-minute effort. The 5% haircut
                    removes the anaerobic contribution that lets a 20-minute effort sit above true hour power. It is
                    the most widely used test in cycling, and its weakness is not physiological - it is that the result
                    is only ever as good as your pacing.
                  </p>
                  <p>
                    Start too hot and you fade in the closing minutes, and the average comes out lower than if you had
                    ridden the whole thing flat. Start too conservatively and you finish with something left, which
                    produces a genuinely low number rather than a wrong one. Either way, the test punishes
                    inexperience, which is exactly the group most likely to be doing their first test. If you have
                    never held a hard effort for 20 minutes, do a ramp test first and use it to learn what your target
                    should be.
                  </p>

                  <h3 className="text-xl font-bold text-foreground pt-2">The 8-minute test</h3>
                  <p>
                    Two maximal 8-minute efforts separated by 10 minutes of easy spinning, then FTP is 90% of the
                    8-minute power. This one came from CTS and Chris Carmichael, not from Coggan, which matters because
                    it is routinely miscredited. The deeper 10% haircut exists because eight minutes carries a larger
                    anaerobic contribution than twenty does.
                  </p>
                  <p>
                    There is an implementation split worth knowing about. CTS multiplies the <em>higher</em> of the two
                    8-minute averages by 0.90. Most apps average the two efforts first and then multiply. If your two
                    efforts were 320 W and 300 W, the CTS method gives 288 W and the averaging method gives 279 W.
                    That 9 W gap is produced by bookkeeping, not by physiology, and it is the kind of margin riders
                    spend a whole training block chasing. Pick one convention, write it down, and never mix them.
                  </p>

                  <h3 className="text-xl font-bold text-foreground pt-2">The ramp test</h3>
                  <p>
                    Start at 100 W, add 20 W every minute, ride until you cannot turn the pedals, then take 75% of
                    your best 1-minute power. The 75% approximates the ratio between threshold power and maximal
                    aerobic power. It is the cheapest test on this page in every sense: it needs no pacing skill, it is
                    the shortest of the lot, and it is extremely repeatable because there is nothing to get wrong. How
                    long it lasts is set by the ramp itself, not by you - each step adds 20 W, so a stronger rider
                    simply climbs more steps before failing.
                  </p>
                  <p>
                    Its failure mode is systematic and worth taking seriously. A rider with a big anaerobic capacity
                    can keep grinding through two or three extra steps on anaerobic contribution alone, which lifts
                    their best minute and hands them an FTP they cannot hold for an hour. Sprinters and track riders
                    consistently get flattered by the ramp. In the other direction, a diesel with a small anaerobic
                    capacity fails the ramp early despite a genuinely high threshold and gets under-rated. If your ramp
                    result gives you zones where Z3 tempo work feels like the Z5 intervals in the table above, that is
                    the mechanism, and the fix is a longer test rather than more willpower.
                  </p>

                  <h3 className="text-xl font-bold text-foreground pt-2">The 60-minute test and the 20 km TT</h3>
                  <p>
                    A 60-minute test or a ~40 km time trial has a multiplier of 1.00 for the simple reason that it is
                    not an estimate at all. This is Coggan&apos;s primary definition, and everything else is derived
                    from it. It costs the most, it is the hardest to schedule, and almost nobody repeats it often
                    enough to track a training block. But there is nothing to argue about afterwards.
                  </p>
                  <p>
                    Coggan also published a 0.93 factor for a 20 km time trial, half the distance of the ~40 km effort
                    he brackets at 50 to 70 minutes. It is the most convenient option here if you already ride a fixed
                    20 km course or Zwift route, because the effort exists in your history whether or not you called
                    it a test.
                  </p>

                  <h3 className="text-xl font-bold text-foreground pt-2">The Joe Friel 30-minute test</h3>
                  <p>
                    Ride 30 minutes solo as hard as you can hold, then take the average power of the{" "}
                    <em>final 20 minutes</em> with no correction factor at all. Friel&apos;s reasoning is that a solo
                    test is already about 5% self-limited by the absence of race motivation, so the haircut is built
                    into the situation rather than applied afterwards. His pacing instruction is the most useful
                    sentence in any test protocol: the first 10 minutes should feel almost too easy. Because only the
                    last 20 minutes count, a restrained opening costs you nothing and protects the part that does.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={200}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">
                  Why the multipliers exist, and why they are rules of thumb
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Any effort shorter than an hour includes an anaerobic contribution that you could not sustain for
                    an hour. The shorter the test, the bigger that contribution, and the bigger the haircut needed to
                    strip it out. That is the whole logic of the ladder: 1.00 at an hour, 0.95 at twenty minutes, 0.90
                    at eight minutes, 0.75 off a one-minute maximum in a ramp.
                  </p>
                  <p>
                    What those numbers are not is physiological constants. They are population averages applied to an
                    individual, and the size of your own anaerobic contribution is exactly the thing they cannot see.
                    The best evidence that even the author treated them as rules of thumb is the 20 km factor: Coggan
                    published 0.93 for a 20 km time trial. Twenty kilometres is a <em>distance</em>, not a duration.
                    Coggan&apos;s own bracket for the ~40 km version is 50 to 70 minutes, which is a 40% spread in
                    duration for one fixed distance, and the same spread exists at 20 km. So one flat correction
                    factor is being applied to a strong rider&apos;s effort and to a much longer one from a slower
                    rider, even though duration is precisely the variable the factor is supposed to be correcting for.
                    Nobody derives a physiological constant that way. You derive a useful approximation that way,
                    publish it, and expect coaches to sanity-check it against the athlete in front of them.
                  </p>
                  <p>
                    The practical consequence is that switching protocols mid-season is worse than useless. If you
                    ramp-test in January and 20-minute test in March, the difference between the two numbers is mostly
                    protocol, not fitness. The reverse table in the calculator shows how large that effect is: hold
                    the target FTP and the weight fixed, switch the protocol, and the raw number you have to produce
                    moves by more than a season of honest training would move it.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={250}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">
                  Zwift&apos;s own tests, The Grade, and zFTP
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Zwift ships two families of test workout. The <strong>FTP Test</strong> and the shorter version
                    both take 95% of a 20-minute test interval, so they are the Allen and Coggan protocol with a
                    guided warm-up attached. The <strong>Ramp Test</strong> starts at 100 W, adds 20 W a minute in ERG
                    mode, asks you to stay seated, and takes 75% of your highest 1-minute average.{" "}
                    <strong>Ramp Test Lite</strong> uses the same 0.75 calculation but starts at 50 W and steps up 10
                    W a minute, which is designed for riders under about 60 kg or with an FTP below roughly 175 W. If
                    you are a lighter rider and the standard ramp feels like it starts halfway up your range, that is
                    because it does.
                  </p>
                  <p>
                    <strong>The Grade</strong> is different again. It is a 3.5 km segment averaging 8.6%, launched
                    with the June 2024 Watopia expansion, and instead of one fixed multiplier Zwift applies a
                    duration-dependent curve running from roughly 85% to 100%, built from over 700,000 historical
                    Zwift FTP tests. At a 20-minute completion time the multiplier lands at about 0.95, which is why
                    it is not offered as a fixed option in the calculator above: your multiplier depends on how long
                    you took, so a single dropdown entry would be misleading. If you tested on The Grade, take the
                    number Zwift gave you.
                  </p>
                  <p>
                    <strong>zFTP is not a test at all.</strong> Since December 2024 Zwift has detected your threshold
                    passively, modelling it from your power-duration curve using efforts of roughly 8 to 60 minutes
                    during normal riding. There is no fixed multiplier to reproduce, which is why this calculator does
                    not offer one.
                  </p>
                  <p>
                    That also explains why zFTP disagrees with your test result. A tested FTP is one controlled effort
                    on one day. zFTP is a curve fitted to whatever your recent hard riding happened to contain. If
                    your last month included a race where you sat above threshold for twelve minutes on a wheel, the
                    model has better data than your test did and zFTP goes up. If you have spent six weeks doing
                    endurance rides and 30-second sprints, the model has nothing in the 8 to 60 minute window to fit
                    and it will drift or lag. Neither number is lying. They are answering slightly different
                    questions, and the tested one is the one you should set your workout zones from.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={300}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">Which test should you use?</h2>

                <ul className="space-y-4 text-muted-foreground leading-relaxed list-disc list-outside ml-5">
                  <li>
                    <strong className="text-foreground">You have never tested before.</strong> Ramp test. You cannot
                    pace what you have never held, and the ramp removes pacing from the equation entirely. Use the
                    result to set a target for a 20-minute test later.
                  </li>
                  <li>
                    <strong className="text-foreground">You are under 60 kg, or your FTP is probably under 175 W.</strong>{" "}
                    Ramp Test Lite. The standard ramp opens at 100 W and steps by 20 W, and for a rider under 60 kg
                    that is already a meaningful fraction of threshold before the test has properly begun. Lite starts
                    at 50 W and steps by 10 W, which puts far more of the ramp inside your actual range.
                  </li>
                  <li>
                    <strong className="text-foreground">You want the number everyone else quotes.</strong> The
                    20-minute test. It is the common currency, and if you are comparing yourself to a training plan,
                    a race category or a friend, this is the one they used.
                  </li>
                  <li>
                    <strong className="text-foreground">You dread the 20-minute test.</strong> Friel&apos;s 30-minute
                    test. Counter-intuitively, letting the first 10 minutes be easy makes the whole session more
                    approachable, and it removes the correction factor argument entirely.
                  </li>
                  <li>
                    <strong className="text-foreground">You are training for a long climb or a long event.</strong>{" "}
                    The 60-minute test. If your goal effort is an hour of steady climbing, measure an hour of steady
                    climbing. Everything else is inference.
                  </li>
                  <li>
                    <strong className="text-foreground">You want to track small changes over a season.</strong> Pick
                    one protocol and never change it. The difference between two protocols is larger than six weeks of
                    honest training gains, so consistency of method matters more than which method you chose.
                  </li>
                </ul>

                <p className="mt-5 text-muted-foreground leading-relaxed">
                  If you are testing because you want to know which race category you belong in, the number you need
                  next is W/kg rather than watts - the{" "}
                  <Link to="/zwift-racing-category-calculator" className={linkClass}>
                    racing category calculator
                  </Link>{" "}
                  turns this result into a category, and{" "}
                  <Link to="/blog/zwift-racing-for-beginners" className={linkClass}>
                    racing for beginners
                  </Link>{" "}
                  covers what happens after the start pen.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={350}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">
                  How to actually execute a 20-minute test
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Most bad FTP numbers are bad executions, not bad protocols. This is the sequence that produces a
                    number you can trust.
                  </p>

                  <ol className="space-y-4 list-decimal list-outside ml-5">
                    <li>
                      <strong className="text-foreground">Arrive fresh.</strong> Come off an easy day, ideally the
                      last day of a recovery week. Testing deep inside a hard block measures your fatigue, not your
                      fitness, and you will then train off that fatigue for the next two months.
                    </li>
                    <li>
                      <strong className="text-foreground">Set the room up first.</strong> Fan pointed at your chest
                      and face, room as cool as you can get it, bottle within reach, phone on silent. Heat is the
                      single largest controllable variable in an indoor test - see the section below for the numbers.
                    </li>
                    <li>
                      <strong className="text-foreground">Warm up properly, and longer than feels necessary.</strong>{" "}
                      Build from easy spinning in Z1 up into Z2 and then briefly into Z3, add a few short bursts at
                      high cadence with easy spinning between them, then drop back to Z1 until your breathing has
                      settled and your legs feel clear rather than heavy. A cold rider produces a low number, and the
                      penalty for under-warming is far larger than the cost of ten extra easy minutes.
                    </li>
                    <li>
                      <strong className="text-foreground">Turn ERG mode off.</strong> ERG holds a fixed wattage and
                      fights you when you fade or surge. A test is a self-paced effort, so you need slope or level
                      mode and control of your own power.
                    </li>
                    <li>
                      <strong className="text-foreground">Pick your opening target before you start.</strong> The test
                      is arithmetically self-defining: to reproduce a previous FTP you need a 20-minute average of
                      that FTP divided by 0.95, so open there and not above it. If you have no previous number, do a
                      ramp test first and run its result through the calculator to get the target.
                    </li>
                    <li>
                      <strong className="text-foreground">Minutes 0-5: it should feel sustainable.</strong> Hard, but
                      clearly something you could keep doing. If you are already grimacing at minute three you have
                      opened above your real ceiling, and the correct response is to back the power off immediately
                      rather than to hope. A corrected pace still gives you a usable number; a blow-up does not.
                    </li>
                    <li>
                      <strong className="text-foreground">Minutes 5-15: hold it and stop looking at the number.</strong>{" "}
                      This is the part that decides the test. Chasing a dip with a surge costs more than the dip did.
                    </li>
                    <li>
                      <strong className="text-foreground">Minutes 15-20: spend everything left.</strong> Lift from
                      minute 17 if you can, and empty yourself in the last 60 seconds. If you could have gone harder
                      in the final minute, the number is honest but conservative.
                    </li>
                    <li>
                      <strong className="text-foreground">Take average power for the interval.</strong> Not
                      normalised power, which inflates any effort that was not perfectly steady. Then multiply by
                      0.95, or put the raw number into the calculator above.
                    </li>
                    <li>
                      <strong className="text-foreground">Use the same power source every time.</strong> A trainer and
                      a power meter routinely disagree by a few percent. That offset is stable and harmless as long as
                      you never switch mid-season.
                    </li>
                  </ol>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={400}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <div className="flex items-start gap-3 mb-5">
                  <Fan size={26} className="text-zwift-blue flex-shrink-0 mt-1" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Indoor versus outdoor FTP: it is mostly heat
                  </h2>
                </div>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    The honest framing is this: FTP is a physiological property and it does not change when you move
                    from the road to the pain cave. What changes is your ability to express it. The dominant mechanism
                    is heat. Outdoors you ride through moving air that strips sweat off your skin. Indoors you sit
                    still in your own microclimate, core temperature climbs, blood is diverted to the skin for
                    cooling, and the same physiology produces fewer watts at the same perceived effort.
                  </p>
                  <p>
                    Two studies bound the problem usefully.{" "}
                    <a
                      href="https://pubmed.ncbi.nlm.nih.gov/24476776/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      Mieras, Heesch and Slivka (2014)
                    </a>{" "}
                    had twelve recreationally trained male cyclists ride 40 km outdoors and 40 km in the laboratory at
                    the same perceived effort. Outdoor power averaged 208.1 &plusmn; 10.2 W against 163.4 &plusmn;
                    11.8 W in the lab, a highly significant gap, with higher skin temperature indoors (33.0 against
                    31.4 degrees C). The caveat matters more than the headline: the indoor trial used{" "}
                    <strong>no fan</strong>. That roughly 30% gap is what happens in still air, and it is not what a
                    well-cooled Zwift setup produces. Do not quote it as your Zwift-versus-outdoor number.
                  </p>
                  <p>
                    <a
                      href="https://pubmed.ncbi.nlm.nih.gov/21725106/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      Peiffer and Abbiss (2011)
                    </a>{" "}
                    isolated the mechanism directly. Nine trained male cyclists rode four 40 km time trials at 17, 22,
                    27 and 32 degrees C. Mean power was 309 &plusmn; 35 W at 32 C against 329 &plusmn; 31 W at 17 C:
                    about 20 W, roughly 6%, lost across a 15 degree rise. Very roughly, that is 1.3 W per degree C.
                  </p>
                  <p>
                    Read those two together and the practical conclusion is unavoidable. A big fan is the
                    highest-value purchase in a pain cave, ahead of a better trainer, ahead of a smart bike, ahead of
                    anything aerodynamic. At roughly 1.3 W per degree C, pulling ten degrees out of your effective
                    riding temperature is worth on the order of 13 W, which is more than most riders get from an
                    equipment upgrade costing many times as much. Nothing else in the room converts money into
                    sustainable watts at that rate.
                  </p>
                  <p>
                    For riders who train indoors regularly and are well cooled, the gap commonly quoted is 3-8%, or
                    20-30 W in absolute terms. Treat that as a commonly cited range rather than a measured constant -
                    it is a summary of coaching experience, not a controlled result, and your own figure depends
                    almost entirely on your cooling.
                  </p>
                  <p>
                    The operational advice follows from the framing. Test where you train and race. If your racing
                    happens on Zwift, set your Zwift zones from an indoor test, because an outdoor number will
                    prescribe intervals you cannot complete indoors. If you do both, keep two numbers and stop
                    treating the difference as a mystery.{" "}
                    <Link to="/blog/zwift-vs-outdoor-cycling" className={linkClass}>
                      Zwift versus outdoor cycling
                    </Link>{" "}
                    goes further into what else changes between the two.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={450}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">
                  How often to retest, and how to tell your number is wrong
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Once per training block is plenty, placed at the boundary and ideally on the last day of a
                    recovery week. Testing more often than that spends training days on measuring rather than
                    improving, and a maximal test costs you the session it replaces plus part of the next one. A
                    couple of well-placed tests across a season will tell you everything a monthly test would, with
                    far less disruption and far less chance of catching yourself on a bad day and believing it.
                  </p>
                  <p>
                    Between tests, your workouts tell you whether the setting is right. Read the signals rather than
                    waiting for a calendar date.
                  </p>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Signs your FTP is set too high</h3>
                    <ul className="space-y-2 list-disc list-outside ml-5">
                      <li>
                        You cannot finish threshold intervals as prescribed. The last repeat of a set falls apart, or
                        your power sags in the closing minutes of every rep.
                      </li>
                      <li>Z3 tempo work feels like Z5 work, and your breathing never settles into a rhythm.</li>
                      <li>
                        Your heart rate in prescribed Z4 sits above 105% of your threshold heart rate rather than in
                        the 95-105% band the zone table gives.
                      </li>
                      <li>You finish sessions demoralised rather than tired, and start skipping them.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Signs your FTP is set too low</h3>
                    <ul className="space-y-2 list-disc list-outside ml-5">
                      <li>
                        You complete threshold intervals and could have done another two. That is tempo work wearing a
                        threshold label.
                      </li>
                      <li>
                        Your heart rate in prescribed Z4 sits down in the Z3 band of the table above, at 84-94% of
                        threshold heart rate rather than 95-105%.
                      </li>
                      <li>
                        Your rating of perceived exertion during a 20-minute threshold rep never climbs into the 4-5
                        band the table gives for Z4, and stays in Z3 territory throughout.
                      </li>
                    </ul>
                  </div>

                  <p>
                    You do not need a full retest to fix either case. Nudge the setting by a few watts in the
                    indicated direction and run the next block off it. That is a legitimate way to converge on a
                    working number, and unlike a retest it costs you no training time at all. A formal
                    test is for establishing a baseline you will compare against months later, not for maintaining
                    week-to-week zones. The{" "}
                    <Link to="/blog/zwift-training-plans-101" className={linkClass}>
                      training plans guide
                    </Link>{" "}
                    and{" "}
                    <Link to="/blog/zwift-training-periodization" className={linkClass}>
                      the periodisation article
                    </Link>{" "}
                    both cover where in a plan a test belongs.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={500}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">
                  Where real riders actually sit
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    The Coggan chart is a reference scale. If you want an actual distribution, Cycling Analytics
                    published one in June 2018 from thousands of power-meter users, using each rider&apos;s best
                    20-minute power as an FTP proxy. These are men&apos;s figures in raw watts, not W/kg, so they say
                    nothing about how fast anyone climbs.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b-2 border-border text-left">
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            Percentile
                          </th>
                          <th scope="col" className="py-2 text-left font-semibold text-foreground">
                            20-minute power
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {REAL_WORLD_MEN.map((row) => (
                          <tr key={row.percentile} className="border-b border-border">
                            <td className="py-2 pr-4 text-foreground">{row.percentile}</td>
                            <td className="py-2 font-mono text-foreground">{row.watts}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p>
                    Two things are worth noticing. The median is 286 W of 20-minute power, which is about 272 W of FTP
                    after the 0.95 haircut. Carried by a 75 kg rider that is roughly 3.6 W/kg, which lands in the Good
                    band on the men&apos;s chart rather than anywhere near Untrained - a reminder that people who buy
                    power meters are not a random sample of humans, and that comparing yourself to this table is
                    comparing yourself to the committed. And the spread from the 25th to the 90th percentile is only
                    about 100 W. Most riders are far closer together than the internet suggests, which is worth
                    remembering the next time a forum thread makes the 90th percentile sound like an entry
                    requirement.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={550}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">What FTP means for climbing</h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    On a steep climb almost all of your power goes into lifting your own mass, so climbing is settled
                    by watts per kilogram rather than watts. This is where the second number in the calculator earns
                    its place. Somewhere around 3.2 to 3.3 W/kg is the hour mark on Alpe du Zwift. At 75 kg that is
                    about 240 to 248 W, and at 60 kg it is about 192 to 198 W. Nearly 50 W separates those two riders
                    and they arrive within a couple of minutes of each other, which is the whole argument for tracking
                    W/kg alongside watts.
                  </p>
                  <p>
                    That also means the same FTP produces completely different climbing outcomes depending on what you
                    weigh, which is why every climb tool on this site takes weight as an input. The{" "}
                    <Link to="/alpeduzwiftcalculator" className={linkClass}>
                      Alpe du Zwift calculator
                    </Link>{" "}
                    is fitted to real finishing times on that one climb, while the{" "}
                    <Link to="/zwift-climb-time-calculator" className={linkClass}>
                      climb time calculator
                    </Link>{" "}
                    runs the physics from first principles and works on any sustained climb in the game. If you want
                    to see the full list of what is climbable and how long each one is, the{" "}
                    <Link to="/zwift-climbs" className={linkClass}>
                      Zwift climbs index
                    </Link>{" "}
                    has the numbers, and{" "}
                    <Link to="/alpe-vs-ventop" className={linkClass}>
                      Alpe versus Ven-Top
                    </Link>{" "}
                    compares the two big ones directly.
                  </p>
                  <p>
                    One caution. Because W/kg is a ratio, it moves when either number moves, and the arithmetic makes
                    weight loss look like an easy route to a better climbing figure. It is not free. Losing mass
                    usually costs some power, the ratio improves less than the arithmetic suggests, and under-fuelling
                    a training block is the fastest way to lose the FTP you just measured. The calculators here treat
                    your weight as an input, not a recommendation.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={600}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <div className="flex items-start gap-3 mb-5">
                  <AlertTriangle size={24} className="text-zwift-orange flex-shrink-0 mt-1" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Before you test</h2>
                </div>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    This page is training information, not medical advice. A maximal FTP test is a genuinely hard
                    effort - a ramp test ends in voluntary failure by design, and a 20-minute test is one of the
                    harder things you will do on a bike. If you have a heart condition, high blood pressure, are
                    returning from illness, are taking medication that affects heart rate, or you are new to
                    structured exercise, talk to a doctor before doing one. If you get chest pain, dizziness or an
                    irregular heartbeat during a test, stop.
                  </p>
                  <p>
                    Every number on this page comes from a published source. The protocols and their multipliers, the
                    Coggan zone table, the power profile chart, the two heat studies and the Cycling Analytics
                    distribution are all listed below so you can read the originals rather than taking this page&apos;s
                    word for it. Corrections are welcome and get applied -{" "}
                    <Link to="/contact" className={linkClass}>
                      send them here
                    </Link>
                    , and the{" "}
                    <Link to="/editorial-policy" className={linkClass}>
                      editorial policy
                    </Link>{" "}
                    explains how they are handled. This calculator is built and maintained by{" "}
                    <Link to="/author" className={linkClass}>
                      {AUTHOR.name}
                    </Link>
                    .
                  </p>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Sources</h3>
                    <ul className="space-y-2 list-disc list-outside ml-5 break-words">
                      <li>
                        <a
                          href="https://trainright.com/ftp-tests-how-to-perform-20-minute-8-minute-and-ramp-tests/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          CTS / TrainRight: how to perform 20-minute, 8-minute and ramp tests
                        </a>{" "}
                        - the 0.95, 0.90 and 0.75 multipliers and the CTS attribution of the 8-minute test.
                      </li>
                      <li>
                        <a
                          href="https://www.ipmultisport.com/ref_lib/Coggan_Power_Meter.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          Coggan, Training and racing with a power meter (PDF)
                        </a>{" "}
                        - the ~40 km TT definition, the 0.93 factor for 20 km, and the published zone table.
                      </li>
                      <li>
                        <a
                          href="https://joefrieltraining.com/the-30-minute-test-is-easy-really/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          Joe Friel: the 30-minute test
                        </a>{" "}
                        - the final-20-minutes rule and the reasoning for no correction factor.
                      </li>
                      <li>
                        <a
                          href="https://zwiftinsider.com/zwift-ftp-tests/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          Zwift Insider: Zwift FTP tests
                        </a>{" "}
                        - the in-game protocols, Ramp Test Lite, and zFTP.
                      </li>
                      <li>
                        <a
                          href="https://zwiftinsider.com/the-grade-review/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          Zwift Insider: The Grade review
                        </a>{" "}
                        - the segment profile and the duration-dependent multiplier curve.
                      </li>
                      <li>
                        <a
                          href="https://www.highnorth.co.uk/articles/power-profiling-cycling"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          High North: power profiling in cycling
                        </a>{" "}
                        - the Coggan power profile figures and how the scale was constructed.
                      </li>
                      <li>
                        <a
                          href="https://www.cyclinganalytics.com/blog/2018/06/how-does-your-cycling-power-output-compare"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          Cycling Analytics, June 2018: how does your power output compare
                        </a>{" "}
                        - the real-world percentile table.
                      </li>
                      <li>
                        Mieras, Heesch &amp; Slivka (2014),{" "}
                        <em>Journal of Strength and Conditioning Research</em> 28(8):2324-2329.{" "}
                        <a
                          href="https://pubmed.ncbi.nlm.nih.gov/24476776/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          PubMed
                        </a>
                        .
                      </li>
                      <li>
                        Peiffer &amp; Abbiss (2011),{" "}
                        <em>International Journal of Sports Physiology and Performance</em> 6(2):208-220.{" "}
                        <a
                          href="https://pubmed.ncbi.nlm.nih.gov/21725106/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          PubMed
                        </a>
                        .
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={650}>
              <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-2xl p-6 md:p-8 border-2 border-zwift-orange/20">
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground">Related</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { to: "/alpeduzwiftcalculator", label: "Alpe du Zwift time from your W/kg" },
                    { to: "/zwift-climb-time-calculator", label: "Any climb, from first-principles physics" },
                    { to: "/ventop-calculator", label: "Ven-Top time calculator" },
                    { to: "/zwift-racing-category-calculator", label: "Which racing category you belong in" },
                    { to: "/blog/category/training", label: "Training articles" },
                    { to: "/faq", label: "Questions this site gets asked most" },
                    { to: "/blog", label: "Everything written here" },
                    { to: "/", label: "All the calculators" },
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

export default ZwiftFtpCalculator;
