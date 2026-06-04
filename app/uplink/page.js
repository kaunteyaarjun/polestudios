"use client";
import CosmicBackground from "../../components/CosmicBackground";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Instagram, Linkedin, Mail, Send, Phone, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const links = [
    {
        label: "Instagram",
        sub: "@thepolestudios",
        url: "https://instagram.com/thepolestudios",
        icon: Instagram,
        color: "text-pink-500"
    },
    {
        label: "Email",
        sub: "teams@polestudios.in",
        url: "mailto:teams@polestudios.in",
        icon: Mail,
        color: "text-white"
    },
    {
        label: "Phone",
        sub: "+91 93373 46497",
        url: "tel:+919337346497",
        icon: Phone,
        color: "text-green-500"
    },
    {
        label: "LinkedIn",
        sub: "Connect Professionally",
        url: "https://linkedin.com/company/thepolestudios",
        icon: Linkedin,
        color: "text-blue-500"
    }
];

export default function UplinkPage() {
    const [showForm, setShowForm] = useState(false);

    const sendWhatsApp = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("user_name");
        const email = formData.get("user_email");
        const message = formData.get("message");

        // Construct the custom WhatsApp template
        const template = `*New Secure Transmission*\n\n*Identity:* ${name}\n*Frequency:* ${email}\n\n*Payload:*\n${message}`;
        const encodedText = encodeURIComponent(template);

        // Open WhatsApp with the pre-filled message
        window.open(`https://wa.me/919337346497?text=${encodedText}`, '_blank');
        
        // Close the modal
        setShowForm(false);
    };

    return (
        <main className="bg-black text-white min-h-screen w-full overflow-x-hidden selection:bg-white selection:text-black flex flex-col items-center justify-center relative">
            <CosmicBackground />

            <div className="relative z-10 w-full max-w-md px-6 py-12 flex flex-col items-center">

                {/* Profile / Logo */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.8 }}
                    className="w-24 h-24 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-tech-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img src="/polelogo.png" alt="POLE" className="w-16 h-16 object-contain relative z-10" />
                </motion.div>

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-black uppercase tracking-tight mb-2">
                        POLE <span className="text-transparent stroke-text">SYSTEMS</span>
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-xs font-mono text-neutral-500">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span>OPERATIONAL // ONLINE</span>
                    </div>
                </div>

                {/* Links */}
                <div className="w-full space-y-4">
                    {links.map((link, i) => (
                        <motion.a
                            key={i}
                            href={link.url}
                            target={link.url.startsWith('http') ? "_blank" : "_self"}
                            rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 + 0.2 }}
                            className="group flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all active:scale-[0.98]"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-2 rounded-lg bg-black/50 border border-white/5 ${link.color} group-hover:scale-110 transition-transform`}>
                                    <link.icon size={18} />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-sm tracking-wide">{link.label}</div>
                                    <div className="text-[10px] font-mono text-neutral-500 uppercase">{link.sub}</div>
                                </div>
                            </div>
                            <ExternalLink size={14} className="opacity-0 group-hover:opacity-50 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </motion.a>
                    ))}

                    {/* Contact Trigger -> Opens Modal */}
                    <motion.button
                        onClick={() => setShowForm(true)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="w-full group flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-tech-blue/10 hover:border-tech-blue/50 transition-all active:scale-[0.98] cursor-pointer"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-black/50 border border-white/5 text-gray-400 group-hover:text-tech-blue transition-colors">
                                <MessageCircle size={18} />
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-sm tracking-wide text-gray-300 group-hover:text-tech-blue transition-colors">WhatsApp Secure Line</div>
                                <div className="text-[10px] font-mono text-neutral-500 uppercase">Send Encrypted Message</div>
                            </div>
                        </div>
                        <Send size={14} className="text-gray-500 group-hover:text-tech-blue -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </motion.button>
                </div>

                {/* Footer */}
                <div className="mt-12 text-center">
                    <p className="text-[10px] font-mono text-neutral-600">
                        EST. 2025 // SECURE_UPLINK_ESTABLISHED
                    </p>
                </div>

            </div>

            {/* Contact Modal */}
            <AnimatePresence>
                {showForm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="w-full max-w-md bg-[#050505] border border-white/10 rounded-2xl p-6 relative shadow-2xl shadow-tech-blue/10"
                        >
                            <button
                                onClick={() => setShowForm(false)}
                                className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <h2 className="text-xl font-bold uppercase mb-1">Transmit Data</h2>
                            <p className="text-xs font-mono text-neutral-500 mb-6">SECURE CHANNEL VIA WHATSAPP</p>

                            <form onSubmit={sendWhatsApp} className="space-y-4">
                                <div>
                                    <label className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">Identity</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm focus:outline-none focus:border-tech-blue transition-colors placeholder:text-neutral-700"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">Frequency Address</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm focus:outline-none focus:border-tech-blue transition-colors placeholder:text-neutral-700"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">Payload</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm focus:outline-none focus:border-tech-blue transition-colors placeholder:text-neutral-700 resize-none"
                                        placeholder="Enter your message..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-white text-black font-bold uppercase py-3 rounded-lg hover:bg-tech-blue hover:text-white transition-all flex items-center justify-center gap-2 mt-4"
                                >
                                    <MessageCircle size={16} />
                                    Send via WhatsApp
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
