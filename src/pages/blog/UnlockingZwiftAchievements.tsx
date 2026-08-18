import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const UnlockingZwiftAchievements = () => {
  const content = (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="mb-4">
          One of the fun aspects of Zwift (aside from the actual riding) is the built-in achievement system. Zwift rewards milestones - riding a certain distance, completing a route, or climbing the height of Everest - and most of those rewards come with bonus XP or unlock gear. This article covers <strong>Zwift achievements and badges</strong>: how the XP system underneath them actually works, which unlocks are worth chasing and which are purely cosmetic, and what it really takes to earn the <strong>"Tron bike"</strong>, the glowing neon frame officially called the Zwift Concept Z1.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Achievement Badges Basics</h2>
        <p className="mb-4">
          Zwift's badges live in-game under Menu &gt; Badges, and they fall into a few categories. <strong>General Achievements</strong> are cumulative or one-time feats: distance in a single ride (10 km, 100 km, 500 km), the "Metric Century" (100 km) and "Imperial Century" (100 miles), streaks such as "Ride 7 days in a row" (Addicted), or power feats such as hitting 800 watts. Each badge pays an <strong>XP bonus</strong>, typically from 50 XP for the easy ones up to 1000 XP for the hard ones{" "}
          <a href="https://zwiftinsider.com/badges" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[1]</em>
          </a>
          , which is why some riders chase badges purely to farm XP. <strong>Route Badges</strong> cover the dozens of official routes across Zwift's worlds. Complete an <em>official</em> route start to finish and the badge is awarded automatically the first time. Routes range from short loops like Watopia's "Hilly Loop" to the 173 km "PRL Full" in London, and the XP scales roughly with length and difficulty: an easy route might pay 100 XP where the biggest ones pay 1000, which at low levels is close to a whole level in one ride. A popular long-term project is "get all the route badges"{" "}
          <a href="https://zwiftinsider.com/category/reference/achievements-unlocks" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[2]</em>
          </a>
          {" "}
          <a href="https://zwiftinsider.com/category/reference/achievements-unlocks" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[3]</em>
          </a>
          . This not only nets you tons of XP but also ensures you've explored all Zwift has to offer. Zwift Insider has a <strong>Master List of Badges</strong> to track them{" "}
          <a href="https://zwiftinsider.com/category/reference/achievements-unlocks" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[4]</em>
          </a>
          .
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">How the XP System Actually Works</h2>
        <p className="mb-4">
          Three separate things feed the same XP pool, and they pay at very different rates. Knowing which is which is the difference between "I ride a lot and level slowly" and "I ride the same hours and level fast".
        </p>
        <h3 className="text-xl font-bold mb-3">Distance XP</h3>
        <p className="mb-4">
          Free riding pays per kilometre covered, not per minute and not per watt. The rate riders have measured for years is about 20 XP per kilometre. Distance XP is therefore completely indifferent to effort: a 30 km recovery spin and a 30 km threshold effort both pay 600 XP. What changes the rate is speed. A rider averaging 35 km/h banks roughly 700 XP an hour; a rider averaging 25 km/h banks roughly 500. That is why sitting in the draft of a fast group ride is one of the cheapest ways to level up - the draft buys you speed you did not pay for in watts.
        </p>
        <h3 className="text-xl font-bold mb-3">Workout XP</h3>
        <p className="mb-4">
          Structured workouts pay on a per-minute basis instead, which is why a slow sweet spot block on a flat road still moves the bar even though you cover very little ground. Zwift has changed the exact per-minute figure more than once, so rather than quote a number that may already be stale, measure your own: note the XP shown against your next level before and after a session, then divide by the minutes you rode. Do that once for a workout hour and once for a free ride hour and you will know which one pays you better at your speed. Whenever I have measured it, the workout hour has come out ahead of a solo free ride and behind a fast group ride, which is a convenient coincidence, since workouts are also the sessions that build fitness.
        </p>
        <h3 className="text-xl font-bold mb-3">Badge XP</h3>
        <p className="mb-4">
          Badges pay lump sums, once each, ranging from small amounts for the easy achievements up to around 1,000 XP for the hardest routes. Here is the arithmetic that makes route badges the dominant lever of the three. Ride an 80 km route you have already completed and you earn roughly 1,600 XP from distance alone. Ride an 80 km route you have <em>not</em> completed and, if its badge is worth 1,000 XP, the same effort pays you 2,600. That is a 60 percent bonus for a decision you make in the route picker before you clip in, at zero training cost. On shorter routes the ratio is even more lopsided, because the fixed badge payment is being compared against a much smaller pile of distance XP. If you want the pure XP-farming angle, I go deeper on it in{" "}
          <Link to="/blog/level-up-fast-in-zwift" className="text-zwift-orange hover:underline">Level Up Fast in Zwift</Link>.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Route Badges: Why Only the First Completion Pays</h2>
        <p className="mb-4">
          Badge XP is awarded once, on first completion. Every lap after that pays plain distance XP and nothing else. So the useful question is never "which route is the best route" - it is "which unridden route best fits the session my training plan already calls for". Three rules I stick to:
        </p>
        <p className="mb-4">
          <strong>1. Match duration first, XP second.</strong> Never stretch a 60 minute endurance ride into 100 minutes to grab a badge. Find an unridden route that fits inside the 60 instead. There are enough of them that this is nearly always possible.
        </p>
        <p className="mb-4">
          <strong>2. Count the lead-in.</strong> The distance shown next to a route excludes the lead-in from the start pens, which you still have to ride on the first lap. A route listed at 24 km can be 28 km of actual pedalling. Check the lead-in figure before assuming a route fits your hour, and cross the finish banner - stopping 300 m short earns nothing.
        </p>
        <p className="mb-4">
          <strong>3. Use events to beat the world rotation.</strong> Watopia is always available; the guest worlds rotate on Zwift's calendar. If the route you want sits in a world that is not open today, join any event that uses it - events open their world regardless of the schedule. That habit turns "I will wait until London comes around" into "I will ride it on Tuesday".
        </p>
        <p className="mb-4">
          Sequence a badge project by world rather than by XP: clearing one world at a time keeps the list short enough to remember. The{" "}
          <Link to="/zwift-climbs" className="text-zwift-orange hover:underline">Zwift climbs reference</Link>{" "}
          is a good filter for which of those routes also pay in vertical metres, which matters enormously for the section below.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Leveling Up and Unlocks</h2>
        <p className="mb-4">
          As you accumulate XP from riding and achievements, you'll <strong>level up</strong> in Zwift. Levels currently go up to 60 (and even beyond to 100, though after 60 the new levels are mostly just extra challenges){" "}
          <a href="https://zwiftinsider.com/points-levels-unlocks" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[5]</em>
          </a>
          . Higher levels unlock bikes, wheels, kits and historically even map access (the Jungle circuit once needed level 10, Alpe du Zwift level 12, though those restrictions have eased). Many frames and wheelsets in the Drop Shop stay level-locked until you reach the required level{" "}
          <a href="https://zwiftinsider.com/points-levels-unlocks" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[6]</em>
          </a>
          , so levelling widens your gear options as well as your Zwift street cred. Worth knowing: after level 25 Zwift introduced <strong>Accelerated leveling</strong> to help newer riders catch up, earning double XP for a period{" "}
          <a href="https://zwiftinsider.com/category/reference/achievements-unlocks" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[7]</em>
          </a>
          {" "}
          <a href="https://zwiftinsider.com/category/reference/achievements-unlocks" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[8]</em>
          </a>
          . So it's easier now to progress than it was in early days.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Which Unlocks Actually Make You Faster</h2>
        <p className="mb-4">
          Worth being blunt, because the marketing around unlocks is not: the overwhelming majority of them are cosmetic. Here is how I sort the categories.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Unlock</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">What it actually changes</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Worth chasing?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Route badges</td>
                <td className="py-2 pr-4">XP and a record of where you have ridden. No effect on speed.</td>
                <td className="py-2 pr-4">Yes, because they cost you nothing extra</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Level-gated frames and wheels</td>
                <td className="py-2 pr-4">Small differences in modelled weight and aerodynamics</td>
                <td className="py-2 pr-4">Only until you own one good climbing setup and one good flat setup</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Tron bike (Concept Z1)</td>
                <td className="py-2 pr-4">A strong all-round frame with wheels that cannot be swapped</td>
                <td className="py-2 pr-4">Mild performance gain, large status gain</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Challenge bikes (such as the Emonda from Everest)</td>
                <td className="py-2 pr-4">A usable frame you would otherwise buy with Drops</td>
                <td className="py-2 pr-4">Nice, not decisive</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Kits, jerseys, socks, hats, ride-on bells</td>
                <td className="py-2 pr-4">Nothing whatsoever</td>
                <td className="py-2 pr-4">Cosmetic only</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 mt-4">
          The equipment differences that do exist are real but small, and the fastest way to see how small is to compare them against fitness. Using this site's Alpe du Zwift fit, time_seconds = 148.60*(W/kg)^2 - 1954.08*(W/kg) + 8329.87, a rider at 3.0 W/kg climbs in about 63.4 minutes and a rider at 3.2 W/kg in about 60.0 minutes. Two tenths of a watt per kilogram is worth roughly three and a half minutes on that climb. No frame in the Drop Shop moves the needle anywhere near that far. Run your own numbers on the{" "}
          <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">Alpe du Zwift calculator</Link>{" "}
          and the point makes itself. Chase unlocks because they are fun and because they get you to ride more; do not chase them expecting a performance shortcut.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The Big One - Climb Mt. Everest Challenge (Tron Bike)</h2>
        <p className="mb-4">
          Now, let's talk about arguably the most famous accomplishment in Zwift: unlocking the <strong>Tron bike</strong> (Concept Z1). You may have seen riders on Zwift with a bike that has glowing neon wheels (and frame trim) in various colours. That's the Tron bike, and it's special not only because it looks cool, but also because it's one of the faster all-around bikes in game. To get it you must complete the <strong>"Climb Mt. Everest"</strong> challenge in Zwift, and then some:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Go to Menu &gt; Challenges and select <strong>"Climb Mt. Everest"</strong> as your active challenge, if you have not already.</li>
          <li>The challenge itself asks for <strong>8,848 metres of climbing</strong>, the height of Mt. Everest, over however many rides it takes. Finish it and you get the Everest badge and a lightweight Trek Emonda.</li>
          <li>
            The <strong>Tron bike requires continuing that same challenge to 50,000 metres</strong> of total climbing{" "}
            <a href="https://zwiftinsider.com/unlock-the-tron-bike-in-zwift" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
              <em>[9]</em>
            </a>
            {" "}
            <a href="https://zwiftinsider.com/unlock-the-tron-bike-in-zwift" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
              <em>[10]</em>
            </a>
            , which is Everest almost six times over.
          </li>
        </ul>
        <p className="mb-4">
          <strong>Climb 50,000 m while the Everest challenge is selected and the Tron bike is yours.</strong> It does not have to be one ride (thank goodness), so it takes weeks or months depending on how much climbing you do. Some people grind it out deliberately with Alpe du Zwift repeats (Alpe is ~1,036 m per ascent, so 49 of them would do it). Others just let it accumulate over regular rides.
        </p>
        <p className="mb-4">
          Once you reach the total you get a notification, and the Concept Z1 appears in the garage{" "}
          <a href="https://zwiftinsider.com/unlock-the-tron-bike-in-zwift" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[10]</em>
          </a>
          . You can customise the neon glow with the frame colour slider.
        </p>
        <p className="mb-4">
          A <strong>common pitfall</strong>: some riders climb a ton but forget to select the Everest challenge, so their metres never count towards Tron. Select it, and keep it selected until you are done. If you fill the 8,848 m bar and Zwift prompts you to pick a new challenge, don't - a challenge left selected keeps counting past 100% to 50,000 m even though the interface does not make that obvious{" "}
          <a href="https://forums.zwift.com/t/completed-everest-challenge-no-tron-bike-awarded/52470" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[11]</em>
          </a>
          .
        </p>
        <p className="mb-4">
          The grind is real, but the climbing itself is good training, and mixing the climbs up (Watopia's Epic KOM and Alpe, Ven-Top in France, the New York KOMs) keeps it from becoming a chore.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">How Long the Tron Grind Actually Takes</h2>
        <p className="mb-4">
          Fifty thousand metres means nothing until you divide it by your own rate, and that is the whole calculation: weeks = 50,000 / (metres you climb per week). Below is that division for a range of weekly rates. It is arithmetic, not a prediction - it assumes the Everest challenge stays selected throughout and that your weekly climbing is steady, which mine certainly is not.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Metres climbed per week</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Weeks to 50,000 m</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Roughly</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">500 m</td>
                <td className="py-2 pr-4">100</td>
                <td className="py-2 pr-4">About two years</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">1,000 m</td>
                <td className="py-2 pr-4">50</td>
                <td className="py-2 pr-4">About a year</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">1,500 m</td>
                <td className="py-2 pr-4">33</td>
                <td className="py-2 pr-4">About eight months</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">2,000 m</td>
                <td className="py-2 pr-4">25</td>
                <td className="py-2 pr-4">About six months</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">3,000 m</td>
                <td className="py-2 pr-4">17</td>
                <td className="py-2 pr-4">About four months</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">5,000 m</td>
                <td className="py-2 pr-4">10</td>
                <td className="py-2 pr-4">About ten weeks</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 mt-4">
          The other half of the sum is what a climbing hour is worth, and that varies more than people expect. Alpe du Zwift is 1,036 m of gain over 12.2 km at roughly 8.5 percent. Using this site's fit for the climb, a rider at 3.2 W/kg reaches the top in almost exactly 60 minutes, one at 4.5 W/kg in about 42, and one at 2.0 W/kg in about 84. An hour of climbing therefore banks somewhere between roughly 740 and 1,470 metres depending on fitness. Ride back down rather than ending at the top and the descent costs 10 to 15 minutes at near-zero gain, dragging the realistic rate to about 800 m per hour. An hour on a flat Watopia lap might bank 100 to 200 m.
        </p>
        <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
          <p>
            Route choice changes your Tron timeline by roughly a factor of five. Fitness changes it by roughly a factor of two. That is why I call the Tron bike a test of accumulated climbing rather than a test of fitness: a 2.0 W/kg rider earns exactly the same 1,036 m per ascent as a 4.5 W/kg rider, just over more clock time. Nobody is locked out of it. It only ever costs hours.
          </p>
        </div>
        <p className="mb-4 mt-4">
          To plan a grind properly, check your own times with the{" "}
          <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">Alpe du Zwift calculator</Link>{" "}
          and the{" "}
          <Link to="/ventop-calculator" className="text-zwift-orange hover:underline">Ven-Top calculator</Link>{" "}
          - Ven-Top is roughly 20.9 km and about 1,534 m of gain, so a single ascent is worth close to one and a half Alpes in the counter. For anything else, the{" "}
          <Link to="/zwift-climb-time-calculator" className="text-zwift-orange hover:underline">general climb time calculator</Link>{" "}
          will estimate it from distance and gradient. Pacing advice for both of the big ones lives in{" "}
          <Link to="/blog/conquer-alpe-du-zwift" className="text-zwift-orange hover:underline">Conquer the Alpe du Zwift</Link>{" "}
          and{" "}
          <Link to="/blog/mastering-ven-top" className="text-zwift-orange hover:underline">Mastering Ven-Top</Link>.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Challenges, Missions and How They Collide With Badge Hunting</h2>
        <p className="mb-4">
          Zwift's progression is really three separate structures that riders constantly conflate, and the differences have practical consequences.
        </p>
        <p className="mb-4">
          <strong>Badges</strong> accrue automatically and permanently. Nothing needs selecting, nothing can be lost, and you cannot accidentally ride without earning them.
        </p>
        <p className="mb-4">
          <strong>Challenges</strong> are the long-running counters, and only one is active at a time. This is the detail that catches people out. Metres and kilometres accrue only to the challenge you currently have selected, so a month of hard climbing while a distance challenge is active contributes exactly nothing towards Everest.
        </p>
        <p className="mb-4">
          <strong>Missions and event series</strong> are time-limited and run on Zwift's calendar, usually asking for a set number of stages inside a window in exchange for a kit or a frame. Because they expire, they take priority over the permanent goals whenever they overlap with riding you were going to do anyway - and because their timing is dictated by a calendar rather than by your training block, they are also the easiest category to ignore.
        </p>
        <p className="mb-4">
          The collision worth planning around is between route badges and the Everest challenge. Route badges are spread across every world and most of them are flat or rolling, so a month spent ticking off short Watopia loops can bank almost no vertical at all. The fix is to keep two shortlists instead of one: unridden climbing routes and unridden flat routes. Spend every long ride on the climbing list while Everest is selected, and save the flat list for recovery days. A mountain route pays a badge <em>and</em> a thousand-plus metres in one session; a flat route pays a badge and little else. Identical hours, roughly double the return.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Other Notable Achievements</h2>
        <p className="mb-4">
          <strong>Route Mastery</strong> - Getting all route badges in a world is a great project. Some are easy, some are endurance tests (the PRL Full route in London is 173 km with 2,300 m of climbing). <strong>Century and Beyond</strong> - If you've never done 100 km or 100 miles, Zwift is a convenient place to try, and you get a badge and a lot of XP at the end. There's also a 24-hour badge ("Masochist") for a single session that long. <strong>"Going the Distance" badges</strong> - Cumulative total distance across all your rides, unlocking at large totals. These arrive on their own. <strong>Sprint and KOM jerseys</strong> - Not badges, but if you set the fastest time through a sprint or KOM segment while free riding you wear the leader's jersey until someone beats it.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">If You Only Have Five Hours a Week</h2>
        <p className="mb-4">
          Most people are not choosing between training and unlocks. They have about five hours, they want to get faster, and they would also quite like the glowing bike. Those goals only conflict if you let them, and one rule keeps them apart: <strong>badges never change the intensity or the duration of a session, only its location.</strong> Route choice is a free variable. Duration and intensity are not.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Session</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Training purpose</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Unlock role</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Tuesday, 60 min</td>
                <td className="py-2 pr-4">VO2 or threshold intervals in a structured workout</td>
                <td className="py-2 pr-4">None. Do not let a route dictate this one.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Thursday, 60 min</td>
                <td className="py-2 pr-4">Sweet spot or tempo workout</td>
                <td className="py-2 pr-4">Run it in ERG pointed up a climb. Power stays prescribed; the metres still count.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Saturday, 120 min</td>
                <td className="py-2 pr-4">Endurance</td>
                <td className="py-2 pr-4">The badge ride. An unridden mountain route.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Sunday, 60 min</td>
                <td className="py-2 pr-4">Easy spin</td>
                <td className="py-2 pr-4">An unridden short flat route from the second shortlist.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 mt-4">
          The Thursday trick is the one people underuse. In ERG mode the trainer holds the prescribed power regardless of gradient, so you can run a sweet spot session pointed straight up Alpe du Zwift and the vertical metres accrue exactly as on a free ride. A 75 kg rider holding 200 W is at 2.67 W/kg, which the Alpe fit puts at roughly 70 minutes for the full climb, so a 60 minute workout gets you about 890 m up it without altering a single interval. You will not reach the top. The counter does not care.
        </p>
        <p className="mb-4">
          Add it up: roughly 890 m on Thursday, 1,200 to 1,600 m on a Saturday mountain route, plus incidental climbing elsewhere puts you around 2,000 to 2,500 m a week. Run that through the weeks-to-50,000 table earlier and it comes out at five to six months to the Tron bike, without adding one hour to your week. You will also collect about two route badges a week, which is most of a world's route list in a season. If you want to build the underlying week properly rather than borrowing mine, start with{" "}
          <Link to="/blog/zwift-training-periodization" className="text-zwift-orange hover:underline">Zwift training periodization</Link>{" "}
          and browse the rest of{" "}
          <Link to="/blog/category/training" className="text-zwift-orange hover:underline">the training articles</Link>.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">How to Make the Most of Achievements</h2>
        <p className="mb-4">
          If you want to gamify your training, pick targets that a session you were already going to ride can satisfy. A winter spent filling the Everest counter fits any week that already contains climbing. A long Saturday you had on the calendar anyway can knock out one of the big route badges such as Four Horsemen or Uber Pretzel. Targets of that shape give you a reason to finish rides you might otherwise cut short, and that is where the carryover to real-world fitness comes from.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Why Badges Work So Well on Cyclists, and Where the Trap Is</h2>
        <p className="mb-4">
          Achievement systems work on most people, but they seem to work unusually well on cyclists. Three reasons look real to me, and none of them are flattering.
        </p>
        <p className="mb-4">
          <strong>We already keep score.</strong> FTP, weekly hours, training load, segment times. The badge system never has to teach the habit of watching a number go up, because that habit is running before you install the game. It just adds one more counter to a dashboard full of them.
        </p>
        <p className="mb-4">
          <strong>Badges never go down.</strong> This is the big one. FTP falls when you get ill, weight moves for reasons you cannot always explain, and your best times get beaten by people who were slower than you last year. A badge count only ever increases. In a sport where nearly every meaningful number is noisy and reversible, a permanently rising one is an unusually clean reward, and that is why finishing a route badge can feel better than an interval session that was worth far more to your fitness.
        </p>
        <p className="mb-4">
          <strong>Incomplete sets pull.</strong> Nine of the eleven routes in a world is not a state most brains sit comfortably with. Those last two get ridden regardless of whether they are the right sessions on the right days.
        </p>
        <p className="mb-4">
          Which brings us to the trap. Unlock hunting quietly selects for one type of ride: long, continuous, moderate and unstructured. Occasionally that is good endurance work. As your entire week it is the classic mistake - everything at one pace, hard enough to accumulate fatigue and easy enough to drive very little adaptation. The Everest grind is a sharper version of the same problem: a rider mid-build-block who bolts on a two hour Alpe session because the counter reads 47,000 m is trading recovery for a bike frame.
        </p>
        <p className="mb-4">
          The test I use is one question. <em>If the reward vanished tonight, would I still ride this session tomorrow?</em> If the answer is no and it is not a deliberate easy day, the badge is writing the plan instead of me. Exploit route choice all you like, because it is free. The moment a badge sets your duration or your intensity, you have swapped a training plan for a collection habit without noticing. For the longer version of why the game layer gets under your skin like this, see{" "}
          <Link to="/blog/ghost-in-the-machine-why-your-brain-allows-you-to-suffer-more-in-watopia" className="text-zwift-orange hover:underline">The Ghost in the Machine</Link>.
        </p>
        <p className="mb-4">
          For what it is worth, I own the Tron bike. The honest summary of how I got it is that it accumulated over years of riding hills because I like riding hills, not because I followed a plan like the one above. That is a slower route to the bike than the table suggests, and a considerably better route to fitness. More about me and how I write this site is on the{" "}
          <Link to="/author" className="text-zwift-orange hover:underline">author page</Link>.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="mb-4">
          Zwift's achievement system adds a layer of depth to indoor training, and the extra XP and unlocks give tangible rewards for your efforts{" "}
          <a href="https://zwiftinsider.com/badges" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[1]</em>
          </a>
          . If you thrive on goals, make a checklist of badges and start ticking them off - but keep the order of operations right. Pick the session your training needs, then pick the unridden route that fits it, then let the badges and the metres accumulate as a by-product. Done that way the whole system costs you nothing and gives you a reason to explore worlds you would otherwise never load. And when you finally throw a leg over that glowing Tron bike, take it for a lap of Watopia at night.
        </p>
      </div>

      <div className="border-t pt-6 mt-8">
        <h3 className="text-xl font-bold mb-4">Sources</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          <li>
            <a href="https://zwiftinsider.com/badges" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
              [1] Zwift Insider - Achievement Badges Guide
            </a>
          </li>
          <li>
            <a href="https://zwiftinsider.com/category/reference/achievements-unlocks" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
              [2-4, 7-8] Zwift Insider - Achievements & Unlocks Reference
            </a>
          </li>
          <li>
            <a href="https://zwiftinsider.com/points-levels-unlocks" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
              [5-6] Zwift Insider - XP, Levels, and Unlocks
            </a>
          </li>
          <li>
            <a href="https://zwiftinsider.com/unlock-the-tron-bike-in-zwift" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
              [9-10] Zwift Insider - How to Unlock the Tron Bike
            </a>
          </li>
          <li>
            <a href="https://forums.zwift.com/t/completed-everest-challenge-no-tron-bike-awarded/52470" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
              [11] Zwift Forums - Everest Challenge Discussion
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <BlogPost
      content={content}
    />
  );
};

export default UnlockingZwiftAchievements;

