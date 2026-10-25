import { useState, useEffect, FormEvent } from 'react';
import {
  Asterisk,
  ArrowUpRight,
  Check,
  Copy,
  Send,
  Sparkles,
} from 'lucide-react';

export const ContactSection = () => {
  const [istTime, setIstTime] = useState<string>('');
  const [emailCopied, setEmailCopied] = useState(false);

  // Interactive Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Live ticking IST clock for Mysuru
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setIstTime(formatted.toUpperCase());
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@pixelgoutham.tech');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !message.trim()) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${fullName}`);
    const body = encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:hello@pixelgoutham.tech?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <footer
      id="contact"
      className="w-full bg-[#F5F5F2] text-[#0C0C0C] pt-20 md:pt-28"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* 1. Giant Brutalist CONTACT ME Header (Mirrors Reference Image 3) */}
        <div className="pb-14 border-b border-black/10">
          <span className="block font-mono text-xs font-extrabold uppercase tracking-wider mb-2">
            PIXELGOUTHAM<sup className="text-[10px]">®</sup>
          </span>

          <div className="flex flex-col md:flex-row items-start md:items-baseline justify-between gap-4">
            <h2 className="text-[clamp(3.2rem,9.5vw,8.5rem)] font-black uppercase tracking-[-0.04em] leading-[0.85]">
              CONTACT ME
            </h2>

            <div className="font-mono text-xs font-bold">
              <span>©2026 </span>
              <span className="text-neutral-400 font-normal">
                [Mysuru · IST {istTime || 'LIVE'}]
              </span>
            </div>
          </div>
        </div>

        {/* 2. Main Split Grid: Left Get In Touch + 2x2 Blocks | Right Dark-Header Form */}
        <div className="py-16 grid grid-cols-1 gap-12 lg:grid-cols-12 items-start border-b border-black/10">
          {/* Left 7 Columns: GET IN TOUCH + 4 Metadata Squares */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Sub-column A: GET IN TOUCH CTA */}
            <div className="md:col-span-5 flex flex-col justify-between space-y-8 pr-4">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-white border border-black/10 px-2.5 py-1 mb-4">
                  <Asterisk className="h-3.5 w-3.5 text-[#E64E1B]" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider">
                    READY TO BUILD?
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-[0.95]">
                  GET IN
                  <br />
                  TOUCH
                </h3>

                <p className="mt-4 text-xs leading-relaxed text-neutral-600">
                  Open to software engineering collaborations, indie product discussions, hackathon teams, and feedback on PixelFocus.
                </p>
              </div>

              <a
                href="mailto:hello@pixelgoutham.tech"
                className="group inline-flex items-center justify-between w-full max-w-[210px] bg-[#EAEAE5] hover:bg-[#0C0C0C] hover:text-white transition-colors pl-4 pr-1.5 py-1.5 border border-black/10"
              >
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider">
                  DIRECT EMAIL
                </span>
                <span className="flex h-7 w-7 items-center justify-center bg-[#E64E1B] text-white transition-transform group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>

            {/* Sub-column B: 2x2 Light-Gray Metadata Squares (Mirrors Reference 3) */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Square 1: Location */}
              <div className="bg-[#EAEAE5] p-5 min-h-[160px] flex flex-col justify-between">
                <span className="text-xs text-neutral-500">Location:</span>
                <div>
                  <p className="font-mono text-xs font-extrabold uppercase leading-snug">
                    MYSURU, KARNATAKA,
                    <br />
                    INDIA
                  </p>
                </div>
              </div>

              {/* Square 2: Active Hours & Live Clock */}
              <div className="bg-[#EAEAE5] p-5 min-h-[160px] flex flex-col justify-between">
                <span className="text-xs text-neutral-500">Local Time &amp; Schedule:</span>
                <div>
                  <p className="font-mono text-xs font-extrabold uppercase leading-snug text-[#E64E1B]">
                    IST: {istTime || 'ONLINE'}
                  </p>
                  <p className="font-mono text-[11px] font-bold uppercase text-neutral-700 mt-0.5">
                    DAILY: SHIPPING &amp; JEE
                  </p>
                </div>
              </div>

              {/* Square 3: Current Focus */}
              <div className="bg-[#EAEAE5] p-5 min-h-[160px] flex flex-col justify-between">
                <span className="text-xs text-neutral-500">Current Focus:</span>
                <div>
                  <p className="font-mono text-xs font-extrabold uppercase leading-snug">
                    PIXELFOCUS V2.2
                    <br />
                    &amp; ANDROID / C++
                  </p>
                </div>
              </div>

              {/* Square 4: Email with Copy Button */}
              <div className="bg-[#EAEAE5] p-5 min-h-[160px] flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-500">Email:</span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 font-mono text-[10px] uppercase bg-white px-2 py-0.5 border border-black/10 hover:border-[#E64E1B] cursor-pointer"
                  >
                    {emailCopied ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-600" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div>
                  <p className="font-mono text-xs font-extrabold break-all">
                    hello@pixelgoutham.tech
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Dark-Banner 'Reach Out to Me' Form Card (Mirrors Reference 2, 3, 4) */}
          <div className="lg:col-span-5">
            <div className="bg-white p-4 md:p-6 shadow-xl border border-black/10">
              {/* Gradient Banner Inside Form Card */}
              <div className="bg-gradient-to-r from-[#2B0908] via-[#6E140E] to-[#C83E10] py-7 px-6 text-center text-white">
                <span className="text-base font-extrabold tracking-tight">
                  pixelgoutham <sup className="text-[10px] font-normal">®</sup>
                </span>
              </div>

              <div className="pt-6 pb-2 px-2">
                <h4 className="text-center text-base font-extrabold tracking-tight mb-6">
                  Reach Out to Me
                </h4>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold mb-1.5">
                      Full Name<span className="text-[#E64E1B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Poorvika"
                      className="w-full bg-[#F5F5F2] border border-black/10 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#E64E1B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold mb-1.5">
                      E-mail<span className="text-[#E64E1B]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="poorvika@gmail.com"
                      className="w-full bg-[#F5F5F2] border border-black/10 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#E64E1B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold mb-1.5">
                      Message<span className="text-[#E64E1B]">*</span>
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Why cant i stop thinking about this"
                      className="w-full bg-[#F5F5F2] border border-black/10 px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#E64E1B] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0C0C0C] hover:bg-[#E64E1B] text-white font-mono text-xs font-bold uppercase tracking-wider py-3.5 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>{submitted ? 'OPENING MAIL CLIENT...' : 'YOUR MESSAGE'}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Editorial Footer with Giant 'pixelgoutham®' Brand Mark (Mirrors Top of Reference 2) */}
        <div className="pt-14 pb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          {/* Navigation & Social Columns */}
          <div className="flex flex-wrap gap-16 text-xs">
            <div className="space-y-2.5">
              <span className="block font-mono text-[10px] uppercase text-neutral-400">
                Navigation
              </span>
              <ul className="space-y-2 font-semibold">
                <li><a href="#home" className="hover:text-[#E64E1B]">Home</a></li>
                <li><a href="#story" className="hover:text-[#E64E1B]">Story &amp; Metrics</a></li>
                <li><a href="#work" className="hover:text-[#E64E1B]">Shipped Work</a></li>
                <li><a href="#logs" className="hover:text-[#E64E1B]">Builder Logs</a></li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <span className="block font-mono text-[10px] uppercase text-neutral-400">
                Platforms
              </span>
              <ul className="space-y-2 font-semibold">
                <li>
                  <a
                    href="https://github.com/pixelgoutham"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-4 hover:text-[#E64E1B] underline underline-offset-4"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/goutham_kumar_a"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-4 hover:text-[#E64E1B] underline underline-offset-4"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="#work"
                    className="inline-flex items-center gap-4 hover:text-[#E64E1B] underline underline-offset-4"
                  >
                    <span>Microsoft Store</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Giant Bottom-Right Brand Wordmark */}
          <div className="select-none">
            <span className="text-[clamp(2.8rem,7vw,6.5rem)] font-black tracking-[-0.04em] leading-none text-[#0C0C0C]">
              Goutham<sup className="text-xl md:text-3xl font-bold ml-1">®</sup>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};