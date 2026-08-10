import { motion } from "framer-motion";
import {
    ArrowUpRight,
    CalendarCheck,
    MessageCircle,
    CheckCircle2,
    Zap,
    Sparkles,
    Phone,
} from "lucide-react";

const benefits = [
    "Premium gym website",
    "Member management system",
    "Lead & CRM management",
    "Payment & renewal automation",
    "Business analytics",
    "WhatsApp communication",
];

const WHATSAPP_NUMBER = "918999805010";

function FinalCTA() {
    const whatsappMessage = encodeURIComponent(
        "Hello Evergrow Technologies, I am interested in building a digital solution for my gym. I would like to know more."
    );

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    return (
        <>
            {/* =====================================================
                FINAL CTA SECTION
            ====================================================== */}
            <section
                id="contact"
                className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:py-24"
            >
                {/* Background Glow */}
                <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#b7ff3c]/5 blur-[100px]" />

                <div className="relative mx-auto w-full max-w-7xl">

                    {/* =================================================
                        MAIN CTA
                    ================================================= */}
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
                            duration: 0.7,
                        }}
                        className="relative overflow-hidden rounded-[2rem] bg-[#b7ff3c] px-5 py-10 text-black sm:rounded-[2.5rem] sm:px-7 sm:py-14 md:px-14 md:py-20 lg:px-20"
                    >
                        {/* Decorative Circles */}
                        <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-black/10 sm:h-80 sm:w-80" />

                        <div className="pointer-events-none absolute -bottom-32 left-1/2 h-56 w-56 rounded-full bg-black/5 sm:h-64 sm:w-64" />

                        <div className="pointer-events-none absolute right-20 top-1/2 hidden h-24 w-24 -translate-y-1/2 rounded-full border border-black/10 lg:block" />

                        <div className="relative max-w-5xl">

                            {/* Label */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 10,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: 0.1,
                                }}
                                className="inline-flex max-w-full items-center gap-2 rounded-full bg-black px-3 py-2 text-[10px] font-black tracking-[0.18em] text-[#b7ff3c] sm:px-4 sm:text-xs sm:tracking-widest"
                            >
                                <Sparkles
                                    size={13}
                                    className="shrink-0"
                                />

                                <span>
                                    EVERGROW TECHNOLOGIES
                                </span>
                            </motion.div>

                            {/* Heading */}
                            <motion.h2
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
                                    delay: 0.15,
                                    duration: 0.6,
                                }}
                                className="mt-6 max-w-5xl text-[2.65rem] font-black leading-[0.92] tracking-[-0.045em] sm:mt-7 sm:text-5xl sm:leading-[0.95] md:text-7xl lg:text-8xl"
                            >
                                READY TO TAKE
                                <br />
                                YOUR FITNESS
                                <br />
                                BUSINESS TO
                                <br />
                                THE NEXT LEVEL?
                            </motion.h2>

                            {/* Description */}
                            <motion.p
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
                                    delay: 0.25,
                                }}
                                className="mt-6 max-w-2xl text-sm leading-relaxed text-black/60 sm:mt-7 sm:text-base md:text-lg"
                            >
                                Build a stronger digital presence, manage
                                your gym smarter and create a better
                                experience for every member.
                            </motion.p>

                            {/* Buttons */}
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
                                    delay: 0.35,
                                }}
                                className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap"
                            >

                                {/* Email CTA */}
                                <a
                                    href="mailto:evergrowtechnology@gmail.com?subject=Gym%20Digital%20Solution%20Enquiry&body=Hello%20Evergrow%20Technologies,%0A%0AI%20am%20interested%20in%20a%20digital%20solution%20for%20my%20gym."
                                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-sm font-bold text-white transition duration-300 hover:scale-[1.02] sm:w-auto sm:px-7"
                                >
                                    <CalendarCheck
                                        size={17}
                                    />

                                    Book a Free Consultation

                                    <ArrowUpRight
                                        size={17}
                                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                    />
                                </a>

                                {/* WhatsApp CTA */}
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex w-full items-center justify-center gap-2 rounded-full border border-black/20 px-6 py-4 text-sm font-bold transition duration-300 hover:bg-black/5 sm:w-auto sm:px-7"
                                >
                                    <MessageCircle
                                        size={17}
                                    />

                                    WhatsApp Us

                                    <ArrowUpRight
                                        size={16}
                                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                    />
                                </a>

                            </motion.div>

                        </div>
                    </motion.div>

                    {/* =================================================
                        WHAT WE PROVIDE
                    ================================================= */}
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
                            delay: 0.15,
                        }}
                        className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-5 sm:mt-8 sm:rounded-[2rem] sm:p-7 md:p-10"
                    >

                        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

                            <div>

                                <p className="text-[10px] font-black tracking-[0.2em] text-[#b7ff3c] sm:text-xs sm:tracking-[0.25em]">
                                    WHAT WE CAN BUILD FOR YOU
                                </p>

                                <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
                                    ONE PARTNER.
                                    <br />

                                    <span className="text-white/40">
                                        COMPLETE DIGITAL SOLUTION.
                                    </span>
                                </h3>

                            </div>

                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 sm:text-xs sm:tracking-widest">

                                <Zap
                                    size={15}
                                    className="shrink-0 text-[#b7ff3c]"
                                />

                                Built around your business

                            </div>

                        </div>

                        {/* Benefits */}
                        <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">

                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit}
                                    initial={{
                                        opacity: 0,
                                        x: -10,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        delay: index * 0.05,
                                    }}
                                    className="flex min-h-[58px] items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-4"
                                >

                                    <CheckCircle2
                                        size={17}
                                        className="shrink-0 text-[#b7ff3c]"
                                    />

                                    <span className="text-sm leading-snug text-white/55">
                                        {benefit}
                                    </span>

                                </motion.div>
                            ))}

                        </div>

                    </motion.div>

                    {/* =================================================
                        CONTACT INFORMATION
                    ================================================= */}
                    <div className="mt-4 grid gap-3 sm:mt-6 md:grid-cols-3">

                        {/* Phone */}
                        <a
                            href="tel:+918999805010"
                            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-[#b7ff3c]/30"
                        >

                            <p className="text-[10px] font-black tracking-widest text-white/25">
                                CALL US
                            </p>

                            <div className="mt-3 flex items-center gap-3">

                                <Phone
                                    size={18}
                                    className="shrink-0 text-[#b7ff3c]"
                                />

                                <p className="text-base font-bold sm:text-lg">
                                    +91 89998 05010
                                </p>

                            </div>

                        </a>

                        {/* Email */}
                        <a
                            href="mailto:evergrowtechnology@gmail.com"
                            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-[#b7ff3c]/30"
                        >

                            <p className="text-[10px] font-black tracking-widest text-white/25">
                                EMAIL
                            </p>

                            <p className="mt-3 break-all text-sm font-bold transition group-hover:text-[#b7ff3c]">
                                evergrowtechnology@gmail.com
                            </p>

                        </a>

                        {/* Location */}
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">

                            <p className="text-[10px] font-black tracking-widest text-white/25">
                                LOCATION
                            </p>

                            <p className="mt-3 text-base font-bold sm:text-lg">
                                Mumbai, Maharashtra
                            </p>

                        </div>

                    </div>

                </div>
            </section>

            {/* =====================================================
                FLOATING WHATSAPP BUTTON
            ====================================================== */}
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.7,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    delay: 1,
                    duration: 0.4,
                }}
                className="fixed bottom-4 right-4 z-[100] sm:bottom-6 sm:right-6"
            >

                {/* Tooltip */}
                <div className="pointer-events-none absolute bottom-[4.25rem] right-0 hidden whitespace-nowrap rounded-xl border border-white/10 bg-black px-4 py-2 text-xs font-semibold text-white shadow-xl sm:block">
                    Chat with us
                </div>

                {/* Pulse */}
                <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />

                {/* WhatsApp Button */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Chat with us on WhatsApp"
                    className="relative flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/40 transition duration-300 hover:scale-110 sm:h-14 sm:w-14"
                >
                    <MessageCircle size={25} />
                </a>

            </motion.div>
        </>
    );
}

export default FinalCTA;