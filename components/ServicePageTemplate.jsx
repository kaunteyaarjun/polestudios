"use client";

import CosmicBackground from "./CosmicBackground";
import MaskedText from "./MaskedText";
import ScrambleText from "./ScrambleText";
import { ArrowRight } from 'lucide-react';

export default function ServicePage({ title, subtitle, description }) {
    return (
        <main className="bg-black text-white min-h-screen w-full overflow-x-hidden selection:bg-tech-blue selection:text-black pt-24">
            <CosmicBackground />

            <section className="min-h-[60vh] flex flex-col justify-center items-center px-4 text-center relative z-10">
                <MaskedText className="mb-6">
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4">
                        <ScrambleText>{title}</ScrambleText>
                    </h1>
                </MaskedText>

                <MaskedText>
                    <p className="text-xl md:text-2xl text-tech-blue font-mono mb-8 max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                </MaskedText>

                <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed text-lg mb-12">
                    {description}
                </p>

                <button
                    onClick={() => window.location.href = '/uplink'}
                    className="group relative px-8 py-4 border border-white/20 bg-transparent text-white font-bold uppercase tracking-widest overflow-hidden hover:border-tech-blue hover:text-tech-blue transition-all duration-300"
                >
                    <span className="relative z-10 flex items-center gap-3">
                        Start Project <ArrowRight size={18} />
                    </span>
                    <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
            </section>
        </main>
    );
}
