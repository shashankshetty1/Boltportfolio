import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Trophy, Target } from 'lucide-react';

interface Responsibility {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  icon: React.ElementType;
}

const Responsibilities: React.FC = () => {
  const responsibilities: Responsibility[] = [
    {
      id: 1,
      title: 'Cricket Team Captain',
      organization: 'College Sports Committee',
      period: '2022 - 2024',
      description: 'Led the college cricket team through multiple tournaments and inter-college competitions, fostering team spirit and strategic gameplay.',
      achievements: [
        'Led team to victory in 3 inter-college tournaments',
        'Improved team performance by 40% through strategic training',
        'Organized practice sessions and team building activities',
        'Mentored junior players and developed their skills'
      ],
      skills: ['Leadership', 'Team Management', 'Strategic Planning', 'Communication'],
      icon: Trophy
    },
    {
      id: 2,
      title: 'Cultural Fest Coordinator',
      organization: 'College Cultural Committee',
      period: '2023 - Present',
      description: 'Managed and coordinated the annual cultural festival, overseeing multiple events, vendor management, and student participation.',
      achievements: [
        'Successfully organized fest with 1000+ participants',
        'Managed budget of ₹2,00,000 with 15% cost savings',
        'Coordinated with 20+ vendors and sponsors',
        'Led a team of 50+ volunteers across different departments'
      ],
      skills: ['Event Management', 'Budget Planning', 'Vendor Coordination', 'Team Leadership'],
      icon: Calendar
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
    <section id="responsibilities" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Leadership & Responsibilities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Leadership roles and responsibilities that have shaped my management skills, 
            team collaboration abilities, and organizational capabilities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {responsibilities.map((responsibility, index) => (
            <motion.div
              key={responsibility.id}
              variants={itemVariants}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl">
                      <responsibility.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {responsibility.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {responsibility.organization}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {responsibility.period}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {responsibility.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {responsibility.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: achievementIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      Skills Developed
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {responsibility.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Visual Element */}
              <div className="flex-1 max-w-md">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-8 flex items-center justify-center">
                    <responsibility.icon className="h-32 w-32 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-600 rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Leadership Impact
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Through these leadership roles, I've developed strong organizational skills, 
                team management capabilities, and the ability to deliver results under pressure.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Users, number: '70+', label: 'Team Members Led' },
                { icon: Trophy, number: '5+', label: 'Events Organized' },
                { icon: Target, number: '1000+', label: 'People Impacted' },
                { icon: Calendar, number: '2+', label: 'Years Leadership' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-lg mb-3 inline-block">
                    <stat.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
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

export default Responsibilities;