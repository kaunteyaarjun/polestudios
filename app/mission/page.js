"use client";
import CosmicBackground from "../../components/CosmicBackground";
import MaskedText from "../../components/MaskedText";
import ScrambleText from "../../components/ScrambleText";
import ParallaxText from "../../components/ParallaxText";
import { motion } from "framer-motion";

export default function MissionPage() {
    return (
        <main className="bg-black text-white min-h-screen w-full overflow-x-hidden selection:bg-tech-blue selection:text-black">
            <CosmicBackground />

            <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                <MaskedText className="mb-12">
                    <div className="mb-4 text-[10px] font-mono text-tech-blue border border-tech-blue/30 px-2 py-1 bg-tech-blue/5 inline-block">
                        // MISSION_LOG_01
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8">
                        Our <br />
                        <span className="text-transparent stroke-text">Mission</span>
                    </h1>
                </MaskedText>

                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <MaskedText>
                            <h2 className="text-2xl font-mono text-tech-blue mb-6">
                                <ScrambleText>Constructing the Unseen</ScrambleText>
                            </h2>
                            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                                We believe that the digital realm is not just a reflection of reality, but a new dimension of existence.
                                Our mission is to architect infrastructures that bridge the gap between human intent and machine execution.
                            </p>
                            <p className="text-neutral-400 text-lg leading-relaxed">
                                Through precision engineering and artistic volatility, we create experiences that are felt, not just seen.
                            </p>
                        </MaskedText>
                    </div>
                    <div className="space-y-8">
                        <div className="border-l-2 border-white/10 pl-6 hover:border-tech-blue transition-colors duration-300">
                            <h3 className="text-xl font-bold uppercase mb-2">Precision</h3>
                            <p className="text-sm text-neutral-500 font-mono">
                                Every pixel, every line of code, executed with mathematical exactness.
                            </p>
                        </div>
                        <div className="border-l-2 border-white/10 pl-6 hover:border-tech-green transition-colors duration-300">
                            <h3 className="text-xl font-bold uppercase mb-2">Volatility</h3>
                            <p className="text-sm text-neutral-500 font-mono">
                                Embracing the chaos of innovation to forge new paradigms.
                            </p>
                        </div>
                        <div className="border-l-2 border-white/10 pl-6 hover:border-tech-amber transition-colors duration-300">
                            <h3 className="text-xl font-bold uppercase mb-2">Immersion</h3>
                            <p className="text-sm text-neutral-500 font-mono">
                                Designing for depth, creating worlds within screens.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <ParallaxText baseVelocity={2}>
                    <span className="text-8xl md:text-[12rem] font-black text-white/5 uppercase mr-12">
                        Forward Protocol
                    </span>
                </ParallaxText>
            </section>
        </main>
    );
}
