import { motion } from "framer-motion";
import {
  Users,
  Target,
  Zap,
  BarChart3,
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const solutions = [
  {
    icon: Users,
    title: "Member Management",
    description:
      "Manage member profiles, memberships, attendance, payments and important member information from one connected system.",
    points: [
      "Centralized member profiles",
      "Membership tracking",
      "Attendance management",
    ],
  },
  {
    icon: Target,
    title: "Lead Management",
    description:
      "Track every enquiry from the first conversation to trial booking and membership conversion.",
    points: [
      "Lead pipeline",
      "Trial management",
      "Follow-up tracking",
    ],
  },
  {
    icon: Zap,
    title: "Smart Automation",
    description:
      "Reduce repetitive administrative work with automated reminders, notifications and communication.",
    points: [
      "Payment reminders",
      "Renewal alerts",
      "Automated messages",
    ],
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description:
      "Turn your gym's data into useful insights that help you make better business decisions.",
    points: [
      "Revenue analytics",
      "Member analytics",
      "Performance reports",
    ],
  },
  {
    icon: MessageCircle,
    title: "Customer Engagement",
    description:
      "Build stronger relationships with members through timely communication and personalized experiences.",
    points: [
      "WhatsApp communication",
      "Member notifications",
      "Feedback collection",
    ],
  },
];

const stats = [
  ["01", "ONE", "Connected platform"],
  ["02", "SMART", "Automated workflows"],
  ["03", "REAL-TIME", "Business insights"],
  ["04", "SCALABLE", "Built for growth"],
];

function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="overflow-hidden bg-[#090909] px-4 py-20 sm:px-6 sm:py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="flex items-center gap-2 text-[10px] font-black tracking-[0.25em] text-[#b7ff3c] sm:text-xs sm:tracking-[0.3em]">
            <TrendingUp size={14} />
            BUSINESS GROWTH
          </p>

          <div className="mt-4 grid gap-5 lg:grid-cols-[1fr_0.6fr] lg:items-end lg:gap-6">

            <h2 className="max-w-5xl text-[2.5rem] font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
              BUILT FOR
              <br />

              <span className="text-[#b7ff3c]">
                MODERN FITNESS
              </span>

              <br />

              BUSINESSES.
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-white/45">
              A modern digital ecosystem designed to help gyms
              manage members, convert more leads, automate
              repetitive work and understand their business better.
            </p>

          </div>
        </motion.div>

        {/* =====================================================
            MAIN SOLUTION CARDS
        ====================================================== */}

        <div className="mt-10 grid gap-4 sm:mt-12 lg:mt-14 lg:grid-cols-2">

          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.article
                key={solution.title}
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
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -5,
                }}
                className={`group rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 sm:rounded-[1.75rem] sm:p-6 md:p-7 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >

                <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">

                  {/* Icon */}

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#b7ff3c]/10 sm:h-12 sm:w-12 sm:rounded-2xl">
                    <Icon
                      size={21}
                      className="text-[#b7ff3c]"
                    />
                  </div>

                  {/* Content */}

                  <div className="min-w-0 flex-1">

                    <div className="flex items-start justify-between gap-3">

                      <div className="min-w-0">

                        <p className="text-[9px] font-black tracking-[0.25em] text-white/20">
                          0{index + 1}
                        </p>

                        <h3 className="mt-1.5 text-xl font-black leading-tight sm:text-2xl">
                          {solution.title}
                        </h3>

                      </div>

                      <ArrowUpRight
                        size={19}
                        className="mt-1 shrink-0 text-white/20 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b7ff3c]"
                      />

                    </div>

                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/45 sm:mt-4">
                      {solution.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">

                      {solution.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[11px] text-white/50 sm:px-4 sm:text-xs"
                        >
                          <CheckCircle2
                            size={13}
                            className="shrink-0 text-[#b7ff3c]"
                          />

                          <span>{point}</span>
                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>

        {/* =====================================================
            DIGITAL TRANSFORMATION PANEL
        ====================================================== */}

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
          }}
          className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111] sm:mt-8 sm:rounded-[2rem]"
        >

          <div className="grid lg:grid-cols-2">

            {/* =================================================
                LEFT
            ================================================== */}

            <div className="p-6 sm:p-7 md:p-10">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b7ff3c] text-black sm:h-12 sm:w-12 sm:rounded-2xl">
                <Smartphone size={21} />
              </div>

              <h3 className="mt-6 max-w-lg text-2xl font-black leading-tight sm:mt-7 sm:text-3xl md:text-4xl">

                FROM

                <span className="text-[#b7ff3c]">
                  {" "}MANUAL
                </span>

                {" "}TO

                <span className="text-[#b7ff3c]">
                  {" "}DIGITAL.
                </span>

              </h3>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/45 sm:mt-5">
                Replace scattered spreadsheets, paper records and
                repetitive follow-ups with one connected digital
                experience for your gym team and members.
              </p>

              <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">

                {[
                  "One place for member information",
                  "Automated communication",
                  "Real-time business visibility",
                  "Better member experience",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-[#b7ff3c]"
                    />

                    <span className="text-sm leading-relaxed text-white/60">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            {/* =================================================
                RIGHT VISUAL
            ================================================== */}

            <div className="relative min-h-[380px] overflow-hidden bg-[#b7ff3c] p-6 text-black sm:min-h-[400px] sm:p-7 md:p-10">

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-black/10 blur-3xl" />

              <div className="relative">

                <p className="text-[10px] font-black tracking-[0.22em] opacity-50 sm:text-xs sm:tracking-[0.25em]">
                  DIGITAL GYM ECOSYSTEM
                </p>

                <div className="mt-6 space-y-3 sm:mt-8">

                  {[
                    ["MEMBERS", "1,248", "Active members"],
                    ["LEADS", "48", "New enquiries"],
                    ["REVENUE", "₹18.6L", "This month"],
                    ["ATTENDANCE", "76%", "Current rate"],
                  ].map(([label, value, subtitle]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-3 rounded-xl bg-black p-3.5 text-white sm:rounded-2xl sm:p-4"
                    >

                      <div className="min-w-0">

                        <p className="text-[8px] font-bold tracking-widest text-white/30 sm:text-[9px]">
                          {label}
                        </p>

                        <p className="mt-1 text-lg font-black sm:text-xl">
                          {value}
                        </p>

                      </div>

                      <p className="text-right text-[10px] leading-tight text-white/35 sm:text-xs">
                        {subtitle}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </motion.div>

        {/* =====================================================
            STATS
        ====================================================== */}

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 lg:grid-cols-4">

          {stats.map(([number, title, subtitle], index) => (
            <motion.div
              key={number}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:rounded-2xl sm:p-5"
            >

              <p className="text-[10px] font-black text-[#b7ff3c] sm:text-xs">
                {number}
              </p>

              <p className="mt-3 text-base font-black sm:mt-4 sm:text-lg">
                {title}
              </p>

              <p className="mt-1 text-[10px] leading-relaxed text-white/30 sm:text-xs">
                {subtitle}
              </p>

            </motion.div>
          ))}

        </div>

        {/* =====================================================
            TRUST STRIP
        ====================================================== */}

        <div className="mt-7 flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:mt-10 sm:rounded-2xl sm:p-5 md:flex-row md:items-center md:justify-between">

          <div className="flex items-start gap-3">

            <ShieldCheck
              size={20}
              className="mt-0.5 shrink-0 text-[#b7ff3c]"
            />

            <div>

              <p className="text-sm font-bold leading-tight">
                Designed for growing fitness businesses
              </p>

              <p className="mt-1 text-[10px] leading-relaxed text-white/30 sm:text-xs">
                Website + software + automation + analytics
              </p>

            </div>

          </div>

          <div className="pl-8 text-[10px] font-bold uppercase tracking-[0.15em] text-[#b7ff3c] sm:pl-0 sm:text-xs sm:tracking-[0.2em]">
            Evergrow Technologies
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;