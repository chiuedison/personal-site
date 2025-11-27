import { useState, useEffect, useRef } from 'react'
import { CommandMenuModal } from './components/CommandMenuModal'
import { Home } from './components/Home'
import { About } from './components/About'
import { Work } from './components/Work'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Typewriter } from './components/Typewriter'
import { profile } from './data'
import type { View } from './components/CommandMenuContent'

interface Point {
  x: number;
  y: number;
  age: number; // Timestamp
}

function App() {
  const [view, setView] = useState<View>('home')
  const [isCmdOpen, setIsCmdOpen] = useState(false)
  
  const highlightRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<Point[]>([])
  const requestRef = useRef<number>(0)

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Allow global shortcuts even if input is focused, IF they use a modifier
      const isInput = e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement;

      // Navigation (Single keys, blocked by input)
      if (!isInput && !e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
        switch (e.key.toLowerCase()) {
          case 'h': setView('home'); break
          case 'a': setView('about'); break
          case 'w': setView('work'); break
          case 'c': setView('contact'); break
        }
      }

      // Actions (Modifier keys, work everywhere)
      if (e.metaKey || e.ctrlKey) {
        switch (e.key.toLowerCase()) {
          case 'b': 
            e.preventDefault(); 
            window.open('https://cal.com/edison', '_blank'); 
            break;
          case 'x': 
            e.preventDefault(); 
            window.open('https://aspect.inc', '_blank'); 
            break;
          case 's': 
            e.preventDefault(); 
            window.open('https://github.com/chiuedison/personal-site', '_blank'); 
            break;
        }
      }
    }

    window.addEventListener('keydown', handleGlobalKeyDown)
    return () => window.removeEventListener('keydown', handleGlobalKeyDown)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Optimization: Only add points if distance > 5px or it's been a while
      const now = Date.now()
      const lastPoint = trailRef.current[trailRef.current.length - 1]
      
      if (lastPoint) {
        const dx = e.pageX - lastPoint.x
        const dy = e.pageY - lastPoint.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 5 && now - lastPoint.age < 50) return // Skip if too close/soon
      }

      // Add new point
      trailRef.current.push({ x: e.pageX, y: e.pageY, age: now })
      
      // Update CSS vars for the main cursor blob (handled by CSS for smoothness)
      document.documentElement.style.setProperty('--mouse-x', `${e.pageX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.pageY}px`)
    }

    const animate = () => {
      const now = Date.now()
      // Keep points younger than 600ms (reduced from 1000ms for perf)
      // Filter out old points
      trailRef.current = trailRef.current.filter(p => now - p.age < 600)

      if (highlightRef.current) {
        // Base mask for the current cursor (the "blob")
        // We can keep the CSS-defined mask for the main cursor, and append trail masks?
        // No, mask-image overrides. We need to reconstruct the whole mask string.
        // Let's rebuild the main cursor blob + the trail points.
        
        // 1. Main Cursor Blob (recreating the CSS logic in JS for consistency)
        //    This ensures we don't lose the main cursor when we set inline styles.
        //    Actually, we can read the CSS vars, but easier to just use the last point.
        //    However, to be robust, let's just use the trail for EVERYTHING.
        //    The "head" of the trail is the cursor.
        
        const points = trailRef.current
        
        if (points.length > 0) {
          const maskGradients = points.map(p => {
            const age = now - p.age
            const life = age / 1000 // 0.0 to 1.0
            
            // Fade in (0-30%), then fade out slowly
            // Use ease-out for fade-in to make it smoother
            let opacity = 0
            const fadeInDuration = 0.3 // 30% of life
            
            if (life < fadeInDuration) {
              opacity = Math.pow(life / fadeInDuration, 3) // Cubic easing for softer start
            } else {
              opacity = 1 - ((life - fadeInDuration) / (1 - fadeInDuration))
            }
            
            // Ensure opacity is valid
            opacity = Math.max(0, Math.min(1, opacity))
            
            const size = 80 * opacity // Slightly larger max size
            return `radial-gradient(circle ${size}px at ${p.x}px ${p.y}px, black ${40 * opacity}%, transparent 100%)`
          }).join(', ')
          
          // Combine with the "main" blob which is just the latest point(s) but bigger?
          // Let's stick to just the trail for now, but maybe make the newest points bigger.
          
          highlightRef.current.style.maskImage = maskGradients
          highlightRef.current.style.webkitMaskImage = maskGradients
        } else {
           // Hide everything when no trail
           const emptyMask = 'radial-gradient(circle 0px at 0 0, transparent 0%, transparent 100%)'
           highlightRef.current.style.maskImage = emptyMask
           highlightRef.current.style.webkitMaskImage = emptyMask
        }
      }
      
      requestRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    requestRef.current = requestAnimationFrame(animate)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(requestRef.current)
    }
  }, [])

  return (
    <div className="min-h-screen bg-paper/80 bg-noise text-ink font-serif selection:bg-ink/75 selection:text-paper flex flex-col items-center pt-12 pb-6 px-6 relative overflow-x-hidden">
      
      {/* Grid Backgrounds */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-grid-pattern opacity-[0.6] h-full" />
      <div 
        ref={highlightRef}
        className="absolute inset-0 pointer-events-none z-0 bg-grid-pattern-highlight opacity-0 transition-opacity duration-300 lg:opacity-100 h-full" 
        style={{ maskImage: 'none', WebkitMaskImage: 'none' }} // Initial state
      />

      {/* Letterhead Header */}
      <header className="absolute top-0 left-0 w-full p-6 md:p-10 flex justify-between items-start pointer-events-none z-10 text-[10px] md:text-xs font-serif uppercase tracking-[0.15em] text-ink-light/60 select-none">
        <div>
          <Typewriter text="Personal Site" speed={60} cursor={false} />
        </div>
        <div className="text-right flex flex-col gap-1">
          <Typewriter text="Software Engineer" delay={1500} speed={50} cursor={false} />
          <Typewriter text="New York, NY" delay={2500} speed={50} cursor={false} />
        </div>
      </header>

      {/* Corner Crop Marks */}
      <div className="fixed inset-0 pointer-events-none z-20 opacity-40 mix-blend-multiply">
        {/* Top Left */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-ink/70 rounded-tl-sm" />
        {/* Top Right */}
        <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-ink/70 rounded-tr-sm" />
        {/* Bottom Left */}
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-ink/70 rounded-bl-sm" />
        {/* Bottom Right */}
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-ink/70 rounded-br-sm" />
      </div>

      {/* Global Command Menu (only when not on home) */}
      {view !== 'home' && (
        <CommandMenuModal 
          open={isCmdOpen} 
          onOpenChange={setIsCmdOpen}
          changeView={setView} 
        />
      )}
      
      <div className="w-full max-w-[640px] flex flex-col flex-1">
        {/* Navigation Header (visible on all pages except Home, or always minimal) */}
        {view !== 'home' && (
          <nav className="mb-12 flex justify-between items-center animate-fade-in">
            <button 
              onClick={() => setView('home')}
              className="text-ink text-xl hover:underline decoration-1 underline-offset-4 cursor-pointer"
            >
              {profile.name}
            </button>
            <button 
              onClick={() => setIsCmdOpen(true)}
              className="text-xs font-sans uppercase tracking-widest text-ink-light/50 hover:text-ink cursor-pointer"
            >
              Menu ⌘K
            </button>
          </nav>
        )}

        <main>
          {view === 'home' && <Home changeView={setView} />}
          {view === 'about' && <About />}
          {view === 'work' && <Work />}
          {view === 'contact' && <Contact />}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default App
