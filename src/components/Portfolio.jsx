// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: 'Habit Tracking App',
      problem: 'Users struggled to maintain consistent habits and track progress effectively',
      techStack: ['React Native', 'Node.js', 'MongoDB', 'Express'],
      contribution: 'Led full-stack development, implemented real-time sync, and designed intuitive UI/UX',
      impact: 'Increased user retention by 40% and helped 10K+ users build better habits',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'E-commerce Platform',
      problem: 'Small businesses needed an affordable, scalable e-commerce solution',
      techStack: ['React', 'Spring Boot', 'MySQL', 'AWS'],
      contribution: 'Architected microservices, implemented payment gateway, and optimized database queries',
      impact: 'Processed $500K+ in transactions and reduced checkout time by 60%',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'Admin Dashboard',
      problem: 'Companies lacked a unified dashboard for managing operations and analytics',
      techStack: ['Angular', 'Node.js', 'PostgreSQL', 'D3.js'],
      contribution: 'Built responsive dashboard, implemented role-based access control, and created data visualization',
      impact: 'Improved operational efficiency by 35% and reduced decision-making time by 50%',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'SaaS Analytics Platform',
      problem: 'Startups needed affordable analytics tools to track user behavior and metrics',
      techStack: ['React', 'Python', 'FastAPI', 'Redis', 'Docker'],
      contribution: 'Developed real-time analytics engine, created RESTful APIs, and implemented caching strategies',
      impact: 'Served 50K+ daily active users and reduced API response time by 70%',
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
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-heading-dark mb-4">Featured Projects</h3>
            <motion.div
              className="w-16 h-0.5 bg-primary mt-3 mb-6 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="text-text-dark text-lg max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in full-stack development and problem-solving
            </p>
          </div>

          <motion.div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative rounded-xl overflow-hidden bg-card-dark shadow-lg cursor-pointer"
                variants={itemVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -8 }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 }
                } : { opacity: 0, y: 50 }}
              >
                {/* Project Image Container */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <motion.img
                    alt={project.title}
                    className="w-full h-full object-cover"
                    src={project.image}
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />

                  {/* Gradient Overlay - Only visible when NOT hovered */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"
                    animate={{
                      opacity: hoveredIndex === index ? 0 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Title and Tech Stack - Only visible when NOT hovered */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6 z-10"
                    animate={{
                      opacity: hoveredIndex === index ? 0 : 1,
                      y: hoveredIndex === index ? 10 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      {project.techStack.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-1 bg-primary/20 backdrop-blur-sm text-primary text-xs font-medium rounded-md border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-white font-bold text-2xl md:text-3xl mb-2">
                      {project.title}
                    </h4>
                    <p className="text-white/90 text-sm line-clamp-2">
                      {project.problem}
                    </p>
                  </motion.div>
                </div>

                {/* Detailed Info Overlay - Only appears on hover, completely replaces image content */}
                <motion.div
                  className="absolute inset-0 bg-card-dark p-6 md:p-8 flex flex-col justify-between overflow-y-auto"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{
                    pointerEvents: hoveredIndex === index ? 'auto' : 'none',
                    zIndex: hoveredIndex === index ? 20 : 0
                  }}
                >
                  {/* Title at top of hover overlay */}
                  <div className="mb-4">
                    <h4 className="text-heading-dark font-bold text-2xl md:text-3xl mb-1">
                      {project.title}
                    </h4>
                    <div className="h-0.5 w-12 bg-primary mt-2 mb-4"></div>
                  </div>

                  <div className="space-y-5 flex-1">
                    {/* Challenge */}
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{
                        y: hoveredIndex === index ? 0 : 10,
                        opacity: hoveredIndex === index ? 1 : 0
                      }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      <h5 className="text-primary font-semibold text-xs uppercase tracking-wider mb-2">Challenge</h5>
                      <p className="text-text-dark text-sm leading-relaxed">{project.problem}</p>
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{
                        y: hoveredIndex === index ? 0 : 10,
                        opacity: hoveredIndex === index ? 1 : 0
                      }}
                      transition={{ delay: 0.15, duration: 0.3 }}
                    >
                      <h5 className="text-primary font-semibold text-xs uppercase tracking-wider mb-3">Tech Stack</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-md border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* My Role */}
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{
                        y: hoveredIndex === index ? 0 : 10,
                        opacity: hoveredIndex === index ? 1 : 0
                      }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      <h5 className="text-primary font-semibold text-xs uppercase tracking-wider mb-2">My Role</h5>
                      <p className="text-text-dark text-sm leading-relaxed">{project.contribution}</p>
                    </motion.div>
                  </div>

                  {/* Impact - Bottom */}
                  <motion.div
                    className="pt-4 mt-4 border-t border-gray-700"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{
                      y: hoveredIndex === index ? 0 : 10,
                      opacity: hoveredIndex === index ? 1 : 0
                    }}
                    transition={{ delay: 0.25, duration: 0.3 }}
                  >
                    <h5 className="text-primary font-semibold text-xs uppercase tracking-wider mb-2">Impact</h5>
                    <p className="text-heading-dark font-semibold text-sm">{project.impact}</p>
                  </motion.div>
                </motion.div>

                {/* Subtle Border on Hover */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary/50 rounded-xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

