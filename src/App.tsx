import { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import FeaturedProduct from './components/FeaturedProduct';
import Industries from './components/Industries';
import Stats from './components/Stats';
import Team from './components/Team';
import RnD from './components/RnD';
import About from './components/About';
import Gallery from './components/Gallery';
import Clients from './components/Clients';
import LeadForm from './components/LeadForm';
import CompanyChatbot from './components/CompanyChatbot';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none z-[9999] w-[300px] h-[300px] rounded-full transition-transform duration-100"
      style={{
        background: 'radial-gradient(circle, rgba(74,108,247,0.06) 0%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
      <div
        className="h-full transition-all duration-100"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #4A6CF7, #06B6D4)',
        }}
      />
    </div>
  );
}

export default function App() {
  useScrollAnimation();

  return (
    <>
      <CursorGlow />
      <ScrollProgress />
      <main>
        <Hero />
        <FeaturedProduct />
        <Industries />
        <Stats />
        <RnD />
        <About />
        <Gallery />
        <Clients />
        <Team />
        <LeadForm />
      </main>
      <footer className="w-full bg-[#050B1F] py-8 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-gray-400 font-semibold text-sm mb-3">
            &copy; {new Date().getFullYear()} Sapcon Instruments Pvt Ltd
          </div>
          <div className="text-gray-600 text-xs leading-relaxed max-w-3xl mx-auto">
            All rights reserved. Except as permitted by the copyright law applicable to you, you may not reproduce or communicate any of the content on this website, including files downloadable from this website, without the permission of the copyright owner.
          </div>
        </div>
      </footer>
      <CompanyChatbot />
    </>
  );
}
