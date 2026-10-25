import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { SwissGridOverlay } from './SwissGridOverlay';

interface NavItem {
  label: string;
  href: string;
  count?: string;
}

interface HeroProps {
  onOpenMenu?: () => void;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Story', href: '#story' },
  { label: 'Work', href: '#work', count: '04' },
  { label: 'Logs', href: '#logs', count: '06' },
  { label: 'Contact', href: '#contact' },
];

export const Hero = ({ onOpenMenu }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[720px] w-full overflow-hidden bg-[#E64E1B] text-white flex flex-col justify-between"
    >
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,140,80,0.28),transparent_70%)]" />

      {/* Swiss Crosshair Grid */}
      <SwissGridOverlay />

      {/* 1. Top Navigation */}
      <header className="relative z-30 mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-7 md:px-12">
        <a href="#home" className="text-xl font-extrabold tracking-tight">
          pixelgoutham<sup className="ml-0.5 text-xs font-normal">®</sup>
        </a>

        <nav className="hidden md:flex items-center gap-12 text-sm font-medium text-white/90">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              className={`group relative transition-opacity hover:opacity-100 ${
                idx === 0
                  ? 'underline underline-offset-8 decoration-white/80'
                  : 'opacity-85'
              }`}
            >
              <span>{item.label}</span>
              {item.count && (
                <sup className="ml-1 font-mono text-[10px] text-white/60">
                  ({item.count})
                </sup>
              )}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={onOpenMenu}
          aria-label="Toggle Menu"
          className="flex flex-col gap-1.5 p-2 group cursor-pointer"
        >
          <span className="h-[2px] w-7 bg-white transition-transform group-hover:translate-x-1" />
          <span className="h-[2px] w-7 bg-white transition-transform group-hover:-translate-x-1" />
        </button>
      </header>

      {/* 2. Giant Background Watermark */}
      <div className="pointer-events-none absolute top-[12%] left-0 right-0 z-0 flex justify-center overflow-hidden">
        <h2 className="hero-watermark tracking-tighter">GOUTHAM</h2>
      </div>

      {/* 3. Center Portrait Cutout */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center">
        <img
          src="/potrait.png"
          alt="Goutham Kumar A"
          className="h-[58vh] md:h-[76vh] w-auto object-contain object-bottom select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.28)] [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
        />
      </div>

      {/* 4. Middle Row: Manifesto + Featured Product */}
      <div className="relative z-20 mx-auto my-auto flex w-full max-w-[1440px] flex-col md:flex-row items-start md:items-center justify-between gap-8 px-6 md:px-12">
        {/* Left Manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xs space-y-2.5"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/75">
            Mysuru, IN · 16 Y/O Indie Builder
          </p>

          <p className="text-xs md:text-sm font-medium uppercase leading-relaxed tracking-wider text-white/95">
            {'\u00A0'.repeat(6)}I ENGINEER DESKTOP SOFTWARE, AI WORKFLOWS &amp; REAL PRODUCTS THAT SHIP—AND DOCUMENT THE UNFILTERED STORY BEHIND THEM.
          </p>
        </motion.div>

        {/* Right Floating Featured Product Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="h-fit self-end md:self-center"
        >
          <a
            href="#work"
            className="group block h-fit w-52 bg-white p-2.5 text-[#0C0C0C] shadow-2xl transition-transform duration-300 hover:-translate-y-1.5"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-[#161616] p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] font-mono text-white/60">
                <span>MS STORE</span>
                <span className="rounded bg-[#E64E1B] px-1.5 py-0.5 text-[9px] font-bold text-white">
                  v2.2 LIVE
                </span>
              </div>

              <div className="my-auto space-y-1.5">
                <div className="h-2 w-14 rounded bg-white/20" />
                <div className="h-2 w-24 rounded bg-[#E64E1B]" />
                <div className="h-2 w-16 rounded bg-white/40" />
              </div>

              <p className="font-mono text-[10px] text-white/50">
                Electron · React · Offline
              </p>
            </div>

            <div className="mt-2.5 flex items-center justify-between px-0.5 text-[11px] font-bold">
              <span className="flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-[#E64E1B]" />
                PIXELFOCUS
              </span>
              <span className="font-normal text-neutral-500">/Windows App</span>
            </div>
          </a>
        </motion.div>
      </div>

      {/* 5. Bottom Row: Title + Contact Card */}
      <div className="relative z-30 mx-auto flex w-full max-w-[1440px] flex-col items-start justify-between gap-6 px-6 pb-8 md:flex-row md:items-end md:px-12">
        <div>
          <span className="block font-mono text-base md:text-lg font-bold tracking-tight text-white/95 mb-1">
            ©2026
          </span>

          <h1 className="text-[clamp(3.5rem,10.5vw,9rem)] font-black uppercase leading-[0.8] tracking-[-0.04em] text-white">
            GOUTHAM
          </h1>
        </div>

        {/* Bottom-Right Contact Card */}
        <div className="flex w-full max-w-[300px] items-center justify-between bg-[#0C0C0C] p-2.5 text-white shadow-2xl border border-white/10">
          <div className="flex items-center gap-3">
            <img
              src="/meow.png"
              alt="Goutham"
              className="h-12 w-12 shrink-0 bg-[#E64E1B] object-cover object-top"
            />

            <div className="space-y-0.5">
              <span className="block text-[10px] text-neutral-400">
                Let's Talk
              </span>
              <p className="text-xs font-bold leading-tight">
                Goutham Kumar
              </p>
              <p className="text-[11px] text-neutral-400">
                Indie Builder &amp; Dev
              </p>
            </div>
          </div>

          <a
            href="#contact"
            aria-label="Contact Goutham"
            className="flex h-9 w-9 shrink-0 items-center justify-center bg-white text-[#0C0C0C] transition-transform hover:scale-105 active:scale-95"
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};