import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const MasteringVenTop = () => {
  const content = (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="mb-4">
          If Alpe du Zwift is a legend, <em>Ven-Top</em> is a beast of its own. Ven-Top is Zwift's virtual replica of Mont Ventoux, the "Giant of Provence" made famous by the Tour de France. It's by far the longest climb in Zwift, featuring <strong>20.9 km</strong> of uphill riding with up to <strong>1,534 m</strong> of elevation gain{" "}
          <a href="https://www.zwift.com/events/view/5030746#:~:text=It%E2%80%99s%20peak%20Tour%20Fever%20on,of%20cycling%E2%80%99s%20most%20iconic%20climbs" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[1]</em>
          </a>
          . The average grade might look milder than the Alpe's, but that is exactly what makes it dangerous. The <strong>average Zwifter takes about 1 hour 33 minutes</strong> to summit Ven-Top, roughly 28 minutes longer than the average Alpe du Zwift time{" "}
          <a href="https://zwiftinsider.com/ven-top-sub-60/#:~:text=The%20hardest%20climb%20on%20Zwift,to%20complete%20Alpe%20du%20Zwift" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[2]</em>
          </a>
          . This guide is the counterpart to my Alpe article, and the contrast between the two climbs is the thread running through all of it.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Why Ven-Top Is a Different Problem, Not a Longer Alpe</h2>
        <p className="mb-4">
          Alpe du Zwift is 12.2 km with 1,036 m of gain, about 8.5% average across 21 hairpins. Ven-Top is roughly 20.9 km for about 1,534 m of climbing, about 7.3% average. So Ven-Top is around 71% longer with 48% more climbing, but its average gradient is 1.2 percentage points <em>shallower</em>. Those three facts generate everything else: a longer effort, a higher road speed at any given power, and a lower sustainable percentage of FTP.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Metric</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Alpe du Zwift</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Ven-Top</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Length</td>
                <td className="py-2 pr-4">12.2 km</td>
                <td className="py-2 pr-4">~20.9 km</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Elevation gain</td>
                <td className="py-2 pr-4">1,036 m</td>
                <td className="py-2 pr-4">~1,534 m</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Average gradient</td>
                <td className="py-2 pr-4">~8.5%</td>
                <td className="py-2 pr-4">~7.3%</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Predicted time at 3.0 W/kg</td>
                <td className="py-2 pr-4">1h 03m</td>
                <td className="py-2 pr-4">1h 28m</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Predicted time at 4.0 W/kg</td>
                <td className="py-2 pr-4">48m</td>
                <td className="py-2 pr-4">1h 07m</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Intensity most riders hold</td>
                <td className="py-2 pr-4">~90-95% FTP</td>
                <td className="py-2 pr-4">~85-88% FTP</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">What it really tests</td>
                <td className="py-2 pr-4">Threshold power</td>
                <td className="py-2 pr-4">Durability, fuelling and heat</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          Those predicted times come from this site's own regression fits: the Alpe fit is time_seconds = 148.60*(W/kg)² - 1954.08*(W/kg) + 8329.87, and the Ven-Top fit is time_minutes = 3.21 + 253.38/(W/kg). Run your numbers through the <Link to="/ventop-calculator" className="text-zwift-orange hover:underline">Ven-Top calculator</Link> and the <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">Alpe du Zwift calculator</Link>, or see them side by side in the <Link to="/alpe-vs-ventop" className="text-zwift-orange hover:underline">full Alpe vs Ven-Top comparison</Link>. The gap never closes: at 3.0 W/kg Ven-Top costs about 24 extra minutes, and even at 5.0 W/kg it still costs 16. You do not grow out of the extra time, you just spend it faster.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The Route and Stats</h2>
        <p className="mb-4">
          Ven-Top sits in Zwift's France map and climbs to the observatory at Mont Ventoux's peak. Depending on where you start counting you will see anywhere from <strong>1,480 m</strong> to 1,534 m quoted. The timed KOM segment is 19 km and 1,480 m, an average of about 7.8%, while the full route is 20.9 km and 1,534 m, about 7.3%. Every Ven-Top figure in this guide is the full route{" "}
          <a href="https://zwiftinsider.com/route/ven-top/#:~:text=in%20game%2C%20climbing%201480%20meters,of%20the%20timed%20KOM%20segment" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[3]</em>
          </a>
          {" "}
          <a href="https://www.zwift.com/events/view/5030746#:~:text=It%E2%80%99s%20peak%20Tour%20Fever%20on,of%20cycling%E2%80%99s%20most%20iconic%20climbs" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[1]</em>
          </a>
          . Either way it is close to climbing Alpe du Zwift one and a half times in one go. Breaking an hour has been described as requiring roughly 5 W/kg sustained for that hour, a "mammoth effort by any consideration"{" "}
          <a href="https://zwiftinsider.com/ven-top-sub-60/#:~:text=is%20so%20difficult,mammoth%20effort%20by%20any%20consideration" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[4]</em>
          </a>
          . For most of us, 90 minutes or more is the realistic bracket, and first-timers regularly spend over 1h45m up there.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Forest, Chalet Reynard, Moonscape: How the Gradient Really Changes</h2>
        <p className="mb-4">
          That 7.3% average is one of the more misleading numbers in Zwift. Ven-Top follows the Bedoin ascent of Mont Ventoux, and that road has three distinct acts rather than one steady grade. Pace to the average and you pace all three of them wrong.
        </p>
        <p className="mb-4">
          <strong>The opening (first 5-6 km)</strong> is the shallowest part of the whole climb, roughly 4-5%. The road is open, you are moving quickly, and holding a good speed does not feel like much work. This is the trap. Alpe du Zwift punches you with a steep ramp inside the first minute, which is a built-in brake on enthusiasm. Ven-Top opens by flattering you.
        </p>
        <p className="mb-4">
          <strong>The forest (roughly 6 to 16 km)</strong> is where the gradient roughly doubles. This nine or ten kilometre stretch up to Chalet Reynard is the hardest sustained section: long spells around 9%, trees on both sides so there is nothing to look at, and effectively no relief. Most riders think they lost Ven-Top here. Usually the damage was done in the opening and only became visible in the forest.
        </p>
        <p className="mb-4">
          <strong>Above the treeline (final ~6 km)</strong> the bare limestone moonscape begins and the gradient eases to something like 7-8%, with a kick again in the last kilometre. Yet this is where almost everyone slows down, because you have already been climbing for over an hour. Easier road, harder effort. That contradiction is the whole climb in one sentence, and it is why the plan below saves everything for here.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Where the Air Starts Costing You Watts</h2>
        <p className="mb-4">
          On the Alpe, aerodynamics are close to irrelevant. On Ven-Top's lower slopes they are not, and I think this is the most under-appreciated difference between the two climbs. Aerodynamic power scales with the cube of speed, so a modest speed increase gets expensive fast. Take a 75 kg rider on an 8 kg bike at 250 W, and assume a CdA of 0.30 m² and a rolling resistance coefficient of 0.004. Those coefficients are my assumptions rather than measured Zwift values, so read the table as a first approximation of the effect's shape, not as exact in-game figures.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Section</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Gradient</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Speed at 250 W</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Power lost to air</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Alpe du Zwift (average)</td>
                <td className="py-2 pr-4">8.5%</td>
                <td className="py-2 pr-4">~12 km/h</td>
                <td className="py-2 pr-4">~7 W (2.8%)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Ven-Top lower slopes</td>
                <td className="py-2 pr-4">~4.5%</td>
                <td className="py-2 pr-4">~20 km/h</td>
                <td className="py-2 pr-4">~31 W (12%)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Ven-Top forest</td>
                <td className="py-2 pr-4">~9%</td>
                <td className="py-2 pr-4">~12 km/h</td>
                <td className="py-2 pr-4">~6 W (2.4%)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Ven-Top above treeline</td>
                <td className="py-2 pr-4">~7.5%</td>
                <td className="py-2 pr-4">~14 km/h</td>
                <td className="py-2 pr-4">~10 W (3.8%)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          Two conclusions follow. First, on the lower slopes you hand roughly four times as large a share of your power to the air as you ever do on the Alpe, so a watt spent there buys less speed than the same watt in the forest. That is a <em>physical</em> argument for starting conservatively, separate from the physiological one. Second, drafting matters here in a way it never does on the Alpe: sitting behind someone on a 9% ramp does almost nothing, but at 20 km/h it genuinely helps, as covered in my piece on <Link to="/blog/zwift-drafting-physics-aerodynamics" className="text-zwift-orange hover:underline">Zwift drafting physics and aerodynamics</Link>. At 337 W the loss on the lower slopes rises to roughly 61 W, about 18% of total power, which is where frame choice stops being cosmetic.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">What the Extra 25 Minutes Does to You</h2>
        <p className="mb-4">
          Adding 20-25 minutes to a climbing effort is not a linear change. <strong>The effort becomes a true steady-state test.</strong> A 60-minute Alpe sits close to FTP more or less by definition, and you can bluff a fair amount of it with stubbornness. A 90-minute Ven-Top will not allow that. Most riders find their sustainable output lands around 85-88% of FTP, and the penalty for going over is not a wall you hit but a slow decay through the last third that is very hard to reverse mid-climb.
        </p>
        <p className="mb-4">
          <strong>Fuelling stops being optional.</strong> On the Alpe you can usually run on whatever you ate earlier. On Ven-Top you cannot, and the arithmetic below is more dramatic than most people expect.
        </p>
        <p className="mb-4">
          <strong>Heat becomes the real limiter.</strong> Roughly three quarters of the energy your body burns leaves as heat rather than ever reaching the pedals. At 250 W of mechanical output that is something like 800-900 W of heat to shed, indoors, with no road speed helping you. Over 60 minutes most setups cope. Over 90 minutes core temperature keeps creeping up, heart rate drifts upward at constant power, and sustainable output quietly falls. That is a large part of why a rider who holds 3.3 W/kg up the Alpe often manages only 3.0 W/kg up Ven-Top.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Pacing: Why Negative Splitting Pays More Here</h2>
        <p className="mb-4">
          Riding the second half harder than the first works on both climbs, but it pays considerably better on Ven-Top, for three reasons that stack. The first is arithmetic: on a 60-minute Alpe a bad opening 15 minutes leaves you 45 minutes to hang on, whereas on a 90-minute Ven-Top a bad opening 25 minutes leaves you 65 minutes to hang on, and those are exactly the minutes when you are hottest and most depleted. The second is that the gradient profile invites the mistake, because Ven-Top opens with its shallowest section where high power feels cheap. The third is the aerodynamic point above: front-loading is the wrong order twice over, physiologically and physically.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Phase</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Where</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Roughly</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Target power</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">1. The opening</td>
                <td className="py-2 pr-4">Start to ~6 km</td>
                <td className="py-2 pr-4">First ~20 min</td>
                <td className="py-2 pr-4">78-83% of FTP</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">2. The forest</td>
                <td className="py-2 pr-4">~6 km to Chalet Reynard</td>
                <td className="py-2 pr-4">~40-45 min</td>
                <td className="py-2 pr-4">85-88% of FTP</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">3. Above the treeline</td>
                <td className="py-2 pr-4">Final ~6 km</td>
                <td className="py-2 pr-4">~25 min</td>
                <td className="py-2 pr-4">88-95% of FTP, building</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30 mb-4">
          <p>
            <strong>The phase-one test:</strong> if the opening feels like about the right effort, it is too hard. It should feel almost boringly easy, as though you are giving away time. You are not. You are buying the ability to lift in phase three, and on a climb this long that lift is worth more than the head start.
          </p>
        </div>
        <p className="mb-4">
          Across the whole climb that plan averages roughly 85-87% of FTP, which is about right for 90 minutes. Scale every number down two or three points if this is your first attempt or you suspect your FTP is flattering, since a stale FTP makes the whole plan wrong from the first pedal stroke. Within each phase, still ride the terrain: when the gradient slackens, back off slightly and spin; when it kicks above 10%, add a few watts to keep momentum rather than grinding to a crawl. Note how different this is from my <Link to="/blog/conquer-alpe-du-zwift" className="text-zwift-orange hover:underline">guide to conquering Alpe du Zwift</Link>, where sitting at or just above FTP through the middle third is the correct move rather than a mistake.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The Fuelling Maths for a 90-Minute Climb</h2>
        <p className="mb-4">
          Here is the calculation that made me stop treating Ven-Top like a long Alpe. Take that same 75 kg rider, this time at 225 W, which is the 3.0 W/kg case from the tables above: about 88 minutes for Ven-Top against about 63 for the Alpe. Human cycling gross efficiency sits around 20-24%, so call it 22%, meaning 225 W at the pedals costs roughly 1,020 W of metabolic power. Over the Alpe that is roughly 920 kcal; over Ven-Top it is roughly 1,290 kcal. At this intensity something like three quarters of the fuel comes from carbohydrate, which works out at about <strong>175 g of carbohydrate for the Alpe and about 240 g for Ven-Top</strong>. A trained rider stores somewhere near 400-500 g of glycogen across muscle and liver, but only what sits in the working leg muscles is genuinely available to you, and that is a good deal less than the headline number. The Alpe fits inside it comfortably. Ven-Top does not, and it certainly does not if you started already part-depleted from yesterday's session.
        </p>
        <p className="mb-4">
          <strong>Before:</strong> aim for roughly 1-2 g of carbohydrate per kilogram of body weight in the two to three hours beforehand, so 75-150 g for a 75 kg rider. This is the step that separates an effort over an hour from one under it. For a 45-minute ride it barely matters what you ate; for a 90-minute climb it is most of the difference between finishing strong and unravelling around Chalet Reynard.
        </p>
        <p className="mb-4">
          <strong>During:</strong> around 60 g of carbohydrate per hour is the standard target for this length of effort, reachable with a single glucose-based source. Going meaningfully above it needs a glucose-plus-fructose mix, because the two sugars use different intestinal transporters and glucose alone saturates its own transporter near that rate. Over 90 minutes that is about 90 g total, replacing a bit over a third of what you burn. It is not meant to break even, only to stop the tank hitting the bottom in the last 20 minutes, which is where Ven-Top is decided. Cheap homemade mixes do the job, as I covered in <Link to="/blog/the-glucose-alchemist-how-to-fuel-a-world-tour-effort-on-a-ramen-budget" className="text-zwift-orange hover:underline">The Glucose Alchemist</Link>.
        </p>
        <p className="mb-4">
          <strong>Fluid and cooling:</strong> sweat rates of 1-1.5 litres per hour are ordinary indoors, so 90 minutes costs 1.5-2.25 litres, and a 75 kg rider only has to lose about 1.5 kg to reach the 2% of body mass mark where performance measurably suffers. Two bottles is a minimum here. Many riders find indoor efforts harder specifically because of heat buildup and lack of airflow.
          Point your fan at your chest and face rather than your legs, and switch it on before you start climbing rather than when you first start to suffer.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Picking a Realistic First Target</h2>
        <p className="mb-4">
          The honest target for a first Ven-Top is to finish without blowing up, at a time you can beat on the second attempt. Chasing a number on attempt one is how people end up soft-pedalling from 15 km with nothing left. Still, it helps to know where you should land, so here is what the site's model predicts alongside the Alpe at the same power-to-weight.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Sustained W/kg</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Ven-Top</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Alpe du Zwift</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Difference</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">2.5</td>
                <td className="py-2 pr-4">1h 45m</td>
                <td className="py-2 pr-4">1h 13m</td>
                <td className="py-2 pr-4">+32 min</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">3.0</td>
                <td className="py-2 pr-4">1h 28m</td>
                <td className="py-2 pr-4">1h 03m</td>
                <td className="py-2 pr-4">+24 min</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">3.5</td>
                <td className="py-2 pr-4">1h 16m</td>
                <td className="py-2 pr-4">55m</td>
                <td className="py-2 pr-4">+20 min</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">4.0</td>
                <td className="py-2 pr-4">1h 07m</td>
                <td className="py-2 pr-4">48m</td>
                <td className="py-2 pr-4">+18 min</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">4.5</td>
                <td className="py-2 pr-4">59m 30s</td>
                <td className="py-2 pr-4">42m</td>
                <td className="py-2 pr-4">+17 min</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          Two numbers are worth memorising: going under 90 minutes needs about <strong>2.9 W/kg</strong> held for the whole climb, and going under 60 minutes needs about <strong>4.5 W/kg</strong> held for a full hour, which is why the sub-60 club is very small. For comparison, the same models put the sub-hour mark on the Alpe at roughly 3.2 W/kg. These are curves fitted to real ride data rather than physics simulations, so treat them as good to within a couple of minutes rather than exact; I have written up <Link to="/blog/regression-analysis-methodology" className="text-zwift-orange hover:underline">how the fits were built and validated</Link> if you want the working. A simple way to choose your target is to take the W/kg you genuinely held on your last Alpe attempt, subtract about 0.2-0.3, and pace to that. The subtraction is the duration penalty, and it is the number most riders refuse to accept until Ven-Top teaches it to them.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">How to Know You Paced It Right</h2>
        <p className="mb-4">
          The finishing time tells you how fit you were. These four checks in the ride file tell you whether you rode the climb <em>well</em>, which is the part you can fix next time.
        </p>
        <ul className="list-disc list-outside ml-5 space-y-2 mb-4">
          <li><strong>Last 20 minutes versus first 20 minutes.</strong> If your average power over the final 20 is equal or higher, you paced it. If the opening 20 is more than about 5% higher, you started too hard.</li>
          <li><strong>Heart rate against power in the final third.</strong> Heart rate drifting upward while power holds steady is normal on a 90-minute effort. Heart rate pinned high while power falls away means you were over your ceiling and the effort was decaying, not drifting.</li>
          <li><strong>Could you have held the finishing power five minutes longer?</strong> A comfortable yes means you left time on the road. Counting down the last 500 m in seconds is about right.</li>
          <li><strong>Cadence.</strong> A drop of 10 rpm or more in the final section is a muscular fatigue signal, and usually means too big a gear throughout or too aggressive an opening.</li>
        </ul>
        <p className="mb-4">
          Once pacing is clean, improvement is about raising the ceiling rather than distributing the effort better, and the work that raises it is aerobic: long tempo, sweet spot, and enough volume that 90 minutes stops feeling like an event. <Link to="/blog/power-to-weight-ratio-science" className="text-zwift-orange hover:underline">The power-to-weight deep dive</Link> covers what actually moves your W/kg and in what order, and <Link to="/blog/zwift-training-plans-101" className="text-zwift-orange hover:underline">Zwift's structured training plans</Link> are a sensible route if you would rather follow a plan than design one.
        </p>
        <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
          <p>
            <strong>Not ready for Ven-Top yet?</strong> Better to decide that before you start than at kilometre 15. The <Link to="/zwift-climbs" className="text-zwift-orange hover:underline">Zwift climbs overview</Link> lists shorter ascents worth using as stepping stones, and <Link to="/blog/the-data-behind-zwift-climbing" className="text-zwift-orange hover:underline">the data behind Zwift climbing</Link> shows which pacing patterns separate good ascents from bad ones. A rider who can hold steady power for a full 45 minutes on the Alpe is close to ready for the Giant of Provence.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Mental Tricks</h2>
        <p className="mb-4">
          Ven-Top is a huge mental test, and its psychology differs from the Alpe's in a specific way: the Alpe counts down 21 numbered hairpins for you, so you always know exactly how much suffering remains. Ven-Top gives you almost no markers, which is why it feels endless. Build your own. "Get to the treeline" and "get to the next kilometre" are better targets than the summit. Some riders cover the distance readout entirely and watch only power and time, to avoid the demoralising arithmetic of how far is left. Little physical changes help too: shifting cadence by 10 rpm for a minute, or standing briefly, redistributes load between muscle groups and buys back a surprising amount of morale.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Chasing a Fast Time</h2>
        <p className="mb-4">
          If you are hunting a personal record, note the aero table above: on a climb this long with this much shallow ground, an all-round fast bike can beat a pure climbing setup, which is not true on the Alpe. And if you are aiming at the hour, know what you are signing up for: breaking 60 minutes has been described as requiring an all-out effort of roughly <strong>5 W/kg for an hour</strong>, "a mammoth effort by any consideration"{" "}
          <a href="https://zwiftinsider.com/ven-top-sub-60/#:~:text=is%20so%20difficult,mammoth%20effort%20by%20any%20consideration" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[4]</em>
          </a>
          . My own fitted curve puts it nearer 4.5 W/kg, and I would trust the lived experience over the regression at that end of the range, because there is very little data up there to fit to. Either way it is elite territory, and almost nobody reading this is in it.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="mb-4">
          Ven-Top is not the Alpe with more kilometres. It is a longer, faster, hotter problem that rewards patience, a real fuelling plan and a genuine negative split, and punishes the confidence a shallow opening gradient gives you. Get the first 20 minutes right, eat before you think you need to, point a fan at your chest, and save the effort for above the treeline. Bonne chance, and ride on.
        </p>
      </div>

      <div className="border-t pt-6 mt-8">
        <h3 className="text-xl font-bold mb-4">Sources</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          <li>
            <a href="https://www.zwift.com/events/view/5030746" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
              [1] Zwift Official - Ven-Top Event
            </a>
          </li>
          <li>
            <a href="https://zwiftinsider.com/ven-top-sub-60/" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
              [2, 4] Zwift Insider - Ven-Top Sub-60 Attempt
            </a>
          </li>
          <li>
            <a href="https://zwiftinsider.com/route/ven-top/" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
              [3] Zwift Insider - Ven-Top Route Details
            </a>
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
          name: "Ven Top Calculator",
          path: "/ventop-calculator",
          description: "Predict your Ven Top climbing time based on your weight and power"
        },
        {
          name: "Alpe du Zwift Calculator",
          path: "/alpeduzwiftcalculator",
          description: "Compare your Alpe du Zwift time with Ven Top performance"
        }
      ]}
    />
  );
};

export default MasteringVenTop;
