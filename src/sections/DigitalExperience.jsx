import { motion } from "framer-motion";
import {
    Users,
    QrCode,
    CreditCard,
    Bell,
    Receipt,
    BarChart3,
    TrendingUp,
    ArrowUpRight,
} from "lucide-react";

const stats = [
    {
        value: "1,248",
        label: "Active Members",
        change: "+12.4%",
    },
    {
        value: "₹18.6L",
        label: "Monthly Revenue",
        change: "+8.7%",
    },
    {
        value: "₹2.1L",
        label: "Pending Payments",
        change: "32 Pending",
    },
    {
        value: "132",
        label: "New Registrations",
        change: "+18.2%",
    },
    {
        value: "76%",
        label: "Attendance Rate",
        change: "+5.6%",
    },
    {
        value: "54",
        label: "Expiring Memberships",
        change: "This Month",
    },
];

const tools = [
    {
        icon: Users,
        title: "Member Management",
        description: "Manage member profiles, plans and activity.",
    },
    {
        icon: QrCode,
        title: "QR Attendance",
        description: "Fast and simple digital attendance tracking.",
    },
    {
        icon: CreditCard,
        title: "Payment Tracking",
        description: "Monitor collections and pending payments.",
    },
    {
        icon: Bell,
        title: "Renewal Reminders",
        description: "Automatically remind members before expiry.",
    },
    {
        icon: Receipt,
        title: "Digital Receipts",
        description: "Generate professional payment receipts.",
    },
    {
        icon: BarChart3,
        title: "Business Analytics",
        description: "Understand your gym performance at a glance.",
    },
];

const attendance = [
    48,
    64,
    55,
    72,
    66,
    84,
    76,
    92,
    81,
    96,
    88,
    94,
];

