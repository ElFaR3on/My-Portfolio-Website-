import { User, MapPin, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <User className="w-6 h-6 text-cyan-400" />
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            About Me
          </h2>
        </div>
        <p className="text-lg text-zinc-400 leading-relaxed">
          A brief introduction about who I am and what drives me.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/* Left: Paragraph */}
          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50">
            <p className="text-lg text-zinc-300 leading-relaxed">
              I am a 3rd-year Computer Science student at the Egyptian Russian
              University (ERU), majoring in Cyber Security. I am highly motivated
              to build a strong foundation in securing systems and networks,
              bridging academic knowledge with practical application.
            </p>
          </div>

          {/* Right: Info Cards */}
          <div className="flex flex-col gap-4">
            {/* Top row: 2 cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Location Card */}
              <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-zinc-500" />
                  <span className="text-sm font-medium text-zinc-500">Location</span>
                </div>
                <p className="text-cyan-400 font-medium mb-1">Cairo, Egypt</p>
                <p className="text-xs text-zinc-600">Open to remote opportunities</p>
              </div>

              {/* Profile Card */}
              <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <User className="w-4 h-4 text-zinc-500" />
                  <span className="text-sm font-medium text-zinc-500">Profile</span>
                </div>
                <p className="text-cyan-400 font-medium mb-1">20 Years Old</p>
                <p className="text-xs text-zinc-600">Driven professional</p>
              </div>
            </div>

            {/* Bottom row: Education Card - full width */}
            <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-4 h-4 text-zinc-500" />
                <span className="text-sm font-medium text-zinc-500">Education</span>
              </div>
              <p className="text-cyan-400 font-medium mb-1">Cyber Security Student</p>
              <p className="text-xs text-zinc-600">Student in Egyptian Russian University (2024–2028)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
