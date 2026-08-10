// import { motion } from "framer-motion";
// import {
//   Dumbbell,
//   Utensils,
//   Activity,
//   Target,
//   Bell,
//   MessageCircle,
//   ArrowUpRight,
//   CheckCircle2,
// } from "lucide-react";

// const features = [
//   {
//     icon: Dumbbell,
//     title: "Workout Plans",
//     description:
//       "Personalized workout routines based on fitness goals, experience and progress.",
//     points: [
//       "Goal-based workouts",
//       "Exercise instructions",
//       "Weekly plans",
//     ],
//   },
//   {
//     icon: Utensils,
//     title: "Diet Plans",
//     description:
//       "Simple nutrition guidance that helps members stay consistent outside the gym.",
//     points: [
//       "Personalized diet guidance",
//       "Meal recommendations",
//       "Nutrition tracking",
//     ],
//   },
//   {
//     icon: Activity,
//     title: "Progress Tracking",
//     description:
//       "Give members a clear picture of how their fitness journey is progressing.",
//     points: [
//       "Workout history",
//       "Performance tracking",
//       "Progress overview",
//     ],
//   },
//   {
//     icon: Target,
//     title: "Body Measurements",
//     description:
//       "Track important body metrics and visualize changes over time.",
//     points: [
//       "Weight tracking",
//       "Body measurements",
//       "Progress comparison",
//     ],
//   },
//   {
//     icon: Bell,
//     title: "Smart Notifications",
//     description:
//       "Keep members engaged with useful reminders and important updates.",
//     points: [
//       "Payment reminders",
//       "Membership expiry",
//       "Workout reminders",
//     ],
//   },
//   {
//     icon: MessageCircle,
//     title: "Personalized Communication",
//     description:
//       "Build stronger relationships with members through direct and timely communication.",
//     points: [
//       "WhatsApp communication",
//       "Announcements",
//       "Member support",
//     ],
//   },
// ];

// function MemberExperience() {
//   return (
//     <section
//       id="member-experience"
//       className="bg-[#090909] px-6 py-24 md:py-32"
//     >
//       <div className="mx-auto max-w-7xl">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-14"
//         >
//           <p className="text-xs font-black tracking-[0.3em] text-[#b7ff3c]">
//             MEMBER EXPERIENCE
//           </p>

//           <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">

//             <h2 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
//               WE KEEP
//               <br />
//               <span className="text-[#b7ff3c]">
//                 YOU MOVING.
//               </span>
//             </h2>

//             <p className="max-w-md text-sm leading-relaxed text-white/45">
//               Give every member a more personalized experience
//               from their first workout to their biggest milestone.
//             </p>

//           </div>
//         </motion.div>

//         {/* Feature Cards */}
//         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

//           {features.map((feature, index) => {
//             const Icon = feature.icon;

//             return (
//               <motion.article
//                 key={feature.title}
//                 initial={{
//                   opacity: 0,
//                   y: 35,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 transition={{
//                   duration: 0.55,
//                   delay: index * 0.08,
//                 }}
//                 whileHover={{
//                   y: -6,
//                 }}
//                 className="group rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-6 transition hover:border-[#b7ff3c]/25 hover:bg-[#b7ff3c]/[0.03]"
//               >

//                 {/* Icon */}
//                 <div className="flex items-center justify-between">

//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b7ff3c]/10">
//                     <Icon
//                       size={22}
//                       className="text-[#b7ff3c]"
//                     />
//                   </div>

//                   <ArrowUpRight
//                     size={19}
//                     className="text-white/20 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b7ff3c]"
//                   />

//                 </div>

//                 {/* Content */}
//                 <h3 className="mt-7 text-xl font-black">
//                   {feature.title}
//                 </h3>

//                 <p className="mt-3 text-sm leading-relaxed text-white/45">
//                   {feature.description}
//                 </p>

//                 {/* Points */}
//                 <div className="mt-6 space-y-3 border-t border-white/10 pt-5">

