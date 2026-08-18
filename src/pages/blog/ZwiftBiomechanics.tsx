import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";
import { Activity, AlertTriangle, Target, BarChart3 } from "lucide-react";

const ZwiftBiomechanics = () => {

  const content = (
    <div className="space-y-6">
      <div>
        <p className="text-lg text-muted-foreground mb-4">
          Indoor and outdoor cycling load the body differently, and the difference is mechanical rather than
          physiological. Outdoors the bike moves under you. On a trainer it does not. Almost every ache riders call
          indoor-specific traces back to that one fact.
        </p>
      </div>

      <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <AlertTriangle className="mr-2 text-zwift-orange" size={24} />
          Read this first
        </h2>
        <p className="mb-4">
          This is general information from an engineering and training perspective, not medical advice. I am Christian
          Lassen Dam, an MSc student in Mechanical Engineering at Aalborg University and a long-time Zwift rider. I am
          not a coach, a physiotherapist or a sports scientist, and nothing here diagnoses anything or prescribes
          treatment.
        </p>
        <p className="mb-0">
          Pain that persists, worsens, or does not settle with rest needs a professional who can look at you. The list
          further down of signals that mean stop and get assessed is the important part of this page, not the fine
          print. How this site handles claims is set out in the{" "}
          <Link to="/editorial-policy" className="text-zwift-orange hover:underline font-semibold">editorial policy</Link>.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The core mechanical difference</h2>
        <p className="mb-4">
          An outdoor ride is a sequence of position changes you never consciously decide to make. You lean into corners,
          slide back on descents, sit up to stretch, stand out of a junction, unweight the saddle before bad tarmac,
          coast, move a hand to brake. Each one changes which tissue carries the load: sit bones, then soft tissue, then
          out of the saddle with your legs and hands taking all of it.
        </p>
        <p className="mb-4">
          On a fixed trainer none of that happens for free. The frame is clamped, so it cannot lean and your body has no
          reason to counterbalance. No corners, no potholes, nothing worth coasting down, and Zwift steers for you, so
          all three contact points sit at the same angle under the same pressure for the whole session. The total load
          is not necessarily higher indoors, but the distribution changes: one tissue carries it continuously instead of
          in shifts. Fatigue in materials and irritation in tissue both care about how long a load is held, not only how
          large it is.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Outdoor relief mechanism</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">What it unloads</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Indoor equivalent</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Cornering</td>
                <td className="py-2 pr-4">Moves the saddle contact patch</td>
                <td className="py-2 pr-4">None, without a rocker plate</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Coasting</td>
                <td className="py-2 pr-4">Pedal force to zero, feet unload</td>
                <td className="py-2 pr-4">Rare - you pedal throughout</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Rough surface</td>
                <td className="py-2 pr-4">Instinctive saddle unweighting</td>
                <td className="py-2 pr-4">A perfectly smooth road</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Standing on climbs</td>
                <td className="py-2 pr-4">Saddle pressure to zero</td>
                <td className="py-2 pr-4">Only when you decide to</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Braking, shifting</td>
                <td className="py-2 pr-4">Forces the hands to move</td>
                <td className="py-2 pr-4">Almost never needed</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Airflow at speed</td>
                <td className="py-2 pr-4">Evaporative cooling, whole body</td>
                <td className="py-2 pr-4">Fans hitting part of you</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The three contact points</h2>

        <h3 className="text-xl font-bold mb-3">Saddle</h3>
        <p className="mb-4">
          Your weight, less what the legs and arms carry, rests on a few square centimetres. Blood flow through soft
          tissue is pressure dependent, so sustained pressure reduces perfusion and the tissue starts complaining.
          Outdoors that contact patch is never still for long; indoors it can sit in one place for two hours.
        </p>
        <p className="mb-4">
          Sweat compounds it. Skin kept wet for two hours is softer and abrades more easily than dry skin, and no air
          moves through your shorts on a trainer. That is why the same saddle and shorts that are fine for four hours
          outdoors turn miserable after ninety minutes indoors. The equipment did not change, the conditions did. What
          helps, in rough order of return on effort:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Stand up regularly.</strong> Fifteen seconds takes the pressure to zero and lets blood back in. Free, and it beats anything you can buy.</li>
          <li><strong>A rocker plate.</strong> It lets the bike tilt under you. It does not remove pressure, it moves the contact patch around, which is the missing ingredient.</li>
          <li><strong>Deliberate position variation.</strong> Forward on the nose for hard efforts, back on the wide part for endurance, hands on the tops so the pelvis rotates back.</li>
          <li><strong>Chamois cream.</strong> It lowers friction so skin moves with the shorts rather than against them, and it matters more indoors because the sessions are wetter.</li>
          <li><strong>A fit that suits sustained seated effort.</strong> A position built for aggressive outdoor riding, where you move constantly, can be too much for two unbroken hours. Saddle tilt shifts the balance between sit bones and soft tissue more than people expect, so change one thing and ride it a week before judging.</li>
        </ul>

        <h3 className="text-xl font-bold mb-3">Hands and wrists</h3>
        <p className="mb-4">
          Your hands carry a share of your upper body weight, and two nerves run close to the surface of the palm right
          where the bars press. Sustained pressure there is the usual mechanism behind numbness and tingling in the
          fingers. Outdoors, braking, shifting, standing and bumps move your hands without you thinking. Indoors nothing
          forces it, and with no steering or balance to manage, the arms have no other job, so more weight goes through
          the bars than people realise. The fix is behavioural: rotate through tops, hoods and drops on a schedule,
          shake one hand out, ride hands-free during easy blocks. Padded tape moves the pressure elsewhere rather than
          removing it.
        </p>

        <h3 className="text-xl font-bold mb-3">Feet</h3>
        <p className="mb-0">
          Burning under the ball of the foot, usually 45 to 90 minutes in, comes from three things stacking: the
          forefoot compresses under continuous pedalling force, feet swell during exercise and swell more when hot, and
          no air moves over a shoe on a trainer. Aim a fan low across your feet, loosen the shoes before you think you
          need to, and unclip one foot for a few strokes while soft pedalling. If it recurs, cleat position is worth
          checking with a fitter: moving a cleat rearward shortens the lever arm the forefoot supports. That much is
          mechanically certain, but where your cleat ends up is a question for someone who can watch you pedal.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <BarChart3 className="mr-2 text-zwift-orange" size={24} />
          The knee, cadence and ERG mode
        </h2>
        <p className="mb-4">
          Power is torque multiplied by angular velocity, so at a fixed power, halving cadence doubles pedal force. Take
          250 W on 172.5 mm cranks: at 90 rpm the cranks turn at 9.42 rad/s, torque is 26.5 Nm and the average
          tangential force is about 154 N. At 60 rpm it is 39.8 Nm and about 231 N. Same power, same avatar speed, same
          training log entry, half again as much force through the knee. These are averages over the full stroke, so the
          peak partway through the downstroke, where the crank is closest to horizontal, is considerably higher.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Power</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Cadence</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Crank torque</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Average pedal force</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">250 W</td>
                <td className="py-2 pr-4">100 rpm</td>
                <td className="py-2 pr-4">23.9 Nm</td>
                <td className="py-2 pr-4">138 N</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">250 W</td>
                <td className="py-2 pr-4">90 rpm</td>
                <td className="py-2 pr-4">26.5 Nm</td>
                <td className="py-2 pr-4">154 N</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">250 W</td>
                <td className="py-2 pr-4">75 rpm</td>
                <td className="py-2 pr-4">31.8 Nm</td>
                <td className="py-2 pr-4">185 N</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">250 W</td>
                <td className="py-2 pr-4">60 rpm</td>
                <td className="py-2 pr-4">39.8 Nm</td>
                <td className="py-2 pr-4">231 N</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 mb-4">
          Now add ERG mode, which holds the target power whatever your legs do. Drift from 90 rpm to 75 rpm late in an
          interval and ERG does not ease off; it raises resistance to protect the number, so pedal force climbs about 20
          percent at the moment you are least able to control the movement. Keep drifting and the loop feeds itself,
          which is the spiral of death riders talk about. Outdoors the same fatigue just makes you slower and the force
          falls with your speed. The road is self-limiting in a way{" "}
          <Link to="/blog/what-terminology-do-zwifters-use" className="text-zwift-orange hover:underline">ERG</Link>{" "}
          deliberately is not.
        </p>
        <p className="mb-4">
          Volume matters too. Twenty minutes at 90 rpm is roughly 1,800 revolutions at nearly the same joint angle,
          force and speed, whereas twenty minutes of outdoor climbing contains gradient changes, standing efforts and a
          spread of cadences. General principles that reduce the risk:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Vary cadence inside steady blocks.</strong> If the workout says 250 W, spend a few minutes at 95 rpm and a few at 80. The stimulus stays, the loading pattern stops being identical.</li>
          <li><strong>Warm up properly.</strong> The first hard interval should not be the first time that day your knees see high force. Ten to fifteen easy minutes with a couple of short openers is a rule of thumb, not a rule.</li>
          <li><strong>Increase load gradually.</strong> The 10 percent per week guideline is a rough guide, not a validated threshold, but the idea holds: bodies adapt to loads they have seen and object to jumps. That is what the <Link to="/blog/zwift-training-periodization" className="text-zwift-orange hover:underline">periodization guide</Link> is for.</li>
          <li><strong>Ride in simulation mode sometimes.</strong> Alpe du Zwift averages about 8.5 percent over 12.2 km and 1,036 m of gain, but the ramps between its 21 hairpins sit above and below that, so your legs never settle into one pattern. The <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">Alpe du Zwift calculator</Link> shows what it costs in time.</li>
          <li><strong>Watch for asymmetry.</strong> A heuristic, not a diagnosis: if a knee hurts only on the trainer, position and cadence are likelier candidates than training load, because load carries across both.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Neck, shoulders and lower back</h2>
        <p className="mb-4">
          <strong>Neck.</strong> Outdoors your head moves constantly, scanning the road and looking through corners.
          Indoors your eyes lock onto one rectangle. A screen mounted high holds your neck in extension for an hour; one
          that sits low and far away makes you crane forward. Low-level static contraction held for a long time is more
          fatiguing to muscle than larger loads that come and go. Ten-second test: get into your riding position, close
          your eyes, let the neck relax, then open them. Your power number should be readable from that neutral gaze. If
          it is not, move the screen rather than your neck.
        </p>
        <p className="mb-4">
          <strong>Shoulders.</strong> On a clamped bike there is nothing to counterbalance, so the shoulder girdle stops
          working dynamically and just holds. Riders lock their elbows, which sends load into the trapezius and keeps it
          in continuous low-grade contraction. Unlock the elbows, drop the shoulders away from your ears, take a hand
          off the bars.
        </p>
        <p className="mb-0">
          <strong>Lower back.</strong> Sustained forward lean loads lumbar tissue and keeps the hip flexors short.
          Outdoors you break that up by sitting up, coasting and standing; indoors an unbroken hour of forward lean is
          the default. The first response is not to shorten the reach, because a position that is comfortable but offers
          nowhere to move to has the same underlying problem. Sit up on the tops during easy blocks, stand periodically,
          and change the fit only if variation does not fix it. Off-bike strength and mobility work is widely
          recommended for cyclists and is part of my own Ironman training, but I have no data on how much it matters.
        </p>
      </div>

      <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Target className="mr-2 text-zwift-orange" size={24} />
          Vary something every 10 minutes
        </h2>
        <p className="mb-4">
          The trainer removed your involuntary variation, so put it back deliberately. None of this changes the power
          target, so it fits inside a workout.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Time</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Change something</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">0:00</td>
                <td className="py-2 pr-4">Baseline: seated, hands on the hoods</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">0:10</td>
                <td className="py-2 pr-4">Stand 20 to 30 seconds, then sit with hands on the tops</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">0:20</td>
                <td className="py-2 pr-4">Same power, cadence up 10 to 15 rpm for two minutes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">0:30</td>
                <td className="py-2 pr-4">Stand, shake out each hand, sit further back on the saddle</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">0:40</td>
                <td className="py-2 pr-4">Same power, cadence down 10 rpm, focus on a smooth stroke</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">0:50</td>
                <td className="py-2 pr-4">Stand, drink, ride hands-free for 15 seconds if you can</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">1:00</td>
                <td className="py-2 pr-4">Repeat</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 mb-0">
          The schedule does not matter; the principle does. No contact point should hold the same load for a whole
          session. Set a repeating timer, because Zwift is built to hold your attention and an absorbed rider does not
          fidget.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Activity className="mr-2 text-zwift-orange" size={24} />
          Heat: the factor people forget
        </h2>
        <p className="mb-4">
          Riding at 30 km/h outdoors means 30 km/h of air over your whole body, and evaporation is what actually cools
          you. Indoors, airflow is whatever your fans produce over whichever parts of you they point at, so core
          temperature climbs further for the same power. Two things follow. Cardiac drift: as you sweat, plasma volume
          falls, stroke volume falls with it, and heart rate rises to hold the same output, so a heart-rate-zone session
          quietly drifts out of its zone. And perceived effort: the same power feels worse when you are hot, which is a
          large part of why riders test a lower FTP indoors than out. More on that gap in{" "}
          <Link to="/blog/zwift-vs-outdoor-cycling" className="text-zwift-orange hover:underline">Zwift vs outdoor cycling</Link>.
        </p>
        <p className="mb-4">
          I will not claim dehydration causes tendon or joint injuries, because I have not seen evidence that would let
          me say it honestly. The narrower claim I am confident in is that a hot, dehydrated rider two hours in holds
          position more sloppily and pushes through discomfort more readily than a fresh one, and sloppy technique under
          high force is where things go wrong.
        </p>
        <p className="mb-4">
          Measure it instead of guessing. Weigh yourself before and after a long session; what you lost is mostly water,
          and one kilogram is close enough to one litre. It also moves your own maths: a 75 kg rider at 250 W is 3.33
          W/kg, and finishing 1.5 kg lighter puts the same 250 W at 3.40 W/kg. On this site's Alpe fit, roughly 3.2 W/kg
          breaks the hour, so weigh in consistently when a result matters.
        </p>
        <p className="mb-0">
          Practically: one fan on the torso and face, a second low across the feet, drink to thirst and a bit beyond,
          and put a towel over the bars so sweat does not sit on the frame. Sweat is corrosive enough to deserve{" "}
          <Link to="/blog/towels-during-zwifting-can-it-ruin-your-bike" className="text-zwift-orange hover:underline">its own article</Link>,
          and cooling hardware sits with the rest of the pain cave decisions in the{" "}
          <Link to="/blog/category/setup" className="text-zwift-orange hover:underline">setup articles</Link>.
        </p>
      </div>

      <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <AlertTriangle className="mr-2 text-zwift-orange" size={24} />
          Signals that mean stop and see a professional
        </h2>
        <p className="mb-4">
          This is not a diagnosis and not exhaustive. It marks the point to stop guessing from an article and ask
          someone qualified.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Sharp or stabbing joint pain, as opposed to muscular burn. Burn fades a minute or two after you stop; joint pain does not.</li>
          <li>Pain that gets worse through the session rather than easing after the warm-up.</li>
          <li>Pain still present the next morning, or that wakes you at night.</li>
          <li>Knee pain with swelling, new clicking or catching, or a sense the joint might give way.</li>
          <li>Numbness or pins and needles in hands or feet persisting more than a few minutes after you stop.</li>
          <li>Any numbness or altered sensation in the groin or saddle area that does not resolve quickly.</li>
          <li>Lower back pain that radiates down a leg.</li>
          <li>Pain on one side only, appearing without any change in your training.</li>
          <li>Chest pain, unusual breathlessness, dizziness, fainting, or a heart rate that makes no sense for the effort. Stop immediately and seek medical attention.</li>
        </ul>
        <p className="mb-0">
          A physiotherapist or sports doctor can examine you, which no website can. For anything that hurts only on the
          trainer, an experienced bike fitter is often the cheapest useful step, because it addresses the variable that
          actually changed.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The short version</h2>
        <p className="mb-4">
          Outdoors the bike moves under you and your position changes constantly without you deciding anything. On a
          trainer it does not, so the saddle, hands and feet carry the same load continuously, the knees see a narrow
          band of force and cadence, and heat builds because nothing moves air. That does not make indoor training more
          dangerous than road riding - the trainer removes traffic, crashes and descending, which are what put cyclists
          in hospital - but it adds a slow, unrelieved load. The fixes are unglamorous: vary something every ten
          minutes, run a real fan, build volume gradually, and get a fit that suits sitting still. Coming back from time
          off, rebuild duration at easy intensity first and add intensity only after that, so you can tell which one you
          reacted to. And when something matches a stop signal above, stop and see someone.
        </p>
        <p className="mb-0">
          The <Link to="/faq" className="text-zwift-orange hover:underline">FAQ</Link> covers the questions I get most
          often, and you can{" "}
          <Link to="/contact" className="text-zwift-orange hover:underline">send a correction</Link> if something here
          is wrong.
        </p>
      </div>

      <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
        <h2 className="text-2xl font-bold mb-4">Where to go next</h2>
        <p className="mb-0">
          Position only works if the setup supports it. The{" "}
          <Link to="/blog/zwift-equipment-optimization-aerodynamics" className="text-zwift-orange hover:underline font-semibold">equipment optimization guide</Link>{" "}
          and the{" "}
          <Link to="/blog/zwift-setup-guide" className="text-zwift-orange hover:underline font-semibold">pain cave setup guide</Link>{" "}
          cover the trainers, fans and screens behind most of these decisions, and the{" "}
          <Link to="/blog/the-data-behind-zwift-climbing" className="text-zwift-orange hover:underline font-semibold">climbing data analysis</Link>{" "}
          shows what good pacing looks like.
        </p>
      </div>
    </div>
  );

  return (
    <BlogPost
      content={content}
    />
  );
};

export default ZwiftBiomechanics;
