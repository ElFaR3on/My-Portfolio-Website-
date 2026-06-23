import { Lock } from 'lucide-react';

export default function CurrentFocus() {
  return (
    <section id="focus" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Lock className="w-6 h-6 text-cyan-400" />
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            Current Focus & Upcoming Work
          </h2>
        </div>
        <p className="text-lg text-zinc-400 leading-relaxed">
          What I'm working on right now.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-2xl p-10 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-800/80 mb-6">
              <Lock className="w-8 h-8 text-cyan-400" />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 text-cyan-400 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Coming Soon
            </div>

            <h3 className="text-xl font-semibold text-zinc-100 mb-4">
              Building the Foundation
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              I am currently in the foundational learning phase, focusing on
              mastering cybersecurity basics and setting up my practice labs. I
              will be sharing my practical projects, CTF write-ups, and security
              scripts here very soon! Stay tuned.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
