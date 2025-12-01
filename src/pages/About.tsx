import { motion } from 'motion/react';
import aboutImage from '../assets/img_1940.jpg';
import {
  Figma,
  Palette,
  Search,
  Database,
  Zap,
  ChartColumn,
  Github,
  Code,
  Video,
  Box,
  Sparkles,
  Award,
} from 'lucide-react';

const skills = [
  { name: 'Data Analysis', level: 95, icon: Search },
  { name: 'Data Visualization', level: 90, icon: ChartColumn },
  { name: 'SQL & Databases', level: 85, icon: Database },
  { name: 'Python (Data Tools)', level: 88, icon: Code },
  { name: 'UI/UX Design', level: 92, icon: Figma },
  { name: 'Version Control (Git & GitHub)', level: 80, icon: Github },
];

const tools = [
  { name: 'Python', category: 'Data' },
  { name: 'SQL', category: 'Data' },
  { name: 'Figma', category: 'Design' },
  { name: 'HTML & CSS', category: 'Dev' },
  { name: 'Excel', category: 'Data' },
  { name: 'Miro', category: 'Design' },
  { name: ' Power BI', category: 'Data' },
  { name: 'Tableau', category: 'Data' },
  { name: 'GitHub', category: 'Dev' },
];

const timeline = [
  {
    year: 'Nov 2024 - Feb 2025',
    title: 'Data Science Intern',
    company: 'Deeksha Technologies',
    description: 'Assisted in preparing datasets, exploring patterns, and creating models using Python and analytics tools to deliver clear, actionable insights.',
  },
  {
    year: 'Aug 2024 - Oct 2024',
    title: 'Freelance - Call Audits',
    company: 'Creative Agency',
    description: 'Created a modern and user-friendly call audits website that helps teams review calls, monitor quality, and organize audit data. The design focuses on clarity, smooth navigation, and an efficient review process.',
  },
  {
    year: 'Jul 2023 - Aug 2023',
    title: 'UI/UX & Frontend Developer Intern',
    company: 'The Krita Technologies Private Limited',
    description: 'I worked as a UI/UX Designer and Frontend Developer intern, where I designed clean, user-focused interfaces and translated them into responsive, functional web pages. My role involved wireframing, prototyping, and building modern UI components while ensuring smooth user experience across devices.',
  },
  {
    year: 'Jun 2022 - Jul 2022',
    title: 'AI & Python Intern',
    company: 'Remarkskill Education',
    description: 'I gained hands-on experience in AI development using Python. My work included exploring datasets, building simple ML models, testing neural network concepts, and understanding how AI solutions are created for real-world use cases.',
  },
];

export default function About() {
  return (
    <div className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">About Me</span>
          </motion.div>
          <h1 className="mb-6">Crafting Digital Experiences</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            With skills in data analysis, UI/UX, and AI, I create functional and modern digital solutions shaped by user needs.
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="mb-6">The Story So Far</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I’m a data analyst and UI/UX designer based in Nellore, Andhra Pradesh, driven by the idea of creating digital experiences that feel simple, meaningful, and intuitive. 
              </p>
              <p>
                My journey began with curiosity—how data shapes decisions and how design shapes user behavior. Over time, that curiosity turned into a passion that pushed me to explore analytics, AI concepts, and modern interface design.
              </p>
              <p>
                Through my internships in Data Science, UI/UX, frontend development, and AI with Python, I’ve worked on solving real problems—analyzing data patterns, designing clean interfaces, and building responsive components. Each experience has helped me grow into someone who loves blending logic with creativity to bring ideas to life.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
               <img
                  src={aboutImage}
                  alt="About Mahidhar"
                  className="w-full h-full object-cover"
                />
            </div>
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-violet-100 dark:bg-violet-900/30 rounded-2xl shadow-xl flex items-center justify-center"
            >
              <Sparkles className="w-12 h-12 text-violet-600 dark:text-violet-400" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Skills Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <skill.icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                    <span>{skill.name}</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="mb-12 text-center">Tools I Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-gray-50 dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-800 hover:border-violet-600 dark:hover:border-violet-400 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span>{tool.name}</span>
                  <span className="text-xs px-2 py-0.5 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400">
                    {tool.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-12 text-center">Experience Timeline</h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0 border-l-2 border-gray-200 dark:border-gray-800"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg"
                />
                <div className="text-sm text-violet-600 dark:text-violet-400 mb-2">
                  {item.year}
                </div>
                <h3 className="mb-1">{item.title}</h3>
                <div className="text-gray-600 dark:text-gray-400 mb-2">{item.company}</div>
                <p className="text-sm text-gray-500 dark:text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
