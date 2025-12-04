import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="font-display bg-background-dark text-text-dark antialiased">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />
        <main>
          <Hero />
          <div className="space-y-24 md:space-y-32">
            <About />
            <Skills />
            <Portfolio />
            <Experience />
            <Testimonial />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
