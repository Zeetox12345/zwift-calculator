import BlogPost from "@/components/BlogPost";

const ZwiftPowerUpsGuide = () => {
  const content = (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="mb-4">
          Ever been riding in Zwift and noticed a little icon appear at the top of your screen – like a feather, a draft van, or an aero helmet? Those are <strong>PowerUps</strong>, a fun gamified element of Zwift that can give you short-term boosts or bonuses during your ride or race. Think of them as temporary "superpowers" for your avatar, akin to getting a mushroom in Mario Kart 🍄. When used strategically, powerups can help you climb a hill faster, sprint harder, or get a sneaky advantage on your competitors. This guide will break down each powerup in Zwift, explain what they do, and give tips on the best way to use them. By the end, you'll be popping powerups with perfect timing like a seasoned Zwift racer!
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">How PowerUps Work</h2>
        <p className="mb-4">
          PowerUps are obtained randomly when you ride through certain archways in Zwift (start/finish banners, KOM arches, sprint points, etc.). You'll hear a roulette sound and an icon will appear. If you already have a powerup unused, you won't get a new one, so it's often "use it or lose it" by the next banner{" "}
          <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[1]</em>
          </a>
          . There are a few exceptions: sometimes in group events or races, powerups can be disabled or limited (organizers might choose only certain ones or none at all). But generally, in free rides and many events, you'll encounter these. You can activate a powerup by hitting the spacebar (PC) or tapping the icon on mobile, or using the Companion app button{" "}
          <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[2]</em>
          </a>
          . Most powerups have a duration (a little white timer bar will show). Two powerups (XP bonuses) activate instantly upon getting them.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">1. Large XP Bonus (Star symbol with +)</h2>
        <p className="mb-4">
          Not exactly a "boost" for performance, this gives you +250 XP immediately{" "}
          <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[3]</em>
          </a>
          . It's essentially the game saying "Congrats, you won extra experience points." 250 XP is like 12.5 km worth of riding (since you normally get 20 XP per km){" "}
          <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[3]</em>
          </a>
          , so it's a nice bonus especially at lower levels. Some people actually hope for XP bonuses when they're just doing workouts or easy rides, to level up faster. Nothing to activate here – it applies instantly when you get it at an arch. Same with the <strong>Small XP Bonus</strong> (small star symbol) which gives +10 XP (equivalent to 0.5 km){" "}
          <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[4]</em>
          </a>
          . That one is kind of meh, but hey, free XP.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">2. Lightweight (Feather icon)</h2>
        <p className="mb-4">
          This is a favorite for climbers. The feather powerup <strong>reduces your weight by 10% for 30 seconds</strong>{" "}
          <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[5]</em>
          </a>
          . In Zwift physics, that's huge on a climb – your watts per kg effectively go up, meaning you'll climb faster for the same power. Use it on steep hills or any time weight really matters (slopes &gt;6% are ideal). <strong>Best usage:</strong> If you're hitting a big climb segment or struggling to hang on uphill, trigger the feather at the base or during the steepest part. It lasts 30s, so time it for the section that hurts most. In races, people often feather in the last part of a KOM to attack or drop others. It's less useful on flats (weight doesn't matter much there), so don't waste it on a flat unless you just want to get rid of it before the next arch.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">3. Aero Boost (Helmet icon)</h2>
        <p className="mb-4">
          Often considered the most valuable powerup in flat or sprint scenarios. The aero powerup <strong>makes you more aerodynamic, reducing drag (your CdA) by 25% for 15 seconds</strong>{" "}
          <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[6]</em>
          </a>
          . In simpler terms, you'll slice through the air faster, so at high speeds this is a <em>big</em> advantage. This is the one to save for sprint finishes or solo breakaways on flats/descents. <strong>Best usage:</strong> In a race sprint, hit the Aero at ~15s to go (it lasts 15s, obviously) to maximize your final surge. Even if you're already drafting, it helps – but it especially helps if you're in the wind (like a solo sprint or break). Some also use it to go faster in time trials or if trying to bridge a gap in a flat section. It's generally wasted if you use it at low speeds (like climbing slowly), because aero doesn't matter when going 10 km/h uphill – but it's gold when going 40+ km/h in a pack. Pro racers in Zwift will almost always hold Aero for the finish if they get one – it can absolutely decide a race.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">4. Draft Boost (Van icon)</h2>
        <p className="mb-4">
          This one <strong>increases the draft effect you feel by 50% for 30 seconds</strong>{" "}
          <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[7]</em>
          </a>
          . Essentially, if you're behind someone, you'll get even more of a tow than usual. <strong>Best usage:</strong> Use the Draft boost when you're in a fast-moving pack to save energy, especially on flats or slight descents where draft matters most{" "}
          <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[7]</em>
          </a>
          . It won't make you faster on your own (you must be drafting someone for it to help), so don't waste it off the front or when no one's around. But if you're trying to hang on in a blob going 50 km/h, hitting the van can significantly lower your effort for that half minute. Another good time is if you drop back a bit and want to slingshot forward – combine with higher draft to move up in the group easier. Some racers use it right after a climb when the pack is single-file and hammering – that's a tough moment, and the van can help you not get dropped then.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">5. Burrito (literally a burrito icon)</h2>
        <p className="mb-4">
          A bit of a wildcard, available only in <em>event/race settings</em> (not in free ride). The Burrito <strong>makes you undraftable – riders behind you get <em>no</em> draft from you for 10 seconds</strong>{" "}
          <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[8]</em>
          </a>
          . It doesn't directly make you faster, but it hinders others. <strong>Best usage:</strong> If you're attacking off the front, pop the burrito so anyone trying to catch your wheel gets no benefit – they have to work harder to follow{" "}
          <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[8]</em>
          </a>
          . Or use it in a pack if you're trying to make others suffer (like in a final sprint, though it's disabled within 400m of a finish line to prevent last-second unfairness){" "}
          <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[9]</em>
          </a>
          . It's more of a tactical powerup. Some call it the "no draft" powerup. Say you launch a break on a flat, burrito up, and hopefully the chasers can't just sit on your wheel easily. In lower category races, burrito can confuse people ("why am I not getting any draft?!"). Just remember it only lasts 10s.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">6. Ghost (Cloaking icon)</h2>
        <p className="mb-4">
          Another event-only powerup (not in free rides). The ghost <strong>makes you invisible to other riders for 15 seconds</strong>{" "}
          <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[10]</em>
          </a>
          . Your avatar literally vanishes from their view (and the minimap). You can't use it near the finish (disabled in last 200-400m typically to avoid invisible sprints). <strong>Best usage:</strong> Tactical sneak attacks! If you want to launch a surprise break on a short climb or just break line of sight, pop the Ghost, and riders might not realize you've attacked until you're already a few seconds up the road{" "}
          <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[11]</em>
          </a>
          . It's great in races where people watch each other – suddenly you're gone, and by the time they react, you've got a gap. Works best when the pack is kind of lulled or on rolling terrain where a small gap can stick. Keep in mind savvy racers might still notice a gap in the list of nearby riders or see your name floating, but it's definitely an advantage.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">7. Steamroller (Steamroller icon)</h2>
        <p className="mb-4">
          A newer powerup introduced with the Crit City/Off-Road stuff. The steamroller <strong>reduces rolling resistance to that of a road tire on pavement for 30 seconds</strong>{" "}
          <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[12]</em>
          </a>
          . In practice, if you're on dirt or gravel, it makes you roll as if you're on smooth tarmac – huge speed boost on those surfaces. It also helps slightly on cobbles, etc. <strong>Best usage:</strong> Use it when hitting a dirt section or cobblestone section to get a major advantage. For example, on courses like Paris Roubaix Laps (cobbles), or Titan's Grove dirt, or Zwift gravel paths, a steamroller can let you fly past others slogging in dirt. If you're in a race that goes off-road, save it for that exact moment. It's mostly useless on pure pavement because you already roll like road tire on road (though ZwiftInsider notes it provides an advantage on a variety of rough surfaces including dirt, cobbles, wooden bridges, even ice/snow in Titans Grove){" "}
          <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[12]</em>
          </a>
          . So yeah, if you see dirt ahead, roll it out!
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">8. Anvil (Weight icon)</h2>
        <p className="mb-4">
          Another relatively new one, events only. The anvil <strong>makes you heavier (adds weight) for 30 seconds</strong>, meaning you'll descend faster (and conversely climb slower, so don't accidentally drop it uphill!). It only kicks in on downhills of -3% or steeper{" "}
          <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[13]</em>
          </a>
          {" "}and auto-disables if slope isn't steep enough. <strong>Best usage:</strong> On a long descent, especially if you're alone or want to break away downhill, hit the anvil and you'll bomb down faster than others who are lightweight. You can even stop pedaling and do a "supertuck" (if &gt; -5% grade and &gt; 58 km/h) to maximize speed – the anvil will keep your weight up so you maintain that tuck longer{" "}
          <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[13]</em>
          </a>
          . If you're in a group and get anvil, some will use it on a descent to try to drop others or force them to chase. Just <em>never</em> use it right before a climb or you'll suddenly be hauling extra weight uphill – some have made that error to comedic effect.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">PowerUp Strategy Tips</h2>
        <p className="mb-4">
          <strong>Know what's coming:</strong> Save the relevant powerup for where it helps. Climb ahead? Feather. Sprint finish? Aero. Off-road bit? Steamroller. Don't waste them out of impatience. They can make or break key moments. <strong>Don't double up (mostly):</strong> Using two powerups at once isn't possible since you can only hold one. But if you could, e.g., aero+feather might sound OP, but Zwift doesn't let you store two. So time usage such that you ideally get another at the next arch you want. If you're approaching a banner and don't like your current powerup, you might burn it (even for no gain) so you can try for a new one. <strong>Clearing before the finish:</strong> If you're in the last part of a race and have a useless powerup (like you got a draft van but final km is uphill finish where aero or feather would be better), sometimes it's worth using it earlier in hopes the next banner (like KOM banner) gives you a more useful one for the finale. But that's a gamble. <strong>Awareness in races:</strong> Watch what others do. If you see everyone else crouch (supertuck) but one guy keeps pedaling and doesn't slow, he might have an anvil. Or suddenly someone leaps forward on a climb – likely feathered. If a rider vanishes mid-race, ghost! You can anticipate these if you think like a gamer. <strong>Practice in free rides:</strong> Hop on a solo ride and deliberately do a few sprints or laps to get powerups and test them out. For example, practice hitting aero and see the speed jump, or see how much easier feather feels on a climb. Getting a feel for them makes you more confident when to trigger during a fast group situation.
        </p>
        <p className="mb-4">
          Zwift initially had some pushback about powerups from purists (like, "it's not realistic!"). But as ZwiftInsider notes, over time even racers embraced them as part of the unique strategy of virtual racing{" "}
          <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[14]</em>
          </a>
          . They add a layer of randomness and tactics – just like real racing has wind, mechanicals, etc., Zwift has powerups to mix it up{" "}
          <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[14]</em>
          </a>
          . Use them to your benefit and it can give you the edge needed to win.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="mb-4">
          Powerups are a fun element that can spice up your Zwift experience. Whether you're climbing, sprinting, or trying to break away, knowing when and how to deploy these virtual "power pills" can make a noticeable difference. Next time you hear that roulette sound and see an icon, you'll know exactly what it does and likely grin with a plan to use it. So go ahead – feather up that steep hill, hit the aero at the line, or drop a burrito to spice up your group ride. Mastering powerups is part of mastering Zwift. Just remember, they're tools to enhance solid riding strategy, not a magic fix – you still gotta put in the watts! But used wisely, these little boosts can turn the tide in your favor. Now go out there and powerup like a pro, and may the Zwift odds be ever in your favor! 🚀
        </p>
      </div>

      <div className="border-t pt-6 mt-8">
        <h3 className="text-xl font-bold mb-4">Sources</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          <li>
            <a href="https://zwiftinsider.com/powerups" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
              [1-14] Zwift Insider - Complete PowerUps Guide
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <BlogPost
      title="Zwift PowerUps Guide: How to Use In-Game Boosts Like a Pro"
      date="12-11-2025"
      content={content}
      metaTitle="Zwift PowerUps Guide: How to Use In-Game Boosts Like a Pro | Zwift Calculator"
      metaDescription="Master Zwift PowerUps: Learn how to use Feather, Aero, Draft Boost, Burrito, Ghost, Steamroller, and Anvil powerups strategically in races and rides. Complete guide to Zwift's in-game boosts."
    />
  );
};

export default ZwiftPowerUpsGuide;

