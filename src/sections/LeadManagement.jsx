import { motion } from "framer-motion";
import {
    Users,
    Phone,
    CalendarCheck,
    UserCheck,
    MessageCircle,
    Clock,
    TrendingUp,
    ArrowRight,
    CheckCircle2,
    Target,
} from "lucide-react";

const pipeline = [
    {
        number: "48",
        title: "New Leads",
        subtitle: "Fresh enquiries",
        icon: Users,
        percentage: 100,
    },
    {
        number: "34",
        title: "Contacted",
        subtitle: "Follow-up started",
        icon: Phone,
        percentage: 72,
    },
    {
        number: "21",
        title: "Trial",
        subtitle: "Trial booked",
        icon: CalendarCheck,
        percentage: 50,
    },
    {
        number: "15",
        title: "Converted",
        subtitle: "New members",
        icon: UserCheck,
        percentage: 35,
    },
];

const features = [
    {
        icon: Users,
        title: "Lead Tracking",
        description:
            "Keep every enquiry organized instead of losing potential members.",
    },
    {
        icon: MessageCircle,
        title: "Follow-up Reminders",
        description:
            "Know exactly which lead needs a call or message next.",
    },
    {
        icon: CalendarCheck,
        title: "Trial Booking",
        description:
            "Convert enquiries into scheduled gym trial sessions.",
    },
    {
        icon: UserCheck,
        title: "Conversion Tracking",
        description:
            "Understand which leads are becoming paying members.",
    },
    {
        icon: Clock,
        title: "Customer History",
        description:
            "Keep conversations, trials and membership activity connected.",
    },
    {
        icon: TrendingUp,
        title: "Performance Analytics",
        description:
            "Measure your team's lead-to-member conversion performance.",
    },
];

