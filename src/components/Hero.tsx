import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)] opacity-40" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-100 mb-5 leading-tight tracking-tight">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Abdelfattah Mohamed
          </span>
          .
        </h1>

        <p className="text-lg sm:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto">
          Cyber Security Student passionate about{' '}
          <span className="text-zinc-300">network defense</span> and continuous
          learning.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={() => scrollTo('#focus')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-zinc-900 font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 hover:-translate-y-0.5"
          >
            <ArrowDown className="w-4 h-4" />
            My Current Focus
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 bg-zinc-900/50 hover:bg-zinc-800/50"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/abdelfattah-mohamed-7b0b9a39b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-cyan-400 transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/ElFaR3on"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-cyan-400 transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={() => scrollTo('#about')}
            className="text-zinc-600 hover:text-zinc-400 transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
