import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

/**
 * PROJECTS COMPONENT
 * 
 * TO ADD MORE PROJECTS:
 * 1. Add a new project object to the 'projects' array below
 * 2. Each project should have:
 *    - title: Project name
 *    - description: Short description of the project
 *    - technologies: Array of tech stack used
 *    - github: GitHub repository URL
 *    - demo: Live demo URL (optional, set to null if not available)
 *    - image: Project image URL (optional, will show gradient if not provided)
 * 
 * EXAMPLE:
 * {
 *   title: 'My New Project',
 *   description: 'Description of my awesome project',
 *   technologies: ['React', 'Node.js', 'MongoDB'],
 *   github: 'https://github.com/username/project',
 *   demo: 'https://project-demo.com',
 *   image: '/assets/project-image.jpg'
 * }
 */

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // PROJECT DATA -  ADD MORE PROJECTS HERE
  const projects = [
    {
      title: 'BookRealm',
      description: [
        'Full-stack book marketplace supporting buying, selling, and time-based e-book rentals with a smart cart system.',
        'Admin workflows for book approvals, transaction logs, and activity monitoring.',
        'Infinite scroll and server-side pagination for optimized performance and reduced API load.',
        'Secure authentication with Firebase (email, phone, OAuth) and seamless payments via Stripe.',
        'Built with Node.js, Express, MongoDB, and a modern React + Tailwind CSS frontend.'
      ],
      technologies: ['React.js', 'MongoDB', 'Node.js', 'Express.js', 'Firebase', 'Stripe', 'OAuth'],
      github: 'https://github.com/VyoJ/BookRealm',
      demo: null,
      image: null, // Will use gradient background
    },
     {
      title: 'NewsFlix',
      description: [
        'Responsive news portal fetching real-time, daily-updated articles using the external NewsAPI service.',
        'Supports category-wise filtering, keyword-based search, and dynamic content loading for a smooth user experience.',
        'Implemented ES6 class-based React components for improved state handling and lifecycle management.',
        'Integrated server-side pagination and client-side infinite scrolling to optimize performance and reduce API load by over 40%.',
        'Built with MERN stack and ThunderClient for API testing, ensuring efficient data flow and clean API responses.'
      ],
      technologies: ['React', 'Node.js', 'Express', 'News API', 'ES6'],
      github: 'https://github.com/GitWithMithunS/News',
      demo: null,
      image: null,
    },
    {
      title: 'SecureDiary',
      description: [
      'Secure personal diary app supporting full CRUD operations with user-specific encrypted data storage across access sessions.',
      'Implemented authentication using MongoDB, salted password hashing, JWT tokenization, and OAuth login.',
      'Developed Express.js APIs with middleware , error-handling and Axios-based data operations for smooth editing, updating, and managing entries.'
    ],

      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT' , 'OAuth'],
      github: 'https://github.com/GitWithMithunS/mydiary',
      demo: null,
      image: null,
    },

    {
      title: 'Real-time Voice Translator',
      description: [
        'Real-time voice translation tool that converts spoken input into the user’s preferred language.',
        'Integrated transformer-based models to detect emotions from both speech and text inputs.',
        'Built with Python, Google Translation APIs, and Streamlit for seamless recording, translation, and emotion analysis.'
      ],
      technologies: ['Python', 'Google APIs', 'NLP', 'Transformers'],
      github: null,
      demo: null,
      image: null,
    },
    {
      title: 'E-Charge',
      description: [
        'Built a scalable EV smart-charging platform that helps users discover nearby charging points and improves overall EV accessibility.',
        'Developed a fast, responsive interface using Next.js with smooth UI animations powered by Framer Motion.',
        'Designed intuitive UX flows to simplify EV charging planning and enhance user experience.'
      ],
      technologies: ['Next.js', 'Framer Motion', 'React'],
      github: 'https://github.com/GitWithMithunS/E-Charge',
      // demo: 'https://e-charge.netlify.app/',
      demo: 'https://e-charge-beta.netlify.app/',
      image: null,
    },
    {
      title: 'Text Analyzer',
      description: [
        'Text analysis tool built with React.js and Bootstrap, offering text formatting, transformation, and cleanup utilities.',
        'Implemented dark/light mode using useState and useEffect, with toast-based notifications for user feedback.',
        'Used React routing, props, and event handling to manage dynamic UI behavior and deployed the app on Netlify.'
      ],
      technologies: ['React', 'Bootstrap' , 'React Hooks' , 'Toast Notifications'],
      github: 'https://github.com/GitWithMithunS/Text_analyzer_website',
      demo: 'https://mellifluous-elf-9138e4.netlify.app/',
      image: null,
    },
    {
      title: 'Survillance Robot',
      description: [
        'Built a surveillance robot using the ESP32-CAM module for remote monitoring, live video streaming, and spy-cam capability in hard-to-reach areas.',
        'Implemented Wi-Fi–based mobile/web control for robot movement and real-time camera feed through a lightweight web interface.',
        'Used an L298N motor driver (H-bridge) to control DC motors, enabling smooth directional movement and reliable robotics operation.'
      ],
      technologies: ['React', 'Bootstrap' , 'React Hooks' , 'Toast Notifications'],
      github: null,
      demo: null,
      image: null,
    },
  ];

  // Gradient backgrounds for projects without images
  const gradients = [
    'from-blue-600 to-cyan-600',
    'from-cyan-600 to-teal-600',
    'from-teal-600 to-green-600',
    'from-purple-600 to-blue-600',
  ];

  return (
    <section id="projects" className="relative py-20 md:py-32">
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
                Featured Projects
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Showcase of my recent work and side projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden bg-blue-900/20 border-blue-500/30 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                  {/* Project Image/Gradient */}
                  <div className={`h-48 bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center relative overflow-hidden group`}>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-white text-6xl font-bold opacity-20">
                        {project.title.substring(0, 2)}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.github && (
                        <Button
                          onClick={() => window.open(project.github, '_blank')}
                          size="sm"
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-black"
                        >
                          <Github size={16} className="mr-2" />
                          Code
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          onClick={() => window.open(project.demo, '_blank')}
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    {/* <p className="text-gray-300 mb-4 flex-grow leading-relaxed"> */}
                      {/* {project.description} */}
                      {/* </p> */}

                      <ul className="space-y-2 text-gray-300">
                        {project.description.map((desc, descIndex) => (
                          <li key={descIndex} className="flex items-start gap-2 text-sm leading-relaxed">
                            <span className="text-blue-400 mt-1.5">▹</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>




                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-blue-500/10 text-blue-300 border border-blue-500/30 hover:border-blue-500/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Link */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Button
              onClick={() => window.open('https://github.com/GitWithMithunS', '_blank')}
              size="lg"
              variant="outline"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10"
            >
              <Github className="mr-2" />
              View More on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;