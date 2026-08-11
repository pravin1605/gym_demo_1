import { motion } from "framer-motion";
import {
  UserPlus,
  MessageCircle,
  CalendarCheck,
  CreditCard,
  BellRing,
  RefreshCcw,
  Star,
  ArrowDown,
  Zap,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "New Member",
    description: "A new member joins your gym.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Welcome Message",
    description: "Automatically send a personalized welcome message.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Trial Confirmation",
    description: "Confirm trial sessions and appointment details.",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Membership Activation",
    description: "Activate the selected membership after payment.",
  },
  {
    number: "05",
    icon: BellRing,
    title: "Payment Reminder",
    description: "Remind members about upcoming or pending payments.",
  },
  {
    number: "06",
    icon: RefreshCcw,
    title: "Renewal Reminder",
    description: "Notify members before their membership expires.",
  },
  {
    number: "07",
    icon: Star,
    title: "Feedback Collection",
    description: "Collect feedback and improve the member experience.",
  },
];

const benefits = [
  "Automated WhatsApp communication",
  "Membership expiry reminders",
  "Payment follow-ups",
  "Trial follow-ups",
  "Member notifications",
  "Feedback collection",
];

function SmartAutomation() {
  return (
    <section
      id="automation"
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
          className="mb-10 sm:mb-14"
        >
          <p className="flex items-center gap-2 text-[10px] font-black tracking-[0.25em] text-[#b7ff3c] sm:text-xs sm:tracking-[0.3em]">
            <Zap size={13} />
            SMART AUTOMATION
          </p>

          <div className="mt-4 grid gap-5 lg:grid-cols-[1fr_0.6fr] lg:items-end">

            <h2 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
              LESS ADMIN.
              <br />

              <span className="text-[#b7ff3c]">
                MORE GROWTH.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-white/45">
              Smart automation helps your gym team spend less
              time on repetitive work and more time taking care
              of members.
            </p>

          </div>
        </motion.div>

        {/* =====================================================
            AUTOMATION FLOW
        ====================================================== */}

        <div className="relative">

          {/* Desktop connecting line */}

          <div className="absolute left-[7.14%] right-[7.14%] top-[70px] hidden h-px bg-gradient-to-r from-[#b7ff3c]/10 via-[#b7ff3c]/50 to-[#b7ff3c]/10 lg:block" />

          <div className="grid gap-3 lg:grid-cols-7 lg:gap-3">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="relative"
                >

                  {/* =================================================
                      STEP CARD
                  ================================================== */}

                  <div className="group relative z-10 h-full rounded-[1.35rem] border border-white/10 bg-[#101010] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#b7ff3c]/30 sm:rounded-[1.5rem] sm:p-5">

                    {/* Number + Icon */}

                    <div className="flex items-center justify-between">

                      <span className="text-[10px] font-black tracking-widest text-[#b7ff3c]">
                        {step.number}
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#b7ff3c]/10 sm:h-10 sm:w-10">
                        <Icon
                          size={17}
                          className="text-[#b7ff3c] sm:h-[18px] sm:w-[18px]"
                        />
                      </div>

                    </div>

                    {/* Title */}

                    <h3 className="mt-5 text-sm font-black sm:mt-6">
                      {step.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-2 text-[11px] leading-relaxed text-white/35 sm:text-xs">
                      {step.description}
                    </p>

                  </div>

                  {/* =================================================
                      MOBILE ARROW
                  ================================================== */}

                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-2.5 sm:py-3 lg:hidden">
                      <ArrowDown
                        size={17}
                        className="text-[#b7ff3c]/40"
                      />
                    </div>
                  )}

                </motion.div>
              );
            })}

          </div>
        </div>

        {/* =====================================================
            BENEFITS
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          className="mt-8 grid overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] sm:mt-10 sm:rounded-[2rem] lg:grid-cols-[0.8fr_1.2fr]"
        >

          {/* =================================================
              LEFT
          ================================================== */}

          <div className="bg-[#b7ff3c] p-6 text-black sm:p-7 md:p-10">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-[#b7ff3c] sm:h-12 sm:w-12 sm:rounded-2xl">
              <Zap size={20} />
            </div>

            <h3 className="mt-6 text-2xl font-black leading-[1.05] sm:mt-7 sm:text-3xl">
              YOUR TEAM
              <br />
              SHOULD FOCUS
              <br />
              ON PEOPLE.
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-black/60 sm:mt-5">
              Let technology handle repetitive follow-ups,
              reminders and routine communication.
            </p>

          </div>

          {/* =================================================
              RIGHT
          ================================================== */}

          <div className="p-6 sm:p-7 md:p-10">

            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 sm:text-xs sm:tracking-[0.25em]">
              AUTOMATION CAN HANDLE
            </p>

            <div className="mt-5 grid gap-2.5 sm:mt-7 sm:grid-cols-2 sm:gap-3">

              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3.5 sm:p-4"
                >

                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-[#b7ff3c]"
                  />

                  <span className="text-xs text-white/60 sm:text-sm">
                    {benefit}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </motion.div>

        {/* =====================================================
            RESULT STRIP
        ====================================================== */}

        <div className="mt-6 grid gap-2.5 sm:mt-8 sm:grid-cols-3 sm:gap-3">

          {/* Result 1 */}

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
              duration: 0.4,
            }}
            className="rounded-xl border border-white/10 bg-white/[0.025] p-4 text-center sm:rounded-2xl sm:p-5"
          >
            <p className="text-2xl font-black text-[#b7ff3c] sm:text-3xl">
              70%
            </p>

            <p className="mt-1 text-[11px] text-white/35 sm:text-xs">
              Less manual follow-up
            </p>
          </motion.div>

          {/* Result 2 */}

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
              duration: 0.4,
              delay: 0.08,
            }}
            className="rounded-xl border border-white/10 bg-white/[0.025] p-4 text-center sm:rounded-2xl sm:p-5"
          >
            <p className="text-2xl font-black text-[#b7ff3c] sm:text-3xl">
              24/7
            </p>

            <p className="mt-1 text-[11px] text-white/35 sm:text-xs">
              Automated communication
            </p>
          </motion.div>

          {/* Result 3 */}

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
              duration: 0.4,
              delay: 0.16,
            }}
            className="rounded-xl border border-white/10 bg-white/[0.025] p-4 text-center sm:rounded-2xl sm:p-5"
          >
            <p className="text-2xl font-black text-[#b7ff3c] sm:text-3xl">
              1
            </p>

            <p className="mt-1 text-[11px] text-white/35 sm:text-xs">
              Connected system
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default SmartAutomation;