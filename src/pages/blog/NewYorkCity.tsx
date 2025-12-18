import BlogPost from "@/components/BlogPost";

const NewYorkCity = () => {
  const content = (
    <div className="space-y-8">
      {/* Introduction */}
      <div>
        <p className="mb-4 text-lg leading-relaxed">
          New York City is not a place you casually "try" on a bike.
        </p>
        <p className="mb-4">
          It's loud. It's fast. It's chaotic in ways that don't exist anywhere else. But it's also one of the most rewarding cities in the world to ride once you understand how it works. The trick is knowing where cycling feels joyful, where it feels stressful, and how to stitch together routes that show you the city instead of fighting it.
        </p>
        <div className="my-6">
          <img 
            src="/pictures/blog/australia/newyork_1_1.png" 
            alt="New York City cycling route" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <p className="mb-4">
          This guide is written for first-timers. Not messengers. Not hardened urban cyclists who thrive on close calls. Real riders who want to experience New York from the saddle without turning the trip into an endurance test of nerves.
        </p>
        <p className="mb-4">
          We'll cover where NYC cycling shines, where it demands extra caution, how to plan rides that feel iconic instead of overwhelming, and how to keep the New York vibe alive at home using Zwift's expanded New York world and its increasingly detailed "future-city" routes.
        </p>
        <p className="mb-4 font-medium">
          This is not about riding everything. It's about riding the right things.
        </p>
        
        <div className="my-8">
          <h3 className="text-xl font-semibold mb-4">Cycling New York City</h3>
          <p className="mb-4 text-sm text-muted-foreground">
            Get a first-hand look at cycling in NYC, including the Hudson River Greenway and Central Park, in this video guide.
          </p>
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/oKHXFsSgni4"
              title="New York City Cycling Guide"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* What makes NYC different */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What makes New York cycling different from anywhere else</h2>
        <p className="mb-4">
          New York is not hostile to bikes. But it is indifferent.
        </p>
        <p className="mb-4">
          The city does not slow down for you. It doesn't adapt. You adapt to it. Once you accept that, cycling here starts to make sense.
        </p>
        <p className="mb-4">What's different compared to most cities:</p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>Traffic is constant, not occasional</li>
          <li>Streets can change personality block by block</li>
          <li>Bike lanes range from excellent to purely symbolic</li>
          <li>Pedestrians do unpredictable things, often confidently</li>
          <li>The visual density is extreme</li>
        </ul>
        <p className="mb-4">
          At the same time, New York offers something few cities do: scale and variety. In a single ride, you can pass waterfront parks, historic neighborhoods, industrial edges, dense urban canyons, and quiet greenways that feel almost peaceful.
        </p>
        <p className="mb-4">
          The goal for a first trip is not to "ride everywhere." The goal is to curate your exposure.
        </p>
      </div>

      {/* Golden rule */}
      <div>
        <h2 className="text-2xl font-bold mb-4">The golden rule for first-time NYC riding</h2>
        <p className="mb-4">
          If you remember only one thing, remember this:
        </p>
        <p className="mb-4 text-lg font-semibold text-zwift-orange">
          Ride where the city wants you to ride.
        </p>
        <p className="mb-4">
          New York has invested heavily in certain corridors. These areas feel intentional. Predictable. Human-scaled. When you stay mostly within them, the city opens up.
        </p>
        <p className="mb-4">
          When you fight the grid on its terms, especially as a visitor, stress rises fast.
        </p>
        <p className="mb-4">
          This guide prioritizes routes and areas where cycling feels like part of the city's rhythm, not an interruption to it.
        </p>
      </div>

      {/* When to ride */}
      <div>
        <h2 className="text-2xl font-bold mb-4">When to ride: timing is everything</h2>
        <p className="mb-4">
          Time of day matters more in New York than almost anywhere else.
        </p>
        <p className="mb-4">
          <strong>Early morning is magic.</strong> The city breathes. Traffic is lighter. The visual drama is still there, but the noise is lower. If you can ride between sunrise and mid-morning, you get a different city.
        </p>
        <p className="mb-4">
          Late morning and early afternoon are manageable, especially on weekends and on greenways.
        </p>
        <p className="mb-4">
          <strong>Rush hour is not for first-timers.</strong> It's not that it's impossible. It's that it demands constant attention, assertiveness, and familiarity with driver behavior. There is no shame in avoiding it.
        </p>
        <p className="mb-4">
          Late night can be surprisingly calm in some areas and chaotic in others. Unless you know the neighborhoods well, save nighttime riding for well-lit paths and greenways.
        </p>
      </div>

      {/* Where NYC cycling is fun */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Where NYC cycling is genuinely fun</h2>
        <p className="mb-4">
          Let's start with the good stuff. These are the places that make people fall in love with cycling in New York.
        </p>

        <div className="my-6">
          <h3 className="text-xl font-semibold mb-3">The Hudson River Greenway: your anchor route</h3>
          <p className="mb-4">
            If New York cycling had a backbone, this would be it.
          </p>
          <p className="mb-4">
            The Hudson River Greenway runs along Manhattan's west side and is almost entirely separated from traffic. It's flat, scenic, continuous, and forgiving. For first-timers, it's the single most important piece of infrastructure to know.
          </p>
          <p className="mb-4">Why it works so well:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Minimal interaction with cars</li>
            <li>Clear direction and flow</li>
            <li>Constant visual reward from the river and skyline</li>
            <li>Easy access points</li>
          </ul>
          <p className="mb-4">
            You can ride it casually or use it as a connector to almost anything else. Many great NYC rides are simply variations that start or end here.
          </p>
        </div>

        <div className="my-6">
          <h3 className="text-xl font-semibold mb-3">Central Park: controlled chaos that works</h3>
          <p className="mb-4">
            Central Park is busy, but it's busy in a predictable way.
          </p>
          <p className="mb-4">
            The park loop is one-way for cyclists, clearly marked, and shared with runners and pedestrians who generally understand the rules. It has rolling terrain, gentle climbs, and a sense of escape from the city grid.
          </p>
          <p className="mb-4">For a first-timer, it offers:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>A taste of elevation without danger</li>
            <li>A social cycling atmosphere</li>
            <li>A chance to ride "in" New York without traffic pressure</li>
          </ul>
          <p className="mb-4">
            Early morning is ideal here. You'll share the road with commuters, fitness riders, and people quietly going about their routines. It feels authentic, not touristy.
          </p>
        </div>

        <div className="my-6">
          <h3 className="text-xl font-semibold mb-3">Brooklyn waterfronts: space and personality</h3>
          <p className="mb-4">
            Brooklyn often feels more forgiving than Manhattan on a bike.
          </p>
          <p className="mb-4">
            Neighborhoods like Brooklyn Heights, DUMBO, and Williamsburg have embraced cycling culture more openly, with wider lanes, calmer streets, and strong waterfront paths.
          </p>
          <div className="my-6">
            <img 
              src="/pictures/blog/australia/newyork_1_2.png" 
              alt="Brooklyn waterfront cycling path" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <p className="mb-4">
            The Brooklyn Waterfront Greenway is still evolving, but many sections are already excellent. The views of Manhattan from across the river are some of the best in the city, especially at golden hour.
          </p>
          <p className="mb-4">
            Brooklyn riding tends to feel more human-scaled. Less vertical. Less rushed. It's a great counterbalance to Manhattan intensity.
          </p>
        </div>

        <div className="my-6">
          <h3 className="text-xl font-semibold mb-3">Bridges as experiences, not obstacles</h3>
          <p className="mb-4">
            Bridges in New York are more than connectors. They're moments.
          </p>
          <p className="mb-4">
            The Brooklyn Bridge, Manhattan Bridge, Williamsburg Bridge, and Queensboro Bridge all offer different cycling experiences. Some are busy. Some are loud. Some are windy. But they are unforgettable.
          </p>
          <p className="mb-4">For first-timers, a few principles help:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Ride bridges early in the day</li>
            <li>Expect wind and noise</li>
            <li>Hold a straight line and stay predictable</li>
            <li>Don't rush the experience</li>
          </ul>
          <p className="mb-4">
            The Manhattan Bridge bike path, in particular, delivers dramatic views with slightly less foot traffic than the Brooklyn Bridge.
          </p>
        </div>
      </div>

      {/* Where NYC cycling becomes stressful */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Where NYC cycling becomes stressful (and why)</h2>
        <p className="mb-4">
          Not all parts of the city are equally welcoming. Knowing where tension spikes helps you plan around it.
        </p>

        <div className="my-6">
          <h3 className="text-xl font-semibold mb-3">Midtown Manhattan: sensory overload</h3>
          <p className="mb-4">
            Midtown is intense even on foot. On a bike, it can feel overwhelming.
          </p>
          <p className="mb-4">
            Traffic is dense. Tourists spill unpredictably into bike lanes. Delivery vehicles stop wherever they feel like it. Signals are frequent, which breaks rhythm.
          </p>
          <p className="mb-4">
            This doesn't mean you should avoid Midtown entirely. But it's not where you want to "wander." If you need to pass through, do it deliberately and efficiently.
          </p>
        </div>

        <div className="my-6">
          <h3 className="text-xl font-semibold mb-3">Complex intersections and avenue crossings</h3>
          <p className="mb-4">
            New York's grid is logical, but intersections can be chaotic.
          </p>
          <p className="mb-4">
            Multiple turn lanes, buses, and aggressive drivers all converge. As a visitor, this is where hesitation can create risk.
          </p>
          <p className="mb-4">When in doubt:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Take the lane confidently if it's safer</li>
            <li>Or dismount and cross like a pedestrian</li>
          </ul>
          <p className="mb-4">
            There is no rule that says you must ride everything.
          </p>
        </div>

        <div className="my-6">
          <h3 className="text-xl font-semibold mb-3">Areas with "paint-only" bike lanes</h3>
          <p className="mb-4">
            Some bike lanes exist mostly in theory. Painted lines without protection on fast roads demand more confidence and awareness.
          </p>
          <p className="mb-4">
            If you feel uncomfortable, trust that instinct. Reroute. New York offers alternatives if you're willing to adjust.
          </p>
        </div>
      </div>

      {/* How to plan a first NYC bike day */}
      <div>
        <h2 className="text-2xl font-bold mb-4">How to plan a first NYC bike day that actually works</h2>
        <p className="mb-4">
          A successful first day follows a simple structure.
        </p>
        <p className="mb-4">
          Start with a greenway or park to settle in. Let your nervous system adapt. Then add one or two "city moments." Finish somewhere calm.
        </p>
        <p className="mb-4 font-semibold">Example flow:</p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>Begin on the Hudson River Greenway</li>
          <li>Cut into Central Park for a loop</li>
          <li>Cross one iconic bridge</li>
          <li>Finish along a waterfront path in Brooklyn</li>
        </ul>
        <p className="mb-4">
          This gives you variety without overload.
        </p>
        <p className="mb-4">
          Avoid zig-zagging across dense grids early in the trip. Save that for later, once your comfort level rises.
        </p>
      </div>

      {/* Pacing in the city */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Pacing in the city: effort is not just physical</h2>
        <p className="mb-4">
          Urban riding costs mental energy.
        </p>
        <p className="mb-4">
          Stops. Signals. Visual input. Noise. All of it adds up. A ride that looks easy on paper can feel tiring because of attention demand.
        </p>
        <p className="mb-4">
          Plan shorter rides than you would in a quiet area. Take real breaks. Sit. Watch the city. That's part of the experience.
        </p>
        <p className="mb-4">
          If you try to ride New York like a rural endurance route, you'll miss what makes it special.
        </p>
      </div>

      {/* What to pack */}
      <div>
        <h2 className="text-2xl font-bold mb-4">What to pack for NYC cycling as a visitor</h2>
        <p className="mb-4">
          You don't need a touring setup. You need urban-smart essentials.
        </p>
        <div className="my-6">
          <img 
            src="/pictures/blog/australia/newyork_1_3.png" 
            alt="Cycling gear for NYC urban riding" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <p className="mb-4">
          A reliable lock matters more here than almost anywhere else. Even for short stops.
        </p>
        <p className="mb-4">
          Lights are non-negotiable, day or night. Visibility is safety currency.
        </p>
        <p className="mb-4">
          Clothing should be comfortable and flexible. You may walk. You may stop spontaneously. You want to feel like part of the city, not sealed off from it.
        </p>
        <p className="mb-4">
          Navigation is best handled with offline maps and a general plan, not turn-by-turn micromanagement. Let yourself adapt.
        </p>
      </div>

      {/* Riding etiquette */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Riding etiquette that makes NYC smoother</h2>
        <p className="mb-4">
          Predictability is kindness in New York.
        </p>
        <p className="mb-4">
          Signal your moves. Hold your line. Don't weave. Don't assume anyone sees you. Make eye contact when possible.
        </p>
        <p className="mb-4">
          Respect pedestrians, even when they're wrong. You will never win an argument with someone stepping into a bike lane while staring at their phone.
        </p>
        <p className="mb-4">
          The city rewards calm confidence. Not aggression.
        </p>
      </div>

      {/* Zwift's New York world */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Why Zwift's New York world is such a good indoor match</h2>
        <p className="mb-4">
          Zwift's New York environment is not a literal recreation. It's a future-city interpretation. And that's exactly why it works.
        </p>
        <p className="mb-4">It captures the feeling of:</p>
        <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
          <li>Constant engagement</li>
          <li>Short rises and flats</li>
          <li>Visual stimulation</li>
          <li>Urban scale</li>
        </ul>
        <p className="mb-4">
          You don't ride Zwift New York to simulate traffic. You ride it to simulate rhythm.
        </p>

        <div className="my-6">
          <h3 className="text-xl font-semibold mb-3">The expanded New York map: what it gets right</h3>
          <p className="mb-4">
            Zwift's New York world has grown over time. More routes. More connections. More variation.
          </p>
          <p className="mb-4">What makes it useful for NYC prep and theme-riding:</p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Rolling terrain that mimics stop-start effort</li>
            <li>Long flat sections broken by short climbs</li>
            <li>A sense of speed without long sustained gradients</li>
          </ul>
          <p className="mb-4">
            You're rarely locked into one effort. You're constantly adjusting. That's New York cycling in a nutshell.
          </p>
        </div>

        <div className="my-6">
          <h3 className="text-xl font-semibold mb-3">Zwift routes that feel most "NYC"</h3>
          <p className="mb-4">
            Routes that mix flats and short climbs work best. You want frequent but manageable changes.
          </p>
          <p className="mb-4">
            Routes that encourage steady pressure rather than max efforts translate well. You're training durability and responsiveness, not mountain climbing.
          </p>
          <p className="mb-4">
            The visual density of Zwift's cityscape helps too. It keeps your brain engaged, which matters more than people think when preparing for urban riding.
          </p>
        </div>

        <div className="my-6">
          <h3 className="text-xl font-semibold mb-3">How to structure a "New York style" Zwift ride</h3>
          <p className="mb-4">
            Think in chapters, not numbers.
          </p>
          <p className="mb-4">
            Start steady. Let your legs warm into the rhythm.
          </p>
          <p className="mb-4">
            Add controlled surges. Short increases in power that settle quickly. This mimics intersections, accelerations, and short climbs.
          </p>
          <p className="mb-4">
            Finish with sustained tempo. This mirrors the feeling of locking into a greenway or long avenue stretch.
          </p>
          <p className="mb-4">
            Avoid chasing every sprint. That's not how the city rides.
          </p>
        </div>

        <div className="my-6">
          <h3 className="text-xl font-semibold mb-3">Using Zwift to add volume before your NYC trip</h3>
          <p className="mb-4">
            Indoor volume works well for New York prep because you can control stress.
          </p>
          <p className="mb-4">
            Use Zwift for longer, calmer rides where traffic would otherwise drain you. Build aerobic depth without mental overload.
          </p>
          <p className="mb-4">
            Save outdoor rides for skill and confidence building. Zwift handles fitness. The city handles awareness.
          </p>
        </div>

        <div className="my-6">
          <h3 className="text-xl font-semibold mb-3">Keeping the NYC theme alive after the trip</h3>
          <p className="mb-4">
            Zwift's New York world is a great way to revisit the vibe once you're home.
          </p>
          <p className="mb-4">
            Ride the same routes at similar times of day. Put on music that reminds you of the city. Let the memory feed the effort.
          </p>
          <p className="mb-4">
            Indoor riding often feels better when it's tied to a story. New York gives you a strong one.
          </p>
        </div>
      </div>

      {/* Common mistakes */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Common first-timer mistakes in NYC</h2>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li><strong>Trying to ride everywhere on day one</strong> is the biggest one. You don't need to earn the city.</li>
          <li><strong>Ignoring mental fatigue</strong> leads to sloppy riding. Take breaks before you feel fried.</li>
          <li><strong>Underestimating how much stopping and starting</strong> affects legs and mood.</li>
          <li><strong>Treating Zwift as a separate thing</strong> instead of a continuation of the experience.</li>
        </ul>
      </div>

      {/* Riding solo vs with others */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Riding solo vs riding with others in New York</h2>
        <p className="mb-4">
          Solo riding lets you adapt quickly. You can stop, reroute, and respond to the city instinctively.
        </p>
        <p className="mb-4">
          Group riding adds visibility and confidence but requires coordination. In busy areas, groups can become harder to manage.
        </p>
        <p className="mb-4">
          For a first trip, solo or very small groups work best.
        </p>
      </div>

      {/* Why NYC by bike stays with people */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Why New York by bike stays with people</h2>
        <p className="mb-4">
          Cycling in New York is not about speed or distance.
        </p>
        <p className="mb-4">
          It's about perspective.
        </p>
        <div className="my-6">
          <img 
            src="/pictures/blog/australia/newyork_1_4.jpg" 
            alt="New York City skyline from bike perspective" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <p className="mb-4">
          You see the city at human scale. You feel its tempo. You notice neighborhoods shift block by block. You become part of the flow instead of observing it from behind glass.
        </p>
        <p className="mb-4">
          Then, when you get home and clip into a trainer, Zwift's New York world doesn't feel random. It feels like an echo.
        </p>
        <p className="mb-4">
          Not the city itself, but the rhythm of it. Constant motion. Short efforts. Big scenery. No autopilot.
        </p>
        <p className="mb-4 text-lg font-medium">
          That's what makes New York by bike special. And that's why it's worth riding twice. Once in the streets. Once in the future city on a screen.
        </p>
      </div>
    </div>
  );

  return (
    <BlogPost
      title="New York City by Bike: A First-Timer's Ride Guide (Then Ride Future-New-York on Zwift)"
      date="18-12-2025"
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
      metaTitle="New York City by Bike: A First-Timer's Ride Guide | Zwift Calculator"
      metaDescription="Complete guide to cycling in New York City for first-timers. Learn where to ride, when to ride, pacing strategies, and how to use Zwift's New York world to prepare for urban cycling adventures."
    />
  );
};

export default NewYorkCity;

