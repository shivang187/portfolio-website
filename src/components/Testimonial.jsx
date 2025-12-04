import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonial" className="py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-heading-dark">Testimonial</h3>
          <motion.div
            className="w-16 h-0.5 bg-primary mt-3 mb-12 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <motion.div
            ref={ref}
            className="bg-card-dark p-8 md:p-12 rounded-lg shadow-soft flex flex-col md:flex-row items-center gap-8 md:gap-12 text-left relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Animated Background Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <motion.div
              className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 order-first md:order-last relative z-10"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
              transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100 }}
            >
              <img
                className="w-full h-full object-cover rounded-lg shadow-soft"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAfp3z_eU64jfB7AfBKcPTalGRmrErWNRxjmjTP3p6CmJWJV_xonmJPFvGFw3Xn1_xYuwkt0QlAgkqcV581VenaF5UrDdkCTuHG7UEX_a-QdX3Ccf9Aj7TIp7uUmPVSSrnuRXrux8nLhgqeO2qY5nAQoatGg7zD-p_1df478M7SWFwi78PviNuiPx2MwMdKuk6JryDFAhuqd-Zs_lKcOpmmG4nMJEgNXUR9DEfYuiMf5LZ29rcLtKRvvWGYFPq-9JuIKv_LPAAhLw"
                alt="Josef Sharon"
              />
              <motion.div
                className="absolute -inset-2 border-2 border-primary rounded-lg opacity-0"
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
            </motion.div>

            <div className="flex-1 relative z-10">
              <motion.p
                className="italic text-lg leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                "The design quality, flexibility, documentation and support are all absolutely{' '}
                <motion.span
                  className="text-primary font-semibold inline-block"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  excellent
                </motion.span>
                . Shivang is a trustworthy partner that will be able to deliver."
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <p className="font-bold mt-4 text-heading-dark">Josef Sharon</p>
                <p className="text-sm text-text-dark">CEO, Omisoft</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;

