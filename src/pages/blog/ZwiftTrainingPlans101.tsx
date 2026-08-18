import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const ZwiftTrainingPlans101 = () => {
  const content = (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="mb-4">
          Zwift is a training tool, not just a game. It ships structured plans built by coaches and will schedule them onto your calendar for you. The hard part is not finding a plan. It is picking one that matches the hours you actually have, the event you actually care about, and the fitness you have today.
        </p>
        <p className="mb-4">
          I am Christian. I ride Zwift most weeks and I am training for Ironman Copenhagen alongside an engineering degree, so my weeks are rarely fully mine to control. What follows is what I would want to read before committing to a block: how to choose, what a real week looks like at 3, 5 and 8 hours, and a worked example of getting from 2.8 W/kg to under an hour on Alpe du Zwift.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The Three Questions That Determine Everything</h2>
        <p className="mb-4">
          Answer these before you look at a single plan name. Every decision downstream falls out of them.
        </p>

        <h3 className="text-xl font-bold mb-3">1. How many hours can you genuinely commit?</h3>
        <p className="mb-4">
          Not your best week. Your median week over the last two months, including the ones with a deadline or a sick child. Weeks of 4, 6, 3, 5, 2, 5, 4 and 6 hours make your number 4.5, not 6. This decides your intensity distribution more than anything else, because riding mostly easy only works if you have enough easy hours for them to be a stimulus. At 3 hours a week, 80% easy is 2.4 hours, which drives very little. At 8 hours it is 6.4 hours, which is real training.
        </p>

        <h3 className="text-xl font-bold mb-3">2. What are you training for?</h3>
        <p className="mb-4">
          A 45-minute Zwift crit, a sub-hour Alpe and a five-hour fondo demand different things. The Alpe is a 50 to 70 minute near-steady effort with no coasting, so threshold and sub-threshold work is what moves the needle. A category C race is a series of 30-second to 3-minute surges bolted onto a threshold ride, so repeatability above FTP matters far more. A fondo is about durability, and only long rides build that. If you have no target, invent one. A plan without a target cannot tell you what to cut when time runs short.
        </p>

        <h3 className="text-xl font-bold mb-3">3. Where are you now?</h3>
        <p className="mb-4">
          Two numbers: FTP and weight. A 75 kg rider at 250 W is 3.33 W/kg. Then be honest about training age. Someone with two years of unstructured riding has low-hanging fruit and will respond to almost anything consistent. Someone who has finished three plans and stalled needs a different stimulus, not more of the same. Get a reliable FTP before you start - the{" "}
          <Link to="/zwift-ftp-calculator" className="text-zwift-orange hover:underline">FTP calculator</Link> turns a 20-minute or ramp result into training zones, and every target in every plan scales off that one number.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Your answer</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">What it changes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Under 4 h/week</td>
                <td className="py-2 pr-4">Sweet spot and threshold lean. No pure recovery rides - every session must earn its place.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">4-6 h/week</td>
                <td className="py-2 pr-4">Two hard sessions, one long ride, the rest easy. The broadest fit for amateur riders.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">7 h/week or more</td>
                <td className="py-2 pr-4">Polarised becomes realistic. Volume carries the load, so intensity can be sharper and rarer.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Goal is a long climb</td>
                <td className="py-2 pr-4">Bias to 10-20 minute intervals at 88-100% FTP. Practise the actual duration.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Goal is racing</td>
                <td className="py-2 pr-4">Bias to repeated 30 s to 3 min efforts above FTP, started from an already high heart rate.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">New to structure</td>
                <td className="py-2 pr-4">Take the simplest plan you will finish. Adherence beats optimisation by a wide margin.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">What Are Zwift Training Plans?</h2>
        <p className="mb-4">
          Think of them as <strong>virtual coaches</strong> that guide your workouts week by week. Zwift offers around 17 cycling plans plus triathlon and running plans, each tailored to a goal from basic fitness to race preparation{" "}
          <a href="https://www.zwift.com/eu-de/news/20036-zwift-training-plans#:~:text=Zwift%E2%80%99s%20training%20plans%20are%20flexible,always%20keeping%20you%20on%20track" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[1]</em>
          </a>
          . They run from a few weeks to several months, land on your calendar automatically, and usually allow a 2-3 day window per workout when life interferes. Every target is a percentage of your FTP, so the same plan gives a 180 W rider and a 300 W rider the same relative stress.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Getting Your FTP Right</h2>
        <p className="mb-4">
          FTP is roughly the maximum power you can hold for an hour, and Zwift uses it to set every zone. If you don't know yours, <strong>Zwift provides FTP tests</strong> - the 20-minute test, the shorter 2x8, or a ramp test{" "}
          <a href="https://www.zwift.com/eu-de/news/20036-zwift-training-plans#:~:text=Before%20you%20start%20any%20training,your%20FTP%20in%20this%20article" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[2]</em>
          </a>
          . Doing one before a serious plan is strongly recommended{" "}
          <a href="https://www.zwift.com/eu-de/news/20036-zwift-training-plans#:~:text=Before%20you%20start%20any%20training,your%20FTP%20in%20this%20article" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[2]</em>
          </a>
          . Don't fixate on the absolute number - it is a baseline to improve from, not a verdict{" "}
          <a href="https://www.zwift.com/eu-de/news/20036-zwift-training-plans#:~:text=or%20Functional%20Threshold%20Power%2C%20is,in%20tests%20to%20measure%20it" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[3]</em>
          </a>
          .
        </p>
        <p className="mb-4">
          Here is the part riders underestimate. An FTP set 15 W too high does not make you 15 W stronger, it makes every interval in the plan too hard by that same proportion - on a true 210 W threshold, about 7%. You then fail the last repeat of every session and conclude you are weak, when the problem is arithmetic. If a workout you finished comfortably three weeks ago is now impossible, suspect the number first. The{" "}
          <Link to="/zwift-racing-category-calculator" className="text-zwift-orange hover:underline">racing category calculator</Link> is a quick sanity check on where your figure actually places you.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Choosing the Right Plan</h2>
        <p className="mb-4">
          For riders new to structure, <em>"Zwift 101: Cycling"</em> or <em>"FTP Builder"</em> are sensible starts. FTP Builder is a 6-week plan aimed at raising aerobic capacity and FTP{" "}
          <a href="https://www.zwift.com/eu-de/news/20036-zwift-training-plans" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[4]</em>
          </a>
          , about four workouts a week and most under an hour. <em>"Build Me Up"</em> is the 10-12 week version for people who can commit months. If you want to <strong>race</strong>, the <em>"Zwift Racing"</em> plan by coach Shayne Gaffney includes race-specific work and simulations{" "}
          <a href="https://www.zwift.com/eu-de/news/20036-zwift-training-plans" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[5]</em>
          </a>
          . <em>TT Tune-Up</em> leans on sweet spot and threshold, which also suits climbing, and <em>Gran Fondo</em> mixes long weekend rides with intervals{" "}
          <a href="https://www.zwift.com/eu-de/news/20036-zwift-training-plans" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[6]</em>
          </a>
          .
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Polarised, Threshold-Heavy or Sweet Spot?</h2>
        <p className="mb-4">
          Underneath the plan names sit three philosophies about where your quality time goes. None is settled science. Here is what each asks of you and who it suits.
        </p>

        <h3 className="text-xl font-bold mb-3">Polarised</h3>
        <p className="mb-4">
          Roughly 80% of sessions genuinely easy at 55-70% FTP, roughly 20% genuinely hard, almost nothing in between. It asks for volume and patience: the easy rides have to feel almost pointless, which is hard on a trainer where every watt is on screen. The case rests partly on descriptive studies of elite endurance athletes, who tend to train this way, and partly on a modest number of comparison trials. Suits riders with 7+ hours, riders who race often enough that races supply the hard 20%, and riders who plateau because every ride drifts into tempo.
        </p>

        <h3 className="text-xl font-bold mb-3">Threshold-heavy</h3>
        <p className="mb-4">
          Most quality time at 95-105% FTP: 2 x 20 min, 3 x 15 min, 4 x 10 min. It asks for tolerance and good recovery, because threshold work costs a lot of fatigue per hour. The case is specificity - if your event is a 50 to 70 minute steady effort, training near the power you will hold is directly relevant. Suits time-crunched riders with a steady-state goal and a stable schedule. Punishes anyone who adds races on top, because that fatigue stacks quietly and then arrives all at once.
        </p>

        <h3 className="text-xl font-bold mb-3">Sweet spot</h3>
        <p className="mb-4">
          Intervals of 10-20 minutes at 84-97% FTP. It asks for consistency rather than heroism: uncomfortable but finishable, three times a week. The case is efficiency - for a rider with 4 hours it delivers far more aerobic stimulus per minute than Z2 at much lower recovery cost than true threshold. The fair criticism is that it is easy to live there forever, and riders who do often stall after a few months with a decent FTP and no top end. Suits a build block or a return from a layoff. Suits nobody as a year-round diet.
        </p>

        <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
          <p className="mb-0">
            <strong>My reading:</strong> for most amateurs, total consistent load and the number of weeks you string together matter more than the label. The approaches only separate at the extremes - polarised needs volume to work, sweet spot needs an end date. Under 5 hours a week the debate is largely academic and you should simply train close to what your event demands.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">What a Week Actually Looks Like at 3, 5 and 8 Hours</h2>
        <p className="mb-4">
          Percentages are of FTP. Warm-up means 10-15 minutes building from 50% to 70%; cool-down means 5-10 minutes under 60%.
        </p>

        <h3 className="text-xl font-bold mb-3">3 hours a week</h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>Tue, 60 min:</strong> warm-up, 3 x 10 min at 88-93% with 5 min easy, cool-down.</li>
          <li><strong>Thu, 45 min:</strong> warm-up, 5 x 3 min at 105-110% with 3 min easy, cool-down.</li>
          <li><strong>Sat, 75 min:</strong> steady at 70-78%, last 20 min as 2 x 8 min at 90% if still fresh.</li>
        </ul>
        <p className="mb-4">
          No recovery rides, because at 3 hours you cannot afford a session that does nothing. About a third of the 180 minutes sits at 88% or above, which is a high proportion by any standard. That is a build block, not a way of life - run it 8 to 10 weeks, then back off.
        </p>

        <h3 className="text-xl font-bold mb-3">5 hours a week</h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>Tue, 75 min:</strong> 2 x 20 min at 95-100% with 8 min easy between.</li>
          <li><strong>Wed, 45 min:</strong> steady 60-70%, including 3 x 5 min at 95-100 rpm for smoothness at low force.</li>
          <li><strong>Fri, 60 min:</strong> 6 x 3 min at 108-115% with 3 min easy between.</li>
          <li><strong>Sun, 2 h:</strong> endurance at 65-75% with 3 x 12 min at 88-92% in the middle hour.</li>
        </ul>
        <p className="mb-4">
          That totals 300 minutes, of which roughly 95 are at or above sweet spot - close to a third. This is the most useful week for the largest number of riders, and close to what the better built-in plans prescribe.
        </p>

        <h3 className="text-xl font-bold mb-3">8 hours a week</h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>Tue, 90 min:</strong> 5 x 5 min at 108-115% with 5 min easy, remainder at 60-65%.</li>
          <li><strong>Wed, 75 min:</strong> steady 62-72%. No intervals, no drifting up.</li>
          <li><strong>Thu, 45 min:</strong> recovery at 50-60%, high cadence, genuinely easy.</li>
          <li><strong>Sat, 2 h:</strong> 3 x 20 min at 92-97% inside an easy ride - or a Zwift race instead.</li>
          <li><strong>Sun, 2.5 h:</strong> endurance at 65-75% including a full climb at 80-85%. Alpe du Zwift is 12.2 km and 1,036 m of gain, which makes a near-perfect long sub-threshold block.</li>
        </ul>
        <p className="mb-4">
          That is 480 minutes with about 85 of them genuinely hard, so roughly 80% easy and 20% hard - polarised in practice rather than in name. The volume is what makes it work: cut it to 5 hours by deleting the easy rides and you get the worst of both. For how these weeks chain into months see{" "}
          <Link to="/blog/zwift-training-periodization" className="text-zwift-orange hover:underline">Zwift training periodization</Link>, and if a seven-day cycle never fits your life, the{" "}
          <Link to="/blog/10-day-zwift-training-week" className="text-zwift-orange hover:underline">10-day training week</Link> is a genuinely useful alternative.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Where the Built-In Plans Work, and Where They Don't</h2>
        <p className="mb-4">
          They work well when four things are true: you are new enough to structure that any coherent plan helps, your FTP is correct, your week is predictable enough to hit 4 of 4 sessions, and you have 3 to 6 hours. Under those conditions they remove the decision-making entirely, which is worth more than riders admit - the biggest cause of failed training is not choosing badly, it is not deciding at all. They work poorly in four situations.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>You have a fixed event date.</strong> Plans start when you press start, not a set number of weeks before your event. If your fondo is in 9 weeks and the plan is 12, you peak after it is over. Count backwards and drop a base week, not a build week.</li>
          <li><strong>You race two or three times a week.</strong> The plan does not know about your races and prescribes its own intensity anyway. That is how riders end up with five hard days out of seven and a falling FTP.</li>
          <li><strong>Your FTP is wrong.</strong> Retest properly instead of accepting an auto-adjustment from one strong race effort.</li>
          <li><strong>You have more than about 8 hours.</strong> The plans don't scale up, so you add endurance volume around them and change the distribution the plan assumed.</li>
        </ul>
        <p className="mb-4">
          Quick self-test: look at your last four weeks. Completed 80% or more of what you intended? A built-in plan will serve you well. Under half? The problem is not the plan's design, and a different plan will not fix it.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Executing the Workouts</h2>
        <p className="mb-4">
          Workouts appear under the "Training" tab as colour-coded blocks with on-screen targets. Most use <strong>ERG mode</strong> on a smart trainer, which sets resistance so you hit the prescribed wattage without shifting: if a block calls for 200 W, ERG holds you near 200 W regardless of terrain. Follow the cadence prompts when given - 75 rpm and 95 rpm at the same power load the muscle differently. Without ERG you shift manually and watch the number yourself.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Progression Without Digging a Hole</h2>
        <p className="mb-4">
          There are four levers - session duration, number of intervals, interval intensity, weekly frequency - and the common mistake is pulling more than one at once. Move one per week and hold the rest still. Week 1: 3 x 10 min at 90%. Week 2: 4 x 10 min at 90%. Week 3: 4 x 12 min at 90%. Week 4: easy. Do not jump to 4 x 12 min at 95% in week 2 because week 1 felt fine. It felt fine because it was week 1.
        </p>
        <p className="mb-4">
          As a rough guide I keep weekly training time growth under about 10% per week. That is a widely used heuristic rather than a proven law, and its real value is stopping you from going from 4 hours to 7 after one motivating race. The other guardrail: you should be able to finish the last interval of your hardest session. If you can't, the week was too big, not the workout.
        </p>

        <h3 className="text-xl font-bold mb-3">Signals you have overreached</h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>Power at the same effort drops.</strong> An interval you held at 105% last week now feels like 115%. The clearest single signal.</li>
          <li><strong>Heart rate won't climb.</strong> You are pushing hard and HR sits 10 bpm below where it normally lands. A suppressed ceiling under load warns you earlier than an elevated resting HR.</li>
          <li><strong>Resting HR up several mornings running.</strong> One high morning is noise. Five in a row, 5-7 bpm above normal, is information.</li>
          <li><strong>Sleep gets worse as training gets harder.</strong> Load should make you sleep better, not leave you wired at midnight.</li>
          <li><strong>Two abandoned sessions in a row.</strong> One bad day is a bad day. Two consecutive quits is your body voting.</li>
          <li><strong>The dread test.</strong> If a workout you normally enjoy has felt like a chore for a week, take the easy week now.</li>
        </ul>
        <p className="mb-4">
          The response is the same every time: three to five days at 55-65% FTP with no intervals, normal food, more sleep. That usually resolves it. If it doesn't, you are past overreaching and the fix is measured in weeks.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Recovery Weeks, and Why Skipping Them Backfires</h2>
        <p className="mb-4">
          Training does not make you fitter. Training plus recovery makes you fitter, because the adaptation happens while you rest. That is why a lighter week every third or fourth week sits in every serious plan, and why skipping it is the most common way riders sabotage themselves. It is easy to skip precisely because you feel strong at that moment - and that feeling is fitness still masked by fatigue.
        </p>
        <p className="mb-4">
          A recovery week is not a week off. Keep the same number of rides, cut total time by 40-50%, halve the interval volume, and keep the intensity of what remains. A 5-hour week becomes 2.5-3 hours, and Tuesday's 2 x 20 min at 95-100% becomes 2 x 8 min at the same watts. You keep the feel and lose the fatigue. The proof it worked: in the first hard session of the next block you produce more power at the same perceived effort. If you don't, either the recovery was too short or the block before it was too big - information you only get by taking the week.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Testing Progress Without Wrecking the Plan</h2>
        <p className="mb-4">
          A full 20-minute test costs a quality session plus two or three easy days, so the real price is half a week. Test every three weeks and you spend a sixth of your year measuring instead of improving. Three cheaper options:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>Formal tests at block boundaries only.</strong> One at the start of a 12-week plan and one at the end, placed on the last day of a recovery week when you are fresh and the cost is already paid. Put the result through the <Link to="/zwift-ftp-calculator" className="text-zwift-orange hover:underline">FTP calculator</Link> to reset your zones.</li>
          <li><strong>A repeatable benchmark session.</strong> Keep one workout - 2 x 20 min at your current 100% target works well - and repeat it every fourth week under identical conditions: same time of day, same fan, same fuelling. If average heart rate for the same power drops 4-5 bpm, you have improved even though the FTP number hasn't moved.</li>
          <li><strong>A climb as a field test.</strong> A full climb is a steady effort of known length, which makes it unusually clean. Ride it hard once per block and compare times. The <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">Alpe du Zwift calculator</Link>, the <Link to="/ventop-calculator" className="text-zwift-orange hover:underline">Ven-Top calculator</Link> and the general <Link to="/zwift-climb-time-calculator" className="text-zwift-orange hover:underline">climb time calculator</Link> convert a target time into the W/kg it needs.</li>
        </ul>
        <p className="mb-4">
          The caveat on climb testing: it measures W/kg, not FTP, so a weight change moves your time with no change in fitness - see{" "}
          <Link to="/blog/power-to-weight-ratio-science" className="text-zwift-orange hover:underline">the power-to-weight deep dive</Link> for what that ratio does and doesn't tell you. Structured interval training raises the duration and intensity you can sustain{" "}
          <a href="https://www.cyclingweekly.com/fitness/training/the-best-workouts-and-training-plans-on-zwift-the-coachs-choice" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[7]</em>
          </a>
          , and Zwift will sometimes offer an FTP bump on its own after a strong effort. Treat that as a prompt to test properly, not as a test result.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Worked Example: 2.8 W/kg to Under an Hour on the Alpe</h2>
        <p className="mb-4">
          Take a concrete rider: 75 kg, FTP 210 W, so 2.8 W/kg. Alpe du Zwift is 12.2 km with 1,036 m of gain, roughly 8.5% average across 21 hairpins. This site's fit for the climb is{" "}
          <code>time_seconds = 148.60*(W/kg)^2 - 1954.08*(W/kg) + 8329.87</code>, which puts that rider at about <strong>67:03</strong>. Going under an hour takes roughly 3.2 W/kg, or about <strong>59:58</strong>. The gap is seven minutes and 14% in ratio terms.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">W/kg</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Predicted time</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Watts at 75 kg</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">2.8</td>
                <td className="py-2 pr-4">67:03</td>
                <td className="py-2 pr-4">210 W</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">2.9</td>
                <td className="py-2 pr-4">65:13</td>
                <td className="py-2 pr-4">218 W</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">3.0</td>
                <td className="py-2 pr-4">63:25</td>
                <td className="py-2 pr-4">225 W</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">3.1</td>
                <td className="py-2 pr-4">61:40</td>
                <td className="py-2 pr-4">233 W</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">3.2</td>
                <td className="py-2 pr-4">59:58</td>
                <td className="py-2 pr-4">240 W</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-4 mt-4">
          The last column hides a second route. Reaching 240 W at 75 kg is a 30 W gain. Reaching 227 W at 71 kg is the same 3.2 W/kg from a 17 W gain plus 4 kg. For a rider carrying spare weight the split route is far more achievable, which is why I would not build this block around power alone. If you are already lean, power is the only lever and 12 weeks may not be enough.
        </p>

        <h3 className="text-xl font-bold mb-3">A realistic 12-week shape</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Weeks</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Focus</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Key sessions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">1-3</td>
                <td className="py-2 pr-4">Base and sweet spot</td>
                <td className="py-2 pr-4">3 x 12 min at 88-92%, building to 3 x 15 min. Long ride grows 90 to 120 min.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">4</td>
                <td className="py-2 pr-4">Recovery</td>
                <td className="py-2 pr-4">Volume cut ~45%. Keep 2 x 8 min at 90% for feel.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">5-7</td>
                <td className="py-2 pr-4">Threshold</td>
                <td className="py-2 pr-4">2 x 20 min at 95-100%, then 3 x 15 min. Second session 5 x 4 min at 108-112%.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">8</td>
                <td className="py-2 pr-4">Recovery, mid-test</td>
                <td className="py-2 pr-4">Easy week, ramp or 20-min test on the last day.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">9-11</td>
                <td className="py-2 pr-4">Climb-specific</td>
                <td className="py-2 pr-4">Long blocks at 88-95% of the <em>new</em> FTP: 2 x 25 min, then one 40 min block. One full Alpe at target pace.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">12</td>
                <td className="py-2 pr-4">Taper and attempt</td>
                <td className="py-2 pr-4">Volume down ~50%, two short openers, then the timed ride on a fresh day.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30 mt-4">
          <p className="mb-0">
            <strong>Honest caveat:</strong> 14% in 12 weeks is the optimistic end. Individual response to identical training varies enormously, and nobody can tell you in advance where in that range you sit - two riders can run the same block and finish it in very different places. This is a reasonable bet for someone who has not trained structurally in a while and has weight to lose. For a rider who has trained consistently for years at 2.8 W/kg, 12 weeks more likely delivers 3.0 than 3.2, and the sub-hour attempt belongs in a second block. That is not a failure of the plan, it is what the biology looks like.
          </p>
        </div>

        <p className="mb-4 mt-4">
          For pacing the attempt itself - where to sit relative to threshold, and why going out 10 W too hard on the first two kilometres costs more than it gains - see{" "}
          <Link to="/blog/conquer-alpe-du-zwift" className="text-zwift-orange hover:underline">my guide to conquering Alpe du Zwift</Link>.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Fuelling, Rest and Consistency</h2>
        <p className="mb-4">
          Eat carbohydrate before hard sessions and during anything over an hour. Get a fan and a towel - indoor sweat rates are high and dehydration flattens power long before you feel thirsty. Take the rest days the plan gives you rather than cramming five sessions into three days, and don't add hard races on unscheduled days.
        </p>
        <p className="mb-4">
          One specific point, because it trips people up: if you are eating in a deficit to lose weight for a climbing goal, don't run it through your hardest weeks - a deficit blunts the adaptation you are paying for with those intervals. My own working approach is a modest deficit of roughly 300-400 kcal a day during base and recovery weeks, then eating to fuel through the threshold and climb-specific blocks. That is reasoning rather than a study result, but the logic is straightforward.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Conclusion and Next Steps</h2>
        <p className="mb-4">
          A training plan is mostly a decision-removal device. Its value is that on a Tuesday evening when you are tired and undecided, the session is already chosen. Match the plan to your honest hours, your real event and your actual starting point. Set FTP correctly, take the recovery weeks even when you feel strong, and test rarely enough that you spend the year training rather than measuring. Consistent structured training <strong>will</strong> make you stronger{" "}
          <a href="https://www.cyclingweekly.com/fitness/training/the-best-workouts-and-training-plans-on-zwift-the-coachs-choice" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[7]</em>
          </a>
          . When a plan ends, test, then choose the next block from what you found rather than what sounds fun.
        </p>
        <p className="mb-4">
          To set a target before you start, run your numbers through the{" "}
          <Link to="/zwift-ftp-calculator" className="text-zwift-orange hover:underline">FTP calculator</Link> and the{" "}
          <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">Alpe du Zwift calculator</Link>, then browse the rest of the{" "}
          <Link to="/blog/category/training" className="text-zwift-orange hover:underline">training articles</Link>. If you think something here is wrong, tell me - the{" "}
          <Link to="/contact" className="text-zwift-orange hover:underline">contact page</Link> works, and how I handle corrections is set out in the{" "}
          <Link to="/editorial-policy" className="text-zwift-orange hover:underline">editorial policy</Link>.
        </p>
      </div>

      <div className="border-t pt-6 mt-8">
        <h3 className="text-xl font-bold mb-4">Sources</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          <li>
            <a href="https://www.zwift.com/eu-de/news/20036-zwift-training-plans" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
              [1-6] Zwift Official - Training Plans Guide
            </a>
          </li>
          <li>
            <a href="https://www.cyclingweekly.com/fitness/training/the-best-workouts-and-training-plans-on-zwift-the-coachs-choice" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
              [7] Cycling Weekly - Best Zwift Workouts and Training Plans
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <BlogPost
      content={content}
    />
  );
};

export default ZwiftTrainingPlans101;
