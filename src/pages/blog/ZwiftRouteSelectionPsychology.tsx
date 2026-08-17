import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";
import { Route, Brain, TrendingUp, BarChart3 } from "lucide-react";

const ZwiftRouteSelectionPsychology = () => {

  const relatedArticles = [
    {
      title: "Zwift Training Plans 101",
      excerpt: "Complete guide to structured Zwift training.",
      date: "Recent",
      readTime: "14 min",
      slug: "/blog/zwift-training-plans-101",
      category: "Training"
    },
    {
      title: "ZwiftPower Regression Analysis: How We Built Accurate Time Predictors",
      excerpt: "The data and the model behind the climb time predictions on this site.",
      date: "20-12-2025",
      readTime: "15 min",
      slug: "/blog/regression-analysis-methodology",
      category: "Data Analysis"
    },
    {
      title: "Conquer the Alpe du Zwift: Tips for a Faster Climb",
      excerpt: "Master Alpe du Zwift with expert pacing strategies.",
      date: "12-11-2025",
      readTime: "8 min",
      slug: "/blog/conquer-alpe-du-zwift",
      category: "Training"
    },
    {
      title: "Power-to-Weight Ratio Deep Dive: The Science Behind Climbing Performance",
      excerpt: "Comprehensive guide to power-to-weight ratio in cycling.",
      date: "20-12-2025",
      readTime: "17 min",
      slug: "/blog/power-to-weight-ratio-science",
      category: "Training"
    }
  ];

  const content = (
    <div className="space-y-6">
      <div>
        <p className="mb-0">
          Every Zwift ride begins with the same decision, and I make it in the few seconds it takes to scroll the
          route list. I ride Zwift several times a week and I am training for Ironman Copenhagen, so a large part of
          my training week is settled in that scroll, and for a long time I got it wrong without noticing. The
          session I had written down and the session the route actually gave me were different things. I am a
          mechanical engineering student in Aalborg, not a
          coach and not a sports scientist, so nothing below rests on research I cannot show you. It is mechanism,
          arithmetic from this site's own climb model, and my own riding, each labelled as such.
        </p>
      </div>

      <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Brain className="mr-2 text-zwift-orange" size={24} />
          The core idea
        </h2>
        <p className="mb-0">
          A route is two numbers wearing scenery: how long it will take you, and how steep it is while it takes it.
          Those two numbers decide which effort you can actually hold and for how long. The world, the weather and
          the badge change how much you enjoy the ride, not what it does to your fitness. So decide the session
          first, work out the duration and the gradient it needs, and pick the route that supplies them. That is the
          whole method. The rest of this article is why it is hard to follow and how to do the arithmetic.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Gradient decides whether your power turns into speed</h2>
        <p className="mb-4">
          On a climb you are lifting mass against gravity, and gravity does not care about the pack. On a flat road
          you are pushing air, and air is something other riders can move for you. That single difference is why the
          same interval works on one route and falls apart on another.
        </p>
        <p className="mb-4">
          Here is the split for a 75 kg, 183 cm rider carrying 9 kg of bike and kit at 3.0 W/kg, taken from the
          physics model behind the{" "}
          <Link to="/zwift-climb-time-calculator" className="text-zwift-orange hover:underline">climb time calculator</Link>{" "}
          rather than from anything measured. It is a solo estimate with no draft, which is exactly the point. The two
          columns do not add up to 100, because the remainder, between 4% and 10% here depending on the gradient, goes
          into rolling resistance.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Segment</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Profile</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Power spent on gravity</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Power spent on air</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Alpe du Zwift KOM</td>
                <td className="py-2 pr-4">12.2 km, 1,036 m, 8.5%</td>
                <td className="py-2 pr-4">93%</td>
                <td className="py-2 pr-4">2%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Innsbruck KOM</td>
                <td className="py-2 pr-4">7.4 km, 400 m, 5.4%</td>
                <td className="py-2 pr-4">87%</td>
                <td className="py-2 pr-4">7%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Volcano KOM</td>
                <td className="py-2 pr-4">3.8 km, 129 m, 3.2%</td>
                <td className="py-2 pr-4">74%</td>
                <td className="py-2 pr-4">18%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Titans Grove KOM</td>
                <td className="py-2 pr-4">2.6 km, 59 m, 2.2%</td>
                <td className="py-2 pr-4">59%</td>
                <td className="py-2 pr-4">30%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 mb-4">
          Read the last column as a measure of how much the route hands your result to other people. At 8.5% almost
          nothing you do is aerodynamic, so your time is your sustained power and your weight, and a soft thirty
          seconds shows up immediately as lost speed. At 2.2% roughly a third of your effort is fighting air that a
          wheel in front would clear for you, so the pack, the surges and your timing decide the outcome.
        </p>
        <p className="mb-0">
          The practical rule falls straight out of that. If the session is about holding a specific power, choose
          gradient, because gradient forces honesty. If the session is about racing, choose the shallow rolling route,
          because that is where positioning and the draft are the skills being tested. Length, gain and published
          average gradient for every timed segment in the game are listed on the{" "}
          <Link to="/zwift-climbs" className="text-zwift-orange hover:underline">Zwift climbs page</Link>, which is the
          quickest way to find the profile you need.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Route className="mr-2 text-zwift-orange" size={24} />
          Duration decides which session the route can be
        </h2>
        <p className="mb-4">
          A climb is not long or short in kilometres. It is long or short in minutes, and the minutes depend on you.
          A 4 km segment is a five-minute effort for one rider and a twenty-minute one for another, and those are
          different training sessions with different physiology behind them. So before you commit, convert the route
          into time at the power you plan to hold.
        </p>
        <p className="mb-4">
          The times below are model estimates for the same rider as above, 75 kg and 183 cm with 9 kg of bike and
          kit, riding solo at 3.0 W/kg, and they come from the same equation the calculator runs. They are
          arithmetic, not measurements, and your own numbers will differ. Put your weight
          and your power into the{" "}
          <Link to="/zwift-climb-time-calculator" className="text-zwift-orange hover:underline">climb time calculator</Link>{" "}
          and you get your version of this table in a few seconds.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Segment</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Length and gain</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Estimated time at 3.0 W/kg</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">What that duration suits</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Titans Grove KOM</td>
                <td className="py-2 pr-4">2.6 km, 59 m</td>
                <td className="py-2 pr-4">5:48</td>
                <td className="py-2 pr-4">A surge inside a longer ride, not an interval</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Leith Hill KOM</td>
                <td className="py-2 pr-4">1.9 km, 133 m</td>
                <td className="py-2 pr-4">8:27</td>
                <td className="py-2 pr-4">Short hard efforts, repeatable</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Box Hill KOM</td>
                <td className="py-2 pr-4">3.0 km, 135 m</td>
                <td className="py-2 pr-4">9:31</td>
                <td className="py-2 pr-4">Tempo blocks, and racing practice in a group</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Keith Hill KOM</td>
                <td className="py-2 pr-4">4.3 km, 225 m</td>
                <td className="py-2 pr-4">15:13</td>
                <td className="py-2 pr-4">A single sustained threshold effort</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">The Grade KOM</td>
                <td className="py-2 pr-4">3.5 km, 305 m</td>
                <td className="py-2 pr-4">18:53</td>
                <td className="py-2 pr-4">A steep 20-minute effort with nowhere to hide</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Epic KOM Reverse</td>
                <td className="py-2 pr-4">6.3 km, 403 m</td>
                <td className="py-2 pr-4">26:03</td>
                <td className="py-2 pr-4">Long threshold, one rep</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Alpe du Zwift KOM</td>
                <td className="py-2 pr-4">12.2 km, 1,036 m</td>
                <td className="py-2 pr-4">1:04:17</td>
                <td className="py-2 pr-4">A benchmark, or a long sub-threshold day</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Ventoux KOM</td>
                <td className="py-2 pr-4">19 km, 1,481 m</td>
                <td className="py-2 pr-4">1:32:52</td>
                <td className="py-2 pr-4">Clear the evening for it</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 mb-0">
          Notice how quickly the same category of thing becomes a different session. Leith Hill and The Grade are both
          "a climb". One is eight minutes and the other is nineteen, and no amount of good intent turns the first into
          a threshold session or the second into a set of short intervals.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Matching the route to the session you meant to ride</h2>
        <p className="mb-4">
          Once duration and gradient are the two axes, the framework writes itself. Decide what the session has to
          do, then look for a route that supplies it rather than one that merely permits it.
        </p>
        <h3 className="text-xl font-bold mb-3">Endurance rides</h3>
        <p className="mb-4">
          What the route must supply is the absence of provocation. Flat or gently rolling, no timed segment long
          enough to tempt you, and preferably somewhere you have ridden before so there is no reason to push. The
          classic failure is picking a scenic route with a climb in the middle, riding the climb because it is there,
          and turning an aerobic ride into a middling tempo one that is too hard to recover from and too easy to
          adapt to.
        </p>
        <h3 className="text-xl font-bold mb-3">Sustained threshold work</h3>
        <p className="mb-4">
          The route must supply a continuous climb at least as long as the interval you intend to hold. If the plan
          says twenty minutes, a segment that ends in twelve leaves you finishing the effort on a descent where you
          cannot hold the power at all. At 3.0 W/kg the model puts Keith Hill at about 15 minutes, The Grade at about
          19 and Epic KOM Reverse at about 26, so a rider around that level has a genuine choice of venue. Check your
          own figure first, because a stronger rider needs a longer climb to get the same session.
        </p>
        <h3 className="text-xl font-bold mb-3">Short, hard efforts</h3>
        <p className="mb-4">
          Here the route must supply steepness more than length, because you want the effort to end when your legs
          end it rather than when the gradient runs out. Radio Tower KOM is 1.16 km at 12.8%, which the model puts at
          about 6:46 for a 75 kg rider at 4 W/kg and about 5:27 at 5 W/kg. That is a real five to seven minute effort
          in a very small piece of road, and you can be back at the bottom quickly for the next one.
        </p>
        <h3 className="text-xl font-bold mb-3">Racing and group riding</h3>
        <p className="mb-0">
          Now the shallow rolling route is the right answer, for the reason the first table gives: a large share of
          the effort is aerodynamic, so the draft, the positioning and the timing of a surge are what decide the
          result. Practising those on a 9% wall teaches you nothing about them. If that is new ground, the{" "}
          <Link to="/blog/zwift-racing-for-beginners" className="text-zwift-orange hover:underline">racing for beginners guide</Link>{" "}
          and the <Link to="/blog/zwift-drafting-physics-aerodynamics" className="text-zwift-orange hover:underline">drafting article</Link>{" "}
          cover what the shallow routes are actually testing.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <TrendingUp className="mr-2 text-zwift-orange" size={24} />
          A worked example: is the Alpe the session you planned?
        </h2>
        <p className="mb-4">
          This site fitted a curve to roughly 500 verified Alpe du Zwift finishing times from ZwiftPower, each one a
          power figure paired with a completion time. The fit is{" "}
          time_seconds = 148.60*(W/kg)<sup>2</sup> - 1954.08*(W/kg) + 8329.87, and the{" "}
          <Link to="/blog/regression-analysis-methodology" className="text-zwift-orange hover:underline">methodology article</Link>{" "}
          explains how it was built and where it gets shaky. Put numbers through it and the route becomes a duration:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>2.8 W/kg:</strong> about 1:07:03</li>
          <li><strong>3.0 W/kg:</strong> about 1:03:25</li>
          <li><strong>3.2 W/kg:</strong> about 59:58, which is where the hour falls</li>
          <li><strong>3.5 W/kg:</strong> about 55:11</li>
          <li><strong>4.0 W/kg:</strong> about 48:11</li>
        </ul>
        <p className="mb-4">
          Now hold that against a plan that says "45 minutes at threshold". At 3.0 W/kg the Alpe is an hour and three
          minutes of continuous climbing, so it is not that session and cannot be made into it. You have two honest
          options. Ride it deliberately below threshold and accept a long steady day, which is a good session in its
          own right. Or treat it as a benchmark, ride it as hard as you can, and plan the day after around the fact
          that you will be tired. What you should not do is start at threshold pace and discover the mismatch at
          hairpin fourteen, which is the version I have ridden more than once.
        </p>
        <p className="mb-0">
          The same arithmetic applies to Ven-Top. The timed Ventoux KOM segment is about 19 km and 1,481 m of gain,
          and the full Ven-Top route is about 20.9 km and 1,534 m, so be clear which one you are planning. The site's
          Ven-Top fit, built from the same kind of data and roughly 300 verified ZwiftPower times, is
          time_minutes = 3.21 + 253.38/(W/kg), which puts 3.0 W/kg at about an hour and twenty-eight minutes. That
          sits a few minutes under the generic physics estimate in the table above, which is what you should expect:
          one model is fitted to actual Ven-Top results and the other is physics applied to any climb. Either way the
          answer to "can I fit this in tonight" is the same. Set the target with the{" "}
          <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">Alpe du Zwift calculator</Link>{" "}
          or the <Link to="/ventop-calculator" className="text-zwift-orange hover:underline">Ven-Top calculator</Link>, and
          compare the two efforts side by side on{" "}
          <Link to="/alpe-vs-ventop" className="text-zwift-orange hover:underline">Alpe versus Ven-Top</Link>.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Why we choose badly anyway</h2>
        <p className="mb-4">
          The arithmetic is easy. Following it is not, because three pulls act on the route screen and none of them
          care what your plan says.
        </p>
        <h3 className="text-xl font-bold mb-3">Familiarity is cheap, and that is the problem</h3>
        <p className="mb-4">
          A route you know well costs you nothing to plan. You know where it gets hard, roughly how long it takes,
          and where you can ease off, so you can set a pacing plan before you clip in. That is a genuine advantage,
          and it is why benchmark efforts should be ridden on routes you know. The cost is that you only ever train
          what those routes ask for. I have three defaults I fall back to when I am tired, and all three are
          rolling. Left alone, my week would contain no sustained climbing at all, which for someone with an Ironman
          in the calendar is the wrong hole to have.
        </p>
        <p className="mb-4">
          The fix is not novelty for its own sake. It is to notice what your defaults have in common and pick
          deliberately against that. If everything you ride is under twenty minutes of climbing, the missing session
          is a long one.
        </p>
        <h3 className="text-xl font-bold mb-3">The badge and the unlock</h3>
        <p className="mb-4">
          Zwift's route badges, level unlocks and drops are designed to make you keep riding, and they work. I own
          the Tron bike, which means I spent a long stretch of my Zwift life choosing routes purely by how much
          elevation they contained, with no reference to any training plan whatsoever. I do not regret it and I would
          not call it training either.
        </p>
        <p className="mb-4">
          The honest position is that a reward you enjoy chasing is a reason to ride at all, which beats a perfectly
          structured session you skip. The problem starts when badge chasing quietly replaces the plan rather than
          sitting beside it. Give it a slot, ride the unlock session on a day where the effort roughly fits, and
          check the route's duration first so you know what you are signing up for. The{" "}
          <Link to="/blog/unlocking-zwift-achievements" className="text-zwift-orange hover:underline">achievements guide</Link>{" "}
          lists what is worth chasing.
        </p>
        <h3 className="text-xl font-bold mb-3">The event calendar chooses for you</h3>
        <p className="mb-0">
          Group rides and races are the easiest way to end up on a route you did not select. That is not automatically
          bad, since other riders make an easy ride easier to finish and a hard ride harder to quit. It is bad when
          the event's route contradicts the session. A rolling race on a day scheduled for endurance is a hard day
          with an endurance label on it. Check the route before you sign up, not after the pen closes, and read the{" "}
          <Link to="/blog/zwift-group-ride-dynamics" className="text-zwift-orange hover:underline">group ride dynamics</Link>{" "}
          piece for how the pack changes your effort whether you intended it or not.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Three ways this goes wrong mid-block, and the fix for each</h2>
        <h3 className="text-xl font-bold mb-3">Picking something you cannot finish</h3>
        <p className="mb-4">
          Abandoning a route halfway is discouraging out of proportion to the training actually lost, and I know what
          that does to me: I avoid anything that might do it again, and a month of too-easy riding goes by. The fix
          is arithmetic instead of courage. Take your longest recent sustained effort, add a few minutes, and find a
          climb whose estimated time at a power you
          can genuinely hold lands there. You then start knowing the number is achievable, which is a completely
          different mental state from hoping.
        </p>
        <h3 className="text-xl font-bold mb-3">Letting the clock pick the route</h3>
        <p className="mb-4">
          Forty minutes free and a route that takes an hour is a real constraint, not an excuse. But the usual
          response, picking a short flat route and pedalling gently, wastes the slot. A short window is the right
          time for the steep short segments: Radio Tower or Leith Hill repeats give you a genuinely hard session
          inside half an hour of riding. Save the long routes for the days that can hold them, and check the estimate
          rather than guessing, because guessing is how a session gets abandoned at the 40-minute mark.
        </p>
        <h3 className="text-xl font-bold mb-3">Avoiding the route where you had a bad day</h3>
        <p className="mb-0">
          There is probably a route you have quietly stopped selecting because of one grim time on it. I have two.
          That is exactly the route worth going back to, because a repeated effort on known terrain is the cleanest
          fitness comparison you have: same gradient, same length, same model prediction, only your power changed.
          A single slow attempt is a
          baseline, and a baseline is only useless if you never repeat it.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">How I lay out a week of routes</h2>
        <p className="mb-4">
          This is my own template rather than a prescription, and it is not the output of any study. It exists to make
          sure that the sessions I would otherwise skip get a slot before the week fills up with whatever looks good
          on the day.
        </p>
        <p className="mb-4">
          Most of the week goes to routes chosen to serve the plan, a smaller share to something harder than I am
          comfortable with, and a little to something I have never ridden. I do not defend those proportions with
          data, and there is none to defend them with. They exist because a week with no hard route stops producing
          progress and a week with nothing new stops being enjoyable, and both of those failures end training blocks.
        </p>
        <div className="p-4 bg-zwift-blue/10 rounded-lg border border-zwift-blue/30 mb-4">
          <h3 className="text-xl font-bold mb-3">A week of route slots</h3>
          <ul className="list-disc pl-6 space-y-2 mb-0">
            <li><strong>Recovery day:</strong> short and flat, nothing timed, no reason to push.</li>
            <li><strong>Structured day:</strong> whatever route lets the workout run undisturbed, usually flat.</li>
            <li><strong>Climb day:</strong> one sustained climb long enough to cover the interval, chosen from its estimated time.</li>
            <li><strong>Endurance day:</strong> long and unprovocative, ridden entirely below the plan's ceiling.</li>
            <li><strong>Something new:</strong> a route or world I have not ridden, at whatever intensity it turns out to be.</li>
            <li><strong>Social or race day:</strong> the event picks the route, and I accept the session that comes with it.</li>
          </ul>
        </div>
        <p className="mb-0">
          Fitting that into an actual training block is a separate problem, and I wrote about it in{" "}
          <Link to="/blog/zwift-training-plans-101" className="text-zwift-orange hover:underline">training plans 101</Link>{" "}
          and the <Link to="/blog/10-day-zwift-training-week" className="text-zwift-orange hover:underline">10-day training week</Link>.
          The rest of the <Link to="/blog/category/training" className="text-zwift-orange hover:underline">training section</Link>{" "}
          covers periodisation.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <BarChart3 className="mr-2 text-zwift-orange" size={24} />
          What is worth tracking, and what this site's data cannot tell you
        </h2>
        <p className="mb-4">
          Four things about your own riding are cheap to check and actually inform the next choice:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Segment time against the model.</strong> Ride a climb, compare your time to the estimate at the power you held. A large gap in either direction usually means your pacing or your power estimate is off, not the route.</li>
          <li><strong>Repeat times on one climb.</strong> The same segment ridden three months apart is the least noisy fitness signal you can get without a lab.</li>
          <li><strong>Time in zone per route.</strong> If a route you call endurance keeps producing threshold time, the route is choosing the session, not you.</li>
          <li><strong>Rides you abandoned or changed halfway.</strong> The pattern in those tells you which routes you consistently overestimate yourself on.</li>
        </ul>
        <p className="mb-4">
          What I cannot give you is a number for how much any of this improves adherence, and I want to be direct
          about why. The dataset behind this site is roughly 500 Alpe du Zwift and 300 Ven-Top verified ZwiftPower
          finishing times. Each record is a power figure paired with a completion time, and that is all. There are no
          timestamps, no training histories, no route-selection logs and no record of who kept riding and who stopped.
          Any claim on this page about motivation or consistency is therefore reasoning, offered as reasoning, and
          the{" "}
          <Link to="/blog/regression-analysis-methodology" className="text-zwift-orange hover:underline">methodology article</Link>{" "}
          shows exactly what the data does cover.
        </p>
        <p className="mb-0">
          If you want the measurable part of route choice, it is all in the first two tables: duration and gradient.
          Those are published for every timed segment, they are the inputs the model uses, and they are enough to make
          the decision well.
        </p>
      </div>

      <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
        <h2 className="text-2xl font-bold mb-4">The short version</h2>
        <p className="mb-4">
          Decide the session, convert it into a duration and a gradient, then pick the route that supplies both.
          Steep routes force honest power and give you a clean comparison over time. Shallow routes hand a third of
          the work to the pack, which makes them the place to practise racing and a poor place to hold an interval.
          Familiarity, badges and the event calendar will all choose for you if you let them, and the cost is a week
          of sessions that are not quite anything.
        </p>
        <p className="mb-0">
          Get the numbers for a specific route on the{" "}
          <Link to="/zwift-climbs" className="text-zwift-orange hover:underline font-semibold">climbs page</Link> and the{" "}
          <Link to="/zwift-climb-time-calculator" className="text-zwift-orange hover:underline font-semibold">climb time calculator</Link>,
          set a target for the big two with the{" "}
          <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline font-semibold">Alpe du Zwift calculator</Link>{" "}
          and the <Link to="/ventop-calculator" className="text-zwift-orange hover:underline font-semibold">Ven-Top calculator</Link>,
          and if anything here is wrong,{" "}
          <Link to="/contact" className="text-zwift-orange hover:underline font-semibold">tell me</Link> and I will fix it.
        </p>
      </div>
    </div>
  );

  return (
    <BlogPost
      date="31-12-2025"
      content={content}
      relatedArticles={relatedArticles}
    />
  );
};

export default ZwiftRouteSelectionPsychology;
