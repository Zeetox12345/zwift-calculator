import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const ZwiftSetupGuide = () => {
  const content = (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="mb-4">
          Starting on Zwift is exciting - you're about to dive into a world of virtual roads and workouts. But to get the most out of Zwift, you need the right <em>setup</em>. You don't need a pro-level studio; just a few key pieces of gear and a bit of space will transform that corner of your home into an epic "pain cave" (as cyclists lovingly call their indoor training spot). This guide covers the essential equipment and the nice-to-haves, starting with a ranking of what actually changes how you ride.
        </p>
        <p className="mb-4">
          I'm Christian, I'm 25, I live in Aalborg, and I ride indoors for most of the Danish winter while training for Ironman Copenhagen. What follows is what I'd tell a friend who asked me what to buy first - and, more usefully, what to buy last. If you want more of this kind of thing, the{" "}
          <Link to="/blog/category/setup" className="text-zwift-orange hover:underline">setup section of the blog</Link>{" "}
          is where it all lives.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">What actually matters, in order</h2>
        <p className="mb-4">
          Most setup guides list gear by price. That's the wrong axis. Rank it instead by how much each item changes the watts you can actually hold for an hour:
        </p>
        <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">
          <li><strong>Cooling.</strong> Nothing else on this list returns as many sustainable watts for the money.</li>
          <li><strong>A power source you trust.</strong> Not the most accurate one in the world - one that reads the same today as it did last month.</li>
          <li><strong>A screen you can read from the saddle.</strong> If you have to squint at your cadence, you stop using it.</li>
          <li><strong>Contact points and fit.</strong> Indoors, the load never moves, so small fit errors turn into big problems fast.</li>
          <li><strong>Everything else.</strong> Mat, riser block, desk, headphones, LED strips. All nice. None of them decide whether you finish the intervals.</li>
        </ol>
        <p className="mb-4">
          Here's the mechanism behind putting cooling at the top. A rider holding 250 W turns food energy into pedal work at roughly 20-25% gross efficiency, so the body burns something like 1,000-1,250 W of metabolic power and dumps the remaining 750-1,000 W as heat. Outdoors, 30 km/h of airflow carries that away for free. Indoors, nothing moves. Your body's answer is to send more blood to the skin, which leaves less returning to the heart, so stroke volume falls and heart rate climbs to hold the same output. That is the drift behind a heart rate creeping up 10-15 bpm across a steady 45-minute effort at constant power. Eventually you either accept the higher heart rate or you drop the watts, and most people drop the watts.
        </p>
        <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
          <p>
            A fan doesn't make you fitter. It stops you from losing performance you already have. That's why I'd buy a second fan before I'd buy a better trainer, and it's the one recommendation here I'd defend against any component upgrade.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">1. The Trainer (or Smart Bike)</h2>
        <p className="mb-4">
          The heart of your Zwift setup is something to ride on that sends your power to the game. Most commonly, this is a <strong>bike trainer</strong>. There are two main types: <strong>Smart Trainers</strong> are the best choice for Zwift if budget allows. A smart trainer directly measures your power output and can also change resistance to mimic hills in the game. This means when you hit a 10% grade in Zwift, you'll <em>feel</em> it as the trainer increases tension - super immersive! Smart trainers provide the most accurate data and engaging experience{" "}
          <a href="https://zwiftinsider.com/getting-started-smart-trainer" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[1]</em>
          </a>
          . Popular models include wheel-on trainers (cheaper, you attach your bike with its rear wheel) and direct-drive trainers (you remove your rear wheel and mount the bike on the trainer - these are quieter and more accurate). If a smart trainer is out of reach, you can still Zwift with a traditional resistance trainer using a speed sensor or power meter.
        </p>

        <h3 className="text-xl font-bold mb-3">Wheel-on, direct-drive or smart bike</h3>
        <p className="mb-4">
          The three formats differ in more than price. Cost brackets below are relative to each other, not absolute, because prices date badly.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Type</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Power accuracy</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Noise</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Road feel</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Cost bracket</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Who it suits</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Wheel-on smart</td>
                <td className="py-2 pr-4">Claimed around ±2-3%, and it moves with tyre pressure and roller tension, which you reset every ride</td>
                <td className="py-2 pr-4">Loudest. Tyre-on-roller hum rises with speed</td>
                <td className="py-2 pr-4">Light flywheel. Gradients feel indicated, not felt</td>
                <td className="py-2 pr-4">Entry</td>
                <td className="py-2 pr-4">A first winter, or anyone who needs the bike back outdoors in 30 seconds</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Direct-drive smart</td>
                <td className="py-2 pr-4">Claimed around ±1-2%, with no tyre in the measurement chain</td>
                <td className="py-2 pr-4">Quiet. Your drivetrain becomes the loudest thing in the room</td>
                <td className="py-2 pr-4">Heavy flywheel, real inertia. Standing feels like standing</td>
                <td className="py-2 pr-4">Mid to high</td>
                <td className="py-2 pr-4">Anyone riding indoors twice a week or more, or doing structured intervals</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Smart bike</td>
                <td className="py-2 pr-4">Best of the three, and it stays put because nothing is refitted</td>
                <td className="py-2 pr-4">Quietest. No chain, no cassette wear</td>
                <td className="py-2 pr-4">Best. Virtual gearing, some models add tilt and steering</td>
                <td className="py-2 pr-4">Highest</td>
                <td className="py-2 pr-4">Two riders in one house, or anyone riding indoors more than out</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">What "accuracy ±2%" actually means</h3>
        <p className="mb-4">
          The spec sheet number is a tolerance band, not a promise that two devices agree. At 250 W, ±2% is ±5 W. If your trainer reads 2% high and your friend's reads 2% low, you're 10 W apart with both devices inside spec. Add a wheel-on trainer with a ±3% claim and a tyre you pumped up by feel, and a 15 W gap between two working trainers is completely ordinary. Nobody's equipment is broken.
        </p>
        <p className="mb-4">
          That gap is not academic on a climb. Take a 75 kg rider and run the numbers through this site's{" "}
          <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">Alpe du Zwift calculator</Link>, which uses the fit time_seconds = 148.60*(W/kg)^2 - 1954.08*(W/kg) + 8329.87:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Reported power (75 kg rider)</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">W/kg</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Predicted Alpe time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">250 W</td>
                <td className="py-2 pr-4">3.33</td>
                <td className="py-2 pr-4">57:47</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">255 W (+2%)</td>
                <td className="py-2 pr-4">3.40</td>
                <td className="py-2 pr-4">56:44</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">260 W (+4%)</td>
                <td className="py-2 pr-4">3.47</td>
                <td className="py-2 pr-4">55:42</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">265 W (+6%)</td>
                <td className="py-2 pr-4">3.53</td>
                <td className="py-2 pr-4">54:41</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 mt-4">
          A 15 W reading gap is worth about three minutes over the Alpe's 12.2 km and 1,036 m. Two riders with identical legs can finish three minutes apart purely because of which box measured them, and 3.2 W/kg only puts you under the hour if your power source is honest.
        </p>
        <p className="mb-4">
          So for training, <em>repeatability</em> beats absolute accuracy. A trainer that reads 4% high every single day is still a good training tool, because your intervals, your{" "}
          <Link to="/zwift-ftp-calculator" className="text-zwift-orange hover:underline">FTP estimate</Link>{" "}
          and your progress all come off the same ruler. Pick one power source, note which device your FTP came from, run the calibration the manufacturer asks for, and never mix trainer and crank power meter numbers in one training log. On a wheel-on trainer, tyre pressure is part of the power meter - set it with a gauge, not a thumb.
        </p>

        <h3 className="text-xl font-bold mb-3 mt-6">ERG mode versus simulation mode</h3>
        <p className="mb-4">
          These are the two ways a smart trainer decides how hard the pedals are. In <strong>ERG mode</strong> you give it a wattage target and it varies resistance to hold that number, whatever gear you're in. In <strong>simulation mode</strong> Zwift sends the road gradient and the trainer converts it into resistance, so gearing and cadence are yours to manage. ERG for workouts, sim for everything else: group rides, races and every route in the{" "}
          <Link to="/zwift-climbs" className="text-zwift-orange hover:underline">climbs library</Link>.
        </p>
        <p className="mb-4">
          The trap in ERG mode is the <strong>spiral of death</strong>. Mechanical power is torque times angular velocity, so if your cadence falls, the trainer must raise torque to hold the same watts. Higher torque makes the pedals harder to turn, so cadence falls further, so torque rises again. Ten seconds later you're mashing at 55 rpm and the trainer has run out of ways to help you. Four things prevent it:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>Spin up to your target cadence in the last three to five seconds <em>before</em> the interval starts, not after it has begun.</li>
          <li>Choose a gear that keeps the flywheel spinning quickly - roughly the middle of the cassette on a direct-drive trainer. A slow flywheel makes every correction feel abrupt.</li>
          <li>Watch cadence, not power. Power is being held for you; cadence is the only variable you still control. A sag of more than about 5 rpm below your normal is the early warning.</li>
          <li>If you do fall in, stop pedalling for one or two seconds. Most trainers see zero cadence, back the resistance off, and let you restart cleanly. Fighting it never works.</li>
        </ul>
        <p className="mb-4">
          In simulation mode, the setting people misunderstand most is <strong>Trainer Difficulty</strong>. It scales how much of the in-game gradient your trainer reproduces: at 50%, an 8% ramp feels like 4%. It does <em>not</em> change your speed in the game or your time up a climb - only the gearing you need to turn the pedals. If your smallest gear leaves you grinding on the Alpe's 21 hairpins, turning Trainer Difficulty down is the correct fix, not a cheat. There's more jargon like this in the{" "}
          <Link to="/blog/what-terminology-do-zwifters-use" className="text-zwift-orange hover:underline">Zwift terminology guide</Link>.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">2. A Bike</h2>
        <p className="mb-4">
          This might be obvious, but yes - you need a bike to put on that trainer (unless you bought a dedicated smart bike). The good news: almost any bike works, as long as it fits the trainer. Road bikes are most common, but people use mountain bikes, hybrids, whatever. Just ensure your trainer is compatible with your wheel size or axle type (most modern trainers support multiple). Zwift Insider suggests a standard road bike (10 or 11-speed) is a safe bet as it fits virtually all trainers{" "}
          <a href="https://zwiftinsider.com/getting-started-smart-trainer" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[2]</em>
          </a>
          . Make sure your bike is in decent working order - a tuned drivetrain, proper tire pressure, etc., will make indoor riding smoother. If using a wheel-on trainer, you might want a special <strong>trainer tire</strong> (they're tougher and quieter; regular tires can wear or get slick from trainer use).
        </p>

        <h3 className="text-xl font-bold mb-3">Fit matters more indoors, because the bike can't move underneath you</h3>
        <p className="mb-4">
          Outdoors the bike rocks side to side, you slide fore and aft, you stand for rises and you coast down hills. Every one of those unloads a contact point for a second or two. On a fixed trainer none of it happens: the same saddle contact patch carries the same load and your knees track the same arc for the whole hour. A fit error that needs a five-hour outdoor ride to surface will surface in 40 minutes indoors.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>Measure before you mount: saddle height (centre of bottom bracket to the top of the saddle, along the seat tube), saddle setback, and saddle-to-bar drop. Those three numbers are also exactly what you type into a smart bike.</li>
          <li>Get the bike level. The riser block should put the front axle at roughly the height the trainer puts the rear axle. Nose-up throws weight onto your hands; nose-down slides you onto the saddle nose.</li>
          <li>Stand for 15 seconds every 10 minutes. It costs nothing and it resets saddle pressure before it becomes a problem.</li>
          <li>A rocker plate gives the bike back a couple of degrees of lean, which keeps moving where the load sits instead of grinding one spot for an hour.</li>
        </ul>
        <p className="mb-4">
          If something hurts only indoors, treat it as a loading problem before you start moving the saddle. More questions like this are answered on the{" "}
          <Link to="/faq" className="text-zwift-orange hover:underline">FAQ page</Link>.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">3. Device to Run Zwift</h2>
        <p className="mb-4">
          Zwift is software, so you need a device (computer, tablet, etc.) to actually run the app and display the visuals. Options include: <strong>PC or Mac</strong> - A laptop or desktop computer works great. Ideally with at least a mid-range graphics capability if you want pretty graphics, but Zwift isn't too demanding. Connect it to a nice monitor or even your TV for a big-screen experience. Make sure it has Bluetooth or ANT+ to pair your trainer (ANT+ dongles can be used for PCs){" "}
          <a href="https://zwiftinsider.com/getting-started-smart-trainer" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[3]</em>
          </a>
          . <strong>Smartphone or Tablet</strong> - Zwift runs on iPhones, iPads, many Android phones/tablets. Using a tablet or phone is super convenient (touchscreen for controls). Just prop it on a stand or mount. Many Zwifters start on an iPad or similar - easy and decent performance. <strong>Apple TV</strong> - This is a surprisingly popular choice. The latest Apple TV 4K can run Zwift and display on your big TV. It's affordable and simple{" "}
          <a href="https://zwiftinsider.com/getting-started-smart-trainer" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[4]</em>
          </a>
          .
        </p>
        <p className="mb-4">
          Whatever you pick, judge it on one thing first: can you read the numbers from the saddle without leaning forward? Zwift's data fields are small, and a phone at arm's length puts your target cadence at a few millimetres of screen height. The fix is distance, not resolution - a modest TV 1.5 m away beats a phone at 60 cm. Craning forward for an hour is its own fit problem, which is why a readable screen outranks a fancier trainer.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">4. Connectivity &amp; Apps</h2>
        <p className="mb-4">
          To bridge connections, you might use the <strong>Zwift Companion app</strong> on your smartphone - this can act as a Bluetooth bridge if needed, and it's also super handy for interacting (chat, seeing upcoming events, etc.). But at minimum, ensure your trainer/sensors can talk to your device (most likely via Bluetooth Smart). As mentioned, PC users often go with an ANT+ dongle because many trainers broadcast ANT+. It's largely plug-and-play: when you launch Zwift, it will prompt you to pair your <strong>Power Source</strong>, <strong>Cadence</strong>, <strong>Heart Rate</strong>, etc. Oh, and speaking of <strong>Heart Rate Monitor</strong> - it's not required to ride, but if you plan to race on Zwift, many events require heart rate data as proof of effort. A simple Bluetooth HR strap (like Wahoo Tickr, Garmin Dual, etc.) can connect to Zwift and display your HR. It's a useful training metric, too, to gauge intensity.
        </p>

        <h3 className="text-xl font-bold mb-3">ANT+ versus Bluetooth</h3>
        <p className="mb-4">
          The difference that matters is not range or battery life, it's how many things can listen at once. ANT+ is a broadcast protocol: one sensor sprays its data outwards and any number of receivers can read it, so your trainer can feed Zwift, a bike computer and a second app at the same time. A Bluetooth sensor channel is normally one-to-one - whichever device grabs it first owns it. That single fact explains most "Zwift can't see my heart rate" problems: the strap is already connected to a phone app or a head unit on the desk. On a PC, an ANT+ dongle on a short USB extension cable hanging near the bike is the most reliable arrangement I've used. The Companion bridge exists for the opposite case - a device such as an Apple TV that holds only a limited number of Bluetooth accessories, so the phone connects to the sensors and relays them into the game.
        </p>

        <h3 className="text-xl font-bold mb-3">Why signals drop, and what to do</h3>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li><strong>USB 3.0 ports.</strong> They emit broadband noise in the 2.4 GHz band, which is exactly where ANT+ lives. An ANT+ dongle plugged in next to a USB 3.0 port can be deaf. Move it to a USB 2.0 port, or put it on a 1-2 m extension cable near the bike.</li>
          <li><strong>You.</strong> 2.4 GHz radio is absorbed by water and you are mostly water. A dongle on the far side of a laptop that sits behind you has to transmit through your torso. Line of sight to the trainer fixes more dropouts than any driver update.</li>
          <li><strong>A second app holding the connection.</strong> Close the trainer manufacturer's app and switch off any head unit before launching Zwift.</li>
          <li><strong>A dying coin cell in the HR strap.</strong> The first symptom isn't silence, it's dropouts and implausible spikes when you start sweating and drawing current. Replace the battery before you replace the strap.</li>
          <li><strong>Congested Wi-Fi.</strong> A busy 2.4 GHz Wi-Fi channel competes with your sensors. Put the computer on 5 GHz.</li>
        </ul>
        <p className="mb-4">
          A quick diagnostic: if your power flatlines but cadence keeps updating, only the power channel dropped. If every field freezes, the link or app has gone. If your data looks fine but your avatar stalls or teleports, the problem is the internet rather than the sensors - which is a different failure mode, covered in the piece on{" "}
          <Link to="/blog/zwift-network-performance" className="text-zwift-orange hover:underline">Zwift network performance</Link>.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">5. The Environment - Your Pain Cave Setup</h2>
        <p className="mb-4">
          Now that hardware is sorted, let's talk environment. Riding indoors can generate a <em>lot</em> of heat and sweat. So two absolutely crucial (yet often overlooked) items are: <strong>A Fan (or two)</strong> - Indoor cooling is a game changer. Unlike riding outside, indoors you have no wind to whisk away heat, so you overheat quickly which saps performance. A strong fan is your best friend. Many Zwifters use high-powered blower fans (like Lasko fans) and position them in front. ZwiftInsider humorously asks "How much fan do you need?" - basically, <em>a lot</em>, because cooling makes workouts way more comfortable{" "}
          <a href="https://zwiftinsider.com/getting-started-smart-trainer" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[5]</em>
          </a>
          . <strong>Sweat Protection</strong> - You will sweat. Buckets. Set up your area accordingly. Put an old mat or towel under the bike to catch drips and protect the floor (yoga mat or trainer mat works). Have a <strong>towel</strong> draped over your handlebars or nearby to wipe sweat off your face and arms periodically. Consider a <strong>sweat guard</strong> (a piece of fabric that straps between handlebars and seatpost) to protect your bike frame from corrosive sweat - optional, a towel can serve similarly. Definitely keep electronics away from puddles - don't put your laptop right under you; sweat+electronics = no bueno.
        </p>

        <h3 className="text-xl font-bold mb-3">How much fan is enough, and where to point it</h3>
        <p className="mb-4">
          The physics settles the argument. Only sweat that <em>evaporates</em> cools you - sweat that drips onto the mat removed almost no heat at all. Evaporating water absorbs roughly 2,400 kJ per kilogram, so shedding the ~900 W of waste heat from a 250 W effort by evaporation alone means evaporating something like 1.3 litres of sweat an hour. That only happens if the humid layer sitting on your skin is continuously stripped away and replaced with drier air. That is a fan's whole job: not a nice breeze, but keeping the vapour pressure at your skin low enough for evaporation to keep going.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li><strong>Fan one:</strong> in front, chest-to-face height, angled slightly upward. Face and head cooling has an outsized effect on how hard an effort feels, so this is the fan that changes perceived exertion.</li>
          <li><strong>Fan two:</strong> lower and off to one side, aimed at thighs and lower back - the largest wet area, and where the heat is produced. The second fan is what turns 2x20 at threshold from survivable into repeatable.</li>
          <li><strong>The room:</strong> two fans recirculating in a sealed 8 m² room eventually stop working, because near-saturated air evaporates nothing however fast you move it. Open a window or a door. The goal is to <em>replace</em> the air, not stir it - one fan with a window open beats two fans in a closed cupboard.</li>
        </ul>

        <h3 className="text-xl font-bold mb-3">What sweat does to a bike over a winter</h3>
        <p className="mb-4">
          Sweat is salty and slightly acidic. Chloride attacks the passive oxide film that protects aluminium and stainless steel, so corrosion starts as pitting under a dried salt crust - out of sight, and it doesn't stop when the ride does. Three places pay first:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li><strong>The stem faceplate and bar clamp.</strong> Salt water wicks into the joint by capillary action and dries there. Steel bolts in an aluminium stem are a galvanic pair, and salt water is a fine electrolyte. That is how bolts seize and faceplates go chalky.</li>
          <li><strong>The upper headset bearing.</strong> Sweat runs down the steerer, past the top cover, and displaces the grease. You won't notice until the steering has a small notch at dead centre, and by then the race is pitted.</li>
          <li><strong>Bar tape.</strong> Tape holds salt against the bar and stays damp for hours after you finish, so the bar underneath spends far more time wet than you do.</li>
        </ul>
        <p className="mb-4">
          The fix is a two-minute routine, every ride, before the shower:
        </p>
        <ol className="list-decimal list-inside mb-4 space-y-2 ml-4">
          <li>Take the towel off the bars and put it in the wash. A wet towel left draped over the frame is worse than no towel at all.</li>
          <li>Wipe bars, stem, top cap, top tube and seatpost clamp with a cloth wrung out in plain water. Water dissolves salt; a dry cloth only spreads it.</li>
          <li>Go over the same surfaces with a dry cloth.</li>
          <li>Leave a fan pointed at the bike for ten minutes while you shower, to dry the joints you can't reach.</li>
          <li>Once a season, remove the stem faceplate and top cap, clean the bolts, and re-grease the threads and bolt heads.</li>
        </ol>
        <p className="mb-4">
          There's a longer treatment of towel placement and what to wipe versus what to leave alone in{" "}
          <Link to="/blog/towels-during-zwifting-can-it-ruin-your-bike" className="text-zwift-orange hover:underline">Towels During Zwifting: Can It Ruin Your Bike?</Link>
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">6. Comfort Items</h2>
        <p className="mb-4">
          To make your indoor ride enjoyable, think about a few extras: <strong>Floor Mat</strong> - A rubber mat under you not only catches sweat, it dampens vibration and noise - nice if you live above someone or have noise concerns. <strong>Riser Block</strong> - This is a small block or stand for your front wheel that keeps the bike level and stable (especially for wheel-on trainers). Many trainers come with one. <strong>Table or Desk</strong> - You'll likely want your phone, water, maybe keyboard nearby. Some companies sell trainer-specific desks (like Wahoo's desk) that roll in front of your bike. But a simple small table or music stand can do the trick{" "}
          <a href="https://zwiftinsider.com/getting-started-smart-trainer" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[6]</em>
          </a>
          . <strong>Headphones or Speaker</strong> - Many folks like to listen to music, or the in-game sounds, or Discord chat with friends while Zwifting. A good pair of wireless earbuds can be great so you don't have wires dangling while you pedal{" "}
          <a href="https://zwiftinsider.com/getting-started-smart-trainer" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[7]</em>
          </a>
          . <strong>Proper Kit</strong> - You can Zwift in any clothes theoretically, but a pair of cycling shorts with padding (chamois) will save your butt literally. Since you're stationary, pressure on the saddle can be higher - good shorts and maybe chamois cream if you ride long sessions.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">7. Final Touches - Software &amp; Accounts</h2>
        <p className="mb-4">
          Make sure you have a <strong>Zwift account</strong> (sign up on their website; new users usually get a free trial period){" "}
          <a href="https://zwiftinsider.com/getting-started-smart-trainer" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[8]</em>
          </a>
          . Download the Zwift app on your device. It's also a great idea to install the <strong>Zwift Companion</strong> app on your smartphone - this acts as a secondary screen showing maps, lets you chat, give Ride-Ons, and more. One more thing: maybe have a <strong>Strava</strong> account or other fitness app if you want to save and share your rides - Zwift can auto-upload to Strava, TrainingPeaks, etc., which many people enjoy to track progress.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Three builds that make sense</h2>
        <p className="mb-4">
          Quoting prices in an article is a good way to be wrong within a year, so here's what each level buys you instead.
        </p>
        <p className="mb-4">
          <strong>The "use what I already own" build.</strong> Wheel-on smart trainer, the bike from the garage, a phone or tablet on a music stand, one strong household fan, an old bath mat and a towel. You get the whole game: gradient changes, ERG workouts, races, route badges. You give up power that agrees with anyone else's, you give up quiet, and you give up hard sprints without the tyre slipping. A perfectly reasonable first winter - and the fan is the part not to compromise on.
        </p>
        <p className="mb-4">
          <strong>The "indoors all winter, every winter" build.</strong> Direct-drive smart trainer with a cassette matched to your bike, a screen you can read from the saddle, two fans, a proper mat, a sweat cover and a heart rate strap. You get power you can compare season to season, a flywheel heavy enough that an 8% ramp feels like one, and enough cooling that threshold intervals end when your legs say so rather than when the room does. This is where the setup stops being the limiter, and where most riders should stop spending.
        </p>
        <p className="mb-4">
          <strong>The "this is my main bike" build.</strong> Smart bike, a permanent screen at eye height, two or three fans with one at head height, a rocker plate, a fixed desk and a room you can ventilate. You get virtual gearing, no bike to swap in and out, no drivetrain to rinse, and a fit that stays where you left it. It earns its keep if two people ride it, or if you ride indoors more than out. If you are chasing speed rather than comfort, read{" "}
          <Link to="/blog/zwift-equipment-optimization-aerodynamics" className="text-zwift-orange hover:underline">Zwift Equipment Optimization</Link>{" "}
          first - in-game frame and wheel choices move your times more than most hardware upgrades do.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Ready to Ride</h2>
        <p className="mb-4">
          Once everything is set - bike on trainer, sensors paired, fan on - it's time to Zwift. Expect to adjust things for a few sessions: if knees or back complain, check the fit numbers above before you blame the trainer, and move the screen until you can read it without leaning. When you want a first real target, the Alpe is the obvious one - the{" "}
          <Link to="/blog/conquer-alpe-du-zwift" className="text-zwift-orange hover:underline">pacing guide</Link>{" "}
          covers how to ride its 21 hairpins without blowing up in the first three.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="mb-4">
          The essentials are a solid trainer, a bike, a device to run Zwift and good cooling. If you remember one thing from all of this, remember that the cooling comes first, because it decides how many of your watts survive to the end of the session. Everything after that is refinement. Get those four right and you can be riding within minutes of deciding to - no traffic, no weather, no excuses. Ride On!
        </p>
      </div>

      <div className="border-t pt-6 mt-8">
        <h3 className="text-xl font-bold mb-4">Sources</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          <li>
            <a href="https://zwiftinsider.com/getting-started-smart-trainer" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
              [1-8] Zwift Insider - Getting Started with Smart Trainer
            </a>
          </li>
          <li>
            Times in the accuracy table come from this site's Alpe du Zwift model, time_seconds = 148.60*(W/kg)^2 - 1954.08*(W/kg) + 8329.87. The heat and evaporation figures are first-approximation estimates from standard gross cycling efficiency (20-25%) and the latent heat of vaporisation of water, not measurements from my own pain cave.
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <BlogPost
      title="Zwift Setup Guide: Essential Gear for Your Ultimate Indoor Pain Cave"
      date="12-11-2025"
      content={content}
    />
  );
};

export default ZwiftSetupGuide;
