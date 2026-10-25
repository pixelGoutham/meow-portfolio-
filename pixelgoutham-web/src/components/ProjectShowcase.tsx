import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Asterisk, ArrowUpRight, Terminal, Cpu, Layers, FolderGit2, CheckCircle2 } from 'lucide-react' ;

type ProjectCategory = 'ALL' | 'DESKTOP' | 'AI & IPC' | 'SYSTEMS & WEB';
type InspectorTab = 'story' | 'architecture' | 'lesson';

interface ProjectItem {
    id:string;
    index:string;
    title: string;
    subtitle: string;
    category: Exclude<ProjectCategory, 'ALL'>;
    status: string;
    year: string;
    metrics: string;
    stack: string[];
    linkLabel: string;
    linkUrl: string;
    accentColor: string;
    story: string;
    architecture: string[];
    lesson: string;
}

const PROJECTS: ProjectItem[] = [
    {
        id: 'pixelfocus',
        index: '01',
        title: 'PIXELFOCUS v2.2',
        subtitle: 'Offline-First Student Productivity & Ultradian Focus OS',
        category: 'DESKTOP',
        status: 'LIVE ON MICROSOFT STORE',
        year: '2026',
        metrics: '₹149 ($5) · Windows Store Certified',
        stack: ['Electron', 'React', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Firebase Auth'],
        linkLabel: 'View Store Listing',
        linkUrl:'https://apps.microsoft.com/detail/9pkd9kpvj5gv',
        accentColor: '#e64e1b',
        story:
            'Built to solve my own JEE preparation chaos. Combines Eisenhower Matrix prioritization, Pomodoro & 90-minute Ultradian sprints, mock-tests analytics, and 9 built-in ambient focus soundscapes inside a widget-based Apple-inspired workspace,',
            architecture: [
                'Offline-first local storage engine so study timers and analytics never lag when internet drops.',
                'Custom Electron main/renderer process seperation with strict preload contextBridge.',
                'Packaged via electron-builder with full Microsoft Partner Center tax & store certification.',
            ],
            lesson:
                'Crossing the publishing barrier taught me that building a product and distributing it are two completely seperate skills. Getting my first store install made me rethink discovery, SEO, and onboarding from scratch.',     
    },

    {
        id: 'pixelflow',
        index: '02',
        title: 'PIXEL FLOW (GEMMA IPC)',
        subtitle: 'Natural-Language Workload Parser & Local AI Butler',
        category: 'AI & IPC',
        status: 'ACTIVE ARCHITECTURE',
        year: '2026',
        metrics: 'Gemma 4 · Zero-Latency IPC Bridge',
        stack: ['Gemma AI', 'Electron IPC', 'TypeScript', 'Structured JSON', 'Node.js'],
        linkLabel: 'Inspect IPC Spec',
        linkUrl: 'https://github.com/pixelGoutham/pixelFocusApp',
        accentColor: '#121212',
        story:
            'Type "I have a Chemistry test, two assignments, and a Maths chapter to revise" via a universal keyboard shortcut, and Pixel Flow converts unstructured stress into prioritized tasks and calendar blocks automatically.',
        architecture: [
            'Decoupled AI layer in main.js via preload electron API so heavy model calls never freeze the React UI.',
            'Schema validation between raw LLM text output and deterministic task-state mutations.',
            'Graceful offline fallback when API quotas or network connections drop.',
        ],
        lesson:
            'Generating text is easy; reliably executing actions on a user`s schedule without hallucinations requires strict schema validation and permission boundaries.',
    },
    {
        id: 'pixelvision',
        index: '03',
        title: 'PIXELVISION',
        subtitle: 'Multimodal UI Auditing Engine - Hacktoberfest Hack Day Finalist',
        category: 'AI & IPC',
        status:'HACKATHON FINALIST',
        year: '2026',
        metrics: 'Top Finalist · Startup Park Bengaluru',
        stack: ['React', 'Vite', 'TypeScript', 'Gemma Multimodal', 'Tailwind CSS'],
        linkLabel: 'Read Post-Mortem',
        linkUrl: 'https://pixelvision-black.vercel.app/',
        accentColor: '#e63e1b',
        story:
            'Built for Hacktoberfest Hack Day Bengaluru 2026 under Team Pixel. Audits user interfaces visually and structurally using Google Gemma model to flag layout, contrast, and usability bottleneck.',
        architecture: [
            'Multimodal image + DOM context prompt pipeline for automated heuristic scoring.',
            'Fast side-by-side visual diffing and severity categorization for frontend developers.',
            'Built and pitched live in Bengaluru under tight hackathon constraints.',
        ],
        lesson:
            'Reaching the finals and losing taught me my sharpest lesson of 2026: judge-facing proof of value and hard technical differentiation matter far more than polished slides.',
    },
    {
        id: 'scrcpy-monitor',
        index: '04',
        title: 'SCRCPY CAMERA & PIXELBLAST',
        subtitle: 'Headless Android Hardware Reuse & Web Experiments',
        category: 'SYSTEMS & WEB',
        status: 'OPEN SOURCE / VERCEL',
        year: '2026',
        metrics: 'pixelblast.vercel.app · ADB + FFMPEG',
        stack: ['Java JDK', 'ADB / scrcpy', 'FFmpeg', 'PowerShell', 'Vercel', 'React'],
        linkLabel: 'Explore Systems',
        linkUrl: '#not-ready-yet T_T',
        accentColor: '#121212',
        story:
            'When you work with tight hardware constraints-like an aging Galaxy J7 Prime with a broken display-you engineer around it. Built custom scrcpy screen-off camera monitoring workflows and automated FFmpeg/yt-dlp media pipelines.',
        architecture: [
            'Low-overhead ADB video stream routing with physical device display powered off to prevent thermal throttling.',
            'Custom PowerShell and Linux shell automation for rapid video transcoding and asset prep.',
            'Edge-deployed web experiments hosted on Vercel with zero-config CI/CD.',
        ],
        lesson:
            'Hardware and budget constraints are not excuses to stop shipping-they force you to understand how operating systems, drivers, and streams actually work under the hood.',
    },
];

const CATEGORIES: ProjectCategory[] = ['ALL', 'DESKTOP', 'AI & IPC', 'SYSTEMS & WEB'];

export const ProjectShowcase = () => {
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('ALL');
    const [activeTabMap, setActiveTabMap] = useState<Record<string, InspectorTab>>({
        pixelfocus: 'story',
        pixelflow: 'story',
        pixelvision: 'story',
        'scrcpy-monitor': 'story',
    });

    const filteredProjects = 
        selectedCategory === 'ALL'
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === selectedCategory);

    const handleTagChange = (projectId: string, tab: InspectorTab) => {
        setActiveTabMap((prev) => ({ ...prev, [projectId]: tab }));
    };

    return (
        <section
            id='work'
            className='w-full bg-[#f5f5f2] text-[#0c0c0c] py-20 md:py-28 border-b border-black/10'
        >
            <div className='mx-auto max-w-[1440px] px-6 md:px-12'>
                <div className='flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-12 border-b border-black/10'>
                    <div>
                        <div className='inline-flex items-center gap-1.5 bg-white border border-black/10 px-3 py-1 mb-4'>
                            <Asterisk className='h-3.5 w-3.5 text-[#e64e1b]' />
                            <span className='font-mono text-[10px] font-bold uppercase tracking-wider'>
                                PORTFOLIO &amp; SYSTEMS
                            </span>
                        </div>
                        <h2 className='text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.9]'>
                            SHIPPED <span className='text-neutral-500'>PROJECTS.</span>
                        </h2>
                    </div>

                    <div className='flex flex-wrap items-center gap-2'>
                        {CATEGORIES.map((category) => {
                            const active = selectedCategory === category;
                            return (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                                        active
                                        ? 'bg-[#0c0c0c] text-white shadow-md'
                                        : 'bg-white text-neutral-600 border border-black/10 hover:border-[#e64e1b] hover:text-[#e63e1b]'
                                    }`}
                                    >
                                        {category}
                                    </button>
                            );
                        })}
                    </div>
                </div>

                <div className='mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2'>
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => {
                            const currentTab = activeTabMap[project.id] || 'story';

                            return (
                                <motion.article
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity:1, y: 0 }}
                                    exit={{ opacity: 0, scale:0.96 }}
                                    transition={{ duration: 0.35 }}
                                    className='group bg-white border border-black/10 flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow'
                                >
                                    <div
                                        style={{ backgroundColor: project.accentColor}}
                                        className='relative p-6 md:p-8 text-white overflow-hidden'
                                    >
                                    <div className='flex items-center justify-between gap-4 font-mono text-xs'>
                                        <span className='opacity-75'>
                                            /{project.index} · {project.category}
                                        </span>
                                        <span className='bg-white/15 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider'>
                                            {project.status}
                                        </span>
                                    </div>

                                    <div className='mt-8 mb-4'>
                                        <h3 className='text-2xl md:text-3xl font-black uppercase tracking-tight'>
                                            {project.title}
                                        </h3>
                                        <p className='mt-1 text-xs md:text-sm text-white/80 font-medium'>
                                            {project.subtitle}
                                        </p>
                                    </div>

                                    <div className='pt-4 border-t border-white/15 flex items-center justify-between font-mono text-[11px] text-white/75'>
                                        <span>{project.metrics}</span>
                                        <span>©{project.year}</span>
                                    </div>
                                </div>
                                
                                <div className='p-6 md:p-8 flex-1 flex-col justify-between space-y-6'>
                                    <div>
                                        <div className='flex items-center gap-1 border-b border-black/10 pb-3'>
                                            <button 
                                                onClick={() => handleTagChange(project.id, 'story')}
                                                className={`flex items-center gap-1.5 px-3 py-1.5 font-mono text-[10px] font-bold uppercase cursor-pointer transition-colors ${
                                                    currentTab === 'story'
                                                    ? 'bg-[#0c0c0c] text-white'
                                                    : 'bg-neutral-100 text-neutral-500 hover:text-black'
                                                }`}
                                            >
                                                <Layers className='h-3 w-3' />
                                                01. Why I Built It
                                            </button>

                                            <button
                                                onClick={() => handleTagChange(project.id, 'architecture')}
                                                className={`flex items-center gap-1.5 px-3 py-1.5 font-mono text-[10px] font-bold uppercase cursor-pointer transition-colors ${ 
                                                    currentTab === 'architecture' 
                                                    ? 'bg-[#e64e1b] text-white'
                                                    : 'bg-neutral-100 text-neutral-500 hover:text-black'
                                                 }`}
                                            >
                                                <Cpu className='h-3 w-3' />
                                                02. Architecture
                                                </button> 

                                                <button 
                                                    onClick={() => handleTagChange(project.id, 'lesson')}
                                                    className={`flex items-center gap-1.5 px-3 py-1.5 font-mono text-[10px] font-bold uppercase cursor-pointer transition-colors ${
                                                        currentTab === 'lesson'
                                                            ? 'bg-[#0c0c0c] text-white'
                                                            : 'bg-neutral-100 text-neutral-500 hover:text-black'
                                                    }`}
                                                >
                                                    <Terminal className='h-3 w-3' />
                                                    03. Reality Check
                                                </button>
                                        </div>

                                        <div className='mt-5 min-h-[110px]'>
                                            {currentTab === 'story' && (
                                                <p className='text-xs md:text-sm leading-relaxed text-neutral-600'>
                                                    {project.story}
                                                </p>
                                            )}

                                            {currentTab === 'architecture' && (
                                                <ul className='space-y-2'>
                                                    {project.architecture.map((point, idx) => (
                                                        <li
                                                            key={idx}
                                                            className='flex items-start gap-2 text-xs leading-relaxed text-neutral-700'
                                                        >
                                                            <CheckCircle2 className='h-3.5 w-3.5 text-[#e63e1b] shrink-0 mt-0.5' />
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {currentTab === 'lesson' && (
                                                <div className='bg-[#f5f5f2] border-l-2 border-[#e63e1b] p-3.5'>
                                                    <p className='font-mono text-[10px] font-bold uppercase text-[#e64e1b] mb-1'>
                                                        // UNFILTERED TAKEAWAY
                                                    </p>
                                                    <p className='text-xs leading-relaxed text-neutral-700'>
                                                        {project.lesson}
                                                    </p>
                                                    </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className='pt-4 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                                            <div className='flex flex-wrap gap-1.5'>
                                                {project.stack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className='font-mono text-[10px] bg-neutral-100 text-neutral-700 px-2 py-0.5 border border-black/5'
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <a 
                                                href={project.linkUrl}
                                                target={project.linkUrl.startsWith('https') ? '_blank' : undefined}
                                                rel='noreferrer'
                                                className='inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-[#0c0c0c] hover:text-[#e63e1b] transition-colors shrink-0'
                                            >
                                                <FolderGit2 className='h-3.5 w-3.5' />
                                                <span>{project.linkLabel}</span>
                                                <ArrowUpRight className='h-3.5 w-3.5' />
                                            </a>
                                    </div>
                                </div>
                                </motion.article>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
