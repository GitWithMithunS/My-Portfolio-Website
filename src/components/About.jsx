import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, Trophy , Building2 , Braces } from 'lucide-react';
import { Card } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const achievements = [
    {
      icon: Code2,
      title: 'LeetCode Knight',
      description: 'Top 3.48% Globally | 1937+ Rating | 600+ Problems Solved on Leetcode',
      color: 'text-yellow-400',
    },
    {
      icon: Braces,
      title: 'CodeChef 3-Star',
      description: 'Strong expertise in Data Structures & Algorithms',
      color: 'text-blue-400',
    },
    {
      icon: Trophy,
      title: 'Global Rank of 1720 at Codolio',
      description: 'Solved over 1000+ questions across platforms | 745.12/900 Cumulative-score(combination of DSA , Cp and Development) ',
      color: 'text-blue-400',
    },
    {
      icon: Building2,
      title: 'Start-up Mahakumb , New Delhi',
      description: 'Presented a scalable EV smart-charging platform focused on accessible nearby charging points and strengthening the EV infrastructure.',
      color: 'text-blue-400',
    },

  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/GitWithMithunS', label: 'GitHub', color: 'hover:text-white' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/contact-mithun-s', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Code2, href: 'https://leetcode.com/u/CodeWithMithun/', label: 'LeetCode', color: 'hover:text-yellow-400' },
    { icon: Trophy, href: "https://codolio.com/profile/Hustlercode's", label: 'Codolio', color: 'hover:text-purple-400' },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Profile Image & Social Links */}
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              {/* Profile Image Placeholder */}
              {/* TO ADD YOUR PROFILE PHOTO: Place your image in /app/frontend/public/assets/profile.jpg */}
<Avatar className="w-72 h-72 md:w-96 md:h-96 border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                <AvatarImage src="/assets/profile.jpg" alt="Mithun S" />
                <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                  MS
                </AvatarFallback>
              </Avatar>

              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-blue-900/30 rounded-lg text-gray-400 ${social.color} transition-all duration-300 border border-blue-500/20 hover:border-blue-500/50`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div  variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Full-Stack Software Engineer
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Currently working at <span className="text-blue-400 font-semibold">Encora Innovation Labs</span>, 
                where I develop scalable Java Full-Stack applications using Spring Boot, Microservices architecture, 
                and event-driven communication with RabbitMQ and Kafka.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                With a strong foundation in <span className="text-blue-400 font-semibold">MERN Stack</span> and 
                expertise in building RESTful APIs, I've successfully delivered full-stack web applications 
                that emphasize maintainable code, scalability, and robust security implementations.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Graduated from <span className="text-blue-400 font-semibold">New Horizon College of Engineering - VTU</span> with 
                a CGPA of <span className="text-blue-400 font-semibold">9.24</span> in Electronics and Communication Engineering.
              </p>

              {/* Achievements Cards */}
              <div className="grid gap-4 mt-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.4 }}
                                        
                  >
                    <Card className="p-4 bg-blue-900/20 border-blue-500/30 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-blue-500/10 ${achievement.color}`}>
                          <achievement.icon size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{achievement.title}</h4>
                          <p className="text-sm text-gray-400">{achievement.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;