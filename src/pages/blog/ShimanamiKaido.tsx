import { Link } from "react-router-dom";

import BlogPost from "@/components/BlogPost";

const ShimanamiKaido = () => {
  const content = (
    <div className="space-y-8">
      {/* Introduction */}
      <div>
        <p className="mb-4 text-lg leading-relaxed">
          A long touring day is an endurance problem, not a fitness problem, and most riders train for the wrong one.
        </p>
        <p className="mb-4">
          The pattern is familiar. Someone plans a big day out on the bike, gets nervous about whether they are
          strong enough, and responds by adding intensity. Intervals, threshold sessions, a hard group ride at the
          weekend. Then the day comes and it turns out that six hours of easy riding with a dozen stops asks for
          almost nothing they trained, and quite a lot of something they did not.
        </p>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/japan_1_1.webp"
            alt="Cycling route crossing between coastal islands"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          Japan's Shimanami Kaido is the example here because it is close to the perfect version of this kind of
          day: long, mostly flat, spectacular, and best ridden slowly with frequent stops. I have not ridden it. The
          preparation, and the week afterwards, is what this article is actually about.
        </p>
      </div>

      {/* Touring is different */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What a stop-often day actually asks for</h2>
        <p className="mb-4">
          A touring day and a training ride of identical distance are different events. Four things separate them.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>Total time on the bike is much longer than moving time.</strong> A six-hour ride can easily be
            an eight or nine hour day once stops are counted, and your body is out in it the whole time.
          </li>
          <li>
            <strong>You restart cold, repeatedly.</strong> Every stop lets muscles cool and stiffen. The first ten
            minutes after each one is harder than the ten minutes before it.
          </li>
          <li>
            <strong>Fuelling drifts.</strong> Long stops in the sun feel like meals but often are not, and the
            regular hourly intake that works on a training ride falls apart when the day has no rhythm.
          </li>
          <li>
            <strong>The intensity is genuinely low.</strong> Which sounds easy, and is exactly why people
            under-prepare for it. Low intensity for a very long time is its own demand.
          </li>
        </ul>
        <p className="mb-4">
          None of that is trained by intervals. All of it is trained by time.
        </p>
      </div>

      {/* Why threshold is wrong */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Why threshold work is the wrong preparation</h2>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/japan_1_2.webp"
            alt="Bridge span above calm water"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          Threshold training raises the ceiling. A touring day never approaches the ceiling. Raising it changes
          nothing about how the sixth hour feels.
        </p>
        <p className="mb-4">
          What decides the sixth hour is a set of adaptations that come from duration rather than from intensity:
          how much fat you can use at a given effort, how comfortable your position stays over time, how well your
          gut keeps working, and how used your head is to simply continuing. Those are built by riding for a long
          time at an easy pace, which is unglamorous and therefore widely skipped.
        </p>
        <p className="mb-4">
          There is a further reason to keep the intensity down in the weeks before a trip, which is that arriving
          tired is worse than arriving slightly undertrained. A big block finished three days before you fly leaves
          you carrying fatigue into a holiday. That is the argument made at greater length in{" "}
          <Link to="/blog/zwift-training-periodization" className="text-zwift-orange hover:underline">
            the periodisation article
          </Link>
          .
        </p>
      </div>

      {/* The block */}
      <div>
        <h2 className="text-2xl font-bold mb-4">A six-week build for a long touring day</h2>
        <p className="mb-4">
          The whole plan is one long ride a week that gets longer, plus enough easy riding around it to keep things
          ticking over. There is deliberately almost no intensity in it.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 pr-4 font-semibold">Week</th>
                <th className="text-left py-2 pr-4 font-semibold">Long ride</th>
                <th className="text-left py-2 font-semibold">What you are practising</th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr className="border-b border-border">
                <td className="py-2 pr-4">1</td>
                <td className="py-2 pr-4">2 h easy</td>
                <td className="py-2">Holding a genuinely easy power without drifting up</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">2</td>
                <td className="py-2 pr-4">2 h 30 easy</td>
                <td className="py-2">Eating on a schedule rather than on appetite</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">3</td>
                <td className="py-2 pr-4">3 h easy, with two 10 min breaks off the bike</td>
                <td className="py-2">Restarting cold, which is the touring-specific bit</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">4</td>
                <td className="py-2 pr-4">90 min easy</td>
                <td className="py-2">Recovery week</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">5</td>
                <td className="py-2 pr-4">4 h easy, with three breaks</td>
                <td className="py-2">The rehearsal. Treat it as a dress run for the day</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">6</td>
                <td className="py-2 pr-4">2 h easy</td>
                <td className="py-2">Arrive fresh</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          Week three is the session people are tempted to skip the breaks in, and the breaks are the entire point.
          Getting off the bike for ten minutes and then riding again is the specific thing a touring day does over
          and over, and it is genuinely unpleasant to practise indoors, which tells you something about how much
          harder it is than it sounds.
        </p>
      </div>

      {/* Riding easy on Zwift */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Riding easy on Zwift is harder than riding hard</h2>
        <p className="mb-4">
          This is the practical obstacle, and it deserves its own section because it defeats more people than the
          duration does.
        </p>
        <p className="mb-4">
          Zwift is built to reward effort. Riders come past you and there is a pull to follow. Segments have timers
          on them. The category you are shown next to is a comparison whether you asked for one or not. The result
          is that easy rides quietly become moderate rides, moderate rides become tempo, and a training plan that
          looked polarised on paper turns into six weeks of the same middling intensity. That drift is the most
          common way indoor training goes wrong.
        </p>
        <p className="mb-4">The things that actually work, in rough order of effectiveness:</p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>Use ERG mode with a low fixed target.</strong> Take the decision away from yourself entirely.
            This is the one that works when nothing else does.
          </li>
          <li>
            <strong>Ride a route where nothing is happening.</strong> No climbs, no sprint segments, no reason to
            press.
          </li>
          <li>
            <strong>Put something on that you actually want to watch.</strong> A film for the middle two hours makes
            an easy ride pass and makes it much less likely you will start racing strangers out of boredom.
          </li>
          <li>
            <strong>Set an upper power alarm rather than a target.</strong> The goal is a ceiling, not a number to
            hit.
          </li>
          <li>
            <strong>Ride without the leaderboards if you find them pulling at you.</strong> Nobody is watching.
          </li>
        </ul>
        <p className="mb-4">
          A concrete definition of easy, since the word does too much work: you should be able to breathe through
          your nose and speak in complete sentences. In zone terms that is roughly 55 to 70% of FTP, which the{" "}
          <Link to="/zwift-ftp-calculator" className="text-zwift-orange hover:underline">
            FTP calculator
          </Link>{" "}
          will work out for you. If you finish the ride feeling like you could have done it again, that was correct.
        </p>
      </div>

      {/* The recovery week */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The week after, which matters more than the week before</h2>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/japan_1_3.webp"
            alt="Quiet coastal road beside the sea"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          Riders plan the trip in detail and then plan nothing at all for the week that follows, which is where the
          fitness from the trip either gets absorbed or gets thrown away.
        </p>
        <p className="mb-4">
          Two failure modes, and they are opposites. Some people take the whole week off, get stiff, lose rhythm and
          find it hard to start again. Others come back inspired and immediately do a hard session on legs that
          have absorbed several days of unaccustomed volume, which is a good way to get ill or injured.
        </p>
        <p className="mb-4">
          Easy riding beats both. It moves blood through tired muscles, keeps the habit intact, and asks for
          nothing. A week that works:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>Days 1 and 2:</strong> nothing, or 30 minutes of very easy spinning if you feel like moving.
          </li>
          <li>
            <strong>Day 3:</strong> 45 minutes easy. Flat route, no segments, no company.
          </li>
          <li>
            <strong>Day 4:</strong> off.
          </li>
          <li>
            <strong>Day 5:</strong> 60 minutes easy with three 1-minute efforts at the end, purely to remind your
            legs what fast feels like.
          </li>
          <li>
            <strong>Day 6:</strong> off, or easy.
          </li>
          <li>
            <strong>Day 7:</strong> 90 minutes endurance. If this feels good, you are ready for normal training
            again. If it does not, take another easy week and do not argue with it.
          </li>
        </ul>
        <p className="mb-4">
          The day-seven test is the useful part. It is an honest signal, and overriding it is the most common way a
          good trip turns into three bad weeks.
        </p>
      </div>

      {/* Why easy riding recovers */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Why easy riding recovers you better than rest does</h2>
        <p className="mb-4">
          This claim gets made constantly and is rarely explained, which makes it sound like folklore. It is not,
          and the reasoning is worth having because it tells you how easy is easy enough.
        </p>
        <p className="mb-4">
          Riding gently raises blood flow through the muscles that did the work without adding any meaningful new
          damage. More blood moving through tired tissue means faster delivery of what repair needs and faster
          removal of what it produces. Complete rest does neither. It is not that rest is harmful, it is that a very
          light ride does the same job plus something extra, at no cost.
        </p>
        <p className="mb-4">
          There is a second and less physiological reason. Stopping entirely for a week breaks the habit, and the
          habit is worth more over a season than any individual session. Coming back after seven days off is
          disproportionately hard for reasons that have nothing to do with fitness, which barely moves in a week.
        </p>
        <p className="mb-4">
          The condition attached to all of this is that easy has to actually mean easy. A recovery ride done at
          tempo is simply another training session, adding fatigue to a body that is trying to shed it, and it is
          the most common way a recovery week fails. If you cannot hold yourself back, use ERG at a low fixed
          target and let the trainer make the decision.
        </p>
        <p className="mb-4">
          The mechanism above is standard exercise physiology rather than anything measured on this site, and the
          size of the effect is genuinely debated. What is not debated is the direction, or the fact that easy
          riding does not slow recovery.
        </p>
      </div>

      {/* The example */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The example itself</h2>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/Japan_1_4.webp"
            alt="View across the Seto Inland Sea from a cycling route"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          The Shimanami Kaido is a cycling route across the Seto Inland Sea in Japan, linking Honshu to Shikoku via
          a chain of islands and a series of bridges built with dedicated cycle paths. It is around 70 km end to
          end, is described consistently as mostly flat with gentle spiral ramps up to each bridge, and is signposted
          throughout. The recurring advice in every account is to allow far more time than the distance suggests,
          because the stopping is the point.
        </p>
        <p className="mb-4">
          Seventy flat kilometres is well within a day for most riders who have done the build above. What makes it
          a long day is everything that is not pedalling, which is exactly why the preparation is about duration and
          restarting rather than about power.
        </p>
        <p className="mb-4">
          Beyond that I have no first-hand knowledge, and the{" "}
          <Link to="/editorial-policy" className="text-zwift-orange hover:underline">
            editorial policy
          </Link>{" "}
          on this site keeps me from inventing it.
        </p>
        <div className="my-8">
          <p className="text-xl font-semibold mb-4 text-foreground">Riders who have actually been there</p>
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/2KIdOBX2uoE"
              title="Cycling Japan's Shimanami Kaido route"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The short version</h2>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>A touring day asks for duration, not intensity. Threshold work does not prepare you for it.</li>
          <li>
            Practise the stops. Restarting cold, repeatedly, is the touring-specific demand and it is genuinely
            harder than it sounds.
          </li>
          <li>Six weeks of one progressively longer easy ride a week is enough. Arrive fresh, not fit.</li>
          <li>
            Riding easy on Zwift is the hard part. Use ERG with a low target if discipline fails, and pick a route
            where nothing is happening.
          </li>
          <li>
            Plan the week after the trip. Easy riding beats both total rest and an enthusiastic return to intervals,
            and day seven tells you whether you are ready.
          </li>
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
          description: "Work out what your easy zone actually is in watts",
        },
        {
          name: "Climb Time Calculator",
          path: "/zwift-climb-time-calculator",
          description: "Estimate how long any climb on your route will take",
        },
      ]}
    />
  );
};

export default ShimanamiKaido;
