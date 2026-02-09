"use client";
import { motion } from "framer-motion";

export default function ServiceIcon({ type }) {
    const iconVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.5
            }
        }
    };

    const renderIcon = () => {
        switch (type) {
            case "video-editing":
                return (
                    // Film Strip / Timeline Abstract
                    <svg viewBox="0 0 100 100" className="w-full h-full p-4">
                        <motion.path
                            d="M10,20 L90,20 M10,80 L90,80 M20,20 L20,80 M80,20 L80,80 M50,20 L50,80"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            variants={iconVariants}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.rect
                            x="30" y="35" width="40" height="30"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <circle cx="15" cy="50" r="2" fill="currentColor" />
                        <circle cx="85" cy="50" r="2" fill="currentColor" />
                    </svg>
                );
            case "web-development":
                return (
                    // Code Brackets / Network
                    <svg viewBox="0 0 100 100" className="w-full h-full p-4">
                        <motion.path
                            d="M30,30 L10,50 L30,70 M70,30 L90,50 L70,70"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            variants={iconVariants}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M45,80 L55,20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                        <motion.circle
                            cx="50" cy="50" r="4"
                            fill="currentColor"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </svg>
                );
            case "brand-strategy":
                return (
                    // Target / Strategy Board
                    <svg viewBox="0 0 100 100" className="w-full h-full p-4">
                        <motion.circle
                            cx="50" cy="50" r="30"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            variants={iconVariants}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.path
                            d="M50,10 L50,90 M10,50 L90,50"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                        />
                        <motion.rect
                            x="45" y="45" width="10" height="10"
                            fill="none"
                            stroke="currentColor"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                        />
                        <circle cx="50" cy="10" r="2" fill="currentColor" />
                        <circle cx="90" cy="50" r="2" fill="currentColor" />
                    </svg>
                );
            case "motion-graphics":
                return (
                    // Waveform / Keyframes
                    <svg viewBox="0 0 100 100" className="w-full h-full p-4">
                        <motion.path
                            d="M10,50 Q30,10 50,50 T90,50"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            variants={iconVariants}
                            initial="hidden"
                            animate="visible"
                        />
                        <motion.circle
                            cx="10" cy="50" r="3"
                            fill="currentColor"
                            animate={{ cx: [10, 30, 50, 70, 90], cy: [50, 10, 50, 90, 50] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                        <rect x="10" y="80" width="80" height="2" fill="currentColor" opacity="0.3" />
                        <rect x="20" y="75" width="2" height="12" fill="currentColor" />
                        <rect x="50" y="75" width="2" height="12" fill="currentColor" />
                        <rect x="80" y="75" width="2" height="12" fill="currentColor" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full h-full flex items-center justify-center text-tech-blue">
            {renderIcon()}
        </div>
    );
}
