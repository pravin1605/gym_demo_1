import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Play,
    Users,
    Trophy,
    Dumbbell,
} from "lucide-react";

import image1 from "../assets/images/image_1.jpg";

function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen w-full overflow-hidden bg-[#090909]"
        >

            {/* =====================================================
                BACKGROUND IMAGE
            ====================================================== */}

            <motion.img
                src={image1}
                alt="Premium gym training"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{
                    duration: 1.8,
                    ease: "easeOut",
                }}
                className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Left Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

            {/* Bottom Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-black/20" />

            {/* Mobile extra dark overlay */}
            <div className="absolute inset-0 bg-black/10 sm:bg-transparent" />

            {/* Green Glow */}
            <div className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#b7ff3c]/10 blur-[140px]" />

            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}

            <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-6 sm:pt-32 lg:pb-24">

                <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

                    {/* =================================================
                        LEFT CONTENT
                    ================================================== */}

                    <div className="max-w-4xl">

                        {/* Eyebrow */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.6,
                            }}
                            className="mb-5 flex items-center gap-3 sm:mb-6"
                        >
                            <span className="h-px w-7 bg-[#b7ff3c] sm:w-10" />

                            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#b7ff3c] sm:text-xs sm:tracking-[0.3em]">
                                Train. Transform. Repeat.
                            </p>
                        </motion.div>

                        {/* Heading */}

                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 35,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.15,
                            }}
                            className="text-[3.4rem] font-black leading-[0.88] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[7.5rem]"
                        >
                            BUILD YOUR
                            <br />

                            <span className="text-[#b7ff3c]">
                                STRONGEST
                            </span>

                            <br />

                            SELF.
                        </motion.h1>

                        {/* Description */}

                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.35,
                            }}
                            className="mt-6 max-w-xl text-sm leading-relaxed text-white/65 sm:mt-8 sm:text-lg"
                        >
                            Train harder. Move better. Become stronger
                            with expert coaching, modern equipment and
                            a community built around progress.
                        </motion.p>

                        {/* =================================================
                            BUTTONS
                        ================================================== */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.5,
                            }}
                            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4"
                        >

                            {/* Primary */}

                            <motion.a
                                href="#membership"
                                whileHover={{
                                    scale: 1.04,
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                                className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#b7ff3c] px-6 py-4 text-xs font-black text-black shadow-xl shadow-[#b7ff3c]/10 sm:w-auto sm:px-7 sm:text-sm"
                            >
                                START YOUR JOURNEY

                                <ArrowUpRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </motion.a>

                            {/* Secondary */}

                            <motion.a
                                href="#programs"
                                whileHover={{
                                    scale: 1.04,
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                                className="group flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-xs font-bold text-white backdrop-blur-xl transition hover:border-white/30 hover:bg-white/10 sm:w-auto sm:px-7 sm:text-sm"
                            >
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-black">
                                    <Play
                                        size={12}
                                        fill="currentColor"
                                    />
                                </span>

                                EXPLORE PROGRAMS
                            </motion.a>

                        </motion.div>

                        {/* =================================================
                            TRUST STATS
                        ================================================== */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 25,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.7,
                            }}
                            className="mt-10 grid max-w-2xl grid-cols-3 border-t border-white/15 pt-6 sm:mt-14 sm:pt-7"
                        >

                            <Stat
                                number="1,200+"
                                label="Active Members"
                            />

                            <Stat
                                number="10+"
                                label="Expert Trainers"
                            />

                            <Stat
                                number="5+"
                                label="Years Experience"
                            />

                        </motion.div>

                    </div>

                    {/* =================================================
                        RIGHT FLOATING CARDS
                    ================================================== */}

                    <div className="relative hidden min-h-[500px] lg:block">

                        {/* Main Glass Card */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 50,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                            }}
                            className="absolute right-0 top-10 w-72 rounded-[2rem] border border-white/15 bg-black/35 p-6 shadow-2xl backdrop-blur-xl"
                        >

                            {/* Card Header */}

                            <div className="flex items-center justify-between">

                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                                        Today's Training
                                    </p>

                                    <p className="mt-2 text-xl font-black">
                                        Push Day
                                    </p>
                                </div>

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b7ff3c] text-black">
                                    <Dumbbell size={21} />
                                </div>

                            </div>

                            {/* Progress */}

                            <div className="mt-7">

                                <div className="mb-2 flex justify-between text-xs">

                                    <span className="text-white/40">
                                        Workout Progress
                                    </span>

                                    <span className="font-bold text-[#b7ff3c]">
                                        82%
                                    </span>

                                </div>

                                <div className="h-2 overflow-hidden rounded-full bg-white/10">

                                    <motion.div
                                        initial={{
                                            width: 0,
                                        }}
                                        animate={{
                                            width: "82%",
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            delay: 1,
                                        }}
                                        className="h-full rounded-full bg-[#b7ff3c]"
                                    />

                                </div>

                            </div>

                            {/* Workout Items */}

                            <div className="mt-6 space-y-3">

                                <WorkoutItem
                                    name="Bench Press"
                                    value="4 × 12"
                                />

                                <WorkoutItem
                                    name="Incline Press"
                                    value="3 × 10"
                                />

                                <WorkoutItem
                                    name="Cable Fly"
                                    value="3 × 15"
                                />

                            </div>

                        </motion.div>

                        {/* =================================================
                            ACTIVE MEMBERS CARD
                        ================================================== */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                y: [0, -8, 0],
                            }}
                            transition={{
                                opacity: {
                                    duration: 0.7,
                                    delay: 0.8,
                                },
                                y: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                            className="absolute -left-4 bottom-24 w-60 rounded-[1.7rem] border border-white/15 bg-black/50 p-5 shadow-2xl backdrop-blur-xl"
                        >

                            <div className="flex items-center gap-4">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b7ff3c]/10 text-[#b7ff3c]">
                                    <Users size={22} />
                                </div>

                                <div>

                                    <p className="text-2xl font-black">
                                        1,200+
                                    </p>

                                    <p className="text-xs text-white/40">
                                        ACTIVE MEMBERS
                                    </p>

                                </div>

                            </div>

                            <div className="mt-4 flex items-center gap-2">

                                <span className="h-2 w-2 rounded-full bg-[#b7ff3c] shadow-lg shadow-[#b7ff3c]/50" />

                                <span className="text-xs text-white/50">
                                    Members training today
                                </span>

                            </div>

                        </motion.div>

                        {/* =================================================
                            SATISFACTION CARD
                        ================================================== */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 30,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 1,
                            }}
                            className="absolute -right-5 bottom-4 rounded-[1.7rem] border border-white/15 bg-white/[0.06] px-6 py-5 shadow-2xl backdrop-blur-xl"
                        >

                            <div className="flex items-center gap-4">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b7ff3c] text-black">
                                    <Trophy size={21} />
                                </div>

                                <div>

                                    <p className="text-2xl font-black">
                                        98%
                                    </p>

                                    <p className="text-xs text-white/40">
                                        MEMBER SATISFACTION
                                    </p>

                                </div>

                            </div>

                        </motion.div>

                        {/* =================================================
                            DECORATIVE CIRCLE
                        ================================================== */}

                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute -right-10 top-0 h-28 w-28 rounded-full border border-[#b7ff3c]/20"
                        >
                            <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#b7ff3c]" />
                        </motion.div>

                    </div>

                </div>

            </div>

            {/* =====================================================
                SCROLL INDICATOR
            ====================================================== */}

            <motion.div
                animate={{
                    y: [0, 8, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1.8,
                }}
                className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 md:flex"
            >
                <span className="h-px w-8 bg-white/20" />

                Scroll to explore

                <span className="h-px w-8 bg-white/20" />
            </motion.div>

            {/* Bottom Fade */}

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#090909] to-transparent" />

        </section>
    );
}

/* =========================================================
   STAT COMPONENT
========================================================= */

function Stat({ number, label }) {
    return (
        <div className="min-w-0">

            <p className="truncate text-xl font-black sm:text-2xl md:text-3xl">
                {number}
            </p>

            <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-white/35 sm:text-xs">
                {label}
            </p>

        </div>
    );
}

/* =========================================================
   WORKOUT ITEM
========================================================= */

function WorkoutItem({ name, value }) {
    return (
        <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5">

            <span className="text-xs text-white/55">
                {name}
            </span>

            <span className="text-xs font-bold text-[#b7ff3c]">
                {value}
            </span>

        </div>
    );
}

export default Hero;