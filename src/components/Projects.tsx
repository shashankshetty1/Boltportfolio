import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Shield, Keyboard } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
  icon: React.ElementType;
  features: string[];
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Malware Detection System',
      description: 'Advanced machine learning-based malware detection system using behavioral analysis and signature matching.',
      longDescription: 'Developed a comprehensive malware detection system that combines static and dynamic analysis techniques. The system uses machine learning algorithms to identify malicious patterns in executable files and provides real-time protection against various types of malware including viruses, trojans, and ransomware.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Java', 'Python', 'Machine Learning', 'TensorFlow', 'MySQL', 'Spring Boot'],
      githubUrl: 'https://github.com/shashankshetty/malware-detection',
      liveUrl: 'https://malware-detector-demo.com',
      category: 'Security',
      icon: Shield,
      features: [
        'Real-time malware scanning',
        'Machine learning-based detection',
        'Behavioral analysis engine',
        'Quarantine management',
        'Detailed threat reports'
      ]
    },
    {
      id: 2,
      title: 'Gesture-Based Virtual Keyboard',
      description: 'Innovative virtual keyboard system that recognizes hand gestures for text input using computer vision.',
      longDescription: 'Created an intuitive gesture-based virtual keyboard that uses computer vision and machine learning to recognize hand movements and gestures for text input. The system provides an alternative input method for users with mobility challenges and offers a touchless interaction experience.',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow', 'Tkinter', 'NumPy'],
      githubUrl: 'https://github.com/shashankshetty/gesture-keyboard',
      liveUrl: 'https://gesture-keyboard-demo.com',
      category: 'AI/ML',
      icon: Keyboard,
      features: [
        'Hand gesture recognition',
        'Real-time text input',
        'Customizable gestures',
        'Multi-language support',
        'Accessibility features'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcase of my major projects demonstrating technical skills, problem-solving abilities, 
            and innovation in software development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Github className="h-6 w-6" />
                  </motion.a>
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <ExternalLink className="h-6 w-6" />
                    </motion.a>
                  )}
                </div>
                <div className="absolute top-4 left-4">
                  <div className="p-2 bg-white/90 dark:bg-gray-900/90 rounded-lg">
                    <project.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <motion.button
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <X className="h-6 w-6" />
                  </button>
                  <div className="absolute top-4 left-4">
                    <div className="p-3 bg-white/90 dark:bg-gray-900/90 rounded-lg">
                      <selectedProject.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {selectedProject.title}
                    </h3>
                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                    {selectedProject.longDescription}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Key Features
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <Github className="h-5 w-5" />
                      <span>View Code</span>
                    </motion.a>
                    {selectedProject.liveUrl && (
                      <motion.a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;