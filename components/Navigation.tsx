"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out border-b ${scrolled
                ? "bg-bg-primary/50 backdrop-blur-xl border-border-subtle py-4"
                : "bg-transparent border-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-display font-semibold tracking-tight text-text-main">
                    Emad Soualhi
                </Link>

                <div className="hidden md:flex items-center space-x-12">
                    <div className="flex space-x-8 text-sm font-medium text-text-muted">
                        <Link href="#about" className="hover:text-text-main transition-colors">
                            About
                        </Link>
                        <Link href="#expertise" className="hover:text-text-main transition-colors">
                            Expertise
                        </Link>
                        <Link href="#contact" className="hover:text-text-main transition-colors">
                            Contact
                        </Link>
                    </div>
                    <Link
                        href="#contact"
                        className="px-6 py-2.5 bg-accent text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
}
