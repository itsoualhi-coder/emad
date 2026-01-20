"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Cursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("cursor-pointer")
            ) {
                setHovered(true);
            } else {
                setHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed z-[9999] pointer-events-none mix-blend-difference hidden md:block"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
        >
            <motion.div
                animate={{
                    scale: hovered ? 2.5 : 1,
                    opacity: 1,
                }}
                className="w-8 h-8 rounded-full bg-white border border-white/20 backdrop-blur-sm"
            />
        </motion.div>
    );
}
