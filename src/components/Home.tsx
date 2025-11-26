import { useState, useRef, useEffect } from 'react';
import { Command } from 'cmdk';
import { profile } from '../data';
import { CommandMenuContent } from './CommandMenuContent';
import type { View } from './CommandMenuContent';

interface Props {
  changeView: (view: View) => void;
}

export function Home({ changeView }: Props) {
  const [open, setOpen] = useState(false);
  const commandRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (commandRef.current && !commandRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard interactions
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K to open
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
      // Escape to close
      if (e.key === 'Escape' && open) {
        setOpen(false);
        inputRef.current?.blur(); // Optional: blur input when closing
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in isolation-auto pt-16">
      <div className="space-y-8 relative z-10 w-full max-w-3xl mx-auto">
        
        {/* Backdrop for closing when open */}
        {open && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setOpen(false)}
          />
        )}

        <h1 className="text-4xl md:text-5xl font-medium text-ink">{profile.name}</h1>
        <p className="text-xl text-ink-light font-light leading-relaxed">
          I'm a builder and engineer passionate about infrastructure and AI. Currently building{' '}
          <a 
            href="https://aspect.inc" 
            target="_blank" 
            rel="noreferrer" 
            className="font-medium text-ink underline decoration-ink/30 hover:decoration-ink decoration-1 underline-offset-4 transition-all"
          >
            Aspect
          </a>{' '}
          with my best friends
          <span className="animate-blink ml-0.5 font-medium">_</span>
        </p>
        
        {/* Inline Command Menu */}
        <div 
          ref={commandRef}
          className={`
            relative z-50
            transition-all ease-in-out
            duration-300
            bg-paper border border-ink/10 rounded-xl shadow-sm text-left
            w-full max-w-3xl mx-auto
            ${open ? 'shadow-2xl scale-[1.02]' : 'hover:border-ink/30 hover:shadow-md'}
          `}
        >
          <Command className="w-full bg-transparent font-serif shadow-sm">
            <div className="flex items-center px-4 border-b border-transparent transition-colors" style={{ borderColor: open ? 'rgba(0,0,0,0.1)' : 'transparent' }}>
              <Command.Input 
                ref={inputRef}
                placeholder="Type a command or search..."
                onFocus={() => setOpen(true)}
                className="w-full py-4 text-lg bg-transparent outline-none placeholder:text-ink-light/40 text-ink"
              />
              {!open && (
                <div className="text-xs font-sans text-ink-light/30 uppercase tracking-widest pointer-events-none shrink-0 ml-4">
                  ⌘K
                </div>
              )}
            </div>
            
            <div 
              className={`overflow-hidden transition-all ease-in-out duration-300 ${open ? 'max-h-[350px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <CommandMenuContent 
                changeView={changeView} 
                onSelect={() => setOpen(false)} 
              />
              
              <div className="p-2 border-t border-ink/10 text-[10px] text-ink-light/40 font-sans uppercase tracking-widest flex justify-between">
                <span>Cmd+K to open</span>
                <span>Esc to close</span>
              </div>
            </div>
          </Command>
        </div>
      </div>
    </div>
  );
}

