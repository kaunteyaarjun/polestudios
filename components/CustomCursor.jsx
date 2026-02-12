"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Check for touch device
        if (window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    // Return null on server or if touch device (checked in effect for simplicity, but could be state)
    // For SSR safety and simplicity, we can use a state to track if we should render
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show on non-touch devices
        if (window.matchMedia("(pointer: fine)").matches) {
            setIsVisible(true);
        }
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
            animate={{
                x: mousePosition.x - 10,
                y: mousePosition.y - 10,
                scale: isHovering ? 2.5 : 1,
                opacity: 1,
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5
            }}
        >
            <div className="w-5 h-5 bg-white rounded-full opacity-80" />
        </motion.div>
    );
}
