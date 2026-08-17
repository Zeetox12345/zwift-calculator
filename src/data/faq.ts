/**
 * FAQ content for /faq.
 *
 * It lives here rather than inside the page component because the SEO registry
 * also reads it, to emit FAQPage structured data from exactly the same strings
 * the page renders. One source, so the schema and the visible text cannot
 * disagree.
 */

import type { FaqEntry } from "@/lib/seo";

export type FaqIconKey = "Calculator" | "Mountain" | "Gauge" | "Zap" | "Info" | "HelpCircle";

/**
 * A single question. `answer` is deliberately plain text so the same string can
 * be rendered on the page and handed to the FAQPage structured data without the
 * two ever drifting apart. Anything that needs markup - a link, mainly - lives
 * in `links` and is rendered underneath the answer paragraph.
 */
export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  links?: { to: string; label: string }[];
};

export type FaqSection = {
  id: string;
  title: string;
  intro: string;
  iconKey: FaqIconKey;
  items: FaqItem[];
};

export const faqSections: FaqSection[] = [
  {
    id: "calculators",
    title: "Using the calculators",
    intro: "What the inputs mean, what the model assumes, and what it does not know.",
    iconKey: "Calculator",
    items: [
      {
        id: "inputs",
        question: "What do the weight and power inputs actually mean?",
        answer:
          "Weight is your total riding weight in kilograms, the number in your Zwift profile. Zwift uses that profile weight in its physics, so if the profile says 70 kg and you really weigh 78 kg, the game will hand you a faster time than the estimate. Power is the average watts you expect to hold for the whole climb, not your best 20 seconds, and only your FTP if the climb takes about an hour. A 75 kg rider entering 250 W is asking about 3.33 W/kg.",
        links: [
          { to: "/alpeduzwiftcalculator", label: "Alpe du Zwift calculator" },
          { to: "/zwift-ftp-calculator", label: "FTP calculator" },
        ],
      },
      {
        id: "steady-power",
        question: "Why does the estimate assume steady power?",
        answer:
          "The curve was fitted to completed climbs, and the riders who post those times almost all hold a near constant effort. Steady power is also close to the fastest way up a long climb: the time you lose by dropping below your average is bigger than the time you claw back above it. Surging burns anaerobic capacity you cannot get back inside a 45 to 90 minute effort, so riding the Alpe in bursts leaves you slower than the estimate.",
        links: [{ to: "/blog/conquer-alpe-du-zwift", label: "Pacing the Alpe: tips for a faster climb" }],
      },
      {
        id: "equipment",
        question: "Does the calculator account for my bike and wheels?",
        answer:
          "No. It takes weight and watts, nothing else. Zwift itself does model equipment: frames and wheelsets carry different in-game weight and drag, and on a long climb a light climbing setup beats a heavy aero one. The gap is real but small next to a change in power-to-weight, and twenty extra watts will move your Alpe time further than any frame swap. Read the estimate as your time on a sensible climbing setup.",
      },
      {
        id: "same-wkg",
        question: "Two of us have the same W/kg. Why were our times different?",
        answer:
          "The model returns one number per W/kg, so on paper you get the same estimate. Real rides diverge anyway. Pacing is the biggest reason: the rider with the flatter power curve finishes first. Equipment weight, a Feather powerup and where each of you started the timer all count. There is a small physical effect too, since at the same W/kg the heavier rider pushes a little more air, which on an 8.5% gradient is minor but not zero.",
      },
      {
        id: "unrealistic",
        question: "What happens if I enter an unrealistic number?",
        answer:
          "The inputs are bounded at 30 to 120 kg and 100 to 800 W. Above 7.5 W/kg the tool stops returning a time, because that is far outside the range of rides the model was fitted to. There is a subtler limit too: the fitted data runs from roughly 2.5 W/kg to a little past 5, and because the curve is a quadratic it bottoms out near 6.6 W/kg and then bends the wrong way. Anything near or beyond that is extrapolation.",
        links: [{ to: "/blog/regression-analysis-methodology", label: "How the regression model was built" }],
      },
      {
        id: "privacy",
        question: "Is my weight and power data stored anywhere?",
        answer:
          "No. The calculators run entirely in your browser. Nothing you type is sent to a server, there is no account and no database, and nothing is remembered next time you visit. Reload the page and your numbers are gone. That is also why there is no saved ride history: building one would mean storing your data, and I would rather not. The site does use cookies for analytics and advertising, which is set out in the privacy policy.",
        links: [{ to: "/privacy-policy", label: "Privacy policy" }],
      },
    ],
  },
  {
    id: "climbing",
    title: "Climbing on Zwift",
    intro: "Times, targets and the climbs most riders measure themselves against.",
    iconKey: "Mountain",
    items: [
      {
        id: "alpe-times",
        question: "How long does Alpe du Zwift take at different W/kg?",
        answer:
          "The Alpe is 12.2 km with 1,036 m of climbing, an average of roughly 8.5%, spread over 21 hairpins. Using the model on this site, the estimates come out near 1h24 at 2.0 W/kg, 1h13 at 2.5, 1h03 at 3.0, 55 minutes at 3.5, 48 at 4.0, 42 at 4.5 and 38 at 5.0. Those come from a curve fitted to recorded rides, not from promises, and your own time still turns on pacing and equipment.",
        links: [
          { to: "/alpeduzwiftcalculator", label: "Run your own numbers" },
          { to: "/zwift-climbs", label: "All Zwift climbs" },
        ],
      },
      {
        id: "sub-hour",
        question: "What W/kg do I need to break an hour on the Alpe?",
        answer:
          "Around 3.2 W/kg, held for the full climb. The model puts 3.2 almost exactly on the hour, so treat that as the line and anything above it as margin. Aim past the minimum, because an estimate landing at 59:58 leaves nothing for one bad pacing decision. For a 75 kg rider that is roughly 240 W for an hour; for a 62 kg rider, roughly 200 W. A sub-hour Alpe is a real milestone, but it is not an elite number.",
      },
      {
        id: "ventop",
        question: "How does Ven-Top compare with Alpe du Zwift?",
        answer:
          "Ven-Top is Zwift's version of Mont Ventoux in the France world, roughly 20.9 km with about 1,480 m of gain, so it averages a little over 7%. It is longer than the Alpe and slightly less steep. Across the 3 to 4.5 W/kg band the two models here put Ven-Top about 37 to 40% slower, and the gap widens below that, so an hour on the Alpe means somewhere near 1h22 on Ven-Top. The longer duration makes a pacing mistake more expensive.",
        links: [
          { to: "/ventop-calculator", label: "Ven-Top calculator" },
          { to: "/alpe-vs-ventop", label: "Alpe vs Ven-Top compared" },
          { to: "/blog/mastering-ven-top", label: "Mastering Ven-Top" },
        ],
      },
      {
        id: "descent",
        question: "Does the descent count in the estimate?",
        answer:
          "No. The estimate covers the climb only, from the banner at the bottom to the arch at the top, which is the segment Zwift times and the segment the underlying data came from. The descent afterwards is not included and does not change the number. If you are working out how much of your evening to block out, add the approach and the descent separately, or plan around the full route rather than the timed segment.",
      },
      {
        id: "drafting",
        question: "Does drafting help on a steep climb?",
        answer:
          "Barely. Drafting saves air resistance, and air resistance depends on speed. On an 8.5% gradient you are moving at maybe 10 to 15 km/h, so drag is a small share of what you are fighting and nearly all of your power goes into lifting your own mass. Sitting on a wheel returns very little. What riding with someone gives you is pacing and company, worth more than the physics here. On the flat run-in drafting matters a great deal, so use it before the climb starts.",
        links: [{ to: "/blog/zwift-drafting-physics-aerodynamics", label: "The physics of drafting in Zwift" }],
      },
      {
        id: "first-attempt",
        question: "What is a realistic target for my first Alpe attempt?",
        answer:
          "Finishing it. A first attempt landing between 60 and 100 minutes is entirely normal, which on the model means holding roughly 1.3 to 3.2 W/kg to the top. The standard mistake is starting at a pace that lasts three hairpins. Put your honest W/kg into the calculator, take a little off it, and ride the first third at that number. If you still have something after hairpin 10, lift, and let that time become your baseline.",
      },
    ],
  },
  {
    id: "power",
    title: "Power and W/kg",
    intro: "The two numbers everything else on this site is built from.",
    iconKey: "Zap",
    items: [
      {
        id: "ftp",
        question: "What is FTP?",
        answer:
          "Functional threshold power is the highest power you can hold in a steady state for roughly an hour, in watts. It is the standard anchor for training zones, since intervals, tempo and endurance targets are set as percentages of it. Almost nobody tests it over a full hour. Most riders estimate it from 95% of a best 20-minute effort or from Zwift's ramp test, and the two do not always agree. What matters is retesting the same way each time.",
        links: [{ to: "/zwift-ftp-calculator", label: "FTP calculator" }],
      },
      {
        id: "wkg",
        question: "What does W/kg mean?",
        answer:
          "Watts per kilogram: your power divided by your body weight. 250 W at 75 kg is 3.33 W/kg. Because it is a ratio there are two ways to move it, and they are not equally useful. The number also means nothing without a duration attached. Five W/kg for 20 seconds is unremarkable; 5 W/kg for an hour is close to professional. Whenever somebody quotes a W/kg figure, ask how long they held it.",
        links: [{ to: "/blog/power-to-weight-ratio-science", label: "The science of power-to-weight ratio" }],
      },
      {
        id: "wkg-climbs",
        question: "Why does W/kg matter more on a climb than on the flat?",
        answer:
          "On a steep climb almost all of your power goes into raising your own mass against gravity, and that cost scales directly with weight, so watts divided by kilograms predicts climbing speed well. On the flat the main resistance is air, and drag depends on frontal area rather than mass. A 90 kg rider at 300 W and a 60 kg rider at 200 W are both at 3.33 W/kg. On the flat the heavier rider rides away; on the Alpe they arrive together.",
      },
      {
        id: "weight-vs-watts",
        question: "Is losing 2 kg the same as gaining 20 W?",
        answer:
          "No. Take a 75 kg rider at 250 W, which is 3.33 W/kg. Losing 2 kg gives 3.42. Finding 20 W gives 3.60. The watts win, and they win everywhere: more power helps on the flat and in a sprint, while lost weight only pays when the road tilts up. Weight loss also has a floor. Cut too hard and you lose muscle, underfuel your training and watch your absolute power fall with it. Chase watts first.",
      },
      {
        id: "typical-ranges",
        question: "What W/kg is typical from recreational rider to elite?",
        answer:
          "These are broad, overlapping bands for power held around an hour, not cutoffs. Newer riders without structured training are often near 2 to 2.5 W/kg. Regular club-level riders commonly land around 2.5 to 3.5, and strong amateurs and competitive Zwift racers around 3.5 to 4.5. Above that is the sharp end of amateur racing, and professional male road racers can exceed 5.5 W/kg for an hour. Which way you are moving matters more than where you sit today.",
        links: [{ to: "/zwift-racing-category-calculator", label: "Zwift racing category calculator" }],
      },
    ],
  },
  {
    id: "trainers",
    title: "Trainers and accuracy",
    intro: "Every estimate here is downstream of the watts your trainer reports.",
    iconKey: "Gauge",
    items: [
      {
        id: "indoor-vs-outdoor",
        question: "Why is my indoor power lower than my outdoor power?",
        answer:
          "Usually a mix of three things. Heat: there is no headwind indoors, so your core temperature climbs and your heart rate sits higher for the same watts unless you have a serious fan. Continuity: outdoors you coast on descents and at junctions, so the average hides a lot of rest, while indoors you pedal every second. Measurement: your trainer and your power meter have their own accuracy specifications, and a couple of percent either way is normal.",
        links: [{ to: "/blog/zwift-vs-outdoor-cycling", label: "Zwift versus outdoor cycling" }],
      },
      {
        id: "erg",
        question: "What does ERG mode do to a climb effort?",
        answer:
          "ERG holds a target wattage and adjusts resistance to keep you there, regardless of the gradient or your cadence. That is exactly right in a structured workout and exactly wrong on a timed climb. In simulation mode the resistance follows the slope, the ride feels like the climb, and your gear choices matter. In ERG you are doing a wattage test with scenery. ERG also punishes surges: a dropping cadence makes the trainer add resistance, which drops your cadence further.",
      },
      {
        id: "calibration",
        question: "Why does trainer calibration matter?",
        answer:
          "Because every number on this site sits downstream of your power reading. A trainer running 3% high turns 240 W into 247 W and quietly shifts your W/kg, your estimated climb time and your training zones. Many wheel-on units and some older direct-drive trainers drift with belt tension and temperature, which is what a spindown calibration corrects. Warm up for about ten minutes first, calibrate the way the manufacturer specifies, and keep firmware current. Several modern direct-drive trainers need no user calibration.",
        links: [{ to: "/blog/zwift-setup-guide", label: "Zwift setup guide" }],
      },
      {
        id: "wheel-on",
        question: "Is a wheel-on trainer good enough?",
        answer:
          "For training, yes. A wheel-on smart trainer gives consistent, useful numbers and your workouts will do their job. The trade-offs are a wider accuracy specification than most direct-drive units, sensitivity to tyre pressure and slip, and a lower maximum simulated gradient, so the steepest ramps of the Alpe feel flatter than they should. For tracking your own progress, consistency beats absolute accuracy: same tyre, same pressure, same calibration routine.",
      },
    ],
  },
  {
    id: "site",
    title: "About this site",
    intro: "Who writes it, who pays for it, and how to tell me when it is wrong.",
    iconKey: "Info",
    items: [
      {
        id: "who",
        question: "Who writes this site?",
        answer:
          "I do. My name is Christian Lassen Dam, I am 25, I live in Aalborg in Denmark, and I am an MSc student in Mechanical Engineering at Aalborg University. I have ridden Zwift for years, I own the Tron bike, and I am currently training for Ironman Copenhagen. The engineering side is why the calculators here are regression fits to recorded rides rather than rules of thumb. The site is run through my company, CLD Consulting.",
        links: [
          { to: "/author", label: "More about me" },
          { to: "/about-us", label: "About this site" },
        ],
      },
      {
        id: "affiliation",
        question: "Is this site affiliated with Zwift?",
        answer:
          "No. ZwiftCalculator.com is independent. It is not affiliated with, endorsed by or sponsored by Zwift Inc, and I have no access to Zwift's internal data or its physics code. Zwift, Alpe du Zwift, Ven-Top and Watopia are their names and trademarks, used here to describe what this site is about. Everything published here is built from publicly visible ride data and my own analysis, which is why the models are fitted estimates rather than official figures.",
      },
      {
        id: "money",
        question: "How does the site make money?",
        answer:
          "Display advertising, and nothing else. There are no affiliate links, no sponsored posts, no paid reviews, no gear commissions and no paywall. If an article recommends something, nobody paid for that recommendation. The ads themselves are selected by the ad network rather than by me, and they have no bearing on what gets written or on what the calculators return. Keeping that wall in place is the point of the editorial policy.",
        links: [{ to: "/editorial-policy", label: "Editorial policy" }],
      },
      {
        id: "corrections",
        question: "I think one of your numbers is wrong. How do I report it?",
        answer:
          "Please tell me. Email zwiftcalculator@gmail.com or use the contact page. The most useful report includes the page, the exact inputs you used, the result you got, the result you expected, and a link to the ride if you are comparing against a real climb. Real ride data is the only thing that makes these models better, so a message telling me an estimate was six minutes off your actual time is worth more to me than a compliment.",
        links: [{ to: "/contact", label: "Contact page" }],
      },
    ],
  },
];

/**
 * Flat question and answer list, exported for the FAQPage structured data. It
 * is derived from the same array the page renders, so the schema and the
 * visible text cannot disagree.
 */
export const faqEntries: FaqEntry[] = faqSections.flatMap((section) =>
  section.items.map(({ question, answer }) => ({ question, answer })),
);
