import { useEffect, useState, useRef } from 'react';

// Darker characters first for light backgrounds
// Denser character set for higher fidelity shading
const CHARS = ' .`^",:;Il!i~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$';

interface Props {
  src: string;
  width?: number;
  className?: string;
}

export function AsciiPortrait({ src, width = 64, className }: Props) {
  const [ascii, setAscii] = useState<string>('');
  const measureRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.crossOrigin = 'Anonymous';
    
    const handleLoad = () => {
      // Measure the actual character aspect ratio in the browser
      let charRatio = 0.5; 
      if (measureRef.current) {
        const rect = measureRef.current.getBoundingClientRect();
        if (rect.width && rect.height) {
          charRatio = rect.width / rect.height;
        }
      }

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Calculate height to maintain aspect ratio using the measured char ratio
      // Formula: height_pixels = width_pixels * (img_h / img_w) * (char_w / char_h)
      const imgAspectRatio = img.height / img.width;
      const height = Math.floor(width * imgAspectRatio * charRatio);

      canvas.width = width;
      canvas.height = height;

      // Draw white background first
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);
      
      ctx.drawImage(img, 0, 0, width, height);
      
      try {
        const data = ctx.getImageData(0, 0, width, height).data;
        let str = '';
        
        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const offset = (y * width + x) * 4;
            const r = data[offset];
            const g = data[offset + 1];
            const b = data[offset + 2];
            
            const brightness = (0.299 * r + 0.587 * g + 0.114 * b);
            
            // Increase contrast: Push shadows down, highlights up
            const contrastFactor = 10; 
            let adjustedBrightness = contrastFactor * (brightness - 128) + 128;
            adjustedBrightness = Math.max(0, Math.min(255, adjustedBrightness));
            
            const charIndex = Math.floor(((255 - adjustedBrightness) / 255) * (CHARS.length - 1));
            str += CHARS[charIndex];
          }
          str += '\n';
        }
        setAscii(str);
      } catch (e) {
        console.error('Failed to get image data', e);
      }
    };

    img.onload = handleLoad;
    img.onerror = (e) => console.error('Failed to load image', src, e);

    if (img.complete) {
      handleLoad();
    }
  }, [src, width]);

  return (
    <>
      {/* Hidden element to measure character size */}
      <pre 
        ref={measureRef} 
        className={`font-mono absolute opacity-0 pointer-events-none ${className}`}
        aria-hidden="true"
      >
        X
      </pre>

      <pre 
        className={`font-mono whitespace-pre select-none pointer-events-none ${className}`}
        aria-hidden="true"
      >
        {ascii}
      </pre>
    </>
  );
}
