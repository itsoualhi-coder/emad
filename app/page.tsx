"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Globe, Zap, Search, LayoutTemplate } from "lucide-react";
import Navigation from "@/components/Navigation";
import Ticker from "@/components/Ticker";

gsap.registerPlugin(ScrollTrigger);

const MaskText = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Background color shift for Identity Section
      const trigger = ScrollTrigger.create({
        trigger: "#identity",
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => gsap.to("main", { "--color-bg-primary": "#ffffff", duration: 1 }),
        onLeave: () => gsap.to("main", { "--color-bg-primary": "#f7f7f7", duration: 1 }),
        onEnterBack: () => gsap.to("main", { "--color-bg-primary": "#ffffff", duration: 1 }),
        onLeaveBack: () => gsap.to("main", { "--color-bg-primary": "#f7f7f7", duration: 1 }),
      });
      return () => trigger.kill();
    },
    { scope: containerRef }
  );

  return (
    <main
      ref={containerRef}
      className="min-h-screen w-full bg-bg-primary text-text-main transition-colors duration-1000"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center px-4 md:px-6 pt-20">
        <div className="max-w-6xl w-full text-center z-10 space-y-8">
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 md:gap-x-4">
            {["The", "perfect", "domain", "for", "your", "brand", "to", "stand", "out."].map((word, i) => (
              <MaskText key={i} delay={0.05 * i}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[1.1] tracking-tight">
                  {word}
                </h1>
              </MaskText>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-text-muted font-sans font-light max-w-2xl mx-auto"
          >
            Hello, I’m Emad Soualhi. I find the digital identity that ensures your success.
          </motion.p>
        </div>


      </section>

      {/* Identity / About Section */}
      <section id="identity" className="py-32 md:py-48 px-6 border-t border-border-subtle">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-medium leading-tight">
                Your digital identity starts with the right domain.
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl text-text-muted font-sans leading-relaxed"
            >
              Crafting the future of brands, one domain at a time. Empowering businesses with names that speak, sell, and shine. Not just a URL, but a foundation for your legacy.
            </motion.p>
          </div>

          <div className="relative h-full min-h-[400px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
            >
              <Image src="/me.jpg" alt="Emad Soualhi" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono uppercase tracking-widest text-text-muted mb-16"
          >
            Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-px bg-border-subtle border border-border-subtle overflow-hidden">
            {[
              { title: "Fashion & Lifestyle Branding", desc: "Chic, memorable names for eCommerce & startups.", icon: <LayoutTemplate className="w-6 h-6" /> },
              { title: "AI & Tech Strategy", desc: "Brandable, keyword-rich names for SaaS & AI.", icon: <Zap className="w-6 h-6" /> },
              { title: "SEO-Friendly Domains", desc: "Identifying names that rank and convert.", icon: <Search className="w-6 h-6" /> },
              { title: "Brand Name Strategy", desc: "Names that align with identity and market.", icon: <Globe className="w-6 h-6" /> },
            ].map((item, i) => (
              <div key={i} className="group relative bg-bg-primary p-12 hover:bg-white transition-colors duration-500">
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-display font-medium">{item.title}</h3>
                  <p className="text-text-muted group-hover:text-text-main transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker */}
      <Ticker />

      {/* Selected Works - New "Super" Section */}
      {/* Selected Works - New "Roles" Section */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-mono uppercase tracking-widest text-white/50 mb-16"
          >
            What I Do
          </motion.h2>

          <div className="space-y-24">
            {[
              { name: "Domain Investor", icon: "", desc: "PREMIUM ASSETS" },
              { name: "Full Stack Dev", icon: "", desc: "HIGH-PERFORMANCE CODE" },
              { name: "SaaS Entrepreneur", icon: "", desc: "SCALABLE SOLUTIONS" }
            ].map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.1 }}
                className="group border-b border-white/20 pb-12 flex flex-col md:flex-row justify-between items-start md:items-end hover:border-white transition-colors duration-500 cursor-pointer"
              >
                <div className="space-y-4">
                  <span className="text-white/50 font-mono text-2xl">{role.icon}</span>
                  <h3 className="text-5xl md:text-8xl font-display font-medium group-hover:pl-4 transition-all duration-500">{role.name}</h3>
                </div>
                <div className="flex flex-col items-end mt-8 md:mt-0 text-right opacity-50 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-white/60 tracking-widest uppercase text-sm">{role.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 md:py-48 px-6 bg-bg-primary">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-medium leading-tight"
          >
            Let’s take that perfect domain before someone else does.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="mailto:hello@emadconsultant.com"
              className="inline-block px-10 py-5 bg-black text-white text-lg font-medium rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Get started now
            </Link>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 pt-12 text-sm font-medium text-text-muted">
            <a href="https://x.com/emadsoualhi" target="_blank" className="hover:text-black transition-colors">Twitter</a>
            <span className="hidden md:inline">|</span>
            <a href="https://www.linkedin.com/in/imadsoualhi/" target="_blank" className="hover:text-black transition-colors">LinkedIn</a>
            <span className="hidden md:inline">|</span>
            <a href="mailto:hello@emadconsultant.com" className="hover:text-black transition-colors">hello@emadconsultant.com</a>
            <span className="hidden md:inline">|</span>
            <a href="tel:+447453423436" className="hover:text-black transition-colors">+44 7453 423436</a>
          </div>
        </div>
      </section>
    </main>
  );
}
