import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";

const HowIStartedZwiftingAndHowAverageRobArnoInspiredMyIronmanJourney = () => {
  const content = (
    <div className="space-y-8">
      {/* Introduction */}
      <div>
        <p className="mb-4 text-lg leading-relaxed">
          I want to talk about how I started Zwifting, where the inspiration came from, and why it honestly changed my life more than I ever expected.
        </p>
        <p className="mb-4">
          A big part of this story comes down to two people: AverageRob and Arno.
        </p>
      </div>

      {/* First weeks */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Before the Videos: My First Weeks on Zwift</h2>
        <p className="mb-4">
          The series came later. The first weeks were nothing like it.
        </p>
        <p className="mb-4">
          My first ride was short and slightly embarrassing. A bike on a trainer in a small room, no fan, no idea what the numbers on screen meant. I picked a flat Watopia route because it looked easy, rode about twenty minutes, and got off because my hands hurt and I was dripping onto the top tube. Nobody's first indoor ride looks like the trailer.
        </p>
        <p className="mb-4">
          The first real lesson came in a group ride. I sat in the bunch thinking I could hold this, the road tipped up, and inside a minute I was off the back. What surprised me was not getting dropped but how fast the gap grew once it opened. That is mechanics, not bad luck: the draft costs meaningfully fewer watts than clean air at the same speed, so the moment you lose the wheel your required power steps up instead of drifting up. You are asked for more at the second you have least left. How that works is in{" "}
          <Link to="/blog/zwift-drafting-physics-aerodynamics" className="text-zwift-orange hover:underline">the drafting physics article</Link>.
        </p>
        <p className="mb-4">
          The first hour-long ride was a separate milestone and a duller one. Flat route, a resistance I could clearly sustain, one rule: do not touch the lap timer. Around forty minutes it stopped being an event I was surviving and became a duration I was passing through. That is the first honest taste of endurance. It is not one hard effort. It is being willing to stay in one place for a long time.
        </p>
      </div>

      {/* Discovering the series */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Discovering the AverageRob & Arno Series</h2>
        <p className="mb-4">
          At some point, I started watching AverageRob on YouTube, and I came across the series he did together with Arno. I watched Episode 1, then Episode 2, then 3, and eventually 4.
        </p>
        <p className="mb-4">
          And I didn't just watch them once.
        </p>
        <p className="mb-4">
          I watched these episodes while I was Zwifting.
        </p>
        <p className="mb-4">
          I'd be riding, sweating, pushing through workouts, and at the same time watching their journey unfold on screen. It became this perfect mix of entertainment, motivation, and suffering - the good kind.
        </p>
        <p className="mb-4">
          That series honestly hit me harder than I expected.
        </p>
        <p className="mb-4">
          All four episodes are embedded below, because I genuinely recommend watching them in order.
        </p>

        {/* Episode 1 */}
        <div className="my-8">
          <h3 className="text-xl font-bold mb-3">Episode 1</h3>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/lhI7evdTWzw"
              title="AverageRob & Arno Ironman Journey - Episode 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Episode 2 */}
        <div className="my-8">
          <h3 className="text-xl font-bold mb-3">Episode 2</h3>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/VCrMyg9DVkI"
              title="AverageRob & Arno Ironman Journey - Episode 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Episode 3 */}
        <div className="my-8">
          <h3 className="text-xl font-bold mb-3">Episode 3</h3>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/qVZOKel-gpE"
              title="AverageRob & Arno Ironman Journey - Episode 3"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Episode 4 */}
        <div className="my-8">
          <h3 className="text-xl font-bold mb-3">Episode 4</h3>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/EP2rD6lr2Xk?start=923"
              title="AverageRob & Arno Ironman Journey - Episode 4"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Why their story hit */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Why Their Story Hit So Hard</h2>
        <p className="mb-4">
          What really inspired me was how real it all felt.
        </p>
        <p className="mb-4">
          Arno, especially, had a really hard time at points. You could see the struggle. You could see the doubt. You could see that it wasn't easy - at all.
        </p>
        <p className="mb-4">
          At the same time, both Arno and Rob could swim really well.
        </p>
        <p className="mb-4 font-medium">
          And swimming is hard for me. It's still my weakest discipline.
        </p>
        <p className="mb-4">
          Instead of discouraging me, that actually motivated me even more. Watching people push through something difficult, but still keep going, made me think:
        </p>
        <p className="mb-4 font-medium text-lg">
          "Okay. Maybe I can do this too."
        </p>
        <p className="mb-4">
          That's when the idea of doing a Half Ironman first - and eventually a full Ironman - really started to feel real.
        </p>
        <p className="mb-4">
          Not just a crazy thought.
        </p>
        <p className="mb-4 font-medium">
          But an actual goal.
        </p>
      </div>

      {/* Music and RuneScape */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The Music, the Vibe, and RuneScape Nostalgia</h2>
        <p className="mb-4">
          Another thing that made the series so special was the music.
        </p>
        <p className="mb-4">
          The soundtrack was amazing. Very unique. And at one point, I realized something wild:
        </p>
        <p className="mb-4 font-medium">
          They were using RuneScape music.
        </p>
        <p className="mb-4">
          That hit me straight in the heart.
        </p>
        <p className="mb-4">
          I actually messaged Rob (AverageRob) to tell him that I loved the music choice and that I played RuneScape too.
        </p>
        <p className="mb-4">Because here's the thing:</p>
        <p className="mb-4 font-medium">
          I used to be a really fat gamer, sitting around playing RuneScape all day.
        </p>
        <p className="mb-4">
          Seeing that connection - RuneScape music playing while I'm sweating on a bike, chasing endurance goals - felt almost poetic.
        </p>
      </div>

      {/* From gamer to zwifter */}
      <div>
        <h2 className="text-2xl font-bold mb-4">From Gamer to Zwifter: Losing Weight and Getting in Shape</h2>
        <p className="mb-4">
          Zwift genuinely helped me lose weight and get in shape.
        </p>
        <p className="mb-4">It gave me structure.</p>
        <p className="mb-4">It gave me something to show up for.</p>
        <p className="mb-4">And it gave me a way to suffer that actually felt meaningful.</p>
        <p className="mb-4">Instead of just "training," I had something to focus on:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>The ride</li>
          <li>The numbers</li>
          <li>The videos</li>
          <li>The story unfolding on screen</li>
        </ul>
        <p className="mb-4">
          Suddenly, I wasn't just exercising.
        </p>
        <p className="mb-4 font-medium">
          I was training.
        </p>
      </div>

      {/* The habit */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The Week It Stopped Being a Chore</h2>
        <p className="mb-4">
          I cannot give you a date, but I can give you the change that caused it. Early on, every session started with a negotiation. Am I tired? An hour or ninety minutes? Intervals or not? Losing that argument once is fine. Losing it three times in a week is how a habit dies.
        </p>
        <p className="mb-4">
          What fixed it was making the decision smaller. I set a floor instead of a target: get on the bike and spin easy for twenty minutes, and that counts. If I still felt fine after twenty minutes I stayed on, and almost every time I stayed on. The hard part was never the last hour. It was the first five minutes, and a low floor removes that argument.
        </p>
        <p className="mb-4">
          Two other things helped, both boring. The trainer lives in a room I walk past every day, set up and ready, so starting costs nothing but changing clothes. And I pick the ride the night before instead of by mood on the day. Fitting that around lectures is its own problem, which is why I wrote{" "}
          <Link to="/blog/having-time-to-zwift-during-university" className="text-zwift-orange hover:underline">the piece on Zwifting through a university schedule</Link>.
        </p>
      </div>

      {/* The numbers */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What the Numbers Did, Honestly</h2>
        <p className="mb-4">
          I will not publish an FTP curve or a weight chart here, because I do not have an archive I would trust and I will not invent one. What I can describe is the shape of the change, and the order is the useful part.
        </p>
        <p className="mb-4">
          Heart rate at a fixed wattage moved first: the same steady power that used to drift upward through a ride started sitting lower and staying flat. Then came duration, then the test number, in steps rather than a smooth line, flat for weeks and then a jump. Body weight moved last and least reliably, and I wrote about that disappointment in{" "}
          <Link to="/blog/get-fit-and-lose-weight-with-zwift" className="text-zwift-orange hover:underline">getting fit and losing weight with Zwift</Link>.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">Signal</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">When it moved for me</th>
                <th scope="col" className="py-2 pr-4 text-left font-semibold text-foreground">What it does not tell you</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Heart rate at a fixed wattage</td>
                <td className="py-2 pr-4">Earliest, within weeks</td>
                <td className="py-2 pr-4">Top-end power. It also moves with room heat, sleep and caffeine.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">How long I could hold endurance pace</td>
                <td className="py-2 pr-4">Next, over months</td>
                <td className="py-2 pr-4">A one or five minute effort.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Test-based FTP estimate</td>
                <td className="py-2 pr-4">Latest, and in steps</td>
                <td className="py-2 pr-4">How you will feel in hour three of a long ride.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Body weight</td>
                <td className="py-2 pr-4">Slowest, noisiest day to day</td>
                <td className="py-2 pr-4">Almost nothing alone. It is only half of W/kg.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 mt-4">
          Track one alone and you will eventually draw a wrong conclusion. Watching several works because they disagree, and the disagreement tells you what is genuinely improving. W/kg has two terms moving on different timescales, the argument in{" "}
          <Link to="/blog/power-to-weight-ratio-science" className="text-zwift-orange hover:underline">the power-to-weight article</Link>. For a starting point, use the{" "}
          <Link to="/zwift-ftp-calculator" className="text-zwift-orange hover:underline">FTP calculator</Link> and the{" "}
          <Link to="/zwift-racing-category-calculator" className="text-zwift-orange hover:underline">racing category calculator</Link>.
        </p>
      </div>

      {/* Why the calculator exists */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Why I Built the Alpe du Zwift Calculator</h2>
        <p className="mb-4">
          Alpe du Zwift is 12.2 km, 1,036 m of climbing, roughly 8.5% average, 21 hairpins. The first time I lined up at the bottom I had no idea whether it would take me 55 minutes or 80. That is not a trivial gap: it decides whether the ride fits before dinner, and how hard you can start.
        </p>
        <p className="mb-4">
          Zwift will happily tell you your time. Afterwards. I wanted to know before.
        </p>
        <p className="mb-4">
          So I did what a mechanical engineering student does with an annoying question: I opened a spreadsheet, collected climb times against the W/kg that produced them, and fitted a curve. A quadratic described the range that matters well:
        </p>
        <div className="p-4 bg-zwift-orange/10 rounded-lg border border-zwift-orange/30 mb-4">
          <p className="font-mono text-sm">
            time_seconds = 148.60 &times; (W/kg)<sup>2</sup> - 1954.08 &times; (W/kg) + 8329.87
          </p>
        </div>
        <p className="mb-4">
          Put roughly 3.2 W/kg in and you come out just under the hour, which is why sub-hour is such a common target: it sits where a consistent amateur can get with pacing and patience instead of talent. Two caveats. It is a fit to observed times, not physics from mass, gravity and drag, so it inherits whatever bias sits in the data. And a parabola eventually turns back upward, so treat it as an estimator in the amateur range and as extrapolation above it. The fit is documented in{" "}
          <Link to="/blog/regression-analysis-methodology" className="text-zwift-orange hover:underline">the regression methodology write-up</Link>.
        </p>
        <p className="mb-4">
          The spreadsheet worked, but only on my laptop. Turning it into a page anyone could open is how this site started, and that page is still the{" "}
          <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">Alpe du Zwift calculator</Link>. The rest grew from asking the same question about other climbs: the{" "}
          <Link to="/ventop-calculator" className="text-zwift-orange hover:underline">Ven-Top calculator</Link> for Zwift's Mont Ventoux, roughly 20.9 km and about 1,534 m of gain, and the{" "}
          <Link to="/alpe-vs-ventop" className="text-zwift-orange hover:underline">side-by-side comparison</Link>. Who is behind the numbers is on{" "}
          <Link to="/about-us" className="text-zwift-orange hover:underline">the about page</Link> and{" "}
          <Link to="/author" className="text-zwift-orange hover:underline">my author page</Link>.
        </p>
      </div>

      {/* What to watch */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What I Watch While Zwifting (And Why It Works)</h2>
        <p className="mb-4">
          If you ever get bored while Zwifting - especially during long rides - I really recommend two things:
        </p>

        <h3 className="text-xl font-bold mb-3 mt-6">1. Watch These YouTube Episodes</h3>
        <p className="mb-4">
          The AverageRob &amp; Arno episodes (1 to 4) are perfect for Zwift.
        </p>
        <p className="mb-4">
          They're motivating, emotional, and relatable.
        </p>
        <p className="mb-4">
          I honestly recommend them to anyone who's Zwifting, especially if you're training for something big.
        </p>

        <h3 className="text-xl font-bold mb-3 mt-6">2. Watch Movies During Steady Efforts</h3>
        <p className="mb-4">When I'm doing:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>Free riding</li>
          <li>Long endurance rides</li>
          <li>Constant power workouts (like holding 170 watts)</li>
        </ul>
        <p className="mb-4">I love watching movies.</p>
        <p className="mb-4">Some of my favorites:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>The Wolf of Wall Street</li>
          <li>The Big Short</li>
          <li>Other business or motivation-heavy movies</li>
        </ul>
        <p className="mb-4">
          When you're holding steady power, you can just keep pushing the pedals and let the movie flow. Time passes insanely fast. Before you know it, the workout is done.
        </p>
        <p className="mb-4">You get into this rhythm where:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>Legs are working</li>
          <li>Mind is engaged</li>
          <li>Suffering feels manageable</li>
        </ul>
      </div>

      {/* Ironman lessons */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What Ironman Training Taught Me That Zwift Did Not</h2>
        <p className="mb-4">
          Training for Ironman Copenhagen changed how I see Zwift, mostly by showing me what Zwift quietly does for you.
        </p>

        <h3 className="text-xl font-bold mb-3">Pacing without a number</h3>
        <p className="mb-4">
          Zwift hands you a figure for everything, every second: watts, W/kg, gradient, and everyone else's numbers beside yours. Swimming gives me almost none of that. No power meter in a pool, just a clock at the end of the lane and how the water feels on your forearm. Being worst at the discipline with the least feedback forced me to pace by feel, and that came back to the bike.
        </p>

        <h3 className="text-xl font-bold mb-3">Fuelling, and the week instead of the session</h3>
        <p className="mb-4">
          A 90-minute Zwift session forgives bad fuelling: the kitchen is five metres away and you are never more than a second from stopping. A long day on the road forgives nothing, so I learned to eat on a schedule instead of when I feel hungry. The arithmetic behind that is in{" "}
          <Link to="/blog/the-glucose-alchemist-how-to-fuel-a-world-tour-effort-on-a-ramen-budget" className="text-zwift-orange hover:underline">the fuelling article</Link>. Zwift also makes it easy to have a great session and a terrible week. Once running and swimming draw on the same recovery budget you cannot pick workouts by mood, because a hard bike day now costs a run day. That is where structure stopped being optional for me. Most of what I have written since sits in{" "}
          <Link to="/blog/category/training" className="text-zwift-orange hover:underline">the training category</Link>, and the schedule I actually use is in{" "}
          <Link to="/blog/10-day-zwift-training-week" className="text-zwift-orange hover:underline">the 10-day training week</Link>. What the trainer cannot give you, from corners to a bottle you reach for at speed, is in{" "}
          <Link to="/blog/what-zwift-cant-teach-you-and-what-it-can" className="text-zwift-orange hover:underline">what Zwift cannot teach you</Link>.
        </p>
      </div>

      {/* Mistakes */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What Went Wrong, and What I Would Do Differently</h2>
        <p className="mb-4">
          Five mistakes, all mine, and none of them exotic.
        </p>
        <p className="mb-4">
          <strong>I rode my easy days slightly too hard.</strong> For months nearly every ride sat in the same moderately uncomfortable place: too hard to recover from, too easy to drive much adaptation. It hurt a little, so it felt productive. What it actually did was ruin the hard sessions, because I always arrived tired. Easy rides should be boringly easy.
        </p>
        <p className="mb-4">
          <strong>I trained without a fan for far too long.</strong> Indoor heat pushes heart rate up and power down over a ride, and I read that drift as being unfit. It was mostly temperature. A fan is the cheapest gain indoors, which is why it belongs at the top of the{" "}
          <Link to="/blog/zwift-setup-guide" className="text-zwift-orange hover:underline">setup guide</Link>.
        </p>
        <p className="mb-4">
          <strong>I let the streak beat the plan.</strong> Once a streak exists you protect the streak instead of the training. I did junk twenty-minute rides on days I should have rested, purely so a number would not reset. Keeping one honestly, including while travelling, is in{" "}
          <Link to="/blog/how-to-keep-your-streak-in-zwift-while-travelling" className="text-zwift-orange hover:underline">the streak article</Link>.
        </p>
        <p className="mb-4">
          <strong>I avoided swimming because Zwift was more fun.</strong> The discipline I was worst at got the least time, which is the most expensive kind of comfort in this sport, and exactly what the episodes above put in front of me: Rob and Arno could both swim, and I could not.
        </p>
        <p className="mb-4">
          <strong>I read about equipment before I had the consistency to make it matter.</strong> Frame and wheel choices are measurable, and still worth a fraction of showing up four times a week. Schedule first, then{" "}
          <Link to="/blog/zwift-equipment-optimization-aerodynamics" className="text-zwift-orange hover:underline">the equipment article</Link>. I did it in the other order.
        </p>
      </div>

      {/* Day one advice */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What I Would Tell Someone on Day One</h2>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>Get a fan before anything else. Heat limits you long before fitness does.</li>
          <li>Do not test your FTP in week one. Ride three or four weeks first, so the number describes you rather than your inexperience.</li>
          <li>Expect to get dropped, and expect it to happen suddenly. Losing the wheel raises the power you need at the worst moment. Mechanics, not character.</li>
          <li>Pick one measurable goal that is not a race result. Sub-hour on Alpe du Zwift is a good one: the course never changes, and the fit above tells you what it costs, roughly 3.2 W/kg.</li>
          <li>Compare your watts to your own from eight weeks ago, not to the rider in front of you.</li>
        </ul>
      </div>

      {/* Why recommend */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Why I Recommend This to Anyone Zwifting</h2>
        <p className="mb-4">If you're:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>Training for a Half Ironman</li>
          <li>Dreaming about an Ironman</li>
          <li>Trying to lose weight</li>
          <li>Or just struggling to stay consistent</li>
        </ul>
        <p className="mb-4">Then I really recommend doing what I did:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>Ride on Zwift</li>
          <li>Watch inspiring content</li>
          <li>Let the stories pull you forward</li>
        </ul>
        <p className="mb-4">
          For me, that combination completely changed my mindset.
        </p>
      </div>

      {/* Final thoughts */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
        <p className="mb-4">
          Zwifting wasn't just cycling indoors for me.
        </p>
        <p className="mb-4">It became:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>A way out of old habits</li>
          <li>A bridge from gaming to training</li>
          <li>A path toward endurance sports and Ironman goals</li>
        </ul>
        <p className="mb-4">
          And a huge part of that came from watching AverageRob and Arno suffer, push through, and keep going - right there on my screen while I was doing the same.
        </p>
        <p className="mb-4">If you're ever bored on Zwift, or lacking motivation:</p>
        <ul className="list-disc list-inside mb-4 space-y-1 ml-4">
          <li>Watch these episodes</li>
          <li>Or throw on a movie</li>
          <li>And just keep pedaling</li>
        </ul>
        <p className="mb-4 text-lg font-medium">
          You'll be surprised how far it can take you.
        </p>
        <p className="mb-4">
          And if a ride leaves you wondering what a number on screen means, follow that. Mine turned into a spreadsheet, and the spreadsheet turned into this site. Questions are welcome on{" "}
          <Link to="/contact" className="text-zwift-orange hover:underline">the contact page</Link>, and the rest of the writing sits on{" "}
          <Link to="/blog" className="text-zwift-orange hover:underline">the blog</Link>.
        </p>
      </div>
    </div>
  );

  return (
    <BlogPost
      relatedCalculators={[
        {
          name: "Alpe du Zwift Calculator",
          path: "/alpeduzwiftcalculator",
          description: "Calculate your climbing time and power requirements for Zwift's iconic climbs"
        },
        {
          name: "Ven Top Calculator",
          path: "/ventop-calculator",
          description: "Predict your performance on Zwift's longest climb"
        }
      ]}
      content={content}
    />
  );
};

export default HowIStartedZwiftingAndHowAverageRobArnoInspiredMyIronmanJourney;

