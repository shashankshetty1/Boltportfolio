import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shashankshetty@example.com',
      href: 'mailto:shashankshetty@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mangalore, Karnataka, India',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shashankshetty', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/shashankshetty', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/919876543210', label: 'WhatsApp' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and exciting projects. 
            Let's discuss how we can work together to create something amazing!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Whether you have a project in mind, need technical consultation, want to discuss 
                internship opportunities, or just want to connect, I'd love to hear from you. 
                I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                    <info.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                    <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h4>
              <div className="space-y-3">
                <motion.a
                  href="mailto:shashankshetty@example.com?subject=Collaboration Opportunity"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200"
                >
                  <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-blue-600 dark:text-blue-400 font-medium">Email for Collaboration</span>
                </motion.a>
                <motion.a
                  href="https://github.com/shashankshetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <Github className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400 font-medium">View My Code</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Thank you for reaching out! I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none transition-all duration-200"
                    placeholder="Tell me about your project, collaboration idea, or just say hello!"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  * Required fields. Your information will be kept confidential.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;