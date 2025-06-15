import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp, MessageCircle, Download } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a dummy resume download - in real implementation, this would link to actual resume
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume URL
    link.download = 'Shashank_Shetty_Resume.pdf';
    link.click();
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shashankshetty', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/shashankshetty', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/919876543210', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:shashankshetty@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Shashank Shetty
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 mb-6 leading-relaxed max-w-md"
            >
              Software Developer & Computer Science Student passionate about creating innovative 
              solutions and building meaningful connections in the tech community.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-800 dark:bg-gray-900 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg font-semibold mb-6 text-white"
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact & Actions */}
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg font-semibold mb-6 text-white"
            >
              Get In Touch
            </motion.h4>
            <div className="space-y-4">
              <motion.a
                href="mailto:shashankshetty@example.com"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                shashankshetty@example.com
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                +91 98765 43210
              </motion.a>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-400"
              >
                Mangalore, Karnataka, India
              </motion.p>
              <motion.button
                onClick={downloadResume}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 mt-4"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="py-6 border-t border-gray-800 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Shashank Shetty. Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>and lots of coffee ☕</span>
          </div>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-200 group"
          >
            <span>Back to top</span>
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="py-4 border-t border-gray-800 dark:border-gray-800 text-center"
        >
          <p className="text-sm text-gray-500">
            Open to internship opportunities and collaborations • Currently pursuing B.E. in Computer Science
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;