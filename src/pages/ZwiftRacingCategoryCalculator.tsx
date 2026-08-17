import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  CalendarDays,
  Flag,
  Gauge,
  History,
  Info,
  Scale,
  ShieldCheck,
  Target,
  Trophy,
  Users,
} from "lucide-react";

import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { AUTHOR } from "@/lib/siteConfig";

/* ------------------------------------------------------------------ *
 * Thresholds. Everything on this page - the calculator, the reference
 * tables and the worked examples - is driven from these constants, so
 * there is exactly one place to change when Zwift moves a number.
 * Pace Category Enforcement values are as published in ZwiftInsider's
 * August 2025 update.
 * ------------------------------------------------------------------ */

type CategoryId = "A" | "B" | "C" | "D";
type Ruleset = "open" | "women";

interface CeCategory {
  /** Category letter awarded when these thresholds are met. */
  id: Exclude<CategoryId, "D">;
  /** Maximal Aerobic Power threshold in W/kg. */
  zmapWkg: number;
  /** Threshold power threshold in W/kg. */
  zftpWkg: number;
  /** Absolute zFTP floor in watts. A floor, not a promoter. Null where Zwift publishes none. */
  zftpFloorW: number | null;
}

/** Open / mixed races. Ordered strongest first - the evaluator walks down the list. */
const CE_OPEN: CeCategory[] = [
  { id: "A", zmapWkg: 5.1, zftpWkg: 4.2, zftpFloorW: 250 },
  { id: "B", zmapWkg: 4.1, zftpWkg: 3.36, zftpFloorW: 200 },
  { id: "C", zmapWkg: 3.2, zftpWkg: 2.625, zftpFloorW: 150 },
];

/** Women-only races. Zwift publishes no absolute watt floors for these. */
const CE_WOMEN: CeCategory[] = [
  { id: "A", zmapWkg: 4.8, zftpWkg: 3.88, zftpFloorW: null },
  { id: "B", zmapWkg: 4.1, zftpWkg: 3.36, zftpFloorW: null },
  { id: "C", zmapWkg: 3.2, zftpWkg: 2.625, zftpFloorW: null },
];

/** The five standard Zwift Racing Score pens, as announced on 13 September 2024. */
const ZRS_PENS = [
  { rank: 1, label: "Pen 1 (lowest)", min: 0, max: 180 },
  { rank: 2, label: "Pen 2", min: 180, max: 350 },
  { rank: 3, label: "Pen 3", min: 350, max: 520 },
  { rank: 4, label: "Pen 4", min: 520, max: 690 },
  { rank: 5, label: "Pen 5 (highest)", min: 690, max: 1000 },
];

/** Retired for eligibility on 28 March 2023. Kept here because the numbers still circulate. */
const LEGACY_ZWIFTPOWER = [
  { id: "A+", wkg: 4.6, floorW: 300 },
  { id: "A", wkg: 4.0, floorW: 250 },
  { id: "B", wkg: 3.2, floorW: 200 },
  { id: "C", wkg: 2.5, floorW: 150 },
  { id: "D", wkg: null, floorW: null },
];

/** Unofficial third-party rating. Shown for orientation only. */
const VELO_BANDS = [
  { id: "A", range: "1900 and above" },
  { id: "B", range: "1450 to 1899" },
  { id: "C", range: "1150 to 1449" },
  { id: "D", range: "850 to 1149" },
  { id: "E", range: "0 to 850" },
];

