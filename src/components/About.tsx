import { useState } from 'react';
import { profile } from '../data';
import { AsciiPortrait } from './AsciiPortrait';
import { Typewriter } from './Typewriter';

export function About() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-fade-in relative">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
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
            <div className="text-lg text-ink-light leading-relaxed font-light">
              <p>
                I'm a builder and engineer passionate about infrastructure and AI. 
                Currently, I'm building <strong className="text-ink font-medium">Aspect</strong> (YC F25) with my best friends.
              </p>
              <p className="mt-4">
                Previously, I led engineering at Shade, where I architected backend systems handling millions of requests. 
                I enjoy solving complex distributed systems problems and designing intuitive developer tools.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-ink-light/50 mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li><a href={`mailto:${profile.email}`} className="hover:text-ink hover:underline decoration-1 underline-offset-4">Email</a></li>
                  <li><a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-ink hover:underline decoration-1 underline-offset-4">GitHub</a></li>
                  <li><a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink hover:underline decoration-1 underline-offset-4">LinkedIn</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-ink-light/50 mb-4">Location</h3>
                <p>{profile.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Portrait Column */}
        <div 
          className={`hidden md:flex flex-col items-center gap-2 transition-opacity duration-1000 delay-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="opacity-75 mix-blend-multiply select-none overflow-hidden border border-ink/10 p-2 bg-paper shadow-sm rotate-1">
            <div className="text-ink">
              <AsciiPortrait 
                src="/me.jpg" 
                width={260} 
                className="text-[1px] leading-[0.45em]"
              />
            </div>
          </div>
          <span className="font-mono text-[9px] text-ink-light/40 uppercase tracking-widest">fig. 01</span>
        </div>
      </div>
    </div>
  );
}

