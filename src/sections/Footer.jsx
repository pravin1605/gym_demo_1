import { motion } from "framer-motion";
import {
    MessageCircle,
    ArrowUpRight,
    MapPin,
    Phone,
    Mail,
    Dumbbell,
} from "lucide-react";

const links = [
    {
        title: "Explore",
        items: [
            ["Home", "home"],
            ["About", "about"],
            ["Programs", "programs"],
            ["Trainers", "trainers"],
        ],
    },
    {
        title: "Membership",
        items: [
            ["Plans", "membership"],
            ["Features", "features"],
            ["Member Experience", "member-experience"],
            ["Contact", "contact"],
        ],
    },
];

const WHATSAPP_NUMBER = "918999805010";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const whatsappMessage = encodeURIComponent(
        "Hello Evergrow Technologies, I am interested in a digital solution for my gym."
    );

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-[#070707]">

            {/* =========================================
                BACKGROUND GLOW
            ========================================== */}
            <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#b7ff3c]/5 blur-[120px]" />

            <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-[#b7ff3c]/5 blur-[120px]" />

            {/* =========================================
                MAIN FOOTER
            ========================================== */}
            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 md:py-20">

                <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.5fr_0.7fr_0.7fr_1fr]">

                    {/* =================================
                        BRAND
                    ================================= */}
                    <motion.div
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
                            duration: 0.5,
                        }}
                    >

                        {/* Logo */}
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-2 text-xl font-black tracking-tight"
                        >
                            <motion.span
                                whileHover={{
                                    rotate: -8,
                                    scale: 1.05,
                                }}
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#b7ff3c] text-black"
                            >
                                <Dumbbell size={18} />
                            </motion.span>

                            <span>
                                IRON
                                <span className="text-[#b7ff3c] transition group-hover:text-white">
                                    FORGE
                                </span>
                            </span>
                        </button>

                        {/* Description */}
                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/35">
                            Premium training, expert coaching and a smarter
                            digital fitness experience built for modern members.
                        </p>

                        {/* =================================
                            SOCIAL BUTTONS
                        ================================= */}
                        <div className="mt-6 flex gap-3">

                            {/* Instagram */}
                            <a
                                href="#contact"
                                aria-label="Instagram"
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[10px] font-black text-white/40 transition duration-300 hover:border-[#b7ff3c]/30 hover:bg-[#b7ff3c] hover:text-black"
                            >
                                IG
                            </a>

                            {/* Facebook */}
                            <a
                                href="#contact"
                                aria-label="Facebook"
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[10px] font-black text-white/40 transition duration-300 hover:border-[#b7ff3c]/30 hover:bg-[#b7ff3c] hover:text-black"
                            >
                                FB
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="WhatsApp"
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/40 transition duration-300 hover:border-[#b7ff3c]/30 hover:bg-[#b7ff3c] hover:text-black"
                            >
                                <MessageCircle size={18} />
                            </a>

                        </div>

                    </motion.div>

                    {/* =================================
                        FOOTER LINKS
                    ================================= */}
                    {links.map((column, index) => (
                        <motion.div
                            key={column.title}
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
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                        >

                            <h4 className="text-sm font-black">
                                {column.title}
                            </h4>

                            <div className="mt-4 space-y-2">

                                {column.items.map(([label, id]) => (
                                    <button
                                        key={label}
                                        onClick={() => scrollToSection(id)}
                                        className="block py-1 text-left text-sm text-white/35 transition hover:text-[#b7ff3c]"
                                    >
                                        {label}
                                    </button>
                                ))}

                            </div>

                        </motion.div>
                    ))}

                    {/* =================================
                        CONTACT
                    ================================= */}
                    <motion.div
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
                            duration: 0.5,
                            delay: 0.2,
                        }}
                    >

                        <h4 className="text-sm font-black">
                            Get In Touch
                        </h4>

                        <div className="mt-5 space-y-5">

                            {/* Location */}
                            <div className="flex gap-3">

                                <MapPin
                                    size={17}
                                    className="mt-0.5 shrink-0 text-[#b7ff3c]"
                                />

                                <div>
                                    <p className="text-[10px] font-bold tracking-wider text-white/25">
                                        LOCATION
                                    </p>

                                    <p className="mt-1 text-sm text-white/55">
                                        Mumbai, Maharashtra
                                    </p>
                                </div>

                            </div>

                            {/* Phone */}
                            <div className="flex gap-3">

                                <Phone
                                    size={17}
                                    className="mt-0.5 shrink-0 text-[#b7ff3c]"
                                />

                                <div>
                                    <p className="text-[10px] font-bold tracking-wider text-white/25">
                                        PHONE
                                    </p>

                                    <a
                                        href="tel:+918999805010"
                                        className="mt-1 block text-sm text-white/55 transition hover:text-[#b7ff3c]"
                                    >
                                        +91 89998 05010
                                    </a>
                                </div>

                            </div>

                            {/* Email */}
                            <div className="flex min-w-0 gap-3">

                                <Mail
                                    size={17}
                                    className="mt-0.5 shrink-0 text-[#b7ff3c]"
                                />

                                <div className="min-w-0">

                                    <p className="text-[10px] font-bold tracking-wider text-white/25">
                                        EMAIL
                                    </p>

                                    <a
                                        href="mailto:evergrowtechnology@gmail.com"
                                        className="mt-1 block break-words text-sm text-white/55 transition hover:text-[#b7ff3c]"
                                    >
                                        evergrowtechnology@gmail.com
                                    </a>

                                </div>

                            </div>

                        </div>

                    </motion.div>

                </div>

                {/* =================================
                    CTA MINI STRIP
                ================================= */}
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
                        delay: 0.2,
                    }}
                    className="mt-10 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:mt-14 sm:p-6 md:flex-row md:items-center md:justify-between"
                >

                    <div>

                        <p className="text-sm font-bold">
                            Ready to build a smarter gym?
                        </p>

                        <p className="mt-1 text-xs leading-relaxed text-white/30">
                            Website • Software • Automation • Analytics
                        </p>

                    </div>

                    <a
                        href="mailto:evergrowtechnology@gmail.com?subject=Gym Digital Solution Enquiry"
                        className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#b7ff3c] px-5 py-3.5 text-xs font-black text-black transition duration-300 hover:scale-[1.02] sm:w-auto"
                    >
                        Start a Conversation

                        <ArrowUpRight
                            size={15}
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </a>

                </motion.div>

            </div>

            {/* =========================================
                BOTTOM BAR
            ========================================== */}
            <div className="border-t border-white/10">

                <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-6 text-xs text-white/25 sm:px-6 md:flex-row md:items-center md:justify-between">

                    {/* Copyright */}
                    <p className="text-center md:text-left">
                        © {new Date().getFullYear()} IronForge Gym.
                        All rights reserved.
                    </p>

                    {/* Evergrow */}
                    <p className="text-center">
                        Powered by{" "}
                        <span className="font-bold text-[#b7ff3c]">
                            Evergrow Technologies
                        </span>
                    </p>

                    {/* Back to Top */}
                    <button
                        onClick={scrollToTop}
                        className="mx-auto flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-[#b7ff3c]/30 hover:text-[#b7ff3c] md:mx-0"
                    >
                        Back to top

                        <ArrowUpRight size={14} />
                    </button>

                </div>

            </div>

        </footer>
    );
}

export default Footer;