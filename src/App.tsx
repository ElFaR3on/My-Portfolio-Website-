import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CurrentFocus from './components/CurrentFocus';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <CurrentFocus />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
