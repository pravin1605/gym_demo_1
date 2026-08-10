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
          <p className="flex items-center gap-2 text-xs font-black tracking-[0.3em] text-[#b7ff3c]">
            <Zap size={14} />
            SMART AUTOMATION
          </p>

          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.6fr] lg:items-end">

            <h2 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
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

        {/* Automation flow */}
        <div className="relative">

          {/* Desktop connecting line */}
          <div className="absolute left-[7.14%] right-[7.14%] top-[70px] hidden h-px bg-gradient-to-r from-[#b7ff3c]/10 via-[#b7ff3c]/50 to-[#b7ff3c]/10 lg:block" />

          <div className="grid gap-4 lg:grid-cols-7">

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
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="relative"
                >

                  <div className="group relative z-10 h-full rounded-[1.5rem] border border-white/10 bg-[#101010] p-5 transition duration-300 hover:-translate-y-2 hover:border-[#b7ff3c]/30">

                    {/* Number */}
                    <div className="flex items-center justify-between">

                      <span className="text-[10px] font-black tracking-widest text-[#b7ff3c]">
                        {step.number}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b7ff3c]/10">
                        <Icon
                          size={18}
                          className="text-[#b7ff3c]"
                        />
                      </div>

                    </div>

                    <h3 className="mt-6 text-sm font-black">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-white/35">
                      {step.description}
                    </p>

                  </div>

                  {/* Mobile arrow */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-3 lg:hidden">
                      <ArrowDown
                        size={18}
                        className="text-[#b7ff3c]/40"
                      />
                    </div>
                  )}

                </motion.div>
              );
            })}

          </div>

        </div>

        {/* Benefits */}
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
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-10 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] lg:grid-cols-[0.8fr_1.2fr]"
        >

          {/* Left */}
          <div className="bg-[#b7ff3c] p-7 text-black md:p-10">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-[#b7ff3c]">
              <Zap size={22} />
            </div>

            <h3 className="mt-7 text-3xl font-black">
              YOUR TEAM
              <br />
              SHOULD FOCUS
              <br />
              ON PEOPLE.
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-black/60">
              Let technology handle repetitive follow-ups,
              reminders and routine communication.
            </p>

          </div>

          {/* Right */}
          <div className="p-7 md:p-10">

            <p className="text-xs font-black uppercase tracking-[0.25em] text-white/30">
              AUTOMATION CAN HANDLE
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-[#b7ff3c]"
                  />

                  <span className="text-sm text-white/60">
                    {benefit}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </motion.div>

        {/* Small result strip */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center">
            <p className="text-3xl font-black text-[#b7ff3c]">
              70%
            </p>
            <p className="mt-1 text-xs text-white/35">
              Less manual follow-up
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center">
            <p className="text-3xl font-black text-[#b7ff3c]">
              24/7
            </p>
            <p className="mt-1 text-xs text-white/35">
              Automated communication
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center">
            <p className="text-3xl font-black text-[#b7ff3c]">
              1
            </p>
            <p className="mt-1 text-xs text-white/35">
              Connected system
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default SmartAutomation;