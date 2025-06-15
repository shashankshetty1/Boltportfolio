import React from 'react';
import { Code, Palette, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 88 },
    { name: 'Python', level: 80 },
    { name: 'UI/UX Design', level: 85 },
  ];

  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating responsive, interactive web applications using modern frameworks and best practices.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces with focus on user experience and visual aesthetics.',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Analyzing complex challenges and developing innovative solutions with clean, efficient code.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Working effectively with cross-functional teams to deliver high-quality products on time.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate developer with over 5 years of experience creating digital solutions 
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Hello! I'm Alex, a full-stack developer based in San Francisco. I enjoy creating 
                things that live on the internet, whether that be websites, applications, or 
                anything in between.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My interest in web development started back in 2018 when I decided to try editing 
                custom Tumblr themes — turns out hacking together a custom reblog button taught me 
                a lot about HTML & CSS!
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Fast-forward to today, and I've had the privilege of working at an advertising agency, 
                a start-up, a huge corporation, and a student-led design studio. My main focus these 
                days is building accessible, inclusive products and digital experiences.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="mb-6">
                <service.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;