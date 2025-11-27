import { Command } from 'cmdk';

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
        <Item onSelect={() => handleSelect(() => changeView('home'))} shortcut="H">
          Home
        </Item>
        <Item onSelect={() => handleSelect(() => changeView('about'))} shortcut="A">
          About Me
        </Item>
        <Item onSelect={() => handleSelect(() => changeView('work'))} shortcut="W">
          Work & Experience
        </Item>
        <Item onSelect={() => handleSelect(() => changeView('contact'))} shortcut="C">
          Contact
        </Item>
      </Command.Group>

      <Command.Group heading="Quick Actions" className="[&_[cmdk-group-heading]]:mt-3 [&_[cmdk-group-heading]]:mb-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-sans [&_[cmdk-group-heading]]:text-ink-light/40 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:px-2">
        <Item onSelect={() => window.open('https://cal.com/edison', '_blank')} shortcut="⌘B">
          Book a Call
        </Item>
        <Item onSelect={() => window.open('https://aspect.inc', '_blank')} shortcut="⌘X">
          Visit Aspect
        </Item>
        <Item onSelect={() => window.open('https://github.com/chiuedison/personal-site', '_blank')} shortcut="⌘S">
          View Source Code
        </Item>
      </Command.Group>
    </Command.List>
  );
}

function Item({ children, onSelect, shortcut }: { children: React.ReactNode, onSelect?: () => void, shortcut?: string }) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="px-3 py-1.5 rounded-sm cursor-pointer text-ink-light hover:bg-ink/5 hover:text-ink transition-colors aria-selected:bg-ink/5 aria-selected:text-ink outline-none text-base font-serif normal-case flex justify-between items-center group"
    >
      <span>{children}</span>
      {shortcut && (
        <span className="font-sans text-[10px] uppercase tracking-wider opacity-30 group-hover:opacity-60 group-aria-selected:opacity-60 transition-opacity">
          {shortcut}
        </span>
      )}
    </Command.Item>
  );
}

