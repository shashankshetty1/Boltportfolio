import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

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
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'September 2023',
      credentialId: 'AWS-CCP-2023-SS001',
      description: 'Foundational understanding of AWS Cloud services, security, architecture, pricing, and support.',
      skills: ['Cloud Computing', 'AWS Services', 'Cloud Security', 'Cost Management'],
      verifyUrl: 'https://aws.amazon.com/verification',
      category: 'Cloud'
    },
    {
      id: 2,
      title: 'Project Management Professional (PMP)',
      issuer: 'Project Management Institute',
      date: 'July 2023',
      credentialId: 'PMP-2023-SS002',
      description: 'Comprehensive project management methodology covering initiation, planning, execution, monitoring, and closure.',
      skills: ['Project Management', 'Agile', 'Risk Management', 'Team Leadership'],
      verifyUrl: 'https://pmi.org/verification',
      category: 'Management'
    },
    {
      id: 3,
      title: 'Java Programming Certification',
      issuer: 'HackerRank',
      date: 'May 2023',
      credentialId: 'HR-JAVA-2023-SS003',
      description: 'Advanced Java programming skills including OOP concepts, data structures, and algorithm implementation.',
      skills: ['Java', 'Object-Oriented Programming', 'Data Structures', 'Algorithms'],
      verifyUrl: 'https://hackerrank.com/verification',
      category: 'Programming'
    },
    {
      id: 4,
      title: 'SQL Database Certification',
      issuer: 'HackerRank',
      date: 'April 2023',
      credentialId: 'HR-SQL-2023-SS004',
      description: 'Proficiency in SQL queries, database design, optimization, and advanced database operations.',
      skills: ['SQL', 'Database Design', 'Query Optimization', 'Data Analysis'],
      verifyUrl: 'https://hackerrank.com/verification',
      category: 'Database'
    },
    {
      id: 5,
      title: 'Web Development Bootcamp',
      issuer: 'Udemy',
      date: 'March 2023',
      credentialId: 'UDEMY-WEB-2023-SS005',
      description: 'Full-stack web development covering HTML, CSS, JavaScript, React, Node.js, and database integration.',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      verifyUrl: 'https://udemy.com/verification',
      category: 'Web Development'
    },
    {
      id: 6,
      title: 'Machine Learning Fundamentals',
      issuer: 'Coursera',
      date: 'February 2023',
      credentialId: 'COURSERA-ML-2023-SS006',
      description: 'Introduction to machine learning algorithms, data preprocessing, model evaluation, and practical applications.',
      skills: ['Machine Learning', 'Python', 'Data Analysis', 'Model Evaluation'],
      verifyUrl: 'https://coursera.org/verification',
      category: 'AI/ML'
    }
  ];

  const categories = ['All', 'Cloud', 'Programming', 'Management', 'Database', 'Web Development', 'AI/ML'];
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
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  <Award className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full">
                  {certification.category}
                </span>
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
                {certification.credentialId && (
                  <>
                    <span>•</span>
                    <span className="font-mono text-xs">{certification.credentialId}</span>
                  </>
                )}
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                {certification.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {certification.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {certification.verifyUrl && (
                <motion.a
                  href={certification.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                >
                  <CheckCircle className="h-4 w-4" />
                  <span>Verify Credential</span>
                  <ExternalLink className="h-3 w-3" />
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>

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