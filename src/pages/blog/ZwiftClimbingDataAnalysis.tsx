import BlogPost from "@/components/BlogPost";
import { Link } from "react-router-dom";

const bothClimbs = [
  { wkg: "2.5", alpe: "1:12:53", ven: "1:44:33" },
  { wkg: "3.0", alpe: "1:03:25", ven: "1:27:40" },
  { wkg: "3.2", alpe: "59:58", ven: "1:22:23" },
  { wkg: "3.5", alpe: "55:11", ven: "1:15:36" },
  { wkg: "4.0", alpe: "48:11", ven: "1:06:33" },
  { wkg: "4.5", alpe: "42:26", ven: "59:31" },
  { wkg: "5.0", alpe: "37:54", ven: "53:53" },
];

const halfSteps = [
  { step: "2.5 to 3.0", alpe: "9:28", ven: "16:54" },
  { step: "3.0 to 3.5", alpe: "8:14", ven: "12:04" },
  { step: "3.5 to 4.0", alpe: "7:00", ven: "9:03" },
  { step: "4.0 to 4.5", alpe: "5:45", ven: "7:02" },
  { step: "4.5 to 5.0", alpe: "4:31", ven: "5:38" },
];

const tenthSteps = [
  { from: "2.5", alpe: "2:00", ven: "3:54" },
  { from: "3.0", alpe: "1:45", ven: "2:43" },
  { from: "3.5", alpe: "1:30", ven: "2:01" },
  { from: "4.0", alpe: "1:15", ven: "1:33" },
  { from: "4.5", alpe: "1:00", ven: "1:13" },
  { from: "5.0", alpe: "0:45", ven: "1:00" },
];

const tenPercent = [
  { from: "2.6", to: "2.86", before: "1:10:54", after: "1:05:57", faster: "7.0%" },
  { from: "3.0", to: "3.30", before: "1:03:25", after: "58:20", faster: "8.0%" },
  { from: "3.4", to: "3.74", before: "56:44", after: "51:40", faster: "8.9%" },
  { from: "3.8", to: "4.18", before: "50:50", after: "45:58", faster: "9.6%" },
  { from: "4.2", to: "4.62", before: "45:44", after: "41:14", faster: "9.9%" },
  { from: "4.6", to: "5.06", before: "41:25", after: "37:27", faster: "9.6%" },
  { from: "5.0", to: "5.50", before: "37:54", after: "34:38", faster: "8.7%" },
];

const alpeTargets = [
  { target: "1:15:00", wkg: "2.40", w65: "156 W", w75: "180 W", w85: "204 W" },
  { target: "1:10:00", wkg: "2.65", w65: "172 W", w75: "199 W", w85: "225 W" },
  { target: "1:05:00", wkg: "2.91", w65: "189 W", w75: "218 W", w85: "247 W" },
  { target: "1:00:00", wkg: "3.20", w65: "208 W", w75: "240 W", w85: "272 W" },
  { target: "55:00", wkg: "3.51", w65: "228 W", w75: "263 W", w85: "298 W" },
  { target: "50:00", wkg: "3.86", w65: "251 W", w75: "290 W", w85: "328 W" },
  { target: "45:00", wkg: "4.26", w65: "277 W", w75: "320 W", w85: "362 W" },
  { target: "40:00", wkg: "4.75", w65: "309 W", w75: "356 W", w85: "404 W" },
];

const venTargets = [
  { target: "2:00:00", wkg: "2.17", w65: "141 W", w75: "163 W", w85: "184 W" },
  { target: "1:50:00", wkg: "2.37", w65: "154 W", w75: "178 W", w85: "201 W" },
  { target: "1:40:00", wkg: "2.62", w65: "170 W", w75: "197 W", w85: "223 W" },
  { target: "1:30:00", wkg: "2.92", w65: "190 W", w75: "219 W", w85: "248 W" },
  { target: "1:20:00", wkg: "3.30", w65: "215 W", w75: "248 W", w85: "281 W" },
  { target: "1:10:00", wkg: "3.79", w65: "246 W", w75: "284 W", w85: "322 W" },
  { target: "1:00:00", wkg: "4.46", w65: "290 W", w75: "335 W", w85: "379 W" },
];

