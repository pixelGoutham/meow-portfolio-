import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Asterisk, BookOpen, Clock, Terminal, ArrowUpRight, Check, Share2, } from "lucide-react";

interface DevLogEntry {
    id: string;
    code: string;
    date: string;
    readTime: string;
    category: 'PRODUCT' | 'POST_MORTEM' | 'SYSTEMS' | 'LIFE & JEE';
    title: string;
    summary: string;
    paragraphs: string[];
    takeaway: string;
    tags: string[];
}

const DEVLOGS: DevLogEntry[] = [
    {
        id: 'ms-store-launch',
        code: 'LOG_01',
        date: 'OCT 2026',
        readTime: '4 MIN READ',
        category: 'PRODUCT',
        title: 'Publishing PixelFocus v2.2 on the Microsoft Store at 16: Building vs Distribution',
        summary:
            'Crossing the Partner Center tax, packaging, and certification barrier was supposed to be the finish line. Instead, getting 1 initial install taught me the real game.',
        paragraphs: [
            'Most student projects die on localhost:5173 or sit as an unmaintained Vercel link. With PixelFocus, I wanted to cross the actual commercial barrier: packaging an Electron + React + TypeScript desktop app, grading 2880x1080 store screenshots, clearing Microsoft Partner Center verification, and seting pricing at ₹149 ($5).',
            'When the listing finally went live on October 5, I refreshed the dashboard waiting for organic search traffic. It barely moved. Search indexing lagged, and one install showed up.',
            'That moment was more valuable than any tutorial I have ever watched. Shipping code only proves you can engineer a binary. Getting 100 paying students requires distribution channels, search visibility, clear onboarding, and relentless iteration.',
        ],
        takeaway:
            'Shipping to a store is a step zero of running a product, not a finale. Engineering solves the build; storytelling and distribution solve discovery.',
        tags: ['Electron', 'Microsoft Store', 'Indie Saas', 'Distribution'],
    },

    {
        id: 'bengaluru-hackathon',
        code: 'LOG_02',
        date: 'OCT 18, 2026',
        readTime: '5 MIN READ',
        category: 'POST_MORTEM',
        title: 'Hacktoberfest Hack Day Bengaluru: Reaching the Finals & Why I Lost',
        summary: 
        'I built PixelVision using Google Gemma model and made it to the final round at Startup Park. Here is my unfiltered breakdown of what went wrong.',
        paragraphs: [
            'On October 18, Team Pixel traveled to Startup Park in Bengaluru for Hacktoberfest Hack Day. I built PixelVision-a multimodal UI auditing tool powered by Gemma and pushed through into the finals.',
            'In the final pitch, I lost. Looking at the competing finalists hurt at first, especially feeling like the judges did not engage deeply with the pitch. Even after the post-event disqualification drama in Track 3, I refused to comfort myself with excuses.',
            'When I dissected the winning technical approaches objectively, the gap was clear: before writing a single line of hackathon code, you need undeniable proof of the problem, deeper technical differentiation beyond an API wrapper, and a demo that forces judges to care in the first 30 seconds.',
        ],
        takeaway:
            'Never fall in love with your own pitch deck. Validate the technical moat and judge-facing proof of value before committing your hours.',
        tags: ['Hackathon', 'Gemma AI', 'Bengaluru', 'Post-Mortem']
    },
    {
        id: 'pixel-flow-ipc',
        code: 'LOG_03',
        date: 'OCT 2026',
        readTime: '4 MIN READ',
        category: 'SYSTEMS',
        title: ' Architecting Pixel Flow: Why AI Prompts Cannot Directly Mutate User State',
        summary: 
        'Turning "I have a Chemistry test and two Maths chapters" into structured tasks insides Electron without freezing the renderer or hallucinating data.',
        paragraphs: [
            'When I started designing Pixel Flow inside Pixel Focus, the naive approach was simple: send the user natural-language text to a Gemma model and render the response.',
            'In a real productivity app, a raw text response in useless. If an AI assistant modifies a student study calendar or Eisenhower Matrix, it has to cross the Electron preload.js contextBridge safely, output strict JSON schemas, and fail gracefully when offline.',
            'Seperating the offline-first local database from the asynchronous AI IPC layer meant that even when free-tier rate limits hit or Wi-Fi drops, the core app stays instantaneous.',
        ],
        takeaway: 
            'An AI feature is only as reliable as the validation boundary between the non-deterministic model and your deterministic application state.',
        tags: ['Electron IPC', 'Gemma 4', 'System Design', 'TypeScript'],        
    },
    {
        id: 'scrcpy-hardware-hack',
        code: 'LOG_04',
        date: 'OCT 2026',
        readTime: '3 MIN READ',
        category: 'SYSTEMS',
        title: 'Headless Android Workflows: Turning a Broken Samsung Galaxy J7 Prime Into a Camera Rig.',
        summary:
            'How a degraded batter, a broken display and thermal constraints pushed me into ADB internals, scrcpy flags, and Java JDK setup.',
        paragraphs: [
            'My daily phone has been a 32GB Samsung Galaxy J7 Prime with a worn-out battery and a broken display. Instead of treating old hardware as e-waste, I wanted to repurpose it as a dedicated low-latency camera monitor over USB.',
            'Keeping the physical screen on caused heat buildup and battery drain. By digging into custom scrcpy flags and ADB server commands, I configured a workflow that streams the camera feed to Windows while keeping the phone physical display completely powered off.',
            'Solving practical annoyances with CLI tools like scrcpy, FFmpeg is what sparked my deeper dive into Android engineering.',
        ],
        takeaway:
            'Resource constraints force you to read documentation and understand how hardware and OS streams actually communicate.',
        tags: ['Android', 'scrcpy', 'ADB', 'FFmpeg']
    },
    {
        id: 'jee-vs-shipping',
        code: 'LOG_05',
        date: 'SEP-OCT 2026',
        readTime: '5 MIN READ',
        category: 'LIFE & JEE',
        title: 'The Bandwidth Equation: Balancing Class 11 JEE Prep With Indie Software.',
        summary:
            'After scoring 94% in Class 10 boards (and 100/100 in IT), entering a 9-hour daily JEE program forced a hard reckoning with time, sleep and focus.',
        paragraphs: [
            'In Class 10, disciplined mock tests and NCERT grinding got me to 94%. Moving into a Class 11 JEE-integrated PCMC schedule changed the rules overnight: long college hours, stiff benches, heat, and weekly 300-mark tests where Physics, Chemistry and Maths demand relentless practise.',
            'At the same time, my desire to write C++, master DSA and ship products like PixelFocus did not disappear. Trying to wake up at 3AM while running on low sleep taught me that biology always collects its debt.',
            'The solution is not quitting software or neglecting JEE-it is ruthless prioritization. Fewer random side quests, protected academic blocks, and choosing technical projects that genuinely compund my engineering skill.',
        ],
        takeaway: 
            'Ambition without bandwidth management leads to burnout. Protect your health and sleep as core parts of the engineering system.',
        tags: ['JEE PCMC', 'Discipline', 'Mysuru', 'Pixel Focus']
    },
    {
      id: 'motobook-linux-windows',
      code: 'LOG_06',
      date: 'SEP 2026',
      readTime: '3 MIN READ',
      category: 'SYSTEMS',
      title: 'Funding My Own Motobook 60 & What Dual-Booting Fedora Taught Me.',
      summary: 'Paying ₹29,000 of my ₹41,000 laptop from my own earnings changed how I value my machine, my OS setup, and every frame of performance.',
      paragraphs: [
        'When you fund ₹29,000 of your own laptop at 16, you care about every megabyte of RAM and every watt of power. My Motobook 60 (Core 5 210H, 16GB DDR5, 2.8K 120Hz OLED) is my studio, compiler, and test lab.',
        'I experimented with dual-booting Fedora Linux alongside Windows 11, debugging missing shared libraries like libfuse.so.2 for AppImages(WSL), and tuning Intel graphics drivers and DISM/SFC health checks when frame rates dipped.',
        'Eventually, consolidating back onto a clean Windows 11 + WSL + PowerShell workflow gave me the best of both worlds: native Windows packaging for PixelFocus and Linux CLI speed for development.',
      ],
      takeaway: 'Your operating system is a tool, not a religion. Pick the environment that lets you compile, test, and ship with the least friction.',
      tags: ['Motobook 60', 'Fedora Linux', 'Windows 11', 'Dev Setup'],  
    },
];

