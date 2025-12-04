// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      period: '',
      title: 'Full-Stack Developer (Freelance)',
      company: '',
      description: (
        <ul className="list-disc list-inside space-y-1">
          <li>Built complete web and mobile applications</li>
          <li>Designed UI, frontend systems, backend APIs</li>
          <li>Managed hosting, cloud deployments, testing</li>
        </ul>
      ),
    },
    {
      period: '',
      title: 'Java / React Developer (Company Placeholder)',
      company: '',
      description: (
        <ul className="list-disc list-inside space-y-1">
          <li>Worked on production dashboards and web platforms</li>
          <li>Integrated REST APIs</li>
          <li>Improved performance and UI components</li>
        </ul>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="experience" className="py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-heading-dark text-center">Experience</h3>
          <motion.div
            className="w-16 h-0.5 bg-primary mt-3 mb-4 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-center text-sm text-text-dark mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            3 years total experience
          </motion.p>

          <motion.div
            ref={ref}
            className="relative space-y-12 pl-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Timeline Line */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-700"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ originY: 0 }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute -left-[3.4rem] top-0 w-4 h-4 bg-primary rounded-full border-4 border-background-dark z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5 + index * 0.3, type: 'spring', stiffness: 200 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                </motion.div>

                {exp.period && (
                  <motion.p
                    className="text-sm font-medium text-primary"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.6 + index * 0.3 }}
                  >
                    {exp.period}
                  </motion.p>
                )}
                <motion.h4
                  className="font-bold text-lg text-heading-dark mt-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.7 + index * 0.3 }}
                >
                  {exp.title}
                </motion.h4>
                {exp.company && (
                  <motion.p
                    className="text-sm text-text-dark"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8 + index * 0.3 }}
                  >
                    {exp.company}
                  </motion.p>
                )}
                <motion.div
                  className="text-sm leading-relaxed mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.9 + index * 0.3 }}
                >
                  {exp.description}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

