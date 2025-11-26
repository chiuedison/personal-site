import { useState, useEffect } from 'react';

interface Props {
  text: string | string[];
  delay?: number;
  speed?: number;
  className?: string;
  cursor?: boolean;
  onComplete?: () => void;
}

export function Typewriter({ text, delay = 0, speed = 50, className = '', cursor = true, onComplete }: Props) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const fullText = Array.isArray(text) ? text.join('\n') : text;

  useEffect(() => {
    let timeout: number;
    
    const startTyping = () => {
      setIsTyping(true);
      let index = 0;
      
      const typeChar = () => {
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1));
          index++;
          timeout = window.setTimeout(typeChar, speed + Math.random() * 30); // Add slight randomness
        } else {
          setIsTyping(false);
          if (onComplete) onComplete();
        }
      };
      
      typeChar();
    };

    const startTimeout = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeout);
    };
  }, [fullText, delay, speed]);

  // Blink cursor effect
  useEffect(() => {
    if (!cursor) return;
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, [cursor]);

  return (
    <span className={`whitespace-pre-line inline-block min-h-[1em] ${className}`}>
      {displayedText}
      {cursor && (
        <span className="inline-block w-[0.5em] h-[1em] bg-ink-light/60 ml-[1px] align-middle" style={{ opacity: (isTyping || showCursor) ? 1 : 0 }} />
      )}
    </span>
  );
}