//                   {feature.points.map((point) => (
//                     <div
//                       key={point}
//                       className="flex items-center gap-2 text-xs text-white/55"
//                     >
//                       <CheckCircle2
//                         size={14}
//                         className="shrink-0 text-[#b7ff3c]"
//                       />

//                       {point}
//                     </div>
//                   ))}

//                 </div>

//               </motion.article>
//             );
//           })}

//         </div>

//         {/* Member app preview */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 35,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.7,
//             delay: 0.2,
//           }}
//           className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[#111]"
//         >

//           <div className="grid items-center gap-10 p-7 md:p-10 lg:grid-cols-[1fr_0.8fr]">

//             {/* Left */}
//             <div>

//               <div className="inline-flex items-center gap-2 rounded-full border border-[#b7ff3c]/20 bg-[#b7ff3c]/5 px-4 py-2 text-xs font-bold text-[#b7ff3c]">
//                 <Activity size={14} />
//                 MEMBER PORTAL
//               </div>

//               <h3 className="mt-6 max-w-xl text-3xl font-black sm:text-4xl">
//                 A FITNESS EXPERIENCE THAT
//                 <span className="text-[#b7ff3c]">
//                   {" "}
//                   FOLLOWS YOUR JOURNEY.
//                 </span>
//               </h3>

//               <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/45">
//                 Members can stay connected with their workouts,
//                 nutrition, progress and membership information
//                 without depending on paperwork or manual follow-ups.
//               </p>

//               <div className="mt-7 flex flex-wrap gap-3">
//                 {[
//                   "Workout tracking",
//                   "Progress history",
//                   "Notifications",
//                   "Membership status",
//                 ].map((item) => (
//                   <span
//                     key={item}
//                     className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/55"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>

//             </div>

//             {/* Right - Mobile UI Mockup */}
//             <div className="mx-auto w-full max-w-[300px]">

//               <div className="rounded-[2.5rem] border border-white/10 bg-black p-3 shadow-2xl">

//                 <div className="rounded-[2rem] bg-[#151515] p-5">

//                   {/* Phone header */}
//                   <div className="flex items-center justify-between">

//                     <div>
//                       <p className="text-[10px] text-white/30">
//                         GOOD MORNING
//                       </p>

//                       <p className="mt-1 text-sm font-black">
//                         Rahul 👋
//                       </p>
//                     </div>

//                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b7ff3c] text-xs font-black text-black">
//                       R
//                     </div>

//                   </div>

//                   {/* Goal */}
//                   <div className="mt-6 rounded-2xl bg-[#b7ff3c] p-4 text-black">

//                     <p className="text-[10px] font-bold opacity-60">
//                       WEEKLY GOAL
//                     </p>

//                     <p className="mt-1 text-2xl font-black">
//                       4 / 5
//                     </p>

//                     <div className="mt-3 h-1.5 rounded-full bg-black/10">
//                       <div className="h-full w-[80%] rounded-full bg-black" />
//                     </div>

//                   </div>

//                   {/* Today's workout */}
//                   <div className="mt-4">

//                     <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
//                       Today's Workout
//                     </p>

//                     <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">

//                       <div className="flex items-center justify-between">

//                         <div>
//                           <p className="text-sm font-bold">
//                             Upper Body
//                           </p>

//                           <p className="mt-1 text-[10px] text-white/30">
//                             8 Exercises • 52 min
//                           </p>
//                         </div>

//                         <div className="rounded-xl bg-[#b7ff3c]/10 p-2">
//                           <Dumbbell
//                             size={16}
//                             className="text-[#b7ff3c]"
//                           />
//                         </div>

//                       </div>

//                     </div>

//                   </div>

//                   {/* Progress */}
//                   <div className="mt-4">

//                     <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
//                       Your Progress
//                     </p>

//                     <div className="mt-3 grid grid-cols-2 gap-2">

//                       <div className="rounded-xl bg-white/[0.03] p-3">
//                         <p className="text-lg font-black">
//                           72.4
//                         </p>

//                         <p className="text-[9px] text-white/30">
//                           Weight KG
//                         </p>
//                       </div>

