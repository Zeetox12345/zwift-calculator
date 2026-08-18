import { Link } from "react-router-dom";

import BlogPost from "@/components/BlogPost";

const NewYorkCity = () => {
  const content = (
    <div className="space-y-8">
      {/* Introduction */}
      <div>
        <p className="mb-4 text-lg leading-relaxed">
          I have ridden Zwift's New York a great many times. I have never ridden the real one.
        </p>
        <p className="mb-4">
          That split is worth stating at the top, because it decides what this article can honestly be about. I can
          tell you what the in-game world does to your legs, which routes suit which session, and why urban riding
          is an interval workout wearing a commuter's clothes. I cannot tell you what it feels like to cross the
          Brooklyn Bridge at seven in the morning, and I am not going to pretend otherwise.
        </p>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/newyork_1_1.webp"
            alt="Cyclist riding through a dense city street"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          So this is mostly a training article. The through-line is that stop-start city riding and Zwift's New York
          world happen to demand the same physiological quality, which is the ability to produce a large number of
          hard accelerations without the gaps between them turning into recovery. That quality is trainable indoors,
          and most riders train the opposite of it by accident.
        </p>
      </div>

      {/* What Zwift's New York actually is */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What Zwift's New York actually is</h2>
        <p className="mb-4">
          Zwift's New York is two worlds stacked on top of each other, and they ride nothing like one another.
        </p>
        <p className="mb-4">
          At ground level there is Central Park, laid out with roughly the geometry of the real thing. It is a
          rolling loop rather than a flat one, with a long drag on the western side and a short sharp rise near the
          northern end that will take more out of you than its length suggests. Ridden at a steady effort it is one
          of the better endurance loops in the game, because the gradient changes often enough to keep you honest
          without ever becoming a climb.
        </p>
        <p className="mb-4">
          Above the park there is a network of elevated transparent roads that exist only in the game. These carry
          the steepest gradients in the world and the ramps on and off them are abrupt. The transitions are what
          make the world interesting to train on: you leave a rolling park loop, hit a short steep ramp, sit up on a
          fast elevated section, and then drop back down. The pattern repeats.
        </p>
        <p className="mb-4">
          Route names, distances and elevation figures change with game updates often enough that quoting them here
          would be out of date within a season. Check the route list in-game for current numbers. What does not
          change is the shape of the effort each type of route asks for, and that is the part worth planning around.
        </p>
      </div>

      {/* The three kinds of route */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Three kinds of route, three different sessions</h2>
        <p className="mb-4">
          Whatever the current route list looks like, everything in the world falls into one of three buckets.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>Park-only loops.</strong> Rolling, continuous, no long climb. These are endurance and tempo
            routes. Nothing forces a surge, so if you ride one hard it is because you chose to.
          </li>
          <li>
            <strong>Mixed park and elevated.</strong> The park loop with one or more trips up onto the glass. These
            are the interval routes, whether or not you intended to do intervals, because the ramps are steep
            enough that you cannot hold a steady power through them without changing effort.
          </li>
          <li>
            <strong>Elevated-heavy.</strong> Repeated short steep sections with fast recovery between them. Closest
            thing the world has to a structured over-under session with scenery attached.
          </li>
        </ul>
        <p className="mb-4">
          The mistake I made for a long time was picking the second kind of route and then trying to ride it at a
          single steady wattage. It does not work. The ramps force you above threshold whether you like it or not,
          and the fast sections afterwards make it almost impossible to keep the average where you wanted it. You
          finish having done a poor version of two different sessions.
        </p>
      </div>

      {/* Why city riding is intervals */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Why riding in a city is an interval session</h2>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/newyork_1_2.webp"
            alt="City street with traffic signals and cycle traffic"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          Here is the part that is worth doing the arithmetic on, because it explains why people come back from a
          week of city riding more tired than the distance suggests they should be.
        </p>
        <p className="mb-4">
          Getting a bike and rider back up to speed costs energy, and that cost is set by kinetic energy, which
          scales with the square of the speed. Take a rider and bike at 85 kg total, accelerating from a standstill
          to 25 km/h. 25 km/h is 6.94 m/s, so:
        </p>
        <div className="my-6 p-4 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-sm mb-2">E = &frac12; &times; m &times; v&sup2;</p>
          <p className="font-mono text-sm mb-2">
            E = 0.5 &times; 85 &times; 6.94&sup2; &asymp; 2,050 joules
          </p>
          <p className="text-sm text-muted-foreground">
            Do that in 8 seconds and the acceleration alone asks for about 256 W, on top of whatever rolling
            resistance and air drag are already taking.
          </p>
        </div>
        <p className="mb-4">
          Two thousand joules does not sound like much. The point is how often it repeats. Forty stops in an hour,
          which is not an unusual number for dense city riding, is roughly 82 kJ spent purely on getting back up to
          speed. An hour of steady riding at 200 W is about 720 kJ in total, so those accelerations are on the order
          of a tenth of the whole ride, and every one of them is delivered in a short, hard burst rather than spread
          out.
        </p>
        <p className="mb-4">
          That is the real physiological signature of urban riding. The average power looks unremarkable. The
          distribution is brutal. And it is exactly what Zwift's New York world produces when you ride the ramps,
          which is why the world is a better preparation for city riding than a flat route would be, despite the
          flat route matching the terrain more closely.
        </p>
      </div>

      {/* Why the average lies */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Why the average power on that ride lies to you</h2>
        <p className="mb-4">
          Two rides can finish with the same average power and cost you completely different amounts. This is the
          single most useful thing to understand about stop-start riding, and it is why a city ride wrecks you while
          a steady ride of the same average leaves you fine.
        </p>
        <p className="mb-4">
          Consider two hours, both averaging 180 W.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 pr-4 font-semibold"></th>
                <th className="text-left py-2 pr-4 font-semibold">Steady ride</th>
                <th className="text-left py-2 font-semibold">City ride</th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-medium">How the power arrives</td>
                <td className="py-2 pr-4">180 W, continuously</td>
                <td className="py-2">80 sprints at 500 W, a lot of soft-pedalling between</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-medium">Average power</td>
                <td className="py-2 pr-4">180 W</td>
                <td className="py-2">180 W</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-medium">Time above threshold</td>
                <td className="py-2 pr-4">None</td>
                <td className="py-2">Roughly 15 minutes, in 10 second pieces</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-medium">Anaerobic contribution</td>
                <td className="py-2 pr-4">Negligible</td>
                <td className="py-2">Substantial, and repeatedly depleted</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">How you feel afterwards</td>
                <td className="py-2 pr-4">Like a two-hour endurance ride</td>
                <td className="py-2">Like an interval session</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          The anaerobic contribution is the part that matters. Every effort above threshold draws on a capacity
          that refills slowly, and refilling it requires riding easier than you were before. In a city you rarely
          get to, because the next junction arrives before you have recovered from the last one. Do that eighty
          times and you finish genuinely fatigued from a ride whose average says you were barely trying.
        </p>
        <p className="mb-4">
          This is also why the average power figure is worth ignoring on rides like this. Look at time above
          threshold instead, or at the number of efforts. Those describe what actually happened.
        </p>
      </div>

      {/* The session */}
      <div>
        <h2 className="text-2xl font-bold mb-4">A session that actually trains it</h2>
        <p className="mb-4">
          Repeated hard accelerations with short recoveries is a well-defined training stimulus, and you do not need
          a bespoke workout file for it. Pick a route with several elevated sections and ride it deliberately.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>Warm-up:</strong> 15 minutes easy on the park loop, with three 20-second openers in the last
            five minutes.
          </li>
          <li>
            <strong>The work:</strong> every time a ramp arrives, get out of the saddle and take it hard, aiming for
            roughly 150% of FTP for the 20 to 40 seconds it lasts. Do not pace it. The whole point is that you did
            not get to choose when it started.
          </li>
          <li>
            <strong>Between ramps:</strong> ride at endurance pace, not recovery pace. This is the part people get
            wrong. If you soft-pedal back to fresh between efforts you are training something else entirely.
          </li>
          <li>
            <strong>Volume:</strong> start at eight to ten ramps. Build toward fifteen or twenty across a block.
          </li>
          <li>
            <strong>Cool-down:</strong> 10 minutes easy.
          </li>
        </ul>
        <p className="mb-4">
          The session is harder than it reads, mostly because of the third bullet. Holding endurance power between
          maximal efforts is the specific thing that city riding demands and that structured indoor training usually
          omits, because a normal interval session gives you genuine rest between reps.
        </p>
        <p className="mb-4">
          If you want a number to judge it by, watch how much your power in the last three ramps drops relative to
          the first three. Losing more than about 15% means you started too hard or you took too few of them. That
          is a judgement I have arrived at from riding these sessions rather than from any dataset, so treat it as a
          working rule and not a measurement.
        </p>
      </div>

      {/* What Zwift cannot do */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What the game cannot prepare you for</h2>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/newyork_1_3.webp"
            alt="Riverside cycle path beside a city skyline"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          The engine transfers. Almost nothing else does, and it is worth being blunt about that, because the gap is
          where people get hurt.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>Braking and reading traffic.</strong> Zwift has no brakes and nothing to avoid. The single most
            important skill in city riding gets zero practice indoors.
          </li>
          <li>
            <strong>Starting from a track stand or a foot down.</strong> Repeatedly, in cleats, next to a kerb.
          </li>
          <li>
            <strong>Surface.</strong> Expansion joints, tram rails, drain covers and potholes.
          </li>
          <li>
            <strong>Cognitive load.</strong> There is a whole article on this site about{" "}
            <Link to="/blog/zwift-cognitive-load" className="text-zwift-orange hover:underline">
              how decision quality degrades as effort rises
            </Link>
            . Indoors that costs you a race position. In traffic it costs more than that.
          </li>
        </ul>
        <p className="mb-4">
          The honest framing is that a winter on Zwift means you will arrive fit enough for a day in the city and
          under-practised at everything except the pedalling. Give yourself a couple of quiet rides somewhere
          forgiving before the traffic gets a vote.
        </p>
      </div>

      {/* If you are actually going */}
      <div>
        <h2 className="text-2xl font-bold mb-4">If you are actually going</h2>
        <p className="mb-4">
          I am outside my expertise here, so this section is short and consists only of things that are widely
          agreed on by people who do ride there. Treat it as a starting point for your own research rather than as
          local knowledge.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            The Hudson River Greenway on Manhattan's west side is largely separated from traffic and is the usual
            recommendation as a first ride and as a connector between other rides.
          </li>
          <li>
            The Central Park loop is one-way for cyclists and is busiest in the middle of the day. Early morning is
            the consistent advice.
          </li>
          <li>
            Protected infrastructure varies enormously block to block. Planning around the corridors that have it,
            rather than taking the direct line, is what most first-timers say they wish they had done.
          </li>
        </ul>
        <div className="my-8">
          <p className="text-xl font-semibold mb-4 text-foreground">Someone who has actually ridden it</p>
          <p className="mb-4 text-sm text-muted-foreground">
            Since I have not, here is a video from a rider who has. It covers the Hudson River Greenway and Central
            Park, which are the two places every account of cycling in New York seems to start.
          </p>
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/oKHXFsSgni4"
              title="Cycling in New York City: Hudson River Greenway and Central Park"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bringing it home */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Keeping the pattern after the trip</h2>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/newyork_1_4.webp"
            alt="Cyclist on an urban bridge crossing at dusk"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          The reason I keep coming back to this world in winter is that the repeated-acceleration stimulus is
          genuinely useful and genuinely unpleasant, which is a good combination for something you would otherwise
          talk yourself out of. A structured over-under file does the same physiological job, and I skip it far more
          often, because a workout screen asking for the eleventh rep is easier to quit than a ramp that is simply
          there in front of you.
        </p>
        <p className="mb-4">
          That is not a physiological argument. It is a behavioural one, and it is the honest reason the world earns
          a place in my week. If you want the physiological case for choosing routes deliberately rather than by
          mood, it is set out in{" "}
          <Link to="/blog/zwift-route-selection-psychology" className="text-zwift-orange hover:underline">
            the article on route selection
          </Link>
          .
        </p>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The short version</h2>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>Zwift's New York is a rolling park loop plus a set of steep elevated ramps that exist only in-game.</li>
          <li>
            City riding is physiologically an interval session: around 2,050 J per acceleration from a stop, forty
            of them an hour, roughly a tenth of the ride delivered in short bursts.
          </li>
          <li>
            The ramps reproduce that pattern better than a flat route would, despite matching the real terrain less
            well.
          </li>
          <li>Ride endurance pace between ramps, not recovery pace. That is the whole session.</li>
          <li>None of the handling, braking or traffic-reading transfers. Plan for that separately.</li>
        </ul>
      </div>
    </div>
  );

  return (
    <BlogPost
      content={content}
      relatedCalculators={[
        {
          name: "FTP & Training Zones",
          path: "/zwift-ftp-calculator",
          description: "Set the zones the ramp efforts above are described in",
        },
        {
          name: "Climb Time Calculator",
          path: "/zwift-climb-time-calculator",
          description: "Point the physics model at any climb in the game",
        },
      ]}
    />
  );
};

export default NewYorkCity;
