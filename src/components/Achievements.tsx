import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Users } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  icon: React.ElementType;
  details: string[];
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'UDAAN 2023 Winner',
      description: 'First place winner in the prestigious UDAAN 2023 technical competition',
      date: 'March 2023',
      category: 'Competition',
      icon: Trophy,
      details: [
        'Competed against 200+ participants from various colleges',
        'Presented innovative project on AI-based solutions',
        'Demonstrated exceptional technical and presentation skills',
        'Received recognition from industry experts and judges'
      ]
    },
    {
      id: 2,
      title: 'VTU Inter-College Tournament Champion',
      description: 'Led team to victory in VTU inter-college technical tournament',
      date: 'November 2022',
      category: 'Tournament',
      icon: Award,
      details: [
        'Participated in coding competitions and technical challenges',
        'Collaborated effectively with team members',
        'Solved complex algorithmic problems under time pressure',
        'Represented college at university level'
      ]
    },
    {
      id: 3,
      title: 'Academic Excellence Award',
      description: 'Consistent academic performance and technical project contributions',
      date: 'Ongoing',
      category: 'Academic',
      icon: Star,
      details: [
        'Maintained CGPA above 8.5 throughout the course',
        'Completed multiple technical projects with distinction',
        'Active participation in technical workshops and seminars',
        'Mentored junior students in programming concepts'
      ]
    }
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
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Recognition and awards that highlight my dedication to excellence in academics, 
            technical competitions, and leadership activities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  <achievement.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="ml-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full">
                    {achievement.category}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {achievement.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {achievement.description}
              </p>

              <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-6">
                {achievement.date}
              </div>

              <div className="space-y-2">
                {achievement.details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-2"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '3+', label: 'Awards Won', icon: Trophy },
            { number: '200+', label: 'Competitors Beaten', icon: Users },
            { number: '8.5+', label: 'CGPA Maintained', icon: Star },
            { number: '2+', label: 'Years Experience', icon: Award }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-4 inline-block">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;