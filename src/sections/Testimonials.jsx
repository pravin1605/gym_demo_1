import { motion } from "framer-motion";
import {
  Star,
  Quote,
  ArrowUpRight,
  Dumbbell,
  Trophy,
  Users,
} from "lucide-react";

const testimonials = [
  {
    name: "Amit Kulkarni",
    role: "Gym Owner",
    location: "Mumbai",
    text: "Since implementing the new system, our team spends much less time managing paperwork and follow-ups. We can finally focus more on our members and growing the business.",
    result: "More efficient operations",
  },
  {
    name: "Neha Joshi",
    role: "Member",
    location: "Navi Mumbai",
    text: "The coaching completely changed how I train. I finally have a proper plan, and being able to track my progress keeps me motivated every week.",
    result: "12 KG transformation",
  },
  {
    name: "Rohan Shah",
    role: "Member",
    location: "Thane",
    text: "Everything feels simple. From checking my membership to tracking workouts and getting reminders, the whole experience feels much more professional.",
    result: "18 month journey",
  },
];

const achievements = [
  {
    icon: Users,
    value: "1,200+",
    label: "Active Members",
  },
  {
    icon: Dumbbell,
    value: "10+",
    label: "Expert Trainers",
  },
  {
    icon: Trophy,
    value: "5+",
    label: "Years Experience",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#090909] px-4 py-20 sm:px-6 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            HEADING
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-10 sm:mb-14"
        >
          <p className="flex items-center gap-2 text-[10px] font-black tracking-[0.25em] text-[#b7ff3c] sm:text-xs sm:tracking-[0.3em]">
            <Star size={13} />
            MEMBER STORIES
          </p>

          <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">

            <h2 className="max-w-4xl text-[2.7rem] font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
              RESULTS
              <br />
              SPEAK
              <br />
              <span className="text-[#b7ff3c]">
                LOUDER.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-white/45">
              Real progress comes from consistency, expert
              guidance and an environment that keeps you moving.
            </p>

          </div>
        </motion.div>

        {/* =========================
            TESTIMONIAL CARDS
        ========================== */}
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">

          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 sm:rounded-[2rem] sm:p-7"
            >

              {/* Quote Icon */}
              <div className="absolute right-5 top-5 opacity-10 sm:right-6 sm:top-6">
                <Quote size={45} className="sm:h-[55px] sm:w-[55px]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    fill="#b7ff3c"
                    className="text-[#b7ff3c]"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="mt-6 text-sm leading-7 text-white/65 sm:mt-7">
                "{testimonial.text}"
              </p>

              {/* Result */}
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#b7ff3c]/15 bg-[#b7ff3c]/5 px-3 py-2 text-[9px] font-bold uppercase tracking-wider text-[#b7ff3c] sm:text-[10px]">
                <Trophy size={11} />
                {testimonial.result}
              </div>

              {/* Person */}
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 sm:mt-7">

                <div className="flex min-w-0 items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b7ff3c] text-sm font-black text-black sm:h-11 sm:w-11">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 truncate text-[10px] text-white/30 sm:text-xs">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>

                </div>

                <ArrowUpRight
                  size={17}
                  className="ml-3 shrink-0 text-white/20 transition group-hover:text-[#b7ff3c]"
                />

              </div>

            </motion.article>
          ))}

        </div>

        {/* =========================
            ACHIEVEMENTS
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-6 grid overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111] sm:mt-8 sm:rounded-[2rem] sm:grid-cols-3"
        >

          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <div
                key={achievement.label}
                className={`
                  p-6 text-center sm:p-7
                  ${
                    index !== achievements.length - 1
                      ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                      : ""
                  }
                `}
              >

                <Icon
                  size={19}
                  className="mx-auto text-[#b7ff3c]"
                />

                <p className="mt-3 text-3xl font-black sm:mt-4">
                  {achievement.value}
                </p>

                <p className="mt-1 text-[10px] text-white/35 sm:text-xs">
                  {achievement.label}
                </p>

              </div>
            );
          })}

        </motion.div>

        {/* =========================
            CLOSING STATEMENT
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mt-9 max-w-2xl px-2 text-center sm:mt-12"
        >

          <p className="text-base font-bold leading-relaxed text-white/80 sm:text-lg md:text-xl">
            "Your next transformation could be the story
            someone else needs to hear."
          </p>

          <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-[#b7ff3c]" />

        </motion.div>

      </div>
    </section>
  );
}

export default Testimonials;