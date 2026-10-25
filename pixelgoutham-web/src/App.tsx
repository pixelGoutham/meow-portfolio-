import { useState, useEffect  } from "react";
import { Hero } from './components/Hero'
import { ImpactBento } from "./components/ImpactBento";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { DevlogReader } from "./components/DevLogReader";

export function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) {
        setScrollProgress(0);
        return;
      }
      const currentScroll = window.scrollY;
      setScrollProgress(Math.min(100, Math.round((currentScroll / totalScroll) * 100)));
    };

    window.addEventListener('scroll', handleScroll, {passive:true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen w-full bg-[#f5f5f2] text-[#0c0c0c] selection:bg-[#0c0c0c] selection:text-white">
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-black/10">
        <div
          className="h-full bg-[#e64e1b] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main>
        <Hero />
        <ImpactBento />
        <ProjectShowcase/>
        <DevlogReader/>
      </main>
    </div>
  );
}

export default App;