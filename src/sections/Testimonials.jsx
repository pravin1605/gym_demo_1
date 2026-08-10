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
      className="bg-[#090909] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
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
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-14"
        >
          <p className="flex items-center gap-2 text-xs font-black tracking-[0.3em] text-[#b7ff3c]">
            <Star size={14} />
            MEMBER STORIES
          </p>

          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <h2 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
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

        {/* Testimonials */}
        <div className="grid gap-5 lg:grid-cols-3">

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
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7"
            >

              {/* Quote icon */}
              <div className="absolute right-6 top-6 opacity-10">
                <Quote size={55} />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    fill="#b7ff3c"
                    className="text-[#b7ff3c]"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="mt-7 min-h-[150px] text-sm leading-7 text-white/65">
                "{testimonial.text}"
              </p>

              {/* Result */}
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#b7ff3c]/15 bg-[#b7ff3c]/5 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[#b7ff3c]">
                <Trophy size={12} />
                {testimonial.result}
              </div>

              {/* Person */}
              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#b7ff3c] font-black text-black">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-xs text-white/30">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>

                </div>

                <ArrowUpRight
                  size={18}
                  className="text-white/20 transition group-hover:text-[#b7ff3c]"
                />

              </div>

            </motion.article>
          ))}

        </div>

        {/* Achievement strip */}
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
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-8 grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] sm:grid-cols-3"
        >

          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <div
                key={achievement.label}
                className={`p-7 text-center ${
                  index !== achievements.length - 1
                    ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >

                <Icon
                  size={20}
                  className="mx-auto text-[#b7ff3c]"
                />

                <p className="mt-4 text-3xl font-black">
                  {achievement.value}
                </p>

                <p className="mt-1 text-xs text-white/35">
                  {achievement.label}
                </p>

              </div>
            );
          })}

        </motion.div>

        {/* Small closing statement */}
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
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <p className="text-lg font-bold text-white/80 md:text-xl">
            "Your next transformation could be the story
            someone else needs to hear."
          </p>

          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#b7ff3c]" />
        </motion.div>

      </div>
    </section>
  );
}

export default Testimonials;