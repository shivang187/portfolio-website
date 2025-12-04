import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const contactLinks = [
    { 
      icon: MdEmail, 
      text: 'shivangsrivasatava2023@gmail.com', 
      href: 'mailto:shivangsrivasatava2023@gmail.com',
      label: 'Email'
    },
    { 
      icon: FaLinkedin, 
      text: 'LinkedIn Profile', 
      href: 'https://www.linkedin.com/in/shivang-srivastava-196324119/',
      label: 'LinkedIn'
    },
    { 
      icon: FaGithub, 
      text: 'GitHub Profile', 
      href: 'https://github.com',
      label: 'GitHub'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="contact" className="py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-heading-dark">Contact Me</h3>
          <motion.div
            className="w-16 h-0.5 bg-primary mt-3 mb-12 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full bg-card-dark border border-gray-600 text-text-dark rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary placeholder-gray-500 px-4 py-3 transition-all"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full bg-card-dark border border-gray-600 text-text-dark rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary placeholder-gray-500 px-4 py-3 transition-all"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full bg-card-dark border border-gray-600 text-text-dark rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary placeholder-gray-500 px-4 py-3 transition-all resize-none"
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button
                    className="w-full px-6 py-3 bg-primary text-background-dark font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300 relative overflow-hidden"
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                    {isSubmitting && (
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      />
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Links */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h4 className="text-xl font-semibold text-heading-dark mb-4">Get In Touch</h4>
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-4 p-5 bg-card-dark rounded-lg shadow-soft group hover:scale-105 transition-all duration-300 border border-transparent hover:border-primary/30"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5, boxShadow: "0 10px 25px rgba(255, 200, 107, 0.2)" }}
                >
                  <motion.div
                    className="text-primary text-2xl flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <link.icon />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-heading-dark group-hover:text-primary transition-colors">
                      {link.label}
                    </div>
                    <div className="text-xs text-text-dark mt-1">
                      {link.text}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

