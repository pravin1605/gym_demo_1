import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Dumbbell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Trainers", href: "#trainers" },
    { name: "Membership", href: "#membership" },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    /* --------------------------------
       Detect Navbar Scroll
    -------------------------------- */
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    /* --------------------------------
       Detect Active Section
    -------------------------------- */
    useEffect(() => {
        const sections = navLinks
            .map((link) => document.querySelector(link.href))
            .filter(Boolean);

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio -
                            a.intersectionRatio
                    );

                if (visibleSections.length > 0) {
                    setActiveSection(
                        visibleSections[0].target.id
                    );
                }
            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: [0.1, 0.25, 0.5],
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });

            observer.disconnect();
        };
    }, []);

    /* --------------------------------
       Lock Body Scroll on Mobile Menu
    -------------------------------- */
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    /* --------------------------------
       Close Menu on Resize
    -------------------------------- */
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    /* --------------------------------
       Smooth Navigation
    -------------------------------- */
    const handleNavigation = (href) => {
        setMenuOpen(false);

        const element = document.querySelector(href);

        if (!element) return;

        /*
         * Offset for fixed navbar.
         * Prevents section heading from going underneath navbar.
         */
        const navbarHeight = 80;

        const elementPosition =
            element.getBoundingClientRect().top +
            window.scrollY;

        const offsetPosition =
            elementPosition - navbarHeight;

        window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth",
        });
    };

    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
                scrolled
                    ? "border-b border-white/10 bg-black/80 shadow-2xl shadow-black/30 backdrop-blur-xl"
                    : "border-b border-transparent bg-transparent"
            }`}
        >
            {/* =====================================
                MAIN NAVBAR
            ====================================== */}
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">

                {/* =================================
                    LOGO
                ================================== */}
                <button
                    onClick={() => handleNavigation("#home")}
                    className="group flex shrink-0 items-center gap-2"
                    aria-label="Go to homepage"
                >
                    <motion.div
                        whileHover={{
                            rotate: -8,
                            scale: 1.08,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                        }}
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#b7ff3c] text-black shadow-lg shadow-[#b7ff3c]/10 sm:h-9 sm:w-9 sm:rounded-xl"
                    >
                        <Dumbbell
                            size={17}
                            strokeWidth={2.5}
                        />
                    </motion.div>

                    <span className="text-lg font-black tracking-tight sm:text-xl">
                        IRON
                        <span className="text-[#b7ff3c] transition-colors duration-300 group-hover:text-white">
                            FORGE
                        </span>
                    </span>
                </button>

                {/* =================================
                    DESKTOP NAVIGATION
                ================================== */}
                <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
                    {navLinks.map((link) => {
                        const sectionId =
                            link.href.replace("#", "");

                        const isActive =
                            activeSection === sectionId;

                        return (
                            <button
                                key={link.name}
                                onClick={() =>
                                    handleNavigation(
                                        link.href
                                    )
                                }
                                className={`group relative py-2 text-sm font-medium transition-colors duration-300 ${
                                    isActive
                                        ? "text-white"
                                        : "text-white/55 hover:text-white"
                                }`}
                            >
                                {link.name}

                                {/* Active Indicator */}
                                <span
                                    className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#b7ff3c] transition-all duration-300 ${
                                        isActive
                                            ? "w-full opacity-100"
                                            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                                    }`}
                                />
                            </button>
                        );
                    })}
                </nav>

                {/* =================================
                    DESKTOP JOIN BUTTON
                ================================== */}
                <motion.button
                    whileHover={{
                        scale: 1.05,
                    }}
                    whileTap={{
                        scale: 0.97,
                    }}
                    onClick={() =>
                        handleNavigation("#contact")
                    }
                    className="hidden items-center gap-2 rounded-full bg-[#b7ff3c] px-5 py-2.5 text-sm font-bold text-black shadow-lg shadow-[#b7ff3c]/10 transition hover:shadow-[#b7ff3c]/20 lg:flex"
                >
                    Join Now
                    <ArrowUpRight size={16} />
                </motion.button>

                {/* =================================
                    MOBILE MENU BUTTON
                ================================== */}
                <motion.button
                    whileTap={{
                        scale: 0.9,
                    }}
                    onClick={() =>
                        setMenuOpen(!menuOpen)
                    }
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-md transition hover:bg-white/10 sm:h-11 sm:w-11 lg:hidden"
                    aria-label={
                        menuOpen
                            ? "Close navigation"
                            : "Open navigation"
                    }
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? (
                        <X size={22} />
                    ) : (
                        <Menu size={22} />
                    )}
                </motion.button>
            </div>

            {/* =====================================
                MOBILE NAVIGATION
            ====================================== */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Mobile Background Overlay */}
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                            onClick={() =>
                                setMenuOpen(false)
                            }
                            className="fixed inset-0 top-20 -z-10 bg-black/60 backdrop-blur-sm lg:hidden"
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                height: 0,
                            }}
                            animate={{
                                opacity: 1,
                                height: "auto",
                            }}
                            exit={{
                                opacity: 0,
                                height: 0,
                            }}
                            transition={{
                                duration: 0.25,
                                ease: "easeOut",
                            }}
                            className="overflow-hidden border-t border-white/10 bg-[#090909]/98 shadow-2xl backdrop-blur-2xl lg:hidden"
                        >
                            <motion.nav
                                initial={{
                                    y: -10,
                                    opacity: 0,
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 0.25,
                                    delay: 0.03,
                                }}
                                className="mx-auto max-h-[calc(100vh-80px)] max-w-7xl overflow-y-auto px-4 py-4 sm:px-6 sm:py-5"
                            >
                                {/* Mobile Links */}
                                <div className="space-y-1">
                                    {navLinks.map(
                                        (
                                            link,
                                            index
                                        ) => {
                                            const sectionId =
                                                link.href.replace(
                                                    "#",
                                                    ""
                                                );

                                            const isActive =
                                                activeSection ===
                                                sectionId;

                                            return (
                                                <motion.button
                                                    key={
                                                        link.name
                                                    }
                                                    initial={{
                                                        opacity: 0,
                                                        x: -10,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    transition={{
                                                        delay:
                                                            index *
                                                            0.035,
                                                    }}
                                                    onClick={() =>
                                                        handleNavigation(
                                                            link.href
                                                        )
                                                    }
                                                    className={`flex w-full items-center justify-between rounded-xl border border-transparent px-4 py-3.5 text-left text-sm font-medium transition-all ${
                                                        isActive
                                                            ? "border-[#b7ff3c]/10 bg-[#b7ff3c]/5 text-[#b7ff3c]"
                                                            : "text-white/70 hover:bg-white/5 hover:text-white"
                                                    }`}
                                                >
                                                    <span>
                                                        {
                                                            link.name
                                                        }
                                                    </span>

                                                    {isActive && (
                                                        <span className="h-1.5 w-1.5 rounded-full bg-[#b7ff3c] shadow-lg shadow-[#b7ff3c]/50" />
                                                    )}
                                                </motion.button>
                                            );
                                        }
                                    )}
                                </div>

                                {/* Mobile CTA */}
                                <motion.button
                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.28,
                                    }}
                                    onClick={() =>
                                        handleNavigation(
                                            "#contact"
                                        )
                                    }
                                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#b7ff3c] px-5 py-3.5 text-sm font-black text-black shadow-lg shadow-[#b7ff3c]/10 transition hover:scale-[1.01] active:scale-[0.98]"
                                >
                                    Join Now
                                    <ArrowUpRight
                                        size={17}
                                    />
                                </motion.button>

                                {/* Mobile Bottom Text */}
                                <p className="pb-1 pt-4 text-center text-[10px] uppercase tracking-[0.25em] text-white/20">
                                    Train • Transform • Repeat
                                </p>
                            </motion.nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Navbar;