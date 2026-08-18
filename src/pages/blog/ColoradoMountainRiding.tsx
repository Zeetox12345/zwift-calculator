import { Link } from "react-router-dom";

import BlogPost from "@/components/BlogPost";

const ColoradoMountainRiding = () => {
  const content = (
    <div className="space-y-8">
      {/* Introduction */}
      <div>
        <p className="mb-4 text-lg leading-relaxed">
          Altitude takes power away before you turn a pedal, and no amount of indoor training gives it back.
        </p>
        <p className="mb-4">
          That is the uncomfortable starting point for anyone planning a mountain trip. You can arrive in the best
          form of your life and still find yourself riding 10% below the numbers you have spent all winter building,
          for reasons that have nothing to do with fitness and everything to do with the air.
        </p>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/colorado_1_1.webp"
            alt="Mountain road climbing towards a high pass"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          I use Colorado as the example because it is the trip a lot of riders make: passes well above 3,000 m,
          reachable by ordinary amateurs, with a strong tradition of people going out too hard on day one. I have
          not ridden there. What I can do is the arithmetic on what thin air costs, what does and does not transfer
          from indoor training, and how to set a target that is not a fantasy.
        </p>
      </div>

      {/* What altitude costs */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What thin air actually costs</h2>
        <p className="mb-4">
          The air at altitude is not short of oxygen as a proportion. It is still about 21% oxygen at 3,000 m, the
          same as at sea level. What has changed is the pressure driving that oxygen across your lung membranes.
        </p>
        <p className="mb-4">
          Barometric pressure at sea level is around 1,013 hPa. At 3,000 m it is around 700 hPa, roughly 69% of it.
          The oxygen fraction is unchanged, so the partial pressure of oxygen falls in the same proportion, and it
          is partial pressure, not percentage, that determines how much oxygen ends up in your blood.
        </p>
        <p className="mb-4">
          The broadly accepted figure in exercise physiology is that maximal oxygen uptake declines by somewhere
          around 6 to 8% per 1,000 m above roughly 1,500 m. It is a range rather than a constant because individual
          responses vary enormously, and it is not something measured on this site. Taken at face value it puts a
          rider at 3,000 m somewhere in the region of 9 to 12% down on their sea-level ceiling.
        </p>
        <p className="mb-4">
          Sustained sub-threshold power is affected less than maximal efforts are, which is genuinely good news and
          which shapes everything below.
        </p>
      </div>

      {/* What that costs in minutes */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What a 10% power loss is worth in minutes</h2>
        <p className="mb-4">
          Percentages are hard to feel. This site has a fitted curve for Alpe du Zwift built from about 500 verified
          finishing times, and although the Alpe is a virtual climb at virtual sea level, the curve is a perfectly
          good translator from a power change into a time change on a long climb. The methodology is written up in{" "}
          <Link to="/blog/regression-analysis-methodology" className="text-zwift-orange hover:underline">
            the regression article
          </Link>
          .
        </p>
        <div className="my-6 p-4 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-sm mb-3">
            time in seconds = 148.60 &times; (W/kg)&sup2; &minus; 1954.08 &times; (W/kg) + 8329.87
          </p>
          <p className="text-sm mb-2">
            <strong>At 3.20 W/kg:</strong> about 59:58, the familiar sub-hour benchmark
          </p>
          <p className="text-sm mb-2">
            <strong>At 2.88 W/kg,</strong> which is 10% less power: about <strong>65:35</strong>
          </p>
          <p className="text-sm text-muted-foreground">
            A 10% power loss costs roughly 5 minutes 36 seconds on a climb of this length. On a longer mountain pass
            it costs proportionally more.
          </p>
        </div>
        <p className="mb-4">
          That is the number to plan around. Not "I will be a bit slower", but "the climb I have been imagining as a
          one-hour effort is a sixty-five to seventy minute effort, and I should pace it as one".
        </p>
        <p className="mb-4">
          The equation is a model of a specific virtual climb, so treat this as a translation aid rather than a
          prediction of your time on a real mountain. What it gets right is the shape: a small power loss costs more
          time than people expect, and it costs more the slower you already are.
        </p>
      </div>

      {/* Heart rate */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Your heart rate stops meaning what it used to</h2>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/colorado_1_2.webp"
            alt="High alpine landscape above the treeline"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          This is the single most practically important thing to understand before a mountain trip, and it is where
          riders who train by heart rate get into trouble fastest.
        </p>
        <p className="mb-4">
          At altitude, less oxygen arrives per unit of blood, so your body moves more blood to compensate. Your
          heart rate at any given power is therefore higher than it would be at sea level. Meanwhile your maximum
          heart rate tends to be slightly lower. The whole scale has been squashed and shifted, and the zones on
          your head unit are describing a rider who is not currently present.
        </p>
        <p className="mb-4">
          The practical consequences, in order of how much trouble they cause:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>Riding to your sea-level heart rate zones will have you going too hard.</strong> The same
            perceived zone is now a harder effort in real terms.
          </li>
          <li>
            <strong>Power is the more honest guide,</strong> if you have it, because a watt is a watt regardless of
            the air. It just costs you more.
          </li>
          <li>
            <strong>Perceived effort is the most honest of all.</strong> On a first mountain trip I would ride to
            breathing and legs, and treat both screens as information rather than instruction.
          </li>
        </ul>
      </div>

      {/* What transfers */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The one thing that genuinely transfers</h2>
        <p className="mb-4">
          You cannot train the altitude response indoors. Zwift does not simulate air density, hypoxic tents are a
          different subject entirely, and nothing about a garage in a lowland country prepares your blood chemistry
          for 3,000 m.
        </p>
        <p className="mb-4">
          What does transfer, completely, is the ability to hold a sub-threshold effort for a very long time without
          it degrading. And that turns out to be most of what a mountain pass asks for, because the pass is going to
          force you to ride sub-threshold whether you planned to or not.
        </p>
        <p className="mb-4">
          This reframes the whole preparation. A rider heading to the mountains does not need more VO2 work. They
          need to be extremely comfortable at 65 to 80% of FTP for two hours at a time, because that is the effort
          a long climb at altitude will permit, and the person who can sit there calmly will ride past the person
          with the higher ceiling who cannot.
        </p>
      </div>

      {/* The block */}
      <div>
        <h2 className="text-2xl font-bold mb-4">A Zwift block for mountain preparation</h2>
        <p className="mb-4">
          Eight weeks, three key sessions a week, everything else easy. The bias is deliberately towards long
          sustained work rather than intensity.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 pr-4 font-semibold">Session</th>
                <th className="text-left py-2 pr-4 font-semibold">What it is</th>
                <th className="text-left py-2 font-semibold">Why it is in here</th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-medium">Long climb</td>
                <td className="py-2 pr-4">
                  Alpe du Zwift or Ven-Top, ridden whole at a genuinely steady effort
                </td>
                <td className="py-2">
                  Rehearses an hour or more of uninterrupted climbing, which almost nothing else does
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-medium">Sustained tempo</td>
                <td className="py-2 pr-4">
                  3 &times; 20 min at 75 to 85% of FTP, building to 2 &times; 40 min
                </td>
                <td className="py-2">Builds the ability to sit in the zone the mountain will hand you</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Long endurance</td>
                <td className="py-2 pr-4">2 h 30 to 4 h, easy, fuelled properly</td>
                <td className="py-2">Durability, and rehearsal of eating on a long day</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          Ride the long climb sessions on the actual climbs rather than on a flat route at climbing power. The
          gradient changes your position, your cadence and where the effort sits, and none of that is reproduced by
          a flat road. There is a longer argument for this in{" "}
          <Link to="/blog/zwift-route-selection-psychology" className="text-zwift-orange hover:underline">
            the route selection article
          </Link>
          .
        </p>
        <p className="mb-4">
          If you want a target for the block, take your intended climb, estimate the sustained power you think you
          can hold for it, subtract 10%, and make that number comfortable for ninety minutes indoors. If you can do
          that, you will get up the pass.
        </p>
      </div>

      {/* Acclimatisation */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The first few days at altitude</h2>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/colorado_1_3.webp"
            alt="Cyclist on a high mountain road"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          Acclimatisation is a real physiological process and it is not fast. The broad picture, which is well
          established and not controversial:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>Days 1 to 3 are the worst.</strong> Breathing rate is up, sleep is often poor, and performance
            is at its lowest. Riding hard here is close to pointless.
          </li>
          <li>
            <strong>The first week brings partial adaptation.</strong> Plasma volume adjusts, breathing settles, and
            things start feeling more normal.
          </li>
          <li>
            <strong>Full adaptation takes weeks.</strong> Longer than any normal holiday, so plan around being
            partly adapted rather than fully.
          </li>
          <li>
            <strong>Hydration needs go up.</strong> Dry air and higher breathing rates mean more fluid lost through
            respiration alone.
          </li>
        </ul>
        <p className="mb-4">
          If your trip includes a big objective, put it late in the week rather than early. The version of you that
          arrives on day six is meaningfully better than the one that landed on day one.
        </p>
        <p className="mb-4">
          If you feel genuinely unwell rather than simply unfit, that is altitude sickness and it is a medical
          matter rather than a training one. Descending is the treatment, and it is not something to negotiate with.
        </p>
      </div>

      {/* Gearing */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Gearing, which decides whether you ride or walk</h2>
        <p className="mb-4">
          This is the most under-considered part of a mountain trip and it is entirely solvable with arithmetic
          before you travel. Indoors a bad gear choice is an annoyance. On a real 10% ramp at 3,000 m it is the
          difference between turning the pedals and pushing the bike.
        </p>
        <p className="mb-4">
          Work it out in two steps. First, how fast will you actually be going? On a climb, nearly all your power
          goes into lifting your mass, so speed is roughly power divided by the weight being lifted per second:
        </p>
        <div className="my-6 p-4 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-sm mb-3">v &asymp; P &divide; (m &times; g &times; gradient)</p>
          <p className="text-sm mb-2">
            A 75 kg rider at sea level holding 225 W on 8%: 225 &divide; (75 &times; 9.81 &times; 0.08) &asymp; 3.8
            m/s, about <strong>13.8 km/h</strong>
          </p>
          <p className="text-sm mb-2">
            The same rider at altitude, 10% down at 202 W, on a 10% ramp: 202 &divide; (75 &times; 9.81 &times;
            0.10) &asymp; 2.7 m/s, about <strong>9.9 km/h</strong>
          </p>
          <p className="text-sm text-muted-foreground">
            Rolling resistance and drag shave a little off both, so treat these as slightly optimistic.
          </p>
        </div>
        <p className="mb-4">
          Now turn that into a cadence. A 700c wheel with a 25 mm tyre rolls about 2.1 m per revolution, so the
          distance you travel per pedal stroke is 2.1 multiplied by your chainring divided by your sprocket.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 pr-4 font-semibold">Gearing</th>
                <th className="text-left py-2 pr-4 font-semibold">Metres per pedal stroke</th>
                <th className="text-left py-2 font-semibold">Cadence at 9.9 km/h</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">34 &times; 28</td>
                <td className="py-2 pr-4">2.55 m</td>
                <td className="py-2">about 65 rpm</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">34 &times; 32</td>
                <td className="py-2 pr-4">2.23 m</td>
                <td className="py-2">about 74 rpm</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">34 &times; 34</td>
                <td className="py-2 pr-4">2.10 m</td>
                <td className="py-2">about 79 rpm</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          Sixty-five rpm on a 10% gradient, an hour into a climb, at altitude, is a genuinely unpleasant place to
          be. It is high force per stroke, it recruits fast-twitch fibres you would rather save, and it is the
          classic route to cramping. The same rider on a 34 &times; 34 is spinning at nearly 80 rpm at the identical
          speed and effort, and will arrive at the top in far better condition.
        </p>
        <p className="mb-4">
          Run these numbers for the steepest gradient on your intended route, using your altitude-adjusted power.
          If the answer is below about 70 rpm, change your cassette before you travel. It is the cheapest
          performance improvement available on the entire trip.
        </p>
      </div>

      {/* Honest limits */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What indoor training cannot help with at all</h2>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>The altitude response itself.</strong> Nothing on a trainer touches it.
          </li>
          <li>
            <strong>Descending a mountain pass.</strong> Long, cold, fast, and demanding in a way that has nothing
            to do with fitness.
          </li>
          <li>
            <strong>Temperature swings.</strong> A summit can be twenty degrees colder than the valley you left.
            That is a clothing problem and it is a serious one.
          </li>
          <li>
            <strong>Gearing.</strong> Indoors, a bad gear choice is an inconvenience. On a real 10% ramp at 3,000 m
            it decides whether you are riding or walking. Work out your gearing before you travel.
          </li>
        </ul>
      </div>

      {/* The example */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The example itself</h2>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/colorado_1_4.webp"
            alt="Summit view over a mountain range"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          Colorado's road passes reach well above 3,000 m, with several paved climbs topping out higher than
          anything in the Alps, and the towns riders base themselves in are frequently at 2,000 m or more, which
          means you are at altitude before you start climbing. Weather changes fast at elevation and afternoon
          storms are a recurring theme in every account I have read, which is the usual reason for the advice to
          start early.
        </p>
        <p className="mb-4">
          Beyond that I would be inventing local knowledge, and this site's{" "}
          <Link to="/editorial-policy" className="text-zwift-orange hover:underline">
            editorial policy
          </Link>{" "}
          exists partly to stop me doing that. For the roads themselves, ask someone who rides them.
        </p>
        <div className="my-8">
          <p className="text-xl font-semibold mb-4 text-foreground">Riders who have actually been there</p>
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/6NECDeWhpL8"
              title="Cycling in the Colorado mountains"
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
            Air at 3,000 m is still 21% oxygen, but at about 69% of sea-level pressure, and pressure is what moves
            oxygen into your blood.
          </li>
          <li>
            Expect roughly 9 to 12% off your ceiling at 3,000 m. On this site's Alpe curve, a 10% power loss is
            about 5 minutes 36 seconds on a one-hour climb.
          </li>
          <li>Heart rate zones lie at altitude. Ride to power or to breathing, not to your sea-level zones.</li>
          <li>
            The altitude response cannot be trained indoors. Sustained sub-threshold durability can, and it is most
            of what a pass demands.
          </li>
          <li>Days one to three are the worst. Put the big objective late in the trip.</li>
          <li>
            Run the gearing arithmetic before you travel. If your steepest gradient puts you under about 70 rpm,
            fit a bigger cassette. It is the cheapest gain available on the whole trip.
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
          description: "Translate a power change into a time change on a long climb",
        },
        {
          name: "Climb Time Calculator",
          path: "/zwift-climb-time-calculator",
          description: "Point the physics model at a climb of your own dimensions",
        },
      ]}
    />
  );
};

export default ColoradoMountainRiding;
