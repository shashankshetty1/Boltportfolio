import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle, X, Star } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description: string;
  skills: string[];
  verifyUrl?: string;
  category: string;
  logo?: string;
  featured?: boolean;
}

const Certifications: React.FC = () => {
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);

  const certifications: Certification[] = [
    {
      id: 1,
      title: 'AWS Cloud Foundations',
      issuer: 'AWS Academy',
      date: 'September 2023',
      credentialId: 'AWS-CF-2023-SS001',
      description: 'Comprehensive understanding of AWS Cloud services, architecture, security, and best practices for cloud computing.',
      skills: ['Cloud Computing', 'AWS Services', 'Cloud Security', 'Cost Management'],
      verifyUrl: 'https://aws.amazon.com/verification',
      category: 'Cloud',
      logo: '☁️',
      featured: true
    },
    {
      id: 2,
      title: 'Project Management',
      issuer: 'Great Learning',
      date: 'July 2023',
      credentialId: 'GL-PM-2023-SS002',
      description: 'Project management methodology covering initiation, planning, execution, monitoring, and closure phases.',
      skills: ['Project Management', 'Agile', 'Risk Management', 'Team Leadership'],
      verifyUrl: 'https://greatlearning.com/verification',
      category: 'Management',
      logo: '📊',
      featured: true
    },
    {
      id: 3,
      title: 'Java Full Stack',
      issuer: 'Besant Technologies',
      date: 'May 2023',
      credentialId: 'BT-JFS-2023-SS003',
      description: 'Complete Java full-stack development including Spring Boot, REST APIs, and database integration.',
      skills: ['Java', 'Spring Boot', 'REST APIs', 'Database Design'],
      verifyUrl: 'https://besanttechnologies.com/verification',
      category: 'Programming',
      logo: '☕',
      featured: true
    },
    {
      id: 4,
      title: 'Data Visualization with Python',
      issuer: 'Infosys Springboard',
      date: 'April 2023',
      credentialId: 'IS-DVP-2023-SS004',
      description: 'Advanced data visualization techniques using Python libraries like Matplotlib, Seaborn, and Plotly.',
      skills: ['Python', 'Data Visualization', 'Matplotlib', 'Data Analysis'],
      verifyUrl: 'https://infosysspringboard.com/verification',
      category: 'Data Science',
      logo: '📈'
    },
    {
      id: 5,
      title: 'HTML & CSS Bootcamp',
      issuer: 'LetsUpgrade',
      date: 'March 2023',
      credentialId: 'LU-HCB-2023-SS005',
      description: 'Comprehensive web development bootcamp covering modern HTML5, CSS3, and responsive design principles.',
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'Web Development'],
      verifyUrl: 'https://letsupgrade.com/verification',
      category: 'Web Development',
      logo: '🌐'
    },
    {
      id: 6,
      title: 'Java (Basic)',
      issuer: 'HackerRank',
      date: 'February 2023',
      credentialId: 'HR-JAVA-2023-SS006',
      description: 'Fundamental Java programming concepts including OOP principles, data structures, and algorithm implementation.',
      skills: ['Java', 'Object-Oriented Programming', 'Data Structures', 'Algorithms'],
      verifyUrl: 'https://hackerrank.com/verification',
      category: 'Programming',
      logo: '💻'
    }
  ];

  const categories = ['All', 'Cloud', 'Programming', 'Management', 'Data Science', 'Web Development'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredCertifications = activeCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional certifications and credentials that validate my technical expertise 
            and commitment to continuous learning in various domains.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCertifications.map((certification) => (
            <motion.div
              key={certification.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedCertification(certification)}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              {/* Featured Badge */}
              {certification.featured && (
                <div className="absolute top-4 right-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{certification.logo}</div>
                  <div>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full">
                      {certification.category}
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {certification.title}
              </h3>

              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                {certification.issuer}
              </p>

              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm mb-4">
                <Calendar className="h-4 w-4" />
                <span>{certification.date}</span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                {certification.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {certification.skills.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
                {certification.skills.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                    +{certification.skills.length - 3} more
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                >
                  View Details →
                </motion.button>
                {certification.verifyUrl && (
                  <motion.a
                    href={certification.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-1 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200 text-sm"
                  >
                    <CheckCircle className="h-4 w-4" />
                    <span>Verify</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certification Modal */}
        <AnimatePresence>
          {selectedCertification && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedCertification(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{selectedCertification.logo}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {selectedCertification.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">
                          {selectedCertification.issuer}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedCertification(null)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                    >
                      <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    </button>
                  </div>

                  <div className="flex items-center space-x-4 mb-6">
                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                      {selectedCertification.category}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>{selectedCertification.date}</span>
                    </div>
                    {selectedCertification.featured && (
                      <div className="flex items-center space-x-1 text-yellow-600 dark:text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-medium">Featured</span>
                      </div>
                    )}
                  </div>

                  {selectedCertification.credentialId && (
                    <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Credential ID</p>
                      <p className="font-mono text-gray-900 dark:text-white">{selectedCertification.credentialId}</p>
                    </div>
                  )}

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {selectedCertification.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      Skills Covered
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertification.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedCertification.verifyUrl && (
                    <motion.a
                      href={selectedCertification.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                    >
                      <CheckCircle className="h-5 w-5" />
                      <span>Verify Credential</span>
                      <ExternalLink className="h-4 w-4" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Certification Overview
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: certifications.length.toString(), label: 'Total Certifications' },
                { number: '6', label: 'Different Platforms' },
                { number: '2023', label: 'Most Recent Year' },
                { number: '100%', label: 'Verified Credentials' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;