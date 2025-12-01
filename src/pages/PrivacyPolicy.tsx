import { motion } from 'motion/react';
import { Shield, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react';

const sections = [
  {
    icon: Database,
    title: 'Information We Collect',
    content: [
      'Personal identification information (Name, email address, phone number)',
      'Usage data and analytics',
      'Cookies and tracking technologies',
      'Project inquiries and communication records',
    ],
  },
  {
    icon: Lock,
    title: 'How We Use Your Information',
    content: [
      'To respond to your inquiries and provide services',
      'To improve our website and user experience',
      'To send periodic emails regarding projects or updates',
      'To protect against unauthorized access and security threats',
    ],
  },
  {
    icon: Shield,
    title: 'Data Protection',
    content: [
      'We implement industry-standard security measures',
      'Your data is encrypted during transmission',
      'We do not sell or rent your personal information to third parties',
      'Regular security audits and updates are performed',
    ],
  },
  {
    icon: Eye,
    title: 'Your Rights',
    content: [
      'Access and review your personal data',
      'Request correction of inaccurate information',
      'Request deletion of your data',
      'Opt-out of marketing communications at any time',
    ],
  },
  {
    icon: UserCheck,
    title: 'Third-Party Services',
    content: [
      'We may use trusted third-party services for analytics',
      'These services have their own privacy policies',
      'We carefully vet all third-party providers',
      'Your data is shared only when necessary for service delivery',
    ],
  },
  {
    icon: Mail,
    title: 'Contact Us',
    content: [
      'For privacy-related questions, contact us at privacy@example.com',
      'We will respond to all inquiries within 48 hours',
      'You can request a copy of your data at any time',
    ],
  },
];

export default function PrivacyPolicy() {
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
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-900/30 dark:to-indigo-900/30 mb-6"
          >
            <Shield className="w-10 h-10 text-violet-600 dark:text-violet-400" />
          </motion.div>
          <h1 className="mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Last updated: November 28, 2025
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto mt-6 rounded-full"
          />
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 p-8 bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/10 dark:to-indigo-900/10 rounded-2xl border border-violet-200 dark:border-violet-800"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            At Mahidhar Reddy Choukacharla's Portfolio, we take your privacy seriously. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information when you
            visit our website. Please read this privacy policy carefully.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg"
                >
                  <section.icon className="w-7 h-7 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h2 className="mb-4 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
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
                          whileHover={{ scale: 1.5 }}
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 mt-2 flex-shrink-0"
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

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl text-white text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Shield className="w-12 h-12 mx-auto mb-4" />
          </motion.div>
          <h3 className="mb-3 text-white">Questions About Our Privacy Policy?</h3>
          <p className="text-violet-100 mb-6">
            If you have any questions or concerns, please don't hesitate to reach out.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-white text-violet-600 rounded-full shadow-xl"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
