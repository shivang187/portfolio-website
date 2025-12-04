// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {      title: 'Habit Tracking App',
      description: 'Personal productivity, mobile-friendly',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'E-commerce Platform',
      description: 'Business logic, full-stack skills',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'Admin Dashboard',
      description: 'Analytics, CRUD, role-based access',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'SaaS Dashboard',
      description: 'Software as a Service Dashboard',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="portfolio" className="py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-heading-dark">Portfolio</h3>
          <motion.div
            className="w-16 h-0.5 bg-primary mt-3 mb-6 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative rounded-lg overflow-hidden shadow-soft aspect-square cursor-pointer"
                variants={itemVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -15, scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={isInView ? {
                  opacity: 1,
                  y: 0,
                  rotateY: 0,
                  transition: { delay: index * 0.2 }
                } : { opacity: 0, y: 50, rotateY: -15 }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'linear',
                  }}
                />

                <motion.img
                  alt={project.title}
                  className="w-full h-full object-cover relative z-0"
                  src={project.image}
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  animate={{
                    filter: hoveredIndex === index ? 'brightness(1.1) saturate(1.2)' : 'brightness(1) saturate(1)',
                  }}
                />

                {/* Animated Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 flex flex-col items-center justify-center text-white p-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.h4
                    className="font-bold text-2xl mb-3"
                    initial={{ y: 30, opacity: 0, scale: 0.8 }}
                    animate={{
                      y: hoveredIndex === index ? 0 : 30,
                      opacity: hoveredIndex === index ? 1 : 0,
                      scale: hoveredIndex === index ? 1 : 0.8,
                    }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                  >
                    {project.title}
                  </motion.h4>
                  <motion.p
                    className="text-sm md:text-base"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{
                      y: hoveredIndex === index ? 0 : 30,
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Animated Border with Pulse */}
                  <motion.div
                    className="absolute inset-0 border-2 border-primary"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{
                      scale: hoveredIndex === index ? [1, 1.02, 1] : 0.9,
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      scale: {
                        duration: 2,
                        repeat: hoveredIndex === index ? Infinity : 0,
                        ease: 'easeInOut',
                      }
                    }}
                  />

                  {/* Shimmer Effect */}
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  )}
                </motion.div>

                {/* Enhanced Glow Effect */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute -inset-4 bg-primary/30 blur-2xl -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                )}

                {/* Floating Particles Effect */}
                {hoveredIndex === index && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary rounded-full"
                        initial={{
                          x: '50%',
                          y: '50%',
                          opacity: 0,
                        }}
                        animate={{
                          x: `${50 + (Math.random() - 0.5) * 100}%`,
                          y: `${50 + (Math.random() - 0.5) * 100}%`,
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: 'easeOut',
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

