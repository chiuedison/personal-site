import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data';

export function Footer() {
  return (
    <footer className="mt-auto pt-8 border-t-2 border-ink/20 flex flex-col items-center space-y-4 animate-fade-in">
      <div className="flex gap-6 text-ink-light/60">
        <a 
          href={`mailto:${profile.email}`} 
          className="hover:text-ink transition-colors duration-300"
          aria-label="Email"
        >
          <Mail size={20} strokeWidth={1.5} />
        </a>
        <a 
          href={profile.links.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-ink transition-colors duration-300"
          aria-label="GitHub"
        >
          <Github size={20} strokeWidth={1.5} />
        </a>
        <a 
          href={profile.links.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-ink transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} strokeWidth={1.5} />
        </a>
      </div>
      <p className="text-center text-ink-light/40 font-sans text-xs">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}

