import { Command } from 'cmdk';
import { profile } from '../data';

export type View = 'home' | 'about' | 'work' | 'contact';

interface Props {
  changeView: (view: View) => void;
  onSelect?: () => void;
}

export function CommandMenuContent({ changeView, onSelect }: Props) {
  const handleSelect = (callback: () => void) => {
    callback();
    onSelect?.();
  };

  return (
    <Command.List className="p-2 overflow-y-auto max-h-[300px] scroll-py-2">
      <Command.Empty className="p-4 text-center text-ink-light/60 italic">
        No results found.
      </Command.Empty>

      <Command.Group heading="Navigation" className="[&_[cmdk-group-heading]]:mt-3 [&_[cmdk-group-heading]]:mb-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-sans [&_[cmdk-group-heading]]:text-ink-light/40 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:px-2">
        <Item onSelect={() => handleSelect(() => changeView('home'))}>
          Home
        </Item>
        <Item onSelect={() => handleSelect(() => changeView('about'))}>
          About Me
        </Item>
        <Item onSelect={() => handleSelect(() => changeView('work'))}>
          Work & Experience
        </Item>
        <Item onSelect={() => handleSelect(() => changeView('contact'))}>
          Contact
        </Item>
      </Command.Group>

      <Command.Group heading="Quick Actions" className="[&_[cmdk-group-heading]]:mt-3 [&_[cmdk-group-heading]]:mb-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-sans [&_[cmdk-group-heading]]:text-ink-light/40 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:px-2">
        <Item onSelect={() => window.open('https://cal.com/edison', '_blank')}>
          Book a Call
        </Item>
        <Item onSelect={() => window.open('https://aspect.inc', '_blank')}>
          Visit Aspect
        </Item>
        <Item onSelect={() => window.open('https://github.com/chiuedison/personal-site', '_blank')}>
          View Source Code
        </Item>
      </Command.Group>
    </Command.List>
  );
}

function Item({ children, onSelect }: { children: React.ReactNode, onSelect?: () => void }) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="px-3 py-1.5 rounded-sm cursor-pointer text-ink-light hover:bg-ink/5 hover:text-ink transition-colors aria-selected:bg-ink/5 aria-selected:text-ink outline-none text-base font-serif normal-case"
    >
      {children}
    </Command.Item>
  );
}

