import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Dumbbell,
  Flame,
  HeartPulse,
  Target,
  Zap,
  Activity,
} from "lucide-react";

import image3 from "../assets/images/image_3.jpg";
import image4 from "../assets/images/image_4.jpg";
import image5 from "../assets/images/image_5.jpg";
import image6 from "../assets/images/image_6.jpg";
import image7 from "../assets/images/image_7.jpg";
import image8 from "../assets/images/image_8.jpg";

const programs = [
  {
    title: "Strength Training",
    description:
      "Build raw strength with structured progressive training designed around your ability.",
    image: image3,
    icon: Dumbbell,
  },
  {
    title: "Weight Loss",
    description:
      "Smart training and sustainable routines designed to help you achieve lasting results.",
    image: image4,
    icon: Flame,
  },
  {
    title: "Muscle Building",
    description:
      "Hypertrophy-focused workouts designed to maximize muscle growth and performance.",
    image: image5,
    icon: Zap,
  },
  {
    title: "Personal Training",
    description:
      "One-to-one coaching, accountability and expert guidance built around your goals.",
    image: image6,
    icon: Target,
  },
  {
    title: "Functional Training",
    description:
      "Move better, perform better and build athletic fitness for everyday life.",
    image: image7,
    icon: Activity,
  },
  {
    title: "Cardio & Conditioning",
    description:
      "Improve endurance, stamina and cardiovascular performance with focused training.",
    image: image8,
    icon: HeartPulse,
  },
];

function Programs() {
  return (
    <section
      id="programs"
      className="bg-[#090909] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-black tracking-[0.3em] text-[#b7ff3c]">
            OUR PROGRAMS
          </p>

          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              TRAIN FOR
              <br />
              <span className="text-[#b7ff3c]">
                YOUR GOAL.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-white/45">
              Whatever your goal, our programs are designed to
              give you the right training, guidance and support
              to keep progressing.
            </p>
          </div>
        </motion.div>

        {/* Program Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.article
                key={program.title}
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
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]"
              >

                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Number */}
                  <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xs font-bold backdrop-blur-md">
                    0{index + 1}
                  </div>

                  {/* Icon */}
                  <div className="absolute right-5 top-5 rounded-xl border border-white/15 bg-black/40 p-3 backdrop-blur-md">
                    <Icon
                      size={20}
                      className="text-[#b7ff3c]"
                    />
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">

                    <h3 className="text-2xl font-black">
                      {program.title}
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/60">
                      {program.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#b7ff3c]">
                      Explore Program

                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>

                  </div>
                </div>

              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:flex-row"
        >
          <div>
            <p className="font-bold">
              Not sure which program is right for you?
            </p>

            <p className="mt-1 text-sm text-white/40">
              Talk to one of our fitness experts.
            </p>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-2 whitespace-nowrap rounded-full bg-[#b7ff3c] px-6 py-3 text-sm font-bold text-black transition hover:scale-105"
          >
            Talk To A Trainer
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Programs;