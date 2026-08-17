import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Gauge,
  ListChecks,
  Timer,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedCard from "@/components/AnimatedCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getPostsByCategory, displayDate } from "@/data/blogPosts";

/** Racing articles, newest first. */
const racingPosts = [...getPostsByCategory("Racing")].sort((a, b) => b.date.localeCompare(a.date));

/**
 * Physics and psychology pieces that explain what happens inside a race.
 * Shown as related reading, not as racing articles.
 */
const relatedPosts = [...getPostsByCategory("Physics"), ...getPostsByCategory("Psychology")].sort(
  (a, b) => b.date.localeCompare(a.date)
);

const CategoryRacing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Header Section */}
      <section className="relative pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zwift-blue/10 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs className="mb-6" />
          </div>

          <div className="flex flex-col items-center text-center">
            <AnimatedText delay={100}>
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-zwift-dark/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-zwift-blue shadow-sm border border-blue-100 dark:border-blue-900/20 mb-6">
                <Trophy size={16} className="text-zwift-blue" />
                <span>Racing Category</span>
              </div>
            </AnimatedText>

            <AnimatedText delay={200} className="mt-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Zwift <span className="zwift-gradient-text">Racing</span> Strategies & Tactics
              </h1>
            </AnimatedText>

            <AnimatedText delay={300} className="mt-6 max-w-3xl">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                A Zwift race is not a hard group ride with a results sheet. It is a short, violent
                event that is usually decided inside the first kilometre, and the skills that keep you
                in it are not the same skills that make you fit.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Editorial Content Section */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zwift-blue/5 to-transparent -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <div className="bg-white dark:bg-zwift-dark rounded-2xl p-8 md:p-12 border-2">
                <div className="space-y-10 text-muted-foreground leading-relaxed">
                  <div className="space-y-5">
                    <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground">
                      <Timer size={26} className="text-zwift-blue flex-shrink-0" />
                      Why the first 90 seconds decide your race
                    </h2>

                    <p>
                      Outdoor races often start with a neutral roll-out. Zwift races start with the
                      whole pen sprinting. The banner drops and everyone goes at once, because everyone
                      knows the field will split inside the first minute, and whichever group you are
                      in when the splitting stops is the group you finish with. For 60 to 90 seconds
                      the front of a race rides at numbers most people only see in a 30-second test.
                      Start that on cold legs and you do not lose a little speed, you lose the wheel.
                    </p>

                    <p>
                      Losing it costs more indoors than out. More than a few bike lengths off the back
                      and you are in full wind while the group ahead shares it, so the gap grows, and
                      it grows faster the longer you leave it. Twenty seconds of being slightly too
                      slow becomes a 40-minute solo time trial.
                    </p>

                    <p>
                      So the warm-up is not optional and five easy minutes will not do it. Give it 20:
                      ten minutes easy, then two or three 30-second efforts at the intensity the start
                      will demand, with two to three minutes soft between them and the last finishing
                      five minutes before the gun. Join the pen ten minutes early and keep pedalling:
                      you stay put however hard you ride, so it is free warm-up time. And decide in
                      advance that minute one will hurt. Riders who are surprised by the start sit up.
                      Riders who expected it hang on.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground">
                      <Users size={26} className="text-zwift-blue flex-shrink-0" />
                      The draft is something you do, not somewhere you sit
                    </h2>

                    <p>
                      Zwift models a draft and it is worth a lot. What it does not model is most of
                      what makes outdoor pack riding hard: no crosswind, no echelon, no braking, no
                      cornering line to fight for. That does not make the draft easier indoors, only
                      different.
                    </p>

                    <p>
                      Two mechanics drive it. The draft zone is short, a few bike lengths directly
                      behind the rider ahead: you are in it, or you are in clean air paying full
                      price. And your avatar carries very little momentum on the flat. Stop pedalling
                      outdoors and you hold your place for several seconds. Stop pedalling in Zwift
                      and your speed drops almost at once while you slide backwards through the group.
                    </p>

                    <p>
                      That is why sitting in is an active skill. You keep pedalling the whole time, at
                      lower power than the rider on the front but never at zero, and you match the
                      pack's surges. Zwift bunches are not steady. On a flat road the same rider can
                      bounce between 180 W and 350 W as the front rotates and riders attack the sprint
                      banners, and missing one surge costs more to fix than the surge you skipped.
                    </p>

                    <p>
                      Treat a gap as an emergency. If daylight opens, shut it inside five seconds:
                      five seconds at 400 W now beats 30 seconds of chasing later.{" "}
                      <Link
                        to="/blog/zwift-drafting-physics-aerodynamics"
                        className="text-zwift-blue hover:underline font-medium"
                      >
                        Zwift drafting physics and aerodynamics
                      </Link>{" "}
                      explains why the saving is so large, and it is the main reason a rider who sat
                      in all race can finish alongside a stronger one who spent it on the front.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground">
                      <Gauge size={26} className="text-zwift-blue flex-shrink-0" />
                      The biggest mistake: racing your numbers instead of the group
                    </h2>

                    <p>
                      Almost every new racer makes the same error. They pick a target before the start
                      - I will hold 3.2 W/kg - and ride it regardless of what the race is doing. It
                      fails twice. At the start they refuse to go over target and are off the back in
                      60 seconds. Later they stare at the power field and ease off the moment it
                      climbs above plan, which is exactly when the bunch is surging over a roller and
                      exactly when it costs them the group.
                    </p>

                    <p>
                      In a race the number that matters is the gap to the wheel in front. The number
                      on your screen is a report, not an instruction. For the first three minutes do
                      not look at watts at all, look at the rider ahead and how far away they are.
                      Read the file afterwards and you will usually find power you did not think you
                      had, because a race asks for it in a way a workout never does.
                    </p>

                    <p>
                      The habit is hard to break because pacing by numbers is correct everywhere else.
                      On a solo climb it is the only sensible way to ride, which is what the{" "}
                      <Link to="/alpeduzwiftcalculator" className="text-zwift-blue hover:underline font-medium">
                        Alpe du Zwift calculator
                      </Link>{" "}
                      is for: 12.2 km at roughly 8.5% with nobody to hide behind rewards a steady,
                      chosen W/kg. A flat crit does the opposite. Keep both modes and know which one
                      you are in. Why a race eats so much attention that riders stop deciding well
                      after 20 minutes is the subject of{" "}
                      <Link to="/blog/zwift-cognitive-load" className="text-zwift-blue hover:underline font-medium">
                        Zwift cognitive load
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="space-y-5">
                    <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground">
                      <Trophy size={26} className="text-zwift-blue flex-shrink-0" />
                      Pens, categories and why sandbagging is pointless
                    </h2>

                    <p>
                      Zwift races run in pens, usually labelled A through D, with some events adding
                      an open pen that anyone can enter regardless of category. Everyone in a pen
                      starts together and is scored against the others. Your pen used to be set
                      purely by power-to-weight thresholds; increasingly it is set by a racing score
                      built from your results. Both systems do the same job: put you with people who
                      make you work, so the result means something.
                    </p>

                    <p>
                      Sandbagging is entering a pen below your real level. It is common and it is
                      pointless. You take a win nobody contested, you distort the racing for everyone
                      who belongs there, and results services flag and strip the placing anyway.
                      Worse, you learn nothing - holding a wheel, answering a surge and spending a
                      PowerUp well only get trained when the group is genuinely fast enough to drop
                      you.
                    </p>

                    <p>
                      Where you belong, and how the thresholds and scores work in detail, is handled
                      on the{" "}
                      <Link
                        to="/zwift-racing-category-calculator"
                        className="text-zwift-blue hover:underline font-medium"
                      >
                        Zwift racing category calculator
                      </Link>
                      . Use honest numbers there, including your real weight, because weight is an
                      input to your speed in the game. The glossary in{" "}
                      <Link
                        to="/blog/what-terminology-do-zwifters-use"
                        className="text-zwift-blue hover:underline font-medium"
                      >
                        what terminology do Zwifters use
                      </Link>{" "}
                      covers the rest of the vocabulary.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground">
                      <Zap size={26} className="text-zwift-blue flex-shrink-0" />
                      PowerUps are a resource, not a reward
                    </h2>

                    <p>
                      PowerUps are handed out as you pass certain banners and arches, and you can only
                      carry one at a time. That last part is the tactical bit most people miss: if you
                      are already holding something when you ride through a banner, you get nothing
                      new. Hoarding one for a finish you might never reach costs you every PowerUp you
                      rode past on the way there.
                    </p>

                    <p>
                      Match the PowerUp to whatever is limiting you right now. Weight dominates on a
                      climb, so a Feather is worth most on a steep section where the group is
                      splitting. Drag dominates on the flat, so an Aero helmet is worth most on a fast
                      run-in or when you are closing a gap in clean air. And spending one to avoid
                      being dropped is nearly always better than saving it for a sprint you would not
                      have reached. Which PowerUp does what is covered properly in the{" "}
                      <Link to="/blog/zwift-powerups-guide" className="text-zwift-blue hover:underline font-medium">
                        Zwift PowerUps guide
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="space-y-5">
                    <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground">
                      <ListChecks size={26} className="text-zwift-blue flex-shrink-0" />
                      A pre-race checklist you can actually follow
                    </h2>

                    <p>
                      Nothing here is clever. It just removes the avoidable problems, which is most of
                      the problems in a first race.
                    </p>

                    <ol className="list-decimal pl-5 space-y-3 marker:text-zwift-blue marker:font-semibold">
                      <li>
                        Pick the race the day before and read the route profile: distance, climbs, and
                        whether the finish is uphill or flat.
                      </li>
                      <li>
                        Check your profile weight and height are current and honest. They are inputs to
                        your speed, not decoration.
                      </li>
                      <li>
                        Set the room up first: fan on, towel down, two bottles, one with carbohydrate
                        in it.
                      </li>
                      <li>
                        Eat something real about two hours out. A race is 30 to 60 minutes of hard
                        riding, not a fasted spin.
                      </li>
                      <li>
                        Restart the app. On a wheel-on trainer, spin easy for a few minutes and then
                        run the spindown, so the tyre is warm when it calibrates.
                      </li>
                      <li>
                        Warm up for 20 minutes with two or three 30-second efforts at start intensity.
                      </li>
                      <li>Join the pen ten minutes early and keep soft-pedalling in it.</li>
                      <li>
                        For the first three minutes, watch the rider in front and ignore your power
                        number.
                      </li>
                      <li>
                        Afterwards, look at where you lost contact rather than at your average power.
                        That is what you can fix for next week.
                      </li>
                    </ol>

                    <p>
                      If this is your first race, start with{" "}
                      <Link
                        to="/blog/zwift-racing-for-beginners"
                        className="text-zwift-blue hover:underline font-medium"
                      >
                        Zwift racing for beginners
                      </Link>
                      , then work through the articles below. The rest of the library, including the
                      training that raises the ceiling these tactics work under, is on the{" "}
                      <Link to="/blog" className="text-zwift-blue hover:underline font-medium">
                        blog
                      </Link>{" "}
                      and in the{" "}
                      <Link to="/blog/category/training" className="text-zwift-blue hover:underline font-medium">
                        training category
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Racing Articles */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedText delay={100}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Racing articles</h2>
            </AnimatedText>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {racingPosts.map((post, index) => (
                <AnimatedCard key={post.slug} delay={index * 100}>
                  <Link to={post.slug} className="block h-full">
                    <Card className="h-full hover:shadow-lg transition-all border-2 hover:border-zwift-blue/50 cursor-pointer group">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium px-2 py-1 bg-zwift-blue/10 text-zwift-blue rounded">
                            {post.category}
                          </span>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar size={12} className="mr-1" />
                            {displayDate(post.date)}
                          </div>
                        </div>
                        <CardTitle className="text-xl group-hover:text-zwift-blue transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{post.readTime} read</span>
                          <div className="flex items-center text-xs text-zwift-blue group-hover:translate-x-1 transition-transform">
                            Read More
                            <ArrowRight size={14} className="ml-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Reading */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedText delay={100}>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
                  <BookOpen size={16} className="text-zwift-orange" />
                  <span>Related reading</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Physics and psychology behind racing
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-3xl">
                  These are not racing guides. They are the physics and psychology articles that
                  explain why the tactics above work: what the draft is actually saving you, where
                  your speed goes, and what a race does to your decision-making.
                </p>
              </div>
            </AnimatedText>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((post, index) => (
                <AnimatedCard key={post.slug} delay={index * 100}>
                  <Link to={post.slug} className="block h-full">
                    <Card className="h-full hover:shadow-lg transition-all border-2 border-dashed hover:border-solid hover:border-zwift-orange/50 cursor-pointer group">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium px-2 py-1 bg-muted text-muted-foreground rounded">
                            {post.category}
                          </span>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar size={12} className="mr-1" />
                            {displayDate(post.date)}
                          </div>
                        </div>
                        <CardTitle className="text-xl group-hover:text-zwift-orange transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{post.readTime} read</span>
                          <div className="flex items-center text-xs text-zwift-orange group-hover:translate-x-1 transition-transform">
                            Read More
                            <ArrowRight size={14} className="ml-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back to Blog Link */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center text-zwift-orange hover:text-zwift-orange/80 font-semibold transition-colors"
            >
              <ArrowRight size={18} className="mr-2 rotate-180" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryRacing;
