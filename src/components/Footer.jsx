import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, Trophy, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/GitWithMithunS', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/contact-mithun-s', label: 'LinkedIn' },
    { icon: Code2, href: 'https://leetcode.com/u/CodeWithMithun/', label: 'LeetCode' },
    { icon: Trophy, href: "https://codolio.com/profile/Hustlercode's", label: 'Codolio' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#timeline' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative py-12 border-t border-blue-500/20 bg-[#0a0e27]/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
              MITHUN.S
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full-Stack Software Engineer passionate about building scalable applications and solving complex problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-blue-900/30 rounded-lg text-gray-400 hover:text-blue-400 transition-all duration-300 border border-blue-500/20 hover:border-blue-500/50"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              <a
                href="mailto:itsmithun.dev2025@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                itsmithun.dev2025@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Mithun S. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500 fill-current" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;