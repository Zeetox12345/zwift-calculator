import { Link } from "react-router-dom";

import BlogPost from "@/components/BlogPost";

const MechanicalEngineeringZwift = () => {
  const content = (
    <div className="space-y-8">
      {/* Intro */}
      <div>
        <p className="mb-4 text-lg leading-relaxed">
          Between the contraction of a muscle fibre and the avatar moving on your screen, your effort crosses six or
          seven interfaces. Every one of them takes a cut, and one of them decides what number you are shown.
        </p>
        <p className="mb-4">
          This is the part of indoor cycling that mechanical engineering is actually useful for, and it is the part
          riders most often get wrong when their numbers disagree with someone else's. If you have ever wondered why
          your trainer and your power meter differ by a few percent, why low cadence feels so different at the same
          wattage, or what exactly Zwift is doing with the figure it receives, this is the chain that answers all
          three.
        </p>
        <p className="mb-4">
          Two companion articles cover the neighbouring ground:{" "}
          <Link
            to="/blog/the-calculus-of-the-pain-cave-a-mechanical-autopsy-of-speed"
            className="text-zwift-orange hover:underline"
          >
            the physics of what makes you fast
          </Link>{" "}
          once the power exists, and{" "}
          <Link to="/blog/regression-analysis-methodology" className="text-zwift-orange hover:underline">
            how this site's prediction models were fitted
          </Link>
          . This one is about the machinery in between.
        </p>
      </div>

      {/* The chain */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The chain, end to end</h2>
        <p className="mb-4">Laid out in order, with what each stage does to the signal:</p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 pr-4 font-semibold">Stage</th>
                <th className="text-left py-2 font-semibold">What happens to your power</th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-medium">Muscle</td>
                <td className="py-2">
                  Chemical energy becomes mechanical work at roughly 20 to 25% efficiency. The rest is heat
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-medium">Pedal and crank</td>
                <td className="py-2">Force becomes torque. This is where the true figure exists</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-medium">Chain and drivetrain</td>
                <td className="py-2">Roughly 2 to 5% lost to friction, depending on condition</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-medium">Cassette and trainer</td>
                <td className="py-2">Whatever arrives is what a trainer can measure</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-medium">The measurement</td>
                <td className="py-2">A number with its own accuracy specification, plus drift</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-medium">Transmission</td>
                <td className="py-2">Sent over ANT+ or Bluetooth, typically about once a second</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Zwift</td>
                <td className="py-2">Treated as truth, and fed into the game's own physics model</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          The last row is the important one. Zwift does not know what you actually produced. It knows what it was
          told, and it treats that as fact. Everything downstream of the measurement, including every estimate on
          this site, inherits whatever error was introduced at that point.
        </p>
      </div>

      {/* Torque and cadence */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Torque and cadence: the same watts, very different loads</h2>
        <p className="mb-4">
          Power is not something your legs produce directly. What they produce is force on a pedal, which becomes
          torque about the bottom bracket, and power is that torque multiplied by how fast the cranks are turning:
        </p>
        <div className="my-6 p-4 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-sm mb-3">P = &tau; &times; &omega;</p>
          <p className="text-sm text-muted-foreground">
            Power in watts, torque in newton metres, angular velocity in radians per second. 90 rpm is 9.42 rad/s.
          </p>
        </div>
        <p className="mb-4">
          Run 250 W through that at two different cadences and the difference is larger than most riders expect.
          Assuming 172.5 mm cranks:
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 pr-4 font-semibold">Cadence</th>
                <th className="text-left py-2 pr-4 font-semibold">Average torque</th>
                <th className="text-left py-2 font-semibold">Average force on the pedal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">90 rpm</td>
                <td className="py-2 pr-4">26.5 N&middot;m</td>
                <td className="py-2">154 N, about 16 kg</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">70 rpm</td>
                <td className="py-2 pr-4">34.1 N&middot;m</td>
                <td className="py-2">198 N, about 20 kg</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">60 rpm</td>
                <td className="py-2 pr-4">39.8 N&middot;m</td>
                <td className="py-2">231 N, about 24 kg</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          Identical power, 50% more force per stroke at 60 rpm than at 90. That is why grinding feels muscular and
          spinning feels cardiovascular: they are genuinely different loads on the tissue, even though the number on
          the screen has not moved.
        </p>
        <p className="mb-4">
          These are averages across a full revolution, and the real picture is spikier still. You cannot apply
          useful force at the top and bottom of the stroke, so the peak torque during the downstroke is well above
          the average, and the numbers above understate what your knee actually experiences.
        </p>
        <p className="mb-4">
          Two practical consequences follow. Low-cadence work is strength work, and should be programmed and
          recovered from as such rather than treated as ordinary tempo. And if your knees complain on climbs,
          cadence is the first thing to look at, well before saddle height.
        </p>
      </div>

      {/* Where power is measured */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Where the power is measured, and why two devices disagree</h2>
        <p className="mb-4">
          This is the single most useful thing in the article, because it resolves an argument that happens
          constantly and has a completely mundane answer.
        </p>
        <p className="mb-4">
          Power meters measure at different points along the chain, and the chain loses energy as it goes. So they
          are not measuring the same quantity:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>Pedal and crank-based meters</strong> measure before the chain. They see the full output of
            your legs.
          </li>
          <li>
            <strong>Hub-based meters</strong> measure after the chain, so drivetrain losses have already been
            subtracted.
          </li>
          <li>
            <strong>Smart trainers</strong> measure after the chain too, and usually infer power from resistance
            and speed rather than measuring torque directly.
          </li>
        </ul>
        <p className="mb-4">
          Chain efficiency is commonly quoted between 95 and 98% depending on cleanliness, lubrication and how
          cross-chained you are. So a crank meter reading 250 W and a trainer reading 242 W are not in conflict.
          They are both right, about different things, and the 8 W gap is the chain.
        </p>
        <p className="mb-4">
          Add each device's own accuracy specification, frequently plus or minus 1 to 2%, and two devices can
          legitimately differ by 4 to 5% while both remain within tolerance. If yours differ by that much, nothing
          is broken.
        </p>
        <div className="my-6 p-4 rounded-lg bg-muted/50 border border-border">
          <p className="text-sm">
            <strong>What follows from this:</strong> pick one device and use it for everything. Consistency matters
            far more than accuracy for tracking your own progress, because a meter reading 3% high still shows a
            genuine improvement as a genuine improvement. Switching devices mid-season is what makes a training
            history uninterpretable.
          </p>
        </div>
      </div>

      {/* Drift */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Drift, and why calibration is not optional on some trainers</h2>
        <p className="mb-4">
          A measurement can be accurate on day one and wrong three months later. Two mechanisms cause this and both
          are mechanical rather than electronic.
        </p>
        <p className="mb-4">
          <strong>Temperature.</strong> A trainer that has been running for twenty minutes is warmer than one that
          has just been switched on, and warmer components deform slightly differently under the same load. This is
          why a spindown calibration is supposed to happen after a warm-up rather than before one. Calibrating cold
          and then riding warm calibrates for a machine that no longer exists.
        </p>
        <p className="mb-4">
          <strong>Belt tension and tyre pressure.</strong> On wheel-on trainers, the force pressing the roller
          against the tyre determines how much of your effort reaches the flywheel. Tyre pressure drops over a
          week, the contact changes, and the reported power drifts with it. This is the main reason wheel-on units
          are less repeatable than direct-drive ones, and it is entirely fixable by checking pressure before every
          ride.
        </p>
        <p className="mb-4">
          Several modern direct-drive trainers need no user calibration at all and say so. If yours does, follow
          the manufacturer's procedure and do it after ten minutes of riding, not before.
        </p>
        <p className="mb-4">
          Practical guidance for the setup around all this is in{" "}
          <Link to="/blog/zwift-setup-guide" className="text-zwift-orange hover:underline">
            the setup guide
          </Link>
          .
        </p>
      </div>

      {/* What Zwift does with it */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What Zwift does with the number</h2>
        <p className="mb-4">
          Once the figure arrives, Zwift runs its own physics. It takes your power, your profile weight and height,
          the in-game weight and drag of your equipment, the gradient and surface you are on, and any draft you are
          receiving, and returns a speed.
        </p>
        <p className="mb-4">
          Two things about that are worth knowing. The first is that your profile weight is an input to the physics
          rather than a display value, so a wrong number there changes your speed, not just your statistics. The
          second is that Zwift has never published the exact values it uses for drag area or rolling resistance,
          which is precisely why the calculators on this site fit curves to recorded finishing times rather than
          modelling the game from first principles. You cannot model a system whose constants are unpublished, but
          you can fit a curve to what it produces.
        </p>
        <p className="mb-4">
          The consequence for the equipment question is covered in{" "}
          <Link to="/blog/zwift-equipment-optimization-aerodynamics" className="text-zwift-orange hover:underline">
            the equipment article
          </Link>
          : in Zwift, a bike is a small set of numbers rather than a machine.
        </p>
      </div>

      {/* Why indoor differs */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Why the same legs make fewer watts indoors</h2>
        <p className="mb-4">
          The chain above explains part of a common complaint, and it is worth separating the parts that are
          measurement from the parts that are real.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>Measurement, not fitness:</strong> if you compare a crank meter outdoors with a trainer
            indoors, several percent of the difference is simply the drivetrain sitting between them.
          </li>
          <li>
            <strong>Real, and thermal:</strong> without a 30 km/h headwind your core temperature climbs, and heart
            rate rises for the same power. This one is genuine and it is the largest effect for most riders.
          </li>
          <li>
            <strong>Real, and mechanical:</strong> a bike locked to a frame cannot move underneath you, so a sprint
            recruits less of your upper body and core. This matters for short efforts far more than for an hour.
          </li>
          <li>
            <strong>Real, and continuity:</strong> outdoors you coast. Indoors you do not, so the same average
            power represents more total work.
          </li>
        </ul>
        <p className="mb-4">
          The fix for the largest of those is a bigger fan, which resolves more indoor power complaints than any
          other single change. The rest is covered in{" "}
          <Link to="/blog/zwift-vs-outdoor-cycling" className="text-zwift-orange hover:underline">
            the comparison of indoor and outdoor riding
          </Link>
          .
        </p>
      </div>

      {/* What this means for the site */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What this means for every number on this site</h2>
        <p className="mb-4">
          Everything the calculators here produce sits downstream of a measurement made by a device with a
          tolerance. The curve behind the Alpe estimate was fitted to times posted by riders whose own trainers had
          their own errors, and it will be applied to a power figure supplied by yours.
        </p>
        <p className="mb-4">
          That is not a reason to distrust the output. It is a reason to read it at the precision it deserves. A 2%
          trainer tolerance on a 3.33 W/kg rider is roughly the same size as the model's own error band, which is
          why{" "}
          <Link to="/blog/the-data-behind-zwift-climbing" className="text-zwift-orange hover:underline">
            the data article
          </Link>{" "}
          argues that knowing your W/kg to better than about a tenth is not realistically available to you.
        </p>
        <p className="mb-4">
          Use the estimate as a target to pace against and a way to compare two scenarios, which is what it is
          genuinely good for. Do not read the seconds.
        </p>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The short version</h2>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>Power is torque times angular velocity, so 250 W at 60 rpm is 50% more pedal force than at 90 rpm.</li>
          <li>
            Crank meters measure before the chain and trainers after it, so a 2 to 5% disagreement is the drivetrain
            rather than a fault.
          </li>
          <li>Pick one measuring device and keep it. Consistency beats accuracy for tracking progress.</li>
          <li>Calibrate after a warm-up, not before, and check tyre pressure on wheel-on trainers.</li>
          <li>
            Zwift treats the number it receives as truth, and every estimate on this site inherits whatever error
            came with it.
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
          name: "Alpe du Zwift Calculator",
          path: "/alpeduzwiftcalculator",
          description: "The fitted curve this whole chain eventually feeds",
        },
        {
          name: "FTP & Training Zones",
          path: "/zwift-ftp-calculator",
          description: "Turn a test on your own device into zones you can use",
        },
      ]}
    />
  );
};

export default MechanicalEngineeringZwift;
