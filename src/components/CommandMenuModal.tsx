import { Command } from 'cmdk';
import { useEffect, useState } from 'react';
import { CommandMenuContent } from './CommandMenuContent';
import type { View } from './CommandMenuContent';

interface Props {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  changeView: (view: View) => void;
}

export function CommandMenuModal({ open: controlledOpen, onOpenChange, changeView }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (controlledOpen !== undefined) {
      setOpen(controlledOpen);
    }
  }, [controlledOpen]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        const newState = !open;
        setOpen(newState);
        onOpenChange?.(newState);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, onOpenChange]);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={(val) => {
        setOpen(val);
        onOpenChange?.(val);
      }}
      label="Global Command Menu"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/20 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setOpen(false);
          onOpenChange?.(false);
        }
      }}
    >
      <div className="w-full max-w-lg bg-[#FAF9F6] backdrop-blur-md border border-ink/20 shadow-2xl overflow-hidden rounded-xl font-serif animate-fade-in relative">
        <Command.Input 
          placeholder="Type a command or search..."
          className="w-full p-4 text-lg bg-transparent border-b-dashed-custom outline-none placeholder:text-ink-light/40 text-ink"
        />
        
        <CommandMenuContent 
          changeView={changeView} 
          onSelect={() => {
            setOpen(false);
            onOpenChange?.(false);
          }} 
        />

        <div className="p-2 border-t border-ink/10 text-[10px] text-ink-light/40 font-sans uppercase tracking-widest flex justify-between bg-ink/5">
          <span>Cmd+K to open</span>
          <span>Esc to close</span>
        </div>
      </div>
    </Command.Dialog>
  );
}