const TABLE_WEIGHTS = [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

/** 4.2 renders as "4.2", 4 renders as "4.0", 2.625 stays "2.625". */
const fmtWkg = (value: number) => {
  const trimmed = value.toFixed(3).replace(/0+$/, "");
  return trimmed.endsWith(".") ? `${trimmed}0` : trimmed;
};

interface CeVerdict {
  category: CategoryId;
  awarded: CeCategory | null;
  /** Categories cleared on W/kg but denied by the absolute zFTP floor. */
  blockedByFloor: CeCategory[];
  reasons: string[];
  zftpWkg: number;
  zmapWkg: number | null;
}

function evaluateCe(
  weightKg: number,
  zftpW: number,
  zmapW: number | null,
  set: CeCategory[]
): CeVerdict {
  const safeWeight = weightKg > 0 ? weightKg : 1;
  const zftpWkg = zftpW / safeWeight;
  const zmapWkg = zmapW !== null ? zmapW / safeWeight : null;

  const blockedByFloor: CeCategory[] = [];
  let awarded: CeCategory | null = null;

  for (const cat of set) {
    const meetsZftp = zftpWkg >= cat.zftpWkg;
    const meetsZmap = zmapWkg !== null && zmapWkg >= cat.zmapWkg;
    if (!meetsZftp && !meetsZmap) continue;

    if (cat.zftpFloorW !== null && zftpW < cat.zftpFloorW) {
      blockedByFloor.push(cat);
      continue;
    }
    awarded = cat;
    break;
  }

  const reasons: string[] = [];
  if (awarded) {
    if (zmapWkg !== null && zmapWkg >= awarded.zmapWkg) {
      reasons.push(
        `Your zMAP of ${zmapWkg.toFixed(2)} W/kg clears the ${awarded.id} zMAP threshold of ${fmtWkg(
          awarded.zmapWkg
        )} W/kg.`
      );
    }
    if (zftpWkg >= awarded.zftpWkg) {
      reasons.push(
        `Your zFTP of ${zftpWkg.toFixed(2)} W/kg clears the ${awarded.id} zFTP threshold of ${fmtWkg(
          awarded.zftpWkg
        )} W/kg.`
      );
    }
    if (awarded.zftpFloorW !== null) {
      reasons.push(
        `Your absolute zFTP of ${Math.round(zftpW)} W is at or above category ${awarded.id}'s floor of ${
          awarded.zftpFloorW
        } W.`
      );
    }
  } else {
    reasons.push(
      zmapWkg === null
        ? `Neither your zFTP of ${zftpWkg.toFixed(2)} W/kg nor any zMAP figure reaches the C thresholds, so you land in D.`
        : `Neither your zFTP of ${zftpWkg.toFixed(2)} W/kg nor your zMAP of ${zmapWkg.toFixed(
            2
          )} W/kg reaches the C thresholds, so you land in D.`
    );
  }

  for (const cat of blockedByFloor) {
    reasons.push(
      `You clear a category ${cat.id} W/kg threshold, but your absolute zFTP of ${Math.round(
        zftpW
      )} W is below category ${cat.id}'s ${cat.zftpFloorW} W floor, so ${cat.id} is not awarded.`
    );
  }

  return {
    category: awarded ? awarded.id : "D",
    awarded,
    blockedByFloor,
    reasons,
    zftpWkg,
    zmapWkg,
  };
}

interface NextStep {
  target: CeCategory;
  zftpNeedW: number;
  zftpGapW: number;
  zftpGapWkg: number;
  zmapNeedW: number;
  zmapGapW: number | null;
  zmapGapWkg: number | null;
  floorShortfallW: number;
}

function nextCategoryUp(
  verdict: CeVerdict,
  weightKg: number,
  zftpW: number,
  zmapW: number | null,
  set: CeCategory[]
): NextStep | null {
  const index = verdict.awarded ? set.indexOf(verdict.awarded) : set.length;
  if (index === 0) return null;
  const target = set[index - 1];

  const zftpFromWkg = target.zftpWkg * weightKg;
  const zftpNeedW = target.zftpFloorW !== null ? Math.max(zftpFromWkg, target.zftpFloorW) : zftpFromWkg;
  const zmapNeedW = target.zmapWkg * weightKg;

  return {
    target,
    zftpNeedW,
    zftpGapW: Math.max(0, zftpNeedW - zftpW),
    zftpGapWkg: Math.max(0, target.zftpWkg - verdict.zftpWkg),
    zmapNeedW,
    zmapGapW: zmapW !== null ? Math.max(0, zmapNeedW - zmapW) : null,
    zmapGapWkg: verdict.zmapWkg !== null ? Math.max(0, target.zmapWkg - verdict.zmapWkg) : null,
    floorShortfallW: target.zftpFloorW !== null ? Math.max(0, target.zftpFloorW - zftpW) : 0,
  };
}

/**
 * A rider blocked purely by the absolute watt floor already clears the W/kg line of
 * the category above, so "you are 0.00 W/kg short" would be misleading. Say what is
 * actually missing instead.
 */
function zftpGapSentence(step: NextStep): string {
  if (step.zftpGapWkg > 0) {
    return `You are ${step.zftpGapWkg.toFixed(2)} W/kg and ${Math.round(step.zftpGapW)} W short.`;
  }
  if (step.zftpGapW > 0) {
    return `You already clear that W/kg line, so the ${step.target.zftpFloorW} W floor is the only thing missing: you are ${Math.round(
      step.zftpGapW
    )} W below it.`;
  }
  return "You already clear that W/kg line.";
}

const CATEGORY_COLOUR: Record<CategoryId, string> = {
  A: "text-zwift-orange",
  B: "text-zwift-blue",
  C: "text-zwift-green",
  D: "text-foreground",
};

const ZwiftRacingCategoryCalculator = () => {
  const [weightKg, setWeightKg] = useState(75);
  const [zftpInput, setZftpInput] = useState("250");
  const [zmapInput, setZmapInput] = useState("");
  const [ruleset, setRuleset] = useState<Ruleset>("open");
  const [scoreInput, setScoreInput] = useState("380");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const thresholds = ruleset === "open" ? CE_OPEN : CE_WOMEN;

  const zftpW = useMemo(() => {
    const parsed = Number(zftpInput);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
  }, [zftpInput]);

  const zmapW = useMemo(() => {
    if (zmapInput.trim() === "") return null;
    const parsed = Number(zmapInput);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
  }, [zmapInput]);

  const verdict = useMemo(
    () => evaluateCe(weightKg, zftpW, zmapW, thresholds),
    [weightKg, zftpW, zmapW, thresholds]
  );

  const nextStep = useMemo(
    () => nextCategoryUp(verdict, weightKg, zftpW, zmapW, thresholds),
    [verdict, weightKg, zftpW, zmapW, thresholds]
  );

  const score = useMemo(() => {
    // An empty box is not a score of zero. `Number("")` is 0, so without this
    // guard clearing the field silently claims you are in the lowest pen.
    if (scoreInput.trim() === "") return null;
    const parsed = Number(scoreInput);
    if (!Number.isFinite(parsed)) return null;
    return Math.min(1000, Math.max(0, parsed));
  }, [scoreInput]);

  const pen = useMemo(() => {
    if (score === null) return null;
    return ZRS_PENS.find((p) => score <= p.max) ?? ZRS_PENS[ZRS_PENS.length - 1];
  }, [score]);

  /** The reference table below is generated from the same constants the calculator uses. */
  const tableRows = useMemo(() => {
    const weights = TABLE_WEIGHTS.includes(Math.round(weightKg))
      ? TABLE_WEIGHTS
      : [...TABLE_WEIGHTS, Math.round(weightKg)].sort((a, b) => a - b);

    return weights.map((kg) => ({
      kg,
      isYou: kg === Math.round(weightKg),
      cells: [...thresholds].reverse().map((cat) => {
        const fromWkg = cat.zftpWkg * kg;
        const floorBinds = cat.zftpFloorW !== null && cat.zftpFloorW > fromWkg;
        return {
          id: cat.id,
          zftpW: Math.round(cat.zftpFloorW !== null ? Math.max(fromWkg, cat.zftpFloorW) : fromWkg),
          floorBinds,
          zmapW: Math.round(cat.zmapWkg * kg),
        };
      }),
    }));
  }, [thresholds, weightKg]);

  const anyFloorBinds = tableRows.some((row) => row.cells.some((cell) => cell.floorBinds));

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 pb-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-blue/10 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs className="mb-4 sm:mb-6" />

            <AnimatedText delay={100}>
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-zwift-dark/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-zwift-blue shadow-sm border border-blue-100 dark:border-blue-900/20 mb-4">
                <Trophy size={16} className="text-zwift-blue" />
                <span>Three systems, one page</span>
              </div>
            </AnimatedText>

            <AnimatedText delay={200}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Zwift <span className="zwift-gradient-text">Racing Category</span> Calculator
              </h1>
            </AnimatedText>

            <AnimatedText delay={300} className="mt-5">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Put in your weight, your threshold power and, if you have it, your zMAP, and this page works out which
                Pace Category Enforcement pen - A, B, C or D - those numbers place you in, and exactly how far you are
                from the one above. It will not calculate a Zwift Racing Score, because that number cannot be derived
                from FTP or W/kg: Zwift has never published the algorithm. What the second tool does instead is look up
                which of the five standard Racing Score pens a score you already know falls into.
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
                <h2 className="text-xl font-bold mb-1 text-foreground">Pace Category Enforcement calculator</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  This is the W/kg system, and it is the one that can actually be calculated. Thresholds as published in
                  ZwiftInsider&apos;s August 2025 update.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Inputs */}
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="ruleset" className="text-sm font-semibold">
                        Race type
                      </Label>
                      <select
                        id="ruleset"
                        value={ruleset}
                        onChange={(event) => setRuleset(event.target.value as Ruleset)}
                        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zwift-orange"
                      >
                        <option value="open">Open / mixed race</option>
                        <option value="women">Women-only race</option>
                      </select>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {ruleset === "open"
                          ? "Open races apply absolute zFTP floors of 250 W, 200 W and 150 W on top of the W/kg thresholds."
                          : "Zwift publishes no absolute watt floors for the women-only categories, so only the W/kg thresholds apply here."}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-baseline justify-between">
                        <Label htmlFor="weight" className="text-sm font-semibold">
                          Body weight
                        </Label>
                        <span className="font-mono text-sm text-zwift-blue">{weightKg} kg</span>
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
                    </div>

                    <div>
                      <Label htmlFor="zftp" className="text-sm font-semibold">
                        zFTP in watts
                      </Label>
                      <Input
                        id="zftp"
                        type="number"
                        min={50}
                        max={600}
                        value={zftpInput}
                        onChange={(event) => setZftpInput(event.target.value)}
                        className="mt-2"
                      />
                      <p className="mt-2 text-xs text-muted-foreground">
                        Your FTP, or Zwift&apos;s zFTP if you know it. zFTP is Zwift&apos;s own estimate of your
                        sustainable threshold power, taken from your 2 to 50 minute power curve over the last 90 days,
                        and it is the number the game actually tests you against. It is shown on your ZwiftPower
                        profile. If you only have a lab or ramp-test FTP, use that and treat the answer as an estimate.
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="zmap" className="text-sm font-semibold">
                        zMAP in watts <span className="font-normal text-muted-foreground">(optional)</span>
                      </Label>
                      <Input
                        id="zmap"
                        type="number"
                        min={50}
                        max={800}
                        placeholder="Leave blank if you do not know it"
                        value={zmapInput}
                        onChange={(event) => setZmapInput(event.target.value)}
                        className="mt-2"
                      />
                      <p className="mt-2 text-xs text-muted-foreground">
                        zMAP is your Maximal Aerobic Power, roughly your best 4 to 6 minute effort. The category logic
                        is OR, so crossing either threshold promotes you. If you leave this blank the result is worked
                        out from zFTP alone and may under-state your real category - riders with a big aerobic ceiling
                        and a modest threshold are usually promoted on zMAP.
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-5">
                    <div className="rounded-xl bg-gradient-to-br from-zwift-blue/10 to-zwift-orange/10 border-2 border-zwift-blue/30 p-6 text-center">
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        Category ({ruleset === "open" ? "open / mixed" : "women-only"})
                      </p>
                      <p className={`text-6xl font-bold font-mono ${CATEGORY_COLOUR[verdict.category]}`}>
                        {verdict.category}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {verdict.category === "A"
                          ? "The top pen. There is nothing above it in standard Category Enforcement."
                          : `Zwift will let you enter ${verdict.category} and anything above it, and will block you from anything below.`}
                      </p>
                    </div>

                    <dl className="grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-lg border border-border p-3">
                        <dt className="flex items-center text-xs text-muted-foreground mb-1">
                          <Gauge size={13} className="mr-1.5" /> zFTP
                        </dt>
                        <dd className="font-mono font-semibold text-foreground">
                          {verdict.zftpWkg.toFixed(2)} W/kg
                        </dd>
                      </div>
                      <div className="rounded-lg border border-border p-3">
                        <dt className="flex items-center text-xs text-muted-foreground mb-1">
                          <Target size={13} className="mr-1.5" /> zMAP
                        </dt>
                        <dd className="font-mono font-semibold text-foreground">
                          {verdict.zmapWkg !== null ? `${verdict.zmapWkg.toFixed(2)} W/kg` : "not entered"}
                        </dd>
                      </div>
                    </dl>

                    <div className="rounded-lg border border-border p-4">
                      <p className="text-xs font-semibold text-foreground mb-2">Why this category</p>
                      <ul className="space-y-2 text-sm text-muted-foreground list-disc list-outside ml-4">
                        {verdict.reasons.map((reason) => (
                          <li key={reason}>{reason}</li>
                        ))}
                      </ul>
                    </div>

                    {nextStep && (
                      <div className="rounded-lg border-2 border-zwift-orange/30 bg-zwift-orange/5 p-4">
                        <p className="text-xs font-semibold text-foreground mb-2">
                          What it takes to reach category {nextStep.target.id}
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>
                            <strong className="text-foreground">Via zFTP:</strong> {fmtWkg(nextStep.target.zftpWkg)}{" "}
                            W/kg, which at {weightKg} kg means {Math.round(nextStep.zftpNeedW)} W.{" "}
                            {zftpGapSentence(nextStep)}
                          </li>
                          <li>
                            <strong className="text-foreground">Via zMAP:</strong> {fmtWkg(nextStep.target.zmapWkg)}{" "}
                            W/kg, which at {weightKg} kg means {Math.round(nextStep.zmapNeedW)} W.{" "}
                            {nextStep.zmapGapW !== null && nextStep.zmapGapWkg !== null
                              ? `You are ${nextStep.zmapGapWkg.toFixed(2)} W/kg and ${Math.round(
                                  nextStep.zmapGapW
                                )} W short.`
                              : "Enter a zMAP figure to see your gap on this route."}
                          </li>
                          {nextStep.floorShortfallW > 0 && (
                            <li>
                              <strong className="text-foreground">Floor:</strong> category {nextStep.target.id} also
                              requires an absolute zFTP of at least {nextStep.target.zftpFloorW} W. You are{" "}
                              {Math.round(nextStep.floorShortfallW)} W below that, and no zMAP figure gets you past it.
                            </li>
                          )}
                        </ul>
                        <p className="mt-3 text-xs text-muted-foreground">
                          Crossing either W/kg threshold is enough. You do not need both.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Racing Score pen lookup */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h2 className="text-xl font-bold mb-1 text-foreground">Zwift Racing Score pen lookup</h2>
                  <p className="text-sm text-muted-foreground mb-5">
                    This is a lookup, not a calculation. A Zwift Racing Score cannot be derived from FTP, from W/kg or
                    from anything else on this page - the algorithm is unpublished, and the score moves on race results
                    as well as power. Read your score off your Zwift companion or ZwiftPower profile and type it in.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    <div>
                      <Label htmlFor="zrs" className="text-sm font-semibold">
                        Your Zwift Racing Score (0 to 1000)
                      </Label>
                      <Input
                        id="zrs"
                        type="number"
                        min={0}
                        max={1000}
                        value={scoreInput}
                        onChange={(event) => setScoreInput(event.target.value)}
                        className="mt-2"
                      />
                      <p className="mt-2 text-xs text-muted-foreground">
                        These are the five standard pens. Event organisers can define their own bands, up to 10
                        categories, so always read the entry requirements on the event itself.
                      </p>
                    </div>

                    <div className="rounded-xl border-2 border-zwift-green/30 bg-zwift-green/5 p-5">
                      {pen && score !== null ? (
                        <>
                          <p className="text-sm text-muted-foreground">A score of {score} sits in</p>
                          <p className="text-2xl font-bold text-zwift-green mt-1">{pen.label}</p>
                          <p className="font-mono text-sm text-muted-foreground mt-1">
                            {pen.min} to {pen.max}
                          </p>
                          <p className="text-sm text-muted-foreground mt-3">
                            You may enter this pen or any pen above it. Zwift will not let you enter a pen below it.
                          </p>
                        </>
                      ) : (
                        <p className="text-sm text-muted-foreground">Enter a score between 0 and 1000.</p>
                      )}
                    </div>
                  </div>

                  <div className="overflow-x-auto mt-5">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            Pen
                          </th>
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            Score range
                          </th>
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            Your score
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {ZRS_PENS.map((row) => (
                          <tr
                            key={row.rank}
                            className={`border-b border-border ${
                              pen && pen.rank === row.rank ? "bg-zwift-green/10 font-semibold" : ""
                            }`}
                          >
                            <td className="py-2 pr-4 text-foreground">{row.label}</td>
                            <td className="py-2 pr-4 font-mono text-muted-foreground">
                              {row.min} to {row.max}
                            </td>
                            <td className="py-2 pr-4 text-muted-foreground">
                              {pen && pen.rank === row.rank ? "this one" : ""}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Zwift&apos;s own forum announcement of 13 September 2024 gives the lowest band as 0-180, while
                    Zwift&apos;s marketing renders it 1-180. The published bands share their endpoints, so a score
                    landing exactly on 180, 350, 520 or 690 is ambiguous. This lookup puts a boundary score in the lower
                    pen. If you are sitting on a boundary, check what the event page itself says before you enter.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reference table */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                  Watts you need at your weight
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Same constants as the calculator above, applied across a range of body weights for{" "}
                  {ruleset === "open" ? "open / mixed" : "women-only"} races. Each cell is the absolute power that
                  crosses that threshold at that weight. Remember the logic is OR: reach either the zFTP number or the
                  zMAP number in a column and you are in that category.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                          Weight
                        </th>
                        {[...thresholds].reverse().map((cat) => (
                          <th
                            key={`${cat.id}-zftp`}
                            scope="col"
                            className="py-2 pr-4 text-left font-semibold text-foreground"
                          >
                            {cat.id} zFTP
                          </th>
                        ))}
                        {[...thresholds].reverse().map((cat) => (
                          <th
                            key={`${cat.id}-zmap`}
                            scope="col"
                            className="py-2 pr-4 text-left font-semibold text-foreground"
                          >
                            {cat.id} zMAP
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tableRows.map((row) => (
                        <tr
                          key={row.kg}
                          className={`border-b border-border ${row.isYou ? "bg-zwift-blue/10 font-semibold" : ""}`}
                        >
                          <td className="py-2 pr-4 text-foreground">
                            {row.kg} kg{row.isYou ? " (you)" : ""}
                          </td>
                          {row.cells.map((cell) => (
                            <td key={`${row.kg}-${cell.id}-zftp`} className="py-2 pr-4 font-mono text-muted-foreground">
                              {cell.zftpW} W{cell.floorBinds ? " *" : ""}
                            </td>
                          ))}
                          {row.cells.map((cell) => (
                            <td key={`${row.kg}-${cell.id}-zmap`} className="py-2 pr-4 font-mono text-muted-foreground">
                              {cell.zmapW} W
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-xs text-muted-foreground">
                  {anyFloorBinds
                    ? "A star marks a cell where the absolute watt floor is higher than the W/kg requirement. At those weights the floor is what binds: hitting the W/kg number alone will not get you the category."
                    : "At every weight in this table the W/kg requirement is higher than any published watt floor, so no floor is binding here."}
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Explanation */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <AnimatedCard>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">
                  There are three systems, and most confusion comes from mixing them up
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Almost every argument about Zwift categories happens because two people are talking about two
                    different systems. A rider says they are a &quot;B&quot;, someone else says the pens are numbers
                    now, and a third person quotes a 250 W rule that has not decided anything since March 2023. All
                    three can be right at once, because Zwift has run three separate schemes and pieces of all three are
                    still visible.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            System
                          </th>
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            What it measures
                          </th>
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            Decides entry today?
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="py-2 pr-4 text-foreground">Zwift Racing Score</td>
                          <td className="py-2 pr-4">Power plus race results, 0 to 1000</td>
                          <td className="py-2 pr-4">Yes, in most public races</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2 pr-4 text-foreground">Pace Category Enforcement</td>
                          <td className="py-2 pr-4">zFTP and zMAP in W/kg</td>
                          <td className="py-2 pr-4">Yes, in the remaining A/B/C/D events</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2 pr-4 text-foreground">Legacy ZwiftPower FTP categories</td>
                          <td className="py-2 pr-4">20-minute race power divided by weight</td>
                          <td className="py-2 pr-4">No, retired 28 March 2023</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    How do you tell which one a given race uses? Look at the event listing. If the pens are described by
                    a number range - 350 to 520, say - it is a Racing Score event. If the pens are lettered A, B, C, D
                    and E, it is Category Enforcement. Zwift Insider reported in its August 2025 update that over 85% of
                    public races on Zwift use Racing Score, so on any given evening most of what you see in the events
                    list will be the number system, with lettered pens surviving mainly in league racing and in series
                    that chose to stay put.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={100}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground">
                  Why Zwift walked away from pure W/kg categories
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    A power-to-weight threshold is a measurement of an engine, and a bike race is not an engine test. It
                    is a test of an engine driven by a person who decides when to spend it. Two riders with identical
                    4.0 W/kg thresholds can finish thirty places apart, every week, forever, because one of them knows
                    when to close a gap and the other burns a match on the first roller. A static W/kg line cannot see
                    any of that. It sorts the field by hardware and then acts surprised when the results do not match.
                  </p>
                  <p>
                    The second problem is worse, and it is the reason the system was replaced rather than tuned. A pure
                    threshold rewards sitting just underneath it. Under the old ZwiftPower numbers, category A started
                    at 4.0 W/kg on your best 20-minute effort, which made the strongest possible B rider someone at
                    3.99, with a permanent incentive to stay exactly there. Some riders got there honestly by never
                    testing hard. Others managed their numbers deliberately. Either way the effect on the B field is the
                    same: the pen fills with riders who are stronger than the pen, and the riders the pen actually
                    exists for stop being able to race it. The system built to stop sandbagging handed it a clear,
                    calculable target.
                  </p>
                  <p>
                    A results-based rating attacks that directly. If your score moves when you win, then hiding your
                    power stops working as a strategy: you can suppress a test, but you cannot suppress a finishing
                    position without actually losing, and losing on purpose has a cost. That is the whole idea behind
                    Racing Score. It is not obviously a better measurement of fitness. It is a better measurement of how
                    you tend to finish, which is what a category is supposed to predict.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={150}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground flex items-center">
                  <Trophy size={22} className="mr-2 text-zwift-orange" /> Zwift Racing Score, in as much detail as is
                  public
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Racing Score launched on 7 October 2024. It is a single number from 0 to 1000, higher is stronger,
                    and it is a hybrid of power and results rather than a power-to-weight ratio. That last point is
                    where most misunderstanding starts. It is not W/kg on a different scale.
                  </p>

                  <h3 className="text-lg font-bold text-foreground pt-2">Where your first score comes from</h3>
                  <p>
                    Your seed score is built from three inputs: your body weight, your best 30-second power and your
                    best 10-minute power over the past 90 days. Those go through an algorithm Zwift has not published,
                    which Zwift says was calibrated against millions of historical race results. So the seed is a
                    statistical guess at where a rider with your sprint and your ten-minute power tends to finish. It is
                    a starting position, not a verdict.
                  </p>

                  <h3 className="text-lg font-bold text-foreground pt-2">How it moves after that</h3>
                  <p>
                    Every ranked race moves it. Points are awarded for every finishing position, not only for podiums,
                    and they are weighted by the quality of the field you beat and by how big that field was. Beating
                    forty strong riders is worth more than beating six weak ones. There are podium bonuses on top. New
                    30-second or 10-minute personal bests also raise your score directly, without you having to win
                    anything. Updates land near real-time once the last rider in your race finishes, and the results
                    screen shows a plus or minus delta so you can see exactly what the race cost or earned you.
                  </p>

                  <h3 className="text-lg font-bold text-foreground pt-2">The anti-tanking floor</h3>
                  <p>
                    Your score cannot fall below 85% of your seed score. That is a deliberate brake on deliberate
                    tanking: a rider who tries to lose their way into an easier pen hits a wall well before they get
                    there. It also protects riders having a genuinely bad block from falling further than their
                    underlying ability justifies.
                  </p>

                  <h3 className="text-lg font-bold text-foreground pt-2">Decay</h3>
                  <p>
                    Decay has had a complicated life. It was present at launch, switched off in October 2024, and
                    reintroduced in mid-September 2025 with a 30-day grace period. From the 12 November 2025 update,
                    decay stops after any race or after a new seed score. In practice that means a rider who keeps
                    racing never has to think about it, and a rider coming back from a long break should expect their
                    number to have drifted down before their first race pulls it back.
                  </p>

                  <h3 className="text-lg font-bold text-foreground pt-2">What is not public</h3>
                  <p>
                    The algorithm. All of it. Zwift has described the inputs and the general shape of the model but has
                    never published the function, the weightings, or the field-quality maths. That is why this page
                    refuses to calculate a Racing Score for you, and why you should be suspicious of any site that
                    offers to. The pen lookup above is a lookup: you supply a number Zwift already gave you, and it
                    tells you which band that number sits in. Anything more than that would be a guess dressed up as
                    arithmetic.
                  </p>

                  <div className="p-4 bg-zwift-blue/10 rounded-lg border border-zwift-blue/30">
                    <p className="text-foreground font-semibold mb-2">The five standard pens</p>
                    <p className="text-sm">
                      0-180, 180-350, 350-520, 520-690 and 690-1000. Organisers can define fully custom bands, up to 10
                      categories, so a series you race may not use these at all. You may enter a pen above your score,
                      but never one below it.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={200}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground flex items-center">
                  <ShieldCheck size={22} className="mr-2 text-zwift-green" /> Pace Category Enforcement, threshold by
                  threshold
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Category Enforcement is the system the calculator at the top of this page computes. Zwift builds a 2
                    to 50 minute power curve from your last 90 days of riding - the window widened from 60 to 90 days on
                    9 June 2023 - and derives two metrics from it. zFTP is its estimate of your sustainable threshold
                    power. zMAP is your Maximal Aerobic Power, the 4 to 6 minute peak aerobic effort. Both are computed
                    from what you actually did on the bike, not from a test you chose to take.
                  </p>
                  <p>
                    &quot;Enforcement&quot; means what it says. Zwift blocks you at sign-up or at the start from entering
                    a pen below your measured ability. It is prevention, not an after-the-fact disqualification, which
                    is a real change from the ZwiftPower era where you could race a category all evening and find out
                    afterwards that your result had been struck.
                  </p>

                  <h3 className="text-lg font-bold text-foreground pt-2">Open and mixed races</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            Category
                          </th>
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            zMAP
                          </th>
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            or zFTP
                          </th>
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            Absolute zFTP floor
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {CE_OPEN.map((cat) => (
                          <tr key={cat.id} className="border-b border-border">
                            <td className="py-2 pr-4 font-semibold text-foreground">{cat.id}</td>
                            <td className="py-2 pr-4 font-mono">&ge; {fmtWkg(cat.zmapWkg)} W/kg</td>
                            <td className="py-2 pr-4 font-mono">&ge; {fmtWkg(cat.zftpWkg)} W/kg</td>
                            <td className="py-2 pr-4 font-mono">{cat.zftpFloorW} W</td>
                          </tr>
                        ))}
                        <tr className="border-b border-border">
                          <td className="py-2 pr-4 font-semibold text-foreground">D</td>
                          <td className="py-2 pr-4" colSpan={3}>
                            Below all of the above
                          </td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2 pr-4 font-semibold text-foreground">E</td>
                          <td className="py-2 pr-4" colSpan={3}>
                            New or returning riders with insufficient 90-day data, and open or uncategorised pens
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-lg font-bold text-foreground pt-2">Women-only races</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            Category
                          </th>
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            zMAP
                          </th>
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            or zFTP
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {CE_WOMEN.map((cat) => (
                          <tr key={cat.id} className="border-b border-border">
                            <td className="py-2 pr-4 font-semibold text-foreground">{cat.id}</td>
                            <td className="py-2 pr-4 font-mono">&ge; {fmtWkg(cat.zmapWkg)} W/kg</td>
                            <td className="py-2 pr-4 font-mono">&ge; {fmtWkg(cat.zftpWkg)} W/kg</td>
                          </tr>
                        ))}
                        <tr className="border-b border-border">
                          <td className="py-2 pr-4 font-semibold text-foreground">D</td>
                          <td className="py-2 pr-4" colSpan={2}>
                            Below all of the above
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm">
                    The women-only A threshold sits lower than the open A threshold, at {fmtWkg(CE_WOMEN[0].zmapWkg)}{" "}
                    W/kg zMAP or {fmtWkg(CE_WOMEN[0].zftpWkg)} W/kg zFTP against{" "}
                    {fmtWkg(CE_OPEN[0].zmapWkg)} and {fmtWkg(CE_OPEN[0].zftpWkg)}. B and C are identical across the two
                    sets. No absolute watt floors are published for the women-only categories.
                  </p>
                  <p className="text-sm">
                    All of these boundaries were raised by 5% on 21 August 2022, to bring them into line with the old
                    ZwiftPower numbers. The values above are as published in ZwiftInsider&apos;s August 2025 update.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={250}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground flex items-center">
                  <AlertTriangle size={22} className="mr-2 text-zwift-orange" /> The OR logic and the watt floor, done
                  properly
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Two rules trip people up, and the calculator above implements both of them exactly.
                  </p>
                  <p>
                    <strong className="text-foreground">The logic is OR.</strong> Crossing either threshold promotes you.
                    A rider at 3.30 W/kg zFTP is under the open B zFTP line of {fmtWkg(CE_OPEN[1].zftpWkg)}, but if
                    their zMAP is 4.20 W/kg they are over the B zMAP line of {fmtWkg(CE_OPEN[1].zmapWkg)}, and they are a
                    B. This is why leaving the zMAP field blank can under-state your category: punchy riders with a
                    strong five-minute effort get promoted on zMAP long before their threshold catches up.
                  </p>
                  <p>
                    <strong className="text-foreground">The watt figure is a floor, not a promoter.</strong> Nobody is
                    ever pushed up a category for having high absolute watts. The floor only ever holds you back. And
                    when it holds you back, you do not automatically drop one rung - you fall to the highest category
                    whose thresholds you actually meet, which can be two rungs down.
                  </p>

                  <div className="p-4 bg-muted rounded-lg border border-border">
                    <p className="text-foreground font-semibold mb-2">A worked example of the floor</p>
                    <p className="text-sm mb-3">
                      Take a 48 kg rider in an open race with a zFTP of 205 W and no strong zMAP. That is 4.27 W/kg,
                      which clears A&apos;s {fmtWkg(CE_OPEN[0].zftpWkg)} W/kg line. But 205 W is below A&apos;s{" "}
                      {CE_OPEN[0].zftpFloorW} W floor, so A is denied. They also clear B on W/kg, and 205 W is above
                      B&apos;s {CE_OPEN[1].zftpFloorW} W floor, so B is where they land: one rung down.
                    </p>
                    <p className="text-sm">
                      Now make the rider 45 kg with a 190 W zFTP. That is 4.22 W/kg, still over A&apos;s line and still
                      under A&apos;s {CE_OPEN[0].zftpFloorW} W floor. It clears B on W/kg as well, but 190 W is under
                      B&apos;s {CE_OPEN[1].zftpFloorW} W floor too, so B is denied in turn. They land in C, two rungs
                      below the category their W/kg alone would suggest. The rule is: keep walking down the list until
                      you find a category you satisfy on both counts. Put either example into the calculator above and
                      it walks down in exactly that order.
                    </p>
                  </div>

                  <p>
                    That has an uncomfortable consequence worth stating plainly. For light riders in open races the
                    floor, not the W/kg line, is often what decides the category, and losing weight raises your W/kg
                    while moving your absolute watts in the wrong direction. If your category is floor-bound, the only
                    route up is more watts. The reference table above marks with a star every cell where the floor is
                    the binding constraint at that weight.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={300}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground flex items-center">
                  <History size={22} className="mr-2 text-zwift-blue" /> The legacy ZwiftPower categories, and the myth
                  attached to them
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Before Category Enforcement, eligibility was decided by ZwiftPower from an FTP estimate derived from
                    your 20-minute race power, averaged across your best three races in the last 90 days and divided by
                    your weight. That system was retired for eligibility purposes on 28 March 2023. The numbers are
                    included here because they are still quoted constantly, usually incorrectly.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            Category
                          </th>
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            FTP in W/kg
                          </th>
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            Absolute floor
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {LEGACY_ZWIFTPOWER.map((cat) => (
                          <tr key={cat.id} className="border-b border-border">
                            <td className="py-2 pr-4 font-semibold text-foreground">{cat.id}</td>
                            <td className="py-2 pr-4 font-mono">
                              {cat.wkg !== null ? `${fmtWkg(cat.wkg)} W/kg` : "below 2.5 W/kg"}
                            </td>
                            <td className="py-2 pr-4 font-mono">{cat.floorW !== null ? `${cat.floorW} W` : "none"}</td>
                          </tr>
                        ))}
                        <tr className="border-b border-border">
                          <td className="py-2 pr-4 font-semibold text-foreground">E</td>
                          <td className="py-2 pr-4" colSpan={2}>
                            Open, no category
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
                    <p className="text-foreground font-semibold mb-2">Correcting a widespread myth</p>
                    <p className="text-sm">
                      The famous 250 W rule belonged to category A, not category B. And it was a floor rather than a
                      promoter: a very light rider above 4.0 W/kg whose absolute FTP was under 250 W was not forced up
                      into A. If you have ever been told &quot;you go up to B automatically once you hit 250 watts&quot;,
                      that has never been true under any of the three systems on this page.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={350}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground flex items-center">
                  <Users size={22} className="mr-2 text-zwift-green" /> Sandbagging, and why any of this exists
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Sandbagging is racing in a category below your ability. It ranges from the obviously deliberate -
                    entering a lower pen you know you can win - to the entirely passive, such as never doing a hard
                    enough effort for the game to notice how strong you have become. The rider&apos;s intent varies. The
                    effect on the race does not.
                  </p>
                  <p>
                    What makes it corrosive is that it is contagious. One rider two categories too strong does not just
                    take a win. They set a pace nobody else in the field can hold, the group splits in the first three
                    minutes, and forty people spend the next forty minutes riding a solo time trial they did not sign up
                    for. Do that for a few weeks and the honest riders in that pen conclude that racing is pointless and
                    stop entering, which shrinks the field, which makes the next race worse. A category system does not
                    exist to rank you. It exists to keep enough riders of comparable ability in one place that a race
                    can happen at all.
                  </p>
                  <p>
                    Both current systems are answers to this. Category Enforcement measures you from your own riding
                    data and blocks the entry before it happens, so you cannot quietly park a category too low. Racing
                    Score adds the other half: it moves on results, so consistently beating a field pushes you out of it
                    whether or not your power numbers ever change. Neither is perfect. Both are enormously better than
                    asking riders to self-select honestly.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={400}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground flex items-center">
                  <Flag size={22} className="mr-2 text-zwift-orange" /> Practical advice
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <h3 className="text-lg font-bold text-foreground">If you are stuck at the bottom of a category</h3>
                  <p>
                    This is the least fun place to be, and it is temporary. Use the gap figures in the calculator to see
                    which route is genuinely shorter for you - the zFTP number or the zMAP number - because they are
                    rarely equally far away. A rider whose zMAP gap is 15 W and whose zFTP gap is 40 W should be doing
                    four to six minute efforts, not sweet spot. A rider with the opposite profile should be doing the
                    opposite. Both metrics come off your last 90 days of riding, so they respond to what you actually do
                    in training, and the{" "}
                    <Link to="/zwift-ftp-calculator" className="text-zwift-orange hover:underline">
                      FTP calculator
                    </Link>{" "}
                    is a reasonable place to sanity-check where your threshold currently sits.
                  </p>
                  <p>
                    In the meantime, race the pen you are in for placement rather than for the win. Being the weakest
                    rider in a field is the single most effective training stimulus available on the platform, and it is
                    free.
                  </p>

                  <h3 className="text-lg font-bold text-foreground pt-2">Your first race in a new pen</h3>
                  <p>
                    Expect it to hurt in a specific way: the first two to five minutes will be harder than anything in
                    your old category, because the selection happens early and everyone knows it. Plan for it. Warm up
                    properly, start near the front, and accept that you may be pack fodder for a few weeks. Judge your
                    first three or four races on whether you made the front group, not on your finishing position.
                  </p>

                  <h3 className="text-lg font-bold text-foreground pt-2">Moving up is not a punishment</h3>
                  <p>
                    It reads like one, because your results get worse overnight. It is not. Promotion is the system
                    telling you that you outgrew the field, and staying put would mean taking wins from riders the pen
                    was built for. It is also the only way the racing stays interesting: the version of you that wins
                    every C race by two minutes is having a much worse time than the version that finishes 18th in B and
                    can see what to work on. If you want a stronger reason than that, the fitness you build getting
                    dropped in a harder pen is the fitness that makes the next category feel normal.
                  </p>
                  <p>
                    For a fuller walkthrough of how a Zwift race actually unfolds, the{" "}
                    <Link to="/blog/zwift-racing-for-beginners" className="text-zwift-orange hover:underline">
                      beginner&apos;s guide to Zwift racing
                    </Link>{" "}
                    covers pacing, positioning and the start. The rest of the{" "}
                    <Link to="/blog/category/racing" className="text-zwift-orange hover:underline">
                      racing archive
                    </Link>{" "}
                    and the{" "}
                    <Link to="/blog/category/training" className="text-zwift-orange hover:underline">
                      training archive
                    </Link>{" "}
                    go deeper on both halves of the problem.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={450}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground flex items-center">
                  <Scale size={22} className="mr-2 text-zwift-blue" /> What ZwiftPower is for now
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    ZwiftPower was founded in 2016 by Glen Knight and James Hodges as the unofficial results hub for the
                    platform. Its intellectual property was assigned to Zwift in October 2018, and Zwift took over
                    hosting and management in July 2020. It is still live, and it still matters, but it no longer
                    determines eligibility for anything.
                  </p>
                  <p>
                    Today it is a results archive and an analysis layer. You opt in through Connections in your Zwift
                    account. It verifies race results, can filter out unverified riders, and can apply organiser-set
                    heart-rate requirements. It displays your zFTP, your zMAP and your Racing Score, which makes it the
                    practical place to get the two numbers the calculator at the top of this page asks for. It also
                    hosts a Dual Recording power-comparison tool under Profile &gt; Analysis, for riders checking one
                    power source against another. You can reach it at{" "}
                    <a
                      href="https://zwiftpower.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zwift-orange hover:underline"
                    >
                      zwiftpower.com
                    </a>
                    .
                  </p>

                  <h3 className="text-lg font-bold text-foreground pt-2">A brief note on vELO / ZwiftRacing.app</h3>
                  <div className="p-4 bg-muted rounded-lg border border-border">
                    <p className="text-sm mb-3">
                      <strong className="text-foreground">Unofficial, and worth being clear about.</strong> vELO is a
                      third-party rating built by Tim Hanson at ZwiftRacing.app, independent of Zwift. It uses an
                      Elo-style algorithm that moves on results relative to expectation. Points-format races and team
                      time trials do not move it. Scratch races do, including ZRL scratch races.
                    </p>
                    <p className="text-sm mb-3">
                      Because it is unofficial, Zwift will not let you into a pen based on it. Organisers who run vELO
                      pens have to police entry themselves. If you have a vELO number, it tells you something useful
                      about how you finish - it does not change what Zwift will allow you to enter.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="border-b border-border">
                            <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                              vELO band
                            </th>
                            <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                              Points
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {VELO_BANDS.map((band) => (
                            <tr key={band.id} className="border-b border-border">
                              <td className="py-2 pr-4 font-semibold text-foreground">{band.id}</td>
                              <td className="py-2 pr-4 font-mono">{band.range}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={500}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-6 md:p-10 border-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-foreground flex items-center">
                  <CalendarDays size={22} className="mr-2 text-zwift-green" /> Dates, sources and a warning about
                  freshness
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Zwift changes these systems regularly, and it does not always announce the change loudly. Decay
                    alone has been switched on, off and on again inside a year. Every borrowed figure on this page is
                    therefore date-stamped where it appears, so you can see how old it is rather than assuming it is
                    current.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            Date
                          </th>
                          <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">
                            What happened
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="py-2 pr-4 font-mono whitespace-nowrap">21 Aug 2022</td>
                          <td className="py-2 pr-4">
                            All Category Enforcement boundaries raised 5% to align with the old ZwiftPower numbers
                          </td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2 pr-4 font-mono whitespace-nowrap">28 Mar 2023</td>
                          <td className="py-2 pr-4">
                            Legacy ZwiftPower FTP categories retired for eligibility purposes
                          </td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2 pr-4 font-mono whitespace-nowrap">9 Jun 2023</td>
                          <td className="py-2 pr-4">Power curve window widened from 60 days to 90 days</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2 pr-4 font-mono whitespace-nowrap">13 Sep 2024</td>
                          <td className="py-2 pr-4">Zwift forum announcement of the five standard Racing Score pens</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2 pr-4 font-mono whitespace-nowrap">7 Oct 2024</td>
                          <td className="py-2 pr-4">Zwift Racing Score launched</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2 pr-4 font-mono whitespace-nowrap">Oct 2024</td>
                          <td className="py-2 pr-4">Score decay switched off</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2 pr-4 font-mono whitespace-nowrap">Aug 2025</td>
                          <td className="py-2 pr-4">
                            Threshold values and the 85%-of-public-races adoption figure used on this page were
                            published
                          </td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2 pr-4 font-mono whitespace-nowrap">Mid-Sep 2025</td>
                          <td className="py-2 pr-4">Decay reintroduced with a 30-day grace period</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-2 pr-4 font-mono whitespace-nowrap">12 Nov 2025</td>
                          <td className="py-2 pr-4">Decay stops after any race or a new seed score</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm">
                    Sources used for the figures on this page:{" "}
                    <a
                      href="https://zwiftinsider.com/racing-score/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zwift-orange hover:underline"
                    >
                      ZwiftInsider on Racing Score
                    </a>
                    ,{" "}
                    <a
                      href="https://zwiftinsider.com/category-enforcement/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zwift-orange hover:underline"
                    >
                      ZwiftInsider on Category Enforcement
                    </a>
                    ,{" "}
                    <a
                      href="https://zwiftinsider.com/zwiftpower-ce/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zwift-orange hover:underline"
                    >
                      ZwiftInsider on ZwiftPower and CE
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://zwiftpower.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zwift-orange hover:underline"
                    >
                      ZwiftPower
                    </a>
                    .
                  </p>

                  <p className="text-sm flex items-start">
                    <Info size={16} className="mr-2 mt-0.5 flex-shrink-0 text-zwift-blue" />
                    <span>
                      Built and maintained by {AUTHOR.name}. If a threshold on this page has moved,{" "}
                      <Link to="/contact" className="text-zwift-orange hover:underline">
                        send it over
                      </Link>{" "}
                      and it gets corrected. The{" "}
                      <Link to="/editorial-policy" className="text-zwift-orange hover:underline">
                        editorial policy
                      </Link>{" "}
                      explains how that works, and the{" "}
                      <Link to="/faq" className="text-zwift-orange hover:underline">
                        FAQ
                      </Link>{" "}
                      answers the questions that come up most.
                    </span>
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={550}>
              <div className="bg-gradient-to-br from-zwift-orange/10 to-zwift-blue/10 rounded-2xl p-6 md:p-8 border-2 border-zwift-orange/20">
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground">Related</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { to: "/zwift-ftp-calculator", label: "Work out the power you can actually hold" },
                    { to: "/zwift-climb-time-calculator", label: "Climb times from your weight and watts" },
                    { to: "/zwift-climbs", label: "Every timed climb in Zwift, with its numbers" },
                    { to: "/alpeduzwiftcalculator", label: "Alpe du Zwift time calculator" },
                    { to: "/ventop-calculator", label: "Ven-Top time calculator" },
                    { to: "/alpe-vs-ventop", label: "Alpe du Zwift versus Ven-Top, compared" },
                    { to: "/blog/zwift-racing-for-beginners", label: "How a Zwift race actually unfolds" },
                    { to: "/blog/power-to-weight-ratio-science", label: "The science behind W/kg" },
                    { to: "/faq", label: "Frequently asked questions" },
                    { to: "/author", label: "Who writes these pages" },
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

export default ZwiftRacingCategoryCalculator;
