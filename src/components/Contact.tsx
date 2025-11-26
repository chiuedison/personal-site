import { useState } from 'react';
import { Mail, Github, Linkedin, Calendar } from 'lucide-react';
import { profile } from '../data';
import { Typewriter } from './Typewriter';

export function Contact() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="max-w-2xl mx-auto space-y-12 animate-fade-in">
      <header className="border-b border-ink/10 pb-8">
        <h1 className="text-3xl font-medium">
          <Typewriter 
            text="Get in Contact!" 
            speed={50} 
            delay={200} 
            cursor={false} 
            onComplete={() => setShowContent(true)}
          />
        </h1>
      </header>

      <div className={`transition-all duration-500 ease-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="space-y-8">
          <p className="text-xl text-ink-light font-light leading-relaxed">
            I'm always open to chatting about cool tech, collaborations, new AI systems, or just meeting cool people.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-6">
              <h3 className="font-sans text-xs uppercase tracking-widest text-ink-light/50">Get in touch</h3>
              <div className="flex flex-col space-y-4">
                <a 
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-ink hover:text-ink-light transition-colors group"
                >
                  <Mail size={18} strokeWidth={1.5} className="text-ink-light/60 group-hover:text-ink transition-colors" />
                  <span className="hover:underline decoration-1 underline-offset-4">{profile.email}</span>
                </a>
                
                <a 
                  href="https://cal.com/edison"
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 text-ink hover:text-ink-light transition-colors group"
                >
                  <Calendar size={18} strokeWidth={1.5} className="text-ink-light/60 group-hover:text-ink transition-colors" />
                  <span className="hover:underline decoration-1 underline-offset-4">Book a call</span>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-sans text-xs uppercase tracking-widest text-ink-light/50">Socials</h3>
              <div className="flex flex-col space-y-4">
                <a 
                  href={profile.links.github}
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 text-ink hover:text-ink-light transition-colors group"
                >
                  <Github size={18} strokeWidth={1.5} className="text-ink-light/60 group-hover:text-ink transition-colors" />
                  <span className="hover:underline decoration-1 underline-offset-4">GitHub</span>
                </a>
                
                <a 
                  href={profile.links.linkedin}
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 text-ink hover:text-ink-light transition-colors group"
                >
                  <Linkedin size={18} strokeWidth={1.5} className="text-ink-light/60 group-hover:text-ink transition-colors" />
                  <span className="hover:underline decoration-1 underline-offset-4">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
