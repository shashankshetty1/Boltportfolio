import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Phone, ExternalLink, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1"
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SS
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Shashank Shetty
            </span>
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Software Developer & Computer Science Student
            </motion.span>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about Java development, web technologies, and creating innovative solutions. 
            Currently pursuing Computer Science with hands-on experience in software development and project management.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View My Projects
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center space-x-6"
          >
            <motion.a
              href="mailto:shashankshetty@example.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
            >
              <Mail className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://github.com/shashankshetty"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="tel:+919876543210"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
            >
              <Phone className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
            >
              <ExternalLink className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection('education')}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
};

export default Hero;