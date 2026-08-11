import { motion } from "framer-motion";
import {
  Dumbbell,
  Utensils,
  Activity,
  Target,
  Bell,
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Personalized Workout Plans",
    description:
      "Help members follow structured workouts based on their goals and progress.",
    points: [
      "Goal-based workouts",
      "Exercise guidance",
      "Weekly workout plans",
    ],
  },
  {
    icon: Utensils,
    title: "Personalized Diet Plans",
    description:
      "Help members stay consistent with simple and personalized nutrition guidance.",
    points: [
      "Diet guidance",
      "Meal recommendations",
      "Nutrition tracking",
    ],
  },
  {
    icon: Activity,
    title: "Fitness Progress Tracking",
    description:
      "Let members clearly see their fitness journey and improvements over time.",
    points: [
      "Workout history",
      "Performance tracking",
      "Progress overview",
    ],
  },
  {
    icon: Target,
    title: "Body & Fitness Measurements",
    description:
      "Track important physical measurements and compare changes over time.",
    points: [
      "Weight tracking",
      "Body measurements",
      "Progress comparison",
    ],
  },
  {
    icon: Bell,
    title: "Automated Member Reminders",
    description:
      "Keep members informed and engaged with timely automated notifications.",
    points: [
      "Payment reminders",
      "Membership expiry alerts",
      "Workout reminders",
    ],
  },
  {
    icon: MessageCircle,
    title: "Member Communication",
    description:
      "Help gyms stay connected with members through direct and timely communication.",
    points: [
      "WhatsApp communication",
      "Announcements",
      "Member support",
    ],
  },
];

function MemberExperience() {
  return (
    <section
      id="member-experience"
      className="overflow-hidden bg-[#090909] px-4 py-20 sm:px-6 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            HEADING
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <p className="text-[10px] font-black tracking-[0.25em] text-[#b7ff3c] sm:text-xs sm:tracking-[0.3em]">
            GYM MEMBER EXPERIENCE
          </p>

          <div className="mt-4 flex flex-col gap-5 md:mt-5 md:flex-row md:items-end md:justify-between md:gap-6">

            <h2 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
              WHAT YOUR
              <br />
              MEMBERS
              <br />
              <span className="text-[#b7ff3c]">
                GET.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-white/45">
              We give every gym member a complete digital fitness
              experience — from personalized workouts and diet guidance
              to progress tracking, reminders and direct communication.
            </p>

          </div>
        </motion.div>


        {/* =========================
            FEATURE CARDS
        ========================== */}
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 transition hover:border-[#b7ff3c]/25 hover:bg-[#b7ff3c]/[0.03] sm:rounded-[1.75rem] sm:p-6"
              >

                {/* Icon */}
                <div className="flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b7ff3c]/10 sm:h-12 sm:w-12 sm:rounded-2xl">
                    <Icon
                      size={21}
                      className="text-[#b7ff3c]"
                    />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-white/20 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b7ff3c]"
                  />

                </div>


                {/* Content */}
                <h3 className="mt-6 text-lg font-black leading-tight sm:mt-7 sm:text-xl">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/45">
                  {feature.description}
                </p>


                {/* Points */}
                <div className="mt-5 space-y-3 border-t border-white/10 pt-5">

                  {feature.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2 text-xs text-white/55"
                    >
                      <CheckCircle2
                        size={14}
                        className="shrink-0 text-[#b7ff3c]"
                      />

                      <span>
                        {point}
                      </span>
                    </div>
                  ))}

                </div>

              </motion.article>
            );
          })}

        </div>


        {/* =========================
            DIGITAL MEMBER PORTAL
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-6 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111] sm:mt-8 sm:rounded-[2rem]"
        >

          <div className="grid items-center gap-10 p-5 sm:p-7 md:p-10 lg:grid-cols-[1fr_0.8fr]">

            {/* =========================
                LEFT CONTENT
            ========================== */}
            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#b7ff3c]/20 bg-[#b7ff3c]/5 px-3 py-2 text-[10px] font-bold text-[#b7ff3c] sm:px-4 sm:text-xs">
                <Activity size={13} />
                DIGITAL MEMBER PORTAL
              </div>


              <h3 className="mt-5 max-w-xl text-2xl font-black leading-[1.05] sm:mt-6 sm:text-3xl md:text-4xl">
                GIVE YOUR MEMBERS
                <br />
                THEIR OWN
                <br />
                <span className="text-[#b7ff3c]">
                  DIGITAL FITNESS SPACE.
                </span>
              </h3>


              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/45 sm:mt-5">
                Members can access their workouts, diet information,
                progress, membership status and important notifications
                from one place.
              </p>


              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">

                {[
                  "Workout plans",
                  "Diet information",
                  "Progress history",
                  "Membership status",
                  "Notifications",
                  "Fitness goals",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] text-white/55 sm:px-4 sm:text-xs"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>


            {/* =========================
                MOBILE UI MOCKUP
            ========================== */}
            <div className="mx-auto w-full max-w-[270px] sm:max-w-[300px]">

              <div className="rounded-[2rem] border border-white/10 bg-black p-2.5 shadow-2xl sm:rounded-[2.5rem] sm:p-3">

                <div className="rounded-[1.6rem] bg-[#151515] p-4 sm:rounded-[2rem] sm:p-5">

                  {/* Phone Header */}
                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-[9px] text-white/30">
                        GOOD MORNING
                      </p>

                      <p className="mt-1 text-sm font-black">
                        Rahul 👋
                      </p>
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b7ff3c] text-xs font-black text-black">
                      R
                    </div>

                  </div>


                  {/* Goal */}
                  <div className="mt-5 rounded-2xl bg-[#b7ff3c] p-3.5 text-black sm:mt-6 sm:p-4">

                    <p className="text-[9px] font-bold opacity-60">
                      FITNESS GOAL
                    </p>

                    <p className="mt-1 text-xl font-black sm:text-2xl">
                      4 / 5
                    </p>

                    <div className="mt-3 h-1.5 rounded-full bg-black/10">
                      <div className="h-full w-[80%] rounded-full bg-black" />
                    </div>

                  </div>


                  {/* Today's Workout */}
                  <div className="mt-4">

                    <p className="text-[9px] font-bold uppercase tracking-widest text-white/30">
                      TODAY'S WORKOUT
                    </p>

                    <div className="mt-2.5 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5">

                      <div className="flex items-center justify-between">

                        <div className="min-w-0">

                          <p className="text-sm font-bold">
                            Upper Body
                          </p>

                          <p className="mt-1 text-[9px] text-white/30">
                            8 Exercises • 52 min
                          </p>

                        </div>

                        <div className="ml-2 shrink-0 rounded-xl bg-[#b7ff3c]/10 p-2">
                          <Dumbbell
                            size={15}
                            className="text-[#b7ff3c]"
                          />
                        </div>

                      </div>

                    </div>

                  </div>


                  {/* Progress */}
                  <div className="mt-4">

                    <p className="text-[9px] font-bold uppercase tracking-widest text-white/30">
                      YOUR PROGRESS
                    </p>

                    <div className="mt-2.5 grid grid-cols-2 gap-2">

                      <div className="rounded-xl bg-white/[0.03] p-3">

                        <p className="text-lg font-black">
                          72.4
                        </p>

                        <p className="text-[9px] text-white/30">
                          Weight KG
                        </p>

                      </div>

                      <div className="rounded-xl bg-white/[0.03] p-3">

                        <p className="text-lg font-black text-[#b7ff3c]">
                          +18%
                        </p>

                        <p className="text-[9px] text-white/30">
                          Strength
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default MemberExperience;