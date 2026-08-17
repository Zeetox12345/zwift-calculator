import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";
import { Calendar, TrendingUp, Target, BarChart3 } from "lucide-react";

const ZwiftTrainingPeriodization = () => {

  const relatedArticles = [
    {
      title: "Zwift Training Plans 101",
      excerpt: "Complete guide to structured Zwift training.",
      date: "Recent",
      readTime: "14 min",
      slug: "/blog/zwift-training-plans-101",
      category: "Training"
    },
    {
      title: "Power-to-Weight Ratio Deep Dive: The Science Behind Climbing Performance",
      excerpt: "Comprehensive guide to power-to-weight ratio in cycling.",
      date: "20-12-2025",
      readTime: "17 min",
      slug: "/blog/power-to-weight-ratio-science",
      category: "Training"
    },
    {
      title: "Zwift Route Selection Psychology: How Your Choices Affect Training Outcomes",
      excerpt: "Explore the psychology behind Zwift route selection.",
      date: "31-12-2025",
      readTime: "19 min",
      slug: "/blog/zwift-route-selection-psychology",
      category: "Psychology"
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
          You cannot hold peak form all year. That single fact is the whole reason periodization exists. Fitness is not a bank balance that only goes up; it is a state your body maintains at a cost, and it will not pay that cost for twelve months straight. Periodization is not a way to train more. It is the decision about <em>when</em> you want to be fastest, made in advance. This guide is written for indoor riders, because a trainer changes the maths in ways most periodization advice ignores.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">What Periodization Is Actually Solving</h2>
        <p className="mb-4">
          Ask a rider what periodization is and you get an answer about phases. That is the mechanism, not the problem. Two things are true at once:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Hard training makes you fitter, but only after you recover from it. During a hard block you are usually <em>slower</em> than when you started it.</li>
          <li>Fitness decays, and the sharp end (VO2 max, sprint power) fades faster than the aerobic base underneath it.</li>
        </ul>
        <p className="mb-4">
          So fitness and freshness cannot both be maximal on the same day. Form is roughly fitness minus fatigue, and fitness is built by accumulating fatigue. The fastest you will ever be is not at the end of your hardest block. It is one to three weeks after it, once the fatigue has drained and the adaptation has not yet faded. That window is narrow, partly controllable, and it will not open by accident. Everything else here - base, build, deload, taper - is bookkeeping for that one decision. Pick the date first, work backwards second.
        </p>
        <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
          <p className="font-semibold mb-2 flex items-center gap-2">
            <Calendar size={18} className="text-zwift-orange" />
            No target date means no plan
          </p>
          <p className="mb-0">
            If you cannot name the day you want to be fastest, you do not have a periodized plan. You have a training habit. A habit is fine, and it beats an abandoned plan - but do not expect it to produce a peak, because nothing in it is timed to.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The Three Time Scales</h2>
        <p className="mb-4">
          Periodization nests on three time scales, each answering a different question. The <strong>macrocycle</strong> (6 to 12 months) decides which weeks you want to be at your best and what you give up for them. The <strong>mesocycle</strong> (3 to 6 weeks) decides which single quality you are developing now and how you will know it moved. The <strong>microcycle</strong> (7 to 10 days) decides where the hard days sit so each one starts reasonably fresh.
        </p>
        <p className="mb-4">
          The seven-day week is a calendar convention, not a physiological one. If a 10-day rotation recovers better around your work pattern, use it - I worked through that trade-off in <Link to="/blog/10-day-zwift-training-week" className="text-zwift-orange hover:underline">the 10-day Zwift training week</Link>.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Three Models: Linear, Block, and Reverse</h2>
        <p className="mb-4">
          There is no single correct model. There are three common ones, and each asks something different of you.
        </p>

        <h3 className="text-xl font-bold mb-3">Traditional linear</h3>
        <p className="mb-4">
          Volume starts high and intensity starts low; over the months volume falls and intensity rises, so you arrive sharp. It works because the base you build early is what lets you tolerate the intensity later. It asks for a long runway, realistically 16 weeks or more, and the patience to spend two months riding at a pace that feels too easy. It suits riders with one clear A event and enough weekly hours that a base phase means something, and it fails when the runway gets cut short.
        </p>

        <h3 className="text-xl font-bold mb-3">Block</h3>
        <p className="mb-4">
          Instead of blending qualities, you concentrate one: two or three weeks where VO2 max is the only quality on the menu and everything else drops to easy riding, then maintenance while you attack the next. A dense stimulus produces a bigger adaptation than the same volume spread thin. It asks for tolerance of very hard clustered weeks and the discipline to make the other days genuinely easy - without that, a block is overtraining with a nicer name. It suits time-limited riders who already have a base, and it is a poor first model.
        </p>

        <h3 className="text-xl font-bold mb-3">Reverse</h3>
        <p className="mb-4">
          Start with short, high-intensity work in the off-season and extend duration as the event approaches. It asks for an existing aerobic base to sit the intensity on, and a target that is long rather than sharp. It suits riders whose A event is a long summer effort and who train indoors through winter, where 90 minutes is the realistic session ceiling and a four-hour Zone 2 ride is a fantasy. Most indoor riders drift into this model by accident, because winter indoors rewards short and intense while summer outdoors allows long and steady.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Why Indoor Training Changes the Calculus</h2>
        <p className="mb-4">
          Almost all periodization advice was written for outdoor riders. Four things differ on a trainer, and together they flip the usual failure mode.
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-4">
          <li>
            <strong>No weather, no daylight limit.</strong> An outdoor January plan has a built-in dropout rate: the coach writes 10 hours knowing you lose two to ice and darkness. Indoors the volume you write is the volume you do, so an outdoor template quietly delivers more than it was designed to.
          </li>
          <li>
            <strong>Near-perfect compliance.</strong> ERG holds the target whether you feel like it or not. Outdoors, 4 x 8 minutes at 105% of FTP drifts down when the legs complain, and that drift is a safety valve. Indoors there is no valve.
          </li>
          <li>
            <strong>Higher intensity density per hour.</strong> No descents, no junctions, no coasting into corners, no soft-pedalling in the wheels. My rough estimate from my own files is that an outdoor ride carries 10 to 20 percent zero-power time and an indoor session almost none, so an indoor hour is closer to an outdoor hour and a quarter of pedalling.
          </li>
          <li>
            <strong>Racing is always available.</strong> Zwift races start every hour, and an unplanned race is a VO2 max session with a three-minute all-out start.
          </li>
        </ol>
        <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
          <p className="font-semibold mb-2 flex items-center gap-2">
            <TrendingUp size={18} className="text-zwift-orange" />
            The indoor failure mode is too much quality, not too little
          </p>
          <p className="mb-0">
            Outdoor plans defend intensity against the weather. Indoor plans have to defend easy riding against your own enthusiasm. Count hard sessions rather than hours: two a week in base, three in build, and every race counts as one of them.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">A Worked 16-Week Structure</h2>
        <p className="mb-4">
          Sixteen weeks is long enough to build something and short enough to see through.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Weeks</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Phase</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Purpose</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Hard days</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">1 to 3</td>
                <td className="py-2 pr-4">Aerobic base</td>
                <td className="py-2 pr-4">Raise how much total work you can absorb</td>
                <td className="py-2 pr-4">1</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">4</td>
                <td className="py-2 pr-4">Deload and test</td>
                <td className="py-2 pr-4">Absorb the block, reset FTP so the next zones are real</td>
                <td className="py-2 pr-4">1</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">5 to 7</td>
                <td className="py-2 pr-4">Build 1: threshold</td>
                <td className="py-2 pr-4">Extend how long you hold power near FTP</td>
                <td className="py-2 pr-4">2</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">8</td>
                <td className="py-2 pr-4">Deload</td>
                <td className="py-2 pr-4">Let the threshold work convert into fitness</td>
                <td className="py-2 pr-4">1 short</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">9 to 11</td>
                <td className="py-2 pr-4">Build 2: VO2 max</td>
                <td className="py-2 pr-4">Raise the ceiling above FTP so FTP has room to climb</td>
                <td className="py-2 pr-4">2 to 3</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">12</td>
                <td className="py-2 pr-4">Deload and test</td>
                <td className="py-2 pr-4">Confirm the ceiling moved before you specialize</td>
                <td className="py-2 pr-4">1</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">13 to 14</td>
                <td className="py-2 pr-4">Specialization</td>
                <td className="py-2 pr-4">Make every hard session look like the target effort</td>
                <td className="py-2 pr-4">2 to 3</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">15 to 16</td>
                <td className="py-2 pr-4">Taper and target</td>
                <td className="py-2 pr-4">Shed fatigue while keeping the sharpness</td>
                <td className="py-2 pr-4">2 short</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Representative weeks</h3>
        <p className="mb-4">
          <strong>Base (weeks 1 to 3, about 6 hours).</strong> Monday off. Tuesday 75 minutes at 60 to 70% of FTP. Wednesday 3 x 12 minutes of tempo at 80 to 85%. Thursday 45 minutes very easy. Friday off. Saturday 2 hours endurance. Sunday 60 minutes easy. One hard day, and it is only tempo.
        </p>
        <p className="mb-4">
          <strong>Build 2 (weeks 9 to 11, about 6.5 hours).</strong> Monday off. Tuesday 5 x 4 minutes at 108 to 115% of FTP with 4-minute recoveries. Wednesday 60 minutes easy. Thursday 2 x 20 minutes at 95 to 100%. Friday 45 minutes very easy. Saturday a race, or 30/15s if you would rather control the dose. Sunday 100 minutes endurance. Three hard days, and Wednesday, Friday and Sunday are deliberately soft to pay for them.
        </p>
        <p className="mb-4">
          <strong>Specialization (weeks 13 to 14).</strong> Same shape, but the hard sessions look like the event: long sustained work at climbing cadence for a climb attempt, or 30-second to 3-minute surges off an already hard baseline for a race series, because that is what happens when a Zwift race splits.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Planning Backwards From a Target</h2>

        <h3 className="text-xl font-bold mb-3">A Zwift race series</h3>
        <p className="mb-4">
          You cannot taper for eight races. Pick two or three as A races and give the rest a job: this one is my VO2 max session, that one is bunch practice, in this one I ride 10 minutes hard and then sit in. Zwift races are usually decided in the first three minutes and on the steepest ramp, so a series peak means sharpening short power, not only FTP. Check where your numbers place you with the <Link to="/zwift-racing-category-calculator" className="text-zwift-orange hover:underline">racing category calculator</Link>, because the training that promotes you a category is not the training that wins in the one you are in. Tactics are covered in <Link to="/blog/zwift-racing-for-beginners" className="text-zwift-orange hover:underline">Zwift racing for beginners</Link>.
        </p>

        <h3 className="text-xl font-bold mb-3">An Alpe du Zwift time attempt</h3>
        <p className="mb-4">
          Alpe du Zwift is 12.2 km with 1,036 m of climbing across 21 hairpins, averaging about 8.5%. For most riders that is a 45 to 75 minute effort, which makes it close to a pure FTP test on a gradient. Specialization should therefore be long sustained threshold work at climbing cadence and at your real riding weight, not short punchy intervals.
        </p>
        <p className="mb-4">
          The regression behind the <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">Alpe du Zwift calculator</Link> is time_seconds = 148.60 x (W/kg)&sup2; - 1954.08 x (W/kg) + 8329.87. Feed it 3.0 W/kg and you get about 63:25; feed it 3.2 and you get about 59:58, which is why 3.2 is the number people quote for going under the hour. That 0.2 W/kg gap is 15 W for a 75 kg rider, worth about three and a half minutes. The payoff shrinks as you get faster: near 3.2 W/kg an extra 0.1 buys around 100 seconds, near 4.0 W/kg the same 0.1 buys closer to 77. If you are already fast, plan for smaller returns and a longer runway. <Link to="/blog/conquer-alpe-du-zwift" className="text-zwift-orange hover:underline">My Alpe du Zwift guide</Link> covers hairpin-by-hairpin pacing, and <Link to="/alpe-vs-ventop" className="text-zwift-orange hover:underline">Alpe vs Ven-Top</Link> explains why Ven-Top, at roughly 20.9 km and 1,534 m, needs a longer specialization block.
        </p>

        <h3 className="text-xl font-bold mb-3">An outdoor event</h3>
        <p className="mb-4">
          If the target is outdoors, the trainer is the tool and not the goal. Indoor training does not give you handling on descents or in a bunch, and it does not give you the cost of heat, wind and road vibration. Build the fitness indoors, but put three or four outdoor rides into the final six weeks, including one that rehearses the event's terrain and duration.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Monitoring: What Actually Deserves Tracking</h2>
        <p className="mb-4">
          You do not need a lab. You need four numbers, tracked consistently enough that trends are visible.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Duration-specific power, not just FTP.</strong> Keep your best 15-second, 1-minute, 5-minute and 20-minute power from the last six weeks. A single FTP number hides which end of the curve is moving, and in a VO2 block the 5-minute number should move first. The <Link to="/zwift-ftp-calculator" className="text-zwift-orange hover:underline">FTP calculator</Link> turns a test effort into usable zones.</li>
          <li><strong>Morning resting heart rate</strong>, measured the same way daily, plus its 7-day average. The absolute value tells you nothing; a sustained rise of 5 or more beats above your own baseline tells you plenty.</li>
          <li><strong>Session compliance.</strong> Failing a session you completed comfortably two weeks ago is data, not a character flaw.</li>
          <li><strong>A one-to-five motivation score</strong> logged before the session, not after. Post-session mood is contaminated by endorphins.</li>
        </ul>

        <h3 className="text-xl font-bold mb-3">Fatigue you push through, and fatigue you do not</h3>
        <p className="mb-4">
          Normal training fatigue is <em>local</em> and clears with a warm-up. Fatigue you should respect is <em>systemic</em>: it shows in heart rate, sleep, appetite and mood, not only in your legs.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">What you notice</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Reading</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Heavy legs for 10 minutes, gone by minute 20</td>
                <td className="py-2 pr-4">Normal residual fatigue</td>
                <td className="py-2 pr-4">Do the session</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Sore muscles 24 to 48 hours after a hard session</td>
                <td className="py-2 pr-4">Local damage, expected</td>
                <td className="py-2 pr-4">Do the session</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Dread beforehand, normal power once warm</td>
                <td className="py-2 pr-4">Motivation, not physiology</td>
                <td className="py-2 pr-4">Do the session</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Power drifts down at fixed effort and never recovers</td>
                <td className="py-2 pr-4">Accumulated systemic fatigue</td>
                <td className="py-2 pr-4">Stop, take the easy day</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Heart rate will not rise to its normal value for a given power</td>
                <td className="py-2 pr-4">Deep fatigue, the most reliable warning I know</td>
                <td className="py-2 pr-4">Two to three easy days minimum</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Resting HR up 5+ bpm for three days, sleep broken</td>
                <td className="py-2 pr-4">Systemic, probably not only training</td>
                <td className="py-2 pr-4">Pull the deload week forward</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 mb-4">
          One rule that has saved me repeatedly: a deload taken a week early costs almost nothing, while a deload taken two weeks late costs the whole block. If you are unsure, deload. The same pattern shows up in aggregate performance data, which I dug into in <Link to="/blog/the-data-behind-zwift-climbing" className="text-zwift-orange hover:underline">the data behind Zwift climbing</Link>.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Tapering for a Climb Time Attempt</h2>
        <p className="mb-4">
          One principle: cut volume hard, keep intensity, keep frequency. Volume drops roughly 40 to 50 percent, but the number of sessions stays the same so your body never gets the signal that training has stopped, and each session keeps a short piece of race-pace work so the sharpness stays. Nothing new enters the last 10 days.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Day</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Session</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">-10</td>
                <td className="py-2 pr-4">3 x 12 min at 95 to 100% FTP</td>
                <td className="py-2 pr-4">Last real load</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">-9</td>
                <td className="py-2 pr-4">45 min very easy</td>
                <td className="py-2 pr-4">Habit, no load</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">-8</td>
                <td className="py-2 pr-4">60 min endurance, 3 x 3 min at threshold</td>
                <td className="py-2 pr-4">Keep threshold awake cheaply</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">-7</td>
                <td className="py-2 pr-4">Rest or 30 min spin</td>
                <td className="py-2 pr-4">First real drop in load</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">-6</td>
                <td className="py-2 pr-4">70 min steady endurance</td>
                <td className="py-2 pr-4">Longest ride of the taper</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">-5</td>
                <td className="py-2 pr-4">50 min with 4 x 3 min at 100% FTP</td>
                <td className="py-2 pr-4">Rehearse your planned climb pace</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">-4</td>
                <td className="py-2 pr-4">40 min easy</td>
                <td className="py-2 pr-4">Recover from day -5</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">-3</td>
                <td className="py-2 pr-4">Rest</td>
                <td className="py-2 pr-4">Deepest rest day of the block</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">-2</td>
                <td className="py-2 pr-4">40 min with 3 x 90 s at threshold</td>
                <td className="py-2 pr-4">Counter post-rest-day flatness</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">-1</td>
                <td className="py-2 pr-4">30 min easy, 2 x 1 min openers</td>
                <td className="py-2 pr-4">Openers, not training</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">0</td>
                <td className="py-2 pr-4">The attempt</td>
                <td className="py-2 pr-4">Same time of day you trained at</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30 mt-4">
          <p className="font-semibold mb-2 flex items-center gap-2">
            <Target size={18} className="text-zwift-orange" />
            Do not crash-diet into a climb attempt
          </p>
          <p className="mb-0">
            For a 75 kg rider at 250 W, dropping 1 kg while holding the same power moves you from 3.33 to 3.38 W/kg, which the Alpe fit values at roughly 43 seconds. That is only true <em>if the power holds</em>. Losing the kilogram through dehydration or an under-fuelled taper week costs more watts than the 43 seconds is worth. Lose weight in base and build, never in the last 10 days.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The Most Common Failure: The Permanent Sweet Spot Block</h2>
        <p className="mb-4">
          The one pattern that quietly limits most indoor riders is the permanent sweet spot diet: session after session at 88 to 94% of FTP, month after month. It is seductive for good reasons - hard enough to feel productive, easy enough to repeat three or four times a week, and it fits a 60-minute window. Here is what it does to your ceiling, in order:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li><strong>Your 20-minute power rises, then stops.</strong> Sweet spot loads one aerobic mechanism repeatedly. Once it has adapted, more of the same is maintenance rather than progression, and eight to twelve weeks is a reasonable expectation before the returns flatten.</li>
          <li><strong>The ceiling above FTP stops moving.</strong> FTP sits underneath your maximal aerobic power. If nothing in your week goes above 105 to 110% of FTP, the roof is not rising, and FTP cannot keep climbing towards a roof that stays put.</li>
          <li><strong>Your top end quietly decays.</strong> 15-second and 1-minute power fade first when they are never trained. You discover this in a race, at the moment the pace goes on a short ramp.</li>
          <li><strong>Nothing is ever genuinely easy.</strong> When every ride is moderately hard, no ride fully restores you, so every session runs at a small deficit. This is the sneakiest cost, because it makes the other three worse.</li>
        </ol>
        <p className="mb-4">
          The fix is not to abandon sweet spot; its benefit-per-minute ratio is excellent. The fix is to give it a season and a job. Lean on it for six to eight weeks in build, then rotate deliberately into VO2 max work and then into event-specific work, and protect at least one ride a week easy enough to hold a conversation through.
        </p>
        <p className="mb-4">
          A quick self-test: if you cannot remember the last session above 110% of FTP, or the last ride you finished feeling you could immediately do it again, your plan has collapsed into a single zone. That is a treadmill, not periodization. <Link to="/blog/zwift-training-plans-101" className="text-zwift-orange hover:underline">Zwift training plans 101</Link> is a reasonable way out, and the <Link to="/blog/power-to-weight-ratio-science" className="text-zwift-orange hover:underline">power-to-weight ratio deep dive</Link> covers the W/kg physiology.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Overload, Deloads, and Three Mistakes</h2>
        <p className="mb-4">
          Progressive overload has four dials: volume, intensity, frequency, and interval duration. Turn one at a time, because if you add a session <em>and</em> lengthen the intervals <em>and</em> raise the target power in the same week, you will not know which change caused the result. Around 5 to 10 percent per week is a sensible ceiling on any single dial.
        </p>
        <p className="mb-4">
          Deload weeks are where the adaptation lands. Cut volume to 50 to 60 percent, keep the same number of sessions, and keep one short piece of intensity so nothing goes stale. If you find yourself negotiating with a deload week, that is the evidence you need it.
        </p>
        <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
          <p className="font-semibold mb-2 flex items-center gap-2">
            <BarChart3 size={18} className="text-zwift-orange" />
            Three mistakes worth naming
          </p>
          <p className="mb-0">
            Skipping base for intensity gives you six good weeks and then a wall. Training hard every week without a deload gives you fatigue that looks exactly like fitness until it does not. Chasing a new FTP number every month means no phase ever runs long enough to work - test at the end of a block, not whenever you feel strong.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Putting It Together</h2>
        <p className="mb-4">
          Pick a date. Decide which quality it demands. Build the base that lets you train that quality hard, concentrate on it, specialize, then shed fatigue over the last 10 days so the fitness can show itself.
        </p>
        <p className="mb-4">
          The indoor warning is worth repeating: with no weather, no daylight limit, near-perfect ERG compliance and a race starting every hour, your constraint is not access to intensity. It is restraint. Write the easy days into the plan with the same seriousness as the intervals, and treat every unplanned race as a hard session you have spent. Count back 16 weeks from your date, then fill in the detail from the rest of the <Link to="/blog/category/training" className="text-zwift-orange hover:underline">training articles</Link>.
        </p>
        <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
          <p className="mb-0">
            Set your zones with the <Link to="/zwift-ftp-calculator" className="text-zwift-orange hover:underline font-semibold">FTP calculator</Link>, then use the <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline font-semibold">Alpe du Zwift calculator</Link> and the <Link to="/ventop-calculator" className="text-zwift-orange hover:underline font-semibold">Ven-Top calculator</Link> to turn "get fitter" into a target time you can plan backwards from. The <Link to="/editorial-policy" className="text-zwift-orange hover:underline font-semibold">editorial policy</Link> explains how these numbers were built.
          </p>
        </div>
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

export default ZwiftTrainingPeriodization;
