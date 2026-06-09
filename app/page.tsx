import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Education from './components/Education';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