function LeadManagement() {
    return (
        <section
            id="crm"
            className="relative overflow-hidden bg-[#090909] px-4 py-20 sm:px-6 md:py-28"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute left-[-150px] top-40 h-[350px] w-[350px] rounded-full bg-[#b7ff3c]/5 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">

                {/* =================================================
                    HEADING
                ================================================== */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 sm:mb-14"
                >
                    <p className="flex items-center gap-2 text-[10px] font-black tracking-[0.25em] text-[#b7ff3c] sm:text-xs sm:tracking-[0.3em]">
                        <Target size={14} />
                        LEAD MANAGEMENT / CRM
                    </p>

                    <div className="mt-4 grid gap-5 lg:grid-cols-[1fr_0.6fr] lg:items-end lg:gap-6">

                        <h2 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
                            TURN ENQUIRIES
                            <br />
                            INTO
                            <br />
                            <span className="text-[#b7ff3c]">
                                MEMBERS.
                            </span>
                        </h2>

                        <p className="max-w-md text-sm leading-relaxed text-white/45">
                            Never lose a potential member because a follow-up
                            was forgotten. Track every enquiry from first
                            contact to conversion.
                        </p>

                    </div>
                </motion.div>


                {/* =================================================
                    CRM PIPELINE
                ================================================== */}

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
                    className="rounded-[1.5rem] border border-white/10 bg-[#101010] p-4 sm:rounded-[2rem] sm:p-6 md:p-8"
                >

                    {/* CRM HEADER */}

                    <div className="flex flex-col gap-5 border-b border-white/10 pb-5 sm:gap-4 sm:pb-6 md:flex-row md:items-center md:justify-between">

                        <div>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 sm:text-xs">
                                SALES PIPELINE
                            </p>

                            <h3 className="mt-2 text-lg font-black sm:text-xl">
                                Lead Conversion Overview
                            </h3>
                        </div>

                        <div className="flex w-fit items-center gap-2 rounded-full border border-[#b7ff3c]/20 bg-[#b7ff3c]/5 px-3 py-2 text-[10px] font-bold text-[#b7ff3c] sm:px-4 sm:text-xs">
                            <TrendingUp size={14} />
                            31.2% Conversion Rate
                        </div>

                    </div>


                    {/* =================================================
                        PIPELINE CARDS
                    ================================================== */}

                    <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-4">

                        {pipeline.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="relative"
                                >

                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scale: 0.95,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            delay: index * 0.1,
                                        }}
                                        className="group rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition duration-300 hover:border-[#b7ff3c]/30 hover:bg-[#b7ff3c]/[0.03] sm:p-5"
                                    >

                                        {/* Top */}

                                        <div className="flex items-start justify-between">

                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b7ff3c]/10 sm:h-11 sm:w-11">
                                                <Icon
                                                    size={18}
                                                    className="text-[#b7ff3c]"
                                                />
                                            </div>

                                            <span className="text-[10px] text-white/20 sm:text-xs">
                                                0{index + 1}
                                            </span>

                                        </div>


                                        {/* Number */}

                                        <p className="mt-5 text-3xl font-black sm:mt-6 sm:text-4xl">
                                            {item.number}
                                        </p>

                                        <p className="mt-1 text-sm font-bold sm:text-base">
                                            {item.title}
                                        </p>

                                        <p className="mt-1 text-[11px] text-white/35 sm:text-xs">
                                            {item.subtitle}
                                        </p>


                                        {/* Progress */}

                                        <div className="mt-4 h-1.5 rounded-full bg-white/10 sm:mt-5">

                                            <motion.div
                                                initial={{
                                                    width: 0,
                                                }}
                                                whileInView={{
                                                    width: `${item.percentage}%`,
                                                }}
                                                viewport={{
                                                    once: true,
                                                }}
                                                transition={{
                                                    duration: 0.8,
                                                    delay:
                                                        0.2 +
                                                        index * 0.1,
                                                }}
                                                className="h-full rounded-full bg-[#b7ff3c]"
                                            />

                                        </div>

                                    </motion.div>


                                    {/* Desktop Arrow */}

                                    {index < pipeline.length - 1 && (
                                        <div className="absolute -right-4 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#101010]">
                                                <ArrowRight
                                                    size={15}
                                                    className="text-[#b7ff3c]"
                                                />
                                            </div>
                                        </div>
                                    )}

                                </div>
                            );
                        })}

                    </div>


                    {/* =================================================
                        CRM STATS
                    ================================================== */}

                    <div className="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-3">

                        <CRMStat
                            label="FOLLOW-UPS TODAY"
                            value="17"
                        />

                        <CRMStat
                            label="TRIALS THIS WEEK"
                            value="21"
                        />

                        <CRMStat
                            label="CONVERSIONS THIS MONTH"
                            value="15"
                            highlight
                        />

                    </div>

                </motion.div>


                {/* =================================================
                    FEATURES
                ================================================== */}

                <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.title}
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
                                    delay: index * 0.06,
                                }}
                                className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition duration-300 hover:border-[#b7ff3c]/20 sm:p-5"
                            >

                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b7ff3c]/10">
                                    <Icon
                                        size={18}
                                        className="text-[#b7ff3c]"
                                    />
                                </div>

                                <h3 className="mt-4 text-sm font-bold sm:mt-5 sm:text-base">
                                    {feature.title}
                                </h3>

                                <p className="mt-2 text-[11px] leading-relaxed text-white/35 sm:text-xs">
                                    {feature.description}
                                </p>

                            </motion.div>
                        );
                    })}

                </div>


                {/* =================================================
                    CLOSING MESSAGE
                ================================================== */}

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
                        duration: 0.6,
                    }}
                    className="mt-6 flex flex-col gap-4 rounded-2xl border border-[#b7ff3c]/15 bg-[#b7ff3c]/5 p-5 sm:mt-10 sm:rounded-3xl sm:p-6 md:flex-row md:items-center md:justify-between"
                >

                    <div>
                        <p className="text-base font-black sm:text-lg">
                            Every enquiry is an opportunity.
                        </p>

                        <p className="mt-1 text-xs leading-relaxed text-white/40 sm:text-sm">
                            Give your team the tools to follow up,
                            convert and grow.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#b7ff3c] sm:text-xs">
                        <CheckCircle2 size={15} />
                        Never Miss A Lead
                    </div>

                </motion.div>

            </div>
        </section>
    );
}


/* =========================================================
   CRM STAT COMPONENT
========================================================= */

function CRMStat({ label, value, highlight = false }) {
    return (
        <div className="rounded-xl bg-black/30 p-3.5 sm:p-4">

            <p className="text-[9px] font-semibold tracking-wide text-white/30 sm:text-xs">
                {label}
            </p>

            <p
                className={`mt-1.5 text-xl font-black sm:mt-2 sm:text-2xl ${
                    highlight
                        ? "text-[#b7ff3c]"
                        : "text-white"
                }`}
            >
                {value}
            </p>

        </div>
    );
}

export default LeadManagement;