import { Link } from "react-router-dom";

import BlogPost from "@/components/BlogPost";

const SydneyToWollongong = () => {
  const content = (
    <div className="space-y-8">
      {/* Introduction */}
      <div>
        <p className="mb-4 text-lg leading-relaxed">
          The step from a two-hour ride to a five-hour one is not a fitness step. It is a fuelling and pacing step,
          and it catches out riders who are demonstrably strong enough.
        </p>
        <p className="mb-4">
          This comes up most often when someone signs up for their first proper day out: a coastal classic, a
          charity ride, a sportive. They have been riding an hour or two several times a week for a year and they
          are fit. Then the day arrives and something goes wrong at hour three that has nothing to do with the
          numbers they have been training.
        </p>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/australia_2_1.webp"
            alt="Coastal road curving along a cliff edge"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          I use the Sydney to Wollongong ride as the example because it is close to the standard shape of a first
          long day: five-ish hours, coastal, one famous feature, achievable by a normally fit rider who paces it
          properly. I have not ridden it. The preparation is the part I can actually help with, and it is the part
          that decides how the day goes.
        </p>
      </div>

      {/* Why five hours is different */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Five hours is not two hours plus three</h2>
        <p className="mb-4">
          At two hours you can get away with almost anything. You can start too hard and hang on. You can eat one
          bar and finish. You can wear whatever shorts were clean. None of that is true at five.
        </p>
        <p className="mb-4">Roughly in the order they arrive, here is what actually fails:</p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2 pr-4 font-semibold">Roughly when</th>
                <th className="text-left py-2 pr-4 font-semibold">What goes</th>
                <th className="text-left py-2 font-semibold">What actually caused it</th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Hour 2</td>
                <td className="py-2 pr-4">Contact points start talking</td>
                <td className="py-2">Position you have never held this long, not fitness</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Hour 3</td>
                <td className="py-2 pr-4">Power quietly drops, effort feels the same</td>
                <td className="py-2">Carbohydrate deficit that started in hour one</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Hour 3 to 4</td>
                <td className="py-2 pr-4">Appetite disappears entirely</td>
                <td className="py-2">Riding too hard for the gut to keep working</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Hour 4</td>
                <td className="py-2 pr-4">Decisions get worse</td>
                <td className="py-2">Low fuel plus accumulated concentration</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Hour 4 to 5</td>
                <td className="py-2 pr-4">Everything at once</td>
                <td className="py-2">All of the above, compounding</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          Notice that fitness does not appear in the right-hand column. This ordering is my own from long rides and
          from watching people come apart on them, not a measured sequence, but the pattern is consistent enough
          that I would plan around it.
        </p>
      </div>

      {/* The pacing number */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The pacing number, and why it feels insultingly easy</h2>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/australia_2_2.webp"
            alt="Cyclists riding along a coastal highway"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          For a five-hour ride you want to average somewhere around 55 to 65% of FTP. If you do not know your FTP,
          the{" "}
          <Link to="/zwift-ftp-calculator" className="text-zwift-orange hover:underline">
            FTP calculator
          </Link>{" "}
          will turn a 20-minute or ramp test into a number and a set of zones.
        </p>
        <p className="mb-4">
          For a rider with an FTP of 250 W that is 138 to 163 W as a five-hour average. Written down like that it
          looks like almost nothing, and this is precisely why people ignore it. On the road, at hour one, 150 W
          feels like you are being lazy.
        </p>
        <p className="mb-4">
          Two things make that number less silly than it looks. First, it is an average across the whole ride
          including the climbs, so the flat sections have to sit below it for the climbs to fit above it. Second,
          the ride is not five hours of steady effort; it is five hours of terrain, and terrain always costs more
          than the plan.
        </p>
        <p className="mb-4">
          The practical test, and this one is old and reliable, is that you should be able to hold a conversation in
          full sentences for the first three hours. If you cannot, you are riding your five-hour day at your
          three-hour pace, and the last two hours will collect the debt.
        </p>
      </div>

      {/* Fuelling */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Eating: the rate matters more than the total</h2>
        <p className="mb-4">
          The single most common mistake is eating reactively. You feel fine, so you do not eat. Two hours later you
          feel empty, so you eat a lot, and now you have a gut problem on top of a fuel problem.
        </p>
        <p className="mb-4">
          Carbohydrate absorption is rate-limited. You can take in roughly 60 g an hour of a single sugar source,
          and up to about 90 g an hour if the mix combines glucose and fructose, which is why most modern sports
          drinks do exactly that. You cannot bank it in advance and you cannot catch up later. Whatever you missed
          in hour one is gone.
        </p>
        <div className="my-6 p-4 rounded-lg bg-muted/50 border border-border">
          <p className="text-sm mb-2">
            <strong>The rule:</strong> start eating at 30 to 45 minutes, then every 20 to 30 minutes after that,
            whether or not you feel like it.
          </p>
          <p className="text-sm text-muted-foreground">
            Setting a repeating timer is not excessive. At hour four you will not remember, and hour four is when it
            matters most.
          </p>
        </div>
        <p className="mb-4">
          Those absorption ranges are standard sports-nutrition figures, not something measured on this site. The
          practical point stands regardless of where in the range you personally sit: the rate is the constraint,
          and it starts binding from the first hour.
        </p>
      </div>

      {/* Bonking */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What hitting the wall actually is</h2>
        <p className="mb-4">
          Worth understanding properly, because knowing the mechanism tells you both how to avoid it and what to do
          if it happens anyway.
        </p>
        <p className="mb-4">
          Your body stores carbohydrate in two places. Muscle glycogen, somewhere around 300 to 400 g, fuels the
          working muscle and is only available to that muscle. Liver glycogen, around 80 to 100 g, does a completely
          different job: it maintains the glucose concentration in your blood, and your brain runs almost entirely
          on that.
        </p>
        <div className="my-6 p-4 rounded-lg bg-muted/50 border border-border">
          <p className="text-sm mb-2">
            <strong>Heavy legs and falling power</strong> is muscle glycogen running low. Unpleasant, gradual, and
            you can ride through it at reduced output.
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Hitting the wall</strong> is liver glycogen running out and blood glucose falling. Sudden,
            disproportionate, and it feels mental before it feels physical: everything becomes overwhelming, small
            decisions become difficult, and the world narrows.
          </p>
        </div>
        <p className="mb-4">
          Those are different failures and the second one is the frightening one. It is also the one that eating on
          a schedule prevents outright, because liver glycogen is small enough that regular modest carbohydrate
          intake keeps it topped up indefinitely.
        </p>
        <p className="mb-4">
          If it happens: stop, eat something with fast sugar in it, and wait twenty minutes. Do not try to ride
          through it, because you cannot absorb much while working hard and you will simply prolong it. Twenty
          minutes and 60 g of carbohydrate turns a ruined day back into a slow one.
        </p>
        <p className="mb-4">
          The storage figures are standard physiological ranges rather than anything measured here, and they vary
          with training status and body size. The distinction between the two failures is the part worth carrying.
        </p>
      </div>

      {/* The progression */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Building to it on Zwift</h2>
        <p className="mb-4">
          The useful thing about doing this indoors is that a long ride is entirely controllable. No traffic, no
          mechanical stopping you, no getting cold, and your food is three metres away. That makes Zwift a better
          place to rehearse a long day than the road, right up until the point where you need to rehearse being
          outdoors.
        </p>
        <p className="mb-4">
          A six-week build, on top of whatever else you do, with the long ride once a week:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>
            <strong>Week 1:</strong> 2 h at endurance pace. Eat 60 g of carbohydrate an hour even though you do not
            need to. This is a practice run for the eating, not the riding.
          </li>
          <li>
            <strong>Week 2:</strong> 2 h 30. Same fuelling. Note what your saddle has to say at the two-hour mark.
          </li>
          <li>
            <strong>Week 3:</strong> 3 h. This is usually the first ride where boredom becomes the limiter rather
            than the legs. Deal with that now rather than on the day.
          </li>
          <li>
            <strong>Week 4:</strong> 90 min easy. Recovery week.
          </li>
          <li>
            <strong>Week 5:</strong> 3 h 30 to 4 h, with the last hour deliberately at the effort you intend to
            finish the real ride on.
          </li>
          <li>
            <strong>Week 6:</strong> 2 h easy, then the ride itself.
          </li>
        </ul>
        <p className="mb-4">
          You do not need to have ridden five hours to ride five hours. Four is enough, because the last hour on the
          day is carried by the occasion. Three is not enough, in my experience, because three hours is roughly
          where the problems start rather than where they finish.
        </p>
      </div>

      {/* Long indoor rides */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Making a four-hour indoor ride survivable</h2>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/australia_2_3.webp"
            alt="Long coastal road stretching into the distance"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          This is the part nobody warns you about. A four-hour indoor ride is a genuinely different proposition from
          a four-hour outdoor one, and there is a craft to it.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">Cooling, which is not optional at this length</h3>
        <p className="mb-4">
          Indoor sweat rates commonly run somewhere between 1 and 1.5 litres an hour with reasonable airflow, and
          higher without it. Over four hours that is four to six litres. You will not drink that much and you do not
          need to, but you do need to take it seriously enough to plan for, because dehydration on a long indoor
          ride arrives quietly and then all at once.
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>More fan than you think, aimed at your chest and face rather than your legs.</li>
          <li>Two bottles within reach and a plan for refilling without stopping the ride.</li>
          <li>Electrolytes in at least one of them. Four hours of sweat is a meaningful sodium loss.</li>
          <li>A towel over the bars and another over the frame. The reasons are covered in the sweat article.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 mt-6">Boredom is a real limiter, so plan for it</h3>
        <p className="mb-4">
          Break the ride into segments with something happening at each transition. Ride a route that changes world
          or terrain. Put a film on for the middle two hours. Join a long group event so that the structure comes
          from outside you. What works is personal; what does not work is starting a four-hour ride with no plan for
          hours two and three.
        </p>

        <h3 className="text-xl font-semibold mb-3 mt-6">Get off the saddle deliberately</h3>
        <p className="mb-4">
          The bike cannot move, so you have to. Stand for thirty seconds every ten or fifteen minutes even when you
          do not need to. It is the single most effective thing for making long indoor rides tolerable, and it is
          the same underlying problem described in{" "}
          <Link to="/blog/zwift-biomechanics" className="text-zwift-orange hover:underline">
            the article on what a fixed bike does to your body
          </Link>
          .
        </p>
      </div>

      {/* What the road adds */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What the road adds that the trainer cannot</h2>
        <p className="mb-4">
          Do at least two rides of three hours or more outdoors before the day, even if all your training has been
          indoors. Not for fitness. For the things fitness does not cover:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>Eating and drinking while moving, in traffic, with gloves on.</li>
          <li>Whether your kit actually works for five hours, which you cannot learn in ninety minutes.</li>
          <li>Descending with tired hands.</li>
          <li>Riding near other people, if the day involves a group.</li>
          <li>
            The simple business of being outside for that long. There is a fuller version of this argument in{" "}
            <Link to="/blog/what-zwift-cant-teach-you-and-what-it-can" className="text-zwift-orange hover:underline">
              what Zwift can and cannot teach you
            </Link>
            .
          </li>
        </ul>
      </div>

      {/* The ride itself */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The example itself</h2>
        <div className="my-6">
          <img
            src="/pictures/blog/australia/australia_2_4.webp"
            alt="Bridge crossing above a coastline"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mb-4">
          Sydney to Wollongong runs south down the New South Wales coast, and its famous feature is the Sea Cliff
          Bridge, a curved span built out over the water where the road was cut into the cliff. It is ridden as an
          organised event as well as independently, the terrain is described as rolling with a substantial climb
          leaving Sydney, and the consistent advice is to start early.
        </p>
        <p className="mb-4">
          That is as far as I will go, because I have not ridden it and route-specific advice from someone who has
          not been there is worth nothing. For the details, ask someone local or watch someone who has done it.
        </p>
        <div className="my-8">
          <p className="text-xl font-semibold mb-4 text-foreground">Riders who have actually done it</p>
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Ayn9f2q3fRA"
              title="Cycling Sydney to Wollongong via the Sea Cliff Bridge"
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
          <li>The jump to five hours is a fuelling and pacing problem, not a fitness one.</li>
          <li>Target 55 to 65% of FTP as the whole-ride average. It will feel too easy for the first two hours.</li>
          <li>
            Eat from 30 to 45 minutes in, then every 20 to 30 minutes. Absorption is rate-limited, so you cannot
            catch up.
          </li>
          <li>Six weeks with one long ride a week gets you there. Four hours in training is enough for five on the day.</li>
          <li>
            For long indoor rides: more fan than you think, stand up every ten minutes, and have a plan for hours two
            and three.
          </li>
          <li>Do at least two long rides outdoors before the day, for everything that is not fitness.</li>
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
          description: "Turn a test into the endurance zone this ride should be paced in",
        },
        {
          name: "Climb Time Calculator",
          path: "/zwift-climb-time-calculator",
          description: "Work out how long the climbs on your route will take",
        },
      ]}
    />
  );
};

export default SydneyToWollongong;
