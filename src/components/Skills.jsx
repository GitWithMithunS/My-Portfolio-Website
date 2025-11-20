import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Wrench, Cloud, GitBranch } from 'lucide-react';
import { Card } from './ui/card';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      color: 'from-blue-500 to-cyan-500',
      iconColor: 'text-blue-400',
      skills: ['C++', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS'],
    },
    {
      icon: Server,
      title: 'Frameworks',
      color: 'from-cyan-500 to-teal-500',
      iconColor: 'text-cyan-400',
      skills: ['Spring Boot', 'React.js', 'Node.js', 'Express.js', 'Hibernate'],
    },
    {
      icon: Database,
      title: 'Databases & Messaging',
      color: 'from-teal-500 to-green-500',
      iconColor: 'text-teal-400',
      skills: ['MongoDB', 'SQL', 'Kafka', 'RabbitMQ'],
    },
    {
      icon: Wrench,
      title: 'Developer Tools',
      color: 'from-green-500 to-emerald-500',
      iconColor: 'text-green-400',
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Swagger', 'VS Code', 'IntelliJ'],
    },
    {
      icon: Cloud,
      title: 'Cloud & Services',
      color: 'from-emerald-500 to-blue-500',
      iconColor: 'text-emerald-400',
      skills: ['AWS(EC2, S3, Lambda, IAM, DynamoDB)', 'Firebase', 'Stripe', 'H2', 'Mongodb Atlas'],
    },
    {
      icon: GitBranch,
      title: 'Core Skills',
      color: 'from-purple-500 to-pink-500',
      iconColor: 'text-purple-400',
      skills: ['DSA', 'STL', 'OOP', 'RestApis', 'Microservices', 'Agile', 'SDLC'],
    },
  ];

  return (
    <section id="skills" className="relative py-20 md:py-32">
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
                Technical Skills
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 bg-gradient-to-br from-blue-900/20 to-blue-900/5 border-blue-500/30 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 h-full">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10`}>
                      <category.icon className={category.iconColor} size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1.5 text-sm bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/30 hover:border-blue-500/50 hover:bg-blue-500/20 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-sm">
              Continuously learning and expanding my skill set with the latest technologies
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;