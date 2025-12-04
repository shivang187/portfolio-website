import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    <section id="about" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h3
            className="text-3xl font-bold text-heading-dark"
            variants={itemVariants}
          >
            About Me
          </motion.h3>
          <motion.div
            className="w-16 h-0.5 bg-primary mt-3 mb-6 mx-auto"
            variants={itemVariants}
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="leading-relaxed text-lg"
            variants={itemVariants}
          >
            I have acquired and sharpened my skills in full-stack and mobile app
            development. A passionate and diligent software engineer with a strong
            foundation in modern web technologies and a keen eye for detail. I am
            trustworthy, creative, and an effective communicator, fondly anticipating
            challenging yet rewarding opportunities to attain visions for personal growth.
          </motion.p>

          {/* Animated Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            variants={itemVariants}
          >
            {[
              { number: '50+', label: 'Projects' },
              { number: '3+', label: 'Years Experience' },
              { number: '100%', label: 'Dedication' },
              { number: '24/7', label: 'Available' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-card-dark rounded-lg p-6 shadow-soft"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <motion.div
                  className="text-3xl font-bold text-primary"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-text-dark mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

