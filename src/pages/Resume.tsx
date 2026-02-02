import { motion } from 'motion/react';
import { Download, Briefcase, GraduationCap, Award, Target } from 'lucide-react';

const highlights = [
  {
    icon: Target,
    title: '1+ Years Experience',
    description: 'Professional motion design and animation',
  },
  {
    icon: Award,
    title: '10+ Projects',
    description: 'Delivered for clients worldwide',
  },
  {
    icon: Briefcase,
    title: 'Fortune 14 Clients',
    description: 'Google, Meta, Apple, and more',
  },
  {
    icon: GraduationCap,
    title: 'Certified Professional',
    description: 'Multiple industry certifications',
  },
];

 const experience = [
  {
    title: 'Data Science Intern',
    company: 'Deeksha Technologies Private Limited',
    location: 'Nellore, AP',
    period: 'Nov 2024 - Feb 2025',
    achievements: [
      'Involved in Data Cleaning',
      'Generated insights from the data',
      'Created Data Visualization using Power BI',
      'Story Telling',
    ],
  },
  {
    title: 'UI/UX Design Intern',
    company: 'The Krita Technologies Private Limited',
    location: 'Nellore, AP',
    period: 'Jul 2023 - Aug 2023',
    achievements: [
      'Created 10+ brand animations',
      'Designed intuitive and user friendly designs',
      'Created Low Fedility and High Fedility Wireframes',
      'Problem Statement, User Personas',
      'Reduced project delivery time by 30%',
    ],
  },
  {
    title: 'Artificial Intelligence & Python Intern',
    company: 'Remarkskill Education',
    location: 'Remote',
    period: 'Jun 2022 - Jul 2022',
    achievements: [
      'Created a IMDB movie based AI project',
      'Collaborated with development team on implementation',
    ],
  },
];

const education = [
  {
    degree: 'Bachelor of Technology',
    major: 'CSE - Data Science & Artificial Intelligence',
    school: 'Dr.MGR Educational And Research Institute',
    period: '2020 - 2024',
    honors: '8.39 CGPA',
  },
  {
    degree: 'Intermediate',
    major: 'MPC',
    school: 'Narayana Junior College',
    period: '2018 - 2020',
    honors: '8.04 CGPA',
  },
  {
    degree: '10th Class',
    school: 'Vowel School',
    period: '2018',
    honors: '9.3 CGPA',
  },
];

export default function Resume() {
  return (
    <div className="pt-24 pb-16 px-6 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6">Resume</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            A comprehensive overview of my professional experience, skills, and achievements
          </p>
          <motion.a
  href="/resume.pdf"
  download
  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)" }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex w-fit px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full items-center gap-2 mx-auto"
>
  <Download className="h-5 w-5" />
  Download Resume
</motion.a>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-6 bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 rounded-2xl text-center"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center"
              >
                <item.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="mb-2 text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            <h2>Professional Experience</h2>
          </div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="mb-1">{job.title}</h3>
                    <p className="text-violet-600 dark:text-violet-400 mb-1">{job.company}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{job.location}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                    {job.period}
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400 mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            <h2>Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="mb-1">{edu.degree}</h3>
                    <p className="text-violet-600 dark:text-violet-400 mb-1">{edu.major}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {edu.school}
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400">{edu.honors}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                    {edu.period}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-3xl text-center text-white"
        >
          <h2 className="mb-4 text-white">Ready to Work Together?</h2>
          <p className="text-xl mb-8 text-violet-100">
            Let's discuss how I can help bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-violet-600 rounded-full shadow-xl"
            >
              View Portfolio
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
