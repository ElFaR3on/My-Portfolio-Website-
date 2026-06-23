import { Code2 } from 'lucide-react';

const skills = [
  { name: 'Python', color: 'from-blue-500 to-cyan-400' },
  { name: 'C++', color: 'from-blue-600 to-indigo-500' },
  { name: 'Linux', color: 'from-amber-500 to-orange-400' },
  { name: 'Networking Fundamentals', color: 'from-green-500 to-emerald-400' },
  { name: 'SQL', color: 'from-purple-500 to-violet-400' },
  { name: 'Cyber Security Fundamentals', color: 'from-cyan-500 to-blue-400' },
  { name: 'Network Security', color: 'from-teal-500 to-cyan-400' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Code2 className="w-6 h-6 text-cyan-400" />
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            Technical Toolkit
          </h2>
        </div>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Core technologies and concepts I've studied and actively practice.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative px-5 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300"
            >
              <span className="text-zinc-200 font-medium">{skill.name}</span>
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
