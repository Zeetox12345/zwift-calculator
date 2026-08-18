import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const ConquerAlpeDuZwift = () => {
  const content = (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="mb-4">
          Alpe du Zwift is arguably the most iconic and daunting climb in Zwift. Modeled after France's famous Alpe d'Huez, it features 21 hairpin bends over 12.2 km, averaging an 8.5% gradient with 1,036 m of elevation gain{" "}
          <a href="https://zwiftinsider.com/alpe-estimates/#:~:text=Alpe%20du%20Zwift%20is%20by,to%20reach%20the%20summit" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[1]</em>
          </a>
          . Many riders set a goal of cracking the one-hour mark on this climb - a feat requiring roughly ~3.2 watts/kg sustained{" "}
          <a href="https://www.rouleur.cc/blogs/rouleur-performance/how-to-conquer-the-alpe-du-zwift#:~:text=minute%20or%20two%20minutes%20of,%E2%80%9D" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[2]</em>
          </a>
          . Whether you're aiming for that 60-minute badge or just want to reach the summit without cracking, this guide will help you conquer the Alpe faster and more confidently.
        </p>
        <p className="mb-4">
          The pattern I keep seeing in my own files and other people's is the same: the Alpe is rarely lost in the legs, it is lost in the first ten minutes. Everything below is built on the same equation that powers the{" "}
          <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">Alpe du Zwift calculator</Link>{" "}
          here, so the article and the tool agree.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Know the Climb</h2>
        <p className="mb-4">
          First, it helps to understand what you're up against. Alpe du Zwift <em>is</em> the longest, steepest ascent in the game{" "}
          <a href="https://zwiftinsider.com/alpe-estimates/#:~:text=Alpe%20du%20Zwift%20is%20by,to%20reach%20the%20summit" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[1]</em>
          </a>
          . Top professional Zwifters can blitz it in under 40 minutes, while casual riders often take 1.5 to 2 hours{" "}
          <a href="https://www.zwift.com/eu-fr/news/24335-race-recon-watopia-road-to-sky#:~:text=Road%20to%20Sky%20is%20the,it%20in%20under%2040%20minutes" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[3]</em>
          </a>
          . The climb is relentless - there are practically no flat sections to recover, just switchback after switchback of steep road. Breaking it into sections can make it more mentally manageable. Many riders (and even race coaches) split the Alpe into three parts: the bottom (turns 21-16), middle (turns 16-7), and top (turns 7-1){" "}
          <a href="https://www.zwift.com/eu-fr/news/24335-race-recon-watopia-road-to-sky#:~:text=,average%20gradient" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[4]</em>
          </a>
          {" "}
          <a href="https://www.zwift.com/eu-fr/news/24335-race-recon-watopia-road-to-sky#:~:text=,average%20gradient" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[5]</em>
          </a>
          . Treat it like intervals: settle into a sustainable rhythm in the lower third, push closer to your threshold in the middle, and give whatever you have left in the final kilometers.
        </p>
        <p className="mb-4">
          Two numbers are worth memorising. 1,036 m over 12.2 km is an 8.49% average, and at 3.2 W/kg the model puts you at almost exactly 60 minutes - so the one-hour rider climbs at about 1,036 vertical metres per hour and averages 12.2 km/h. Vertical metres per hour is the honest currency here, because at this gradient nearly all your power goes into lifting your own mass. The{" "}
          <Link to="/zwift-climbs" className="text-zwift-orange hover:underline">Zwift climbs overview</Link>{" "}
          puts the Alpe next to the game's other long ascents.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The Profile in Detail: What 21 Hairpins Do to the Gradient</h2>
        <p className="mb-4">
          The hairpins count down: the first sign after the arch says 21, the last before the plateau says 1. That countdown turns a 12 km wall into 21 numbered chunks arriving every two to three minutes.
        </p>
        <p className="mb-4">
          Geometrically, a hairpin is where the road briefly stops climbing so hard. To turn 180 degrees on a mountainside it has to run across the slope rather than up it, so the gradient readout dips through the bend and kicks back on the exit. That happens 21 times, which is why the Alpe feels rhythmic rather than uniform. They are timing marks, not rest stops: a five-second dip at 12 km/h is 17 metres of road, and nobody clears lactate in 17 metres.
        </p>
        <h3 className="text-xl font-bold mb-3">The shape of the effort in thirds</h3>
        <p className="mb-4">
          The Alpe is front-loaded. The lower slopes sit clearly above the 8.5% average, with ramps into double digits before you have settled, and the final kilometre is the shallowest road on the climb. I have no metre-by-metre survey to quote, so the gradients below are <strong>my estimates</strong>, constrained to add back to the verified 1,036 m.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Section</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Hairpins</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Distance</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Est. gradient</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Gain</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Time in a 60 min ride</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Bottom</td>
                <td className="py-2 pr-4">21 to 15</td>
                <td className="py-2 pr-4">0.0 - 4.1 km</td>
                <td className="py-2 pr-4">~9.3%</td>
                <td className="py-2 pr-4">~382 m</td>
                <td className="py-2 pr-4">~22:00</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Middle</td>
                <td className="py-2 pr-4">14 to 8</td>
                <td className="py-2 pr-4">4.1 - 8.2 km</td>
                <td className="py-2 pr-4">~8.5%</td>
                <td className="py-2 pr-4">~350 m</td>
                <td className="py-2 pr-4">~20:15</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Top</td>
                <td className="py-2 pr-4">7 to 1, plus run-in</td>
                <td className="py-2 pr-4">8.2 - 12.2 km</td>
                <td className="py-2 pr-4">~7.6%</td>
                <td className="py-2 pr-4">~304 m</td>
                <td className="py-2 pr-4">~17:45</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 mt-4">
          That last column holds the most misunderstood fact here. <strong>Equal thirds by distance are not equal thirds by time.</strong> At steady power your vertical speed is roughly constant, so time follows altitude rather than kilometres: an evenly paced 60-minute ride is about 22 / 20 / 18, not 20 / 20 / 20. Reach hairpin 15 in 19 minutes and you are three minutes ahead of schedule, not two.
        </p>
        <h3 className="text-xl font-bold mb-3">Where riders actually lose time</h3>
        <p className="mb-4">
          Three places. Hairpins 21 to 18, where fresh legs make 20 extra watts feel free. The block from about hairpin 14 to 9, where the scenery stops changing and there is no landmark to aim at, so power drifts down five or ten watts with nothing dramatic to tell you. And hairpins 4 to 1, for anyone who overcooked the bottom. Guard the middle: put a three-minute average power field on screen and check it at every sign.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">A Pacing Model Built on This Site's Own Equation</h2>
        <p className="mb-4">
          The calculator here uses a quadratic fit to real climb data:
        </p>
        <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30 mb-4">
          <p className="font-mono text-sm">
            time_seconds = 148.60 &times; (W/kg)<sup>2</sup> - 1954.08 &times; (W/kg) + 8329.87
          </p>
        </div>
        <p className="mb-4">
          That answers "what time will this power give me". For pacing you want the inverse: set it equal to your target time <em>T</em>, rearrange to 148.60x&sup2; - 1954.08x + (8329.87 - T) = 0, and take the lower root:
        </p>
        <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30 mb-4">
          <p className="font-mono text-sm">
            W/kg = [ 1954.08 - &radic;(1954.08&sup2; - 594.4 &times; (8329.87 - T)) ] / 297.2
          </p>
        </div>
        <p className="mb-4">
          The lower root, because the parabola turns back upward at about 6.57 W/kg, far outside the range it was fitted on - anything above roughly 5.5 W/kg is extrapolation. Here is what the inversion gives, with the watts each figure implies at four common weights.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Target</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">W/kg (est.)</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">60 kg</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">70 kg</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">75 kg</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">85 kg</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">70:00</td>
                <td className="py-2 pr-4">2.65</td>
                <td className="py-2 pr-4">159 W</td>
                <td className="py-2 pr-4">185 W</td>
                <td className="py-2 pr-4">198 W</td>
                <td className="py-2 pr-4">225 W</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">65:00</td>
                <td className="py-2 pr-4">2.91</td>
                <td className="py-2 pr-4">175 W</td>
                <td className="py-2 pr-4">204 W</td>
                <td className="py-2 pr-4">218 W</td>
                <td className="py-2 pr-4">248 W</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4"><strong>60:00</strong></td>
                <td className="py-2 pr-4"><strong>3.20</strong></td>
                <td className="py-2 pr-4">192 W</td>
                <td className="py-2 pr-4">224 W</td>
                <td className="py-2 pr-4">240 W</td>
                <td className="py-2 pr-4">272 W</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">55:00</td>
                <td className="py-2 pr-4">3.51</td>
                <td className="py-2 pr-4">211 W</td>
                <td className="py-2 pr-4">246 W</td>
                <td className="py-2 pr-4">263 W</td>
                <td className="py-2 pr-4">299 W</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">50:00</td>
                <td className="py-2 pr-4">3.86</td>
                <td className="py-2 pr-4">232 W</td>
                <td className="py-2 pr-4">270 W</td>
                <td className="py-2 pr-4">290 W</td>
                <td className="py-2 pr-4">328 W</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">45:00</td>
                <td className="py-2 pr-4">4.26</td>
                <td className="py-2 pr-4">256 W</td>
                <td className="py-2 pr-4">298 W</td>
                <td className="py-2 pr-4">320 W</td>
                <td className="py-2 pr-4">362 W</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 mt-4">
          These are estimates from a curve fitted to other people's rides, not promises about yours - the model knows nothing about your equipment or your trainer's calibration, so expect to land within a minute or two rather than on the number. Run your own figures through the{" "}
          <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">Alpe calculator</Link>{" "}
          rather than interpolating by eye; how the fit was built is in{" "}
          <Link to="/blog/regression-analysis-methodology" className="text-zwift-orange hover:underline">the regression methodology article</Link>.
        </p>
        <p className="mb-4">
          One sanity check makes me trust the curve. Pure gravity says 3.2 W/kg lifts you at 3.2 / 9.81 = 0.326 m/s, or 1,174 vertical metres per hour. The model has that rider gaining 1,036 m in 60 minutes, which is 88% of the gravity-only rate; the missing 12% is drivetrain loss, rolling resistance and the little air drag left at 12 km/h. Repeat at 2.65 and 4.75 W/kg and you get 91% and 89% - a fit to messy real times tracking the physics that closely is describing something real. If W/kg itself is new, start with{" "}
          <Link to="/blog/power-to-weight-ratio-science" className="text-zwift-orange hover:underline">the power-to-weight deep dive</Link>.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Pacing Strategy</h2>
        <p className="mb-4">
          <strong>Don't start out too hard.</strong> It's a long climb, and a common mistake is blasting the first few turns only to <em>blow up</em> halfway. As one coach advises, approach it like a time trial - start slightly easier than your target power, then ramp up later (a "negative split"){" "}
          <a href="https://www.rouleur.cc/blogs/rouleur-performance/how-to-conquer-the-alpe-du-zwift#:~:text=Ian%20Jenner%2C%20an%20Italian,speed%2C%20and%20then%20finish%20faster" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[6]</em>
          </a>
          {" "}
          <a href="https://www.rouleur.cc/blogs/rouleur-performance/how-to-conquer-the-alpe-du-zwift#:~:text=minute%20or%20two%20minutes%20of,%E2%80%9D" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[2]</em>
          </a>
          . For example, you might ride ~5-10 watts below your FTP for the first 5-10 minutes{" "}
          <a href="https://www.zwift.com/eu-fr/news/24335-race-recon-watopia-road-to-sky#:~:text=,average%20gradient" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[7]</em>
          </a>
          , letting your legs find a rhythm. On the steep early ramps (&gt;10% gradient) you can push a bit harder, but <strong>stay just below threshold initially</strong>{" "}
          <a href="https://www.zwift.com/eu-fr/news/24335-race-recon-watopia-road-to-sky#:~:text=,average%20gradient" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[4]</em>
          </a>
          . In the middle segment, settle <em>at</em> your FTP or target power - this is where the grind truly sets in and many riders battle mental fatigue{" "}
          <a href="https://www.zwift.com/eu-fr/news/24335-race-recon-watopia-road-to-sky#:~:text=,average%20gradient" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[5]</em>
          </a>
          . Focus on one turn at a time, maybe even count down the hairpins (the game helpfully displays which turn you're on and how many remain). Once you hit the final few bends (the last section), it's time to empty the tank. The finish is in sight, so give it a final push above threshold if you can manage it{" "}
          <a href="https://www.zwift.com/eu-fr/news/24335-race-recon-watopia-road-to-sky#:~:text=Time,to%20receive%20a%20welcome%20boost" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[8]</em>
          </a>
          . Knowing there's a prize spinner at the summit (with coveted lightweight wheels up for grabs) can be extra motivation to sprint through the final meters!
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The Single Most Common Mistake</h2>
        <p className="mb-4">
          Almost every disappointing Alpe time starts the same way: ten minutes spent 10 to 15% above the power you can actually hold. Fresh legs, good numbers, elapsed time ahead of schedule. It is the most expensive ten minutes in Zwift, and the model shows why.
        </p>
        <p className="mb-4">
          Take a 75 kg rider whose honest steady number is 250 W - 3.33 W/kg, a predicted 57:47. Suppose they open at 285 W, a 14% overshoot fresh legs produce happily. That pace corresponds to a 50:50 climb, so in ten minutes they cover about 19.7% of the mountain; at their real pace that stretch would have taken 682 seconds. <strong>Total gain: about 82 seconds.</strong>
        </p>
        <p className="mb-4">
          Now the cost. At 285 W they are above threshold, drawing on anaerobic work capacity - a finite reserve that empties fast and refills slowly. Outdoors you refill some of it on descents and flat sections. On the Alpe there are none: the road is 8.5% for the next fifty minutes, so demand never drops far enough for that reserve to return. What you spend early is gone, and you carry the consequences into the one section with nowhere to hide.
        </p>
        <p className="mb-4">
          Price it with the same equation. Fade to 2.90 W/kg (218 W) for the final third and that third costs 148 seconds more than at target pace: gained 82, lost 148, <strong>66 seconds slower overall</strong>. Fade to 2.75 W/kg and you finish two minutes down. That is a modelled illustration rather than a measured experiment, but the asymmetry is the point - a fast start buys seconds at a small fixed rate and costs minutes at an open-ended one.
        </p>
        <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30">
          <p>
            The rule: whatever number you plan to hold, ride the first ten minutes 5% <em>under</em> it. Feel strong at hairpin 15 and you can spend the difference later. Feel bad at hairpin 15 and you have just saved your ride.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">A Hairpin-by-Hairpin Pacing Script</h2>
        <h3 className="text-xl font-bold mb-3">Hairpins 21 and 20: settle in</h3>
        <p className="mb-4">
          The first five to seven minutes. Ride 5 to 10 watts <em>below</em> target and let heart rate and breathing come up on their own. Two things are happening that have nothing to do with speed: your cardiovascular system is catching up with the demand, and you are choosing the gear and cadence you have to live with for the next hour. Fix the gearing here, not at minute forty. Expect to be a few seconds behind schedule at hairpin 20 - that is correct.
        </p>
        <h3 className="text-xl font-bold mb-3">Hairpins 19 to 4: the steady grind</h3>
        <p className="mb-4">
          Eighty percent of the climb, and deliberately boring. Bring the power to target and hold it, checking your three-minute average at every sign and correcting five watts at a time - big corrections are how you end up surging. Through hairpins 14 to 9 you need a defence against drift; mine is one check per bend: power, cadence, swallow of drink. If your power sags in the same block every attempt, that is an attention problem, not a fitness problem. And as the gradient dips through each bend, resist shifting up - hold the power and let the speed rise by itself.
        </p>
        <h3 className="text-xl font-bold mb-3">Hairpins 3, 2 and 1: the only place to spend extra</h3>
        <p className="mb-4">
          The final eight to ten minutes, and the only stretch where going above target is a good idea, because whatever reserve is left now has no other use. Ramp rather than jump: about 5% more at hairpin 3, another 5% at hairpin 2, then everything from hairpin 1 to the arch. The final kilometre is the shallowest road on the climb, so extra watts convert into speed more efficiently there than anywhere else, and a saved Feather goes here - the{" "}
          <Link to="/blog/zwift-powerups-guide" className="text-zwift-orange hover:underline">PowerUps guide</Link>{" "}
          covers the timing. If you cannot lift the power at hairpin 3, take it as the verdict on your pacing and start ten watts lower next time.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Cooling, Fuelling and Cadence</h2>
        <p className="mb-4">
          <strong>Cooling.</strong> The Alpe is 45 to 70 minutes near threshold in a room with no wind, the hardest thermal situation in indoor cycling. As core temperature rises, more cardiac output is diverted to the skin to shed heat, so heart rate drifts up at the same power and the same watts start to feel harder. That drift is why riders fade in the final third even when they paced the start correctly. So: a real fan aimed at chest and face, running from before you start rather than from when you get hot. My rough estimate is that a proper fan is worth more time here than every equipment choice below combined. More on the room in the{" "}
          <Link to="/blog/zwift-setup-guide" className="text-zwift-orange hover:underline">Zwift setup guide</Link>.
        </p>
        <p className="mb-4">
          <strong>Fuelling.</strong> Under about 70 minutes, what you ate the previous day matters far more than what you take on the bike - you will not run out of glycogen in an hour if you started topped up. Common guidance for efforts this long is 30 to 60 g of carbohydrate per hour, and the low end of that is one bottle with a scoop of mix. Drink on a schedule rather than by thirst: a mouthful every hairpin adds up to most of a bottle. At 8.5% you are gripping the bars and breathing hard, so anything needing unwrapping will not get eaten.
        </p>
        <p className="mb-4">
          <strong>Cadence.</strong> Most riders settle between 70 and 85 rpm and there is no single right number, but the trade-off is real: lower cadence at the same power puts more force through each stroke and loads the muscles harder, higher cadence costs more in heart rate and oxygen. Grinding at 60 rpm for 50 minutes tends to leave your legs empty before your lungs are, which is the wrong failure mode when the last third holds the time. One Zwift-specific point that confuses people: <strong>trainer difficulty does not change your time.</strong> It only maps the in-game gradient onto your trainer's resistance, which changes which gear you use. Set it wherever lets you hold your cadence and stop thinking about it.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Equipment: What Actually Matters</h2>
        <p className="mb-4">
          On a gradient this steep, aerodynamics barely register and weight is almost the whole story. Zwift gives frames and wheels their own mass and rolling values, and that mass is added to yours when the game computes your speed. So the useful question is not "which bike is fastest" but "how many kilograms am I carrying that I do not need".
        </p>
        <p className="mb-4">
          The site's equation is fitted to rider W/kg rather than total system mass, so equipment is not an explicit input. But you can ask it the neighbouring question: what is a kilogram worth? For a 75 kg rider at 250 W the model gives 57:47, and 74 kg gives 57:04 - about 43 seconds. Lighter riders gain slightly more per kilogram (roughly 48 seconds at 65 kg), heavier riders slightly less (roughly 37 seconds at 85 kg), because a kilogram is a bigger fraction of a smaller total. As a first approximation, treat a kilogram of in-game equipment the same way.
        </p>
        <p className="mb-4">
          Which gives an honest summary: swapping a heavy aero setup for a light climbing frame and wheels is worth tens of seconds, not minutes. I ride the Tron bike, which I unlocked the slow way and still like, but it is an all-rounder rather than a dedicated climber. Set that against the one to two minutes the model says a bad start costs, and the priority is obvious: pacing, then cooling, then the bike. The free gain is housekeeping - a current weight in Zwift and a calibrated trainer, without which every number here is measured against something you cannot trust. If your FTP figure is stale too, the structured options in{" "}
          <Link to="/blog/zwift-training-plans-101" className="text-zwift-orange hover:underline">Zwift Training Plans 101</Link>{" "}
          are the straightforward way to re-anchor it.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">In-Game Tactics</h2>
        <p className="mb-4">
          Little things in Zwift can slightly affect your Alpe time. Use a lightweight bike frame and wheelset if you have them - the Tron bike or a feather-light setup will save you seconds to a minute versus heavier equipment{" "}
          <a href="https://zwiftinsider.com/alpe-estimates/#:~:text=Pretty%20cool%2C%20huh%3F%20Keep%20in,estimates%20should%20be%20within%20a" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[10]</em>
          </a>
          . If you're doing the climb during a race or group ride, drafting can help in the lower slopes where the grade is a bit gentler, but as it steepens the draft effect fades. Don't be afraid to <strong>use a PowerUp</strong> if you have one: the Feather (reduces weight) is obviously golden on steep sections. Even an Aero boost can help if you find a flat-ish spot or if you're breaking away from a group. Timing your effort is important: <em>go hardest when the road is steepest</em> (where extra watts yield more speed gain) and ease slightly on brief shallower sections{" "}
          <a href="https://zwiftinsider.com/alpe-estimates/#:~:text=Pretty%20cool%2C%20huh%3F%20Keep%20in,estimates%20should%20be%20within%20a" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[10]</em>
          </a>
          . This tactic can shave a little time and also prevents burnout on killer 13% ramps.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Training for the Alpe</h2>
        <p className="mb-4">
          If your goal is a personal best time, improving your power-to-weight ratio (W/kg) is key. The Alpe is all about steady climbing power. Zwift Insider's analysis shows that roughly 3 W/kg yields about a 62-minute climb, 4 W/kg about 49 minutes, and 5 W/kg around 40 minutes{" "}
          <a href="https://zwiftinsider.com/alpe-estimates/#:~:text=,5%20w%2Fkg%3A%2037%20minutes" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[9]</em>
          </a>
          . Structured training plans on Zwift (like <em>Build Me Up</em> or climbing workouts) can help raise your FTP. Also, practice sustained climbs on other Zwift routes (try Volcano or Epic KOM) to build endurance. Don't neglect weight if you have room to safely lose a few kilograms - <em>every</em> kilo matters on an 8.5% grade. For example, going under 1 hour at ~3.2 W/kg is a common benchmark{" "}
          <a href="https://www.rouleur.cc/blogs/rouleur-performance/how-to-conquer-the-alpe-du-zwift#:~:text=minute%20or%20two%20minutes%20of,%E2%80%9D" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[2]</em>
          </a>
          , but that exact wattage output will net a faster time if you're lighter.
        </p>
        <p className="mb-4">
          The quality the Alpe rewards is holding a near-threshold power for 45 to 70 minutes without decoupling, which is not the same as a high 20-minute number. If your FTP test looks strong but your Alpe times keep landing behind the prediction, the gap is durability, and the fix is longer intervals at slightly lower intensity rather than shorter ones at higher. Two by 20 minutes at your target Alpe power is a good rehearsal, because it also tells you whether that power is really yours. For a longer version of the same test, the{" "}
          <Link to="/blog/mastering-ven-top" className="text-zwift-orange hover:underline">Ven-Top guide</Link>{" "}
          covers a climb roughly 20.9 km long with about 1,534 m of gain, the{" "}
          <Link to="/alpe-vs-ventop" className="text-zwift-orange hover:underline">Alpe vs Ven-Top comparison</Link>{" "}
          explains why the two reward different things, and the{" "}
          <Link to="/ventop-calculator" className="text-zwift-orange hover:underline">Ven-Top calculator</Link>{" "}
          will give you a target time for it.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The Week Before, If You Are Chasing a Time</h2>
        <p className="mb-4">
          An Alpe personal best is a performance, not a training session. Seven to five days out, do your last hard work and make it specific: two or three intervals of 15 to 20 minutes at your target Alpe power. That is calibration as much as fitness - if you cannot finish the third interval your target is too high, and you learned it for the price of one session instead of one attempt.
        </p>
        <p className="mb-4">
          Four to two days out, keep riding but drop the volume and cut intensity to short openers well short of exhaustion; several days of complete rest tends to leave people flat rather than sharp. Do the housekeeping two days out, not on the day: calibrate the trainer, update your weight in Zwift honestly and at your usual time of day, choose your bike, pick your target from the table above, and arrange the screen so three-minute average power is visible without hunting. The day before, easy spin or nothing.
        </p>
        <p className="mb-4">
          On the day, warm up properly - fifteen to twenty minutes with two or three short accelerations - because a near-threshold effort started cold is one you pay for at hairpin 15, and the flat run-in to the arch is not long enough to do it for you. One thing not to do: a fresh FTP test in the last three days. You will either arrive tired or arrive with a number you have no time to plan around.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Your First Time Up</h2>
        <p className="mb-4">
          If this is your first ascent, ignore most of the above. The only goal is reaching the top without stopping, and the way to do that is to go slower than you think you need to. Pick a power you could hold for 90 minutes, not 60 - for most riders near 55 to 65% of FTP. It will feel absurdly easy for fifteen minutes, and that feeling is the plan working. At 2.5 W/kg the model predicts about 73 minutes, and there is nothing wrong with 73 minutes, or 90, or two hours. The climb is the same 1,036 m whatever the clock says.
        </p>
        <p className="mb-4">
          Practical points: two bottles within reach, because you may be up there longer than planned. Turn trainer difficulty down if the gradient is unmanageable in your lowest gear - it costs nothing in time and keeps your cadence sustainable. Do not chase riders who come past, because on a 12 km climb you have no idea whether they are 20 minutes into their day or 20 seconds. And use the countdown: seven hairpins left is easier to carry than four kilometres left. Finish it once, note your time and average power, and you have a real baseline instead of a guess. The{" "}
          <Link to="/zwift-climb-time-calculator" className="text-zwift-orange hover:underline">general climb time calculator</Link>{" "}
          covers the other big ascents when you want a new target.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Stay Motivated to the Top</h2>
        <p className="mb-4">
          Let's face it - climbing the Alpe is as much a mental challenge as a physical one. Set small targets: "I'll get to turn 10, then reassess." Celebrate each hairpin conquered. The game helps by counting them down and even showing fun tidbits on some turn signs. Some riders play motivating music or even watch a show to distract from the pain cave. You could also <strong>use the climb's landmarks</strong>: for example, know that turn 7 is the famous <em>Dutch Corner</em> (in real Alpe d'Huez, a lively spot) - when you reach it, you're in the home stretch. And remember, every climb up Alpe du Zwift makes you stronger. As one coach notes, the more you ride it, the better you understand where you can push harder or where you might need to back off{" "}
          <a href="https://www.rouleur.cc/blogs/rouleur-performance/how-to-conquer-the-alpe-du-zwift#:~:text=effort%20like%20that" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
            <em>[11]</em>
          </a>
          . Experience pays off; your first ascent might be a learning experience, but you'll gain knowledge to beat your time on the next attempt.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="mb-4">
          Reaching the summit of Alpe du Zwift is incredibly satisfying - whether it takes 40 minutes or 2 hours. With smart pacing, proper training, and a bit of in-game strategy, you can chip away at your climb times. Just like its real-world counterpart, conquering this mountain is a badge of honor in Zwift. So gear up, <strong>pace wisely</strong>, and enjoy the grind up those 21 bends. Your future self (and maybe your avatar's virtual trophy case) will thank you at the top!
        </p>
        <p className="mb-4">
          If you take one thing away, make it the lopsided ledger: ten minutes of enthusiasm buys about 82 seconds and can cost you two minutes. Pick a number from the table, ride the first two hairpins under it, guard the middle block, and spend everything from hairpin 3. Then check the result against the{" "}
          <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">Alpe du Zwift calculator</Link>{" "}
          and see which way the gap points. How these numbers are produced, and their limits, is in the{" "}
          <Link to="/faq" className="text-zwift-orange hover:underline">FAQ</Link>{" "}
          and my{" "}
          <Link to="/editorial-policy" className="text-zwift-orange hover:underline">editorial policy</Link>.
        </p>
      </div>

      <div className="border-t pt-6 mt-8">
        <h3 className="text-xl font-bold mb-4">Sources</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          <li>
            <a href="https://zwiftinsider.com/alpe-estimates/" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
              Zwift Insider - Alpe du Zwift Estimates
            </a>
          </li>
          <li>
            <a href="https://www.rouleur.cc/blogs/rouleur-performance/how-to-conquer-the-alpe-du-zwift" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
              Rouleur - How to Conquer the Alpe du Zwift
            </a>
          </li>
          <li>
            <a href="https://www.zwift.com/eu-fr/news/24335-race-recon-watopia-road-to-sky" target="_blank" rel="noopener noreferrer" className="text-zwift-orange hover:underline">
              Zwift Official - Race Recon: Watopia Road to Sky
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <BlogPost
      relatedCalculators={[
        {
          name: "Alpe du Zwift Calculator",
          path: "/alpeduzwiftcalculator",
          description: "Predict your Alpe du Zwift climbing time based on your weight and power"
        },
        {
          name: "Ven Top Calculator",
          path: "/ventop-calculator",
          description: "Calculate your Ven Top climb time and compare with Alpe du Zwift"
        }
      ]}
      content={content}
    />
  );
};

export default ConquerAlpeDuZwift;
