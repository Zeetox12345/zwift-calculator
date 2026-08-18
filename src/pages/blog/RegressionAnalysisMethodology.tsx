import { Link } from "react-router-dom";

import BlogPost from "@/components/BlogPost";

const RegressionAnalysisMethodology = () => {
  const content = (
    <div className="space-y-8">
      {/* What this is */}
      <div>
        <p className="mb-4 text-lg leading-relaxed">
          Every number this site produces for Alpe du Zwift or Ven-Top comes out of one of two fitted equations.
          This is how those equations were made, and where they should not be trusted.
        </p>
        <p className="mb-4">
          I should set expectations first. This is one person with a spreadsheet, a statistics course and a lot of
          hours on Zwift. It is not a laboratory, it is not peer-reviewed, and the dataset is small enough that I
          will keep saying so. What I can offer is that every step is described plainly enough for you to disagree
          with it, and both equations are published in full so you can check any output by hand.
        </p>
        <p className="mb-4">
          If you want the results rather than the method, they are in{" "}
          <Link to="/blog/the-data-behind-zwift-climbing" className="text-zwift-orange hover:underline">
            the article on what the data actually shows
          </Link>
          . This one is about how the curves were built.
        </p>
      </div>

      {/* The data */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The data, and what a single record contains</h2>
        <p className="mb-4">
          The dataset is roughly 500 Alpe du Zwift results and roughly 300 Ven-Top results, taken from ZwiftPower.
          Each record is exactly two things: a power-to-weight figure, and a finishing time for the timed segment.
        </p>
        <p className="mb-4">
          That is worth stating precisely, because it defines what the whole site can honestly claim. There are no
          timestamps, so nothing here can say anything about time of day. There are no power traces, so nothing here
          can describe how riders distribute their effort within a climb. There are no repeat attempts linked to
          individuals, so nothing here can describe improvement over time. Roughly 800 pairs of numbers is the
          entire evidence base, and any claim on this site that needs more than that is either labelled as reasoning
          and personal experience or should not be there at all.
        </p>
        <p className="mb-4">
          I used verified results specifically. ZwiftPower's verification requires a rider to have a recognised
          power source and applies consistency checks, which filters out a good deal of the obviously impossible.
          It does not catch everything. A miscalibrated trainer reporting 5% high produces a perfectly plausible
          record that is simply wrong, and nothing in this method can detect that.
        </p>
        <p className="mb-4">
          I deliberately kept the full spread of abilities rather than concentrating on fast riders. A curve fitted
          only to 4.5 W/kg and above would be useless to most of the people who visit this site, and the
          interesting part of the shape happens lower down.
        </p>
      </div>

      {/* Model selection */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Why not a straight line</h2>
        <p className="mb-4">
          The first thing anyone tries is a straight line: time equals some constant times W/kg, plus another
          constant. It does not work, and the reason is worth understanding because it is a property of the problem
          rather than of the data.
        </p>
        <p className="mb-4">
          Time is the inverse of speed. If you double your speed you halve your time, so equal increases in power
          do not buy equal savings in time. Going from 2.5 to 3.0 W/kg on the Alpe saves far more than going from
          4.5 to 5.0 does, even though both are a 0.5 W/kg improvement. A straight line cannot represent that; it
          insists every 0.5 W/kg is worth the same number of minutes, which contradicts both the data and the
          physics.
        </p>
        <p className="mb-4">
          So the model has to bend. The question is what shape to use, and there is more than one defensible answer.
        </p>
      </div>

      {/* The two curves */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Two climbs, two different shapes</h2>
        <p className="mb-4">
          The two climbs ended up with different functional forms, which was not the original plan.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">Alpe du Zwift: a quadratic</h3>
        <div className="my-4 p-4 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-sm">
            time in seconds = 148.60 &times; (W/kg)&sup2; &minus; 1954.08 &times; (W/kg) + 8329.87
          </p>
        </div>
        <p className="mb-4">
          A second-order polynomial fitted the Alpe data well across the range where the records actually sit,
          roughly 2.5 to 5.0 W/kg. The quadratic term is what produces the flattening: each additional 0.1 W/kg
          saves less time than the one before it.
        </p>
        <p className="mb-4">
          It also has a known and serious failure mode, which I would rather point out myself. A parabola turns
          around. This one turns at 1954.08 divided by twice 148.60, which is 6.57 W/kg, and beyond that point the
          equation claims a stronger rider climbs slower. That is obviously false. It is not a flaw in the fitting,
          it is what happens when a shape is evaluated far outside the data that produced it.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">Ven-Top: an inverse</h3>
        <div className="my-4 p-4 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-sm">time in minutes = 3.205 + 253.38 &divide; (W/kg)</p>
        </div>
        <p className="mb-4">
          Ven-Top is longer and slightly shallower, and an inverse relationship described it better than a
          polynomial did. That form is also closer to what the physics suggests, since on a sustained climb vertical
          speed is roughly proportional to power per kilogram, and time is distance over speed.
        </p>
        <p className="mb-4">
          It fails differently and more quietly. An inverse never turns around, so it never produces obvious
          nonsense. Instead it tends towards its constant, so the equation implies a rider with infinite power would
          still need 3.2 minutes for 20.9 km and 1,534 m. Long before that it has stopped being credible.
        </p>
        <p className="mb-4">
          Both failure modes, and the ranges where each curve is worth believing, are worked through in detail in{" "}
          <Link to="/blog/the-data-behind-zwift-climbing" className="text-zwift-orange hover:underline">
            the data article
          </Link>
          .
        </p>
      </div>

      {/* Validation */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Checking the fit against data it had not seen</h2>
        <p className="mb-4">
          A curve fitted to a set of points will always describe those points reasonably. The question is whether it
          describes points it was never shown, so part of the data was held back from the fitting and used only to
          test the result afterwards.
        </p>
        <p className="mb-4">
          On that held-out data the mean absolute error came out under 3% within the fitted range. That is the
          number quoted everywhere on this site, and it is worth being concrete about what it means rather than
          letting it sound better than it is.
        </p>
        <div className="my-6 p-4 rounded-lg bg-muted/50 border border-border">
          <p className="text-sm mb-2">
            At 3.33 W/kg the Alpe estimate is <strong>57:51</strong>.
          </p>
          <p className="text-sm mb-2">
            A 3% band around that runs from <strong>56:06 to 59:35</strong>.
          </p>
          <p className="text-sm text-muted-foreground">
            Three and a half minutes wide, which is the difference between beating the hour and missing it. The
            model is a guide to what is likely, not a promise.
          </p>
        </div>
        <p className="mb-4">
          There is a second, cruder check that I find more convincing than the first. Roughly 3.2 W/kg is widely
          treated among Zwift riders as the sub-hour benchmark for the Alpe, and that consensus formed independently
          of anything on this site. The equation returns 59:58 at 3.2 W/kg. Agreeing with a number the community
          arrived at separately is weak evidence, but it is evidence, and it would have been a strong warning sign
          if the fit had disagreed.
        </p>
      </div>

      {/* Outliers */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What I did about outliers</h2>
        <p className="mb-4">
          Some records sit a long way off the trend. The temptation is to delete them until the curve looks tidy,
          which is also the fastest way to produce a model that describes your preferences rather than the sport.
        </p>
        <p className="mb-4">
          The distinction I worked to was between noise and signal. A record that is physically impossible, or that
          shows a finishing time inconsistent with the segment itself, is an error and was removed. A record that is
          merely surprising, from a rider who paced it unusually well or unusually badly, is real variation and was
          kept. Most of the scatter in these plots is genuine: two riders at the same W/kg do finish minutes apart,
          for reasons the model cannot see.
        </p>
        <p className="mb-4">
          Keeping legitimate outliers is part of why the error band is as wide as it is. A tighter band would look
          better and mean less.
        </p>
      </div>

      {/* Limits */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What the models assume, and cannot know</h2>
        <p className="mb-4">
          Every estimate on this site carries these assumptions, whether or not the page says so.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>Steady power.</strong> The riders who post verified times mostly ride near-constant efforts, so
            that is what the curve describes. Ride the Alpe in bursts and you will be slower than the estimate.
          </li>
          <li>
            <strong>Ordinary equipment.</strong> Frames and wheels carry different in-game weight and drag. The fit
            reflects whatever the sampled riders were on, which is presumably sensible climbing setups.
          </li>
          <li>
            <strong>Solo effort.</strong> Drafting is worth little on a gradient this steep, but it is not zero, and
            the model does not represent it.
          </li>
          <li>
            <strong>Nothing about you specifically.</strong> The curve returns one number per W/kg. It has no view
            on your pacing, your cooling, your trainer's calibration or how the day is going.
          </li>
          <li>
            <strong>A snapshot of the game.</strong> If Zwift changes its physics, the fit describes the old
            version until the data is rebuilt.
          </li>
        </ul>
      </div>

      {/* What would make it better */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What would actually improve this</h2>
        <p className="mb-4">
          In descending order of how much difference it would make:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>More records, especially at the extremes.</strong> The thin ends of the range are where both
            curves are least reliable, and that is a sample size problem rather than a modelling one.
          </li>
          <li>
            <strong>Rider mass as a separate variable.</strong> At the same W/kg a heavier rider pushes slightly
            more air. On an 8.5% gradient that is minor, but it is not nothing, and a two-variable fit could
            capture it.
          </li>
          <li>
            <strong>Split times.</strong> These would allow something to be said about pacing, which is currently
            the largest unexplained source of variation and about which this site can say nothing quantitative.
          </li>
          <li>
            <strong>A published uncertainty band on the calculator output</strong> rather than a single number.
            This is the change I most want to make, because a single figure invites more confidence than the data
            supports.
          </li>
        </ul>
      </div>

      {/* Check it yourself */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Check it yourself</h2>
        <p className="mb-4">
          Both equations are above in full. A 75 kg rider at 250 W is at 3.33 W/kg: 148.60 &times; 11.09 is about
          1,648; 1954.08 &times; 3.33 is about 6,507; so 1,648 &minus; 6,507 + 8,330 is about 3,471 seconds, or
          57:51. That is a phone calculator's worth of arithmetic, and it is the whole model.
        </p>
        <p className="mb-4">
          If your own verified time disagrees with the estimate by more than the error band, I would genuinely like
          to know, because reader reports are the main way the fits get better.{" "}
          <Link to="/contact" className="text-zwift-orange hover:underline">
            Send the numbers over
          </Link>
          , and if a correction is needed it gets made and logged under the{" "}
          <Link to="/editorial-policy" className="text-zwift-orange hover:underline">
            editorial policy
          </Link>
          .
        </p>
      </div>
    </div>
  );

  return (
    <BlogPost
      content={content}
      relatedCalculators={[
        {
          name: "Alpe du Zwift Calculator",
          path: "/alpeduzwiftcalculator",
          description: "The quadratic fit described above, running in your browser",
        },
        {
          name: "Ven-Top Calculator",
          path: "/ventop-calculator",
          description: "The inverse fit, for Zwift's version of Mont Ventoux",
        },
      ]}
    />
  );
};

export default RegressionAnalysisMethodology;
