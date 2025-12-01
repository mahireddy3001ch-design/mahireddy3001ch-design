import { motion } from 'motion/react';
import { Award, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

const certifications = [
  {
    id: 1,
    name: 'Introduction to Data Concepts',
    issuer: 'IBM',
    date: 'Nov 2025',
    credentialId: 'ALM-COURSE_4059045',
    verified: true,
    pdfUrl: '#',
    verifyUrl: 'https://www.adobe.com/verify',
    logo: '📊',
  },
  {
    id: 2,
    name: 'Preparing Data for Analysis with Microsoft Excel',
    issuer: 'Microsoft',
    date: 'Jun 2025',
    credentialId: 'DK2MI4FKIXO5',
    verified: true,
    pdfUrl: '#',
    verifyUrl: 'https://coursera.org/share/e2e5b0779285239b10ac81c2dd530224',
    logo: '📈',
  },
  {
    id: 3,
    name: 'Introduction to Data Analytics',
    issuer: 'IBM',
    date: 'May 2025',
    credentialId: 'E1F5URM767EF',
    verified: true,
    pdfUrl: '#',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/E1F5URM767EF',
    logo: '🔍',
  },
  {
    id: 4,
    name: 'Foundations: Data, Data, Everywhere',
    issuer: 'Google',
    date: 'Apr 2025',
    credentialId: 'Q92BJERDN7C5',
    verified: true,
    pdfUrl: '#',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/Q92BJERDN7C5',
    logo: '📚',
  },
  {
    id: 5,
    name: 'Data Analytics Job Simulation',
    issuer: 'Deloitte',
    date: 'Apr 2025',
    credentialId: 'f6Wf9jsqSoXiBeLoy',
    verified: true,
    pdfUrl: '#',
    verifyUrl: 'link here',
    logo: '📑',
  },
  {
    id: 6,
    name: 'AI Tools & ChatGPT Workshop',
    issuer: 'be10X',
    date: 'Mar 2025',
    credentialId: 'NIL',
    verified: true,
    pdfUrl: '#',
    verifyUrl: 'LINK HERE',
    logo: '🤖',
  },
  {
    id: 7,
    name: 'Foundations of User Experience (UX) Design',
    issuer: 'Google',
    date: 'Oct 2024',
    credentialId: 'U05GMR95BL1E',
    verified: true,
    pdfUrl: '#',
    verifyUrl: 'https://coursera.org/verify/U05GMR95BL1E',
    logo: '🎨',
  },
  {
    id: 13,
    name: 'Cloud Application Developer',
    issuer: 'IBM',
    date: 'Jun 2023',
    credentialId: 'd25e7701ba64407387cd627130df2034',
    verified: true,
    pdfUrl: '#',
    verifyUrl: 'https://courses.ibmcep.cognitiveclass.ai/certificates/d25e7701ba64407387cd627130df2034',
    logo: '☁️',
  },
  {
    id: 10,
    name: 'Introduction to Python',
    issuer: 'IBM',
    date: 'Jun 2023',
    credentialId: '3ab907f729a34e23bc2c8254e4fa88c1',
    verified: true,
    pdfUrl: '#',
    verifyUrl: 'https://courses.ibmcep.cognitiveclass.ai/certificates/3ab907f729a34e23bc2c8254e4fa88c1',
    logo: '🐍',
  },
  {
    id: 8,
    name: 'Business Intelligence',
    issuer: 'IBM',
    date: 'Jun 2023',
    credentialId: 'ebe2df408d8a45fdac4010b6f96fbe51',
    verified: true,
    pdfUrl: '#',
    verifyUrl: 'https://courses.ibmcep.cognitiveclass.ai/certificates/ebe2df408d8a45fdac4010b6f96fbe51',
    logo: '🧠',
  },
  {
    id: 9,
    name: 'Big Data Engineer',
    issuer: 'IBM',
    date: 'Jun 2023',
    credentialId: '817b7165c06143af85bb329a8d4151a8',
    verified: true,
    pdfUrl: '#',
    verifyUrl: 'https://courses.ibmcep.cognitiveclass.ai/certificates/817b7165c06143af85bb329a8d4151a8',
    logo: '⚙️',
  },
  {
    id: 11,
    name: 'Java Fundamentals',
    issuer: 'IBM',
    date: 'Jun 2023',
    credentialId: '168ce7f52e43471a89c4d581fa21ab68',
    verified: true,
    pdfUrl: '#',
    verifyUrl: 'https://courses.ibmcep.cognitiveclass.ai/certificates/168ce7f52e43471a89c4d581fa21ab68',
    logo: '☕',
  },
  {
    id: 12,
    name: 'IBM Watson Studio',
    issuer: 'IBM',
    date: 'Jun 2023',
    credentialId: 'd09eabf2a6bf4131a0b2075972fcebf3',
    verified: true,
    pdfUrl: '#',
    verifyUrl: 'https://courses.ibmcep.cognitiveclass.ai/certificates/d09eabf2a6bf4131a0b2075972fcebf3',
    logo: '🔗',
  },
  

];

export default function Certifications() {
  return (
    <div className="pt-24 pb-16 px-6 min-h-screen">
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
            <Award className="w-4 h-4" />
            <span className="text-sm">Professional Credentials</span>
          </motion.div>
          <h1 className="mb-6">Certifications</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Continuously expanding my skillset through professional certifications and specialized training
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: 'Total Certifications', value: '13+' },
            { label: 'Hours of Training', value: '150+' },
            { label: 'Verified Credentials', value: '100%' },
            { label: 'Latest Update', value: '2025' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl text-center"
            >
              <div className="text-3xl mb-2 bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-violet-600 dark:hover:border-violet-400 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-900/30 dark:to-indigo-900/30 flex items-center justify-center mb-4 text-3xl"
              >
                {cert.logo}
              </motion.div>

              {/* Content */}
              <div className="mb-4">
                <h3 className="mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">{cert.date}</p>
              </div>

              {/* Verified Badge */}
              {cert.verified && (
                <div className="flex items-center gap-2 mb-4 text-sm text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Credential</span>
                </div>
              )}

              {/* Credential ID */}
              <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="text-xs text-gray-500 dark:text-gray-500 mb-1">
                  Credential ID
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  {cert.credentialId}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={cert.pdfUrl}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors text-sm"
                >
                  <FileText className="w-4 h-4" />
                  View PDF
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center p-12 bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 rounded-3xl"
        >
          <Award className="w-16 h-16 mx-auto mb-6 text-violet-600 dark:text-violet-400" />
          <h2 className="mb-4">Commitment to Excellence</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I believe in continuous learning and staying updated with the latest industry standards
            and best practices. Each certification represents my dedication to delivering
            world-class work.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
