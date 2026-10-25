import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ArrowUpRight,
  Terminal,
  Sparkles,
  Laptop,
  CornerDownLeft,
} from 'lucide-react';

interface CommandDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TerminalLine {
  id: number;
  type: 'input' | 'output';
  text: string;
}

const INITIAL_HISTORY: TerminalLine[] = [
  {
    id: 1,
    type: 'output',
    text: 'pixelgoutham-os v2.6.0 (Mysuru, IN) — Type "help" for available commands.',
  },
];

const QUICK_LINKS = [
  { index: '01', label: 'Home & Manifesto', href: '#home', meta: 'Hero Stage' },
  { index: '02', label: 'Impact & Philosophy', href: '#story', meta: 'v2.2 · 94% Boards' },
  { index: '03', label: 'Shipped Projects', href: '#work', meta: '04 Systems' },
  { index: '04', label: 'The Builder Logs', href: '#logs', meta: '06 Field Notes' },
  { index: '05', label: 'Contact & Inquiry', href: '#contact', meta: 'Mysuru IST' },
];

const getCommandReply = (cmd: string): string => {
  switch (cmd) {
    case 'help':
      return 'Available commands: whoami | specs | projects | jee | contact | clear';
    case 'whoami':
      return 'Goutham Kumar A — 16 y/o indie software builder & Class 11 JEE PCMC student in Mysuru. Founder of PixelFocus (live on MS Store).';
    case 'specs':
      return 'Hardware: Motorola Motobook 60 · Intel Core 5 210H · 16GB DDR5 · 512GB NVMe · 14" 2.8K 120Hz OLED (₹29k self-funded). Audio: boAt Bassheads 800.';
    case 'projects':
      return '[01] PixelFocus v2.2 (MS Store) | [02] Pixel Flow (Gemma IPC) | [03] PixelVision (Hacktoberfest Finalist) | [04] scrcpy Headless Rig';
    case 'jee':
      return 'Track: Class 11 PCMC (BASE PU + Resonance). Class 10 CBSE Boards: 94% (100/100 in IT, 96 English, 95 Kannada).';
    case 'contact':
      return 'Email: hello@pixelgoutham.tech | GitHub: @pixelgoutham';
    default:
      return `Command not recognized: "${cmd}". Type "help" for a list of commands.`;
  }
};

export const CommandDrawer = ({ isOpen, onClose }: CommandDrawerProps) => {
  const [cmdInput, setCmdInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>(INITIAL_HISTORY);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory(INITIAL_HISTORY);
      return;
    }

    const reply = getCommandReply(cmd);

    setHistory((prev) => {
      const nextId = prev.length + 1;
      const userLine: TerminalLine = {
        id: nextId,
        type: 'input',
        text: `goutham@motobook60:~$ ${raw}`,
      };
      const botLine: TerminalLine = {
        id: nextId + 1,
        type: 'output',
        text: reply,
      };
      return [...prev, userLine, botLine];
    });
  };

  const handleTerminalSubmit = (e: FormEvent) => {
    e.preventDefault();
    runCommand(cmdInput);
    setCmdInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-[#0C0C0C]/95 backdrop-blur-md text-white overflow-y-auto"
        >
          <div className="mx-auto max-w-[1440px] min-h-screen px-6 py-8 md:px-12 flex flex-col justify-between">
            {/* 1. Drawer Top Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-white/15">
              <div className="flex items-center gap-3">
                <span className="text-xl font-extrabold tracking-tight">
                  pixelgoutham<sup className="ml-0.5 text-xs font-normal">®</sup>
                </span>
                <span className="font-mono text-[10px] uppercase bg-[#E64E1B] px-2 py-0.5 font-bold">
                  SYSTEM DRAWER
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase bg-white/10 hover:bg-[#E64E1B] px-3.5 py-2 transition-colors cursor-pointer"
              >
                <span>ESC / CLOSE</span>
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* 2. Center Split: Navigation Links (Left) + Interactive CLI Terminal (Right) */}
            <div className="my-12 grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
              {/* Left 6 Cols: Directory Navigation */}
              <div className="lg:col-span-6 space-y-2">
                <p className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-4">
                  // DIRECTORY NAVIGATION
                </p>

                {QUICK_LINKS.map((item) => (
                  <a
                    key={item.index}
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center justify-between p-4 border border-white/10 bg-white/[0.02] hover:bg-[#E64E1B] hover:border-[#E64E1B] transition-all"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-[#E64E1B] group-hover:text-white">
                        /{item.index}
                      </span>
                      <span className="text-xl md:text-2xl font-black uppercase tracking-tight">
                        {item.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline font-mono text-[11px] text-neutral-400 group-hover:text-white/90">
                        {item.meta}
                      </span>
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Right 6 Cols: Interactive CLI Terminal */}
              <div className="lg:col-span-6 bg-[#141414] border border-white/15 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#E64E1B]">
                      <Terminal className="h-4 w-4" />
                      <span>goutham@motobook60: ~ (interactive-cli)</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setHistory(INITIAL_HISTORY)}
                      className="font-mono text-[10px] uppercase text-neutral-400 hover:text-white cursor-pointer"
                    >
                      [Clear]
                    </button>
                  </div>

                  {/* Quick Preset Command Chips */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {['whoami', 'specs', 'projects', 'jee', 'contact'].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => runCommand(preset)}
                        className="font-mono text-[10px] bg-white/5 hover:bg-[#E64E1B] text-neutral-300 hover:text-white px-2.5 py-1 border border-white/10 transition-colors cursor-pointer"
                      >
                        $ {preset}
                      </button>
                    ))}
                  </div>

                  {/* Terminal Output Window */}
                  <div className="mt-4 h-60 overflow-y-auto bg-[#0C0C0C] p-4 font-mono text-xs space-y-2.5 border border-white/10">
                    {history.map((line) => (
                      <div
                        key={line.id}
                        className={
                          line.type === 'input'
                            ? 'text-[#FF9E7D] font-bold'
                            : 'text-neutral-300 leading-relaxed'
                        }
                      >
                        {line.text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terminal Input Prompt */}
                <form onSubmit={handleTerminalSubmit} className="mt-4 flex gap-2">
                  <div className="flex-1 flex items-center bg-[#0C0C0C] border border-white/15 px-3 py-2 font-mono text-xs">
                    <span className="text-[#E64E1B] mr-2 font-bold">$</span>
                    <input
                      type="text"
                      value={cmdInput}
                      onChange={(e) => setCmdInput(e.target.value)}
                      placeholder="Type whoami, specs, projects, jee..."
                      className="w-full bg-transparent text-white focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#E64E1B] hover:bg-[#C83E10] text-white px-4 py-2 font-mono text-xs font-bold uppercase flex items-center gap-1 cursor-pointer"
                  >
                    <span>RUN</span>
                    <CornerDownLeft className="h-3.5 w-3.5" />
                  </button>
                </form>
              </div>
            </div>

            {/* 3. Drawer Footer Hardware Strip */}
            <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Laptop className="h-4 w-4 text-[#E64E1B]" />
                <span>BUILT ON MOTOBOOK 60 · CORE 5 210H · 16GB DDR5 · MYSURU</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-[#E64E1B]" />
                <span>CTRL + K TO TOGGLE ANYTIME</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};