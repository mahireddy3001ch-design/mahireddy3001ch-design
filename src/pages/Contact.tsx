import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Calendar, CheckCircle, AlertCircle, Loader } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [status, setStatus] = useState({
    type: '', // 'success', 'error', or ''
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields before submitting.'
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'e71f8692-cc4a-45dc-8f7d-9180436a7e53', // Replace with your actual key
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Contact Form'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or email me directly at mahireddy3001.ch@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="pt-24 pb-16 px-6 min-h-screen bg-white dark:bg-gray-950">
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
            <Mail className="w-4 h-4" />
            <span className="text-sm">Let's Connect</span>
          </motion.div>
          <h1 className="mb-6 text-4xl md:text-6xl font-bold">Get In Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your vision to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="mb-8 text-2xl font-bold">Contact Information</h2>

            <div className="space-y-6 mb-12">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'mahireddy3001.ch@gmail.com',
                  href: 'mailto:mahireddy3001.ch@gmail.com',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+91 9014961069',
                  href: 'tel:+919014961069',
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'Nellore, AP',
                  href: null,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-900 dark:text-gray-100 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-gray-900 dark:text-gray-100">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Book a Call */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="p-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl text-white"
            >
              <Calendar className="w-12 h-12 mb-4" />
              <h3 className="mb-2 text-white text-xl font-bold">Schedule a Call</h3>
              <p className="text-violet-100 mb-6">
                Prefer to talk? Book a 30-minute consultation to discuss your project
              </p>
              <motion.button
                onClick={() => window.open('https://calendly.com/mahireddy3001-ch/30min', '_blank')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 bg-white text-violet-600 rounded-full font-semibold cursor-pointer"
              >
                Book a Call
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:border-violet-600 dark:focus:border-violet-400 transition-colors disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:border-violet-600 dark:focus:border-violet-400 transition-colors disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm mb-2 font-medium">
                  Subject <span className="text-red-500">*</span>
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:border-violet-600 dark:focus:border-violet-400 transition-colors disabled:opacity-50"
                >
                  <option value="">Select a subject</option>
                  <option value="project">New Project</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </motion.select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:border-violet-600 dark:focus:border-violet-400 transition-colors resize-none disabled:opacity-50"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                onClick={handleSubmit}
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: isSubmitting ? 'none' : '0 10px 30px rgba(139, 92, 246, 0.3)' }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-violet-500/30 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages - Below Button */}
              <AnimatePresence>
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-xl flex items-start gap-3 ${
                      status.type === 'success'
                        ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border-2 border-green-200 dark:border-green-800'
                        : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 border-2 border-red-200 dark:border-red-800'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    )}
                    <p className="text-sm font-medium">{status.message}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400"
            >
              I typically respond within 24 hours
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}