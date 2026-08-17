import { Link } from "react-router-dom";
import BlogPost from "@/components/BlogPost";
import { Clock, Moon, Sun, BarChart3 } from "lucide-react";

const ZwiftChronobiology = () => {

  const relatedArticles = [
    {
      title: "Zwift Training Periodization: Long-Term Performance Planning",
      excerpt: "Master Zwift training periodization for long-term performance gains.",
      date: "31-12-2025",
      readTime: "23 min",
      slug: "/blog/zwift-training-periodization",
      category: "Training"
    },
    {
      title: "The Data Behind Zwift Climbing: What 1,000+ Rides Tell Us About Performance",
      excerpt: "Discover data-driven insights from analyzing 1,000+ ZwiftPower performances.",
      date: "20-12-2025",
      readTime: "18 min",
      slug: "/blog/the-data-behind-zwift-climbing",
      category: "Data Analysis"
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
    }
  ];

  const content = (
    <div className="space-y-6">
      <p className="text-xl text-muted-foreground">
        Your body's internal clock does not stop when you enter Watopia. The same rider, on the same trainer, at the same weight, produces different numbers at 6 AM and 6 PM. This article explains why that happens, what it is worth in minutes on a climb, and how to measure the effect on yourself instead of taking anyone's word for it.
      </p>

      <div className="bg-zwift-blue/10 dark:bg-zwift-blue/20 border-l-4 border-zwift-blue p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Clock className="mr-2 text-zwift-blue" size={24} />
          What this article is built on
        </h2>
        <p className="mb-4">
          This site has exactly one dataset: roughly 500 verified Alpe du Zwift and 300 verified Ven-Top finishing times pulled from ZwiftPower, each one a power figure paired with a completion time. That is all it holds. There are no timestamps in it, no chronotype labels, no heart rate traces and no session histories, which means it cannot tell you anything at all about what time of day those rides happened.
        </p>
        <p className="mb-0">
          So nothing below is presented as a measurement from this site. What follows is the mechanism as exercise physiology generally describes it, a worked example that uses the site's own published equation, my own experience riding indoors, and a protocol you can run on yourself. Where a number appears, it comes from the equation or it is flagged as an estimate.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">What a Body Clock Actually Is</h2>
        <p className="mb-4">
          Chronobiology is the study of biological rhythms. The one that matters for training is the circadian rhythm, a cycle of roughly 24 hours run by a master clock in the brain and kept in step with the outside world mainly by light, and secondarily by meal timing and physical activity. The clock does not sense time directly. It infers it, and it infers it from the signals you give it.
        </p>
        <p className="mb-4">
          That clock has outputs. It moves core body temperature up and down, it schedules hormone release, it drives alertness, and it shifts blood pressure and digestion. Three of those outputs matter to a cyclist on a trainer: core temperature, sleep pressure, and how willing you feel to hurt yourself for twenty minutes.
        </p>
        <p className="mb-4">
          None of this is exotic and none of it is disputed. What is genuinely uncertain is the size of the effect in any individual rider, which is exactly the part that a lot of training content invents a number for. I am not going to do that.
        </p>

        <h3 className="text-xl font-bold mb-3">The General Shape of the Day</h3>
        <p className="mb-4">
          The broadly accepted picture in exercise physiology looks like this. Performance is at its lowest in the small hours and immediately after waking, climbs through the morning, sags somewhat in the early afternoon, reaches its high point in the late afternoon or early evening, then falls away as the body prepares for sleep.
        </p>

        <div className="bg-muted/50 p-6 rounded-lg">
          <p className="font-bold text-lg mb-4">The Typical Curve, Illustrative Only</p>
          <ul className="space-y-2">
            <li><strong>6-8 AM:</strong> Lowest point of the day, body still cold and stiff</li>
            <li><strong>10 AM-12 PM:</strong> Rising steadily, most riders feel functional</li>
            <li><strong>2-4 PM:</strong> A dip, partly circadian and partly the meal you just ate</li>
            <li><strong>5-7 PM:</strong> Usual high point, warmest core temperature of the day</li>
            <li><strong>9 PM onwards:</strong> Falling as melatonin rises and sleep pressure builds</li>
          </ul>
          <p className="mt-4 mb-0 text-sm">
            This list is the general shape described in the physiology literature, drawn here as a sketch. It is not a measurement of Zwift riders and it is not measured from this site's dataset. Your own curve is shifted by your chronotype and can be shifted further by your schedule.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Chronotype: The Same Curve, Moved Along the Axis</h2>
        <p className="mb-4">
          Chronotype is your natural position on that curve. A morning type runs the whole pattern early. An evening type runs the whole pattern late. Most people sit somewhere in between, closer to the middle than to either edge. The useful mental model is not that larks and owls have different physiology, it is that they have the same physiology on a different schedule.
        </p>
        <p className="mb-4">
          How far the curve moves varies from person to person, and it is worth being clear that I cannot put a percentage on it. Anyone who hands you a precise figure for how much worse a night owl is at 7 AM is either quoting a study on a population you are not a member of, or making it up. What is reliable is the direction, not the magnitude.
        </p>

        <h3 className="text-xl font-bold mb-3 flex items-center">
          <Sun className="mr-2 text-zwift-orange" size={20} />
          Morning Types
        </h3>
        <p className="mb-4">
          Morning types wake early without an alarm and feel usable within a short time of getting up. Their temperature curve runs early, so the body is ready sooner. Their common signs:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Wake time:</strong> Early, and roughly the same whether or not an alarm is set</li>
          <li><strong>Alertness:</strong> Comes on quickly after waking</li>
          <li><strong>Best hard efforts:</strong> Morning, once a proper warm-up is done</li>
          <li><strong>Evening:</strong> Noticeably harder to hit the same intervals late in the day</li>
          <li><strong>Sleep:</strong> Gets sleepy early and fights to stay up past a certain hour</li>
        </ul>
        <p className="mb-4">
          For a morning type the trap is not timing, it is the warm-up. A 6 AM session that starts hard three minutes after getting off the sofa is testing your warm-up, not your fitness.
        </p>

        <h3 className="text-xl font-bold mb-3 flex items-center">
          <Moon className="mr-2 text-zwift-blue" size={20} />
          Evening Types
        </h3>
        <p className="mb-4">
          Evening types wake late when left alone, take a long time to feel human, and come alive in the second half of the day. Their common signs:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Wake time:</strong> Late when no alarm is involved, and an alarm feels brutal</li>
          <li><strong>Alertness:</strong> Slow to arrive, often not before mid-morning</li>
          <li><strong>Best hard efforts:</strong> Late afternoon and evening</li>
          <li><strong>Morning:</strong> Intervals feel disproportionately hard for the power produced</li>
          <li><strong>Sleep:</strong> Naturally drifts later, especially without a fixed wake time</li>
        </ul>
        <p className="mb-4">
          The trap for an evening type is the opposite one. Finishing a hard session at 10 PM leaves you warm, adrenalised and lit up by a screen at exactly the moment your body wants to start winding down, and the sleep you lose costs more than the session gained.
        </p>

        <h3 className="text-xl font-bold mb-3">Intermediate Types</h3>
        <p className="mb-4">
          Most riders land here. An intermediate type can train reasonably well across a wide window, tends to notice a mild slump in the early afternoon, and has no strong pull toward either extreme. If you have never had an obvious sense of being a lark or an owl, that itself is the answer.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Usable window:</strong> Mid-morning through early evening</li>
          <li><strong>Weak spot:</strong> The early afternoon dip, more meal-driven than clock-driven</li>
          <li><strong>Advantage:</strong> Schedule flexibility, which in practice matters more than peak timing</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">The Mechanisms: Why the Time of Day Changes Your Numbers</h2>
        <p className="mb-4">
          Four things move over the day, and each one has a plausible, physical route to your power meter. Understanding the route matters more than memorising a curve, because the route tells you what you can do about it.
        </p>

        <h3 className="text-xl font-bold mb-3">Core Body Temperature</h3>
        <p className="mb-4">
          Core temperature is at its lowest in the last hours of sleep and climbs through the day to a high point in the late afternoon or early evening, then drops again before bed. The swing is small in absolute terms, well under a degree for most people, but muscle does not care about the absolute value. It cares that contraction speed, nerve conduction velocity and enzyme activity are all temperature-sensitive, and all of them run slightly faster warm.
        </p>
        <p className="mb-4">
          The practical consequence is simple. Straight out of bed, the same perceived effort produces fewer watts, because the machine is cold. This is also the one part of the daily curve you can directly override. You cannot argue with your hormones, but you can absolutely warm a body up.
        </p>
        <div className="bg-zwift-orange/10 dark:bg-zwift-orange/20 p-6 rounded-lg">
          <p className="font-bold text-lg mb-4">A Warm-Up Rule I Use Myself</p>
          <ul className="space-y-2">
            <li><strong>Morning session:</strong> 20 to 25 minutes of progressive riding before the first hard interval, with two or three short openers at the end</li>
            <li><strong>Evening session:</strong> 10 to 15 minutes is usually enough, because the body has been awake and moving all day</li>
            <li><strong>Either way:</strong> Judge readiness by whether the first interval feels controllable, not by the clock</li>
          </ul>
          <p className="mt-4 mb-0 text-sm">
            These durations are my own working rule from riding indoors, not a measured optimum. Treat them as a starting point and adjust.
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3">Sleep Pressure</h3>
        <p className="mb-4">
          A second process runs alongside the clock. Sleep pressure builds continuously from the moment you wake and is cleared by sleeping. It has nothing to do with the time on the wall and everything to do with how long you have been awake.
        </p>
        <p className="mb-4">
          Put the two together and the double peak stops being a mystery. Early in the morning, sleep pressure is at its lowest but your body is cold. Late in the evening, your body is warm but sleep pressure is high. The best window for hard work is where those two curves cross, which for most people falls in the late afternoon or early evening, and which moves earlier or later with chronotype. That is the whole explanation, and it needs no invented statistics to be useful.
        </p>

        <h3 className="text-xl font-bold mb-3">Hormones</h3>
        <p className="mb-4">
          Several hormones relevant to training follow the clock. These patterns are generally accepted and easy to describe, but they are background context rather than a dial you can read:
        </p>
        <div className="bg-zwift-orange/10 dark:bg-zwift-orange/20 p-6 rounded-lg">
          <p className="font-bold text-lg mb-4">Circadian Hormone Patterns, Directionally</p>
          <ul className="space-y-2">
            <li><strong>Cortisol:</strong> Rises sharply in the period around waking, then trends down across the day</li>
            <li><strong>Testosterone:</strong> Higher in the morning, declining through the day</li>
            <li><strong>Growth hormone:</strong> Released mostly during deep sleep, which is why sleep is a training variable</li>
            <li><strong>Melatonin:</strong> Rises in the evening as light fades, and is suppressed by bright light</li>
          </ul>
          <p className="mt-4 mb-0 text-sm">
            Do not schedule workouts off a hormone chart. Morning testosterone is higher at the same time morning power is typically lower, which should tell you how weak the link from any single hormone to your power output really is.
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3">Fuel and Your Last Meal</h3>
        <p className="mb-4">
          The fourth variable is the least mystical and often the largest. A 6 AM session starts after eight or more hours without food, with liver glycogen run down overnight. Low-intensity riding copes with that fine. Repeated efforts above threshold do not cope with it nearly as well, and the session that feels flat at dawn is sometimes a fuelling problem wearing a chronobiology costume.
        </p>
        <p className="mb-4">
          The fix is unglamorous. Something small with carbohydrate 30 to 45 minutes before a hard morning session, and enough fluid to replace the night. On the other side, an evening rider who sits down to intervals 45 minutes after a full dinner has a different problem and the same flat feeling. Before blaming your body clock, check what you ate and when.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <BarChart3 className="mr-2 text-zwift-blue" size={24} />
          What Our Data Can and Cannot Say About This
        </h2>
        <p className="mb-4">
          This is the point where a lot of articles produce a table of average power by hour of day. I am not going to, because the dataset behind this site cannot produce one.
        </p>
        <p className="mb-4">
          The dataset is roughly 500 verified Alpe du Zwift results and roughly 300 verified Ven-Top results from ZwiftPower, and every record is a power figure paired with a finishing time. The full method is written up in{" "}
          <Link to="/blog/regression-analysis-methodology" className="text-zwift-orange hover:underline">
            our regression analysis methodology
          </Link>
          . It can answer how long 3.2 W/kg takes on the Alpe. It cannot answer whether 3.2 W/kg is easier at 7 AM than at 7 PM, because there is no clock attached to a single row in it.
        </p>
        <p className="mb-4">
          What that data can do is translate. If a time-of-day effect changes the power you can hold, the Alpe fit converts that power change into minutes. The equation behind the calculator is:
        </p>
        <div className="bg-muted/50 p-6 rounded-lg">
          <p className="font-bold text-lg mb-4">Worked Example: What a Power Swing Costs on the Alpe</p>
          <p className="mb-4 text-sm">
            time in seconds = 148.60 x (W/kg)<sup>2</sup> - 1954.08 x (W/kg) + 8329.87
          </p>
          <ul className="space-y-2">
            <li><strong>3.20 W/kg:</strong> about 59:58, the familiar sub-hour benchmark</li>
            <li><strong>3.10 W/kg, 3 percent less power:</strong> about 61:40, so roughly 1 minute 42 seconds slower</li>
            <li><strong>3.04 W/kg, 5 percent less power:</strong> about 62:43, so roughly 2 minutes 45 seconds slower</li>
          </ul>
          <p className="mt-4 mb-0 text-sm">
            For a 75 kg rider those three points are 240 W, 233 W and 228 W. Nobody would call a 7 W difference dramatic, yet on a climb of 12.2 km and 1,036 m it is most of two minutes.
          </p>
        </div>
        <p className="mb-4">
          Read that example carefully, because the conditional matters. It shows what a 3 or 5 percent swing would be worth if you had one. It does not claim that time of day produces a swing of that size in you. The only way to find out is to measure it, which is what the next section is for.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Test It On Yourself: A Protocol That Actually Works</h2>
        <p className="mb-4">
          You do not need a laboratory to answer this question. You need one repeatable effort, a small number of time slots, and the discipline to hold everything else still. Six sessions across three weeks will tell you more about your own body than any published average ever will.
        </p>

        <h3 className="text-xl font-bold mb-3">Step 1: Pick the Test</h3>
        <p className="mb-4">
          Choose one effort you can repeat without thinking about it. A 20 minute steady effort at a fixed rate of perceived exertion works well, because holding effort constant and letting power vary is exactly the comparison you want. A fixed Zwift segment ridden at the same subjective effort works too. Avoid anything under five minutes, since short efforts are dominated by day-to-day noise.
        </p>

        <h3 className="text-xl font-bold mb-3">Step 2: Pick Three Slots and Repeat Each Twice</h3>
        <p className="mb-4">
          Three time slots, spread widely: an early one, a middle one and a late one. Ride each slot twice, so six sessions in total, and never put two tests closer together than 48 hours. Alternate the slots rather than doing both morning tests back to back, so that a good or bad week does not land entirely on one time of day.
        </p>

        <h3 className="text-xl font-bold mb-3">Step 3: Hold Everything Else Constant</h3>
        <p className="mb-4">
          This is the part people skip, and it is the part that decides whether the result means anything:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Same trainer, same setup:</strong> No firmware changes mid-test, and run your usual calibration routine every time</li>
          <li><strong>Same warm-up:</strong> Identical duration and structure, which deliberately handicaps the morning test in a way you can reason about afterwards</li>
          <li><strong>Same cooling:</strong> Fan in the same place at the same speed, room temperature noted each session</li>
          <li><strong>Same caffeine:</strong> Either the same dose at the same interval before every test, or none at all</li>
          <li><strong>Same fuelling gap:</strong> The same time since your last meal, and the same meal if you can manage it</li>
          <li><strong>Same prior day:</strong> No hard session in the 24 hours before any test</li>
          <li><strong>Sleep logged:</strong> Write down hours slept the night before, because it will explain your outliers</li>
        </ul>

        <h3 className="text-xl font-bold mb-3">Step 4: Record the Right Things</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Average power for the effort</li>
          <li>Average heart rate, and how long it took to get there</li>
          <li>Perceived exertion at the 5, 10, 15 and 20 minute marks</li>
          <li>Room temperature and hours of sleep</li>
          <li>One line on how you felt before starting, written before you look at the power number</li>
        </ul>

        <h3 className="text-xl font-bold mb-3">Step 5: Read the Result Honestly</h3>
        <p className="mb-4">
          Here is the single most useful idea in this whole article. Compare your two repeats within each slot first. The gap between them is your noise level. Only a difference between slots that is clearly larger than that noise level means anything at all.
        </p>
        <p className="mb-4">
          If your two morning tests came in 8 watts apart, then a 5 watt gap between morning and evening is nothing, and you should conclude that time of day does not meaningfully move your power. That is a real, useful, liberating result. If instead your repeats sit within 2 or 3 watts of each other and the evening slot is 15 watts up on the morning slot, you have found something worth building a schedule around.
        </p>
        <p className="mb-4">
          Once you have a power difference you trust, put both numbers into the{" "}
          <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline">
            Alpe du Zwift Calculator
          </Link>{" "}
          and read off the difference in minutes. That converts an abstract watt gap into the only currency that matters on a climb.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Working Out Your Chronotype Without a Test</h2>
        <p className="mb-4">
          If you are not going to run the protocol, a self-assessment still gets you most of the way. The questions that matter are about your free days, not your working days, because a work alarm tells you about your employer and not about your clock.
        </p>
        <div className="bg-zwift-blue/10 dark:bg-zwift-blue/20 p-6 rounded-lg">
          <p className="font-bold text-lg mb-4">Five Questions</p>
          <ul className="space-y-2">
            <li>On a day with nothing scheduled, what time do you wake without an alarm?</li>
            <li>How long after waking do you feel genuinely alert rather than merely upright?</li>
            <li>Left alone, when do you get sleepy enough to go to bed?</li>
            <li>At what time of day have your best training sessions historically happened?</li>
            <li>How different is your weekend sleep from your weekday sleep?</li>
          </ul>
          <p className="mt-4 mb-0 text-sm">
            <strong>Morning type:</strong> wakes early unprompted, alert quickly, sleepy early in the evening<br/>
            <strong>Evening type:</strong> wakes late when free, slow to start, still sharp late at night<br/>
            <strong>Intermediate:</strong> no strong pull either way, and a mild afternoon slump
          </p>
        </div>
        <p className="mb-4">
          That last question is the interesting one. A large gap between weekend and weekday sleep timing is a sign your schedule is dragging you away from your natural clock, and it is usually the thing to fix before worrying about which hour you train in.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Scheduling Around Your Chronotype</h2>
        <p className="mb-4">
          Once you have a sense of your own pattern, apply it where it costs you nothing. This layers directly onto your{" "}
          <Link to="/blog/zwift-training-periodization" className="text-zwift-orange hover:underline">
            training periodization
          </Link>
          , since the intensity of the session decides how much the timing matters.
        </p>

        <h3 className="text-xl font-bold mb-3">Morning Types</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Hard sessions:</strong> Early, with the long warm-up described above</li>
          <li><strong>Races:</strong> Prefer morning start times where the calendar offers them</li>
          <li><strong>Recovery rides:</strong> Anywhere, including the evening, since easy riding barely cares</li>
          <li><strong>Avoid:</strong> Saving your only quality session of the week for 9 PM</li>
        </ul>

        <h3 className="text-xl font-bold mb-3">Evening Types</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Hard sessions:</strong> Late afternoon or early evening, ideally finishing at least two hours before bed</li>
          <li><strong>Races:</strong> Evening events, which on Zwift are plentiful</li>
          <li><strong>Recovery rides:</strong> Morning, where low intensity forgives a cold body</li>
          <li><strong>Avoid:</strong> A 5 AM interval session because a training plan said Tuesday</li>
        </ul>

        <h3 className="text-xl font-bold mb-3">Intermediate Types</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Hard sessions:</strong> Mid-morning or late afternoon, whichever your week protects better</li>
          <li><strong>Recovery rides:</strong> Drop them into the early afternoon dip, where they cost nothing</li>
          <li><strong>Advantage:</strong> Use the flexibility to keep a fixed slot, which beats chasing a peak</li>
        </ul>

        <h3 className="text-xl font-bold mb-3">A Week Built Around an Early Clock</h3>
        <div className="bg-zwift-orange/10 dark:bg-zwift-orange/20 p-6 rounded-lg">
          <p className="font-bold text-lg mb-4">Example Week for a Morning Type</p>
          <ul className="space-y-2">
            <li><strong>Monday:</strong> Recovery ride, afternoon, timing irrelevant</li>
            <li><strong>Tuesday:</strong> Intervals, 6-8 AM, after a full warm-up</li>
            <li><strong>Wednesday:</strong> Tempo, 7-9 AM</li>
            <li><strong>Thursday:</strong> Intervals, 6-8 AM</li>
            <li><strong>Friday:</strong> Recovery ride or rest</li>
            <li><strong>Saturday:</strong> Long endurance ride, 7-10 AM</li>
            <li><strong>Sunday:</strong> Race or group ride, 8-10 AM</li>
          </ul>
          <p className="mt-4 mb-0 text-sm">
            An evening type can run the identical week with the hard days moved to 5-7 PM. The structure is what matters, the hours are the adjustable part.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">When the Clock Is Not Yours to Choose</h2>
        <p className="mb-4">
          I should be honest about how this works in my own life. I am an MSc student in Mechanical Engineering at Aalborg University, training for Ironman Copenhagen, and my training slots are decided by lectures, lab time and group work far more often than by my circadian rhythm. The trainer gets ridden when the calendar allows.
        </p>
        <p className="mb-4">
          In my own riding I have found that the session I actually complete at a slightly wrong hour beats the perfectly timed session I skip, every single time. That is not a physiological claim, it is arithmetic. A workout you did not do produces no adaptation regardless of how well it was scheduled.
        </p>
        <p className="mb-4">
          So the priority order I would suggest, in descending order of how much it matters:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li><strong>A time you can repeat every week</strong>, because consistency dwarfs everything else here</li>
          <li><strong>A time you are not rushed</strong>, since a session squeezed into 35 minutes gets cut short at the interval that mattered</li>
          <li><strong>A time your body is warm and fed</strong>, which you can partly engineer with a warm-up and a snack</li>
          <li><strong>A time that matches your chronotype</strong>, which is a genuine bonus when the first three allow it</li>
        </ol>
        <p className="mb-4">
          I am a rider and an engineering student, not a coach and not a sports scientist. Read this as one rider's reading of the mechanism, checked against his own trainer.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Sleep Timing and Sleep Quality</h2>
        <p className="mb-4">
          Chronotype and sleep are the same subject viewed from two ends. Getting sleep right does more for your training than picking the ideal training hour, because poor sleep degrades performance at every hour of the day.
        </p>

        <h3 className="text-xl font-bold mb-3">Aligning Sleep With Your Clock</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Morning types:</strong> An early bedtime is not a failing, it is the schedule your body wants</li>
          <li><strong>Evening types:</strong> A later bed and wake time works fine if your obligations permit it</li>
          <li><strong>Everyone:</strong> Keep the wake time steadier than the bedtime, since morning light is the strongest signal your clock receives</li>
        </ul>

        <h3 className="text-xl font-bold mb-3">Sleep Quality Basics</h3>
        <div className="bg-muted/50 p-6 rounded-lg">
          <p className="font-bold text-lg mb-4">Things That Reliably Help</p>
          <ul className="space-y-2">
            <li>Hold a consistent schedule, weekends included</li>
            <li>Keep the bedroom dark and cool</li>
            <li>Dim the lights in the last hour, and get bright light soon after waking</li>
            <li>Keep caffeine well away from the evening, remembering it has a long half-life</li>
            <li>Aim for the amount of sleep that lets you wake without an alarm, which for most adults is somewhere in the seven to nine hour range</li>
            <li>Finish hard evening sessions with enough time to cool down and calm down before bed</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Can You Move Your Chronotype?</h2>
        <p className="mb-4">
          Partly. Chronotype has a genetic component you cannot argue with, but the clock is entrained by light and by routine, and both of those are yours to change. It also drifts naturally with age, which is why the teenager who could not function before 10 AM often becomes a perfectly cheerful early riser a decade later.
        </p>

        <h3 className="text-xl font-bold mb-3">Shifting Gradually</h3>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li>Move your wake time first, in steps of 15 to 30 minutes, and let bedtime follow</li>
          <li>Hold each step for several days before taking the next one</li>
          <li>Get bright light as soon as possible after the new wake time, outdoors if you can</li>
          <li>Dim the lights and drop the screens in the last hour before the new bedtime</li>
          <li>Keep the new wake time on weekends, or the shift unwinds every Saturday</li>
        </ol>
        <p className="mb-4">
          Expect the first stretch to feel worse before it feels better, and plan your hard sessions accordingly rather than testing yourself in the middle of a shift. I am deliberately not putting a percentage on how much performance dips during that adjustment, because I have no way to measure it and neither does anyone quoting a figure at you.
        </p>

        <h3 className="text-xl font-bold mb-3">Where the Limits Are</h3>
        <p className="mb-4">
          A full reversal from committed night owl to committed early riser is hard, tends to unwind the moment life gets busy, and is rarely worth the effort for a hobby cyclist. Working with your rhythm is cheaper than fighting it. Shift your clock when your life demands it, not because a training article implied that mornings are virtuous.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Tracking It Over Time</h2>
        <p className="mb-4">
          If you want to keep watching this after the six-session test, track a small number of things and let them accumulate. The techniques in our{" "}
          <Link to="/blog/the-data-behind-zwift-climbing" className="text-zwift-orange hover:underline">
            climbing data analysis
          </Link>{" "}
          apply directly to your own files.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Start time:</strong> Log it, because without it none of the rest can be sorted by hour</li>
          <li><strong>Normalised or average power</strong> for a comparable portion of each session</li>
          <li><strong>Heart rate at a fixed power</strong>, which drifts with fatigue and heat as well as time of day</li>
          <li><strong>Perceived exertion</strong>, recorded before you look at the numbers</li>
          <li><strong>Sleep the night before</strong>, which will explain more of your variance than the clock does</li>
          <li><strong>Completion rate:</strong> which slots you actually finish sessions in, which is the metric that ends up mattering most</li>
        </ul>
        <p className="mb-4">
          Give it a couple of months before drawing conclusions. A handful of rides is not enough to separate a time-of-day pattern from ordinary week-to-week variation, and jumping early is how people end up believing things that are not there.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Four Mistakes Worth Avoiding</h2>

        <h3 className="text-xl font-bold mb-3">Reading a Bad Morning Number as Lost Fitness</h3>
        <p className="mb-4">
          A cold, fasted body at 6 AM producing lower power is not detraining. It is a cold, fasted body. Compare morning sessions to other morning sessions, and evening sessions to other evening sessions. Mixing them and calling the result a trend is the fastest way to talk yourself out of a training block that was working fine.
        </p>

        <h3 className="text-xl font-bold mb-3">Skipping the Warm-Up Precisely When You Need It Most</h3>
        <p className="mb-4">
          The early session is the one with the least time available and the greatest need for a long warm-up. If the choice is between a full warm-up with fewer intervals and a rushed start with all of them, take the former. The first interval of a rushed morning session is usually wasted anyway.
        </p>

        <h3 className="text-xl font-bold mb-3">Fighting Your Clock Seven Days a Week</h3>
        <p className="mb-4">
          If every hard session lands at the worst hour of your day, you will train fine for a while and then quietly stop enjoying it. Where the week has any give at all, move one or two quality sessions toward your better window and leave the easy riding wherever it fits.
        </p>

        <h3 className="text-xl font-bold mb-3">A Sleep Schedule That Resets Every Weekend</h3>
        <p className="mb-4">
          Sleeping several hours later on Saturday and Sunday shifts your clock and then drags it back on Monday morning, which is why Monday feels like jet lag without the holiday. A steady wake time is the cheapest performance intervention on this entire page.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Conclusion: A Small Lever on Top of a Large One</h2>
        <p className="mb-4">
          Time of day is real. Your body is colder in the morning, your sleep pressure is higher at night, and both of those reach your pedals. Understanding the mechanism lets you do something concrete about it, which mostly comes down to warming up properly, eating something before hard morning work, and protecting your sleep.
        </p>
        <p className="mb-4">
          What I cannot tell you is how big the effect is in you, and I would rather say that plainly than invent a figure. Nobody has measured your particular body. But the worked example above shows what is at stake if the effect turns out to be real for you: on a climb like the Alpe, a few percent of power is most of two minutes, and a few percent is not a large amount of power.
        </p>
        <p className="mb-4">
          So run the six sessions. Compare your repeats first, then your slots. If the difference is bigger than your noise, build your week around it. If it is not, you have learned something better still, which is that you are free to train whenever your life actually allows. Either way you will be working from your own data rather than someone else's average.
        </p>
      </div>

      <div className="bg-zwift-blue/10 dark:bg-zwift-blue/20 border-l-4 border-zwift-blue p-6 rounded-r-lg mt-8">
        <h2 className="text-2xl font-bold mb-4">Put a Number on It</h2>
        <p className="mb-4">
          Chronobiology sits on top of your{" "}
          <Link to="/blog/zwift-training-periodization" className="text-zwift-orange hover:underline font-semibold">
            training periodization
          </Link>{" "}
          rather than replacing it, and the power you are timing is still governed by{" "}
          <Link to="/blog/power-to-weight-ratio-science" className="text-zwift-orange hover:underline font-semibold">
            power-to-weight ratio
          </Link>
          .
        </p>
        <p className="mb-0">
          When your test gives you two power figures, put both through the{" "}
          <Link to="/alpeduzwiftcalculator" className="text-zwift-orange hover:underline font-semibold">
            Alpe du Zwift Calculator
          </Link>{" "}
          or the{" "}
          <Link to="/ventop-calculator" className="text-zwift-orange hover:underline font-semibold">
            Ven-Top Calculator
          </Link>{" "}
          and see the gap in minutes rather than watts. The method behind both is documented in our{" "}
          <Link to="/blog/regression-analysis-methodology" className="text-zwift-orange hover:underline font-semibold">
            regression analysis methodology
          </Link>
          .
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

export default ZwiftChronobiology;
