import CosmicBackground from "../../../components/CosmicBackground";
import MaskedText from "../../../components/MaskedText";
import ScrambleText from "../../../components/ScrambleText";
import { blogs } from "../../../data/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";

export async function generateMetadata({ params }) {
    const post = blogs.find(b => b.slug === params.slug);
    if (!post) return { title: 'Not Found | Pole Studios' };
    
    return {
        title: `${post.title} | Intelligence Logs`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.thumbnail]
        }
    };
}

export default function BlogPost({ params }) {
    const post = blogs.find(b => b.slug === params.slug);
    
    if (!post) {
        notFound();
    }

    return (
        <main className="bg-black text-white min-h-screen w-full overflow-x-hidden pt-32 pb-24 selection:bg-tech-blue selection:text-black">
            <CosmicBackground />
            
            <article className="relative z-10 px-4 md:px-8 max-w-4xl mx-auto">
                
                {/* Back Navigation */}
                <div className="mb-12">
                    <Link href="/blogs" className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-tech-blue transition-colors">
                        <ArrowLeft size={14} />
                        [RETURN_TO_ARCHIVE]
                    </Link>
                </div>

                {/* Article Header */}
                <header className="mb-16">
                    <div className="flex gap-4 mb-6">
                        <span className="text-[10px] font-mono border border-white/20 px-2 py-1 bg-white/5 text-tech-blue">
                            {post.category}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500 border border-transparent px-2 py-1">
                            {post.date}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500 border border-transparent px-2 py-1 hidden md:inline-block">
                            READ_TIME: {post.readTime}
                        </span>
                    </div>

                    <MaskedText>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
                            {post.title}
                        </h1>
                    </MaskedText>

                    <p className="text-xl text-neutral-400 font-light leading-relaxed border-l border-tech-blue/50 pl-6 py-2">
                        {post.excerpt}
                    </p>
                </header>

                {/* Hero Image */}
                <div className="relative w-full h-[300px] md:h-[500px] mb-20 border border-white/10 p-2 bg-white/5">
                    {/* Technical Corners */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/50 z-20" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/50 z-20" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/50 z-20" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/50 z-20" />
                    
                    <div className="relative w-full h-full overflow-hidden">
                        <Image 
                            src={post.thumbnail}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Scanline Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(0,255,255,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] pointer-events-none bg-[length:100%_4px,3px_100%]" />
                    </div>
                </div>

                {/* Markdown Content */}
                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-tighter prose-h1:text-4xl prose-h2:text-2xl prose-h2:text-tech-blue prose-h3:text-xl prose-p:text-neutral-300 prose-p:leading-relaxed prose-a:text-tech-blue hover:prose-a:text-white prose-blockquote:border-l-tech-green prose-blockquote:bg-white/5 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:font-mono prose-blockquote:text-sm prose-pre:bg-black prose-pre:border prose-pre:border-white/10">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>

                {/* Footer metadata */}
                <footer className="mt-24 pt-8 border-t border-white/10 flex justify-between items-center text-xs font-mono text-neutral-500">
                    <div>
                        AUTHOR: {post.author}
                    </div>
                    <div>
                        END_OF_LOG
                    </div>
                </footer>

            </article>
        </main>
    );
}
