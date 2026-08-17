import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";
import { Brain, AlertCircle, Target, BarChart3 } from "lucide-react";

const ZwiftCognitiveLoad = () => {

  const relatedArticles = [
    {
      title: "Zwift Group Ride Dynamics: Social Psychology Meets Performance",
      excerpt: "Explore the social psychology behind Zwift group rides.",
      date: "31-12-2025",
      readTime: "21 min",
      slug: "/blog/zwift-group-ride-dynamics",
      category: "Psychology"
    },
    {
      title: "Zwift Route Selection Psychology: How Your Choices Affect Training Outcomes",
      excerpt: "Explore the psychology behind Zwift route selection.",
      date: "31-12-2025",
      readTime: "19 min",
      slug: "/blog/zwift-route-selection-psychology",
      category: "Psychology"
    },
    {
      title: "Zwift Racing For Beginners",
      excerpt: "Complete guide to getting started with Zwift racing.",
      date: "Recent",
      readTime: "12 min",
      slug: "/blog/zwift-racing-for-beginners",
      category: "Racing"
    },
    {
      title: "Zwift Drafting Physics & Aerodynamics: The Science Behind Virtual Pelotons",
      excerpt: "Deep dive into Zwift's drafting mechanics.",
      date: "31-12-2025",
      readTime: "22 min",
      slug: "/blog/zwift-drafting-physics-aerodynamics",
      category: "Physics"
    }
  ];

  const content = (
    <div className="space-y-6">
      <div>
        <p className="mb-0">
          A Zwift race is a physical test and an attention test running on the same hardware at once. I ride Zwift
          several times a week and I am training for Ironman Copenhagen, so my weeks contain 40-minute races where I
          think constantly and three-hour endurance rides where I think about nothing. Both fail in mental ways, and
          the failures are opposites. I am an engineering student, not a sports scientist, so nothing below rests on
          a study I cannot verify. It is mechanism, arithmetic from this site's own climb model, and my own riding,
          labelled as such.
        </p>
      </div>

      <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Brain className="mr-2 text-zwift-orange" size={24} />
          The core idea
        </h2>
        <p className="mb-0">
          Attention is a shared resource. Holding a power target, tracking the pack and reading the gradient ahead
          all draw from one pool, and hard physical effort draws from it too. So the moments when a race asks most of
          your judgement are the moments when you have least of it. Preparing well means moving decisions out of
          those moments.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">What a Zwift race actually asks you to watch</h2>
        <p className="mb-4">
          List what you genuinely monitor in the last ten minutes of a hard race. The pack, or at least whether a gap
          has opened. The gradient ahead, because a 4% ramp changes what the pack does. Your power against a plan.
          Your PowerUp. A chat feed moving in the corner. And the gap to the rider in front, which you are converting
          into a decision about whether you can close it. All of it at threshold.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Stream</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">What you extract</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">When it matters</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Pack and rider list</td>
                <td className="py-2 pr-4">Is a gap opening, and to whom</td>
                <td className="py-2 pr-4">Continuously, sharply at every gradient change</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Route profile</td>
                <td className="py-2 pr-4">When the effort is about to change</td>
                <td className="py-2 pr-4">Roughly 15 seconds before it does</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Your power</td>
                <td className="py-2 pr-4">Above or below plan, drifting which way</td>
                <td className="py-2 pr-4">Continuously</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">PowerUp slot</td>
                <td className="py-2 pr-4">What you hold, where to spend it</td>
                <td className="py-2 pr-4">A handful of moments per race</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Chat and ride-ons</td>
                <td className="py-2 pr-4">Nothing tactical</td>
                <td className="py-2 pr-4">Never, during the effort</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Gap to the finish</td>
                <td className="py-2 pr-4">Whether to commit to a move</td>
                <td className="py-2 pr-4">Final few minutes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 mb-0">
          Only two pay off continuously. The rest are periodic or worthless in the moment: most of what is on your
          screen is not earning its share of your attention.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Three kinds of load, and only one is worth having</h2>
        <p className="mb-0">
          Cognitive load theory splits mental effort three ways, which tells you what to attack.
          <strong> Intrinsic load</strong> is baked into the task: holding 4.2 W/kg while deciding whether to follow
          a move is inherently hard, and only fitness and practice help. <strong>Extraneous load</strong> is effort
          spent on things that do not help, like a cluttered screen or a phone beside the bars, and it is free to
          delete. <strong>Germane load</strong> builds a model you reuse, such as knowing where this course splits.
          Cut extraneous, accept intrinsic, spend the rest on germane. Most riders do the reverse, because extraneous
          load is the entertaining kind.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Why decision quality falls as effort rises</h2>
        <h3 className="text-xl font-bold mb-3">The mechanism, as best I can argue it</h3>
        <p className="mb-4">
          Three things compete for the same narrow channel of attention while you race. Hard effort produces a loud
          stream of internal signals - breathing, burning legs, the urge to ease off - and suppressing them is itself
          an act of attention that costs more the harder you go. Working memory is small: "I am 8 seconds down, 2 km
          left, the climb starts in 400 m, I hold an Aero" is already near the limit, and each new item pushes an old
          one out. And tired attention narrows, keeping the most salient stream, which under effort is your own
          suffering, while dropping the peripheral ones where the tactical information lives. That is a prediction
          rather than a statistic: judgement degrades in step with accumulated effort, fastest in the streams you
          watched least closely.
        </p>
        <h3 className="text-xl font-bold mb-3">What that predicts about race mistakes</h3>
        <p className="mb-0">
          A race concentrates its most important decisions in the window where you are least able to make them.
          Nothing in the first ten minutes of a 40-minute race decides the result. Almost everything in the last five
          does: when to move up, whether to follow the move that sticks, when to spend the PowerUp, when to sprint.
          So the errors to expect are not random. They cluster late, they look like "I saw the gap open and did
          nothing for four seconds", and in hindsight they feel like decisions you would obviously have got right at
          the start. My bad races are rarely a fitness story. They are a story about a four-second delay.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">What a late mistake costs</h2>
        <p className="mb-4">
          The size of each cost depends on the course and the pack, so no single percentage would survive contact
          with a different race. The mechanism is knowable, though, and that is what lets you rank them.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Late-race mistake</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Why it costs you</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Drifting back before a climb</td>
                <td className="py-2 pr-4">You start the climb behind and pay an unplanned supra-threshold effort at the worst moment. Everything after it is degraded.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Chasing a lone attacker early</td>
                <td className="py-2 pr-4">You take the full wind cost while the pack sits in your <Link to="/blog/zwift-drafting-physics-aerodynamics" className="text-zwift-orange hover:underline">draft</Link>, the largest single lever in the race, which you just handed to everyone else.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Spending the Aero PowerUp early</td>
                <td className="py-2 pr-4">It lasts around 15 seconds. Mid-bunch that changes nothing; at 250 m to go it changes the result.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Reacting four seconds late</td>
                <td className="py-2 pr-4">The gap grows while your ability to close it falls. This error gets more expensive the longer you take.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 mb-0">
          If these tactics are new, read{" "}
          <Link to="/blog/zwift-racing-for-beginners" className="text-zwift-orange hover:underline">Zwift racing for beginners</Link>{" "}
          and the <Link to="/blog/zwift-powerups-guide" className="text-zwift-orange hover:underline">PowerUps guide</Link> first, or
          browse the <Link to="/blog/category/racing" className="text-zwift-orange hover:underline">racing section</Link>.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <BarChart3 className="mr-2 text-zwift-orange" size={24} />
          The opposite problem: the solo endurance ride
        </h2>
        <p className="mb-4">
          A race overloads attention. A three-hour zone 2 ride starves it, and that is also a problem. Nothing needs
          deciding: no pack, no PowerUp, no gradient that changes what you do. One power number and a clock.
        </p>
        <h3 className="text-xl font-bold mb-3">Why the easier ride feels mentally harder</h3>
        <p className="mb-4">
          Outdoors the same three hours is full of small forced decisions. You steer, read the surface, brake for a
          junction, pick a line, shift for the next rise. None of it is difficult, and that is the point: it occupies
          attention cheaply. You also coast, where indoors you almost never do. The mechanism I think explains the
          rest is this: perceived effort is not a direct readout of the muscles, it is what your attention lands on.
          Outdoors it is spread across a dozen small tasks, so the signal from your legs gets a small share. Indoors,
          with nothing competing, it gets nearly all of it. That is reasoning, not a measured result, but it predicts
          what every indoor rider notices: the hardest part of a long trainer ride is not the legs. I compared the
          two settings in{" "}
          <Link to="/blog/zwift-vs-outdoor-cycling" className="text-zwift-orange hover:underline">Zwift versus outdoor cycling</Link>{" "}
          and <Link to="/blog/virtual-hills-real-wind-whats-harder" className="text-zwift-orange hover:underline">virtual hills, real wind</Link>.
        </p>
        <h3 className="text-xl font-bold mb-3">Boredom is a limiter, not a character flaw</h3>
        <p className="mb-4">
          Abandon a four-hour ride at 2:40 because you cannot stand another minute and the session failed for a
          reason you can engineer around. Four things help, for different reasons:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Structure.</strong> Ten minutes at the top of zone 2 every half hour costs almost nothing physiologically and gives attention a job.</li>
          <li><strong>Segmentation.</strong> Three hours is unbearable as one object; six blocks of thirty minutes is fine. Only the counting changes.</li>
          <li><strong>Group rides.</strong> Others restore the cheap monitoring you lose indoors. See <Link to="/blog/zwift-group-ride-dynamics" className="text-zwift-orange hover:underline">group ride dynamics</Link>.</li>
          <li><strong>Route choice.</strong> Terrain variation forces small adjustments, which is half of why <Link to="/blog/zwift-route-selection-psychology" className="text-zwift-orange hover:underline">route selection</Link> shapes what you finish.</li>
        </ul>
        <p className="mb-0">
          The honest caveat about entertainment: a film reduces boredom by taking attention, not by creating it. That
          is a fine trade on an easy ride and a bad one on an interval session, where your power will drift during
          the interesting parts and get corrected during the dull ones. Check the trace afterwards and see.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Target className="mr-2 text-zwift-orange" size={24} />
          Pacing is a cognitive skill
        </h2>
        <p className="mb-4">
          Holding a power target is not purely physical. It is a vigilance task: read a number, compare it to a
          target, correct, several times a minute, for as long as the effort lasts. Vigilance degrades in a
          predictable order.
        </p>
        <p className="mb-4">
          The first thing to go is not average power, it is variability. Early on your corrections are small and
          frequent. Later they become large and infrequent, because you check less often and let the number drift
          further before you notice, so the trace roughens while the average still looks fine. That is a free early
          warning: if your 3-second power swings more than it did twenty minutes ago while your 30-second average is
          on target, attention is failing before your legs are. Simplify at once - one number, nothing else, and a
          deliberately shorter checking interval.
        </p>
        <p className="mb-0">
          ERG mode removes the vigilance task by making the trainer hold the target for you. That is a real
          reduction in load, and why hard intervals often feel more achievable in ERG. It removes the practice too,
          though. If every interval is in ERG, you have never rehearsed what a race or a climb attempt demands:
          producing a steady target out of your own attention, unaided. I use ERG for short, fiddly, high-intensity
          work and free ride for anything long enough for pacing to matter.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Protocols that actually reduce load</h2>
        <h3 className="text-xl font-bold mb-3">1. Pre-decide the race</h3>
        <p className="mb-4">
          A decision made at threshold is made badly; the same decision made in the start pen is made well and costs
          nothing to execute later. Write the plan as trigger and response, so that in the moment you are matching a
          pattern, not reasoning.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Trigger</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Pre-decided response</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">A gap opens near the top of a climb</td>
                <td className="py-2 pr-4">Close it now, at any cost. Gaps at the top do not come back.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">One rider attacks with over 10 minutes left</td>
                <td className="py-2 pr-4">Ignore. Do not weigh it up, do not chase.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Two or more go clear inside the last 5 minutes</td>
                <td className="py-2 pr-4">React at once, or accept racing for the places behind. No third option.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Holding an Aero inside the last kilometre</td>
                <td className="py-2 pr-4">Spend it at roughly 250 m, not before.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Average power above plan at halfway</td>
                <td className="py-2 pr-4">Ease for 60 seconds. Do not correct it in one go.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 mb-4">
          Five rules is about the limit of what I can recall mid-race; a fifteen-rule plan has moved the load rather
          than removed it. Knowing your category also removes a class of uncertainty about who to follow, which is
          why the{" "}
          <Link to="/zwift-racing-category-calculator" className="text-zwift-orange hover:underline">racing category calculator</Link>{" "}
          and the <Link to="/zwift-ftp-calculator" className="text-zwift-orange hover:underline">FTP calculator</Link> come before the
          plan, not after it.
        </p>
        <h3 className="text-xl font-bold mb-3">2. Simplify the screen</h3>
        <p className="mb-4">
          Decide before the start which two numbers you may look at and treat the rest as decoration. For a race that
          is power and the pack; for a climb attempt, power and elapsed time. Close the tabs, put the phone face
          down, turn off the second screen. It is the cheapest item here: no fitness, no willpower, just a decision
          made in advance.
        </p>
        <h3 className="text-xl font-bold mb-3">3. Chunk the effort, and save judgement for the end</h3>
        <p className="mb-0">
          Attention holds a small object far better than a large one, so never carry "40 minutes at threshold" in
          your head. Carry "four minutes to the next boundary" and rebuild the object each time you reach one, using
          whatever the course provides: laps, banners, hairpins, kilometre markers. Then budget judgement like the
          depleting resource it is: spend it early working out where the race will split, then coast on your rules so
          you reach the last ten minutes with something left to think with.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">What this means for a climb time attempt</h2>
        <p className="mb-4">
          A solo climb attempt is the purest version of the pacing problem: no pack, no PowerUp decision, no tactics,
          just one number held for the best part of an hour. That is why lapses of attention show up so cleanly in
          the result. Alpe du Zwift is 12.2 km with 1,036 m of gain, roughly 8.5% average, over 21 hairpins. The fit
          behind this site's <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">Alpe du Zwift calculator</Link>{" "}
          is time_seconds = 148.60*(W/kg)<sup>2</sup> - 1954.08*(W/kg) + 8329.87, and it gives this:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Sustained W/kg</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Predicted time</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Watts at 75 kg</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">3.0</td>
                <td className="py-2 pr-4">63:25</td>
                <td className="py-2 pr-4">225 W</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">3.1</td>
                <td className="py-2 pr-4">61:40</td>
                <td className="py-2 pr-4">233 W</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">3.2</td>
                <td className="py-2 pr-4">59:58</td>
                <td className="py-2 pr-4">240 W</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">3.3</td>
                <td className="py-2 pr-4">58:20</td>
                <td className="py-2 pr-4">248 W</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">3.4</td>
                <td className="py-2 pr-4">56:44</td>
                <td className="py-2 pr-4">255 W</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 mb-4">
          Roughly 3.2 W/kg is what it takes to break the hour, and near that point the model's slope is about 1,000
          seconds per W/kg. For a 75 kg rider a 5 W sag is 0.067 W/kg, worth about 67 seconds across the whole climb.
          Let it appear only in the final third, once vigilance starts to fail, and my rough estimate is still around
          20 seconds lost: the difference between 59:58 and 60:18, from nothing but checking your power less often.
        </p>
        <p className="mb-0">
          So pace the Alpe as an attention problem. Fix the target beforehand so there is no arithmetic to do on the
          bike, use the 21 hairpins as chunk boundaries, and check power on a deliberate rhythm, because whenever you
          happen to look becomes less often as you tire. Ven-Top, Zwift's Mont Ventoux in the France world, is
          roughly 20.9 km and about 1,534 m of gain, so the same vigilance task runs longer. Set that target with
          the{" "}
          <Link to="/ventop-calculator" className="text-zwift-orange hover:underline">Ven-Top calculator</Link> or the general{" "}
          <Link to="/zwift-climb-time-calculator" className="text-zwift-orange hover:underline">climb time calculator</Link>, compare the
          two on <Link to="/alpe-vs-ventop" className="text-zwift-orange hover:underline">Alpe versus Ven-Top</Link>, and take the
          detailed pacing from <Link to="/blog/conquer-alpe-du-zwift" className="text-zwift-orange hover:underline">conquer Alpe du Zwift</Link>.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <AlertCircle className="mr-2 text-zwift-orange" size={24} />
          Telling mental fatigue apart from physical fatigue
        </h2>
        <p className="mb-4">
          They feel similar from the inside and call for opposite responses. Physical fatigue means less power for
          the same perceived effort, and simplifying the task does not help. Mental fatigue means the same power
          feels harder, and cutting what you track does help.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>3-second power swings more than earlier while the average is unchanged: attention.</li>
          <li>You read a number, fail to register it, and read it again: attention.</li>
          <li>You notice a gap only after it has doubled: attention.</li>
          <li>You push as hard as before and the number is lower, or cadence collapses on the flat: legs.</li>
        </ul>
        <p className="mb-4">
          Get it backwards and you rest when you should have restructured. There is a planning consequence too: a
          hard race after a mentally heavy day of work or study is not the same session as the identical race on a
          quiet Sunday, so I put my hardest racing where my head is freshest. The{" "}
          <Link to="/blog/category/training" className="text-zwift-orange hover:underline">training section</Link> and the{" "}
          <Link to="/blog/10-day-zwift-training-week" className="text-zwift-orange hover:underline">10-day training week</Link> cover how
          to lay that out across a block.
        </p>
        <p className="mb-0">
          For the deeper version of how perception shapes what you can do on a trainer, I wrote about it in{" "}
          <Link to="/blog/ghost-in-the-machine-why-your-brain-allows-you-to-suffer-more-in-watopia" className="text-zwift-orange hover:underline">ghost in the machine</Link>.
        </p>
      </div>

      <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
        <h2 className="text-2xl font-bold mb-4">The short version</h2>
        <p className="mb-4">
          Attention is finite, it is shared with physical effort, and it fails in a predictable order: variability
          first, then average power, then judgement. Races overload it, endurance rides starve it, and both cost real
          time. Nearly all of the fix is preparation, not willpower: fewer numbers on screen, fewer decisions left at
          threshold, and a big effort broken into pieces small enough to hold.
        </p>
        <p className="mb-0">
          Set your next target with the{" "}
          <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline font-semibold">Alpe du Zwift calculator</Link>,
          browse the rest on{" "}
          <Link to="/zwift-climbs" className="text-zwift-orange hover:underline font-semibold">the climbs page</Link>, and if something
          here is wrong, <Link to="/contact" className="text-zwift-orange hover:underline font-semibold">tell me</Link> and I will fix
          it.
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

export default ZwiftCognitiveLoad;
