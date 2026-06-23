import { CheckCircle2, Circle, Clock } from 'lucide-react';

type Status = 'done' | 'current' | 'upcoming';

const milestones: { year: string; title: string; description: string; status: Status }[] = [
  {
    year: '2022',
    title: 'Started Computer Science at ERU',
    description:
      'Enrolled in the Computer Science program at the Egyptian Russian University, beginning my journey into technology and computing fundamentals.',
    status: 'done',
  },
  {
    year: '2023',
    title: 'Core CS Fundamentals',
    description:
      'Completed core courses in programming (C++, Python), data structures, databases, and computer networks — forming the backbone of my technical skills.',
    status: 'done',
  },
  {
    year: '2024',
    title: 'Cyber Security Specialization',
    description:
      'Declared Cyber Security as my specialization track. Began dedicated coursework in network security, cryptography, and ethical hacking concepts.',
    status: 'done',
  },
  {
    year: '2025',
    title: 'Certifications & Practical Learning',
    description:
      'Earned Python, Cyber Security, and AI certifications. Started building a personal lab environment and exploring platforms like TryHackMe and CTF challenges.',
    status: 'done',
  },
  {
    year: '2026',
    title: 'Building Real-World Projects',
    description:
      'Currently in my 3rd year, actively developing security scripts, CTF write-ups, and solidifying networking concepts through hands-on practice and labs.',
    status: 'current',
  },
  {
    year: 'Next',
    title: 'Internship & Advanced Certs',
    description:
      'Planning to pursue security-focused internships and industry certifications (CompTIA Security+, CEH) to bridge the gap between academia and the professional world.',
    status: 'upcoming',
  },
];

const statusConfig = {
  done: {
    icon: CheckCircle2,
    iconClass: 'text-sky-400',
    dotClass: 'bg-sky-400',
    lineClass: 'bg-sky-400/30',
  },
  current: {
    icon: Clock,
    iconClass: 'text-amber-400',
    dotClass: 'bg-amber-400 animate-pulse',
    lineClass: 'bg-zinc-700',
  },
  upcoming: {
    icon: Circle,
    iconClass: 'text-zinc-600',
    dotClass: 'bg-zinc-700',
    lineClass: 'bg-zinc-800',
  },
};

export default function LearningJourney() {
  return (
    <section id="journey" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest">
          Learning Journey
        </span>
        <h2 className="text-3xl font-bold text-zinc-100 mt-3 mb-4">
          My Educational Path
        </h2>
        <p className="text-zinc-500 text-base mb-16 max-w-xl">
          A timeline of how I've been deliberately building my skills in computer science and cybersecurity.
        </p>

        <div className="relative">
          {milestones.map((m, i) => {
            const cfg = statusConfig[m.status];
            const Icon = cfg.icon;
            const isLast = i === milestones.length - 1;

            return (
              <div key={m.title} className="relative flex gap-6 pb-10">
                {/* Timeline column */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 z-10 ${
                      m.status === 'done'
                        ? 'border-sky-500/40 bg-sky-500/10'
                        : m.status === 'current'
                        ? 'border-amber-500/40 bg-amber-500/10'
                        : 'border-zinc-700 bg-zinc-900'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${cfg.iconClass}`} />
                  </div>
                  {!isLast && (
                    <div className={`w-px flex-1 mt-2 ${cfg.lineClass}`} />
                  )}
                </div>

                {/* Content */}
                <div className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`text-xs font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                        m.status === 'done'
                          ? 'text-sky-400 bg-sky-500/10'
                          : m.status === 'current'
                          ? 'text-amber-400 bg-amber-500/10'
                          : 'text-zinc-600 bg-zinc-800'
                      }`}
                    >
                      {m.year}
                    </span>
                    {m.status === 'current' && (
                      <span className="text-xs text-amber-400/70 font-medium">Current</span>
                    )}
                  </div>
                  <h3 className="text-zinc-100 font-semibold text-base mb-2">{m.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{m.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
