"use client";

import CosmicBackground from "./CosmicBackground";
import MaskedText from "./MaskedText";
import ScrambleText from "./ScrambleText";
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicePage({ title, subtitle, description, features, process, faqs, ctaText }) {
    return (
        <main className="bg-black text-white min-h-screen w-full overflow-x-hidden selection:bg-tech-blue selection:text-black pt-24">
            <CosmicBackground />

            {/* Hero Section */}
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

                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={() => window.location.href = '/uplink'}
                        className="group relative px-8 py-4 border border-white/20 bg-transparent text-white font-bold uppercase tracking-widest overflow-hidden hover:border-tech-blue hover:text-tech-blue transition-all duration-300"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            {ctaText || 'Start Project'} <ArrowRight size={18} />
                        </span>
                        <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </button>
                    <a
                        href="tel:+919337346497"
                        className="group relative px-8 py-4 border border-white/10 bg-transparent text-neutral-400 font-mono text-sm uppercase tracking-widest overflow-hidden hover:border-tech-green hover:text-tech-green transition-all duration-300 flex items-center justify-center gap-3"
                    >
                        <Phone size={16} /> +91 93373 46497
                    </a>
                </div>
            </section>

            {/* Features Grid */}
            {features && features.length > 0 && (
                <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
                    <div className="mb-16 border-b border-white/10 pb-6">
                        <h2 className="text-xs font-mono text-tech-blue mb-2 tracking-widest">[CAPABILITIES]</h2>
                        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">What We Deliver</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, idx) => (
                            <motion.article
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group border border-white/10 bg-white/5 p-8 rounded-xl hover:border-tech-blue/50 transition-colors"
                            >
                                <div className="text-3xl mb-4">{feature.icon}</div>
                                <h4 className="text-lg font-bold uppercase mb-3 group-hover:text-tech-blue transition-colors">{feature.title}</h4>
                                <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
                            </motion.article>
                        ))}
                    </div>
                </section>
            )}

            {/* Process Section */}
            {process && process.length > 0 && (
                <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto relative z-10">
                    <div className="mb-16 border-b border-white/10 pb-6">
                        <h2 className="text-xs font-mono text-tech-green mb-2 tracking-widest">[METHODOLOGY]</h2>
                        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Our Process</h3>
                    </div>

                    <div className="space-y-0">
                        {process.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex gap-8 group"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full border border-tech-green/50 bg-tech-green/10 flex items-center justify-center text-tech-green font-mono text-sm font-bold shrink-0">
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>
                                    {idx < process.length - 1 && <div className="w-[1px] h-full bg-white/10 min-h-[60px]" />}
                                </div>
                                <div className="pb-12">
                                    <h4 className="text-xl font-bold uppercase mb-2 group-hover:text-tech-green transition-colors">{step.title}</h4>
                                    <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* FAQ Section — Critical for AEO/GEO */}
            {faqs && faqs.length > 0 && (
                <section className="py-24 px-4 md:px-8 max-w-4xl mx-auto relative z-10">
                    <div className="mb-16 border-b border-white/10 pb-6">
                        <h2 className="text-xs font-mono text-tech-amber mb-2 tracking-widest">[FREQUENTLY_ASKED]</h2>
                        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Common Questions</h3>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <details
                                key={idx}
                                className="group border border-white/10 bg-white/5 rounded-xl overflow-hidden hover:border-tech-amber/30 transition-colors"
                            >
                                <summary className="px-6 py-5 cursor-pointer flex items-center justify-between text-white font-bold text-base md:text-lg list-none select-none">
                                    <span>{faq.question}</span>
                                    <span className="text-tech-amber font-mono text-xl group-open:rotate-45 transition-transform duration-300 shrink-0 ml-4">+</span>
                                </summary>
                                <div className="px-6 pb-6 text-neutral-400 leading-relaxed text-sm border-t border-white/5 pt-4">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </section>
            )}

            {/* Bottom CTA */}
            <section className="py-24 px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
                    Ready to Start?
                </h2>
                <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                    Let&apos;s discuss your project. We serve businesses across India — Delhi, Mumbai, Bangalore, Hyderabad, and beyond.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => window.location.href = '/uplink'}
                        className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-tech-blue hover:text-white transition-all"
                    >
                        Get a Quote
                    </button>
                    <a
                        href="tel:+919337346497"
                        className="px-10 py-4 border border-white/20 text-white font-mono text-sm uppercase tracking-widest hover:border-tech-green hover:text-tech-green transition-all flex items-center justify-center gap-3"
                    >
                        <Phone size={16} /> Call Now
                    </a>
                </div>
            </section>
        </main>
    );
}
