"use client";

import { useState, useEffect } from "react";
// import { ReactLenis } from '@studio-freight/react-lenis';
import CosmicBackground from "../components/CosmicBackground";
import Hero from "../components/Hero";
import VelocityMarquee from "../components/VelocityMarquee";
import NewsBento from "../components/NewsBento";
import MaskedText from "../components/MaskedText";
import ScrambleText from "../components/ScrambleText";
import Preloader from "../components/Preloader";
import ParallaxDrip from "../components/ParallaxDrip";
import ServicesList from "../components/ServicesList";
import ProjectShowcase from "../components/ProjectShowcase";
import ParallaxText from "../components/ParallaxText";
import { ArrowRight } from 'lucide-react';

// New Components
import Terminal from "../components/Terminal";

export default function Home() {
    return (
        <>
            <Preloader />
            <main className="bg-black text-white min-h-screen w-full overflow-x-hidden selection:bg-yellow-500 selection:text-black">
                <CosmicBackground />

                <Hero />

                <ParallaxDrip />

                <div className="relative z-10 bg-black/50 backdrop-blur-sm md:backdrop-blur-none">

                    {/* INTRO TEXT / REDESIGNED HERO */}
                    <section className="min-h-[70vh] flex flex-col justify-center items-center py-24 px-4 relative z-20">
                        <div className="relative w-full max-w-6xl mx-auto border border-white/20 bg-black/40 backdrop-blur-xl p-10 md:p-20 overflow-hidden">
                            
                            {/* Technical Corners and Lines */}
                            <div className="absolute top-0 left-0 w-12 h-12 border-l border-t border-white/40" />
                            <div className="absolute top-0 right-0 w-12 h-12 border-r border-t border-white/40" />
                            <div className="absolute bottom-0 left-0 w-12 h-12 border-l border-b border-white/40" />
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-r border-b border-white/40" />
                            {/* Crosshairs */}
                            <div className="absolute top-0 left-1/4 w-[1px] h-4 bg-white/30" />
                            <div className="absolute top-0 right-1/4 w-[1px] h-4 bg-white/30" />
                            <div className="absolute bottom-0 left-1/4 w-[1px] h-4 bg-white/30" />
                            <div className="absolute bottom-0 right-1/4 w-[1px] h-4 bg-white/30" />
                            <div className="absolute left-0 top-1/2 w-4 h-[1px] bg-white/30" />
                            <div className="absolute right-0 top-1/2 w-4 h-[1px] bg-white/30" />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* Top Badge */}
                                <ParallaxText speed={0.1}>
                                    <div className="mb-10 text-[10px] md:text-xs font-mono text-tech-blue border border-tech-blue/50 px-4 py-1.5 bg-tech-blue/10 rounded tracking-widest uppercase shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                        POLE STUDIOS
                                    </div>
                                </ParallaxText>

                                {/* Main Title */}
                                <MaskedText className="mb-10">
                                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[1]">
                                        <ScrambleText>Creative Digital Agency</ScrambleText> <br />
                                        For <span className="text-tech-blue drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">Bold</span> Brands.
                                    </h1>
                                </MaskedText>

                                {/* Paragraph */}
                                <ParallaxText speed={-0.05}>
                                    <MaskedText>
                                        <p className="max-w-3xl text-sm md:text-lg text-neutral-400 font-light leading-relaxed mx-auto mb-12">
                                            POLE is a research-driven design facility. We architect digital infrastructure where technical precision meets artistic volatility. From experimental interfaces to robust platforms, we engineer the unseen.
                                        </p>
                                    </MaskedText>
                                </ParallaxText>

                                {/* Button */}
                                <ParallaxText speed={0.05}>
                                    <button 
                                        onClick={() => {
                                            const element = document.getElementById('services');
                                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="px-8 py-4 bg-tech-blue hover:bg-blue-400 text-black font-black uppercase tracking-widest text-sm transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] rounded-sm"
                                    >
                                        Explore Core Modules
                                    </button>
                                </ParallaxText>
                            </div>

                            {/* Watermark Background Text */}
                            <div className="absolute -bottom-8 md:-bottom-12 left-0 w-full overflow-hidden pointer-events-none select-none flex justify-center z-0">
                                <h2 className="text-7xl md:text-[140px] font-black uppercase whitespace-nowrap text-transparent stroke-text tracking-tighter opacity-30">
                                    SYSTEM // VISUAL_ENGINEERING
                                </h2>
                            </div>
                        </div>
                    </section>

                    {/* MARQUEE */}
                    <VelocityMarquee />

                    {/* SERVICES LIST (Interactive) */}
                    <ServicesList />

                    {/* PROJECT SHOWCASE */}
                    <ProjectShowcase />

                    {/* NEWS SECTION */}
                    <section id="news" className="py-24">
                        <MaskedText className="px-4 md:px-8 max-w-7xl mx-auto mb-20">
                            <h2 className="text-xs font-mono text-tech-blue mb-2">002 // DATA_STREAMS</h2>
                        </MaskedText>
                        <NewsBento />
                    </section>

                    {/* TERMINAL SECTION */}
                    <section className="py-12 px-4 max-w-4xl mx-auto">
                        <MaskedText className="mb-8">
                            <h2 className="text-xs font-mono text-tech-green mb-2">003 // SYSTEM_LOGS</h2>
                        </MaskedText>
                        <Terminal className="rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-tech-green/10" />
                    </section>

                    {/* CONTACT */}
                    <section id="contact" className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tech-blue/5 to-transparent pointer-events-none" />

                        <div className="text-center z-10 px-4 max-w-4xl mx-auto">
                            <div className="inline-block border border-tech-blue/30 px-3 py-1 mb-8">
                                <p className="text-xs font-mono text-tech-blue tracking-widest animate-pulse">CONNECTION_AVAILABLE</p>
                            </div>

                            <h2 className="text-5xl md:text-9xl font-black uppercase mb-8 tracking-tighter">
                                <ScrambleText>Collaborate</ScrambleText>
                            </h2>

                            <p className="text-neutral-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
                                Ready to initialize your next directive?
                                <br />Our frequencies are open.
                            </p>

                            <button
                                onClick={() => window.location.href = '/uplink'}
                                className="group relative px-16 py-6 border border-white/20 bg-transparent text-white text-xl font-bold uppercase tracking-widest overflow-hidden hover:border-tech-blue hover:text-tech-blue transition-all duration-300"
                            >
                                <span className="relative z-10 flex items-center gap-4">
                                    [ Initiate_Protocol ] <ArrowRight size={20} />
                                </span>
                                <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </button>

                            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                                <a href="https://instagram.com/thepolestudios" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-t border-white/10 pt-4 text-left">
                                    <span className="block mb-2 opacity-50">RELAY_01</span>
                                    Instagram
                                </a>
                                <a href="https://linkedin.com/company/thepolestudios" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-t border-white/10 pt-4 text-left">
                                    <span className="block mb-2 opacity-50">RELAY_02</span>
                                    LinkedIn
                                </a>
                                <a href="mailto:teams@polestudios.in" className="hover:text-white transition-colors border-t border-white/10 pt-4 text-left">
                                    <span className="block mb-2 opacity-50">RELAY_03</span>
                                    Email
                                </a>
                                <a href="tel:+919337346497" className="hover:text-white transition-colors border-t border-white/10 pt-4 text-left">
                                    <span className="block mb-2 opacity-50">RELAY_04</span>
                                    Phone
                                </a>
                            </div>

                            <div className="mt-24 flex justify-between w-full border-t border-white/10 pt-8 text-xs font-mono text-neutral-600">
                                <span>POLE SYSTEM © 2025</span>
                                <span>SECURE_CONNECTION</span>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