const ZwiftClimbingDataAnalysis = () => {
  const content = (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">What This Article Is Built On, and What It Is Not</h2>
        <p className="mb-4">
          Every climbing prediction on this site comes out of one dataset: about 800 verified ZwiftPower finishes. Over 500 of them are Alpe du Zwift, over 300 are Ven Top. Each record is the same two numbers and nothing more, a power-to-weight ratio paired with a finishing time. How those rides were collected, filtered and fitted is written up in full in the{" "}
          <Link to="/blog/regression-analysis-methodology" className="text-zwift-orange hover:underline">regression analysis methodology</Link>.
        </p>
        <p className="mb-4">
          Start with what is missing, because it decides what this article is allowed to say. There are no power files. No second-by-second traces, no split at each hairpin, no heart rate, no cadence, no gear selection. There is no record of who quit halfway up, so there is no such thing as a "failed attempt" in this data. There is no rider identity linking a third attempt back to a first, so there is no way to see anyone improve. Two numbers per ride cannot tell you how an effort was distributed inside a climb, and no amount of analysis pulls out information the dataset never held.
        </p>
        <p className="mb-4">
          An earlier version of this article got that wrong. It reported pacing patterns, power distributions across each third of the climb, blow-up rates and repeat-attempt learning curves as if they had been measured here. They had not been. They could not have been. Those claims are gone. What is left is either arithmetic you can redo yourself on the two fitted curves, or it is clearly labelled as reasoning and my own riding experience. The standard I am holding this to is set out in the{" "}
          <Link to="/editorial-policy" className="text-zwift-orange hover:underline">editorial policy</Link>.
        </p>
        <p className="mb-4">
          What 800 pairs of numbers do support is a curve for each climb. That turns out to be worth a lot more than it sounds, because a curve answers questions a table of times cannot: what your next 0.1 W/kg is worth, why that answer changes as you get fitter, what power a target time demands, and exactly where the model stops describing and starts guessing.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The Two Curves</h2>
        <p className="mb-4">
          Alpe du Zwift and Ven Top get different equations because their data has different shapes. Both were fitted the same way, by finding the curve that runs closest to the observed points, but the family of curve that fits best is not the same for the two climbs.
        </p>

        <h3 className="text-xl font-bold mb-3">Alpe du Zwift: a parabola</h3>
        <div className="rounded-lg border bg-muted/40 px-4 py-3 mb-4">
          <code className="text-sm font-mono break-words">time_seconds = 148.60 * (W/kg)^2 - 1954.08 * (W/kg) + 8329.87</code>
        </div>
        <p className="mb-4">
          One input, three constants. The linear term does the bulk of the work and pulls the time down as power rises. The quadratic term pushes back, and it is the reason the curve flattens instead of falling forever. This is the equation behind the{" "}
          <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">Alpe du Zwift calculator</Link>, not a simplified version of it. Type numbers in and this is the arithmetic that runs.
        </p>

        <h3 className="text-xl font-bold mb-3">Ven Top: an inverse</h3>
        <div className="rounded-lg border bg-muted/40 px-4 py-3 mb-4">
          <code className="text-sm font-mono break-words">time_minutes = 3.205 + 253.38 / (W/kg)</code>
        </div>
        <p className="mb-4">
          A different shape entirely. Time is inversely proportional to power-to-weight, plus a fixed 3.205 minutes that the fit needed in order to sit on the data. That constant is not a physical quantity, it is the intercept the regression chose, and it becomes a problem at the far end of the curve in a way I will come back to. This drives the{" "}
          <Link to="/ventop-calculator" className="text-zwift-orange hover:underline">Ven Top calculator</Link>.
        </p>
        <p className="mb-4">
          Run both across the range the data actually covers and you get this:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">W/kg</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Alpe du Zwift</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Ven Top</th>
              </tr>
            </thead>
            <tbody>
              {bothClimbs.map((row) => (
                <tr key={row.wkg} className="border-b border-border">
                  <td className="py-2 pr-4">{row.wkg}</td>
                  <td className="py-2 pr-4">{row.alpe}</td>
                  <td className="py-2 pr-4">{row.ven}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-4 mt-4">
          Ven Top costs more time than the Alpe at every level of fitness, and the penalty stays close to 40% across the whole fitted range: 43% at 2.5 W/kg, a minimum of 37% around 3.5, and 42% again by 5.0. Getting stronger does not shrink the gap, it only shortens both sides of it.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">What a Power Improvement Is Worth Depends on Where You Start</h2>
        <p className="mb-4">
          This is the single most useful thing the curves say, and it is the one riders most often get backwards. "Add half a watt per kilo" does not mean the same thing to a 2.5 W/kg rider and a 4.5 W/kg rider.
        </p>

        <h3 className="text-xl font-bold mb-3">In minutes, the payoff shrinks</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Improvement</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Time saved on the Alpe</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Time saved on Ven Top</th>
              </tr>
            </thead>
            <tbody>
              {halfSteps.map((row) => (
                <tr key={row.step} className="border-b border-border">
                  <td className="py-2 pr-4">{row.step} W/kg</td>
                  <td className="py-2 pr-4">{row.alpe}</td>
                  <td className="py-2 pr-4">{row.ven}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-4 mt-4">
          Going from 2.5 to 3.0 W/kg buys about nine and a half minutes on the Alpe. The identical half a watt per kilo, moved from 4.0 to 4.5, buys five and three quarter minutes. Same effort on paper, 40% less reward.
        </p>
        <p className="mb-4">
          The Alpe column shrinks by an exactly constant amount each row: 9:28, 8:14, 7:00, 5:45, 4:31, each one about 74 seconds less than the one above. That is not a coincidence in the data, it is what a quadratic is. Two times 148.60 times 0.5 squared is 74.3 seconds, so every half-watt step you climb the ladder is worth 74.3 seconds less than the step below it. The whole diminishing-returns story on this climb is contained in that one coefficient.
        </p>
        <p className="mb-4">
          Broken down to the increment people actually chase, a tenth of a watt per kilo:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Starting point</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Value of +0.1 W/kg, Alpe</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Value of +0.1 W/kg, Ven Top</th>
              </tr>
            </thead>
            <tbody>
              {tenthSteps.map((row) => (
                <tr key={row.from} className="border-b border-border">
                  <td className="py-2 pr-4">{row.from} W/kg</td>
                  <td className="py-2 pr-4">{row.alpe}</td>
                  <td className="py-2 pr-4">{row.ven}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-4 mt-4">
          A tenth is worth two minutes at 2.5 W/kg on the Alpe and 45 seconds at 5.0 W/kg. On Ven Top a tenth is worth roughly twice as much at the low end, because a longer climb multiplies every difference by more time spent climbing.
        </p>

        <h3 className="text-xl font-bold mb-3">In percentage terms, the payoff does not shrink</h3>
        <p className="mb-4">
          Here the curve says something genuinely counterintuitive, and it is worth being precise about it. Ask not "how many minutes does a 10% fitness gain save" but "what percentage of my time does it save", and the answer goes the other way:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">From</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">To (+10%)</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Alpe before</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Alpe after</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Faster by</th>
              </tr>
            </thead>
            <tbody>
              {tenPercent.map((row) => (
                <tr key={row.from} className="border-b border-border">
                  <td className="py-2 pr-4">{row.from}</td>
                  <td className="py-2 pr-4">{row.to}</td>
                  <td className="py-2 pr-4">{row.before}</td>
                  <td className="py-2 pr-4">{row.after}</td>
                  <td className="py-2 pr-4">{row.faster}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-4 mt-4">
          A 10% gain is worth 7.0% of your time at 2.6 W/kg and 9.9% at 4.2 W/kg. The reason is arithmetic rather than physiology: the minutes saved fall as you get fitter, but the total time you are dividing them into falls faster. Above roughly 4.2 W/kg the percentage starts dropping again, which is the parabola beginning to flatten out towards its turning point.
        </p>
        <p className="mb-4">
          Ven Top behaves differently and more simply. Because its equation is almost a pure inverse, a 10% rise in W/kg buys close to 8.7% of your time no matter where you start, moving only from 8.8% at 2.4 W/kg to 8.5% at 5.2 W/kg. On the longer climb, a percentage of fitness converts into roughly the same percentage of time for everybody.
        </p>
        <p className="mb-4">
          So which framing is right? Both, for different questions. If you want to know whether a training block is worth doing, the percentage column is the honest one, and it says the work never stops paying. If you want to know whether you will hit a specific clock time, the minutes column is the one that matters, and it says the clock gets stingier the faster you already are.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Reading the Curve Backwards: From a Target Time to a Number on Your Screen</h2>
        <p className="mb-4">
          A prediction is more useful inverted. You rarely wonder what 3.4 W/kg gives you. You wonder what it takes to go under the hour. Both equations rearrange cleanly.
        </p>
        <p className="mb-4">
          For the Alpe, set the equation equal to your target time T in seconds and take the lower root of the quadratic:
        </p>
        <div className="rounded-lg border bg-muted/40 px-4 py-3 mb-4">
          <code className="text-sm font-mono break-words">W/kg = [ 1954.08 - sqrt(1954.08^2 - 594.4 * (8329.87 - T)) ] / 297.2</code>
        </div>
        <p className="mb-4">
          For Ven Top it is a single line, with T in minutes:
        </p>
        <div className="rounded-lg border bg-muted/40 px-4 py-3 mb-4">
          <code className="text-sm font-mono break-words">W/kg = 253.38 / (T - 3.205)</code>
        </div>
        <p className="mb-4">
          Run that across the times riders actually aim for, then multiply by body weight to get the number you have to hold on screen. Watts below are the W/kg column times the rider weight, rounded to the nearest watt:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Alpe target</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">W/kg needed</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">65 kg rider</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">75 kg rider</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">85 kg rider</th>
              </tr>
            </thead>
            <tbody>
              {alpeTargets.map((row) => (
                <tr key={row.target} className="border-b border-border">
                  <td className="py-2 pr-4">{row.target}</td>
                  <td className="py-2 pr-4">{row.wkg}</td>
                  <td className="py-2 pr-4">{row.w65}</td>
                  <td className="py-2 pr-4">{row.w75}</td>
                  <td className="py-2 pr-4">{row.w85}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-4 mt-4">
          The sub-hour row is where the widely quoted 3.2 W/kg comes from. It is not folklore, it is this curve solved for 3,600 seconds, and the fit returns 59:58 at exactly 3.20. For a 75 kg rider that is 240 W held for an hour, which is a genuinely hard ask and the reason the hour is a real milestone rather than a soft one.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Ven Top target</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">W/kg needed</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">65 kg rider</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">75 kg rider</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">85 kg rider</th>
              </tr>
            </thead>
            <tbody>
              {venTargets.map((row) => (
                <tr key={row.target} className="border-b border-border">
                  <td className="py-2 pr-4">{row.target}</td>
                  <td className="py-2 pr-4">{row.wkg}</td>
                  <td className="py-2 pr-4">{row.w65}</td>
                  <td className="py-2 pr-4">{row.w75}</td>
                  <td className="py-2 pr-4">{row.w85}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mb-4 mt-4">
          Notice how much closer together the Ven Top rows are at the top. Two hours needs 2.17 W/kg, one hour fifty needs 2.37. Fifteen watts of difference for a 75 kg rider buys ten minutes, because on a two-hour climb a small power difference gets multiplied by an enormous amount of time. The same table at the bottom end is brutal in the other direction: going from 1:10:00 to 1:00:00 costs another 0.67 W/kg, which takes that same 75 kg rider from 284 W to 335 W.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">What a 10 Percent FTP Gain Actually Buys</h2>
        <p className="mb-4">
          This is worth stating carefully, because it is a claim I used to make from data I did not have. It is derivable from the equation, so here it is from the equation.
        </p>
        <p className="mb-4">
          Take a rider at 3.33 W/kg, which is 250 W for a 75 kg rider. The Alpe curve puts 3.33 W/kg at 57:51. Raise their FTP by 10% with weight unchanged and they are at 3.66 W/kg, which the curve puts at 52:49. That is 8.7% faster. Ven Top gives almost the same answer, 1:19:18 down to 1:12:26, again 8.7%. So the rough rule holds: a 10% fitness gain is worth roughly 9% of your climbing time.
        </p>
        <p className="mb-4">
          The caveats are real, though. The curve takes W/kg, not FTP, so the 10% has to survive the division. Gain 10% of FTP and 3 kg at the same time and most of it disappears. The curve also takes the average power you actually hold for the whole climb, not your FTP. Nobody climbs at 100% of FTP for an hour, so what matters is that the fraction you can hold stays the same after the training block as before it. And the percentage is not universal: as the table above shows, the same 10% is worth 7.0% at 2.6 W/kg and 9.9% at 4.2 W/kg.
        </p>
        <p className="mb-4">
          It is also worth seeing the two levers side by side at one point on the curve. At 3.33 W/kg, losing 1 kg while holding 250 W takes you to 3.38 W/kg and the estimate from 57:51 to 57:03, about 48 seconds. Adding 10 W at 75 kg takes you to 3.47 W/kg and the estimate to 55:38, about two minutes. Both are legitimate ways up the curve. Only one of them is available every single week without limit, and it is not the one involving your body mass. If you want to see the same trade at your own numbers rather than mine, the{" "}
          <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">Alpe du Zwift calculator</Link> will run both for you in about ten seconds.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Where the Fit Is Trustworthy and Where It Is Guessing</h2>
        <p className="mb-4">
          A fitted curve is a description of the rides it was given. It has no opinion about rides unlike those, which does not stop it from returning a confident-looking number for them. Here is where the line sits.
        </p>

        <h3 className="text-xl font-bold mb-3">Inside the fitted range, roughly 2.5 to 5.0 W/kg</h3>
        <p className="mb-4">
          This is where the data lives, and where the reported holdout error of under 3% applies. Three percent is not a rounding error. At 3.33 W/kg the point estimate is 57:51, and a 3% band around it runs from 56:06 to 59:35. That is a three and a half minute spread, which is the difference between beating the hour and missing it.
        </p>
        <p className="mb-4">
          Another way to feel the same uncertainty: that time band corresponds to anything between 3.22 and 3.44 W/kg. So a 3% error band is equivalent to not knowing your own power-to-weight ratio to better than about a tenth. Given trainer tolerances of 2% or more, plus whatever your bathroom scales are doing, that is roughly the precision your inputs deserve anyway.
        </p>

        <h3 className="text-xl font-bold mb-3">Above about 5.5 W/kg, the Alpe curve breaks</h3>
        <p className="mb-4">
          Parabolas turn around. This one turns at 1954.08 divided by twice 148.60, which is 6.57 W/kg. At that point the equation says 31:46, and past it the curve rises again: it returns 31:47 at 6.5 W/kg and 32:13 at 7.0. The model is claiming that a rider who gets stronger will climb slower, which is obviously false. It is not a flaw in the fitting, it is what happens when you evaluate a shape well outside the data that produced it. Treat any Alpe number above about 5.5 W/kg as extrapolation and anything near 6.5 as meaningless.
        </p>

        <h3 className="text-xl font-bold mb-3">The Ven Top curve fails differently</h3>
        <p className="mb-4">
          An inverse never turns around, so it does not produce the same obvious nonsense. It fails quietly instead. As W/kg rises, the time heads towards the constant, so the equation says a rider with infinite power would still take 3.2 minutes to cover 20.9 km and 1,534 m of climbing. Long before that it is already wrong: at 8 W/kg it predicts 34:53, which is not a credible time for that climb. At the other end, feed it 1.5 W/kg and it returns 2:52:08, well below the range the fit ever saw. Both climbs are trustworthy in the middle and untrustworthy at the edges, they just signal it differently.
        </p>

        <h3 className="text-xl font-bold mb-3">What the curve quietly assumes about your ride</h3>
        <p className="mb-4">
          It takes one number for a ride that lasted an hour. That single number carries assumptions: a solo effort, no draft, reasonably steady power rather than repeated surges, and standard equipment. Ride the Alpe in a group with wheels to sit on, or attack every hairpin and soft-pedal between them, and you are asking the model about a kind of ride it was not fitted on. It will still answer.
        </p>
        <p className="mb-4">
          The deepest limitation is the least obvious one: the curve is descriptive, not causal. It does not know why riders around 4 W/kg finish when they do. It knows that they historically have. If the population of riders who post 4 W/kg efforts also tends to pace well, own good equipment and pick good moments to attempt the climb, all of that is baked into the coefficients and none of it is separable. For climbs these two fits do not cover, the{" "}
          <Link to="/zwift-climb-time-calculator" className="text-zwift-orange hover:underline">Zwift climb time calculator</Link> takes the opposite approach and works forwards from physics instead of backwards from finishing times, which fails in a completely different set of ways.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">What the Numbers Cannot Tell You, and What I Think Anyway</h2>
        <p className="mb-4">
          Everything above this heading is arithmetic you can check. Everything below it is not. I have no split data, no power traces and no record of anyone's repeat attempts, so nothing in this section is a measured finding and none of it should be read as one. It is mechanism plus my own riding, and I am flagging it rather than dressing it up, because the previous version of this article dressed it up and that was wrong.
        </p>

        <h3 className="text-xl font-bold mb-3">Why starting too hard costs more than it gains</h3>
        <p className="mb-4">
          The model takes your average power for the whole climb, which means it is structurally incapable of representing pacing at all. Two riders with identical averages get identical predictions whether one held it flat and the other spent the first ten minutes 40 W over and the last ten minutes 40 W under. The equation cannot see the difference. That does not mean the difference is not there.
        </p>
        <p className="mb-4">
          The mechanism is well understood in the physiology literature and it does not need my data to be plausible. Above your threshold you are spending a finite anaerobic reserve, and on a sustained climb you never get a descent or a wheel to hide behind to buy it back. Every watt-minute you spend in the first three hairpins is taken out of an account you cannot top up before the top, and the interest is paid in the last third when your average power collapses below what you could otherwise have held. So the surge does not trade evenly. You get its seconds now at full price and give back more than you got later.
        </p>
        <p className="mb-4">
          I have no data proving how common this is, but I have done it to myself more times than I would like to admit. The first three hairpins of the Alpe feel absurdly easy at target power, the gradient is friendly, other riders are going past, and 25 W over target costs nothing you can perceive. Hairpin 12 is where the invoice arrives.
        </p>

        <h3 className="text-xl font-bold mb-3">The case for an even or very slightly rising effort</h3>
        <p className="mb-4">
          My own preference is a flat effort with a small lift in the final quarter, and the reasoning is straightforward even though I cannot demonstrate it from this dataset. Steady power avoids the reserve-spending problem entirely. Holding a little back early is cheap because you can always spend it later, whereas overspending early cannot be undone at all. The asymmetry is the whole argument: the downside of starting slightly too easy is a few seconds you can claw back, and the downside of starting too hard is a fade that lasts twenty minutes.
        </p>
        <p className="mb-4">
          There is a practical version of this that needs no theory. Pick your target power from the tables above, ride the first ten minutes at that number minus five watts, and decide at halfway whether you have anything spare. If you do, spend it. If you do not, you have not lost the climb in the first ten minutes, which is the most common way to lose it.
        </p>

        <h3 className="text-xl font-bold mb-3">Why my later attempts were faster than my first</h3>
        <p className="mb-4">
          I got faster on both climbs across attempts in periods where I do not believe my fitness changed much. I cannot show you that in this dataset because the dataset has no rider identities and no attempt histories, so treat this as one person's account.
        </p>
        <p className="mb-4">
          What changed was almost entirely logistical and tactical. Knowing which gear the steep pitches need before I hit them. Having a fan pointed correctly and a bottle within reach, because a 90 minute Ven Top effort is as much a heat management problem as a power problem. Knowing what the first ten minutes are supposed to feel like at target power, which is the only reliable defence against the surge above. Knowing roughly where I would want to quit, so that arriving there is expected rather than alarming. None of that is fitness, and all of it is worth time.
        </p>

        <h3 className="text-xl font-bold mb-3">Breaking the climb into pieces</h3>
        <p className="mb-4">
          The Alpe hands you the structure for free with 21 numbered hairpins counting down. I ride it as three blocks of seven rather than one block of 21, and I only allow myself to think about the block I am in. Ven Top has no equivalent signage, so I split it by time instead: the first 30 minutes are supposed to feel too easy, the middle is where the work is, the last 20 minutes are where the effort is allowed to rise.
        </p>
        <p className="mb-4">
          Does that make people faster? I cannot show you that it does, and I would be suspicious of anyone claiming a number for it. It makes an hour of unpleasant work more tractable for me, which is enough reason to mention it and not enough reason to call it a finding. If you want the full route-specific version of both, I have written them up separately for{" "}
          <Link to="/blog/conquer-alpe-du-zwift" className="text-zwift-orange hover:underline">Alpe du Zwift</Link> and{" "}
          <Link to="/blog/mastering-ven-top" className="text-zwift-orange hover:underline">Ven Top</Link>.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">How I Would Use All of This</h2>
        <p className="mb-4">
          Start by reading the curve backwards rather than forwards. Pick the time you want, take the W/kg from the target table, multiply by your weight, and you now have one number to hold on screen instead of a vague intention to ride hard. That single step is most of the value the fits provide.
        </p>
        <p className="mb-4">
          Then check that number against where you sit on the curve. If you are at 2.6 W/kg, a 10% training gain moves you five minutes on the Alpe and it is the highest-leverage thing available to you in absolute terms. If you are at 4.5 W/kg, the same 10% moves you four minutes, and pacing errors of the kind described above can easily cost you more than that. The fitter you get, the larger the share of your finishing time that sits in execution rather than fitness.
        </p>
        <p className="mb-4">
          Treat every prediction as a band rather than a point. Three percent at the hour mark is three and a half minutes. If the calculator says 59:30, you do not have a sub-hour ride, you have a coin flip that pacing and equipment and the day itself will decide. If it says 57:00, you have some room.
        </p>
        <p className="mb-4">
          And be clear-eyed about which questions this dataset can answer. It can tell you what a given power-to-weight ratio has historically produced on two specific climbs, how that changes as you move along the curve, and where it stops being reliable. It cannot tell you how to pace, because it never saw anyone pace anything. Anyone offering you percentage splits by thirds of a climb should be asked what data those came from. That is the question that made me rewrite this article, and the reasoning behind it is set out in the{" "}
          <Link to="/blog/regression-analysis-methodology" className="text-zwift-orange hover:underline">methodology write-up</Link> and the{" "}
          <Link to="/editorial-policy" className="text-zwift-orange hover:underline">editorial policy</Link>.
        </p>
      </div>

      <div className="border-t pt-6 mt-8">
        <h3 className="text-xl font-bold mb-4">Related Resources</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          <li>
            <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">
              Alpe du Zwift Calculator - the fitted curve in this article, run on your numbers
            </Link>
          </li>
          <li>
            <Link to="/ventop-calculator" className="text-zwift-orange hover:underline">
              Ven Top Calculator - the inverse fit for the longer climb
            </Link>
          </li>
          <li>
            <Link to="/zwift-climb-time-calculator" className="text-zwift-orange hover:underline">
              Zwift Climb Time Calculator - a physics model for climbs the fits do not cover
            </Link>
          </li>
          <li>
            <Link to="/blog/regression-analysis-methodology" className="text-zwift-orange hover:underline">
              How the regression models were built, validated and limited
            </Link>
          </li>
          <li>
            <Link to="/editorial-policy" className="text-zwift-orange hover:underline">
              Editorial policy - what counts as a measured claim on this site
            </Link>
          </li>
          <li>
            <Link to="/blog/conquer-alpe-du-zwift" className="text-zwift-orange hover:underline">
              Conquer the Alpe du Zwift: Tips for a Faster Climb
            </Link>
          </li>
          <li>
            <Link to="/blog/mastering-ven-top" className="text-zwift-orange hover:underline">
              Mastering Ven-Top: Surviving Zwift's Toughest Ascent
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <BlogPost
      title="The Data Behind Zwift Climbing: What 800 Verified Finishing Times Show"
      date="20-12-2025"
      relatedCalculators={[
        {
          name: "Alpe du Zwift Calculator",
          path: "/alpeduzwiftcalculator",
          description: "Predict your Alpe du Zwift climbing time based on your weight and power"
        },
        {
          name: "Ven Top Calculator",
          path: "/ventop-calculator",
          description: "Calculate your Ven Top time and see how the inverse fit behaves"
        }
      ]}
      content={content}
    />
  );
};

export default ZwiftClimbingDataAnalysis;
