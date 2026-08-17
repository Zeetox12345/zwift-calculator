import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";
import { Settings, Wind, Zap, TrendingUp } from "lucide-react";

const ZwiftEquipmentOptimizationAerodynamics = () => {

  const relatedArticles = [
    {
      title: "Zwift Setup Guide",
      excerpt: "Complete guide to setting up your Zwift training environment.",
      date: "Recent",
      readTime: "15 min",
      slug: "/blog/zwift-setup-guide",
      category: "Setup"
    },
    {
      title: "The Mechanical Engineering of Zwift Performance: Why Physics Matters in Virtual Cycling",
      excerpt: "Explore Zwift performance through mechanical engineering principles.",
      date: "20-12-2025",
      readTime: "20 min",
      slug: "/blog/the-mechanical-engineering-of-zwift-performance",
      category: "Physics"
    },
    {
      title: "Zwift Drafting Physics & Aerodynamics: The Science Behind Virtual Pelotons",
      excerpt: "Deep dive into Zwift's drafting mechanics.",
      date: "21-12-2025",
      readTime: "22 min",
      slug: "/blog/zwift-drafting-physics-aerodynamics",
      category: "Physics"
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
        <p className="text-lg text-muted-foreground mb-4">
          Outdoors, your equipment decides how gravity, the road and the air treat you. In Zwift none of that applies.
          The air is not real, the road is not real, and your bike is clamped to a trainer going nowhere. Your virtual
          speed comes from a handful of numbers the game assigns to the frame and wheels you picked in the garage.
        </p>
      </div>

      <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Settings className="mr-2 text-zwift-orange" size={24} />
          The one idea this article is built on
        </h2>
        <p className="mb-0">
          In Zwift, equipment does not change your bike. It changes parameters in a simulation. So the question is
          never "is this wheel aerodynamic" - it is "what values does the game assign it, and does today's terrain care
          about those values". On an 8.5% gradient the terrain cares about mass and almost nothing else. At 45 km/h on
          the flat it cares about drag and almost nothing else. Same rider, same garage, opposite answer.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Zwift equipment is a set of numbers, not a bike</h2>
        <p className="mb-4">
          Swapping frames changes nothing physical. Your crank still turns the same flywheel and your trainer still
          reports the same watts. What changes is the input to a physics model: a mass value, a drag value, and a
          rolling resistance value for whatever surface your avatar is on. Zwift adds your entered weight and height,
          the gradient and your draft situation, then solves for a speed. Two things follow. Equipment choice is a
          per-course decision, not a per-rider one, and switching costs a few clicks. And the ceiling on any gain is
          set by how much of your resistance that parameter is allowed to touch, which swings wildly with terrain.
        </p>
        <p className="mb-0">
          One caveat. Zwift does not publish its equipment tables and I have not measured them, so I will not hand you
          numbers I cannot vouch for, and Zwift rebalances gear periodically, which quietly ages every community table
          people quote. What follows is the structure of the problem, which does not go stale.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The three parameters that matter</h2>

        <h3 className="text-xl font-bold mb-3">1. In-game frame and wheel weight</h3>
        <p className="mb-4">
          Your avatar's mass is your entered body weight plus the mass the game assigns your frame and wheels, and that
          total is what the gravity term multiplies. It is proportional, with no diminishing returns: 1 kg out of an
          83 kg system, meaning a 75 kg rider on an 8 kg virtual bike, is 1.2% of the mass being lifted on every metre
          of every climb. This parameter is the whole game on the{" "}
          <Link to="/zwift-climbs" className="text-zwift-orange hover:underline">steep climbs</Link> and close to
          irrelevant at steady speed on the flat.
        </p>

        <h3 className="text-xl font-bold mb-3">2. The drag value</h3>
        <p className="mb-4">
          Every frame and wheel combination carries an effective drag figure, the in-game equivalent of CdA, scaled by
          your avatar's height. Because aerodynamic power rises with the cube of speed, it is nearly invisible at
          12 km/h and nearly everything at 45 km/h. It is also the parameter{" "}
          <Link to="/blog/zwift-drafting-physics-aerodynamics" className="text-zwift-orange hover:underline">drafting</Link>{" "}
          operates on: sitting in a wheel reduces your effective drag, so an aero setup and a good position in the
          bunch are the same kind of gain, and the bunch one is far larger.
        </p>

        <h3 className="text-xl font-bold mb-3">3. Rolling resistance, per surface</h3>
        <p className="mb-0">
          Zwift's worlds contain tarmac, cobbles, gravel, dirt and wooden boards, each surface has its own coefficient,
          and each wheel type gets a different value on each one. This is the parameter riders forget, and it punishes
          hardest, because rolling resistance takes a roughly constant slice of your power at every speed instead of
          fading away at low speed like drag does. Road wheels on a dirt sector are a large multiplier on a term
          already scaled to your whole body weight.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Why the fastest bike up the Alpe is not the fastest bike on the flat</h2>
        <p className="mb-4">
          Here is the calculation that settles it. A 75 kg rider on an 8 kg bike, 83 kg all in, with standard
          first-approximation values: CdA 0.35 m², rolling coefficient 0.004, air density 1.225 kg/m³. Zwift's internal
          numbers are not exactly these, so read the shares rather than the decimals. Alpe du Zwift is 12.2 km with
          1,036 m of gain, roughly 8.5% across its 21 hairpins, and covering it in an hour means 3.39 m/s. Lifting
          83 kg at that gradient and speed takes about 235 W, rolling adds about 11 W, and air costs about 8 W. On the
          flat at 45 km/h, the aero term alone is about 419 W, rolling is about 41 W, and gravity contributes nothing.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Situation</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Gravity</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Rolling</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Air</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Alpe du Zwift, 8.5%, 12.2 km/h</td>
                <td className="py-2 pr-4">~92%</td>
                <td className="py-2 pr-4">~4%</td>
                <td className="py-2 pr-4">~3%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Flat road, 45 km/h</td>
                <td className="py-2 pr-4">0%</td>
                <td className="py-2 pr-4">~9%</td>
                <td className="py-2 pr-4">~91%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          Put those rows side by side and the equipment question collapses. On the Alpe, air is 3% of your problem, so
          even halving your drag would save under 2% of your power, and no wheel choice halves anything. Meanwhile the
          96% that scales with mass responds directly: remove 1 kg and you remove about 1.1% of your total demand,
          which is roughly 40 seconds off a 60-minute climb. The{" "}
          <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">Alpe du Zwift calculator</Link>{" "}
          shows the same effect from the other side.
        </p>
        <p className="mb-0">
          At 45 km/h gravity has left the room. Weight does nothing at steady speed and only reappears when you
          accelerate. Drag is 91% of the demand, and since the aero term goes with the cube of speed, a 5% lower drag
          value at the same power buys roughly 1.7% more speed, about 30 seconds over a half-hour flat race.{" "}
          <Link to="/ventop-calculator" className="text-zwift-orange hover:underline">Ven-Top</Link> sits with the Alpe
          rather than the flats: 20.9 km at a 7 to 8% average, shallow enough to give drag a slightly larger share but
          still firmly a weight course. My rule of thumb is above roughly 5% a weight course,
          below roughly 2% a drag course, and in between choose by where the race is decided rather than by the average
          gradient. The{" "}
          <Link to="/alpe-vs-ventop" className="text-zwift-orange hover:underline">Alpe versus Ven-Top comparison</Link>{" "}
          covers what that difference does to pacing.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Zap className="mr-2 text-zwift-orange" size={24} />
          The Tron bike, honestly
        </h2>
        <p className="mb-4">
          The Zwift Concept Z1, which everyone calls the Tron bike, is unlocked by climbing 50,000 m in the game
          through the Everest challenge. That grind is most of why it has the reputation it has. I own one, and the
          mythology is about half deserved. It arrives as one combined unit, frame and wheels together, so you cannot
          mismatch it, it has long been a strong all-round climbing choice, and it needs none of the separate wheel
          unlocks the best conventional setups depend on. If you ride a lot of hills it removes a decision.
        </p>
        <p className="mb-0">
          Where it is not the answer: on flat, fast, drafted courses it is not a dedicated aero setup, and on gravel or
          dirt it is not a gravel setup. Because frame and wheels are one inseparable item you cannot fix either
          problem - no dirt tyres, no disc wheel for a time trial. Its versatility is exactly what caps it, and with
          periodic rebalancing, any claim that the Tron is fastest at anything is a snapshot rather than a law. Fair
          summary: a very good default that is almost never a disaster, and a generalist that a specialist beats
          wherever one parameter dominates hard.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Your height and weight are equipment too</h2>
        <p className="mb-4">
          Two of the largest inputs are not in the garage. They are in your profile, and you typed them in. Weight goes
          straight into the gravity term, so on the Alpe it is close to a one-for-one trade with bike weight: at fixed
          power, 1 kg off you is worth the same 40 seconds an hour as 1 kg off the frame. Height feeds the drag value,
          because a taller avatar presents more frontal area, which is why tall riders find flat racing relatively
          harder and climbing relatively easier at the same W/kg.
        </p>
        <p className="mb-0">
          This is the uncomfortable part. Because weight is typed rather than measured, it is the most abusable number
          in the game, and it is abusable exactly where it does most: on climbs and in category placement. A rider
          entering 68 kg instead of a real 75 kg gains about 10% in W/kg, which on the Alpe is minutes rather than
          seconds. That is why serious events verify results and why category systems exist. The{" "}
          <Link to="/zwift-racing-category-calculator" className="text-zwift-orange hover:underline">racing category calculator</Link>{" "}
          shows where your honest numbers put you. Weigh at the same time of day and update monthly, not daily.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The decision table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Terrain</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Dominant resistance</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Prioritise</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Rough size</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Sustained climb above 5%</td>
                <td className="py-2 pr-4">Gravity, around 90%</td>
                <td className="py-2 pr-4">Lowest frame plus wheel mass. Ignore drag.</td>
                <td className="py-2 pr-4">~40 s per kg per hour of climbing</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Rolling terrain, 2-5%</td>
                <td className="py-2 pr-4">Split, changing every minute</td>
                <td className="py-2 pr-4">Balanced setup, chosen by where the selection happens</td>
                <td className="py-2 pr-4">Small either way</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Flat racing in a bunch</td>
                <td className="py-2 pr-4">Drag, around 90%</td>
                <td className="py-2 pr-4">Low drag frame, deep wheels. Weight is noise.</td>
                <td className="py-2 pr-4">Roughly 1-2% of speed</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Time trial, no draft</td>
                <td className="py-2 pr-4">Drag, all carried by you</td>
                <td className="py-2 pr-4">TT frame and disc</td>
                <td className="py-2 pr-4">The largest equipment gain available</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Gravel, dirt or cobbles</td>
                <td className="py-2 pr-4">Rolling resistance</td>
                <td className="py-2 pr-4">Correct surface tyres, before anything else</td>
                <td className="py-2 pr-4">Large. Worse than a heavy frame.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Short sprint finish</td>
                <td className="py-2 pr-4">Drag, plus mass while accelerating</td>
                <td className="py-2 pr-4">Drag first, then mass. Positioning beats both.</td>
                <td className="py-2 pr-4">Smaller than one good wheel to follow</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <TrendingUp className="mr-2 text-zwift-orange" size={24} />
          How much is any of this actually worth?
        </h2>
        <p className="mb-0">
          This is my rough estimate rather than a measurement, so take the bound first. Even if the worst realistic
          climbing setup were a full 2 kg heavier than the best, that is 2.4% of an 83 kg system, or about 80 seconds
          on a 60-minute Alpe. Real choices sit much closer together, so 20 to 40 seconds is the honest figure, and on
          a flat course call it 1-2% of speed. Now compare. Starting the Alpe 10% above the power you can hold for an
          hour, the standard mistake in the first three hairpins, costs several minutes when you fade in the top third.
          A hot room with no fan can force a meaningful power drop late in the effort through cardiac drift alone.
          Equipment is a one-off 30-second decision you make correctly once and never revisit. Pacing, cooling and
          fuelling are multi-minute decisions you get to make wrong every single ride.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The most important equipment you own is your power number</h2>
        <p className="mb-4">
          On a smart trainer the power figure is not a record of your ride, it is an input to it. Zwift takes the watts
          your trainer reports and computes your virtual speed from them, so a trainer reading 3% high does not merely
          flatter your log, it makes your avatar 3% stronger than you are. No frame in the game moves the model that
          much. The figures below are manufacturer claims, not independently verified accuracy, so read the ordering
          rather than the decimals.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Power source</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Claimed accuracy</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Practical note</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Crank or spider strain gauge</td>
                <td className="py-2 pr-4">±1-2%</td>
                <td className="py-2 pr-4">Measures you, not the trainer</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Direct-drive smart trainer</td>
                <td className="py-2 pr-4">±1-2%</td>
                <td className="py-2 pr-4">Very consistent indoors</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Pedal-based</td>
                <td className="py-2 pr-4">±1-2%</td>
                <td className="py-2 pr-4">Moves between bikes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Wheel-on smart trainer</td>
                <td className="py-2 pr-4">±3% or worse</td>
                <td className="py-2 pr-4">Drifts with tyre pressure and heat</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Estimated from speed (zPower)</td>
                <td className="py-2 pr-4">Not an accuracy spec</td>
                <td className="py-2 pr-4">A lookup curve, not a measurement</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-0">
          Consistency matters more than the headline percentage. A trainer reading 2% high every single day still gives
          valid zones and valid progress tracking, and only inflates leaderboard placings. One drifting unpredictably
          by 2% is worse, because you can never separate a good day from a warm room. That is what calibration
          protects: a zero-offset takes ten seconds, belongs after ten minutes of warm-up since strain gauges shift
          with temperature, and skipping it for months will quietly rewrite your{" "}
          <Link to="/zwift-ftp-calculator" className="text-zwift-orange hover:underline">FTP</Link> without telling
          you.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Trainer responsiveness, position and tyres</h2>
        <p className="mb-4">
          Responsiveness is how quickly resistance changes when the simulated gradient does. Direct-drive units
          generally react within about a second and wheel-on units take longer. The lag matters in three places: the
          base of a ramp, where resistance arrives after your cadence has spiked; short surges, where bridging a gap
          needs power now rather than in three seconds; and holding a wheel, where staying in the draft zone is
          continuous fine adjustment that lag turns into overshoot. Lowering the trainer difficulty slider is a
          legitimate fix, because it compresses the range of simulated gradients without changing your in-game speed at
          all.
        </p>
        <p className="mb-0">
          Position indoors is a different problem, because the bike cannot move and one set of contact points takes the
          same pressure at the same angle all session. Run something more forgiving than your outdoor race position.
          Aerodynamics is decided by numbers in the simulation, not your torso angle, so sitting up costs no speed at
          all. On a wheel-on trainer the tyre is part of the measurement chain, since power is inferred from roller
          speed, so use a dedicated trainer tyre at the same inflation and roller tension every time. The goal is that
          today's numbers mean what last month's meant.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Wind className="mr-2 text-zwift-orange" size={24} />
          Cooling is the largest lever in the room
        </h2>
        <p className="mb-4">
          Your body produces roughly three to four times as much heat as useful mechanical power, so at 250 W you are
          also a radiator running near 750 W in a room that does not move. As core temperature rises, blood is diverted
          to the skin, stroke volume falls, and heart rate climbs at the same power until you back off. I have not
          measured this with instrumentation, so here is the signature rather than a number: the first 20 minutes feel
          controlled, the last 20 feel impossible at identical watts, and heart rate sits 10-15 beats higher for
          nothing. That pattern is an airflow problem, not a fitness one.
        </p>
        <p className="mb-4">
          Aim air at your chest and face rather than your legs, and use two moderate fans instead of one large one, so
          you get flow across a wide area instead of one fast jet. Keep the room around 18-20 °C and open a window in a
          small space. Evaporation does the cooling, so above roughly 70% relative humidity sweat runs off you instead
          and cools nothing.
        </p>
        <p className="mb-0">
          This is the cheapest improvement available indoors and it does not care what is in your garage. More detail
          sits in the{" "}
          <Link to="/blog/zwift-setup-guide" className="text-zwift-orange hover:underline">Zwift setup guide</Link> and
          across the rest of the{" "}
          <Link to="/blog/category/setup" className="text-zwift-orange hover:underline">setup articles</Link>.
        </p>
      </div>

      <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
        <p className="font-semibold mb-3">Pre-ride checklist, ordered by how much it is worth</p>
        <ul className="space-y-2 mb-0">
          <li>Fans on and aimed at chest and face before the first pedal stroke, room around 18-20 °C</li>
          <li>Trainer warmed ten minutes, then zero-offset calibrated</li>
          <li>Profile weight current to within a kilo, height correct</li>
          <li>Frame and wheels matched to today's terrain using the table above</li>
          <li>Wheel-on only: usual tyre pressure, usual roller tension</li>
          <li>Drink and carbohydrate within reach, because you will not get off to fetch them</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Why chasing in-game equipment is the least efficient way to get faster</h2>
        <p className="mb-4">
          In-game equipment is a fixed, one-off, capped gain. Once you have unlocked a couple of sensible options and
          learned which to pick for which terrain, there is nothing left to harvest, and you cannot go back for another
          1% next month. It is also the part of the system you control least, since Zwift can rebalance the numbers
          whenever it likes and every community table goes stale without announcing itself.
        </p>
        <p className="mb-4">
          Your engine has no such ceiling. Take the same 75 kg rider. At 240 W they are at 3.20 W/kg, which this site's
          Alpe fit puts at almost exactly 60 minutes, and roughly 3.2 W/kg is what going under the hour takes. Add 20 W
          of FTP and they are at 3.47 W/kg, which the same fit puts a little over four minutes quicker. Every frame in
          the garage combined is arguing over 40 seconds, and the frame gain evaporates the next time the tables are
          rebalanced. The 20 W does not.
        </p>
        <p className="mb-4">
          So the practical order is: cool the room, make the power number honest, fix the pacing, train consistently
          for a few months, and spend twenty minutes in the garage once. If you want something to train against, put
          your real numbers into the{" "}
          <Link to="/zwift-climb-time-calculator" className="text-zwift-orange hover:underline">climb time calculator</Link>,
          find the W/kg that produces the time you want, and work backwards to the watts. That number is a training
          plan. A wheel choice is not.
        </p>
        <p className="mb-0">
          I am Christian Lassen Dam, 25, an MSc student in Mechanical Engineering at Aalborg University in Denmark,
          currently training for Ironman Copenhagen. I am not a coach or a sports scientist, and where this article
          gives a number I have said whether it is verified, calculated from stated assumptions, or my own estimate.
          How this site handles claims is set out in the{" "}
          <Link to="/editorial-policy" className="text-zwift-orange hover:underline">editorial policy</Link>, and the{" "}
          <Link to="/contact" className="text-zwift-orange hover:underline">contact page</Link> is where to tell me I
          am wrong.
        </p>
      </div>

      <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
        <p className="mb-0">
          Next: the{" "}
          <Link to="/blog/the-mechanical-engineering-of-zwift-performance" className="text-zwift-orange hover:underline font-semibold">mechanical engineering analysis</Link>{" "}
          works through the force balance in detail, the{" "}
          <Link to="/blog/power-to-weight-ratio-science" className="text-zwift-orange hover:underline font-semibold">power-to-weight deep dive</Link>{" "}
          explains why the ratio behaves as it does on gradients, and{" "}
          <Link to="/blog/conquer-alpe-du-zwift" className="text-zwift-orange hover:underline font-semibold">conquering Alpe du Zwift</Link>{" "}
          plus{" "}
          <Link to="/blog/mastering-ven-top" className="text-zwift-orange hover:underline font-semibold">mastering Ven-Top</Link>{" "}
          cover pacing both climbs.
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

export default ZwiftEquipmentOptimizationAerodynamics;
