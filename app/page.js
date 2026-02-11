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

                    {/* INTRO TEXT */}
                    <section className="min-h-[50vh] flex flex-col justify-center items-center py-24 px-4 text-center">
                        <ParallaxText speed={0.2}>
                            <div className="mb-4 text-[10px] font-mono text-tech-blue border border-tech-blue/30 px-2 py-1 bg-tech-blue/5 inline-block">
                                // MISSION_STATEMENT
                            </div>
                        </ParallaxText>
                        <MaskedText className="mb-6">
                            <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter">
                                <ScrambleText>Creative Digital Agency for</ScrambleText> <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-tech-green">Bold Brands.</span>
                            </h1>
                        </MaskedText>
                        <ParallaxText speed={-0.1}>
                            <MaskedText>
                                <p className="max-w-3xl text-lg md:text-2xl text-neutral-400 font-light leading-relaxed mx-auto">
                                    POLE is a research-driven design facility.
                                    We architect digital infrastructure where technical precision meets artistic volatility.
                                    From experimental interfaces to robust platforms, we engineer the unseen.
                                </p>
                            </MaskedText>
                        </ParallaxText>
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

                            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                                <a href="https://instagram.com/thepolestudios" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-t border-white/10 pt-4 text-left">
                                    <span className="block mb-2 opacity-50">RELAY_01</span>
                                    Instagram
                                </a>
                                <a href="https://linkedin.com/company/thepolestudios" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-t border-white/10 pt-4 text-left">
                                    <span className="block mb-2 opacity-50">RELAY_02</span>
                                    LinkedIn
                                </a>
                                <a href="mailto:polestudios@mail.ru" className="hover:text-white transition-colors border-t border-white/10 pt-4 text-left">
                                    <span className="block mb-2 opacity-50">RELAY_03</span>
                                    Email
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
