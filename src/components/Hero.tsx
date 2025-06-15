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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center lg:justify-end order-2 lg:order-1"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-blue-600/20 dark:ring-blue-400/20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 p-2">
                <img
                  src="/public/resume image2.jpg"
                  alt="Shashank Shetty"
                  className="w-full h-full object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-600 rounded-full opacity-80"></div>
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div 
            variants={itemVariants}
            className="text-center lg:text-left order-1 lg:order-2"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
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
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed"
            >
              Passionate about Java development, web technologies, and creating innovative solutions. 
              Currently pursuing Computer Science with hands-on experience in software development and project management.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12"
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
              className="flex items-center justify-center lg:justify-start space-x-6"
            >
              <motion.a
                href="mailto:shettyshashank089@gmail.com"
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
                href="tel:+916361128305"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
              >
                <Phone className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://shashank.git"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
              >
                <ExternalLink className="h-6 w-6" />
              </motion.a>
            </motion.div>
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