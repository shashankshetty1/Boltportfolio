import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Github, Wrench, Users, Brain, MessageCircle } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Java', level: 90, icon: Code, category: 'Programming' },
    { name: 'MySQL', level: 85, icon: Database, category: 'Database' },
    { name: 'HTML/CSS', level: 88, icon: Globe, category: 'Web' },
    { name: 'JavaScript', level: 82, icon: Code, category: 'Programming' },
    { name: 'GitHub', level: 85, icon: Github, category: 'Tools' },
    { name: 'Problem Solving', level: 92, icon: Brain, category: 'Soft Skills' },
    { name: 'Team Leadership', level: 88, icon: Users, category: 'Soft Skills' },
    { name: 'Communication', level: 85, icon: MessageCircle, category: 'Soft Skills' },
  ];

  const categories = ['All', 'Programming', 'Database', 'Web', 'Tools', 'Soft Skills'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

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
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and soft skills developed through 
            academic projects, internships, and hands-on experience.
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
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <skill.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.category}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Spring Boot', 'React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Git', 'VS Code', 'IntelliJ IDEA', 'Postman'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800/50 dark:hover:to-purple-800/50 transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;