//                       <div className="rounded-xl bg-white/[0.03] p-3">
//                         <p className="text-lg font-black text-[#b7ff3c]">
//                           +18%
//                         </p>

//                         <p className="text-[9px] text-white/30">
//                           Strength
//                         </p>
//                       </div>

//                     </div>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </motion.div>

//       </div>
//     </section>
//   );
// }

// export default MemberExperience;


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
      className="bg-[#090909] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-black tracking-[0.3em] text-[#b7ff3c]">
            GYM MEMBER EXPERIENCE
          </p>

          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <h2 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              WHAT YOUR MEMBERS
              <br />
              <span className="text-[#b7ff3c]">
                GET.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-white/45">
              We give every gym member a complete digital fitness experience —
              from personalized workouts and diet guidance to progress tracking,
              reminders and direct communication.
            </p>

          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

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
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-6 transition hover:border-[#b7ff3c]/25 hover:bg-[#b7ff3c]/[0.03]"
              >

                {/* Icon */}
                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b7ff3c]/10">
                    <Icon
                      size={22}
                      className="text-[#b7ff3c]"
                    />
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="text-white/20 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b7ff3c]"
                  />

                </div>

                {/* Content */}
                <h3 className="mt-7 text-xl font-black">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/45">
                  {feature.description}
                </p>

                {/* Service Points */}
                <div className="mt-6 space-y-3 border-t border-white/10 pt-5">

                  {feature.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2 text-xs text-white/55"
                    >
                      <CheckCircle2
                        size={14}
                        className="shrink-0 text-[#b7ff3c]"
                      />

                      {point}
                    </div>
                  ))}

                </div>

              </motion.article>
            );
          })}

        </div>

        {/* Digital Member Portal Preview */}
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
          className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[#111]"
        >

          <div className="grid items-center gap-10 p-7 md:p-10 lg:grid-cols-[1fr_0.8fr]">

            {/* Left */}
            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#b7ff3c]/20 bg-[#b7ff3c]/5 px-4 py-2 text-xs font-bold text-[#b7ff3c]">
                <Activity size={14} />
                DIGITAL MEMBER PORTAL
              </div>

              <h3 className="mt-6 max-w-xl text-3xl font-black sm:text-4xl">
                GIVE YOUR MEMBERS THEIR OWN DIGITAL FITNESS SPACE.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/45">
                Members can access their workouts, diet information, progress,
                membership status and important notifications from one place.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
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
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/55"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>

            {/* Right - Mobile UI Mockup */}
            <div className="mx-auto w-full max-w-[300px]">

              <div className="rounded-[2.5rem] border border-white/10 bg-black p-3 shadow-2xl">

                <div className="rounded-[2rem] bg-[#151515] p-5">

                  {/* Phone header */}
                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-[10px] text-white/30">
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
                  <div className="mt-6 rounded-2xl bg-[#b7ff3c] p-4 text-black">

                    <p className="text-[10px] font-bold opacity-60">
                      FITNESS GOAL
                    </p>

                    <p className="mt-1 text-2xl font-black">
                      4 / 5
                    </p>

                    <div className="mt-3 h-1.5 rounded-full bg-black/10">
                      <div className="h-full w-[80%] rounded-full bg-black" />
                    </div>

                  </div>

                  {/* Today's workout */}
                  <div className="mt-4">

                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                      TODAY'S WORKOUT
                    </p>

                    <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">

                      <div className="flex items-center justify-between">

                        <div>
                          <p className="text-sm font-bold">
                            Upper Body
                          </p>

                          <p className="mt-1 text-[10px] text-white/30">
                            8 Exercises • 52 min
                          </p>
                        </div>

                        <div className="rounded-xl bg-[#b7ff3c]/10 p-2">
                          <Dumbbell
                            size={16}
                            className="text-[#b7ff3c]"
                          />
                        </div>

                      </div>

                    </div>

                  </div>

                  {/* Progress */}
                  <div className="mt-4">

                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                      YOUR PROGRESS
                    </p>

                    <div className="mt-3 grid grid-cols-2 gap-2">

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

