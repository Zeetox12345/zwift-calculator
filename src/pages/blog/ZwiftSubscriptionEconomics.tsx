import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";
import { DollarSign, TrendingUp, Calculator, BarChart3 } from "lucide-react";

const ZwiftSubscriptionEconomics = () => {

  const relatedArticles = [
    {
      title: "Zwift Equipment Optimization: Beyond Weight to Aerodynamics",
      excerpt: "Comprehensive guide to optimizing your Zwift setup beyond weight.",
      date: "31-12-2025",
      readTime: "20 min",
      slug: "/blog/zwift-equipment-optimization-aerodynamics",
      category: "Setup"
    },
    {
      title: "Zwift Training Periodization: Long-Term Performance Planning",
      excerpt: "Master Zwift training periodization for long-term performance gains.",
      date: "31-12-2025",
      readTime: "23 min",
      slug: "/blog/zwift-training-periodization",
      category: "Training"
    },
    {
      title: "Zwift Setup Guide",
      excerpt: "Complete guide to setting up your Zwift training environment.",
      date: "Recent",
      readTime: "15 min",
      slug: "/blog/zwift-setup-guide",
      category: "Setup"
    },
    {
      title: "The Data Behind Zwift Climbing: What 1,000+ Rides Tell Us About Performance",
      excerpt: "Discover data-driven insights from analyzing 1,000+ ZwiftPower performances.",
      date: "20-12-2025",
      readTime: "18 min",
      slug: "/blog/the-data-behind-zwift-climbing",
      category: "Data Analysis"
    }
  ];

  const content = (
    <div className="space-y-6">
      <div>
        <p className="text-lg text-muted-foreground mb-4">
          Every "is Zwift worth it?" article makes the same mistake: it quotes a price. Prices change, differ by
          country, and differ again with a hardware bundle. So this article contains none. It gives you the
          arithmetic instead, and you plug in whatever your own bank statement says.
        </p>
        <p className="mb-4">
          The short version: the fee is almost never the deciding factor. Cost per hour is, and it is dominated by
          how many hours you ride. Below roughly eight hours a month the number looks bad whatever you pay. Above
          it, the real questions become hardware, adherence, and whether the platform buys you something the
          alternatives cannot.
        </p>
      </div>

      <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <DollarSign className="mr-2 text-zwift-orange" size={24} />
          The one calculation
        </h2>
        <p className="mb-0">
          Let <strong>P</strong> be what one month costs in your own currency and <strong>H</strong> be the hours
          you ride in that month. Your cost per hour is <strong>P ÷ H</strong>. Everything below is a way of
          deciding whether that number is good for you specifically.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Cost per hour, not cost per session</h2>
        <p className="mb-4">
          Dividing by sessions hides what you are buying: a 30-minute recovery spin and a three-hour endurance ride
          are one session each and are not the same purchase. Hours are the honest unit, because the subscription
          sells unlimited access to time and time is what you consume.
        </p>
        <p className="mb-4">
          Use a climb as an anchor so hours are easy to count. One ascent of Alpe du Zwift - 12.2 km, 1,036 m of
          gain, roughly 8.5% average, 21 hairpins - takes about an hour at 3.2 W/kg. This site&apos;s fit,
          time_seconds = 148.60·(W/kg)² - 1954.08·(W/kg) + 8329.87, gives 59:58 at 3.2 W/kg, about 1:12:53 at
          2.5 W/kg and about 48:11 at 4.0 W/kg. So "one Alpe a week" is roughly four hours a month, while Ven-Top,
          Zwift&apos;s Mont Ventoux at about 20.9 km and 1,534 m, is closer to 90 minutes an attempt. Check your
          own with the{" "}
          <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">Alpe du Zwift calculator</Link>{" "}
          or the{" "}
          <Link to="/ventop-calculator" className="text-zwift-orange hover:underline">Ven-Top calculator</Link>.
        </p>
        <p className="mb-4">
          Here is the shape of P ÷ H, as a fraction of one month&apos;s fee so it works in any currency.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Hours per month (H)</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Cost per hour (P ÷ H)</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Gain over the row above</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">4</td>
                <td className="py-2 pr-4">0.250 × P</td>
                <td className="py-2 pr-4">-</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">8</td>
                <td className="py-2 pr-4">0.125 × P</td>
                <td className="py-2 pr-4">0.125 × P</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">12</td>
                <td className="py-2 pr-4">0.083 × P</td>
                <td className="py-2 pr-4">0.042 × P</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">16</td>
                <td className="py-2 pr-4">0.063 × P</td>
                <td className="py-2 pr-4">0.021 × P</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">20</td>
                <td className="py-2 pr-4">0.050 × P</td>
                <td className="py-2 pr-4">0.013 × P</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">24</td>
                <td className="py-2 pr-4">0.042 × P</td>
                <td className="py-2 pr-4">0.008 × P</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 mt-4">
          Every row adds the same four hours and every row helps less than the one before. That is not an accident:
          the derivative of P ÷ H is -P ÷ H², so an extra hour is worth less in proportion to the <em>square</em> of
          the hours you already ride. Four to eight hours halves your cost per hour; twenty to twenty-four barely
          moves it. The financial decision lives in the first ten or twelve hours of the month. Past that you are
          optimising training, not money.
        </p>
        <p className="mb-4">
          The same logic settles monthly versus annual without prices. Call R the annual price divided by one
          month&apos;s price. Annual wins if you use the platform for more than R months in the year: if R is ten,
          you need eleven months of riding to be ahead, and a rider who stops in May is not that person.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The rest of the cost stack, which is usually bigger</h2>
        <p className="mb-4">
          Amortise the trainer the same way. If it costs T and lasts L hours, the hardware line is T ÷ L per hour.
          The trainer then costs more per hour than the subscription whenever <strong>T &gt; P × (L ÷ H)</strong>,
          and L ÷ H is simply the trainer&apos;s lifetime in months. So the two lines are equal when the
          trainer&apos;s price equals its lifetime in months times the monthly fee: a trainer you keep for five
          years crosses over at sixty months of subscription. Price your trainer in "months of Zwift" and you know
          at once which line dominates your setup.
        </p>
        <p className="mb-4">
          The small lines rarely matter. A trainer, a fan and a screen draw on the order of 100-250 W from the
          wall, so an hour is roughly 0.1-0.25 kWh - my rough estimate, not a measurement, but at any European rate
          it sits well below the per-hour fee. Consumables are sneakier: sweat eats bolts, cables and bearings
          faster than road riding does, as in{" "}
          <Link to="/blog/towels-during-zwifting-can-it-ruin-your-bike" className="text-zwift-orange hover:underline">
            towels during Zwifting
          </Link>.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The honest comparison set</h2>
        <p className="mb-4">
          A subscription is only expensive relative to something. The four real alternatives are a gym, a
          structured-training app, a coach, and riding outdoors. Each buys something the others do not.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Option</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">What it uniquely buys</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">What it cannot give you</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Zwift</td>
                <td className="py-2 pr-4">Other people riding at the same second as you, at any hour</td>
                <td className="py-2 pr-4">Bike handling, individual coaching judgement, fresh air</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Gym membership</td>
                <td className="py-2 pr-4">Strength equipment you cannot own at home</td>
                <td className="py-2 pr-4">Cycling specificity, and any use at 05:30 in your own house</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Structured-training app</td>
                <td className="py-2 pr-4">A plan that adapts to your numbers, with nothing to distract from execution</td>
                <td className="py-2 pr-4">Real riders to race, and the pull of a scheduled group ride</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">A coach</td>
                <td className="py-2 pr-4">Someone who looks at your life, not just your files, and changes the plan</td>
                <td className="py-2 pr-4">Anything at all in a month you cannot afford them</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Riding outdoors</td>
                <td className="py-2 pr-4">Handling, descending, pack skills, daylight, zero marginal cost</td>
                <td className="py-2 pr-4">Reliability in January, precise interval control, a 45-minute total time cost</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 mt-4">
          The pair that overlaps least is Zwift and a coach: one is a place to train, the other is a decision about
          what to train. So the ranking depends on whether your problem is <em>showing up</em> or{" "}
          <em>knowing what to do</em>. Zwift is very good at the first and only adequate at the second; a coach is
          the reverse. If it is neither, and you simply want to be outside, no subscription fixes that -{" "}
          <Link to="/blog/zwift-vs-outdoor-cycling" className="text-zwift-orange hover:underline">
            Zwift vs outdoor cycling
          </Link>{" "}
          makes that case.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Break-even, as a formula rather than a number</h2>
        <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30 mb-4">
          <h3 className="text-xl font-bold mb-3 flex items-center">
            <Calculator className="mr-2 text-zwift-orange" size={22} />
            Two break-evens, not one
          </h3>
          <p className="mb-2">
            <strong>Against a paid alternative:</strong> H* = P ÷ C, where C is that alternative&apos;s cost per
            hour. Above H* hours a month the subscription is the cheaper way to buy an hour.
          </p>
          <p className="mb-0">
            <strong>Against riding outdoors:</strong> there is no financial break-even, because outdoor riding is
            free at the margin. The break-even is in time: N × t × w &gt; P, where N is outdoor rides per month, t
            is the overhead hours each costs beyond the riding, and w is what an hour of your time is worth.
          </p>
        </div>
        <p className="mb-4">
          The first is usually decisive. If one drop-in studio class costs a third of a month&apos;s subscription
          and lasts an hour, then C = P ÷ 3 and H* = 3. Three hours a month - less than one ride a week - and the
          subscription wins on price alone. That is why "Zwift is expensive" rarely survives a paid alternative.
        </p>
        <p className="mb-4">
          The second decides things for adults. What Zwift sells against outdoors is overhead: kit, lights, the
          ride to the edge of town, cleaning a winter bike. Call it 20 minutes a ride, conservative in a Danish
          February, and twelve outdoor rides a month is four hours reclaimed. Whether four hours is worth one
          monthly fee is your call, but for most people with a job it is not close. The same arithmetic
          drives{" "}
          <Link to="/blog/having-time-to-zwift-during-university" className="text-zwift-orange hover:underline">
            having time to Zwift during university
          </Link>.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Where the value actually comes from</h2>
        <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30 mb-4">
          <h3 className="text-xl font-bold mb-3 flex items-center">
            <BarChart3 className="mr-2 text-zwift-orange" size={22} />
            Same fee, four different products
          </h3>
          <p className="mb-0">
            The subscription is identical for everyone. What differs is which feature does the work, and that sets
            both the value and the failure mode.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Rider</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Where the value sits</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">The honest risk</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Winter-only rider</td>
                <td className="py-2 pr-4">Replacing months that would otherwise be zero training</td>
                <td className="py-2 pr-4">Paying an annual rate for a five-month product</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Year-round racer</td>
                <td className="py-2 pr-4">A field of real humans at a fixed time, any night of the week</td>
                <td className="py-2 pr-4">Racing so often that no training block ever gets built</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Time-crunched parent</td>
                <td className="py-2 pr-4">Zero overhead: 45 minutes total, in the house, kids asleep upstairs</td>
                <td className="py-2 pr-4">Every session becomes short and hard because short is all there is</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Returning from injury</td>
                <td className="py-2 pr-4">ERG mode capping load precisely, with no descending or traffic</td>
                <td className="py-2 pr-4">Chasing group speed too early and re-injuring</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 mt-4">
          The <strong>winter-only rider</strong> gets the cleanest return, because the alternative is nothing and
          the difference shows up in the spring. The only mistake available is a pricing one: compare R against
          five months, not twelve. The <strong>year-round racer</strong> is buying a field of humans at 20:10 on a
          Tuesday, because a race extracts an effort a workout file cannot - but racing is easy to over-consume, so
          pair it with{" "}
          <Link to="/blog/zwift-training-plans-101" className="text-zwift-orange hover:underline">a training plan</Link>{" "}
          and an honest look at the{" "}
          <Link to="/zwift-racing-category-calculator" className="text-zwift-orange hover:underline">racing category calculator</Link>.
        </p>
        <p className="mb-4">
          For the <strong>time-crunched parent</strong> the overhead formula is the entire product: 45 minutes plus
          five of setup exists on a Tuesday night, while 45 minutes outdoors plus 20 of overhead plus daylight does
          not. That rider usually has the highest hours and the lowest cost per hour while paying what everyone
          else pays. The <strong>rider coming back from injury</strong> is buying control - ERG holds the ceiling a
          physio gave you and no hill pushes you through it, worth a lot for six weeks and much less afterwards.
          That is a good argument for switching the subscription on for a purpose rather than treating it as a
          permanent utility bill.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The behavioural economics of a flat fee</h2>
        <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30 mb-4">
          <h3 className="text-xl font-bold mb-3 flex items-center">
            <TrendingUp className="mr-2 text-zwift-orange" size={22} />
            The mechanism
          </h3>
          <p className="mb-0">
            A flat monthly fee drives the marginal cost of one more ride to zero. Once the money is gone, the only
            price of tonight&apos;s session is effort. That is the whole trick, and it is a real one.
          </p>
        </div>
        <h3 className="text-xl font-bold mb-3">The scheduled group ride is a commitment device</h3>
        <p className="mb-4">
          A group ride starts at a fixed minute whether or not you are on the bike. That turns a vague intention
          into an appointment with a deadline, and deadlines produce behaviour far more reliably than intentions.
          With a stated pace and riders around you, dropping out also feels like leaving rather than stopping.
          None of it requires you to be competitive - only that the clock belongs to someone else.
        </p>
        <h3 className="text-xl font-bold mb-3">The sunk-cost nudge</h3>
        <p className="mb-4">
          A sunk cost should not influence a decision, and behaviourally it always does. Having paid, you ride to
          avoid the feeling of waste - the same effect that makes people use a gym they joined in January. It is
          irrational and it works. It is also most likely to turn on you, because the feeling that gets you riding
          on a good day gets you riding on a day you should rest.
        </p>
        <h3 className="text-xl font-bold mb-3">The badge treadmill</h3>
        <p className="mb-4">
          Levels, route badges, drops and unlockable equipment drip completable goals unrelated to fitness. Some
          are short, some absurdly long - the Zwift Concept Z1, the Tron bike, needs 50,000 m of climbing in the
          Everest Challenge, which is why I own one and why it took so long. The long ones work because they are
          long: a goal you are 60% through is a reason to ride tonight. The{" "}
          <Link to="/blog/unlocking-zwift-achievements" className="text-zwift-orange hover:underline">
            achievements guide
          </Link>{" "}
          lays out the ladder, and the streak mechanic gets the same treatment in{" "}
          <Link to="/blog/how-to-keep-your-streak-in-zwift-while-travelling" className="text-zwift-orange hover:underline">
            keeping your streak while travelling
          </Link>.
        </p>
        <h3 className="text-xl font-bold mb-3">The counterpoint: engineered adherence can collapse</h3>
        <p className="mb-4">
          Adherence built on external rewards lasts exactly as long as the reward supply. Unlock what you cared
          about, ride the badges, hit the level you were chasing, and the drip stops. If that was the reason you
          rode, the riding stops with it. When someone trains hard for two winters and does nothing in the third,
          the diagnosis is usually not laziness - the game finished and no other reason had grown underneath it.
        </p>
        <p className="mb-4">
          There is a test. Cancel for one month, keep the trainer, and see whether you still ride four times a week
          with free software or none. If you do, the subscription buys convenience, which is fine. If you ride
          nothing, it is buying the behaviour itself - worth more, but know that is what you pay for, and be alert
          to the day the novelty runs out.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Alternatives worth knowing about</h2>
        <p className="mb-4">
          I have no affiliate deals with anyone, and this site&apos;s{" "}
          <Link to="/editorial-policy" className="text-zwift-orange hover:underline">editorial policy</Link>{" "}
          says why. So here is the landscape in categories, because features and prices here go stale faster than
          any article can track.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Other virtual worlds.</strong> Several platforms render a world and put riders in it, and they
            differ mainly in how many people are online at your hour, which matters more than graphics. At least
            one has run without a subscription fee - check whether that still holds.
          </li>
          <li>
            <strong>Real-video platforms.</strong> Footage of a real road with resistance matched to the real
            gradient. Better for riding somewhere specific, weaker on live humans.
          </li>
          <li>
            <strong>Structured-training apps.</strong> No world, no avatars, just a plan and a workout player. If
            your problem is not knowing what to do, this category solves it directly and Zwift only indirectly.
          </li>
          <li>
            <strong>The app your trainer came with.</strong> Most manufacturers ship a companion app that runs ERG
            workouts. For a rider whose need is "hold 220 W for eight minutes, six times", it is often sufficient
            and already paid for.
          </li>
          <li>
            <strong>No app at all.</strong> A trainer, a head unit showing power, and a workout on paper.
            Unglamorous, effective, and the correct control experiment for the cancel-for-a-month test.
          </li>
        </ul>
        <p className="mb-4">
          None of them change the hardware cost. Buy the trainer for its own sake, then choose software annually.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">When it is genuinely not worth it</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>You ride under four hours a month.</strong> At H = 4 you pay a quarter of a month&apos;s fee
            per hour, and almost any pay-per-use option beats that. Commit to more hours or pay per session.
          </li>
          <li>
            <strong>You have a real riding season all year.</strong> If January is genuinely rideable outdoors, the
            overhead formula collapses and the main argument goes with it.
          </li>
          <li>
            <strong>Your goal needs handling, not watts.</strong> Criterium cornering, descending, gravel, pack
            positioning - none of it is trainable indoors. Zwift builds the engine, not the driver.
          </li>
          <li>
            <strong>You have no smart trainer and do not want one.</strong> Without controllable resistance and
            reliable power, much of what you pay for is unavailable and the money belongs in hardware first. The{" "}
            <Link to="/blog/zwift-setup-guide" className="text-zwift-orange hover:underline">setup guide</Link>{" "}
            covers what is actually required.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">How I decide, personally</h2>
        <p className="mb-4">
          I live in Aalborg. From November to March the choice is not "Zwift or a nice ride outside", it is "Zwift
          or nothing", and while I build toward Ironman Copenhagen the bike volume has to land somewhere. At the
          hours I ride, the fee is a small fraction of the per-hour cost of the setup, so it stopped being a
          decision several winters ago. In summer it is much closer, and I would not defend an annual rate for
          months I spend outdoors.
        </p>
        <p className="mb-0">
          The rest of the numbers-first material lives in the{" "}
          <Link to="/blog/category/data-analysis" className="text-zwift-orange hover:underline">
            data analysis category
          </Link>, the{" "}
          <Link to="/faq" className="text-zwift-orange hover:underline">FAQ</Link>{" "}
          answers the short questions, and you can read who is{" "}
          <Link to="/author" className="text-zwift-orange hover:underline">writing this</Link>.
        </p>
      </div>

      <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
        <h2 className="text-2xl font-bold mb-4">Do the arithmetic on your own hours</h2>
        <p className="mb-2">
          Add up last month&apos;s hours, divide your fee by that number, and decide whether the result is a good
          price. If the honest answer is "I rode three times", the fix is hours, not a different platform.
        </p>
        <p className="mb-0">
          For a reason to add hours, pick a climb and a target time - the{" "}
          <Link to="/zwift-climbs" className="text-zwift-orange hover:underline font-semibold">Zwift climbs index</Link>,
          the{" "}
          <Link to="/zwift-ftp-calculator" className="text-zwift-orange hover:underline font-semibold">FTP calculator</Link>{" "}
          and the{" "}
          <Link to="/blog/conquer-alpe-du-zwift" className="text-zwift-orange hover:underline font-semibold">
            Alpe du Zwift guide
          </Link>{" "}
          are a decent start. Going under the hour on the Alpe takes about 3.2 W/kg, and chasing that is worth more
          hours than any badge.
        </p>
      </div>
    </div>
  );

  return (
    <BlogPost
      date="31-12-2025"
      content={content}
      relatedArticles={relatedArticles}
    />
  );
};

export default ZwiftSubscriptionEconomics;
