"use client";

import { useState, useEffect, useRef } from 'react';
import { Minus, Square, X } from 'lucide-react';

export default function Terminal({ className = "" }) {
    const [lines, setLines] = useState([
        { text: "pole-website@1.0.0 dev", color: "text-white" },
        { text: "> next dev", color: "text-white" },
        { text: "ready - started server on 0.0.0.0:3000, url: http://localhost:3000", color: "text-green-400" },
        { text: "event - compiled client and server successfully in 1241 ms (154 modules)", color: "text-green-400" },
        { text: "wait  - compiling...", color: "text-white" },
        { text: "event - compiled successfully in 500 ms (154 modules)", color: "text-green-400" },
    ]);

    return (
        <div className={`w-full bg-[#09050F] border-t border-white/10 font-mono text-xs flex flex-col ${className}`}>
            <div className="flex items-center justify-between px-4 py-2 bg-[#1e1e1e] border-b border-white/10 select-none">
                <div className="flex gap-4 text-gray-400">
                    <span className="hover:text-white cursor-pointer border-b border-white text-white">TERMINAL</span>
                    <span className="hover:text-white cursor-pointer">OUTPUT</span>
                    <span className="hover:text-white cursor-pointer">DEBUG CONSOLE</span>
                    <span className="hover:text-white cursor-pointer">PROBLEMS</span>
                </div>
                <div className="flex gap-2 text-gray-400">
                    <Minus size={14} className="hover:text-white cursor-pointer" />
                    <Square size={12} className="hover:text-white cursor-pointer" />
                    <X size={14} className="hover:text-white cursor-pointer" />
                </div>
            </div>

            <div className="p-4 h-48 overflow-y-auto text-gray-300 font-mono leading-relaxed">
                {lines.map((line, i) => (
                    <div key={i} className={line.color}>
                        <span className="opacity-50 mr-2 text-[10px]">{new Date().toLocaleTimeString()}</span>
                        {line.text}
                    </div>
                ))}
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400">pole-website</span>
                    <span className="text-yellow-400">git:(main)</span>
                    <span className="animate-pulse">_</span>
                </div>
            </div>
        </div>
    );
}
