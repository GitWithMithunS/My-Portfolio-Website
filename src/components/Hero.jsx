import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Code2, Trophy, ArrowBigDown , ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      {/* Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute w-96 h-96 border border-blue-500/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[500px] h-[500px] border border-cyan-500/10 rounded-full"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Welcome Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-blue-400 text-sm md:text-base font-medium mb-4 tracking-wider uppercase"
          >
            Welcome to my digital space
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              MITHUN S
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 font-light max-w-3xl mx-auto"
          >
            Full-Stack Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting scalable applications with Java, Spring Boot, React & Microservices.
            <br className="hidden md:block" />
            Knight at LeetCode | Top 3.48% Globally
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg group transition-all duration-300"
            >
              Get in Touch  
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            {/* <Button
              onClick={() => window.open('https://github.com/GitWithMithunS', '_blank')}
              size="lg"
              variant="outline"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-6 text-lg transition-all duration-300"
            >
              <Github className="mr-2" />
              View GitHub
            </Button> */}
            <Button
              onClick={() => window.open('/assets/resume.pdf', '_blank')}
              size="lg"
              variant="outline"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-6 text-lg transition-all duration-300"
            >
              Get Resume
              <ArrowDown className="ml-2" />
            </Button>

          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex gap-6 justify-center mt-12"
          >
            {[
              { icon: Github, href: 'https://github.com/GitWithMithunS', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/contact-mithun-s', label: 'LinkedIn' },
              { icon: Code2, href: 'https://leetcode.com/u/CodeWithMithun/', label: 'LeetCode' },
              { icon: Trophy, href: "https://codolio.com/profile/Hustlercode's", label: 'Codolio', color: 'hover:text-purple-400' },

            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          {/* <div className="w-6 h-10 border-2 border-[#64ffda] rounded-full flex justify-center">
                    <motion.div
                      className="w-1.5 h-1.5 bg-[#64ffda] rounded-full mt-2"
                      
                      /> */}
          {/* </div>  */}


          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1 h-2 bg-blue-500 rounded-full mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }} />
          </motion.div>


          {/* Scroll Indicator
                <motion.div
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  >
                  <div className="w-6 h-10 border-2 border-[#64ffda] rounded-full flex justify-center">
                    <motion.div
                      className="w-1.5 h-1.5 bg-[#64ffda] rounded-full mt-2"
                      animate={{ y: [0, 20, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      />
                  </div> */}

        </motion.div>




      </div>
    </section>
  );
};

export default Hero;