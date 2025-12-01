import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    thumbnail: string;
    year: string;
    tags: string[];
  };
  index: number;
}

const imageMap: Record<string, string> = {
  'motion design animation': 'https://images.unsplash.com/photo-1756908992987-54c948949b32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBkZXNpZ24lMjBhbmltYXRpb258ZW58MXx8fHwxNzY0MTQ2ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'Call Audits': 'https://images.unsplash.com/photo-1757301714935-c8127a21abc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NDI0NzMxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'product launch video': 'https://images.unsplash.com/photo-1651390216709-1efea22814ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwbGF1bmNoJTIwdmlkZW98ZW58MXx8fHwxNzY0MjQ3MzE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'tech startup branding': 'https://images.unsplash.com/photo-1746047420047-03fc7a9b9226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMGJyYW5kaW5nfGVufDF8fHx8MTc2NDI0NzMxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  '3d product render': 'https://images.unsplash.com/photo-1657636246856-6f462abd91e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByb2R1Y3QlMjByZW5kZXJ8ZW58MXx8fHwxNzY0MjQ3MzE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'ecommerce website': 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2NDE1Mjg4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'character animation': 'https://images.unsplash.com/photo-1759335858774-efa2e81e466c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXIlMjBhbmltYXRpb258ZW58MXx8fHwxNzY0MjQ3MzE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'luxury brand design': 'https://images.unsplash.com/photo-1763069228076-c7e3995e1769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFuZCUyMGRlc2lnbnxlbnwxfHx8fDE3NjQxMjk2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'architectural render': 'https://images.unsplash.com/photo-1678388583153-f0e667c97288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwcmVuZGVyfGVufDF8fHx8MTc2NDI0NzMxOXww&ixlib=rb-4.1.0&q=80&w=1080',
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group"
    >
      <Link to={`/project/${project.id}`} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 aspect-[4/3]">
          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src={imageMap[project.thumbnail]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                <span>{project.category}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-white">{project.title}</h3>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 45 }}
                  className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 origin-left"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
