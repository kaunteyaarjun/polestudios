'use client';

import { useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import ServiceIcon from './ServiceIcon';

const services = [
    {
        number: "01",
        title: "Branding & Design",
        description: "Identity, UI/UX.",
        features: ["Visual Identity", "UI/UX Design", "Brand Strategy"],
        type: "brand-strategy",
        href: "/branding"
    },
    {
        number: "02",
        title: "Web & Creative Dev",
        description: "Websites, Integrated Campaigns.",
        features: ["Next.js/React", "WebGL", "Creative Coding"],
        type: "web-development",
        href: "/web-design"
    },
    {
        number: "03",
        title: "SaaS & Automation",
        description: "AI Agents, Custom Software.",
        features: ["AI Integration", "Process Automation", "Custom SaaS"],
        type: "saas-automation",
        href: "/saas-automation"
    },
    {
        number: "04",
        title: "SEO & Growth",
        description: "Search Intelligence.",
        features: ["Technical SEO", "Growth Marketing", "Analytics"],
        type: "seo-growth",
        href: "/seo"
    }
];

export default function ServicesList() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    const handleMouseMove = (e) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto cursor-none z-30" // Increased Z-index
        >
            <div className="mb-20 border-b border-white/10 pb-8 flex justify-between items-end">
                <div>
                    <h2 className="text-xs font-mono text-tech-blue mb-2 tracking-widest">[SYSTEM_CAPABILITIES]</h2>
                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                        Core Modules
                    </h3>
                </div>
                <div className="hidden md:block text-right">
                    <p className="text-xs font-mono text-neutral-500">AVAILABLE_SERVICES: 04</p>
                </div>
            </div>

            <div className="flex flex-col">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => window.location.href = service.href}
                        className={`group relative border-b border-white/10 py-12 transition-all duration-300 cursor-pointer ${hoveredIndex !== null && hoveredIndex !== idx ? 'opacity-30' : 'opacity-100'}`}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 px-4 group-hover:px-8 transition-all duration-300">
                            <span className="text-xs font-mono text-neutral-600 mb-2 md:mb-0">0{service.number}</span>
                            <h4 className="text-3xl md:text-6xl font-bold uppercase tracking-tight text-white group-hover:text-tech-blue transition-colors duration-300">
                                {service.title}
                            </h4>
                            <div className="hidden md:flex gap-4 text-xs font-mono text-neutral-500">
                                {service.features.map((f, i) => (
                                    <span key={i} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[50ms]">
                                        {f}
                                    </span>
                                ))}
                            </div>
                            <span className="md:hidden text-tech-blue text-xs mt-2">+ EXPAND</span>
                        </div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {hoveredIndex !== null && (
                    <motion.div
                        className="fixed top-0 left-0 w-[350px] h-[220px] pointer-events-none z-50 overflow-hidden bg-black/90 border border-tech-blue/30 backdrop-blur-md rounded-xl"
                        style={{
                            x: springX,
                            y: springY,
                            top: -110,
                            left: -175
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                    >
                        <ServiceIcon type={services[hoveredIndex].type} />
                        <div className="absolute inset-0 bg-tech-blue/5" />
                        {/* Corner Accents */}
                        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-tech-blue/50" />
                        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-tech-blue/50" />
                        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-tech-blue/50" />
                        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-tech-blue/50" />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
