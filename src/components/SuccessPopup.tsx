import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect } from "react";

interface SuccessPopupProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    message?: string;
    variant?: "home" | "mentor" | "gradteer";
}

export default function SuccessPopup({ isOpen, onClose, title = "Application Received!", message = "We'll get back to you soon.", variant = "home" }: SuccessPopupProps) {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 4000); // Auto close after 4 seconds
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    const isMentor = variant === "mentor";
    const isGradteer = variant === "gradteer";

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 pointer-events-none">
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-[#030712]/80 backdrop-blur-md pointer-events-auto"
                        onClick={onClose}
                    />

                    {/* Popup Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                        transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                        className="relative z-10 w-full max-w-sm bg-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-10 text-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] pointer-events-auto perspective-[1000px]"
                    >
                        {/* 3D Tick Animation */}
                        <div className="relative flex items-center justify-center mb-8 mt-2">
                            {/* Trustworthy pulsing rings */}
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1.6, opacity: [0, 0.2, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                                className={`absolute w-20 h-20 rounded-full ${isMentor ? "bg-[#8c52ff]" : isGradteer ? "bg-[#ff5757]" : "bg-[#8c52ff]"}`}
                            />
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 2.2, opacity: [0, 0.1, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
                                className={`absolute w-20 h-20 rounded-full ${isMentor ? "bg-[#8c52ff]" : isGradteer ? "bg-[#ff5757]" : "bg-[#8c52ff]"}`}
                            />

                            {/* 3D Badge Center */}
                            <motion.div
                                initial={{ scale: 0, rotateY: 180 }}
                                animate={{ scale: 1, rotateY: 0 }}
                                transition={{ type: "spring", damping: 15, stiffness: 150, delay: 0.1 }}
                                className={`relative w-24 h-24 rounded-full flex items-center justify-center shadow-[0_15px_35px_rgba(0,0,0,0.2),inset_0_-4px_10px_rgba(0,0,0,0.1),inset_0_4px_10px_rgba(255,255,255,0.4)] transform-gpu ${isMentor ? "bg-gradient-to-tr from-[#6b21ff] to-[#8c52ff]" : isGradteer ? "bg-gradient-to-tr from-[#e64646] to-[#ff7a7a]" : "bg-gradient-to-tr from-[#6b21ff] to-[#8c52ff]"}`}
                            >
                                {/* Animated Hand-drawn Check */}
                                <svg viewBox="0 0 24 24" className="w-12 h-12 text-white drop-shadow-md z-10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <motion.path
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 0.6, ease: "circOut", delay: 0.4 }}
                                        d="M6 12l4 4L18 7"
                                    />
                                </svg>

                                {/* Inner Gloss */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-transparent p-[2px] pointer-events-none" />
                            </motion.div>
                        </div>

                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-[28px] font-bold text-gray-900 mb-3 tracking-tight"
                        >
                            {title}
                        </motion.h2>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-500 text-[16px] font-medium leading-relaxed mb-4"
                        >
                            {message}
                        </motion.p>

                        {/* Animated Progress Bar */}
                        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-50 rounded-b-[40px] overflow-hidden">
                            <motion.div 
                                initial={{ width: "100%" }}
                                animate={{ width: "0%" }}
                                transition={{ duration: 4, ease: "linear" }}
                                className={`h-full ${isMentor ? "bg-[#8c52ff]" : isGradteer ? "bg-[#ff5757]" : "bg-[#8c52ff]"}`}
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
