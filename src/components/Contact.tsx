import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Shield,
} from 'lucide-react';

const contactInfo = [
  {
    title: 'Email',
    value: 'mabdelfattah406@gmail.com',
    subText: 'Primary communication',
    icon: Mail,
    iconColor: 'text-red-400',
    iconBg: 'bg-red-400/10',
  },
  {
    title: 'Phone / WhatsApp',
    value: '+201117283235',
    subText: 'Available for urgent matters',
    icon: Phone,
    iconColor: 'text-green-400',
    iconBg: 'bg-green-400/10',
  },
  {
    title: 'Location',
    value: 'Cairo, Egypt',
    subText: 'Open to remote opportunities',
    icon: MapPin,
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-400/10',
  },
  {
    title: 'GitHub',
    value: '@ElFaR3on',
    subText: 'View my repositories',
    icon: Github,
    iconColor: 'text-zinc-300',
    iconBg: 'bg-zinc-700/50',
  },
  {
    title: 'LinkedIn',
    value: '/in/abdelfattah-mohamed',
    subText: 'Professional networking',
    icon: Linkedin,
    iconColor: 'text-sky-400',
    iconBg: 'bg-sky-400/10',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Mail className="w-6 h-6 text-cyan-400" />
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            Contact Information
          </h2>
        </div>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Get in touch with me through any of these channels.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {contactInfo.map((contact) => (
            <div
              key={contact.title}
              className="flex items-start gap-4 p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300"
            >
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-lg ${contact.iconBg} flex items-center justify-center`}
              >
                <contact.icon className={`w-5 h-5 ${contact.iconColor}`} />
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-medium text-zinc-500 mb-0.5">
                  {contact.title}
                </h3>
                <p className="text-zinc-200 font-medium truncate">
                  {contact.value}
                </p>
                <p className="text-sm text-zinc-600 mt-1">{contact.subText}</p>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-24 pt-8 border-t border-zinc-800/50">
          <div className="flex items-center justify-center gap-3 text-zinc-400">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span className="text-sm">
              Abdelfattah Mohamed · Cyber Security Student
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}
