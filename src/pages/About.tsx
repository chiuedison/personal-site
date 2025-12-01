import { useState } from 'react';
import { profile } from '../data';
import { AsciiPortrait } from '../components/AsciiPortrait';
import { Typewriter } from '../components/Typewriter';

export function About() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-fade-in relative clearfix">
      <header className="border-b border-ink/10 pb-8 mb-8 relative z-10">
        <h1 className="text-3xl font-medium">
          <Typewriter 
            text="About Me" 
            speed={50} 
            delay={200} 
            cursor={false} 
            onComplete={() => setShowContent(true)}
          />
        </h1>
      </header>
      
      <div className={`transition-all duration-500 ease-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* Portrait - Floated Right on Desktop, Stacked on Mobile */}
        <div 
          className="flex flex-col items-center gap-2 md:float-right md:ml-8 md:mb-6 mb-8 relative z-10"
        >
          <div className="opacity-75 mix-blend-multiply select-none overflow-hidden border border-ink/10 p-2 bg-paper shadow-sm rotate-1">
            <div className="text-ink">
              <AsciiPortrait 
                src="/me.jpg" 
                width={200} 
                className="text-[1px] leading-[0.45em]"
              />
            </div>
          </div>
          <span className="font-mono text-[9px] text-ink-light/40 uppercase tracking-widest">fig. 01</span>
        </div>

        <div className="text-lg text-ink-light leading-relaxed font-light space-y-6 pb-20">
          {profile.about.bio}
        </div>
      </div>
    </div>
  );
}

