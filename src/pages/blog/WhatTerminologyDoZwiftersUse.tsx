import BlogPost from "@/components/BlogPost";

const WhatTerminologyDoZwiftersUse = () => {
  const content = (
    <div className="space-y-8">
      {/* Introduction */}
      <div>
        <p className="mb-4 text-lg leading-relaxed">
          If you're new to Zwift, it can feel like you've walked into a cycling group ride where everyone speaks a slightly different language.
        </p>
        <p className="mb-4">
          People throw around words like FTP, w/kg, draft, drop, ERG, TTT, sandbagging, Clydesdale, KOM, sticky draft, burrito, feather, A+, DIRT, ZRL, and ride-ons like it's normal conversation.
        </p>
        <p className="mb-4">
          And it is—once you know what it all means.
        </p>
        <p className="mb-4">
          Zwift has its own culture because it sits between three worlds:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>real cycling training</li>
          <li>video game systems</li>
          <li>online community racing</li>
        </ul>
        <p className="mb-4">
          That combination creates terminology you won't fully learn from a normal cycling book. Some terms come from outdoor riding, some come from training science, and some are pure Zwift slang.
        </p>
        <p className="mb-4">
          This guide is built to be genuinely useful. Not a dry dictionary. You'll learn what each term means, why it matters, and how to use it in real Zwift situations—training, group rides, racing, and even chatting.
        </p>
        <p className="mb-4">
          You'll finish with a "translator brain" so you can read Zwift forums, Discord race chats, and in-game messages without feeling lost.
        </p>
        <div className="my-6">
          <img 
            src="/pictures/blog/other/Zwift_terms.png" 
            alt="Zwift terminology guide showing key terms and definitions" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Core performance terms */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Core performance terms (the numbers Zwifters speak)</h2>
        
        <h3 className="text-xl font-semibold mb-2 mt-6">FTP (Functional Threshold Power)</h3>
        <p className="mb-4">
          FTP is the most common "anchor number" in Zwift.
        </p>
        <p className="mb-4">
          It's a rough estimate of the highest power you can sustain for about an hour in a steady effort. In Zwift training plans, workouts, and racing categories, FTP is the key reference.
        </p>
        <p className="mb-4">Why Zwifters talk about it constantly:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>it sets your training zones</li>
          <li>it affects your race category (through watts/kg)</li>
          <li>it helps you track improvement</li>
        </ul>
        <p className="mb-4">How it shows up in conversation:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"My FTP is 280 right now."</li>
          <li>"I'm doing an FTP builder block."</li>
          <li>"I think my FTP is set too high for ERG."</li>
        </ul>
        <p className="mb-4">
          <strong>Important truth:</strong><br />
          FTP is not perfectly "one hour power" for everyone. It's a training estimate. Two riders can have the same FTP and race very differently.
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-6">Watts (W)</h3>
        <p className="mb-4">
          Watts are simply power output.
        </p>
        <p className="mb-4">
          Zwift is a power-based world. That's different from outdoor cycling for many people, where speed is often the obsession. In Zwift, speed depends on physics and drafting and weight. Power is what you actually control.
        </p>
        <p className="mb-4">How it shows up:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Hold 300 W for this interval."</li>
          <li>"I pushed 500 W to close the gap."</li>
        </ul>
        <p className="mb-4">
          Watts are absolute. But Zwift rarely uses watts alone.
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-6">w/kg (Watts per kilogram)</h3>
        <p className="mb-4">
          This is the currency of Zwift racing.
        </p>
        <p className="mb-4">
          w/kg = your watts divided by your body weight in kilograms.
        </p>
        <p className="mb-4">Why it matters:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>it predicts climbing speed very well</li>
          <li>it's used for race categories</li>
          <li>it's how people compare performance across sizes</li>
        </ul>
        <p className="mb-4">How it shows up:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"I can hold 4.0 w/kg for 20 minutes."</li>
          <li>"That was a 6 w/kg surge."</li>
        </ul>
        <p className="mb-4">
          <strong>Big caution:</strong><br />
          If your weight in Zwift is inaccurate, your w/kg is misleading and your racing category will be wrong. That's one reason Zwift racing has a lot of discussion around fairness.
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-6">Power zones (Z1–Z7)</h3>
        <p className="mb-4">
          Most Zwifters use cycling zones based on FTP.
        </p>
        <p className="mb-4">Typical zone idea:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>Z1: recovery (very easy)</li>
          <li>Z2: endurance (easy aerobic)</li>
          <li>Z3: tempo (steady "working")</li>
          <li>Z4: threshold (hard, sustainable)</li>
          <li>Z5: VO₂ (hard intervals)</li>
          <li>Z6: anaerobic (short, very hard)</li>
          <li>Z7: neuromuscular (sprints)</li>
        </ul>
        <p className="mb-4">You'll hear:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"This workout is mostly Z2 with Z4 blocks."</li>
          <li>"I'm doing sweet spot in Z3/Z4."</li>
        </ul>
        <p className="mb-4">
          Zwift workouts often show these zones visually, so you learn the language quickly.
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-6">Sweet spot</h3>
        <p className="mb-4">
          Sweet spot is a popular training intensity: hard enough to build fitness efficiently, but not so hard that you need massive recovery.
        </p>
        <p className="mb-4">
          It usually sits around the upper end of tempo into lower threshold.
        </p>
        <p className="mb-4">In Zwift terms:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Sweet spot session" often means long blocks around 85–95% of FTP.</li>
        </ul>
        <p className="mb-4">Why Zwifters love it:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>it's time-efficient</li>
          <li>it builds durability</li>
          <li>it's easier to repeat than full threshold</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">VO₂ max intervals</h3>
        <p className="mb-4">
          These are hard intervals designed to push aerobic capacity.
        </p>
        <p className="mb-4">In Zwift, VO₂ workouts are common because:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>you can control the effort precisely</li>
          <li>you can do them safely indoors</li>
          <li>you don't need perfect roads or weather</li>
        </ul>
        <p className="mb-4">You'll hear:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"5x3 VO₂"</li>
          <li>"3-minute repeats"</li>
          <li>"On/off intervals"</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Cadence (rpm)</h3>
        <p className="mb-4">
          Cadence is how fast you pedal.
        </p>
        <p className="mb-4">Zwifters talk about cadence a lot because:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>ERG mode can punish low cadence with high torque</li>
          <li>cadence impacts comfort</li>
          <li>you can "spin" or "grind" depending on workout goals</li>
        </ul>
        <p className="mb-4">Common talk:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"I try to hold 90 rpm."</li>
          <li>"This climb is a grind at 70 rpm."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">HR (Heart rate)</h3>
        <p className="mb-4">
          Heart rate matters, but in Zwift culture, it's usually secondary to power because:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>power is immediate output</li>
          <li>heart rate lags and shifts with heat, stress, fatigue</li>
        </ul>
        <p className="mb-4">Still, you'll hear:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"My HR drifted in that long ride."</li>
          <li>"My HR was too high for Z2."</li>
        </ul>
      </div>

      {/* Trainer and workout mode */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Trainer and workout mode terminology (how Zwift controls your ride)</h2>
        
        <h3 className="text-xl font-semibold mb-2 mt-6">Smart trainer</h3>
        <p className="mb-4">
          A smart trainer is a trainer that can change resistance based on Zwift terrain or ERG targets.
        </p>
        <p className="mb-4">If someone says:</p>
        <p className="mb-4">
          "I'm on a smart trainer,"<br />
          they mean Zwift can control resistance.
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-6">Dumb trainer</h3>
        <p className="mb-4">
          A "dumb trainer" is a trainer that doesn't change resistance automatically. You can still use Zwift, but your resistance is manual.
        </p>
        <p className="mb-4">Zwifters might say:</p>
        <p className="mb-4">
          "I'm on a dumb trainer with a speed sensor."
        </p>
        <p className="mb-4">
          This usually means less realism and less precision.
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-6">ERG mode</h3>
        <p className="mb-4">
          ERG is one of the most important Zwift training features.
        </p>
        <p className="mb-4">
          ERG mode sets a target wattage and adjusts resistance so you hit that power regardless of gear—within reason.
        </p>
        <p className="mb-4">Benefits:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>perfect for structured workouts</li>
          <li>makes intervals consistent</li>
          <li>reduces "chasing power" stress</li>
        </ul>
        <p className="mb-4">Common complaints:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"ERG spiral of death" (more on that soon)</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">SIM mode</h3>
        <p className="mb-4">
          This is the normal "ride the course" mode where resistance changes based on gradient, like outdoor riding.
        </p>
        <p className="mb-4">Zwifters might say:</p>
        <p className="mb-4">
          "I did it in SIM mode, not ERG."
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-6">Trainer difficulty</h3>
        <p className="mb-4">
          This is a Zwift setting that controls how strongly gradients affect your trainer resistance.
        </p>
        <p className="mb-4">
          <strong>Important:</strong><br />
          It does not make the ride "easier" in a magical fitness way. It changes how the gradient feels.
        </p>
        <p className="mb-4">Example:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>100% difficulty: a 10% climb feels like a 10% climb resistance-wise</li>
          <li>50% difficulty: that same 10% climb feels like 5% resistance-wise, but you still need power to go fast</li>
        </ul>
        <p className="mb-4">You'll hear:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"What trainer difficulty do you run?"</li>
          <li>"I lowered it for Alpe du Zwift."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Spindown</h3>
        <p className="mb-4">
          A spindown is a calibration process for some trainers.
        </p>
        <p className="mb-4">
          People talk about it because it affects accuracy.
        </p>
        <p className="mb-4">You'll see:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Do a spindown before racing."</li>
          <li>"My numbers felt off until I calibrated."</li>
        </ul>
        <p className="mb-4">
          Not all trainers need spindown in the same way. But the term is common.
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-6">Power match</h3>
        <p className="mb-4">
          PowerMatch is when Zwift uses an external power meter (like crank-based pedals) to control ERG, instead of trusting trainer power.
        </p>
        <p className="mb-4">Zwifters discuss this because:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>trainer power can differ from power meter power</li>
          <li>matching makes training more consistent across indoor/outdoor</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Dropout</h3>
        <p className="mb-4">
          A dropout is when your trainer, sensors, or connection fails and your power/cadence/heart rate disappears temporarily.
        </p>
        <p className="mb-4">You'll hear:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"I had dropouts mid-race."</li>
          <li>"My Bluetooth was unstable."</li>
        </ul>
      </div>

      {/* Racing and group ride terms */}
      <div>
        <h2 className="text-2xl font-bold mb-4">In-game racing and group ride terms (the "Zwift culture" words)</h2>
        
        <h3 className="text-xl font-semibold mb-2 mt-6">Draft / drafting</h3>
        <p className="mb-4">
          Drafting means riding behind someone to reduce wind resistance.
        </p>
        <p className="mb-4">
          In Zwift, drafting is powerful and sometimes feels stronger than outdoors. Riders talk about:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Stay in the draft."</li>
          <li>"Don't pull too much."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Sticky draft</h3>
        <p className="mb-4">
          "Sticky draft" refers to how Zwift sometimes "holds" you in the draft if you're close enough, making it easier to stay with a group than in real life.
        </p>
        <p className="mb-4">You'll hear:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Zwift has sticky draft—use it."</li>
          <li>"If you lose the wheel, it's hard to get back."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Wheel / holding a wheel</h3>
        <p className="mb-4">
          "Hold the wheel" means staying close behind a rider to draft them.
        </p>
        <p className="mb-4">In race chat:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Hold the wheel!"</li>
          <li>"Don't get gapped!"</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Gap</h3>
        <p className="mb-4">
          A gap is the distance between you and the group ahead.
        </p>
        <p className="mb-4">In Zwift, a small gap can become a disaster quickly because:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>drafting benefit disappears</li>
          <li>the group pulls away at higher speed for same effort</li>
        </ul>
        <p className="mb-4">You'll hear:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Close the gap now."</li>
          <li>"We got gapped on the hill."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Pack / bunch</h3>
        <p className="mb-4">
          The main group of riders.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Stay with the pack."</li>
          <li>"I got dropped from the bunch."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Dropped</h3>
        <p className="mb-4">
          "Dropped" means you can't stay with the group.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"I got dropped on the climb."</li>
          <li>"He got dropped after the sprint."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Off the back</h3>
        <p className="mb-4">
          Same idea: you're behind the group and losing contact.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"I'm off the back."</li>
          <li>"I'm hanging on by a thread."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Breakaway</h3>
        <p className="mb-4">
          A rider or small group attacks and tries to ride away from the pack.
        </p>
        <p className="mb-4">
          In Zwift, breakaways can be hard because drafting is strong and the pack can chase efficiently. But breakaways still happen, especially with teams.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"There's a break up the road."</li>
          <li>"We missed the break."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Chase / chasing</h3>
        <p className="mb-4">
          Trying to catch a breakaway or close a gap.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"We need to chase."</li>
          <li>"I burned matches in the chase."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Pull / taking a pull</h3>
        <p className="mb-4">
          Riding at the front to help the group maintain speed.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Take a pull, then rotate."</li>
          <li>"Stop pulling so hard!"</li>
        </ul>
        <p className="mb-4">
          Zwift group rides often have very uneven pulls because some people forget they're effectively "working" for everyone behind them.
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-6">Rotation</h3>
        <p className="mb-4">
          A smooth change of who's at the front.
        </p>
        <p className="mb-4">You'll hear this in team time trials:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Rotate every 30 seconds."</li>
          <li>"Keep the rotation clean."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">TTT (Team Time Trial)</h3>
        <p className="mb-4">
          This is a specific Zwift format where teams ride together, rotating, trying to get the best time.
        </p>
        <p className="mb-4">In TTT talk you'll hear:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"hold the blob"</li>
          <li>"smooth pulls"</li>
          <li>"don't surge"</li>
          <li>"keep it together"</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Blob</h3>
        <p className="mb-4">
          The "blob" is the visual group of riders packed together.
        </p>
        <p className="mb-4">People say:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Stay in the blob."</li>
          <li>"The blob split."</li>
        </ul>
        <p className="mb-4">
          This is very Zwift-specific language.
        </p>
      </div>

      {/* Power-up terminology */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Power-up terminology (Zwift's game mechanics)</h2>
        <p className="mb-4">
          Zwift has power-ups in many events. They're iconic and Zwifters refer to them by nickname.
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-6">Feather</h3>
        <p className="mb-4">
          Reduces your weight effect temporarily. Useful for climbs.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Use feather on the climb."</li>
          <li>"Feather saved me on the hill."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Burrito</h3>
        <p className="mb-4">
          Disables drafting for a short time—both for you and behind you—often used strategically.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Burrito on the sprint."</li>
          <li>"He burrito'd and messed up the draft."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Aero</h3>
        <p className="mb-4">
          Reduces aerodynamic drag. Great for flats and sprints.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Save aero for the finish."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Ghost</h3>
        <p className="mb-4">
          Makes you invisible to others (and removes drafting effects). Used for attacks or confusion.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"He ghosted off the front."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Truck</h3>
        <p className="mb-4">
          Increases rolling resistance reduction (varies by mode). Often used on dirt or rough terrain routes.
        </p>
        <p className="mb-4">
          People call it "the truck."
        </p>
        <p className="mb-4">
          <strong>Important note:</strong><br />
          Power-up availability depends on event types and modes. But the slang is common across Zwift communities.
        </p>
      </div>

      {/* Race category terminology */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Race category terminology (A, B, C, D… and the drama)</h2>
        
        <h3 className="text-xl font-semibold mb-2 mt-6">Categories: A, B, C, D (and sometimes A+)</h3>
        <p className="mb-4">
          These categories group riders by ability, often based on w/kg.
        </p>
        <p className="mb-4">Typical ranges (these can vary depending on event rules):</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>D: beginner/lower power</li>
          <li>C: intermediate</li>
          <li>B: strong amateurs</li>
          <li>A: very strong</li>
          <li>A+: elite-level in some systems</li>
        </ul>
        <p className="mb-4">You'll hear:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"I'm racing B tonight."</li>
          <li>"He should be in A, not C."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Sandbagging</h3>
        <p className="mb-4">
          This is the controversial term for someone racing in a lower category than they "should," often to win easily.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"That guy is sandbagging."</li>
          <li>"Classic sandbagger move."</li>
        </ul>
        <p className="mb-4">
          Zwift tries to address this with enforcement systems in some events, but the term is still common.
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-6">Cat bump / upgrade</h3>
        <p className="mb-4">
          Moving to a higher category after improved performance.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"I got bumped to B."</li>
          <li>"Time for a cat upgrade."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">ZwiftPower / results filtering</h3>
        <p className="mb-4">
          Many serious racers use external result systems (like ZwiftPower historically) or event-specific verification tools.
        </p>
        <p className="mb-4">You'll hear:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Wait for ZwiftPower results."</li>
          <li>"He got filtered for weight doping."</li>
        </ul>
        <p className="mb-4">
          The culture around results verification is part of Zwift racing.
        </p>
      </div>

      {/* Route and terrain */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Route and terrain terminology</h2>
        
        <h3 className="text-xl font-semibold mb-2 mt-6">Watopia</h3>
        <p className="mb-4">
          Zwift's most iconic world. Even people who don't ride Zwift know Watopia exists.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Meet in Watopia."</li>
          <li>"I'm doing a Watopia route."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">London, Richmond, New York, France, Innsbruck, etc.</h3>
        <p className="mb-4">
          Zwift has multiple worlds. Zwifters often choose worlds based on climbs or race routes.
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-6">KOM / QOM</h3>
        <p className="mb-4">
          King/Queen of the Mountain: timed climb segments.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"I'm going for the KOM."</li>
          <li>"I got a new PR on the KOM."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Sprint segment</h3>
        <p className="mb-4">
          Timed sprint sections.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Save energy for the sprint segment."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Alpe du Zwift</h3>
        <p className="mb-4">
          Zwift's famous long climb (in Watopia), inspired by Alpe d'Huez.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"I'm doing Alpe."</li>
          <li>"Going for a sub-60 Alpe."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Epic KOM</h3>
        <p className="mb-4">
          Another famous climb.
        </p>
        <p className="mb-4">
          Zwifters talk about these climbs like they're real landmarks, because in the Zwift world, they are.
        </p>
      </div>

      {/* Gear and setup */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Gear and setup terminology (Zwift-specific bike talk)</h2>
        
        <h3 className="text-xl font-semibold mb-2 mt-6">Tron bike</h3>
        <p className="mb-4">
          This is the "Zwift Concept Z1" bike, unlocked by earning enough elevation.
        </p>
        <p className="mb-4">
          People call it the Tron bike because it looks futuristic.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"I finally got the Tron."</li>
          <li>"Tron on climbs is decent."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Drops (currency)</h3>
        <p className="mb-4">
          "Drops" are Zwift's in-game currency you earn by riding, used to buy bikes and wheels in the Drop Shop.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"I'm saving drops for a wheelset."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Drop Shop</h3>
        <p className="mb-4">
          The in-game store where you buy frames and wheels.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Check the Drop Shop."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">XP (experience points)</h3>
        <p className="mb-4">
          XP is earned through riding and unlocks levels and items.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Grinding XP tonight."</li>
          <li>"Need XP for that frame."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Leveling up</h3>
        <p className="mb-4">
          Progressing through Zwift levels.
        </p>
      </div>

      {/* Social and chat */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Social and chat terminology</h2>
        
        <h3 className="text-xl font-semibold mb-2 mt-6">Ride On</h3>
        <p className="mb-4">
          A "Ride On" is Zwift's version of a like/kudos.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Thanks for the Ride On!"</li>
          <li>"Ride On bombing everyone today."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Beacon</h3>
        <p className="mb-4">
          A beacon is a visible indicator that helps others find you in a crowded world.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Turn on your beacon."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Meetup</h3>
        <p className="mb-4">
          Scheduled ride with friends.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Join my meetup."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">Group ride</h3>
        <p className="mb-4">
          Organized ride with a leader, often with a specific pace.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"I'm doing a D group ride."</li>
        </ul>
      </div>

      {/* Training culture slang */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Training culture slang (the phrases Zwifters actually say)</h2>
        
        <h3 className="text-xl font-semibold mb-2 mt-6">"The pain cave"</h3>
        <p className="mb-4">
          Your indoor training space.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Back in the pain cave."</li>
          <li>"Welcome to the pain cave."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">"Zwift grind"</h3>
        <p className="mb-4">
          Long steady indoor riding or repeated training blocks.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Another Zwift grind session."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">"ERG spiral of death"</h3>
        <p className="mb-4">
          When ERG mode sets resistance to maintain power, and if your cadence drops, resistance rises, which makes cadence drop more, which makes it harder, and it spirals until you basically stop.
        </p>
        <p className="mb-4">People describe it like:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"I got ERG spiral of death."</li>
          <li>"Turn off ERG before you die."</li>
        </ul>
        <p className="mb-4">The fix:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>shift to an easier gear before a hard interval</li>
          <li>keep cadence steady</li>
          <li>if it's going wrong, pause or lower the workout intensity temporarily</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">"Over/unders"</h3>
        <p className="mb-4">
          A workout pattern where you alternate slightly above and below threshold.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Over/unders today."</li>
          <li>"That over/under set was brutal."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">"Free ride"</h3>
        <p className="mb-4">
          Riding without a structured workout.
        </p>
        <p className="mb-4">Examples:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"Just doing a free ride."</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 mt-6">"Workout bias"</h3>
        <p className="mb-4">
          Zwift riders sometimes refer to "being a workout person" vs "being a racer person."
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>workout people love ERG, structure, consistency</li>
          <li>racer people love tactics, surges, and chaos</li>
        </ul>
        <p className="mb-4">
          Many do both.
        </p>
      </div>

      {/* What matters most */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What terminology matters most for beginners?</h2>
        <p className="mb-4">
          If you only learn a few terms first, learn these:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>FTP</li>
          <li>watts and w/kg</li>
          <li>draft / wheel / gap</li>
          <li>ERG mode</li>
          <li>trainer difficulty</li>
          <li>dropped</li>
          <li>group ride pace categories</li>
          <li>Ride Ons</li>
        </ul>
        <p className="mb-4">
          These will cover 80% of what you see.
        </p>
        <p className="mb-4">Then add:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>sweet spot</li>
          <li>VO₂</li>
          <li>sandbagging</li>
          <li>power-ups</li>
          <li>drops / XP</li>
        </ul>
        <p className="mb-4">
          And you'll speak Zwift fluently.
        </p>
      </div>

      {/* How to sound like you know */}
      <div>
        <h2 className="text-2xl font-bold mb-4">How to sound like you actually know what you're doing in Zwift chats</h2>
        <p className="mb-4">
          You don't need to fake it. But if you want to communicate clearly, here are examples of normal Zwift-speak:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"I'm holding the wheel, don't want to get gapped before the climb."</li>
          <li>"Saving aero for the sprint, feather for the KOM."</li>
          <li>"ERG felt brutal—cadence dipped and I nearly spiral'd."</li>
          <li>"I'm doing sweet spot today, mostly Z3/Z4."</li>
          <li>"Got dropped on the kick, couldn't close the gap."</li>
          <li>"TTT rotation was messy, too many surges."</li>
        </ul>
        <p className="mb-4">
          It's mostly just cycling language plus Zwift game layers.
        </p>
      </div>

      {/* Confusing terms */}
      <div>
        <h2 className="text-2xl font-bold mb-4">A few "confusing terms" explained simply</h2>
        
        <h3 className="text-xl font-semibold mb-2 mt-6">"Trainer difficulty makes it easier, right?"</h3>
        <p className="mb-4">
          It changes the feel, not the physics. You still need power. Lowering trainer difficulty just means you shift less and feel less "wall" on steep climbs.
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-6">"Why is drafting so strong?"</h3>
        <p className="mb-4">
          Because Zwift is designed to make pack dynamics meaningful and fun, and because the system uses simplified physics that often makes drafting benefits very noticeable.
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-6">"Why do I get dropped so fast?"</h3>
        <p className="mb-4">
          Draft loss is brutal. A small gap becomes a big gap because the group ahead has drafting, and you don't.
        </p>
      </div>

      {/* Deeper point */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The deeper point: Zwift terminology reflects Zwift skills</h2>
        <p className="mb-4">
          Learning the words helps you learn the skills.
        </p>
        <p className="mb-4">When you understand terms like:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"gap"</li>
          <li>"wheel"</li>
          <li>"draft"</li>
          <li>"surge"</li>
          <li>"pull"</li>
        </ul>
        <p className="mb-4">
          you start making smarter decisions in races and group rides.
        </p>
        <p className="mb-4">When you understand:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>"ERG"</li>
          <li>"sweet spot"</li>
          <li>"over/unders"</li>
        </ul>
        <p className="mb-4">
          you start training with more structure and less guesswork.
        </p>
        <p className="mb-4">
          Language shapes behavior.
        </p>
        <p className="mb-4">
          And Zwift culture has grown because the platform forced cyclists to learn power-based training and group dynamics in a very visible way.
        </p>
      </div>

      {/* Mini-glossary */}
      <div>
        <h2 className="text-2xl font-bold mb-4">A practical mini-glossary (fast reference)</h2>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li><strong>FTP:</strong> your threshold power estimate</li>
          <li><strong>w/kg:</strong> watts divided by weight, key for climbing and categories</li>
          <li><strong>ERG:</strong> trainer holds target watts automatically</li>
          <li><strong>SIM:</strong> resistance changes with terrain</li>
          <li><strong>Trainer difficulty:</strong> changes gradient feel</li>
          <li><strong>Draft:</strong> reduced effort behind riders</li>
          <li><strong>Wheel:</strong> staying close behind someone</li>
          <li><strong>Gap:</strong> distance between groups</li>
          <li><strong>Dropped:</strong> can't stay with group</li>
          <li><strong>Blob:</strong> packed group of riders</li>
          <li><strong>TTT:</strong> team time trial</li>
          <li><strong>KOM/QOM:</strong> timed climb segment</li>
          <li><strong>Drops:</strong> in-game currency</li>
          <li><strong>XP:</strong> experience points for leveling</li>
          <li><strong>Tron bike:</strong> special unlock bike</li>
          <li><strong>Ride On:</strong> kudos/like</li>
          <li><strong>Sandbagging:</strong> racing below your true category</li>
          <li><strong>Power-ups:</strong> feather, burrito, aero, ghost, truck</li>
        </ul>
      </div>

      {/* Final takeaway */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Final takeaway</h2>
        <p className="mb-4">
          Zwift terminology isn't just jargon. It's the language of:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>power-based training</li>
          <li>virtual racing tactics</li>
          <li>online community culture</li>
        </ul>
        <p className="mb-4">
          Once you learn the key terms, Zwift gets more fun and less confusing. You'll understand workouts better, race smarter, and communicate with other riders without feeling like you missed a memo.
        </p>
      </div>
    </div>
  );

  return (
    <BlogPost
      title="What Terminology Do Zwifters Use?"
      date="19-12-2025"
      relatedCalculators={[
        {
          name: "Alpe du Zwift Calculator",
          path: "/alpeduzwiftcalculator",
          description: "Calculate your climbing time and power requirements for Zwift's iconic climbs"
        },
        {
          name: "Ven Top Calculator",
          path: "/ventop-calculator",
          description: "Predict your performance on Zwift's longest climb"
        }
      ]}
      content={content}
      metaTitle="What Terminology Do Zwifters Use? Complete Zwift Glossary | Zwift Calculator"
      metaDescription="Complete guide to Zwift terminology. Learn FTP, w/kg, ERG mode, drafting, power-ups, sandbagging, and all the key terms Zwifters use in training, racing, and chatting."
    />
  );
};

export default WhatTerminologyDoZwiftersUse;

