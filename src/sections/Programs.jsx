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
      className="bg-[#090909] px-4 py-20 sm:px-6 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            HEADING
        ====================================================== */}

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
          className="mb-10 sm:mb-12"
        >
          <p className="text-[10px] font-black tracking-[0.25em] text-[#b7ff3c] sm:text-xs sm:tracking-[0.3em]">
            OUR PROGRAMS
          </p>

          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
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

        {/* =====================================================
            PROGRAM CARDS
        ====================================================== */}

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">

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
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] sm:rounded-[1.75rem]"
              >

                {/* =================================================
                    IMAGE
                ================================================== */}

                <div className="relative h-[330px] overflow-hidden sm:h-80 md:h-[340px]">

                  <img
                    src={program.image}
                    alt={program.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Dark Gradient */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Additional mobile readability */}

                  <div className="absolute inset-0 bg-black/10" />

                  {/* =================================================
                      NUMBER
                  ================================================== */}

                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-[10px] font-bold backdrop-blur-md sm:left-5 sm:top-5 sm:h-10 sm:w-10 sm:text-xs">
                    0{index + 1}
                  </div>

                  {/* =================================================
                      ICON
                  ================================================== */}

                  <div className="absolute right-4 top-4 rounded-xl border border-white/15 bg-black/40 p-2.5 backdrop-blur-md sm:right-5 sm:top-5 sm:p-3">
                    <Icon
                      size={18}
                      className="text-[#b7ff3c] sm:h-5 sm:w-5"
                    />
                  </div>

                  {/* =================================================
                      BOTTOM CONTENT
                  ================================================== */}

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">

                    <h3 className="text-xl font-black leading-tight sm:text-2xl">
                      {program.title}
                    </h3>

                    <p className="mt-2 max-w-sm text-xs leading-relaxed text-white/60 sm:text-sm">
                      {program.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#b7ff3c] sm:mt-5 sm:text-sm">

                      Explore Program

                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />

                    </div>

                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

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
          transition={{
            delay: 0.3,
          }}
          className="mt-7 flex flex-col items-start justify-between gap-5 rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 sm:mt-10 sm:flex-row sm:items-center sm:rounded-3xl sm:p-6"
        >

          <div>

            <p className="text-sm font-bold sm:text-base">
              Not sure which program is right for you?
            </p>

            <p className="mt-1 text-xs text-white/40 sm:text-sm">
              Talk to one of our fitness experts.
            </p>

          </div>

          <a
            href="#contact"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#b7ff3c] px-6 py-3 text-xs font-bold text-black transition hover:scale-105 sm:w-auto sm:text-sm"
          >
            Talk To A Trainer

            <ArrowUpRight size={16} />
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Programs;