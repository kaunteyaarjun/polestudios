"use client";
import CosmicBackground from "../../components/CosmicBackground";
import MaskedText from "../../components/MaskedText";
import ScrambleText from "../../components/ScrambleText";
import { motion } from "framer-motion";

const team = [
    {
        name: "Enc_Arjun",
        role: "Lead Engineer",
        specialty: "System Core",
        image: "/team/hero_engineer.jpg" // Renamed to hero_ to force update
    },
    {
        name: "Architect_Rael",
        role: "Lead Architect",
        specialty: "Infrastructure",
        image: "/team/hero_architect.jpg" // Renamed to hero_ to force update
    },
    {
        name: "P36rh_Design",
        role: "Creative Director",
        specialty: "Visual Synthesis",
        image: "/team/hero_director.jpg" // Renamed to hero_ to force update
    }
];

export default function TeamPage() {
    return (
        <main className="bg-black text-white min-h-screen w-full overflow-x-hidden selection:bg-tech-purple selection:text-black">
            <CosmicBackground />

            <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                <MaskedText className="mb-20">
                    <div className="mb-4 text-[10px] font-mono text-tech-purple border border-tech-purple/30 px-2 py-1 bg-tech-purple/5 inline-block">
                        // PERSONNEL_MANIFEST
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter">
                        The <br />
                        <span className="text-transparent stroke-text">Unit</span>
                    </h1>
                </MaskedText>

                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, i) => (
                        <motion.div
                            key={member.name} // Changed key to name for stability
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative h-[400px] w-full overflow-hidden mb-6 border border-white/10 group-hover:border-tech-purple/50 transition-colors">
                                <div className="absolute inset-0 bg-gray-900 animate-pulse z-0" />
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="relative z-10 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                <div className="absolute bottom-4 left-4 z-20">
                                    <div className="text-xs font-mono text-tech-purple mb-1">{member.specialty}</div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold uppercase mb-1 group-hover:text-tech-purple transition-colors">
                                <ScrambleText>{member.name}</ScrambleText>
                            </h3>
                            <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
                                {member.role}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
