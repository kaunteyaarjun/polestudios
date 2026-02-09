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

                <div className="border border-white/10 bg-white/5 rounded-2xl p-12 text-center">
                    <p className="font-mono text-neutral-400 mb-4">
                        [ SYSTEM NOTICE ]
                    </p>
                    <h3 className="text-3xl font-bold uppercase mb-4">
                        Data Compiling...
                    </h3>
                    <p className="text-neutral-500 max-w-lg mx-auto">
                        Detailed analysis logs and project breakdowns are currently being declassified. Check back soon for full access.
                    </p>
                </div>
            </section>
        </main>
    );
}
