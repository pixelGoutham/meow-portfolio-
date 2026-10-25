import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Asterisk, ArrowUpRight } from 'lucide-react';

const STACK_ITEMS = [
    { name: 'ELECTRON IPC', tag: 'Desktop' },
    { name: 'REACT + TYPESCRIPT', tag: 'Frontend' },
    { name: 'GEMMA 4 / AI', tag: 'Multimodal'},
    { name: 'C++ & DSA', tag: 'Core CS' },
    { name: 'MICROSOFT STORE', tag: 'Distribution' },
    { name: 'FFMPEG / CLI', tag: 'Automation' },
];

export const ImpactBento = () => {
    const [activeTab, setActiveTab] = useState<'philosophy' | 'reality'>('philosophy');
    
    return (
        <section id='story' className='w-full bg-[#f5f5f2] text-[#0c0c0c] py-16 md:py-24 border-b border-black/10'>
            <div className='mx-auto max-w-[1440px] px-6 md:px-12'>

                <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-14 border-b border-black/10'>
                    <div className='text-xs font-extrabold uppercase tracking-wider leading-tight'>
                        ENGINEERED &<br />SHIPPED WITH
                    </div>

                    <div className='flex flex-wrap items-center gap-6 md:gap-12'>
                        {STACK_ITEMS.map((item) => (
                            <div key={item.name} className='group flex items-center gap-2 cursor-default'>
                                <span className='h-2 w-2 bg-[#e64e1b] opacity-75 group-hover:scale-125 transition-transform' />
                                <div>
                                    <p className='font-mono text-xs font-bold tracking-tight text-neutral-800 group-hover:text-[#e63e1b] transition-colors'>
                                        {item.name}
                                    </p>
                                    <p className='text-[10px] text-neutral-400 uppercase'>{item.tag}</p>
                         </div>
                    </div>
               ))}
            </div>
        </div>

            <div className='mt-14 grid grid-cols-1 gap-6 md:grid-cols-12'>
                <div className='md:col-span-4 flex flex-col gap-6'>
                    <div className='flex-1 bg-white p-8 border border-black/5 flex flex-col justify-between shadow-sm'>
                        <div className='flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600'>
                            <Asterisk className='h-4 w-4 text-[#e64e1b]' />
                            <span>PRODUCTION RELEASES</span>
                        </div>

                        <div className='my-8'>
                            <span className='text-6xl md:text-7xl font-black tracking-tighter'>
                                v2.2
                            </span>
                            <span className='ml-2 font-mono text-xs uppercase bg-[#e64e1b]/10 text-[#e64e1b] px-2 py-1 font-bold'>
                                MS Store Live
                            </span>
                        </div>

                        <p className='text-xs leading-relaxed text-neutral-500'>
                            Built, packaged, tax-verified, and published PixelFocus on the Windows Store-moving past localhost tutorials into real software distribution.
                        </p>
                    </div>

                    <div className='flex-1 bg-white p-8 border border-black/5 flex flex-col justify-between shadow-sm'>
                        <div className='flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600'>
                            <Asterisk className='h-4 w-4 text-[#e6431b]' />
                            <span>ACADEMIC & TEACHING TRACK</span>
                        </div>

                        <div className='my-8 flex items-baseline gap-4'>
                            <span className='text-6xl md:text-7xl font-black tracking-tighter'>
                                94%
                            </span>
                            <span className='font-mono text-xs text-neutral-400'>
                                / 100 in IT · 100+ Students Taught Python 
                            </span>
                        </div>

                        <p className='text-xs leading-relaxed text-neutral-500'>
                            Balancing a rigorous JEE PCMC schedule in Mysuru while attending hackathons and working on the flagship Pixel Focus App
                        </p>
                    </div>
                </div>

                <div className='md:col-span-4 bg-white p-8 border border-black/5 flex flex-col justify-between shadow-sm'>
                    <div>
                        <div className='flex items-center justify-between pb-6 border-b border-black/10'>
                            <span className='font-mono text-xs font-bold uppercase text-[#e64e1b]'>
                                // THE BUILDER MANIFESTO
                            </span>
                            <div className='flex gap-1'>
                                <button
                                    onClick={() => setActiveTab('philosophy')}
                                    className={`px-2.5 py-1 text-[10px] font-mono uppercase cursor-pointer transition-colors ${
                                        activeTab === 'philosophy'
                                            ? 'bg-[#0c0c0c] text-white'
                                            : 'bg-neutral-100 text-neutral-500'  
                                    }`}
                                >
                                    Why I Build
                                </button>
                                <button
                                    onClick={() => setActiveTab('reality')}
                                    className={`px-2.5 py-1 text-[10px] font-mono uppercase cursor-pointer transition-colors ${
                                        activeTab === 'reality'
                                            ? 'bg-[#e64e1b] text-white'
                                            : 'bg-neutral-100 text-neutral-500'
                                    }`}
                                    >
                                        Hard Lessons
                                    </button>
                            </div>
                        </div>

                        {activeTab === 'philosophy' ? (
                            <div className='mt-6 space-y-4'>
                                <h3 className='text-xl font-extrabold tracking-tight leading-snug'>
                                    "I'm not interested in being another coding tutorial creator. I want to build things people actually use."
                                </h3>
                                <p className='text-xs leading-relaxed text-neutral-600'>
                                    Anyone can clone a landing page or wrap a single prompt in a UI. Real engineering happens when you deal with offline state, Electron IPC security, Windows installer pipelines, and why your first launch only got 1 install.
                                </p>
                            </div>
                        ) : ( 
                            <div className='mt-6 space-y-4'>
                                <h3 className='text-xl font-extrabold tracking-tight leading-snug'>
                                    What Hackathons & Store Launches Taught Me The Hard Way
                                </h3>
                                <p className='text-xs leading-relaxed text-neutral-600'>
                                    Shipping PixelFocus showed me that building and distribution are two complete different games. Losing in the Hacktoberfest Bengaluru in the finals taught me that technical validation and problem proof matter more than hype.
                                </p>
                    </div>
                )}
                </div>
                <div className='mt-8 pt-6 border-t border-black/10 flex items-center justify-between'>
                    <div>
                        <p className='text-xs font-bold'>Goutham Kumar A</p>
                        <p className='text-[11px] text-neutral-500'>Founder, Pixel_Inc · Mysuru</p>
                    </div>
                    <span className='font-mono text-[10px] px-2 py-1 bg-neutral-100 text-neutral-700'>
                        CLASS OF '27
                    </span>
                </div>
            </div>

            <div className='md:col-span-4 flex flex-col gap-6'>
                <div className='relative flex-1 min-h-[260px] bg-gradient-to-br from-[#1a0d08] via-[#4a1c0d] to-[#e64e1b] p-8 text-white flex flex-col justify-between overflow-hidden'>
                    <div className='flex justify-between items-center z-10'>
                        <span className='font-mono text-xs text-white/80'>pixelgoutham®</span>
                        <span className='font-mono text-[10px] uppercase border border-white/25 px-2 py-0.5'>
                        SYS.2026
                        </span>
                    </div>

                    <div className='z-10 my-auto py-6'>
                        <p className='font-mono text-[11px] uppercase tracking-widest text-[#ff9e7d] mb-2'>
                            Current Focus
                        </p>
                        <h4 className='text-2xl font-black uppercase tracking-tight leading-none'>
                            DESKTOP SYSTEMS, LOCAL AI AND ANDROID
                        </h4>
                    </div>

                    <div className='z-10 flex items-center justify-between text-xs text-white/80 border-t border-white/15 pt-4'>
                        <span>Offline-First Architecture</span>
                        <ArrowUpRight className='h-4 w-4' />
                    </div>
                </div>

                <div className='bg-white p-6 border border-black/5 shadow-sm space-y-2'>
                    <h4 className='text-xs font-extrabold uppercase tracking-wider'>
                        ZERO-FLUFF ENGINEERING
                    </h4>
                    <p className='text-xs text-neutral-500 leading-relaxed'>
                        Clean interfaces backed by real systems: custom FFmpeg scripts, IPC bridges, and structured task execution
                    </p>
                </div>
            </div>
        </div>

        <div className='mt-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8'>
            <div>
                <div className='inline-flex items-center gap-1.5 bg-white border border-black/10 px-3 mb-4'>
                 <Asterisk className='h-3.5 w-3.5 text-[#e6431b]' />
                 <span className='font-mono text-[10px] font-bold uppercase tracking-wider'>
                    STORYTELLING THROUGH CODE
                 </span>
                </div>

                <h2 className='text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.92]'>
                    MY IMPACT<br />
                    THROUGH <span className='text-neutral-500'>SHIPPING</span><br />
                    <span className='text-neutral-500'>REAL WORK</span>
                </h2>
            </div>

            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className='hidden md:flex h-24 w-24 items-center justify-center text-neutral-300'
                >
                    <Asterisk className='h-24 w-24 stroke-[1]' />
                </motion.div>
            </div>
        </div>
        </section>
    );
};