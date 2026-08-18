import { Link } from "react-router-dom";

import BlogPost from "@/components/BlogPost";

const GetFitAndLoseWeightWithZwift = () => {
  const content = (
    <div className="space-y-8">
      {/* Introduction */}
      <div>
        <p className="mb-4 text-lg leading-relaxed">
          Cycling is a mediocre weight-loss tool on its own and a very good one alongside the right eating. The
          difference between those two outcomes is almost entirely about what happens off the bike.
        </p>
        <p className="mb-4">
          This article does the arithmetic rather than the encouragement. There is a genuine tension between losing
          weight and getting faster that most articles on the subject skip, and it is worth understanding before you
          start, because the version of this that goes wrong goes wrong in a specific and predictable way.
        </p>
      </div>

      {/* The calorie arithmetic */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What an hour on Zwift actually costs you</h2>
        <p className="mb-4">
          Start with the number Zwift shows you, because there is a neat reason it is roughly trustworthy.
        </p>
        <p className="mb-4">
          Your trainer measures mechanical work. An hour at 200 W is 200 &times; 3,600 = 720,000 joules, or 720 kJ.
          But your body is not efficient: only about 20 to 25% of the energy you burn turns into work at the pedals,
          and the rest leaves as heat. So the metabolic cost is:
        </p>
        <div className="my-6 p-4 rounded-lg bg-muted/50 border border-border">
          <p className="text-sm mb-2">720 kJ of work &divide; 0.24 efficiency &asymp; 3,000 kJ burned</p>
          <p className="text-sm mb-2">3,000 kJ &divide; 4.184 &asymp; <strong>717 kcal</strong></p>
          <p className="text-sm text-muted-foreground">
            Which is almost exactly the 720 kJ of work you did. The conversion factor and the human efficiency
            figure very nearly cancel, so <strong>kilojoules of work is a good approximation of kilocalories
            burned</strong>. That coincidence is why the number on your screen is usually about right.
          </p>
        </div>
        <p className="mb-4">
          So an hour at 200 W costs you somewhere near 700 kcal. Five of those a week is roughly 3,500 kcal, which
          is the figure usually quoted for a pound of fat. On paper, a pound a week.
        </p>
        <p className="mb-4">
          On paper. The efficiency range of 20 to 25% is a standard physiological figure rather than something
          measured here, and individual variation is real. More importantly, the paper version assumes the rest of
          your life holds still, and it does not.
        </p>
      </div>

      {/* Why the deficit shrinks */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Why the deficit is smaller than the arithmetic says</h2>
        <p className="mb-4">
          Three things eat into it, and together they explain why people who start training hard often lose far less
          weight than their ride totals predict.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>Appetite rises to meet the training.</strong> Not consciously, and not immediately. This is the
            largest of the three by a wide margin, and it is why the post-ride sense of having earned something is
            worth being sceptical about.
          </li>
          <li>
            <strong>You move less the rest of the day.</strong> A hard morning session makes an afternoon on the
            sofa more likely. The energy saved there can cancel a meaningful share of the energy spent riding.
          </li>
          <li>
            <strong>Fuelling the session is not optional.</strong> A hard interval workout needs carbohydrate
            beforehand or it becomes a worse session. That fuel counts.
          </li>
        </ul>
        <p className="mb-4">
          None of this means the riding is pointless. It means the riding is the smaller lever, and treating it as
          the main one is the usual reason six months of consistent training produces a fitter rider at the same
          weight.
        </p>
      </div>

      {/* The tension */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The part nobody mentions: losing weight can cost you watts</h2>
        <p className="mb-4">
          Here is where this site can be more useful than most, because it has a fitted curve that turns a change in
          power-to-weight into a change in minutes. Take a rider at 80 kg holding 240 W, which is 3.0 W/kg, and use
          the Alpe du Zwift equation:
        </p>
        <div className="my-6 p-4 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-sm mb-3">
            time in seconds = 148.60 &times; (W/kg)&sup2; &minus; 1954.08 &times; (W/kg) + 8329.87
          </p>
          <p className="text-sm mb-2">
            <strong>Now:</strong> 80 kg, 240 W = 3.00 W/kg &rarr; about <strong>63:25</strong>
          </p>
          <p className="text-sm mb-2">
            <strong>Lose 4 kg, keep the power:</strong> 76 kg, 240 W = 3.16 W/kg &rarr; about{" "}
            <strong>60:41</strong>, nearly three minutes faster
          </p>
          <p className="text-sm mb-2">
            <strong>Lose 4 kg and 10 W with it:</strong> 76 kg, 230 W = 3.03 W/kg &rarr; about{" "}
            <strong>62:57</strong>
          </p>
          <p className="text-sm text-muted-foreground">
            The second scenario gains 2 minutes 44 seconds. The third gains 28 seconds. Same weight loss, almost all
            of the benefit gone.
          </p>
        </div>
        <p className="mb-4">
          That is the whole problem in one table. Weight loss only pays if your power survives it, and an aggressive
          deficit is precisely the thing that stops power surviving. Cut too hard and you underfuel your training,
          lose muscle along with fat, and end up lighter and slower.
        </p>
        <p className="mb-4">
          This is also why the{" "}
          <Link to="/faq" className="text-zwift-orange hover:underline">
            FAQ on this site
          </Link>{" "}
          says to chase watts first. A 20 W gain beats a 2 kg loss, it helps on the flat as well as the climbs, and
          nothing about pursuing it makes you weaker.
        </p>
      </div>

      {/* What actually works */}
      <div>
        <h2 className="text-2xl font-bold mb-4">A structure that loses fat without costing watts</h2>
        <p className="mb-4">
          The approach that works is a modest deficit alongside training that is mostly easy, with the hard sessions
          properly fuelled. Concretely:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>Aim for a deficit of around 300 to 500 kcal a day, not more.</strong> That is a slow rate. Slow
            is the point: it is the rate at which power tends to survive.
          </li>
          <li>
            <strong>Most of your riding should be easy.</strong> Easy riding burns a high proportion of fat, is
            cheap to recover from, and lets you do more total hours, which is what actually moves the energy
            balance. Volume beats intensity here.
          </li>
          <li>
            <strong>Fuel the hard sessions properly.</strong> Two hard sessions a week, each with carbohydrate
            before and after. Do not try to run a deficit through your key workouts; that is where watts get lost.
          </li>
          <li>
            <strong>Take the deficit on easy days and rest days instead.</strong> Same weekly total, far less
            damage to training quality.
          </li>
          <li>
            <strong>Protein matters more than it does when you are not training.</strong> It is what makes the
            weight you lose predominantly fat rather than muscle.
          </li>
        </ul>
        <p className="mb-4">
          These are widely accepted principles from sports nutrition rather than anything derived from this site's
          data, and the specific numbers vary between people. The structure is the part worth keeping: modest
          deficit, mostly easy riding, hard days fully fuelled.
        </p>
      </div>

      {/* Tracking */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What to watch instead of the scale</h2>
        <p className="mb-4">
          Bodyweight moves several kilograms a week on water alone, so daily readings mostly measure noise. Zwift
          happens to give you better signals than a scale does.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>Power at a fixed perceived effort.</strong> If your endurance rides are getting faster at the
            same effort, things are working.
          </li>
          <li>
            <strong>Heart rate at a fixed power.</strong> Falling over weeks is a good sign. Rising while your
            weight falls is a warning that the deficit is too aggressive.
          </li>
          <li>
            <strong>Your W/kg on a repeated climb.</strong> The most honest single number, because it combines both
            variables into the one that decides your climbing.
          </li>
          <li>
            <strong>Whether the second hard session of the week still feels possible.</strong> When it stops
            feeling possible, you are eating too little, whatever the scale says.
          </li>
          <li>
            <strong>The scale, weekly, as a seven-day average.</strong> Useful at that resolution and misleading at
            any finer one.
          </li>
        </ul>
        <p className="mb-4">
          If you want to see what a given change is worth before you chase it, put both versions of your numbers
          into the{" "}
          <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">
            Alpe du Zwift calculator
          </Link>{" "}
          and compare the times. Seeing that four kilograms is worth under three minutes, and only if your power
          holds, is a useful corrective to how much attention weight tends to get.
        </p>
      </div>

      {/* When it is the wrong goal */}
      <div>
        <h2 className="text-2xl font-bold mb-4">When this is the wrong goal</h2>
        <p className="mb-4">
          Worth saying plainly, since it is the part an article like this usually leaves out.
        </p>
        <p className="mb-4">
          If you are already at a normal weight and riding well, chasing a lower one is likely to cost you more in
          power and health than it returns in W/kg. Weight loss has a floor, and it is higher than the numbers
          quoted for professional riders would suggest, because those numbers describe people at the extreme end of
          a selected population, held for short parts of the year, with medical support.
        </p>
        <p className="mb-4">
          Cycling also does very little for bone density, and combining that with a sustained energy deficit is a
          genuinely poor idea. If you are considering an aggressive cut, that is a conversation for a doctor or a
          registered dietitian, not for a website about climbing times. I build calculators and I am neither of
          those things.
        </p>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The short version</h2>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            Kilojoules of work is a good approximation of kilocalories burned, so an hour at 200 W costs around 700
            kcal.
          </li>
          <li>Appetite, reduced daily movement and session fuelling all shrink that deficit in practice.</li>
          <li>
            Losing 4 kg is worth nearly three minutes on the Alpe if your power holds, and 28 seconds if it costs
            you 10 W. The deficit size decides which of those you get.
          </li>
          <li>Modest deficit, mostly easy riding, hard sessions fully fuelled, deficit taken on the easy days.</li>
          <li>Track power at a fixed effort and heart rate at a fixed power. Weigh weekly, as an average.</li>
          <li>Chase watts first. They help everywhere and cost you nothing.</li>
        </ul>
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
          description: "See what a weight or power change is actually worth in minutes",
        },
        {
          name: "FTP & Training Zones",
          path: "/zwift-ftp-calculator",
          description: "Work out the easy zone most of this riding should sit in",
        },
      ]}
    />
  );
};

export default GetFitAndLoseWeightWithZwift;
