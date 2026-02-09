"use client";
import CosmicBackground from "../../components/CosmicBackground";
import MaskedText from "../../components/MaskedText";
import ScrambleText from "../../components/ScrambleText";
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
    {
        id: "somya-dev",
        title: "Somya's Portfolio",
        category: "Personal Brand",
        year: "2024",
        thumbnail: "https://images.unsplash.com/photo-1545665277-59374f9d852a?w=800&auto=format&fit=crop&q=80",
        // Placeholder image since we don't have the real screenshot yet
        tech: ["React", "Next.js", "Tailwind"],
        link: "https://somya.pages.dev"
    },
    {
        id: "real-rising-star",
        title: "Real Rising Star",
        category: "Digital Platform",
        year: "2024",
        thumbnail: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=800&auto=format&fit=crop&q=80",
        tech: ["React", "Vite", "GSAP"],
        link: "https://realrisingstar.pages.dev"
    },
    {
        id: 1,
        title: "Kaunteya Studios",
        category: "Digital Experience",
        year: "2024",
        thumbnail: "/projects/kaunteya-preview.png",
        tech: ["React", "Three.js", "GSAP", "Tailwind"],
        link: "https://resonant-fairy-f7f7f3.netlify.app/"
    },
    {
        id: 3,
        title: "Pika Network",
        category: "Game Server",
        year: "2024",
        thumbnail: "/projects/pika-preview.png",
        tech: ["Java", "Netty", "Redis"],
        link: "https://pika-network.net/"
    }
];

export default function FeaturedPage() {
    return (
        <main className="bg-black text-white min-h-screen w-full overflow-x-hidden selection:bg-tech-amber selection:text-black">
            <CosmicBackground />

            <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
                <MaskedText className="mb-20">
                    <div className="mb-4 text-[10px] font-mono text-tech-amber border border-tech-amber/30 px-2 py-1 bg-tech-amber/5 inline-block">
                        // SELECTED_WORKS
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter">
                        Featured <br />
                        <span className="text-transparent stroke-text">Projects</span>
                    </h1>
                </MaskedText>

                <div className="grid grid-cols-1 gap-12">
                    {projects.map((project, idx) => (
                        <ProjectCard key={project.id} project={project} index={idx} />
                    ))}
                </div>
            </section>
        </main>
    );
}

function ProjectCard({ project, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative border border-white/10 rounded-2xl overflow-hidden hover:border-tech-amber/50 transition-colors bg-white/5"
        >
            <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[300px] md:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                        style={{ backgroundImage: `url(${project.thumbnail})` }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-xs font-mono text-tech-amber px-3 py-1 border border-tech-amber/30 rounded-full">
                            {project.category}
                        </span>
                        <span className="text-xs font-mono text-white/50">{project.year}</span>
                    </div>

                    <h2 className="text-4xl font-black uppercase mb-4 group-hover:text-tech-amber transition-colors">
                        {project.title}
                    </h2>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t, i) => (
                            <span key={i} className="text-xs font-mono text-white/60 bg-black/40 px-2 py-1 rounded">
                                {t}
                            </span>
                        ))}
                    </div>

                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-wider hover:text-tech-amber transition-colors group/link">
                        View Project
                        <ExternalLink size={16} className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
