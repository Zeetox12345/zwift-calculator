import { Link } from "react-router-dom";

import BlogPost from "@/components/BlogPost";

const LevelUpFastInZwift = () => {
  const content = (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="mb-4">
          If you've spent any time in Zwift, you've likely noticed you have a <strong>level</strong> and gain experience points (XP) as you ride. Leveling up in Zwift is more than just a number - it unlocks new bikes, wheels, kits, and even access to certain routes. Higher level riders have bragging rights and often better virtual equipment, which can give a performance edge. So, how do you level up fast? This article breaks down how XP works in Zwift and shares tips to maximize your experience gains (legitimately!) so you can unlock gear quicker and reach those higher levels. Whether you've got your eyes on that sleek aero frame at level 25 or just want to hit level 60 for completion's sake, we've got you covered.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">How XP Works</h2>
        <p className="mb-4">
          Zwift awards XP for the distance you ride or the workouts you complete. The standard is <strong>20 XP per kilometer or 30 XP per mile</strong> when free-riding{" "}
          <a href="https://zwiftinsider.com/points-levels-unlocks" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[1]</em>
          </a>
          . (They tuned it so metric vs imperial both yield roughly the same XP for the same distance - earlier days had a slight metric advantage, but it's now even). So basically, every 50m or so you're ticking an XP point. If you do a structured workout in ERG mode, Zwift gives XP differently: you get XP per segment completed, roughly equivalent to distance but with a bonus for hitting targets accurately. Workouts give something like 1 XP per kilojoule of work, plus star bonuses. But for simplicity: more distance = more XP. One caveat: if you ever "cheat" by coasting downhill without pedaling, known as the "super tuck", you won't earn XP for that distance because you're not putting out watts.
        </p>
        <p className="mb-4">
          Levels range now from 1 up to <strong>60 (with levels 61-100 existing but currently not unlocking new gear, they're more a long-term goal)</strong>{" "}
          <a href="https://zwiftinsider.com/points-levels-unlocks" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[2]</em>
          </a>
          . Each level requires a certain cumulative XP total. Early levels are quick, but it progressively takes more XP for higher ones. For example, to go from level 24 to 25 is 50,000 XP total, etc. Post-level 25 historically got slower but Zwift has introduced <strong>accelerated leveling</strong>: from level 25 to 50, XP needed per level was reduced and a boost was given to help people catch up{" "}
          <a href="https://zwiftinsider.com/category/reference/achievements-unlocks" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[3]</em>
          </a>
          . They want new users not to feel it's impossible to reach where long-timers are.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Level Unlocks</h2>
        <p className="mb-4">
          Levelling unlocks two different kinds of thing, and only one of them matters for how fast you go.
        </p>
        <p className="mb-4">
          The first kind is cosmetic: kits, socks, accessories and the various novelty outfits that appear at higher
          levels. These change nothing. The second kind is equipment, meaning frames and wheelsets that become
          available in the Drop Shop as you level, and these do change your in-game speed, because Zwift assigns
          every frame and wheelset its own weight and drag values.
        </p>
        <p className="mb-4">
          The practical effect is front-loaded. The gap between the starter bike and a decent mid-level frame with
          good wheels is real and worth having. The gap between that and the best equipment in the game is small
          enough that it will be outweighed by a few weeks of training. There is a full account of how much
          equipment is actually worth in{" "}
          <Link to="/blog/zwift-equipment-optimization-aerodynamics" className="text-zwift-orange hover:underline">
            the equipment article
          </Link>
          .
        </p>
        <p className="mb-4">
          Which unlock arrives at which level changes with game updates often enough that listing them here would be
          wrong within a season, and route level requirements in particular have been reworked more than once.
          ZwiftInsider maintains{" "}
          <a
            href="https://zwiftinsider.com/points-levels-unlocks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zwift-orange hover:underline"
          >
            a current list of unlocks by level
          </a>
          , which is the right place to check rather than any article with a publication date on it.
        </p>
        <p className="mb-4">
          One thing worth knowing is that the Tron bike is not a level unlock at all. It comes from the Climb Mt
          Everest challenge, which is a separate 50,000 m of climbing, and it is covered properly in{" "}
          <Link to="/blog/unlocking-zwift-achievements" className="text-zwift-orange hover:underline">
            the achievements article
          </Link>
          .
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Tips to Earn XP Faster</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Go Metric</h3>
            <p className="mb-4">
              Since Zwift gives 20 XP per km and 30 XP per mile, you get XP at nearly the same rate (because 1 mile ~1.6 km, which would be 32 XP if it strictly scaled, but they give 30 - so metric yields a tiny bit more XP per distance). It's a small difference, but if you're doing long rides, using <strong>metric units</strong> might net a bit more XP over time (like ~7% more){" "}
              <a href="https://zwiftinsider.com/points-levels-unlocks" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
                <em>[1]</em>
              </a>
              . For example, every 10 km = 200 XP, whereas every 10 miles (16 km) = 300 XP - if it were perfectly equal it'd be 320 XP for 16 km, so imperial riders lose out on ~20 XP per 10 miles. Not massive, but over 100s of miles adds up. Many Zwifters switch to metric for this reason (and then brag "I went metric for the XP!").
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. Do New Routes (Route Badges)</h3>
            <p className="mb-4">
              As discussed in the achievements article, completing a route the first time gives a one-time <strong>XP bonus</strong> - often pretty large{" "}
              <a href="https://zwiftinsider.com/badges" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
                <em>[6]</em>
              </a>
              . For instance, tick off the <strong>"Four Horsemen" route and you get 340 XP</strong> bonus (just an example). The <strong>Uber Pretzel</strong> route might give 1000 XP on completion. These are one-time, but if you systematically go through all the route badges, you'll rack up thousands of extra XP along the way. Zwift Insider compiled that doing all route badges from scratch can boost you many levels{" "}
              <a href="https://zwiftinsider.com/category/reference/achievements-unlocks" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
                <em>[7]</em>
              </a>
              {" "}
              <a href="https://zwiftinsider.com/category/reference/achievements-unlocks" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
                <em>[8]</em>
              </a>
              . So whenever a new world comes or if you haven't done certain routes - go get those badges! Focus on shorter ones first for quick wins, and plan longer ones as big days.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">3. Use Workout Mode Wisely</h3>
            <p className="mb-4">
              If you prefer training workouts, note that <strong>workout XP</strong> is typically <strong>every block you complete you get XP</strong>, even if you're not covering much distance. This means workouts on flat roads or even in <strong>"Workout Simulation Mode"</strong> (the blank world) still yield XP. Zwift gives something like <strong>10 XP per minute for intervals</strong>, or based on kJ, and if you hit perfect stars you get extra. So an hour workout can net 600-800 XP perhaps, which is similar to riding 30 km. But - here's a trick: Some short, easy workouts can be abused for XP. One known hack is doing the <strong>"Jon's Short Mix"</strong> workout repeatedly. It's ~10 minutes and gives 100 XP or so each time. People used to rubber-band (with Zwift Power-ups maybe or sim mode) to do it quick multiple times. However, focusing on actual training or riding tends to be more fun than grinding XP this way.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">4. Group Events (especially long ones)</h3>
            <p className="mb-4">
              Riding with a group often helps you go longer (social or competitive push). There are events like <strong>"Uber Pretzel" group rides</strong> which cover huge distance - join those to finish these mega routes <em>and</em> earn the route badge XP. Also, group draft might help you maintain higher speed/distance over time, thus more XP/hour.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">5. Don't Coast if You Care About XP</h3>
            <p className="mb-4">
              As mentioned, if you supertuck downhill, no watts = no XP (though you still cover distance faster). It's a trade-off. If purely XP farming, keep pedaling lightly even downhill (just enough wattage like 10-20W to keep game thinking you're working) to keep earning XP as you descend. Similarly, if you just stop, obviously no XP while stopped.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">6. Longer Rides</h3>
            <p className="mb-4">
              It's straightforward - if you want to accumulate XP quickly, longer rides (more distance) get you there. If you have time, try doing some endurance rides of 2+ hours on flat courses where you can maintain good speed. Tempus Fugit (a pancake flat route in Watopia) is perfect for banging out kilometers quickly. In 2 hours at 30 kph, you do 60 km = 1200 XP, plus maybe route badge the first time, etc. If you can hold higher speed or ride longer, the XP flows in.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">7. Leverage XP PowerUps</h3>
            <p className="mb-4">
              As noted earlier, when you pass under arches, sometimes you get a <strong>"Large Bonus" +250 XP powerup</strong>{" "}
              <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
                <em>[9]</em>
              </a>
              {" "}or the +10 XP small one. While you can't force these, if you happen to have one in an event or free ride, it's like free distance. Some folks in freeride purposely hit sprint/KOM arches repeatedly hoping for XP powerups (e.g., doing laps in Tempus Fugit with its sprint banner). If you only care about XP and not winning sprints, that's something you might consider - but again, random.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Understanding Level Scaling</h2>
        <p className="mb-4">
          The first few levels fly by (level 1 to 10 is fairly quick). It gets slower after, but Zwift gave everyone a break by accelerating mid-level progression. They also introduced <strong>drop multipliers</strong> for longer rides, but that's for in-game currency (Drops) - separate from XP. (Quick note: <em>Drops</em> are like coins you earn based on distance and altitude, used to buy gear. They accumulate faster when you ride harder or climb more.)
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Where optimising stops being worth it</h2>
        <p className="mb-4">
          Everything above is real, and the total effect is smaller than the effort of thinking about it. Switching
          to metric is free and you should do it. Picking up route badges you have not ridden is free and you should
          do that too. Beyond those two, the returns fall away quickly.
        </p>
        <p className="mb-4">
          The failure mode is specific: you start choosing rides by XP rate rather than by what your training
          actually needs. Because XP rewards distance, that biases you towards long moderate rides and away from
          both hard sessions and genuinely easy ones. Do that for a few months and you have a rider who levels
          quickly and improves slowly, which is the exact trap described in{" "}
          <Link to="/blog/zwift-training-periodization" className="text-zwift-orange hover:underline">
            the periodisation article
          </Link>{" "}
          as the permanent middle-intensity block.
        </p>
        <p className="mb-4">
          Worth knowing, and genuinely reassuring: XP keeps accruing when you are at the level cap. When Zwift has
          raised the ceiling in the past, riders who had been sitting at the old maximum moved up several levels
          immediately, because the distance had been counted all along. Nothing you ride is wasted, which is a good
          argument for not thinking about this very much.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="mb-4">
          XP in Zwift tracks distance and time rather than effort, and once you accept that, every optimisation
          follows from it. Ride in metric for the roughly 7% edge, take route badges you have not done yet for the
          one-off bonuses{" "}
          <a
            href="https://zwiftinsider.com/badges"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zwift-orange hover:underline"
          >
            <em>[6]</em>
          </a>
          , and choose longer events over shorter ones when the level is what you care about.
        </p>
        <p className="mb-4">
          The honest caveat is that none of this makes you faster. XP rewards volume, and the ride that maximises XP
          per hour is a long easy one, which is a perfectly good training session but is not the same thing as the
          session you needed that day. If levelling starts dictating what you ride, you have quietly swapped a
          training plan for a progress bar. There is more on choosing rides for the right reason in{" "}
          <Link to="/blog/zwift-route-selection-psychology" className="text-zwift-orange hover:underline">
            the route selection article
          </Link>
          .
        </p>
      </div>

      <div className="border-t pt-6 mt-8">
        <h3 className="text-xl font-bold mb-4">Sources</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          <li>
            <a href="https://zwiftinsider.com/points-levels-unlocks" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
              [1-2, 4-5] Zwift Insider - XP, Levels, and Unlocks Guide
            </a>
          </li>
          <li>
            <a href="https://zwiftinsider.com/category/reference/achievements-unlocks" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
              [3, 7-8] Zwift Insider - Achievements & Unlocks Reference
            </a>
          </li>
          <li>
            <a href="https://zwiftinsider.com/badges" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
              [6] Zwift Insider - Achievement Badges Guide
            </a>
          </li>
          <li>
            <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
              [9] Zwift Insider - PowerUps Guide
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

export default LevelUpFastInZwift;

