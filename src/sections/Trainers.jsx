
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
      className="bg-[#090909] px-6 py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-black tracking-[0.3em] text-[#b7ff3c]">
            OUR COACHING TEAM
          </p>

          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
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
        <div className="grid gap-6 md:grid-cols-3">

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
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -6,
              }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(183,255,60,0.08)]"
            >

              {/* =========================
                  TRAINER IMAGE
              ========================== */}
              <div className="relative h-[420px] overflow-hidden">

                <img
                  src={trainer.image}
                  alt={`${trainer.name} - ${trainer.specialty}`}
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />

                {/* Image gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                {/* Top gradient */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />

                {/* =========================
                    EXPERIENCE BADGE
                ========================== */}
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">

                  <Award
                    size={15}
                    className="text-[#b7ff3c]"
                  />

                  {trainer.experience}

                </div>

                {/* =========================
                    SOCIAL BUTTONS
                ========================== */}
                <div className="absolute bottom-5 right-5 flex gap-2 opacity-0 transition duration-300 group-hover:opacity-100">

                  <a
                    href="#contact"
                    aria-label={`${trainer.name} Instagram`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-[10px] font-black text-white backdrop-blur-md transition hover:bg-[#b7ff3c] hover:text-black"
                  >
                    IG
                  </a>

                  <a
                    href="#contact"
                    aria-label={`${trainer.name} profile`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:bg-[#b7ff3c] hover:text-black"
                  >
                    <ArrowUpRight size={17} />
                  </a>

                </div>

              </div>

              {/* =========================
                  TRAINER DETAILS
              ========================== */}
              <div className="p-6">

                <h3 className="text-2xl font-black">
                  {trainer.name}
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#b7ff3c]">
                  {trainer.specialty}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">

                  <span className="text-xs text-white/40">
                    Certified Fitness Coach
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-white/40 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b7ff3c]"
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
          className="mt-10 rounded-3xl border border-[#b7ff3c]/20 bg-[#b7ff3c]/5 p-6 text-center"
        >

          <p className="text-lg font-bold md:text-xl">
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

