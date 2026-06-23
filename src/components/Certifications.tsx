import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Python Fundamental Course',
    issuer: 'ERU',
    file: '/certificates/python-cert.pdf',
    iconColor: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
  },
  {
    title: 'Introduction to Cyber Security',
    issuer: 'HP LIFE',
    file: '/certificates/cyber-cert.pdf',
    iconColor: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
  },
  {
    title: 'Artificial Intelligence for Beginners',
    issuer: 'HP LIFE',
    file: '/certificates/ai-cert.pdf',
    iconColor: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-6 h-6 text-cyan-400" />
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            Certifications
          </h2>
        </div>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Professional certifications and courses I've completed.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${cert.bgColor} mb-5`}
              >
                <Award className={`w-7 h-7 ${cert.iconColor}`} />
              </div>

              <h3 className="text-lg font-semibold text-zinc-100 mb-1">
                {cert.title}
              </h3>
              <p className="text-sm text-zinc-500 mb-5">
                Issued by {cert.issuer}
              </p>

              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                View Certificate
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
