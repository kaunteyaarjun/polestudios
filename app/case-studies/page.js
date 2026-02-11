"use client";
import CosmicBackground from "../../components/CosmicBackground";
import MaskedText from "../../components/MaskedText";
import ScrambleText from "../../components/ScrambleText";
import { motion } from "framer-motion";

export default function CaseStudiesPage() {
    return (
        <main className="bg-black text-white min-h-screen w-full overflow-x-hidden selection:bg-tech-green selection:text-black">
            <CosmicBackground />

            <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                <MaskedText className="mb-20">
                    <div className="mb-4 text-[10px] font-mono text-tech-green border border-tech-green/30 px-2 py-1 bg-tech-green/5 inline-block">
                        // ARCHIVES
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter">
                        Case <br />
                        <span className="text-transparent stroke-text">Studies</span>
                    </h1>
                </MaskedText>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Case Study Card 1 */}
                    <div className="group relative border border-white/10 bg-white/5 rounded-2xl overflow-hidden hover:border-tech-green/50 transition-colors duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-tech-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="p-8 relative z-10 h-full flex flex-col">
                            <div className="mb-6 flex justify-between items-start">
                                <span className="text-xs font-mono text-tech-green border border-tech-green/30 px-2 py-1 rounded">INTERNAL R&D</span>
                                <span className="text-xs font-mono text-neutral-500">01</span>
                            </div>

                            <h3 className="text-3xl font-bold uppercase mb-4 group-hover:text-tech-green transition-colors">
                                Local AI Orchestration
                            </h3>

                            <p className="text-neutral-400 mb-8 flex-grow">
                                A proprietary, privacy-first AI agent aimed at unifying cross-platform device control without cloud dependencies.
                            </p>

                            <a href="/case-studies/local-ai-orchestration" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white group-hover:translate-x-2 transition-transform">
                                [ Read Analysis ]
                            </a>
                        </div>
                    </div>

                    {/* Case Study Card 2 */}
                    <div className="group relative border border-white/10 bg-white/5 rounded-2xl overflow-hidden hover:border-red-400/50 transition-colors duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="p-8 relative z-10 h-full flex flex-col">
                            <div className="mb-6 flex justify-between items-start">
                                <span className="text-xs font-mono text-red-400 border border-red-400/30 px-2 py-1 rounded">CYBERSECURITY</span>
                                <span className="text-xs font-mono text-neutral-500">02</span>
                            </div>

                            <h3 className="text-3xl font-bold uppercase mb-4 group-hover:text-red-400 transition-colors">
                                Chakravyuh
                            </h3>

                            <p className="text-neutral-400 mb-8 flex-grow">
                                A next-generation honeypot using Godot 4 to visualize network intrusions as a dynamic, strategic military formation in real-time.
                            </p>

                            <a href="/case-studies/chakravyuh" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white group-hover:translate-x-2 transition-transform">
                                [ Read Analysis ]
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
