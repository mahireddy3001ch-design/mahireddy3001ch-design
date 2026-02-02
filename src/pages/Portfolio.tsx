import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ProjectCard from '../components/portfolio/ProjectCard';

const categories = ['All', 'Motion Design', 'UI/UX', 'Data Analysis', 'Final Year'];

const projects = [
  {
    id: 1,
    title: 'Qponz',
    category: 'UI/UX Design',
    thumbnail: 'motion design animation',
    year: '2024',
    tags: ['Figma', 'UI/UX', 'Branding', 'Miro', 'wireframing'],
  },
  {
    id: 2,
    title: 'Call Audits',
    category: 'UI/UX Design',
    thumbnail: 'Call Audits',
    year: '2024',
    tags: ['Figma', 'Miro', 'Adobe Creative Suite'],
  },
  {
    id: 3,
    title: 'Whatsapp New Features',
    category: 'UI/UX Design',
    thumbnail: 'product launch video',
    year: '2024',
    tags: ['Features', 'UI/UX', 'Figma'],
  },
  {
    id: 4,
    title: 'Healthify',
    category: 'Motion Design',
    thumbnail: 'tech startup branding',
    year: '2024',
    tags: ['Logo', 'Visual Design', 'Figma', 'Miro'],
  },
  {
    id: 5,
    title: 'Destinio',
    category: 'Motion Design',
    thumbnail: '3d product render',
    year: '2023',
    tags: ['UI/UX', 'Motion Design', 'Visual Design', 'Figma'],
  },
  {
    id: 6,
    title: 'Aaddress',
    category: 'UI/UX',
    thumbnail: 'ecommerce website',
    year: '2024',
    tags: ['Web Design', 'Shopify', 'UI/UX', 'Figma'],
  },
  {
    id: 7,
    title: 'Portfolio',
    category: 'Motion Design',
    thumbnail: 'character animation',
    year: '2023',
    tags: ['2D Animation', 'Character Design', 'Storytelling'],
  },
  {
    id: 8,
    title: 'Signature Detection using ANN',
    category: 'Final Year',
    thumbnail: 'luxury brand design',
    year: '2024',
    tags: ['Premium', 'Typography', 'Packaging'],
  },
  {
    id: 9,
    title: 'Efficient Storage Management for Social Network Events',
    category: 'Data Analysis',
    thumbnail: 'architectural render',
    year: '2024',
    tags: ['Architecture', '3D', 'Unreal Engine'],
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="pt-24 pb-16 px-6 min-h-screen">
      <div className="container mx-auto max-w-7xl">
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
            <span className="text-sm">Selected Works</span>
          </motion.div>
          <h1 className="mb-6">Portfolio (this section is under development)</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my latest projects spanning motion design, UI/UX, branding, and 3D visualization
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-500">No projects found in this category</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
