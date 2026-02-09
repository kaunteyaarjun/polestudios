'use client';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ArrowRight, ExternalLink } from 'lucide-react';
import MaskedText from './MaskedText';
import ScrambleText from './ScrambleText';

const projects = [
    {
        id: "somya-dev",
        title: "Somya's Portfolio",
        category: "Personal Brand",
        year: "2024",
        thumbnail: "https://images.unsplash.com/photo-1545665277-59374f9d852a?w=800&auto=format&fit=crop&q=80",
        video: "#",
        challenge: "Creating a unique personal brand identity.",
        solution: "Developed a high-performance portfolio with custom animations.",
        results: "Increased visibility and engagement.",
        metrics: [
            { label: "Performance", value: "100%" },
            { label: "Design", value: "Custom" },
            { label: "Tech", value: "Next.js" },
            { label: "Vibe", value: "Chill" }
        ],
        tech: ["React", "Next.js", "Tailwind", "Framer Motion"],
        link: "https://somya.pages.dev"
    },
    {
        id: "real-rising-star",
        title: "Real Rising Star",
        category: "Digital Platform",
        year: "2024",
        thumbnail: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=800&auto=format&fit=crop&q=80",
        video: "#",
        challenge: "Building a platform for rising stars.",
        solution: "Integrated dynamic content delivery and modern UI.",
        results: "Growing user base and engagement.",
        metrics: [
            { label: "Users", value: "Growing" },
            { label: "Uptime", value: "99.9%" },
            { label: "Speed", value: "Fast" },
            { label: "Rating", value: "5.0" }
        ],
        tech: ["React", "Vite", "GSAP", "Tailwind"],
        link: "https://realrisingstar.pages.dev"
    },
    {
        id: 1,
        title: "Kaunteya Studios",
        category: "Digital Experience",
        year: "2024",
        thumbnail: "/projects/kaunteya-preview.png",
        video: "#",
        challenge: "Studio needed a high-performance portfolio with immersive animations.",
        solution: "Engineered a custom WebGL framework with seamless page transitions.",
        results: "Award-winning design, 40% increase in client inquiries.",
        metrics: [
            { label: "Performance", value: "100%" },
            { label: "Engagement", value: "+40%" },
            { label: "Awards", value: "3" },
            { label: "Retention", value: "High" }
        ],
        tech: ["React", "Three.js", "GSAP", "Tailwind"],
        link: "https://resonant-fairy-f7f7f3.netlify.app/"
    },
    {
        id: 2,
        title: "Polarity Engine",
        category: "Discord Security & Design",
        year: "2024",
        thumbnail: "https://images.unsplash.com/photo-1614064641938-3e858a915f32?w=800&auto=format&fit=crop&q=80",
        video: "#",
        challenge: "Discord communities needed automated security combined with custom design generation.",
        solution: "Built a multipurpose bot with AI-prompted template generation and nuking protection.",
        results: "Protected 500+ servers, generated 10k+ templates, 99.9% threat mitigation.",
        metrics: [
            { label: "Servers Protected", value: "500+" },
            { label: "Templates Gen", value: "10K+" },
            { label: "Uptime", value: "99.9%" },
            { label: "Threats Blocked", value: "50K+" }
        ],
        tech: ["Discord.js", "Node.js", "OpenAI API", "Canvas"],
        link: "#"
    },
    {
        id: 3,
        title: "Pika Network",
        category: "Game Server Infrastructure",
        year: "2024",
        thumbnail: "/projects/pika-preview.png",
        video: "#",
        challenge: "Needed robust infrastructure for massive concurrent player base.",
        solution: "Optimized network stack and implemented custom anti-cheat heuristics.",
        results: "Supports thousands of concurrent players with minimal latency.",
        metrics: [
            { label: "Players", value: "10K+" },
            { label: "Uptime", value: "99.9%" },
            { label: "Latency", value: "<20ms" },
            { label: "Community", value: "Huge" }
        ],
        tech: ["Java", "Netty", "BungeeCord", "Redis"],
        link: "https://pika-network.net/"
    },
];

export default function ProjectShowcase() {
    const [selectedProject, setSelectedProject] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" ref={ref} className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Section Header */}
            <MaskedText className="mb-20">
                <h2 className="text-xs md:text-sm font-mono text-yellow-500 mb-4 opacity-70">
                    <ScrambleText>003 // CASE STUDIES</ScrambleText>
                </h2>
                <h3 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
                    Featured <br />
                    <span className="text-transparent stroke-text">Projects</span>
                </h3>
            </MaskedText>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                        onClick={() => setSelectedProject(project)}
                        className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-yellow-500/50 transition-all duration-500"
                    >
                        {/* Thumbnail Image */}
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${project.thumbnail})` }}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-mono text-yellow-500 px-3 py-1 border border-yellow-500/30 rounded-full">
                                    {project.category}
                                </span>
                                <span className="text-xs font-mono text-white/50">{project.year}</span>
                            </div>

                            <div>
                                <h4 className="text-4xl md:text-5xl font-black uppercase mb-4 group-hover:text-yellow-400 transition-colors">
                                    {project.title}
                                </h4>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.slice(0, 3).map((tech, i) => (
                                        <span key={i} className="text-xs font-mono text-white/60 bg-white/5 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="text-xs font-mono text-white/40">+{project.tech.length - 3}</span>
                                    )}
                                </div>

                                {/* CTA */}
                                <div className="flex items-center gap-2 text-white group-hover:text-yellow-400 transition-colors">
                                    <span className="text-sm font-mono uppercase tracking-wider">View Case Study</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </div>

                        {/* Hover Glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <div className="absolute inset-0 bg-yellow-500/10 blur-xl" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Case Study Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] overflow-y-auto"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-6xl mx-auto my-12 p-8 md:p-12"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-yellow-500 flex items-center justify-center transition-colors z-10"
                            >
                                <X className="text-white" />
                            </button>

                            {/* Modal Content */}
                            <div className="space-y-12">
                                {/* Hero Image */}
                                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                                    <img src={selectedProject.thumbnail} alt={selectedProject.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    <div className="absolute bottom-8 left-8">
                                        <span className="text-xs font-mono text-yellow-500 mb-2 block">{selectedProject.category}</span>
                                        <h2 className="text-5xl md:text-7xl font-black uppercase">{selectedProject.title}</h2>
                                    </div>
                                </div>

                                {/* Metrics */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {selectedProject.metrics.map((metric, i) => (
                                        <div key={i} className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                                            <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">
                                                {metric.value}
                                            </div>
                                            <div className="text-xs font-mono text-white/60 uppercase">
                                                {metric.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Case Study Details */}
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="space-y-4">
                                        <h3 className="text-yellow-500 font-mono text-sm uppercase tracking-wider">Challenge</h3>
                                        <p className="text-white/80 leading-relaxed">{selectedProject.challenge}</p>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-yellow-500 font-mono text-sm uppercase tracking-wider">Solution</h3>
                                        <p className="text-white/80 leading-relaxed">{selectedProject.solution}</p>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-yellow-500 font-mono text-sm uppercase tracking-wider">Results</h3>
                                        <p className="text-white/80 leading-relaxed">{selectedProject.results}</p>
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div className="space-y-4">
                                    <h3 className="text-yellow-500 font-mono text-sm uppercase tracking-wider">Technology Stack</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.tech.map((tech, i) => (
                                            <span key={i} className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-white font-mono text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* View Project CTA */}
                                <div className="flex justify-center pt-8">
                                    <a href={selectedProject.link} className="group flex items-center gap-3 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold uppercase rounded-full transition-colors">
                                        View Live Project
                                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