export const DevlogReader = () => {
    const [activeLogId, setActiveLogId] = useState<string>(DEVLOGS[0].id);
    const [copied, setCopied] = useState(false);

    const activeLog = DEVLOGS.find((log) => log.id === activeLogId) || DEVLOGS[0];

    const handleCopyShare = () => {
        const url = `${window.location.origin}/#logs`;
        navigator.clipboard.writeText(`${activeLog.title} - ${url}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
            id='logs'
            className="w-full bg-[#0c0c0c] text-white py-20 md:py-28 border-b border-white/10"
        >
            <div className="mx-auto max-w-[1440px] px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center gap-1.5 bg-white/5 border border-white/15 px-3 py-1 mb-4">
                    <div>
                        <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/15 px-3 py-1 mb-4">
                            <Asterisk className="h-3.5 w-3.5 text-[$#e64e1b]" />
                            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-white/90">
                                UNFILTERED FIELD NOTES (06)
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.9]">
                            THE BUILDER <span className="text-[#e64e1b]">LOGS.</span>
                        </h2>
                    </div>

                    <p className="max-w-md text-xs md:text-sm text-neutral-400 leading-relaxed">
                        No generic coding tutorials. These are real architectural breakdowns, store launch numbers, and hackathon post-mortems from Mysuru.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-5 flex flex-col gap-3">
                        {DEVLOGS.map((log) => {
                            const isSelected = log.id === activeLog.id;
                            return (
                                <button
                                    key={log.id}
                                    onClick={() => setActiveLogId(log.id)}
                                    className={`group w-full text-left p-5 transition-all cursor-pointer border ${
                                        isSelected
                                            ? 'bg-[#e64e1b] shadow-lg'
                                            : 'bg-[#151515] text-white/85 border-white/10 hover:border-white/30 hover:bg-[#1c1c1c]'
                                    }`}
                                >
                                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider mb-2">
                                        <span className={isSelected ? 'text-white/90 font-bold' : 'text-[#e63e1b]'}>
                                            {log.code} // {log.category}
                                        </span>
                                        <span className={isSelected ? 'text-white/80' : 'text-neutral-500'}>
                                            {log.date}
                                        </span>
                                    </div>

                                    <h3 className="text-sm md:text-base font-extrabold leading-snug tracking-tight">
                                        {log.title}
                                    </h3>

                                    <div className="mt-3 flex items-center justify-between text-[11px] font-mono">
                                        <span className={isSelected ? 'text-white/85' : 'text-neutral-500'}>
                                            {log.readTime}
                                        </span>
                                        <span className="inline-flex items-center gap-1 font-bold uppercase">
                                            Read Entry <ArrowUpRight className="h-3.5 w-3.5" />
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    <div className="lg:col-span-7">
                        <AnimatePresence mode='wait'>
                            <motion.article
                                key={activeLog.id}
                                initial={{ opacity: 0, y: 12}}
                                animate={{ opacity: 1, y: 0}}
                                exit={{ opacity: 0, y: -12}}
                                transition={{ duration: 0.25 }}
                                className="h-full bg-[#141414] border border-white/15 p-8 md:p-12 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                                        <div className="flex items-center gap-3 font-mono text-xs">
                                            <span className="bg-[#e64e1b] text-white px-2.5 py-1 font-bold">
                                                {activeLog.code}
                                            </span>
                                            <span className="text-neutral-400">{activeLog.date}</span>
                                            <span className="text-neutral-600">·</span>
                                            <span className="inline-flex items-center gap-1 text-neutral-400">
                                                <Clock className="h-3.5 w-3.5" />
                                                {activeLog.readTime}
                                            </span>
                                        </div>

                                        <button
                                            onClick={handleCopyShare}
                                            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase bg-white/10 border border-white/15 px-3 py-1.5 cursor-pointer transition-colors"
                                        >
                                            {copied ? (
                                                <>
                                                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                                                    <span>Copied Link</span>
                                                </>    
                                            ) : (
                                                <>
                                                    <Share2 className="h-3.5 w-3.5" />
                                                    <span>Share Log</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight text-white">
                                            {activeLog.title}
                                        </h3>
                                        <p className="mt-3 text-xs md:text-sm font-medium text-[#ff9e7d] leading-relaxed">
                                            {activeLog.summary}
                                        </p>
                                    </div>

                                    <div className="mt-8 space-y-5 border-t border-white/10 pt-8">
                                        {activeLog.paragraphs.map((para, index) => (
                                            <p
                                                key={index}
                                                className="text-sm md:text-base leading-relaxed text-neutral-300"
                                            >
                                                {para}
                                            </p>
                                        ))}
                                    </div>

                                    <div className="mt-8 bg-[#0c0c0c] border-l-4 border-[#e64e1b] p-5">
                                        <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#e63e1b] mb-2">
                                            <Terminal className="h-4 w-4" />
                                            <span>CORE ENGINEERING TAKEAWAY</span>
                                        </div>
                                        <p className="text-xs md:text-sm leading-relaxed text-white/90 font-medium">
                                            {activeLog.takeaway}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex flex-wrap gap-2">
                                        {activeLog.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="font-mono text-[11px] bg-white/5 text-neutral-300 px-2.5 py-1 border border-white/10"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-400">
                                        <BookOpen className="h-3.5 w-3.5 text-[#e64e1b]" />
                                        Written by Goutham Kumar A
                                    </span>
                                </div>
                            </motion.article>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};


