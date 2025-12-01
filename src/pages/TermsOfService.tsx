import { motion } from 'motion/react';
import { FileText, Scale, AlertCircle, CheckCircle, XCircle, Users } from 'lucide-react';

const sections = [
  {
    icon: CheckCircle,
    title: 'Acceptance of Terms',
    content: [
      'By accessing this website, you accept these terms and conditions in full',
      'If you disagree with any part of these terms, do not use our website',
      'We reserve the right to modify these terms at any time',
      'Continued use after changes constitutes acceptance of new terms',
    ],
  },
  {
    icon: Users,
    title: 'Use License',
    content: [
      'Permission is granted to temporarily view materials for personal, non-commercial use',
      'This is the grant of a license, not a transfer of title',
      'You may not modify or copy the materials',
      'You may not use materials for commercial purposes without written permission',
    ],
  },
  {
    icon: XCircle,
    title: 'Prohibited Uses',
    content: [
      'You may not use this site for any unlawful purpose',
      'You may not violate any laws in your jurisdiction',
      'You may not infringe upon or violate our intellectual property rights',
      'You may not transmit any malicious code or harmful content',
    ],
  },
  {
    icon: AlertCircle,
    title: 'Disclaimer',
    content: [
      'Materials on this website are provided on an "as is" basis',
      'We make no warranties, expressed or implied',
      'We do not warrant that the site will be uninterrupted or error-free',
      'You use the website at your own risk',
    ],
  },
  {
    icon: Scale,
    title: 'Limitations of Liability',
    content: [
      'We shall not be liable for any damages arising from the use of this website',
      'This includes direct, indirect, incidental, or consequential damages',
      'Some jurisdictions do not allow limitations on warranties',
      'These limitations may not apply to you',
    ],
  },
  {
    icon: FileText,
    title: 'Intellectual Property',
    content: [
      'All content on this site is protected by copyright and trademark laws',
      'Portfolio pieces remain the intellectual property of their respective owners',
      'Unauthorized use of any materials may violate copyright and trademark laws',
      'You must obtain written permission before reproducing any content',
    ],
  },
];

export default function TermsOfService() {
  return (
    <div className="pt-24 pb-16 px-6 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 150 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 mb-6"
          >
            <Scale className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
          </motion.div>
          <h1 className="mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Last updated: November 28, 2025
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6 rounded-full"
          />
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 rounded-2xl border border-indigo-200 dark:border-indigo-800"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Welcome to Mahidhar Reddy Choukacharla's Portfolio. These terms and conditions outline
            the rules and regulations for the use of our website. By accessing this website, we
            assume you accept these terms and conditions.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg"
                >
                  <section.icon className="w-7 h-7 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h2 className="mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.content.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                      >
                        <motion.div
                          whileHover={{ scale: 1.5, rotate: 180 }}
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 mt-2 flex-shrink-0"
                        />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Terms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700"
        >
          <h2 className="mb-4">Governing Law</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            These terms and conditions are governed by and construed in accordance with the laws,
            and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
          <h3 className="mb-3 mt-6">Changes to Terms</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We reserve the right to revise these terms at any time. By using this website, you are
            expected to review these terms on a regular basis to ensure you understand all terms and
            conditions governing use of this website.
          </p>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl text-white text-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            <FileText className="w-12 h-12 mx-auto mb-4" />
          </motion.div>
          <h3 className="mb-3 text-white">Questions About Our Terms?</h3>
          <p className="text-indigo-100 mb-6">
            If you have any questions about these Terms of Service, please contact us.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-white text-indigo-600 rounded-full shadow-xl"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
