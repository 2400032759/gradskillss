import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

export function BackToTop({ theme = "default" }: { theme?: string }) {
    const isHome = theme === "home";
    const [isVisible, setIsVisible] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        const handleChatToggle = (e: any) => {
            setIsChatOpen(e.detail.isOpen);
        };
        window.addEventListener("chat-toggled", handleChatToggle);

        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
            window.removeEventListener("chat-toggled", handleChatToggle);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{
                        opacity: isChatOpen ? 0 : 1,
                        scale: isChatOpen ? 0.5 : 1,
                        pointerEvents: isChatOpen ? "none" : "auto",
                        y: 0,
                        right: "32px",
                        bottom: "100px" // Directly above the chat toggle (which is at bottom-6/right-6)
                    }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="fixed z-[60] flex items-center justify-center font-sans"
                >
                    <button
                        onClick={scrollToTop}
                        className={`group relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl transition-all hover:bg-white hover:shadow-2xl active:scale-95 border ${isHome ? "border-[#ff5757]/10" : "border-gray-100"}`}
                        aria-label="Scroll to top"
                    >
                        {/* SVG Progress Circle */}
                        <svg className="absolute -rotate-90" width="52" height="52">
                            <defs>
                                <linearGradient id="homeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#ff5757" />
                                    <stop offset="100%" stopColor="#8c52ff" />
                                </linearGradient>
                            </defs>
                            <circle
                                cx="26"
                                cy="26"
                                r="24"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                fill="transparent"
                                className="text-gray-100"
                            />
                            <motion.circle
                                cx="26"
                                cy="26"
                                r="24"
                                stroke={
                                    isHome ? "url(#homeGradient)" :
                                        theme === "product-builder" ? "#2563EB" :
                                            theme === "orange" ? "#EA580C" :
                                                theme === "purple" ? "#9333EA" :
                                                    "currentColor"
                                }
                                strokeWidth="2.5"
                                fill="transparent"
                                className={isHome || theme === "product-builder" || theme === "orange" || theme === "purple" ? "" : "text-blue-800"}
                                style={{
                                    pathLength: scrollYProgress,
                                }}
                            />
                        </svg>

                        {/* Icon */}
                        <ArrowUp className={`relative z-10 h-6 w-6 ${isHome ? "text-[#ff5757]" :
                                theme === "product-builder" ? "text-[#2563EB]" :
                                    theme === "orange" ? "text-[#EA580C]" :
                                        theme === "purple" ? "text-[#9333EA]" :
                                            "text-blue-800"
                            } transition-transform duration-300 group-hover:-translate-y-1`} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
