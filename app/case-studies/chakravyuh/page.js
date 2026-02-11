"use client";

import CosmicBackground from "../../../components/CosmicBackground";
import MaskedText from "../../../components/MaskedText";
import ScrambleText from "../../../components/ScrambleText";
import Terminal from "../../../components/Terminal";
import { ArrowLeft } from 'lucide-react';

export default function ChakravyuhPage() {
    return (
        <main className="bg-black text-white min-h-screen w-full overflow-x-hidden selection:bg-red-500 selection:text-black pt-24">
            <CosmicBackground />

            <div className="max-w-4xl mx-auto px-4 relative z-10 pb-24">
                {/* Back Link */}
                <a href="/case-studies" className="inline-flex items-center gap-2 text-neutral-500 hover:text-white mb-12 transition-colors">
                    <ArrowLeft size={16} /> Back to Archives
                </a>

                {/* Header */}
                <header className="mb-20">
                    <div className="flex flex-wrap gap-4 mb-6 text-xs font-mono uppercase tracking-widest text-red-400">
                        <span className="border border-red-400/30 px-2 py-1 bg-red-400/10">Cybersecurity</span>
                        <span className="border border-red-400/30 px-2 py-1 bg-red-400/10">Data Visualization</span>
                        <span className="border border-red-400/30 px-2 py-1 bg-red-400/10">Live Prototype</span>
                    </div>
                    <MaskedText>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">
                            <ScrambleText>Chakravyuh</ScrambleText>
                        </h1>
                    </MaskedText>
                    <p className="text-xl text-neutral-400 font-light max-w-2xl">
                        The Infinite Honeypot. A network intrusion visualization system inspired by the legendary military formation.
                    </p>
                </header>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* Sidebar / Meta */}
                    <aside className="md:col-span-4 space-y-8">
                        <div>
                            <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Tech Stack</h3>
                            <ul className="text-sm font-light text-neutral-300 space-y-1">
                                <li>Python</li>
                                <li>Godot 4</li>
                                <li>Docker</li>
                                <li>WebSocket</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Status</h3>
                            <p className="text-sm font-light text-red-400">Live Prototype</p>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <article className="md:col-span-8 space-y-16">

                        {/* Challenge */}
                        <section>
                            <h3 className="text-2xl font-bold uppercase mb-4 text-white">The Challenge: Making Invisible Threats Visible</h3>
                            <p className="text-neutral-400 leading-relaxed mb-6">
                                Cybersecurity threats are often abstract lines of log data. Security teams struggle to visualize real-time attacks in a way that is intuitive and actionable. Standard honeypots capture data but fail to present the &quot;behavior&quot; of an attacker in a meaningful way.
                            </p>
                            <blockquote className="border-l-2 border-red-400 pl-6 py-2 my-8 text-lg font-light italic text-neutral-300">
                                &quot;Can we use game engine technology to visualize a network attack as a strategic military formation, trapping the hacker in real-time?&quot;
                            </blockquote>
                        </section>

                        {/* Solution */}
                        <section>
                            <h3 className="text-2xl font-bold uppercase mb-4 text-white">The Solution</h3>
                            <p className="text-neutral-400 leading-relaxed mb-6">
                                We built Chakravyuh, a next-generation honeypot inspired by the legendary military formation. It is a dual-system architecture:
                            </p>
                            <div className="space-y-4">
                                <div className="border-l-2 border-white/20 pl-4">
                                    <p className="text-white font-bold text-sm mb-1">The Backend Trap</p>
                                    <p className="text-neutral-400 text-sm">A Python-based decoy server that detects unauthorized port scans and directory traversal attempts.</p>
                                </div>
                                <div className="border-l-2 border-white/20 pl-4">
                                    <p className="text-white font-bold text-sm mb-1">The Frontend Engine</p>
                                    <p className="text-neutral-400 text-sm">A Godot 4-powered dashboard that renders the attack as a dynamic, spinning geometric web.</p>
                                </div>
                            </div>
                        </section>

                        {/* Capabilities */}
                        <section>
                            <h3 className="text-2xl font-bold uppercase mb-6 text-white">Key Capabilities</h3>

                            <div className="space-y-8">
                                <div className="border border-white/10 bg-white/5 p-6 rounded-lg">
                                    <h4 className="text-lg font-bold text-red-400 mb-2">1. The &quot;Infinite Loop&quot; Mechanism</h4>
                                    <p className="text-neutral-400 text-sm mb-4">Drawing from its mythological namesake, once an attacker enters the system, they cannot leave.</p>
                                    <div className="bg-black/50 p-4 rounded text-xs font-mono text-neutral-300 space-y-1">
                                        <p className="text-red-400 mb-1">$ intruder detected on port 22</p>
                                        <p className="opacity-70">&gt; Generating infinite directory tree...</p>
                                        <p className="opacity-70">&gt; Attacker script trapped in /fake/depth_2847/</p>
                                        <p className="opacity-70">&gt; Resources exhausting... logging methods</p>
                                        <p className="text-red-400 mt-2">STATUS: CONTAINED</p>
                                    </div>
                                </div>

                                <div className="border border-white/10 bg-white/5 p-6 rounded-lg">
                                    <h4 className="text-lg font-bold text-red-400 mb-2">2. Gamified Threat Visualization</h4>
                                    <p className="text-neutral-400 text-sm mb-4">Instead of reading text logs, security analysts watch the battle unfold.</p>
                                    <ul className="text-neutral-400 text-sm space-y-2 list-disc list-inside">
                                        <li><span className="text-white">Real-Time Rendering:</span> The Godot engine visualizes the network perimeter as a spinning, multi-layered wheel.</li>
                                        <li><span className="text-white">Intruder Tracking:</span> Attackers are rendered as &quot;Red Dots&quot; attempting to breach the layers. Their movement speed and depth correspond to attack severity.</li>
                                    </ul>
                                </div>

                                <div className="border border-white/10 bg-white/5 p-6 rounded-lg">
                                    <h4 className="text-lg font-bold text-red-400 mb-2">3. Live Forensics</h4>
                                    <ul className="text-neutral-400 text-sm space-y-2 list-disc list-inside">
                                        <li><span className="text-white">Payload Analysis:</span> Captures and sandboxes malicious payloads for later analysis.</li>
                                        <li><span className="text-white">Geo-Tagging:</span> Instantly maps the attacker&apos;s origin IP to the visual dashboard.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Technical Deep Dive */}
                        <section>
                            <h3 className="text-xs font-mono text-red-400 mb-4 border-b border-red-400/20 pb-2">004 // TECHNICAL_DEEP_DIVE</h3>
                            <div className="space-y-3 text-neutral-400 text-sm mb-6">
                                <p><span className="text-white font-bold">Core Logic (Python):</span> Custom TCP/IP listeners designed to mimic vulnerable services (SSH, FTP) to lure attackers.</p>
                                <p><span className="text-white font-bold">Visualization (Godot 4):</span> Utilized the game engine&apos;s particle system and 2D physics to create a fluid, high-performance dashboard running in browser via WebAssembly.</p>
                                <p><span className="text-white font-bold">Communication:</span> WebSocket bridge for sub-millisecond data transfer between the trap and the visualizer.</p>
                            </div>
                            <Terminal className="h-64 rounded-lg border border-white/10 shadow-2xl shadow-red-500/10" />
                        </section>

                        {/* Impact */}
                        <section>
                            <h3 className="text-2xl font-bold uppercase mb-4 text-white">The Impact</h3>
                            <ul className="list-disc list-inside space-y-2 text-neutral-400">
                                <li><span className="text-white font-bold">Enhanced Situational Awareness:</span> Transformed boring server logs into a &quot;War Room&quot; style display.</li>
                                <li><span className="text-white font-bold">Educational Value:</span> Used to demonstrate network defense concepts to non-technical stakeholders.</li>
                                <li><span className="text-white font-bold">Innovation:</span> Proved that Game Development tech (Godot) has powerful applications in Enterprise Security interfaces.</li>
                            </ul>
                        </section>

                    </article>
                </div>
            </div>
        </main>
    );
}
