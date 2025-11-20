import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

const certifications = [
    {
        id: 1,
        title: "NPTEL - Fundaments of Algorithm:design and Analysis",
        issuer: "Indian Institute of Technology Kharagpur",
        date: "Jan 2024 - Feb 2024",
        description: "Learned core algorithmic techniques including time complexity, sorting, searching, greedy methods, and divide-and-conquer strategies.",
        image: "/assets/nptel_certi.png",
        link: "https://drive.google.com/file/d/1HKOuU2usxUCBskuEzUsTOjpnk9oBpz6P/view?usp=drivesdk"
    },
    {
        id: 2,
        title: "IBM - Enterprise Design Thinking Practitioner",
        issuer: "IBM",
        date: "Feb 2024",
        description: "Certified in applying IBM's Enterprise Design Thinking framework for user-centered problem solving and solution design.",
        image: "/assets/ibm_certi_2.png",
        link: "https://drive.google.com/file/d/1H1MdJywQCsVXfLGozCj9Ji3yNTnXvDQt/view"
    },
    {
        id: 3,
        title: "Internship Complition Certificate",
        issuer: "Hindustan Aeronautics Limited",
        date: "2023",
        description: "Completed hands-on internship at HAL gaining practical exposure to aerospace systems and industrial engineering workflows.",
        image: "/assets/hal.png",
        link: "https://drive.google.com/file/d/1FojmsysPzX-ZDyEAXYA63_bRBxXt8JTB/view?usp=drivesdk"
    },
    {
        id: 4,
        title: "Full Stack Web Development Internship Certificate",
        issuer: "Labmentix Pvt Limited",
        date: "Apr 2025 - Jun 2025",
        description: "Completed hands-on internship at Labmentix Pvt Limited gaining practical exposure to full stack web development.",
        image: "/assets/labmentix.png",
        link: "https://drive.google.com/file/d/15EWOyIwiIifg7jKkbEkHcSOIX2cpeWR_/view?usp=drivesdk"
    },
    {
        id: 5,
        title: "Robotics Engineering Internship Certificate",
        issuer: "Stem-X India",
        date: "Dec 2024 - Apr 2025",
        description: "Gained practical experience in robotics, embedded systems, motor control, and automation through hands-on engineering tasks.Mentored over 300+ students on those topics",
        image: "/assets/stem-x.png",
        link: "https://drive.google.com/file/d/1FkwwBBAeO_3l7nkZG8KlLYftt5YCwmuy/view?usp=drivesdk"
    },
    {
        id: 6,
        title: "Mern Full Stack Development Certificate",
        issuer: "Tecurcity (Start-up)",
        date: "Sept 2023 - July 2024",
        description: "Worked as a core-member on developing real-world full-stack projects using React, Node.js, Express, and MongoDB during a professional development internship.",
        image: "/assets/tecurcity.png",
        link: "https://drive.google.com/file/d/1G0RsZN8oUcS_3tYuWBEYsYGaEO90IDM5/view?usp=drivesdk"
    },
    // ADD MORE CERTIFICATIONS HERE
];


const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};


const Certifications = () => {
    return (
        <section id="certifications" className="relative py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >

                    {/* Section Title */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                Certifications
                            </span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-4" />
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Professional certifications and achievements (More to be added)
                        </p>
                    </motion.div>


                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.article
                                key={cert.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-[#0a192f] rounded-lg overflow-hidden border border-gray-800 hover:border-[#64ffda]/50 transition-all duration-300"
                            >
                                {/* Certificate Image
                                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#112240] to-[#0a192f] flex items-center justify-center">
                                    <Award className="text-[#64ffda]" size={64} />
                                    <AvatarImage src={cert.image} alt={cert.title} />
                                </div> */}
                                {/* Certificate Image */}
<div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#112240] to-[#0a192f] flex items-center justify-center">
    {cert.image ? (
        <img 
            src={cert.image} 
            alt={cert.title} 
            className="w-full h-full object-cover"
        />
    ) : (
        <Award className="text-[#64ffda]" size={64} />
    )}
</div>


                                {/* Certificate Content */}
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-100 mb-2">{cert.title}</h3>
                                    <p className="text-[#64ffda] text-sm font-semibold mb-2">{cert.issuer}</p>

                                    <div className="flex items-center text-gray-400 text-sm mb-3">
                                        <Calendar size={16} className="mr-2" />
                                        <time>{cert.date}</time>
                                    </div>

                                    <p className="text-gray-400 text-sm mb-3">{cert.description}</p>

                                    {cert.link && (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#64ffda] text-sm font-semibold hover:underline"
                                        >
                                            View Certificate →
                                        </a>
                                    )}

                                </div>
                            </motion.article>
                        ))}

                        {/* Placeholder for future certificates */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-[#0a192f] rounded-lg border-2 border-dashed border-gray-800 hover:border-[#64ffda]/50 transition-all duration-300 flex items-center justify-center min-h-[300px]"
                        >
                            <div className="text-center p-6">
                                <Award className="text-gray-700 mx-auto mb-4" size={48} />
                                <p className="text-gray-600 font-medium">More certifications coming soon!</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;