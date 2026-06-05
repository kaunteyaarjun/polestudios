import CosmicBackground from "../../components/CosmicBackground";
import MaskedText from "../../components/MaskedText";
import ScrambleText from "../../components/ScrambleText";
import { blogs } from "../../data/blogs";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
    title: "Intelligence Logs | Pole Studios",
    description: "Read the latest research, thoughts, and observation logs from Pole Studios on Web Design, SaaS, and AI.",
};

export default function BlogsIndex() {
    return (
        <main className="bg-black text-white min-h-screen w-full overflow-x-hidden pt-32 pb-24 selection:bg-tech-blue selection:text-black">
            <CosmicBackground />
            
            <div className="relative z-10 px-4 md:px-8 max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div>
                        <MaskedText>
                            <h2 className="text-sm font-mono text-tech-blue mb-2 tracking-widest">[INTELLIGENCE_LOGS]</h2>
                        </MaskedText>
                        <MaskedText>
                            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">
                                <ScrambleText>Research</ScrambleText> <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-white/50">Archive</span>
                            </h1>
                        </MaskedText>
                    </div>
                    <div className="text-left md:text-right">
                        <p className="text-xs font-mono text-neutral-500">SYSTEM_STATUS: ONLINE</p>
                        <p className="text-xs font-mono text-neutral-500">ENTRIES_FOUND: {blogs.length}</p>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((post, i) => (
                        <Link href={`/blogs/${post.slug}`} key={post.id}>
                            <div className="group relative h-[450px] border border-white/10 bg-white/5 backdrop-blur-sm hover:border-tech-blue/50 transition-all duration-500 overflow-hidden flex flex-col justify-end">
                                
                                {/* Technical Corners */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/30 group-hover:border-tech-blue transition-colors z-20" />
                                <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/30 group-hover:border-tech-blue transition-colors z-20" />
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/30 group-hover:border-tech-blue transition-colors z-20" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/30 group-hover:border-tech-blue transition-colors z-20" />

                                {/* Thumbnail */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={post.thumbnail}
                                        alt={post.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-70 scale-100 group-hover:scale-105"
                                    />
                                    {/* Scanline Overlay */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(0,255,255,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] pointer-events-none bg-[length:100%_4px,3px_100%]" />
                                    {/* Gradient to make text readable */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                                </div>

                                {/* Content Header (Top) */}
                                <div className="absolute top-4 left-4 right-4 z-20 flex justify-between">
                                    <span className="text-[10px] font-mono border border-white/20 px-2 py-1 bg-black/80 text-tech-blue">
                                        {post.category}
                                    </span>
                                    <span className="text-[10px] font-mono text-neutral-400 bg-black/50 px-2 py-1">
                                        {post.date}
                                    </span>
                                </div>

                                {/* Content Body (Bottom) */}
                                <div className="relative z-20 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-3 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-neutral-400 font-light mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {post.excerpt}
                                    </p>
                                    
                                    <div className="flex justify-between items-end border-t border-white/10 pt-4">
                                        <div className="text-[10px] font-mono text-neutral-500">
                                            READ_TIME: {post.readTime}
                                        </div>
                                        <div className="p-2 bg-white/5 border border-white/20 group-hover:bg-tech-blue group-hover:text-black group-hover:border-tech-blue transition-colors rounded">
                                            <ArrowUpRight size={16} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
