'use client';
import { motion } from 'framer-motion';
import VelocityMarquee from './VelocityMarquee';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black pt-20">
            {/* Global grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Top Right Circuit Accents */}
            <div className="absolute top-10 right-10 opacity-30 pointer-events-none hidden lg:block">
                <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M200 20 H100 L80 40 H0" stroke="white" strokeWidth="1" />
                    <path d="M200 30 H120 L100 50 H0" stroke="white" strokeWidth="1" />
                    <circle cx="100" cy="20" r="2" fill="white" />
                    <circle cx="120" cy="30" r="2" fill="white" />
                    <circle cx="80" cy="40" r="2" fill="white" />
                </svg>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16 items-center">

                {/* LEFT: Abstract Vector Logo Mark */}
                <div className="flex justify-center items-center relative w-full h-[300px] md:h-[500px]">
                    <svg viewBox="0 0 200 200" className="w-full h-full opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" xmlns="http://www.w3.org/2000/svg">
                        {/* Huge Crosshairs extending out */}
                        <line x1="100" y1="-500" x2="100" y2="700" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                        <line x1="-500" y1="100" x2="700" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

                        {/* Outer Circles */}
                        <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                        <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />

                        {/* Inner Spindle / Pole */}
                        <path d="M100 20 L112 100 L100 180 L88 100 Z" fill="none" stroke="white" strokeWidth="2" />
                        <path d="M100 30 L106 100 L100 170 L94 100 Z" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />

                        {/* Center core */}
                        <path d="M100 80 L105 100 L100 120 L95 100 Z" fill="white" />
                    </svg>
                </div>

                {/* RIGHT: Text Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 text-[10px] md:text-xs font-mono text-tech-blue border border-tech-blue/50 px-4 py-1.5 bg-tech-blue/10 rounded tracking-widest uppercase shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                    >
                        POLE STUDIOS
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[1] mb-6"
                    >
                        Creative Digital Agency <br className="hidden md:block" />
                        For <span className="text-tech-blue drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">Bold</span> Brands.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-xl text-sm md:text-base text-neutral-400 font-light leading-relaxed mb-10"
                    >
                        POLE is a research-driven design facility. We architect digital infrastructure where technical precision meets artistic volatility. From experimental interfaces to robust platforms, we engineer the unseen.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto"
                    >
                        {/* Button 1: Connect (Uplink) */}
                        <a 
                            href="/uplink"
                            className="group flex items-center justify-center gap-3 px-8 py-4 border border-white/20 hover:border-white/60 text-white font-bold uppercase tracking-widest text-sm transition-all duration-300 w-full sm:w-auto bg-black/50 backdrop-blur-sm"
                        >
                            Connect
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        {/* Button 2: Call */}
                        <a 
                            href="tel:+919337346497"
                            className="group flex items-center justify-center gap-3 px-8 py-4 border border-white/20 hover:border-tech-blue hover:text-tech-blue text-white/80 font-mono tracking-widest text-sm transition-all duration-300 w-full sm:w-auto bg-black/50 backdrop-blur-sm"
                        >
                            <Phone className="w-4 h-4" />
                            +91 93373 46497
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Moving Marquee Text */}
            <div className="absolute bottom-0 left-0 w-full z-0 opacity-40">
                <VelocityMarquee />
            </div>
        </section>
    );
}
