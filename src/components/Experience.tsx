import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  companyUrl?: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: [
        'Led development of user-facing features for a SaaS platform serving 50,000+ users',
        'Implemented responsive designs and improved page load times by 40%',
        'Mentored junior developers and established coding standards for the team',
        'Collaborated with UX designers to create intuitive user interfaces'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL'],
      companyUrl: 'https://example.com'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Innovations Inc.',
      location: 'Remote',
      period: '2020 - 2022',
      description: [
        'Developed and maintained multiple client projects using modern web technologies',
        'Built RESTful APIs and integrated third-party services',
        'Optimized database queries resulting in 50% faster response times',
        'Participated in code reviews and contributed to technical documentation'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS'],
      companyUrl: 'https://example.com'
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: [
        'Converted design mockups into pixel-perfect, responsive web applications',
        'Implemented state management solutions and optimized component architecture',
        'Worked closely with backend team to integrate APIs and ensure smooth data flow',
        'Contributed to the company\'s design system and component library'
      ],
      technologies: ['React', 'Redux', 'Sass', 'Jest', 'Webpack'],
      companyUrl: 'https://example.com'
    },
    {
      id: 4,
      title: 'Junior Web Developer',
      company: 'WebDesign Pro',
      location: 'Dallas, TX',
      period: '2018 - 2019',
      description: [
        'Built responsive websites for small businesses and local organizations',
        'Learned modern web development practices and version control with Git',
        'Collaborated with designers to implement custom WordPress themes',
        'Provided technical support and training to clients'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'PHP'],
      companyUrl: 'https://example.com'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey in web development, building solutions that impact 
            thousands of users and working with amazing teams along the way.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-200 dark:bg-blue-800"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 border-4 border-white dark:border-slate-800 rounded-full z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`${index % 2 === 0 ? 'md:text-right md:order-2' : ''} flex-1`}>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-1">
                          <span className="font-semibold">{experience.company}</span>
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
                      </div>
                    </div>

                    <div className={`flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <ul className={`space-y-2 mb-6 text-gray-600 dark:text-gray-400 ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}>
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <span className="text-blue-600 dark:text-blue-400 mt-1.5 w-1.5 h-1.5 bg-current rounded-full flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;