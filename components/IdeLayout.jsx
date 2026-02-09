import Link from 'next/link';

export default function IdeLayout({ children, activeFile = "index.js" }) {
    return (
        <div className="flex h-screen w-full bg-[#0D0716] text-[#E2E8F0] font-mono overflow-hidden">
            {/* Sidebar (Activity Bar) */}
            <div className="w-12 border-r border-white/10 flex flex-col items-center py-4 gap-6 bg-[#09050F] z-50">
                <div className="w-6 h-6 rounded-md bg-tech-blue/20 flex items-center justify-center text-tech-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18" /></svg>
                </div>
                <div className="w-6 h-6 rounded-md text-gray-500 hover:text-white transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                </div>
                <div className="w-6 h-6 rounded-md text-gray-500 hover:text-white transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
                </div>
                <div className="mt-auto w-6 h-6 rounded-md text-gray-500 hover:text-white transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                </div>
            </div>

            {/* Sidebar (Explorer - Hidden on mobile) */}
            <div className="hidden md:flex w-64 border-r border-white/10 flex-col bg-[#0D0716]">
                <div className="p-3 text-xs font-bold tracking-widest text-gray-400 uppercase">Explorer</div>
                <div className="flex-1 overflow-y-auto">
                    <div className="px-2 py-1">
                        <div className="flex items-center gap-1 text-sm text-white font-bold mb-1">
                            <span className="text-[10px]">▼</span> POLE-WEBSITE
                        </div>
                        <div className="pl-4 flex flex-col gap-1">
                            <FileItem name="package.json" color="text-red-400" />
                            <FileItem name="README.md" color="text-blue-400" />
                            <div className="flex items-center gap-1 text-sm text-gray-300 mt-1">
                                <span className="text-[10px]">▼</span> app
                            </div>
                            <div className="pl-4 flex flex-col gap-1">
                                <FileItem name="page.js" color="text-yellow-400" active={activeFile === "page.js"} />
                                <FileItem name="layout.js" color="text-yellow-400" />
                                <FileItem name="globals.css" color="text-blue-300" />
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-300 mt-1">
                                <span className="text-[10px]">▶</span> components
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 bg-[#0D0716] relative">
                {/* Tabs */}
                <div className="flex h-9 border-b border-white/10 bg-[#09050F] overflow-x-auto">
                    <Tab name="page.js" active={activeFile === "page.js"} color="text-yellow-400" icon="JS" />
                    <Tab name="globals.css" color="text-blue-300" icon="#" />
                    <Tab name="Termimal" color="text-white" icon=">_" />
                </div>

                {/* Breadcrumbs */}
                <div className="h-7 border-b border-white/5 flex items-center px-4 text-xs text-gray-500 bg-[#0D0716]">
                    pole-website &gt; app &gt; {activeFile}
                </div>

                {/* Editor Content (The Website) */}
                <div className="flex-1 overflow-y-auto relative no-scrollbar">
                    {/* Line Numbers Sider (Optional design element) */}
                    <div className="fixed left-[3.5rem] md:left-[23rem] top-[6rem] bottom-8 w-8 text-right pr-2 text-gray-700 text-xs font-mono select-none hidden lg:block pointer-events-none z-0">
                        {Array.from({ length: 50 }).map((_, i) => (
                            <div key={i} className="leading-relaxed opacity-20">{i + 1}</div>
                        ))}
                    </div>

                    <div className="relative z-10 min-h-full">
                        {children}
                    </div>
                </div>

                {/* Status Bar */}
                <div className="h-6 border-t border-white/10 bg-[#007acc] text-white flex items-center justify-between px-3 text-[10px] select-none z-50">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <span className="font-bold">⨂ 0</span>
                            <span className="font-bold">⚠ 0</span>
                        </div>
                        <span>master*</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span>Ln 12, Col 43</span>
                        <span>UTF-8</span>
                        <span>JavaScript</span>
                        <span>Prettier</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FileItem({ name, color, active }) {
    return (
        <div className={`flex items-center gap-2 text-sm px-2 py-1 cursor-pointer transition-colors ${active ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'}`}>
            <span className={color}>{name.endsWith('.js') || name.endsWith('.jsx') ? 'JS' : name.endsWith('.css') ? '#' : '{}'}</span>
            <span>{name}</span>
        </div>
    );
}

function Tab({ name, active, color, icon }) {
    return (
        <div className={`flex items-center gap-2 px-3 min-w-[120px] text-xs border-r border-white/10 cursor-pointer ${active ? 'bg-[#1e1e1e] text-white border-t-2 border-t-tech-blue' : 'bg-[#0D0716] text-gray-500 hover:bg-[#1e1e1e]'}`}>
            <span className={color}>{icon}</span>
            <span>{name}</span>
            {active && <span className="ml-auto hover:bg-white/20 rounded-sm p-0.5">×</span>}
        </div>
    );
}
