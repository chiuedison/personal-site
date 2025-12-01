import { useState } from 'react';
import { profile } from '../data';
import { Typewriter } from '../components/Typewriter';

export function Work() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="max-w-2xl mx-auto space-y-12 animate-fade-in pb-20 relative">
      <header className="border-b border-ink/10 pb-8 mb-8 relative z-10">
        <h1 className="text-3xl font-medium">
          <Typewriter 
            text="Work & Experience" 
            speed={50} 
            delay={200} 
            cursor={false} 
            onComplete={() => setShowContent(true)}
          />
        </h1>
      </header>

      <div className={`transition-all duration-500 ease-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="space-y-12">
          {profile.experience.map((role, index) => (
            <div key={index} className="group relative">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-xl font-medium text-ink">{role.company}</h3>
                <span className="font-sans text-sm text-ink-light/50">{role.period}</span>
              </div>
              <p className="text-lg text-ink-light italic mb-4">{role.role}</p>
              <p className="text-lg leading-relaxed text-ink-light/80 font-light">
                {role.description}
                {index === 0 && <span className="animate-blink ml-0.5 font-medium text-ink">_</span>}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-8 border-t border-ink/10 relative">
          <h2 className="text-2xl font-medium mb-6">
            Education
          </h2>
          <div className="flex justify-between items-baseline relative z-10">
            <div>
              <h3 className="text-xl font-medium">{profile.education.school}</h3>
              <p className="text-ink-light italic mt-1">{profile.education.degree}</p>
              <p className="text-ink-light italic mt-0.5 opacity-80">{profile.education.minor}</p>
            </div>
            <div className="text-right">
              <span className="font-sans text-sm text-ink-light/50 block">{profile.education.period}</span>
              <span className="font-sans italic text-sm text-ink-light/50 block mt-1">GPA: {profile.education.gpa}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
