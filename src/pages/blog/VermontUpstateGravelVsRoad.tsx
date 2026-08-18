import { Link } from "react-router-dom";

import BlogPost from "@/components/BlogPost";

const VermontUpstateGravelVsRoad = () => {
  const content = (
    <div className="space-y-8">
      {/* Introduction */}
      <div>
        <p className="mb-4 text-lg leading-relaxed">
          Gravel is not road riding that happens to be harder. It is a different shape of effort, and that changes
          which sessions actually prepare you for it.
        </p>
        <p className="mb-4">
          Riders planning a first gravel trip usually train for it the way they train for everything else, then find
          the ride demands something their preparation never asked for. The distance was right. The elevation was
          right. The problem was that the power file of a gravel day looks nothing like the power file of a road
          day, even when the averages match.
        </p>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/vermont_1_1.webp"
            alt="Gravel road running through wooded countryside"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          Vermont and upstate New York are the example, because that region genuinely offers both in the same place
          and forces the choice. I have not ridden there. What follows is about the physics of the surface and the
          training that follows from it, which travels perfectly well.
        </p>
      </div>

      {/* The rolling resistance arithmetic */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What the surface actually costs you</h2>
        <p className="mb-4">
          Start with the part that can be calculated rather than asserted. Rolling resistance is a force that
          depends on the coefficient of rolling resistance, the mass, and gravity:
        </p>
        <div className="my-6 p-4 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-sm mb-3">
            F<sub>rolling</sub> = C<sub>rr</sub> &times; m &times; g &nbsp;&nbsp;&nbsp; and &nbsp;&nbsp;&nbsp; P = F
            &times; v
          </p>
          <p className="text-sm mb-2">
            Take 85 kg of rider and bike, travelling at 25 km/h, which is 6.94 m/s.
          </p>
          <p className="text-sm mb-2">
            <strong>Good road tyre on asphalt,</strong> C<sub>rr</sub> around 0.004: force 3.34 N, so about{" "}
            <strong>23 W</strong>
          </p>
          <p className="text-sm mb-2">
            <strong>Gravel tyre on loose gravel,</strong> C<sub>rr</sub> around 0.012: force 10.0 N, so about{" "}
            <strong>69 W</strong>
          </p>
          <p className="text-sm text-muted-foreground">
            A difference of roughly 46 W at the same speed, before anything else is taken into account.
          </p>
        </div>
        <p className="mb-4">
          Forty-six watts is a large number. For a rider with an FTP of 250 W it is nearly a fifth of threshold,
          spent purely on the surface. This is why a gravel ride at the same average speed as a road ride is a
          substantially harder day, and why gravel riders talk about distance so differently.
        </p>
        <p className="mb-4">
          Those coefficients are typical published values rather than measurements taken here, and real gravel
          varies enormously. Hardpack is close to asphalt. Deep loose stuff is far worse than 0.012. The point is
          the order of magnitude: the surface is not a detail, it is one of the largest terms in the equation.
        </p>
      </div>

      {/* What else changes */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Three other things that change with the surface</h2>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/vermont_1_2.webp"
            alt="Quiet paved road through rolling farmland"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>

        <h3 className="text-xl font-semibold mb-3 mt-6">Power becomes spiky whether you like it or not</h3>
        <p className="mb-4">
          On tarmac you choose your power. On gravel the surface chooses for you. A loose section, a steep pitch
          where you cannot afford to lose momentum, a rut that has to be powered out of: each one is a short
          involuntary surge. Over five hours those surges add up to a meaningful amount of work done above the pace
          you intended.
        </p>
        <p className="mb-4">
          This is the same physiological problem described in the article on{" "}
          <Link to="/blog/new-york-city-by-bike" className="text-zwift-orange hover:underline">
            riding in cities
          </Link>
          , arriving from a completely different direction. Average power looks reasonable. The distribution is what
          tires you out.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">Cadence drops and torque goes up</h3>
        <p className="mb-4">
          Climbing a loose surface means you often cannot spin, because spinning breaks traction. You end up
          grinding at 60 to 70 rpm on gradients where you would happily sit at 85 on tarmac. Same power, more force
          per pedal stroke, and a noticeably different kind of fatigue in the legs afterwards.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">Your upper body does actual work</h3>
        <p className="mb-4">
          Six hours of vibration and steering correction is genuinely fatiguing in the hands, forearms, shoulders
          and neck. Road riding asks for almost none of this, and neither does indoor riding, which is the single
          biggest gap in preparing for gravel on a trainer.
        </p>
      </div>

      {/* Training gravel indoors */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Reproducing gravel demands on Zwift</h2>
        <p className="mb-4">
          Zwift does model surfaces. Dirt and gravel sections carry a higher rolling resistance in-game, and the
          effect on your speed at a given power is real and noticeable, particularly if you are on a road bike in
          the game rather than a gravel one. That helps with the feel and with equipment choice, and there is more
          on the in-game equipment model in{" "}
          <Link to="/blog/zwift-equipment-optimization-aerodynamics" className="text-zwift-orange hover:underline">
            the equipment article
          </Link>
          .
        </p>
        <p className="mb-4">
          What it does not reproduce is the vibration or the involuntary surging. For those you have to build the
          sessions deliberately.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>Over-unders.</strong> 4 &times; 8 minutes alternating 2 minutes at 95% of FTP and 1 minute at
            110%. This is the closest structured equivalent to what a rough surface does to your power file, and it
            trains the specific ability to recover while still working.
          </li>
          <li>
            <strong>Low-cadence torque work.</strong> 5 &times; 5 minutes at 60 rpm at tempo power, on a climb, in
            simulation mode rather than ERG. Builds the force-per-stroke tolerance that a loose climb demands.
          </li>
          <li>
            <strong>Standing repeats.</strong> 10 &times; 1 minute out of the saddle at threshold. Gravel climbing
            involves far more standing than road climbing, and standing is a skill that decays.
          </li>
          <li>
            <strong>Long endurance rides with surges.</strong> Every 10 minutes, 30 seconds hard, then straight back
            to endurance pace without a recovery period. Unpleasant, and closer to a gravel day than any steady ride.
          </li>
        </ul>
        <p className="mb-4">
          Do not use ERG mode for the low-cadence work. ERG holds power by adjusting resistance, so as your cadence
          drops it adds resistance, which drops your cadence further. It fights precisely what you are trying to
          practise.
        </p>
      </div>

      {/* Training road */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Reproducing road demands</h2>
        <p className="mb-4">
          The road version is more straightforward, which is part of why road riders are often better trained for
          their event than gravel riders are for theirs.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>Sustained tempo and threshold.</strong> Long blocks at a steady effort, because that is what
            smooth tarmac permits and rewards.
          </li>
          <li>
            <strong>Long climbs ridden whole.</strong> The Alpe or Ven-Top, at a genuinely steady power.
          </li>
          <li>
            <strong>Aerodynamic position work.</strong> Above about 30 km/h air resistance dominates everything
            else, so time spent getting comfortable low is time well spent. The physics is in{" "}
            <Link to="/blog/zwift-drafting-physics-aerodynamics" className="text-zwift-orange hover:underline">
              the drafting article
            </Link>
            .
          </li>
        </ul>
      </div>

      {/* The crossover */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Why tyres matter more on gravel than position does</h2>
        <p className="mb-4">
          There is one number that explains most of the equipment advice you will ever read about either surface,
          and it is the speed at which air resistance overtakes rolling resistance.
        </p>
        <p className="mb-4">
          Rolling resistance grows in proportion to speed. Air resistance grows with the cube of it. So there is a
          crossover speed below which the surface is your main enemy and above which the air is. Setting the two
          powers equal and solving gives:
        </p>
        <div className="my-6 p-4 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-sm mb-3">
            v<sub>crossover</sub> = &radic;( 2 &times; C<sub>rr</sub> &times; m &times; g &divide; (&rho; &times;
            CdA) )
          </p>
          <p className="text-sm mb-2">
            <strong>Road,</strong> C<sub>rr</sub> 0.004, CdA 0.32, 85 kg: about 4.1 m/s, or{" "}
            <strong>15 km/h</strong>
          </p>
          <p className="text-sm mb-2">
            <strong>Gravel,</strong> C<sub>rr</sub> 0.012, CdA 0.36, 85 kg: about 6.7 m/s, or{" "}
            <strong>24 km/h</strong>
          </p>
          <p className="text-sm text-muted-foreground">
            Using air density 1.225 kg/m&sup3; and typical drag areas for a rider on the hoods.
          </p>
        </div>
        <p className="mb-4">
          On tarmac you are above the crossover almost all the time, which is why road cycling is obsessed with
          position, clothing and wheels. Everything that reduces drag pays, continuously, from 15 km/h upward.
        </p>
        <p className="mb-4">
          On gravel you spend a large fraction of the day below 24 km/h, which flips the priority completely. Below
          the crossover, tyre choice and pressure do more for your speed than any aerodynamic change, and getting
          low on the bars buys you very little. This is the whole reason gravel riders talk endlessly about tyres
          and hardly at all about aero bars.
        </p>
        <p className="mb-4">
          The practical version: on gravel, spend your attention on tyre width and pressure, and run less pressure
          than instinct suggests, because on a rough surface a harder tyre bounces rather than rolls and the
          bouncing costs more than the deformation saves. On road, the same attention is better spent on position.
        </p>
      </div>

      {/* Choosing */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Choosing between them</h2>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/vermont_1_3.webp"
            alt="Fork in a country road between paved and unpaved surfaces"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          The honest framing is not which is harder. It is which kind of day you want, because they fail in
          different ways.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 pr-4 font-semibold"></th>
                <th className="text-left py-2 pr-4 font-semibold">Road</th>
                <th className="text-left py-2 font-semibold">Gravel</th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-medium">Distance for the same effort</td>
                <td className="py-2 pr-4">Longer</td>
                <td className="py-2">Expect 60 to 75% of it</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-medium">Main limiter</td>
                <td className="py-2 pr-4">Aerobic fitness</td>
                <td className="py-2">Durability and handling</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-medium">What ruins the day</td>
                <td className="py-2 pr-4">Traffic and wind</td>
                <td className="py-2">Mechanicals and a poor tyre choice</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-medium">Indoor preparation</td>
                <td className="py-2 pr-4">Transfers well</td>
                <td className="py-2">Transfers partially</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Navigation load</td>
                <td className="py-2 pr-4">Low</td>
                <td className="py-2">High, and it costs real energy</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          If you only have the fitness for one, take gravel at two thirds the distance you would plan on the road.
          That is a rule of thumb from the rolling resistance arithmetic above rather than a measured conversion,
          but it is a great deal closer than planning the same distance for both.
        </p>
      </div>

      {/* Limits */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Where indoor preparation genuinely runs out</h2>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>Handling on a loose surface.</strong> Not simulated, not simulatable, and the thing most likely
            to end your day badly.
          </li>
          <li>
            <strong>Vibration tolerance.</strong> Hands and forearms need actual exposure. There is no indoor
            substitute.
          </li>
          <li>
            <strong>Tyre pressure and choice.</strong> Arguably the highest-leverage decision in gravel riding, and
            entirely absent from indoor training.
          </li>
          <li>
            <strong>Roadside repairs.</strong> Practise a tubeless plug and a tyre boot at home rather than in the
            rain, an hour from anywhere.
          </li>
        </ul>
      </div>

      {/* The example */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The example itself</h2>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/vermont_1_4.webp"
            alt="Autumn countryside with a winding road"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          Vermont and upstate New York are unusual in offering a dense network of both quiet paved roads and
          maintained dirt roads in the same area, which is why the region keeps coming up in this comparison. The
          dirt roads there are generally described as hardpack rather than loose gravel, which puts them nearer the
          better end of the rolling resistance range, and the terrain is consistently rolling rather than flat.
        </p>
        <p className="mb-4">
          That is the limit of what I can tell you honestly. I have not ridden there, and the{" "}
          <Link to="/editorial-policy" className="text-zwift-orange hover:underline">
            editorial policy
          </Link>{" "}
          on this site exists partly to stop me writing local knowledge I do not have.
        </p>
        <div className="my-8">
          <p className="text-xl font-semibold mb-4 text-foreground">Riders who have actually been there</p>
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/qJ3i2cWDs_s"
              title="Gravel and road cycling in Vermont and upstate New York"
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
            At 25 km/h and 85 kg, loose gravel costs roughly 69 W to asphalt's 23 W. The surface is one of the
            biggest terms in the equation, not a detail.
          </li>
          <li>Gravel also makes your power spiky, drops your cadence, and puts real work through your upper body.</li>
          <li>
            Train gravel with over-unders, low-cadence torque work in simulation mode, standing repeats and surge-y
            endurance rides.
          </li>
          <li>Train road with sustained blocks and long climbs ridden whole.</li>
          <li>Plan gravel at about two thirds the distance you would ride on tarmac for the same day.</li>
          <li>
            Air resistance overtakes rolling resistance at about 15 km/h on tarmac and about 24 km/h on gravel,
            which is why tyres matter more than position on gravel and the reverse on road.
          </li>
          <li>Handling, vibration and tyre choice do not transfer from indoors at all.</li>
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
          description: "Set the zones the over-under and torque sessions are written in",
        },
        {
          name: "Climb Time Calculator",
          path: "/zwift-climb-time-calculator",
          description: "Estimate climb times from gradient, length and your power",
        },
      ]}
    />
  );
};

export default VermontUpstateGravelVsRoad;
