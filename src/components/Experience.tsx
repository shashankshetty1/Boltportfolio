import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Briefcase, Code, Database, Globe } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
  type: 'internship' | 'project';
  icon: React.ElementType;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Java Full Stack Intern',
      company: 'Besant Technologies',
      location: 'Bangalore, India',
      period: 'Jan 2025 - May 2025',
      description: 'Comprehensive full-stack development internship focusing on Java technologies, database management, and modern web development practices.',
      achievements: [
        'Developed web applications using Java Spring Boot framework',
        'Worked on database design and optimization using MySQL',
        'Collaborated with senior developers on client projects',
        'Gained hands-on experience in full-stack development',
        'Participated in code reviews and agile development practices'
      ],
      technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Git'],
      companyUrl: 'https://besanttechnologies.com',
      type: 'internship',
      icon: Code
    },
    {
      id: 2,
      title: 'Full Stack Intern',
      company: 'Varcons Technologies',
      location: 'Mangalore, India (Online)',
      period: 'Oct 2023 - Dec 2023',
      description: 'Remote internship focused on full-stack web development, gaining real-world experience in software development and design principles.',
      achievements: [
        'Contributed to the development of enterprise software solutions',
        'Implemented responsive web interfaces using modern frameworks',
        'Assisted in API development and integration',
        'Learned project management methodologies and client communication',
        'Worked on bug fixes and feature enhancements'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Bootstrap', 'REST APIs', 'Git'],
      companyUrl: 'https://varcons.com',
      type: 'internship',
      icon: Globe
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
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My internship experiences and professional journey in software development, 
            gaining practical skills and industry exposure through hands-on projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -10 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              {/* Header with Icon and Type */}
              <div className="relative p-6 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <experience.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full uppercase font-semibold">
                    {experience.type}
                  </span>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-16 w-2 h-2 bg-white/30 rounded-full"></div>
                <div className="absolute bottom-4 left-16 w-3 h-3 bg-white/20 rounded-full"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {experience.title}
                </h3>
                
                <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-3">
                  <span className="font-semibold text-lg">{experience.company}</span>
                  {experience.companyUrl && (
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {experience.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <motion.li 
                        key={achievementIndex} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: achievementIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Looking for New Opportunities
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm actively seeking internship and full-time opportunities to further develop my skills 
              and contribute to innovative projects in software development.
            </p>
            <motion.button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;