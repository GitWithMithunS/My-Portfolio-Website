import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Card } from './ui/card';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

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

  const faqs = [
    {
      question: 'What technologies do you specialize in?',
      answer:
        'I specialize in Full-Stack development with Java Spring Boot for backend and React.js for frontend. I have extensive experience with Microservices architecture, MongoDB, SQL databases, and event-driven systems using Kafka and RabbitMQ. I\'m also proficient in MERN stack (MongoDB, Express.js, React.js, Node.js) and cloud services like AWS.',
    },
    {
      question: 'What kind of projects have you worked on?',
      answer:
        'I\'ve worked on various projects including e-commerce platforms with payment integrations (Stripe), secure authentication systems (JWT, OAuth, Firebase), RESTful APIs, real-time applications, and scalable microservices. My projects range from full-stack web applications to voice translation tools using NLP and transformer models.',
    },
    {
      question: 'How strong are your problem-solving skills?',
      answer:
        'I\'m a LeetCode Knight with 1937+ rating, ranking in the top 3.48% globally with 1000+ problems solved. I also hold a 3-Star rating on CodeChef. I regularly practice algorithmic problem-solving using C++ and Java, with strong expertise in Data Structures, Algorithms, and competitive programming.',
    },
    {
      question: 'What\'s your approach to software development?',
      answer:
        'I follow Agile methodologies and emphasize writing clean, maintainable, and scalable code. I believe in test-driven development (TDD) using JUnit and Mockito, comprehensive API documentation with Swagger, and implementing robust security practices with Spring Security. Code quality and reusability are always my top priorities.',
    },
    {
      question: 'What are your hobbies and interests?',
      answer:
        'I enjoy playing sports—especially cricket, badminton, table-tennis, chess—and have earned multiple awards in chess, handball, athletic(field events) and painting competitions. I also love e-sports, particularly BGMI, and enjoy spending time on creative and physical activities that keep me energized. In my free time, I actively follow the stock market and global business trends, and I’m deeply curious about company financials, along with fundamental and technical analysis.',
    },
    {
      question: 'How can I collaborate with you?',
      answer:
        'You can reach out to me via the contact form on this page, connect with me on LinkedIn, or check out my projects on GitHub. I\'m always interested in discussing new opportunities, tech collaborations, or interesting problems to solve. Let\'s build something amazing together!',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 md:py-32">
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
                Frequently Asked Questions
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get to know more about my skills and work
            </p>
          </motion.div>

          {/* FAQ List */}
          <motion.div variants={containerVariants} className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-blue-900/20 border-blue-500/30 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                  {/* Question - Using details/summary for semantic HTML5 */}
                  <details
                    open={openIndex === index}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFAQ(index);
                    }}
                  >
                    <summary
                      className="flex items-center justify-between p-6 cursor-pointer list-none"
                      onClick={(e) => e.preventDefault()}
                    >
                      <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="text-blue-400" size={24} />
                      </motion.div>
                    </summary>

                    {/* Answer */}
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </details>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;