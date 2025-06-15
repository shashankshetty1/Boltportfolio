import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  description: string;
  subjects?: string[];
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      id: 1,
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Visvesvaraya Technological University',
      location: 'Karnataka, India',
      period: '2021 - 2025',
      grade: 'CGPA: 8.5/10',
      description: 'Pursuing Computer Science Engineering with focus on software development, data structures, algorithms, and modern programming paradigms.',
      subjects: ['Data Structures', 'Algorithms', 'Database Management', 'Software Engineering', 'Web Technologies', 'Machine Learning']
    },
    {
      id: 2,
      degree: 'Pre-University Course (12th Grade)',
      institution: 'Government PU College',
      location: 'Karnataka, India',
      period: '2019 - 2021',
      grade: 'Percentage: 92%',
      description: 'Completed Pre-University education with Physics, Chemistry, Mathematics, and Computer Science as core subjects.',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science']
    },
    {
      id: 3,
      degree: 'Secondary School Certificate (10th Grade)',
      institution: 'Government High School',
      location: 'Karnataka, India',
      period: '2018 - 2019',
      grade: 'Percentage: 95%',
      description: 'Completed secondary education with distinction, demonstrating strong academic foundation across all subjects.',
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic journey and educational background that shaped my technical foundation.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-200 dark:bg-blue-800"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {educationData.map((education, index) => (
              <motion.div
                key={education.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 border-4 border-white dark:border-gray-800 rounded-full z-10"
                ></motion.div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                        {education.grade}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {education.degree}
                    </h3>
                    
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                      {education.institution}
                    </p>

                    <div className={`flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{education.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{education.location}</span>
                      </div>
                    </div>

                    <p className={`text-gray-600 dark:text-gray-400 mb-4 ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}>
                      {education.description}
                    </p>

                    {education.subjects && (
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {education.subjects.map((subject, subjectIndex) => (
                          <motion.span
                            key={subjectIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: subjectIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                          >
                            {subject}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;