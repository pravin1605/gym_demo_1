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
      className="bg-[#090909] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="flex items-center gap-2 text-xs font-black tracking-[0.3em] text-[#b7ff3c]">
            <TrendingUp size={14} />
            BUSINESS GROWTH
          </p>

          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.6fr] lg:items-end">

            <h2 className="max-w-5xl text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
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

        {/* Main solution cards */}
        <div className="mt-14 grid gap-4 lg:grid-cols-2">

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
                className={`group rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-6 md:p-7 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >

                <div className="flex flex-col gap-6 sm:flex-row">

                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#b7ff3c]/10">
                    <Icon
                      size={22}
                      className="text-[#b7ff3c]"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <div className="flex items-start justify-between gap-4">

                      <div>
                        <p className="text-[10px] font-black tracking-[0.25em] text-white/20">
                          0{index + 1}
                        </p>

                        <h3 className="mt-2 text-2xl font-black">
                          {solution.title}
                        </h3>
                      </div>

                      <ArrowUpRight
                        size={20}
                        className="text-white/20 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#b7ff3c]"
                      />

                    </div>

                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/45">
                      {solution.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">

                      {solution.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-white/50"
                        >
                          <CheckCircle2
                            size={13}
                            className="text-[#b7ff3c]"
                          />

                          {point}
                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>

        {/* Digital transformation panel */}
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
          className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[#111]"
        >

          <div className="grid lg:grid-cols-[1fr_1fr]">

            {/* Left */}
            <div className="p-7 md:p-10">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b7ff3c] text-black">
                <Smartphone size={22} />
              </div>

              <h3 className="mt-7 max-w-lg text-3xl font-black sm:text-4xl">
                FROM
                <span className="text-[#b7ff3c]">
                  {" "}
                  MANUAL
                </span>{" "}
                TO
                <span className="text-[#b7ff3c]">
                  {" "}
                  DIGITAL.
                </span>
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/45">
                Replace scattered spreadsheets, paper records and
                repetitive follow-ups with one connected digital
                experience for your gym team and members.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "One place for member information",
                  "Automated communication",
                  "Real-time business visibility",
                  "Better member experience",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#b7ff3c]"
                    />

                    <span className="text-sm text-white/60">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            {/* Right visual */}
            <div className="relative min-h-[400px] overflow-hidden bg-[#b7ff3c] p-7 text-black md:p-10">

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-black/10 blur-3xl" />

              <div className="relative">

                <p className="text-xs font-black tracking-[0.25em] opacity-50">
                  DIGITAL GYM ECOSYSTEM
                </p>

                <div className="mt-8 space-y-3">

                  {[
                    ["MEMBERS", "1,248", "Active members"],
                    ["LEADS", "48", "New enquiries"],
                    ["REVENUE", "₹18.6L", "This month"],
                    ["ATTENDANCE", "76%", "Current rate"],
                  ].map(([label, value, subtitle]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between rounded-2xl bg-black p-4 text-white"
                    >

                      <div>
                        <p className="text-[9px] font-bold tracking-widest text-white/30">
                          {label}
                        </p>

                        <p className="mt-1 text-xl font-black">
                          {value}
                        </p>
                      </div>

                      <p className="text-xs text-white/35">
                        {subtitle}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </motion.div>

        {/* Stats */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

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
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >

              <p className="text-xs font-black text-[#b7ff3c]">
                {number}
              </p>

              <p className="mt-4 text-lg font-black">
                {title}
              </p>

              <p className="mt-1 text-xs text-white/30">
                {subtitle}
              </p>

            </motion.div>
          ))}

        </div>

        {/* Trust strip */}
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-3">
            <ShieldCheck
              size={20}
              className="text-[#b7ff3c]"
            />

            <div>
              <p className="text-sm font-bold">
                Designed for growing fitness businesses
              </p>

              <p className="mt-1 text-xs text-white/30">
                Website + software + automation + analytics
              </p>
            </div>
          </div>

          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#b7ff3c]">
            Evergrow Technologies
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;