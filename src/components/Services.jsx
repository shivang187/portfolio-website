import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    FaCode,
    FaServer,
    FaShoppingCart,
    FaChartLine,
    FaTools,
    FaLayerGroup
} from 'react-icons/fa';

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const services = [
        {
            title: 'Web App Development',
            icon: FaCode,
            description: 'Custom web applications built with modern frameworks and best practices for optimal performance and user experience.',
        },
        {
            title: 'API Development',
            icon: FaServer,
            description: 'RESTful and GraphQL APIs designed for scalability, security, and seamless integration with frontend applications.',
        },
        {
            title: 'E-commerce Solutions',
            icon: FaShoppingCart,
            description: 'Complete e-commerce platforms with payment integration, inventory management, and secure checkout systems.',
        },
        {
            title: 'Admin Dashboards',
            icon: FaChartLine,
            description: 'Intuitive admin panels with analytics, data visualization, and role-based access control for efficient management.',
        },
        {
            title: 'Bug Fixing / Maintenance',
            icon: FaTools,
            description: 'Expert debugging, code optimization, and ongoing maintenance to keep your applications running smoothly.',
        },
        {
            title: 'Full-Stack App Development',
            icon: FaLayerGroup,
            description: 'End-to-end development from frontend to backend, including database design and deployment solutions.',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section id="services" className="py-16 md:py-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-5">
                <motion.div
                    className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, -50, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-heading-dark mb-4">
                        Services I Offer
                    </h3>
                    <motion.div
                        className="w-16 h-0.5 bg-primary mt-3 mb-6 mx-auto"
                        initial={{ width: 0 }}
                        whileInView={{ width: 64 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <p className="text-text-dark text-lg max-w-2xl mx-auto">
                        Comprehensive development services to bring your ideas to life.
                        From concept to deployment, I deliver high-quality solutions tailored to your needs.
                    </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-card-dark rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/30"
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Icon */}
                            <motion.div
                                className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <service.icon className="w-8 h-8" />
                            </motion.div>

                            {/* Content */}
                            <h4 className="text-xl font-bold text-heading-dark mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-text-dark text-sm leading-relaxed">
                                {service.description}
                            </p>

                            {/* Hover Effect Background */}
                            <motion.div
                                className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                                initial={false}
                            />

                            {/* Decorative Corner */}
                            <motion.div
                                className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={false}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <p className="text-text-dark text-lg mb-6">
                        Ready to start your project?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                const contactSection = document.querySelector('#contact');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-background-dark font-bold text-lg rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 w-full sm:w-auto"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Hire Me
                        </motion.a>
                        <motion.a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                const contactSection = document.querySelector('#contact');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-bold text-lg rounded-lg hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get a Quote
                        </motion.a>
                        <motion.a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                const contactSection = document.querySelector('#contact');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="inline-flex items-center justify-center px-8 py-4 bg-card-dark border border-primary/30 text-primary font-semibold text-base rounded-lg hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Schedule a Call
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;

