export const profile = {
  name: "Edison Chiu",
  title: "Co-founder @ Aspect (YC F25)",
  location: "New York, NY",
  email: "edison@aspect.inc",
  links: {
    github: "https://github.com/chiuedison",
    linkedin: "https://linkedin.com/in/edison-chiu",
  },
  home: {
    description: (
      <>
        I'm a builder and engineer passionate about creating intuitive AI systems and scaling the infrastructure to power them.
        Currently, I'm creating{' '}
        <a 
          href="https://aspect.inc" 
          target="_blank" 
          rel="noreferrer" 
          className="font-medium text-ink underline decoration-ink/30 hover:decoration-ink decoration-1 underline-offset-4 transition-all"
        >
          Aspect
        </a>:
        <br />
        An agentic system-of-record for the world's visual content
        <span className="animate-blink ml-0.5 font-medium">_</span>
      </>
    ),
  },
  about: {
    bio: (
      <>
        <p>
          Hey there! I'm Edison, a founder and software engineer based out of New York. I'm obsessed with bridging the gap between AI systems and real-world workflows, especially the infrastructure and backends that power them.
          My expertise lies in applying top research (currently VLMs) to production applications, designing data stores for new models, and deploying these servers at large scales.
          I also have deep knowledge in video processing, file systems, and human-computer interaction (HCI) research.
        </p>
        
        <h3 className="font-sans text-xs uppercase tracking-widest text-ink-light/50 mt-8 mb-2">Current Focus</h3>
        <p>
          I'm building{' '}
          <a 
            href="https://aspect.inc" 
            target="_blank" 
            rel="noreferrer" 
            className="font-medium text-ink underline decoration-ink/30 hover:decoration-ink decoration-1 underline-offset-4 transition-all"
          >
            Aspect
          </a>{' '}
          (YC F25) with my best friends to create the first agentic system-of-record for the world's visual content, starting with enterprise media teams.
        </p>

        <h3 className="font-sans text-xs uppercase tracking-widest text-ink-light/50 mt-8 mb-2">Personal</h3>
        <p>
          Outside of work, I love playing soccer, skiing, and cooking my favorite asian dishes. I also have 3 wonderful birds (1 parrot and 2 parakeets) that can talk and sing.
        </p>
      </>
    ),
  },
  contact: {
    description: "I'm always open to chatting about cool tech, collaborations, new AI drops, or just meeting cool people :)",
  },
  experience: [
    {
      company: "Aspect (YC F25)",
      role: "Co-founder",
      period: "Aug 2025 - Present",
      description: "Building the future of visual file storage and the agentic workflows that are enabled by it. Accepted into the Y Combinator Fall 2025 batch",
    },
    {
      company: "Shade",
      role: "Founding Engineer",
      period: "Dec 2022 - Aug 2025",
      description: "Built and owned the entire backend, infrastructure, and AI systems. Directed product development, created distributed file indexing modules, and designed asset search infrastructure. Implemented custom AI models in visual and facial recognition.",
    },
    {
      company: "Bloomberg LP",
      role: "Software Engineer Intern",
      period: "May 2023 - Aug 2023",
      description: "Overhauled stock data retrieval logic for market feeds infrastructure and enhanced stock exchange processing pipelines.",
    },
    {
      company: "Flash",
      role: "Software Researcher",
      period: "Dec 2022",
      description: "Implemented KNN regression model and modular SLAM system for Bluetooth indoor localization. Developed BFS navigation algorithm to generate optimal paths within multilevel spaces.",
    },
    {
      company: "Amazon",
      role: "Software Development Engineer Intern",
      period: "May 2022 - Aug 2022",
      description: "Developed end-to-end device management dashboards and restructured databases for higher scale within the Amazon Fresh organization.",
    },
  ],
  education: {
    school: "University of Michigan - Ann Arbor",
    degree: "B.S.E. in Computer Science",
    minor: "Minor in Business",
    period: "Sep 2020 - Apr 2024",
    gpa: "4.0/4.0",
  },
  skills: [
    "C/C++", "Python", "TypeScript", "React", "AWS", "Docker", "Infrastructure", "AI Systems"
  ]
};
