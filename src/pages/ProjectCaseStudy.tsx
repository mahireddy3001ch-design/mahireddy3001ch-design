import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Users, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ProjectCaseStudy() {
  const { id } = useParams();

  // Mock project data
  const project = {
    id,
    title: 'Brand Evolution Campaign',
    category: 'Motion Design',
    heroImage: 'https://images.unsplash.com/photo-1756908992987-54c948949b32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBkZXNpZ24lMjBhbmltYXRpb258ZW58MXx8fHwxNzY0MTQ2ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    client: 'Tech Innovations Inc.',
    year: '2024',
    timeline: '3 months',
    role: 'Lead Motion Designer',
    tools: ['After Effects', 'Cinema 4D', 'Illustrator', 'Premiere Pro'],
    challenge:
      'The client needed a complete brand refresh with a focus on modern motion design that would resonate with a younger, tech-savvy audience while maintaining professional credibility.',
    solution:
      'We developed a comprehensive motion design system featuring fluid animations, bold typography, and a vibrant color palette. The campaign included social media content, product videos, and an animated brand manifesto.',
    results: [
      { metric: '250%', description: 'Increase in social engagement' },
      { metric: '180%', description: 'Growth in brand recognition' },
      { metric: '95%', description: 'Client satisfaction score' },
    ],
    process: [
      {
        title: 'Discovery & Research',
        description:
          'Conducted competitive analysis and audience research to understand market positioning and user preferences.',
      },
      {
        title: 'Concept Development',
        description:
          'Created multiple design directions with mood boards, style frames, and motion tests.',
      },
      {
        title: 'Production',
        description:
          'Executed the chosen direction with attention to timing, easing, and brand consistency.',
      },
      {
        title: 'Delivery & Launch',
        description:
          'Provided optimized deliverables for multiple platforms and conducted a successful launch campaign.',
      },
    ],
  };

  return (
    <div className="pt-24 pb-16">
      {/* Back Button */}
      <div className="container mx-auto px-6 mb-8">
        <Link to="/portfolio">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </motion.button>
        </Link>
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 mb-16"
      >
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 mb-6"
          >
            <span className="text-sm">{project.category}</span>
          </motion.div>
          <h1 className="mb-6">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{project.client}</p>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <ImageWithFallback
            src={project.heroImage}
            alt={project.title}
            className="w-full aspect-video object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Project Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="container mx-auto px-6 mb-16"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              <h3 className="text-sm text-gray-600 dark:text-gray-400">Timeline</h3>
            </div>
            <p>{project.timeline}</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              <h3 className="text-sm text-gray-600 dark:text-gray-400">My Role</h3>
            </div>
            <p>{project.role}</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl">
            <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-3">Tools Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs px-3 py-1 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Challenge & Solution */}
      <div className="bg-gray-50 dark:bg-gray-900/50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6">The Challenge</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6">The Solution</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="mb-12 text-center">Process</h2>
          <div className="space-y-8">
            {project.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                    <span className="text-white">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Results */}
      <div className="bg-gradient-to-br from-violet-600 to-indigo-600 py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="mb-12 text-center text-white">Results</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm"
                >
                  <div className="text-5xl mb-3 text-white">{result.metric}</div>
                  <p className="text-white/90">{result.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="mb-6">Interested in working together?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Let's create something amazing for your brand
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full shadow-lg shadow-violet-500/30"
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
