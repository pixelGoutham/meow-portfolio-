import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { ImpactBento } from './components/ImpactBento';
import { ProjectShowcase } from './components/ProjectShowcase';
import { DevlogReader } from './components/DevLogReader';
import { ContactSection } from './components/ContactSection';
import { CommandDrawer } from './components/CommandDrawer';

export function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) {
        setScrollProgress(0);
        return;
      }
      const currentScroll = window.scrollY;
      setScrollProgress(
        Math.min(100, Math.round((currentScroll / totalScroll) * 100))
      );
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsMenuOpen((prev) => !prev);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#f5f5f2] text-[#0c0c0c] selection:bg-[#0c0c0c] selection:text-white">
      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-black/10">
        <div
          className="h-full bg-[#e64e1b] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Full-Screen Command & CLI Drawer */}
      <CommandDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      {/* Main Page Sections */}
      <main>
        <Hero onOpenMenu={() => setIsMenuOpen(true)} />
        <ImpactBento />
        <ProjectShowcase />
        <DevlogReader />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;