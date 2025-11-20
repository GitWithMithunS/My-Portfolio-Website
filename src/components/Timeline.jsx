import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { Card } from './ui/card';

const Timeline = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const timelineData = [
    {
      type: 'work',
      icon: Briefcase,
      title: 'Software Engineer',
      organization: 'Encora Innovation Labs',
      location: 'Trinity, MG Road, Bangalore, India',
      period: 'July 2025 – Present',
      description: [
        'Developing scalable Java Full-Stack applications using Spring Boot, Microservices architecture, JPA, and event-driven communication with RabbitMQ and Kafka.',
        'Designing and implementing RESTful APIs, enhancing system scalability and performance.',
        'Securing applications with Spring Security and conducting comprehensive testing using JUnit and Mockito.',
        'Actively practicing AWS services including S3, Lambda, EventBridge, DynamoDB, API Gateway, and deployment workflows to build scalable cloud-native applications',
        'Documenting APIs with Swagger and Postman for improved developer collaboration.',
      ],
      color: 'blue',
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'Junior Robotics Engineer and Tutor',
      organization: 'Stem-x India',
      location: 'Bangalore, India',
      period: 'dec 2024 – Apr 2025',
      description: [
        'Gained practical experience in building robots and working with microcontrollers and embedded systems through multiple robotics and IoT projects.',
        'Mentored over 300+ students with excellent feedback in robotics, electronics and programming concepts, fostering a collaborative learning environment.',
        'Conducted workshops and training sessions enhancing students\' technical skills and interest in STEM fields.',
        'Strengthened leadership, communication, and interpersonal skills by mentoring students, leading workshops,and coordinating with cross-functional teams.',
      ],
      color: 'cyan',
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'Full-stack Developer',
      organization: 'Tecurcity',
      location: 'Bangalore, India',
      period: 'Sept 2023 – July 2024',
      description: [
        'Designed and developed maintainable full-stack web applications using MERN stack with emphasis on reusable code patterns.',
        'Built and consumed REST APIs, integrated third-party services like Stripe improving backend infrastructure.',
        'Engineered secure authentication workflows using JWT, OAuth and Google Firebase.',
        'Improved development efficiency by 50% through Agile methodologies and scalable backend architecture.',
      ],
      color: 'green',
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'Student Intern',
      organization: 'Hindustan Aeronautics Limited (HAL)',
      location: 'Marathalli, Bangalore, India',
      period: 'Oct 2023 – Nov 2023',
      description: [
        'Completed internship at Hindustan Aeronautics Limited (HAL) in the Helicopter Division – Maintenance, Repair, and Overhaul (MRO) as an intern in the Line Replaceable Unit (LRU) lab',
        'Observed and learned about the repair and manufacturing processes of electronic components used in helicopter systems',
        'Gained insights into aerospace-grade quality control, diagnostics, and component lifecycle management',
        'Collaborated with technical teams to understand operational workflows and industry-standard practices in aviation electronic',        
      ],
      color: 'indigo',
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'B.E. in Electronics and Communication',
      organization: 'New Horizon College of Engineering - VTU',
      location: 'Marathalli, Bangalore, India',
      period: 'Dec 2021 – June 2025',
      description: [
        'CGPA: 9.24',
        'Represented NHCE at Startup Mahakumbh 2024, New Delhi',
        'Secured 1st place in VTU Handball Competition',
        'Presented scalable, full-stack solutions demonstrating innovation and entrepreneurial skills',
      ],
      color: 'blue',
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'PUC - Science(PCMCs)',
      organization: 'Deeksha Center For Learning PU College - main branch',
      location: 'Kannakpura road, Bangalore, India',
      period: 'May 2018 – Nov 2020',
      description: [
        'Percentage: 86%',
        'JEE Mains percentile: 91.8%',
        'Won District level Chess and Handball Competition.Represented bangalore in State Level for both sports',
        'Build Strong problem solving and analytical skills through rigorous coursework in Physics, Chemistry, Mathematics and Computer Science',
      ],
      color: 'cyan',
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'High School',
      organization: 'Sri Siddhi Vinayaka Residential School',
      location: 'Hattiangadi, Kundapura, Udupi, India',
      period: 'June 2017 – April 2018',
      description: [
        'Percentage: 90% (ICSE)',
        'Won multiple awards in state-level, district-level  Chess competitions , Painting contests and athlectic events',
        'Developed a solid academic foundation and strong work ethic, excelling in sports co-curricular and extracurricular activities',
      ],
      color: 'green',
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        border: 'border-blue-500/30 hover:border-blue-500/50',
        bg: 'bg-blue-900/20',
        icon: 'bg-blue-500/10 text-blue-400',
        dot: 'bg-blue-500',
      },
      cyan: {
        border: 'border-cyan-500/30 hover:border-cyan-500/50',
        bg: 'bg-cyan-900/20',
        icon: 'bg-cyan-500/10 text-cyan-400',
        dot: 'bg-cyan-500',
      },
      green: {
        border: 'border-green-500/30 hover:border-green-500/50',
        bg: 'bg-green-900/20',
        icon: 'bg-green-500/10 text-green-400',
        dot: 'bg-green-500',
      },
      indigo: {
        border: 'border-indigo-500/30 hover:border-indigo-500/50',
        bg: 'bg-indigo-900/20',
        icon: 'bg-indigo-500/10 text-indigo-400',
        dot: 'bg-indigo-500',
      },
    };
    return colors[color];
  };

  return (
    <section id="timeline" className="relative py-20 md:py-32">
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
                Experience & Education
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My professional journey and academic background
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-green-500" />

              {timelineData.map((item, index) => {
                const colors = getColorClasses(item.color);
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`relative mb-12 md:flex md:items-start ${
                      isLeft ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.3 }}
                        className={`w-4 h-4 rounded-full ${colors.dot} ring-4 ring-[#0a0e27] z-10`}
                      />
                    </div>

                    {/* Content */}
                    <div className={`md:w-1/2 pl-20 md:pl-0 ${
                      isLeft ? 'md:pr-12' : 'md:pl-12'
                    }`}>
                      <motion.div whileHover={{ scale: 1.02 }}>
                        <Card className={`p-6 ${colors.bg} ${colors.border} backdrop-blur-sm transition-all duration-300`}>
                          {/* Icon & Title */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`p-2 rounded-lg ${colors.icon}`}>
                              <item.icon size={24} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                              <p className="text-blue-300 font-semibold mb-1">{item.organization}</p>
                              <p className="text-gray-400 text-sm mb-2">{item.location}</p>
                              <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <Calendar size={14} />
                                <time dateTime={item.period}>{item.period}</time>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <ul className="space-y-2 text-gray-300">
                            {item.description.map((desc, descIndex) => (
                              <li key={descIndex} className="flex items-start gap-2 text-sm leading-relaxed">
                                <span className="text-blue-400 mt-1.5">▹</span>
                                <span>{desc}</span>
                              </li>
                            ))}
                          </ul>
                        </Card>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;