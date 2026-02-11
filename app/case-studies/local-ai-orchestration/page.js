"use client";

import CosmicBackground from "../../../components/CosmicBackground";
import MaskedText from "../../../components/MaskedText";
import ScrambleText from "../../../components/ScrambleText";
import Terminal from "../../../components/Terminal";
import { ArrowLeft } from 'lucide-react';

export default function LocalAIOrchestrationPage() {
    return (
        <main className="bg-black text-white min-h-screen w-full overflow-x-hidden selection:bg-tech-green selection:text-black pt-24">
            <CosmicBackground />

            <div className="max-w-4xl mx-auto px-4 relative z-10 pb-24">
                {/* Back Link */}
                <a href="/case-studies" className="inline-flex items-center gap-2 text-neutral-500 hover:text-white mb-12 transition-colors">
                    <ArrowLeft size={16} /> Back to Archives
                </a>

                {/* Header */}
                <header className="mb-20">
                    <div className="flex flex-wrap gap-4 mb-6 text-xs font-mono uppercase tracking-widest text-tech-green">
                        <span className="border border-tech-green/30 px-2 py-1 bg-tech-green/10">Internal R&D</span>
                        <span className="border border-tech-green/30 px-2 py-1 bg-tech-green/10">Proprietary Technology</span>
                        <span className="border border-tech-green/30 px-2 py-1 bg-tech-green/10">Live Beta</span>
                    </div>
                    <MaskedText>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">
                            <ScrambleText>Local AI Orchestration</ScrambleText>
                        </h1>
                    </MaskedText>
                    <p className="text-xl text-neutral-400 font-light max-w-2xl">
                        Cross-Platform Device Control Agent. A unified intelligence that sits 'above' the operating system.
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
                                <li>Quantized Local LLMs</li>
                                <li>WebSocket</li>
                                <li>Custom APIs</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">Status</h3>
                            <p className="text-sm font-light text-tech-green">Live Beta (Internal Only)</p>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <article className="md:col-span-8 space-y-16">

                        {/* Challenge */}
                        <section>
                            <h3 className="text-2xl font-bold uppercase mb-4 text-white">The Challenge: The "Ecosystem" Trap</h3>
                            <p className="text-neutral-400 leading-relaxed mb-6">
                                In a modern digital workflow, professionals switch between 3–5 devices daily (Desktop, Laptop, Tablet, Mobile). Each device is an isolated silo. Transferring data, executing synchronized tasks, or controlling a PC from a phone requires friction-heavy third-party apps or cloud services that compromise privacy.
                            </p>
                            <blockquote className="border-l-2 border-tech-green pl-6 py-2 my-8 text-lg font-light italic text-neutral-300">
                                "Can we build a unified intelligence that sits 'above' the operating system, controlling all devices through a single natural language interface without sending data to the cloud?"
                            </blockquote>
                        </section>

                        {/* Solution */}
                        <section>
                            <h3 className="text-2xl font-bold uppercase mb-4 text-white">The Solution</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                We developed a Local-First AI Agent designed to act as a central nervous system for digital hardware. Unlike standard voice assistants that rely on web searches, this system executes complex, multi-step system commands across a local network with zero latency.
                            </p>
                        </section>

                        {/* Capabilities */}
                        <section>
                            <h3 className="text-2xl font-bold uppercase mb-6 text-white">Key Capabilities</h3>

                            <div className="space-y-8">
                                <div className="border border-white/10 bg-white/5 p-6 rounded-lg">
                                    <h4 className="text-lg font-bold text-tech-green mb-2">1. Cross-Device Command Execution</h4>
                                    <p className="text-neutral-400 text-sm mb-4">The agent breaks the barrier between Windows, Linux, and Android.</p>
                                    <div className="bg-black/50 p-4 rounded text-xs font-mono text-neutral-300">
                                        <p className="text-tech-blue mb-1">$ User: "Prepare my workstation for deep-work."</p>
                                        <p className="opacity-70">&gt; Wake-on-LAN: PC initiated</p>
                                        <p className="opacity-70">&gt; Launching: VS Code, Docker</p>
                                        <p className="opacity-70">&gt; Mobile: Do Not Disturb ENABLED</p>
                                        <p className="opacity-70">&gt; Lighting: Focus Mode SET</p>
                                    </div>
                                </div>

                                <div className="border border-white/10 bg-white/5 p-6 rounded-lg">
                                    <h4 className="text-lg font-bold text-tech-green mb-2">2. Privacy-First Architecture</h4>
                                    <p className="text-neutral-400 text-sm">
                                        Utilizes optimized, quantized Local LLMs to parse natural language commands on-device. Ensures 100% uptime and zero data egress—no audio or command logs ever leave the local network.
                                    </p>
                                </div>

                                <div className="border border-white/10 bg-white/5 p-6 rounded-lg">
                                    <h4 className="text-lg font-bold text-tech-green mb-2">3. Context-Aware Automation</h4>
                                    <p className="text-neutral-400 text-sm">
                                        The model understands intent, not just keywords. It distinguishes between "Copy this to my phone" (clipboard sync) and "Open this on my phone" (remote app launch) based on user habits and active context.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Technical Deep Dive */}
                        <section>
                            <h3 className="text-xs font-mono text-tech-green mb-4 border-b border-tech-green/20 pb-2">004 // TECHNICAL_DEEP_DIVE</h3>
                            <p className="text-neutral-400 mb-6">
                                Natural Language Understanding (NLU): Fine-tuned lightweight models for command extraction with sub-200ms latency.
                                <br />Network Layer: Secure WebSocket communication with end-to-end encryption.
                            </p>
                            <Terminal className="h-64 rounded-lg border border-white/10 shadow-2xl" />
                        </section>

                        {/* Impact */}
                        <section>
                            <h3 className="text-2xl font-bold uppercase mb-4 text-white">The Impact</h3>
                            <ul className="list-disc list-inside space-y-2 text-neutral-400">
                                <li><span className="text-white font-bold">30% Reduction</span> in daily context-switching time for our developers.</li>
                                <li><span className="text-white font-bold">Total Privacy:</span> Complete compliance for sensitive workflows.</li>
                                <li><span className="text-white font-bold">Proof of Concept:</span> Demonstrated Pole Studios' ability to build complex, agentic AI systems that interact with hardware, not just text.</li>
                            </ul>
                        </section>

                    </article>
                </div>
            </div>
        </main>
    );
}
