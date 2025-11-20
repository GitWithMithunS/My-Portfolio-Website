import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Starfield from '../components/Starfield';
import Certifications from '../components/Certifications';

const Portfolio = () => {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certifications />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;