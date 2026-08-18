import { Link } from "react-router-dom";

import BlogPost from "@/components/BlogPost";

const GreatOceanRoad = () => {
  const content = (
    <div className="space-y-8">
      {/* Introduction */}
      <div>
        <p className="mb-4 text-lg leading-relaxed">
          Riding well on day three is a completely different skill from riding well on day one, and almost nobody
          trains for it.
        </p>
        <p className="mb-4">
          A multi-day trip is the most common reason a recreational rider suddenly needs a quality they have never
          deliberately built. You can be perfectly fit for a hard three-hour ride and still find yourself walking
          the last climb on the third morning, because the thing that fails is not your ceiling. It is your ability
          to go back to a reasonable effort after having already done it twice.
        </p>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/australia_1_1.webp"
            alt="Coastal road winding along a shoreline"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          I use the Great Ocean Road as the example throughout, because a three to five day coastal tour with
          rolling terrain is close to the archetype of this problem. I should say plainly that I have not ridden it.
          What I can do is the training half, which is where nearly all the useful, transferable content is anyway,
          and the arithmetic that explains why day three goes the way it does.
        </p>
      </div>

      {/* What accumulates */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What actually accumulates, and in what order</h2>
        <p className="mb-4">
          Four separate things stack up across consecutive days, and they do not stack at the same rate. Knowing
          which one is biting is what lets you fix it.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">1. Glycogen, and this is the big one</h3>
        <p className="mb-4">
          This is worth doing properly, because the numbers surprise people. Take a four-hour day averaging 200 W.
        </p>
        <div className="my-6 p-4 rounded-lg bg-muted/50 border border-border">
          <p className="text-sm mb-2">
            Mechanical work: 200 W &times; 4 h &times; 3,600 s = <strong>2,880 kJ</strong>
          </p>
          <p className="text-sm mb-2">
            Human gross efficiency is around 20 to 25%, so total energy burned is roughly 2,880 &divide; 0.22 &asymp;{" "}
            <strong>13,100 kJ</strong>, about <strong>3,100 kcal</strong>
          </p>
          <p className="text-sm mb-2">
            At endurance intensity somewhere around half to sixty percent of that comes from carbohydrate, so call
            it <strong>1,600 to 1,900 kcal</strong>, which is <strong>400 to 475 g of carbohydrate</strong>
          </p>
          <p className="text-sm text-muted-foreground">
            Total glycogen storage in a trained rider, muscle and liver together, is on the order of 400 to 500 g.
          </p>
        </div>
        <p className="mb-4">
          Read those two figures next to each other. A single moderate four-hour day is capable of consuming
          approximately your entire stored carbohydrate. If you do not replace it, and replacing it is harder than
          it sounds after a long day, you begin day two already down. Do that twice and day three starts from a hole
          that no amount of fitness fills.
        </p>
        <p className="mb-4">
          The efficiency figure and the carbohydrate share are standard ranges from exercise physiology rather than
          anything measured on this site, and individual numbers vary a lot. The conclusion survives the
          uncertainty: at any plausible value in those ranges, a long day costs most or all of what you can store.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">2. Sleep debt</h3>
        <p className="mb-4">
          Touring days start early and end late, and the sleep in between is often in an unfamiliar bed. Two short
          nights in a row does more damage to how a hard effort feels than the previous day's riding does.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">3. Soft tissue and contact points</h3>
        <p className="mb-4">
          Saddle discomfort, hand numbness and neck tightness are cumulative in a way that fitness is not. They also
          have almost nothing to do with how strong you are, which is why strong riders are just as likely to be
          undone by them.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">4. Motivation</h3>
        <p className="mb-4">
          The least discussed and, in my experience, the one that decides how the last day actually goes. Day three
          of a tour that has been paced badly is a psychological problem before it is a physical one.
        </p>
      </div>

      {/* Why normal training misses it */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Why normal training does not build this</h2>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/australia_1_2.webp"
            alt="Rolling coastal terrain seen from the roadside"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          A well-constructed training week deliberately separates hard days. That is correct if the goal is to
          maximise the quality of each session, which it usually is. It also means that in a normal block you almost
          never ask your body to do a substantial ride while still carrying yesterday's.
        </p>
        <p className="mb-4">
          So a rider can arrive at a tour with a perfectly respectable FTP, a good{" "}
          <Link to="/blog/power-to-weight-ratio-science" className="text-zwift-orange hover:underline">
            power-to-weight ratio
          </Link>{" "}
          and no experience whatsoever of the specific demand the trip is about to make. The fitness is real. It is
          just aimed somewhere else.
        </p>
        <p className="mb-4">
          The fix is not to train harder. It is to spend part of a block deliberately training tired, which is the
          one thing a structured plan is usually designed to avoid.
        </p>
      </div>

      {/* The block */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The back-to-back block</h2>
        <p className="mb-4">
          The core idea is simple: pair days. Instead of a single long ride at the weekend, ride two moderate days
          in a row and let the second one be the session that matters. The first day is not the training. The first
          day is the thing that makes the second day count.
        </p>
        <p className="mb-4">
          Zwift is genuinely well suited to this, for an unglamorous reason. The second day of a pair is the one you
          most want to skip, and it is much easier to talk yourself into ninety minutes in the garage than into
          getting dressed for the weather.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">A worked eight-week progression</h3>
        <p className="mb-4">
          Weekend pairs only. Whatever you do midweek stays as it was, with the caveat that the day before your
          first paired day should be easy.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 pr-4 font-semibold">Week</th>
                <th className="text-left py-2 pr-4 font-semibold">Day one</th>
                <th className="text-left py-2 pr-4 font-semibold">Day two</th>
                <th className="text-left py-2 font-semibold">Point of it</th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr className="border-b border-border">
                <td className="py-2 pr-4">1</td>
                <td className="py-2 pr-4">90 min endurance</td>
                <td className="py-2 pr-4">75 min endurance</td>
                <td className="py-2">Establish that two days in a row is normal</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">2</td>
                <td className="py-2 pr-4">2 h endurance</td>
                <td className="py-2 pr-4">90 min endurance</td>
                <td className="py-2">Same, longer</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">3</td>
                <td className="py-2 pr-4">2 h 30 endurance</td>
                <td className="py-2 pr-4">2 h endurance</td>
                <td className="py-2">First day that will genuinely feel like something</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">4</td>
                <td className="py-2 pr-4">90 min easy</td>
                <td className="py-2 pr-4">60 min easy</td>
                <td className="py-2">Recovery week. Do not skip it</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">5</td>
                <td className="py-2 pr-4">3 h endurance</td>
                <td className="py-2 pr-4">2 h with 3 &times; 10 min tempo</td>
                <td className="py-2">Introduce quality on the second day</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">6</td>
                <td className="py-2 pr-4">3 h endurance</td>
                <td className="py-2 pr-4">2 h 30 with 4 &times; 10 min tempo</td>
                <td className="py-2">The key session of the block</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">7</td>
                <td className="py-2 pr-4">3 h 30 endurance</td>
                <td className="py-2 pr-4">3 h endurance, fuelled as if touring</td>
                <td className="py-2">Rehearse the eating, not just the riding</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">8</td>
                <td className="py-2 pr-4">2 h easy</td>
                <td className="py-2 pr-4">60 min easy</td>
                <td className="py-2">Taper into the trip</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          Week six is the one that matters. Four ten-minute tempo blocks on the second consecutive day is a
          genuinely hard ask, and how it goes tells you more about your readiness for a tour than any test does.
        </p>
        <p className="mb-4">
          This progression is my own construction from riding and reading rather than a validated protocol. The
          principles underneath it, progressive overload and a recovery week every fourth week, are standard, and
          there is more on how blocks fit together in{" "}
          <Link to="/blog/zwift-training-periodization" className="text-zwift-orange hover:underline">
            the periodisation article
          </Link>
          .
        </p>
      </div>

      {/* Rehearsing fuelling */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Rehearse the eating, because that is what actually fails</h2>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/australia_1_3.webp"
            alt="Rider stopped at a roadside viewpoint"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          Go back to the arithmetic above. If a long day costs 400 g of carbohydrate and you can store roughly that
          much, then multi-day riding is an eating problem with a bicycle attached.
        </p>
        <p className="mb-4">The practical version, in order of how much difference it makes:</p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>Eat on the bike from the first hour</strong>, not from the moment you feel empty. By the time
            you feel it, you are two hours behind.
          </li>
          <li>
            <strong>60 to 90 g of carbohydrate an hour</strong> is the range most riders can absorb on a long day,
            and it takes practice to tolerate the top of it. This is exactly what the second long day of week seven
            is for.
          </li>
          <li>
            <strong>The hour after finishing is the highest-value eating of the trip</strong>, because it decides
            what you start tomorrow with.
          </li>
          <li>
            <strong>Practise with what you will actually eat.</strong> A gel you have never tried, on day two of a
            tour, is an experiment run at the worst possible moment.
          </li>
        </ul>
        <p className="mb-4">
          If the cost of doing this properly is putting you off, the{" "}
          <Link
            to="/blog/the-glucose-alchemist-how-to-fuel-a-world-tour-effort-on-a-ramen-budget"
            className="text-zwift-orange hover:underline"
          >
            article on cheap fuelling
          </Link>{" "}
          works through what is actually inside a gel and how to reproduce it for very little money.
        </p>
      </div>

      {/* Pacing the trip */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Pacing the trip: the day-one rule</h2>
        <p className="mb-4">
          Every account of a multi-day trip going badly that I have read or been told contains the same sentence
          somewhere near the start: the first day felt easy, so we pushed on.
        </p>
        <p className="mb-4">
          The rule I would give, and this is judgement rather than data, is that day one should finish with you
          feeling like you cut it short. If day one leaves you satisfied, day three will not.
        </p>
        <p className="mb-4">
          There is a concrete version of this. Decide the effort you intend to hold on the final day, and ride day
          one at that same effort or below. Not the same speed, since terrain and wind will not cooperate, but the
          same perceived effort. A tour paced to its last day rather than its first is a different holiday.
        </p>
      </div>

      {/* Arriving undertrained */}
      <div>
        <h2 className="text-2xl font-bold mb-4">If you arrive undertrained, which is common</h2>
        <p className="mb-4">
          Trips get booked before blocks get finished. Illness, work and weather all interfere. Arriving with four
          weeks of the eight done is a normal situation and it is entirely salvageable, provided you change the
          plan rather than the effort.
        </p>
        <p className="mb-4">The adjustments, in order of how much they buy you:</p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>Cut the daily distance before you cut anything else.</strong> Three comfortable days beat two
            good ones and a disaster. This is worth negotiating with the group before you start, not at lunchtime
            on day two.
          </li>
          <li>
            <strong>Drop your target effort by a full zone.</strong> If you planned to ride at the top of
            endurance, ride at the bottom of it. Undertrained riders need more margin, not less.
          </li>
          <li>
            <strong>Eat more, earlier, than you planned to.</strong> A lower fitness level means a higher
            proportion of carbohydrate burned at any given speed, so the fuelling problem is worse rather than
            better.
          </li>
          <li>
            <strong>Take the first climb of each day deliberately slowly.</strong> This is where undertrained
            riders lose their day, usually in the first hour, usually because the legs feel fine at that point.
          </li>
          <li>
            <strong>Plan an escape on every day.</strong> A shorter route, a train, a lift. Knowing one exists
            changes how the day feels even if you never use it.
          </li>
        </ul>
        <p className="mb-4">
          The thing not to do is treat the trip as the missing training. A tour ridden at the effort you wish you
          were fit for produces one good day and two bad ones, and that arithmetic never improves.
        </p>
      </div>

      {/* Limits */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Where indoor preparation runs out</h2>
        <p className="mb-4">Honest list, because the gap matters more on a tour than on a single ride.</p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>Descending.</strong> Coastal roads mean long descents with crosswinds. Zwift has no steering and
            no consequences.
          </li>
          <li>
            <strong>Position variety.</strong> Outdoors you move constantly. Indoors you do not, which is the whole
            subject of the{" "}
            <Link to="/blog/zwift-biomechanics" className="text-zwift-orange hover:underline">
              article on what a fixed bike does to your body
            </Link>
            . Contact-point problems can be worse for an indoor-trained rider, not better.
          </li>
          <li>
            <strong>Loaded riding.</strong> If you are carrying luggage, train with it at least twice. The handling
            is different and so is the climbing.
          </li>
          <li>
            <strong>Weather.</strong> Being cold and wet for six hours is a skill and a kit problem, and you cannot
            rehearse either one in a garage.
          </li>
        </ul>
      </div>

      {/* The route itself */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The example itself</h2>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/australia_1_4.webp"
            alt="Coastal cycling route beside the ocean"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          The Great Ocean Road runs along the Victorian coast in south-eastern Australia, and the section riders
          most often tour is the stretch between Anglesea and Apollo Bay, broken into three to five days. The
          terrain is described consistently as rolling rather than mountainous, with the inland Otways detour adding
          the only sustained climbing. Wind off the ocean is the variable everyone mentions.
        </p>
        <p className="mb-4">
          That is the extent of what I can tell you with a straight face. I have not ridden it, and route-specific
          advice from someone who has not been there is exactly the sort of thing this site's{" "}
          <Link to="/editorial-policy" className="text-zwift-orange hover:underline">
            editorial policy
          </Link>{" "}
          exists to prevent. For the trip itself, find someone who has ridden it.
        </p>
        <div className="my-8">
          <p className="text-xl font-semibold mb-4 text-foreground">Riders who have actually done it</p>
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/E6WIHUxxlLc"
              title="Cycling the Great Ocean Road"
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
          <li>
            A four-hour day at 200 W costs roughly 400 to 475 g of carbohydrate. You can store 400 to 500 g. That
            single comparison explains most of what goes wrong on day three.
          </li>
          <li>
            Normal training separates hard days on purpose, so it never builds the ability to ride well on tired
            legs.
          </li>
          <li>
            Train in pairs. The second day is the session; the first day exists to make it count. Eight weeks of
            weekend pairs is enough.
          </li>
          <li>Rehearse eating 60 to 90 g of carbohydrate an hour before the trip, not during it.</li>
          <li>Ride day one at the effort you want to be holding on the last day.</li>
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
          description: "Set the endurance and tempo zones this block is written in",
        },
        {
          name: "Climb Time Calculator",
          path: "/zwift-climb-time-calculator",
          description: "Estimate how long a sustained climb will take at your numbers",
        },
      ]}
    />
  );
};

export default GreatOceanRoad;