function DigitalExperience() {
    return (
        <section
            id="features"
            className="overflow-hidden bg-[#090909] px-4 py-20 sm:px-6 md:py-32"
        >
            <div className="mx-auto max-w-7xl">

                {/* --------------------------------
                    SECTION HEADING
                -------------------------------- */}
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
                    className="mb-10 md:mb-12"
                >
                    <p className="text-[10px] font-black tracking-[0.25em] text-[#b7ff3c] sm:text-xs sm:tracking-[0.3em]">
                        DIGITAL GYM EXPERIENCE
                    </p>

                    <h2 className="mt-4 max-w-5xl text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
                        YOUR FITNESS.
                        <br />

                        YOUR PROGRESS.
                        <br />

                        <span className="text-[#b7ff3c]">
                            ONE DIGITAL EXPERIENCE.
                        </span>
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/45 sm:text-base">
                        Give your gym team one simple place to manage
                        members, attendance, payments and business
                        performance.
                    </p>
                </motion.div>

                {/* --------------------------------
                    DASHBOARD
                -------------------------------- */}
                <motion.div
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
                        duration: 0.8,
                    }}
                    className="w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#101010] shadow-2xl sm:rounded-[2rem]"
                >

                    {/* --------------------------------
                        DASHBOARD TOP BAR
                    -------------------------------- */}
                    <div className="flex flex-col gap-3 border-b border-white/10 px-4 py-4 sm:px-5 sm:py-5 md:flex-row md:items-center md:justify-between md:px-7">

                        {/* Dashboard Brand */}
                        <div className="flex items-center gap-3">

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#b7ff3c] text-xs font-black text-black">
                                IF
                            </div>

                            <div>
                                <p className="text-sm font-bold">
                                    IronForge Dashboard
                                </p>

                                <p className="text-[10px] text-white/30 sm:text-xs">
                                    Gym Management
                                </p>
                            </div>

                        </div>

                        {/* Dashboard Right */}
                        <div className="flex items-center justify-between gap-3 sm:justify-end">

                            <span className="text-[10px] text-white/30 sm:text-xs">
                                Monday, August 2026
                            </span>

                            <div className="h-8 w-8 shrink-0 rounded-full bg-white/10" />

                        </div>

                    </div>

                    {/* --------------------------------
                        DASHBOARD CONTENT
                    -------------------------------- */}
                    <div className="p-4 sm:p-5 md:p-7">

                        {/* Dashboard Title */}
                        <div className="mb-5 flex items-end justify-between">

                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-white/30 sm:text-xs">
                                    Overview
                                </p>

                                <h3 className="mt-1 text-xl font-black sm:text-2xl">
                                    Good morning, Admin.
                                </h3>
                            </div>

                            {/* Desktop Month Button */}
                            <button className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/60 transition hover:border-[#b7ff3c]/30 hover:text-white sm:flex">
                                This Month
                                <ArrowUpRight size={14} />
                            </button>

                        </div>

                        {/* --------------------------------
                            STATS
                        -------------------------------- */}
                        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-3">

                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
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
                                        delay: index * 0.06,
                                    }}
                                    className="min-w-0 rounded-xl border border-white/10 bg-white/[0.025] p-3 transition hover:border-[#b7ff3c]/20 sm:rounded-2xl sm:p-5"
                                >

                                    {/* Number */}
                                    <p className="truncate text-lg font-black sm:text-2xl">
                                        {stat.value}
                                    </p>

                                    {/* Label */}
                                    <p className="mt-1 truncate text-[10px] text-white/35 sm:text-xs">
                                        {stat.label}
                                    </p>

                                    {/* Change */}
                                    <div className="mt-3 flex min-w-0 items-center gap-1 text-[10px] font-semibold text-[#b7ff3c] sm:mt-4 sm:text-xs">

                                        <TrendingUp
                                            size={12}
                                            className="shrink-0"
                                        />

                                        <span className="truncate">
                                            {stat.change}
                                        </span>

                                    </div>

                                </motion.div>
                            ))}

                        </div>

                        {/* --------------------------------
                            LOWER DASHBOARD
                        -------------------------------- */}
                        <div className="mt-4 grid gap-4 sm:mt-5 sm:gap-5 lg:grid-cols-[1.5fr_0.8fr]">

                            {/* --------------------------------
                                ATTENDANCE CHART
                            -------------------------------- */}
                            <div className="min-w-0 rounded-xl border border-white/10 bg-white/[0.025] p-4 sm:rounded-2xl sm:p-5 md:p-6">

                                {/* Chart Header */}
                                <div className="flex items-center justify-between">

                                    <div>
                                        <p className="text-[10px] text-white/30 sm:text-xs">
                                            MEMBER ACTIVITY
                                        </p>

                                        <h4 className="mt-1 text-sm font-bold sm:text-base">
                                            Weekly Attendance
                                        </h4>
                                    </div>

                                    <div className="rounded-lg bg-[#b7ff3c]/10 p-2 sm:rounded-xl">

                                        <BarChart3
                                            size={17}
                                            className="text-[#b7ff3c] sm:h-[19px] sm:w-[19px]"
                                        />

                                    </div>

                                </div>

                                {/* --------------------------------
                                    MOBILE CHART
                                -------------------------------- */}
                                <div className="mt-7 overflow-x-auto pb-1">

                                    <div className="flex h-40 min-w-[430px] items-end gap-2 sm:h-48 sm:min-w-0 sm:gap-3">

                                        {attendance.map(
                                            (height, index) => (
                                                <div
                                                    key={index}
                                                    className="group relative flex h-full min-w-[22px] flex-1 items-end sm:min-w-0"
                                                >

                                                    <div
                                                        className="w-full rounded-t-md bg-[#b7ff3c]/70 transition hover:bg-[#b7ff3c] sm:rounded-t-lg"
                                                        style={{
                                                            height: `${height}%`,
                                                        }}
                                                    />

                                                    <span className="absolute -top-5 left-1/2 hidden -translate-x-1/2 text-[9px] text-white/40 group-hover:block">
                                                        {height}%
                                                    </span>

                                                </div>
                                            )
                                        )}

                                    </div>

                                </div>

                                {/* Chart Days */}
                                <div className="mt-3 flex min-w-[430px] justify-between text-[9px] text-white/20 sm:min-w-0 sm:text-[10px]">

                                    <span>Mon</span>
                                    <span>Tue</span>
                                    <span>Wed</span>
                                    <span>Thu</span>
                                    <span>Fri</span>
                                    <span>Sat</span>
                                    <span>Sun</span>

                                </div>

                            </div>

                            {/* --------------------------------
                                TOOLS
                            -------------------------------- */}
                            <div className="grid min-w-0 grid-cols-2 gap-2.5 sm:gap-3">

                                {tools.map((tool) => {
                                    const Icon = tool.icon;

                                    return (
                                        <div
                                            key={tool.title}
                                            className="group min-w-0 rounded-xl border border-white/10 bg-white/[0.025] p-3 transition hover:border-[#b7ff3c]/30 hover:bg-[#b7ff3c]/5 sm:rounded-2xl sm:p-4"
                                        >

                                            {/* Icon */}
                                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#b7ff3c]/10 sm:h-9 sm:w-9 sm:rounded-xl">

                                                <Icon
                                                    size={15}
                                                    className="text-[#b7ff3c] sm:h-[17px] sm:w-[17px]"
                                                />

                                            </div>

                                            {/* Title */}
                                            <p className="mt-3 line-clamp-2 text-[10px] font-bold leading-tight sm:mt-4 sm:text-xs">
                                                {tool.title}
                                            </p>

                                            {/* Description */}
                                            <p className="mt-2 hidden text-[10px] leading-relaxed text-white/30 sm:block">
                                                {tool.description}
                                            </p>

                                        </div>
                                    );
                                })}

                            </div>

                        </div>

                    </div>

                </motion.div>

                {/* --------------------------------
                    BOTTOM MESSAGE
                -------------------------------- */}
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
                    className="mt-6 flex flex-col gap-4 rounded-2xl border border-[#b7ff3c]/15 bg-[#b7ff3c]/5 p-5 sm:mt-8 sm:rounded-3xl sm:p-6 md:flex-row md:items-center md:justify-between"
                >

                    <div>
                        <p className="text-sm font-bold sm:text-base">
                            Everything your gym needs, in one place.
                        </p>

                        <p className="mt-1 text-xs leading-relaxed text-white/40 sm:text-sm">
                            Built to simplify operations and help your
                            fitness business grow.
                        </p>
                    </div>

                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#b7ff3c] sm:whitespace-nowrap sm:text-xs sm:tracking-widest">
                        Powered by Evergrow Technologies
                    </span>

                </motion.div>

            </div>
        </section>
    );
}

export default DigitalExperience;