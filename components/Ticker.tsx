"use client";

import { motion } from "framer-motion";

export default function Ticker() {
    return (
        <div className="w-full overflow-hidden py-4 bg-black text-white border-y border-white/10">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20,
                }}
            >
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center">
                        {["PREMIUM DOMAINS", "DIGITAL IDENTITY", "BRAND STRATEGY", "GLOBAL ASSETS"].map((text, j) => (
                            <span key={j} className="mx-8 text-sm font-mono tracking-widest uppercase">
                                {text}
                            </span>
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
