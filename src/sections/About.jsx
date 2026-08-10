import { motion } from "framer-motion";
import {
    Check,
    ArrowUpRight,
    Dumbbell,
    Users,
    Target,
    Activity,
} from "lucide-react";

import image2 from "../assets/images/image_2.jpg";

const features = [
    {
        icon: Dumbbell,
        title: "Modern Equipment",
    },
    {
        icon: Users,
        title: "Expert Trainers",
    },
    {
        icon: Target,
        title: "Personalized Programs",
    },
    {
        icon: Activity,
        title: "Progress Tracking",
    },
];

function About() {
    return (
        <section
            id="about"
            className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24"
        >
            {/* =====================================
                SECTION HEADING
            ====================================== */}
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
                className="mb-10 sm:mb-14"
            >
                <p className="text-[10px] font-black tracking-[0.25em] text-[#b7ff3c] sm:text-xs sm:tracking-[0.3em]">
                    ABOUT THE GYM
                </p>

                <h2 className="mt-3 text-4xl font-black leading-[0.95] tracking-tight sm:mt-4 sm:text-5xl md:text-6xl">
                    MORE THAN
                    <br />
                    <span className="text-[#b7ff3c]">
                        A GYM.
                    </span>
                </h2>
            </motion.div>

            {/* =====================================
                MAIN CONTENT
            ====================================== */}
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

                {/* =================================
                    IMAGE
                ================================= */}
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -40,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="relative"
                >
                    <div className="overflow-hidden rounded-[1.5rem] border border-white/10 sm:rounded-[2rem]">
                        <img
                            src={image2}
                            alt="Modern gym interior"
                            className="h-[340px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[420px] md:h-[520px]"
                        />
                    </div>

                    {/* =================================
                        EXPERIENCE BADGE
                    ================================== */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3,
                        }}
                        className="absolute -bottom-5 right-2 rounded-2xl border border-white/10 bg-[#111]/95 p-4 shadow-2xl backdrop-blur-xl sm:-right-4 sm:p-5 md:-right-6"
                    >
                        <p className="text-2xl font-black text-[#b7ff3c] sm:text-3xl">
                            5+
                        </p>

                        <p className="mt-1 whitespace-nowrap text-[9px] uppercase tracking-wider text-white/50 sm:text-xs">
                            Years of Excellence
                        </p>
                    </motion.div>
                </motion.div>

                {/* =================================
                    CONTENT
                ================================== */}
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                >
                    {/* Main paragraph */}
                    <p className="text-lg leading-relaxed text-white/65 sm:text-xl">
                        A premium training environment built
                        for people who refuse average. From
                        your first session to your biggest
                        milestone, our coaches and community
                        keep you moving forward.
                    </p>

                    {/* Secondary paragraph */}
                    <p className="mt-5 text-sm leading-relaxed text-white/45 sm:text-base">
                        Whether your goal is building strength,
                        losing weight, improving fitness or
                        becoming the strongest version of
                        yourself, we provide the environment,
                        expertise and support to help you get
                        there.
                    </p>

                    {/* =================================
                        FEATURES
                    ================================== */}
                    <div className="mt-7 grid gap-3 sm:mt-9 sm:grid-cols-2">
                        {features.map(
                            (feature, index) => {
                                const Icon =
                                    feature.icon;

                                return (
                                    <motion.div
                                        key={
                                            feature.title
                                        }
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
                                            delay:
                                                index *
                                                0.1,
                                        }}
                                        className="group flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition hover:border-[#b7ff3c]/30 hover:bg-white/[0.06] sm:p-4"
                                    >
                                        {/* Icon */}
                                        <div className="shrink-0 rounded-xl bg-[#b7ff3c]/10 p-2.5">
                                            <Icon
                                                size={
                                                    18
                                                }
                                                className="text-[#b7ff3c]"
                                            />
                                        </div>

                                        {/* Title */}
                                        <span className="text-xs font-semibold sm:text-sm">
                                            {
                                                feature.title
                                            }
                                        </span>
                                    </motion.div>
                                );
                            }
                        )}
                    </div>

                    {/* =================================
                        EXTRA BENEFITS
                    ================================== */}
                    <div className="mt-6 space-y-3 sm:mt-7">
                        {[
                            "Diet & nutrition guidance",
                            "Supportive fitness community",
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-3 text-xs text-white/60 sm:text-sm"
                            >
                                <Check
                                    size={16}
                                    className="shrink-0 text-[#b7ff3c]"
                                />

                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* =================================
                        CTA
                    ================================== */}
                    <motion.a
                        href="#programs"
                        whileHover={{
                            x: 4,
                        }}
                        className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#b7ff3c] sm:mt-9"
                    >
                        Discover Our Programs

                        <ArrowUpRight
                            size={18}
                            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

export default About;