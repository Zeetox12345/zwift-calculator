import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";
import { Wifi, AlertCircle, Zap, BarChart3 } from "lucide-react";

const ZwiftNetworkPerformance = () => {

  const content = (
    <div className="space-y-6">
      <div>
        <p className="text-lg text-muted-foreground mb-4">
          I have blamed my internet for losing a wheel more than once, and I was usually wrong. Most of what riders
          call lag is a Bluetooth link falling over, a Wi-Fi band that is too crowded, or a device that has quietly
          throttled because it is hot. This guide covers what Zwift actually sends, what the network can and cannot
          change about your ride, and a diagnostic order you can run in fifteen minutes.
        </p>
      </div>

      <div>
        <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
          <h2 className="text-xl font-bold mb-3 flex items-center">
            <Wifi className="mr-2 text-zwift-orange" size={22} />
            The short version
          </h2>
          <p className="mb-0">
            Zwift moves very little data and cares very little about raw bandwidth. It cares a lot about whether
            packets arrive <em>steadily</em>. Your speed is calculated on your own device, so a bad connection cannot
            slow you on a solo climb. It costs you draft position and sprint placings.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">What Zwift Actually Sends and Receives</h2>
        <p className="mb-4">
          There are two separate links in a Zwift setup, and confusing them is the biggest reason riders misdiagnose
          problems. The first is <strong>sensor to device</strong>. Your trainer, power meter and heart rate strap talk to the
          machine running Zwift over Bluetooth Low Energy or ANT+: a short-range radio link inside your room carrying
          a handful of numbers, typically about once per second. Watts, rpm, heart rate, and on a smart trainer the
          resistance commands going back the other way. The internet is not involved.
        </p>
        <p className="mb-4">
          The second is <strong>device to Zwift's servers</strong>. Your client takes that power number, combines it
          with your weight, the gradient, your equipment and whatever draft it thinks you are in, and computes your
          speed and position. Then it <em>tells</em> the server where you are. In return the server sends down nearby
          riders' position, speed, power and events such as a power-up being used.
        </p>
        <h3 className="text-xl font-bold mb-3">Why this is a small amount of data</h3>
        <p className="mb-4">
          One rider's state is a position, a heading, a speed, a power number, an ID and a few flags - a few dozen
          bytes. Even with 100 nearby riders updating several times a second, my rough estimate puts that around 10 to
          20 kilobytes per second, comfortably under 200 kbps. That is why "I upgraded to gigabit and Zwift still
          stutters" is such a common story: you were never bandwidth limited. A wide pipe with an unreliable drip is
          worse than a narrow reliable one.
        </p>
        <h3 className="text-xl font-bold mb-3">Why packet loss and jitter hurt instead</h3>
        <p className="mb-4">
          Updates arrive discretely, but the game draws a smooth world at 30 or 60 frames per second. Between updates
          your client extrapolates, assuming the rider ahead keeps the speed you last saw. When the next update
          confirms the guess, nothing visible happens. When updates stop for half a second the guess drifts, and the
          correction snaps everything back. That snap is the stutter.
        </p>
        <p className="mb-4">
          Jitter - variation in arrival time rather than the average - is the quiet killer. A steady 120 ms behaves
          better than an average of 40 ms that spikes to 400 ms, because a steady delay can be predicted.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Latency Matters Less Than You Think, Except Where It Matters a Lot</h2>
        <p className="mb-4">
          Here is the part most riders get backwards. Your trainer reports 280 W, your client knows you weigh 75 kg
          and the road tilts at 8.5%, and it solves the physics on your own CPU. The server does not tell you how fast
          you are going - you tell the server. Latency therefore cannot make your avatar slower. It bites only on
          your position <em>relative</em> to someone else.
        </p>
        <h3 className="text-xl font-bold mb-3">Draft position</h3>
        <p className="mb-4">
          Zwift's draft applies only when you are close enough behind another rider, and the useful window is on the
          order of a bike length or two. Your client decides using the last position it received for the rider ahead.
          If that is 150 ms old and the group is doing 45 km/h (12.5 m/s), they have moved about 1.9 m since you had
          good information, roughly a bike length of uncertainty in the measurement that decides whether you get the
          draft. That is why draft feels unreliable on a bad connection even though the
          model has not changed. I cover the model in{" "}
          <Link to="/blog/zwift-drafting-physics-aerodynamics" className="text-zwift-orange hover:underline">Zwift drafting physics</Link>.
        </p>
        <h3 className="text-xl font-bold mb-3">Sprint finishes and reaction time</h3>
        <p className="mb-4">
          A 100 ms round trip is roughly 50 ms in each direction. At 65 km/h, about 18 m/s, that is 0.9 m of position
          uncertainty; at 300 ms it is around 2.7 m. In a sprint decided by half a wheel that is the whole margin, and
          it is why two riders can each be certain they crossed the line first. The same delay stacks on your reaction
          time when someone attacks: see the jump late, respond late, and the gap is open before you start closing it.
          That will not decide a 40-minute climb, but it decides who makes the split. New racers should read the{" "}
          <Link to="/blog/zwift-racing-for-beginners" className="text-zwift-orange hover:underline">racing for beginners guide</Link>{" "}
          first, because positioning matters more than the last 20 ms of ping.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The Realistic Failure Modes, In Order of Frequency</h2>
        <p className="mb-4">
          Sort every "my Zwift is laggy" complaint by root cause and the internet connection is nowhere near the top.
          This is my ordering, based on where the fragile parts sit.
        </p>
        <h3 className="text-xl font-bold mb-3">1. Bluetooth interference between trainer and device</h3>
        <p className="mb-4">
          The most common problem by a wide margin, and the one people least suspect because it does not feel like a
          network issue. BLE runs in the 2.4 GHz band and so does 2.4 GHz Wi-Fi, so your trainer, strap, phone, smart
          lights and router are all shouting in the same room. Symptoms: power dropping to zero, cadence freezing
          while power keeps reading, or a sensor pairing then silently disconnecting.
        </p>
        <p className="mb-4">
          One under-appreciated offender: USB 3.0 ports and cables emit broadband electrical noise that lands on the
          2.4 GHz band. An ANT+ dongle plugged straight into a USB 3 port next to an external SSD can wreck the signal
          on its own.
        </p>
        <h3 className="text-xl font-bold mb-3">2. Wi-Fi congestion on 2.4 GHz</h3>
        <p className="mb-4">
          The 2.4 GHz band has only three non-overlapping 20 MHz channels in most regions, shared with every
          neighbour's router. If your pain cave is in a garage or basement, the device is probably on 2.4 GHz because
          it reaches further - exactly where the contention is. The result is retransmissions, which show up as
          latency spikes.
        </p>
        <h3 className="text-xl font-bold mb-3">3. A device that throttles when it gets hot</h3>
        <p className="mb-4">
          An Apple TV, iPad or thin laptop in a room with a sweating cyclist, and a fan pointed at the rider rather
          than the hardware, heats up and drops its clock speed to protect itself. Frame rate falls and riders call
          that lag. The tell is that it is fine for ten minutes and worsens from there. A genuine network problem does
          not respect a warm-up schedule.
        </p>
        <h3 className="text-xl font-bold mb-3">4. The actual internet connection</h3>
        <p className="mb-4">
          Only now the ISP. Real causes exist: a congested cable segment in the evening, someone starting a large
          upload, a satellite link with inherently high latency, poor routing to your event's region. But it is the
          fourth thing to check, and the only one you cannot fix in an afternoon.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">A Diagnostic Sequence You Can Actually Run</h2>
        <p className="mb-4">
          Test in this order. Each step splits the remaining possibilities roughly in half.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Step</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">What to do</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">What the result tells you</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">1</td>
                <td className="py-2 pr-4">Ride 10 minutes solo, watching the power number, not the avatar.</td>
                <td className="py-2 pr-4">Dropouts mean a sensor link problem. Nothing on the internet can make your own power flicker.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">2</td>
                <td className="py-2 pr-4">Repeat with every other Bluetooth device off and the phone in flight mode.</td>
                <td className="py-2 pr-4">If dropouts stop, it is local 2.4 GHz interference. Add devices back one at a time.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">3</td>
                <td className="py-2 pr-4">Ride 45 minutes and note the minute at which stutter starts.</td>
                <td className="py-2 pr-4">A clean start that degrades steadily points at heat. Put a hand on the device.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">4</td>
                <td className="py-2 pr-4">Run a continuous ping for 5 minutes while riding. Watch the spread, not the average.</td>
                <td className="py-2 pr-4">A stable 60 ms is healthy. A 30 ms average with spikes past 300 ms is a jitter problem.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">5</td>
                <td className="py-2 pr-4">Repeat step 4 on ethernet, or standing next to the router on 5 GHz.</td>
                <td className="py-2 pr-4">If the spikes vanish, the problem is your Wi-Fi link, not your ISP.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">6</td>
                <td className="py-2 pr-4">Repeat step 4 at a different time of day, ideally mid-morning.</td>
                <td className="py-2 pr-4">Evening-only problems that survive a cable point at ISP congestion.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 mt-4">
          By step 5 you have usually eliminated three of the four failure modes and know whether to buy a cable, move
          a dongle or call the provider.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Concrete Fixes</h2>
        <h3 className="text-xl font-bold mb-3">Get off 2.4 GHz Wi-Fi</h3>
        <p className="mb-4">
          Moving the Zwift device to 5 GHz does two things at once: it puts game traffic on a band with more channel
          space and fewer neighbours, and it stops your own Wi-Fi sitting on top of your trainer's Bluetooth. A
          healthy 5 GHz link adds only a couple of milliseconds itself - 2.4 GHz feels slow because of retries, not
          because the radio is laggy. The trade-off is range, so keep the router one wall away or closer.
        </p>
        <h3 className="text-xl font-bold mb-3">Run a cable if you can</h3>
        <p className="mb-4">
          Wired ethernet removes a whole class of problems permanently: no contention, no retries, no interference, no
          roaming between access points mid-ride. If the router is far away, a powerline adapter or a mesh node with
          an ethernet port is plenty.
        </p>
        <h3 className="text-xl font-bold mb-3">Reduce the number of Bluetooth devices in the room</h3>
        <p className="mb-4">
          Every active BLE connection is another radio competing for the same spectrum: trainer, heart rate monitor,
          headphones, phone, watch, smart plug. Pair only what the session needs, and if you use an ANT+ dongle, put
          it on a short USB extension cable so it sits near the trainer and away from the computer's USB 3 noise. Some
          streaming devices also cap how many simultaneous Bluetooth connections they hold - worth checking if you
          keep losing whichever sensor you paired last.
        </p>
        <h3 className="text-xl font-bold mb-3">The Companion app as a bridge - when it helps and when it hurts</h3>
        <p className="mb-4">
          The Zwift Companion app can relay Bluetooth sensors from your phone to the machine running the game. It{" "}
          <strong>helps</strong> when the game device has no usable Bluetooth, sits far from the trainer, or has a
          weak radio: the phone sits 50 cm away and passes the numbers on over your local network.
        </p>
        <p className="mb-4">
          It <strong>hurts</strong> when your local network is the actual problem, because you have added a second
          wireless hop - trainer to phone over BLE, phone to router over Wi-Fi, router to game device. Each hop can
          drop, and the phone can sleep, take a call or throttle. My rule: bridge only for a specific reason, never as
          a first troubleshooting step.
        </p>
        <h3 className="text-xl font-bold mb-3">Keep the device cool</h3>
        <p className="mb-4">
          Point something at the hardware, not only at yourself. Get it off carpet and out of a closed cabinet, and
          elevate a laptop so air reaches the underside. This costs nothing and fixes the third cause on the list. It
          belongs with the physical setup work in{" "}
          <Link to="/blog/zwift-setup-guide" className="text-zwift-orange hover:underline">the Zwift setup guide</Link>{" "}
          and the wider{" "}
          <Link to="/blog/category/setup" className="text-zwift-orange hover:underline">setup collection</Link>.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">What Rubber-Banding and Teleporting Actually Mean</h2>
        <h3 className="text-xl font-bold mb-3">Rubber-banding</h3>
        <p className="mb-4">
          First rule out the innocent explanation: Zwift has a deliberate rubber-banding feature in Meetups and some
          group rides that holds everyone together regardless of power. If nobody can get away, that is a setting, not
          a fault.
        </p>
        <p className="mb-4">
          Network rubber-banding looks different: you surge forward, get pulled back, surge again, on a cycle of about
          one to two seconds. That is your client and the server disagreeing about where you are - your client
          extrapolates you forward, the correction arrives and pulls you back. A regular rhythm points at periodic
          packet loss, typical of Wi-Fi retries or a saturated uplink.
        </p>
        <h3 className="text-xl font-bold mb-3">Teleporting avatars</h3>
        <p className="mb-4">
          If <em>other</em> riders jump around while you move smoothly, you briefly stopped receiving their updates
          and then got a batch at once. Your riding is fine; the picture is stale. If <em>your own</em> avatar
          teleports, your outbound updates are not reaching the server - the more serious direction, because the
          server is scoring your position from old data.
        </p>
        <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
          <h3 className="text-xl font-bold mb-3 flex items-center">
            <AlertCircle className="mr-2 text-zwift-orange" size={22} />
            The one symptom that is never the internet
          </h3>
          <p className="mb-0">
            Power reading zero, or frozen at a fixed number, while your legs are still turning. That is always the
            sensor link. No ISP problem can stop your trainer reporting watts to a device two metres away.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">What a Bad Connection Does Not Do</h2>
        <p className="mb-4">
          This matters because riders quietly discount their own results, and they should not.
        </p>
        <p className="mb-4">
          <strong>It does not change your recorded power.</strong> The watts in your activity file come from your
          trainer through the sensor link, and Zwift writes the activity on your own device. If that link was healthy
          the file is accurate whether your ping was 20 ms or 400 ms.
        </p>
        <p className="mb-4">
          <strong>It does not change your time on a solo climb.</strong> Speed is computed locally from power, weight,
          gradient and equipment. Riding{" "}
          <Link to="/blog/conquer-alpe-du-zwift" className="text-zwift-orange hover:underline">Alpe du Zwift</Link>{" "}
          alone, all 12.2 km and 1,036 m of it, your time is decided by your watts per kilogram and nothing else. The
          fit this site uses puts a 3.2 W/kg rider just under the hour, identical on fibre and on a bad hotel
          connection. Check your own target on the{" "}
          <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">Alpe du Zwift calculator</Link>{" "}
          or run the same maths elsewhere with the{" "}
          <Link to="/zwift-climb-time-calculator" className="text-zwift-orange hover:underline">climb time calculator</Link>.
        </p>
        <p className="mb-4">
          <strong>It does not make you weaker.</strong> 250 W at 75 kg is 3.33 W/kg on any connection. A bad
          connection costs you placings, the free speed of a reliable draft, and the ability to read a race. Those are
          losses in a result, not in fitness, and they do not belong in your training log as a bad day. For what
          actually moves climb times, the numbers in{" "}
          <Link to="/blog/the-data-behind-zwift-climbing" className="text-zwift-orange hover:underline">the climbing data analysis</Link>{" "}
          are a better use of your attention.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Working Targets and Traffic Management</h2>
        <p className="mb-4">
          These are the thresholds I use when judging a connection for racing. They are rules of thumb from riding and
          troubleshooting, not measured research findings.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Metric</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Comfortable</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Usable</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Fix it</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Round-trip latency</td>
                <td className="py-2 pr-4">Under 50 ms</td>
                <td className="py-2 pr-4">50-150 ms</td>
                <td className="py-2 pr-4">Above 250 ms</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Jitter</td>
                <td className="py-2 pr-4">Under 10 ms</td>
                <td className="py-2 pr-4">10-30 ms</td>
                <td className="py-2 pr-4">Above 50 ms</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Packet loss</td>
                <td className="py-2 pr-4">0%</td>
                <td className="py-2 pr-4">Under 1%</td>
                <td className="py-2 pr-4">Above 2%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Download bandwidth</td>
                <td className="py-2 pr-4">5 Mbps and up</td>
                <td className="py-2 pr-4">1-5 Mbps</td>
                <td className="py-2 pr-4">Rarely the issue</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 mt-4">
          Notice how forgiving the bandwidth row is next to the jitter row. That asymmetry is the point of this
          article. The traffic fixes worth doing are the ones that protect against bursts rather than raise the
          ceiling: pause large uploads and cloud backups before a race, since the <em>upstream</em> direction starves
          your position
          updates, and enable your router's queue management or gaming priority setting, which targets the buffer
          bloat behind latency spikes.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Putting It Together</h2>
        <p className="mb-4">
          Check the sensor link before the internet link. Two of the four failure modes live inside your own room and
          cost nothing to fix, one is a fan and a shelf, and only the last involves your provider. Work down the table
          in order and you will find the cause.
        </p>
        <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
          <h3 className="text-xl font-bold mb-3 flex items-center">
            <Zap className="mr-2 text-zwift-orange" size={22} />
            Where to go next
          </h3>
          <p className="mb-4">
            A stable connection pays off most in bunch racing, where it combines with{" "}
            <Link to="/blog/zwift-drafting-physics-aerodynamics" className="text-zwift-orange hover:underline font-semibold">drafting</Link>{" "}
            and{" "}
            <Link to="/blog/zwift-equipment-optimization-aerodynamics" className="text-zwift-orange hover:underline font-semibold">equipment choice</Link>{" "}
            to decide whether you hold the wheel. Knowing when to spend a{" "}
            <Link to="/blog/zwift-powerups-guide" className="text-zwift-orange hover:underline font-semibold">power-up</Link>{" "}
            beats the last 20 ms of ping.
          </p>
          <p className="mb-0 flex items-start">
            <BarChart3 className="mr-2 mt-1 text-zwift-orange shrink-0" size={20} />
            <span>
              How the calculators handle power, weight and terrain is covered on the{" "}
              <Link to="/faq" className="text-zwift-orange hover:underline font-semibold">FAQ page</Link>, and how I
              source and check what I publish is in the{" "}
              <Link to="/editorial-policy" className="text-zwift-orange hover:underline font-semibold">editorial policy</Link>.
            </span>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <BlogPost
      content={content}
    />
  );
};

export default ZwiftNetworkPerformance;
