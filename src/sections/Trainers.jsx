import { motion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";

import image9 from "../assets/images/image_9.jpg";
import image10 from "../assets/images/image_10.jpg";
import image11 from "../assets/images/image_11.jpg";

const trainers = [
  {
    name: "Rahul Sharma",
    specialty: "Strength & Conditioning",
    experience: "8 Years Experience",
    image: image9,
  },
  {
    name: "Priya Patil",
    specialty: "Weight Loss & Nutrition",
    experience: "6 Years Experience",
    image: image10,
  },
  {
    name: "Arjun Mehta",
    specialty: "Functional Training",
    experience: "7 Years Experience",
    image: image11,
  },
];

function Trainers() {
  return (
    <section
      id="trainers"
      className="bg-[#090909] px-4 py-20 text-white sm:px-6 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADING
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
          className="mb-10 sm:mb-12"
        >
          <p className="text-[10px] font-black tracking-[0.25em] text-[#b7ff3c] sm:text-xs sm:tracking-[0.3em]">
            OUR COACHING TEAM
          </p>

          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <h2 className="max-w-3xl text-[2.7rem] font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
              TRAIN WITH
              <br />

              <span className="text-[#b7ff3c]">
                THE BEST.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-white/45">
              Experienced coaches who understand that every
              body, goal and journey is different.
            </p>

          </div>
        </motion.div>

        {/* =========================
            TRAINER CARDS
        ========================== */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">

          {trainers.map((trainer, index) => (
            <motion.article
              key={trainer.name}
              initial={{
                opacity: 0,
                y: 40,
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
                delay: index * 0.12,
              }}
              whileHover={{
                y: -6,
              }}
              className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(183,255,60,0.08)] sm:rounded-[2rem]"
            >

              {/* =========================
                  TRAINER IMAGE
              ========================== */}
              <div className="relative h-[340px] overflow-hidden sm:h-[420px]">

                <img
                  src={trainer.image}
                  alt={`${trainer.name} - ${trainer.specialty}`}
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />

                {/* Image gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                {/* Top gradient */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 to-transparent sm:h-32" />

                {/* =========================
                    EXPERIENCE BADGE
                ========================== */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3 py-2 text-[10px] font-semibold text-white backdrop-blur-md sm:left-5 sm:top-5 sm:px-4 sm:text-xs">

                  <Award
                    size={14}
                    className="shrink-0 text-[#b7ff3c]"
                  />

                  <span>
                    {trainer.experience}
                  </span>

                </div>

                {/* =========================
                    SOCIAL BUTTONS
                ========================== */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-100 sm:bottom-5 sm:right-5 sm:opacity-0 sm:transition sm:duration-300 sm:group-hover:opacity-100">

                  <a
                    href="#contact"
                    aria-label={`${trainer.name} Instagram`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-[9px] font-black text-white backdrop-blur-md transition hover:bg-[#b7ff3c] hover:text-black sm:h-10 sm:w-10 sm:text-[10px]"
                  >
                    IG
                  </a>

                  <a
                    href="#contact"
                    aria-label={`${trainer.name} profile`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:bg-[#b7ff3c] hover:text-black sm:h-10 sm:w-10"
                  >
                    <ArrowUpRight size={16} />
                  </a>

                </div>

              </div>

              {/* =========================
                  TRAINER DETAILS
              ========================== */}
              <div className="p-5 sm:p-6">

                <h3 className="text-xl font-black sm:text-2xl">
                  {trainer.name}
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#b7ff3c]">
                  {trainer.specialty}
                </p>

                <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4 sm:mt-5 sm:pt-5">

                  <span className="text-[10px] leading-relaxed text-white/40 sm:text-xs">
                    Certified Fitness Coach
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-white/40 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b7ff3c]"
                  />

                </div>

              </div>

            </motion.article>
          ))}

        </div>

        {/* =========================
            BOTTOM MESSAGE
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
            delay: 0.3,
          }}
          className="mt-8 rounded-[1.5rem] border border-[#b7ff3c]/20 bg-[#b7ff3c]/5 px-5 py-6 text-center sm:mt-10 sm:rounded-3xl sm:p-6"
        >

          <p className="text-base font-bold leading-relaxed sm:text-lg md:text-xl">
            Your goal. Our expertise.{" "}
            <span className="text-[#b7ff3c]">
              Let's get there together.
            </span>
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default Trainers;