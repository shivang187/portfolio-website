import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = {
    Frontend: [
      { name: 'React', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5fgzD3jx9tSVWtdSGI66VeHAs2Ok3bi-xqw5R7GZadCWsK1oY4EOSbDp2_vUSKtiSlI89H0St6CAo0dUIh_3bN5WRI1wIqrgPQJG-lDIV005e8qLFbZuArGPFawjwfsoMo8QALyl-wg73MZDeTW86ONoVs5coPa5NjkAaYY9Ern4oHvPEEOK67MGNZ-jjtKJ50Fe4pYxqek70rQbjD_3P9b0-GB-SVfOgQUJE6NkX7xNNurYinsXiCGRoWPYZZtZlrG_pVYXren0', level: 90 },
      { name: 'React Native', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7CjCbUjEnnxT_np87GH3LX1vYb7Pi2tJ7Yxh6olSvGt5lC7LNngxkekyiwxUPJyrpDp2EL0xJPZXhXKJxqDoim_3vMb5wX5Kk1t9iqEWptE8Eyr-YwxINOsSzt9JOgJeZJr-6HbfTiNgJCDK2Pim7baU70MSUp-4EdZdTwvRoHfm8LXLMY0J5R5_JO6E7Myj8eB7kJYH95PfDhBy_Jxn5pLDsgFYyUGOeSdIOVD562Qgcolwep4JFBSKNlHEHrn2qQQbpsfPirHg', level: 85 },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', level: 85 },
      { name: 'JavaScript', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALUAOUbJLnZ6MAoSmHdlUc0Z0U-jgPf-75AeuUHYJiN3nDFIVIo3ih8nHFo9hOoU2jmK_p5tfKnroVHAdWo0PBmxgKzk5P1zHf3-7AAqxjySm6jjMQPP2TJWxXYqs0W-B2vdjRTORfeT486Z3pUnatBHtPCzeMqXKs6W8MYhpa96hSCfKA87IsOuUxZx1SfpB09Ib_wwIwmdt85DpI9ySZSy8-LKiBX5e5_iNE2ytbowJfsuA32Yy_h0KqrjcUzxCBvW5eYwAzYhM', level: 92 },
      { name: 'HTML & CSS', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzDDwYpdyBV6rqz4Up_by2tqzwTvVchI-RFCN-wBPSAp6XmSeC1dnTcJTaw-i2-R8SitktmzxrxQzuCrDl8Ut-pDv1O9vY8yILOoFwKLJKU_UX-AVLYPXxGyYiwWLH5TYQhpQw7cho8B28CJ6LBml6E6QXFtYMy6P-46vJtCIbDIp1kQYCmomW8Fq8k2mrvA1Z8jvQ7qo6v0UnyUSyuIdMuSrHuUAt3xqc1u1earts2WdlWQwOS9jdUa_x31gIwCVzO0wdp9aePwk', level: 95 },
    ],
    Backend: [
      { name: 'Node.js', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRdaTVB5oBYv4Y7vaKNORVO0uYi_o3LUPzbvjOlsCHywilTa98wxr_vnbUhfF_5FETEa6PIkmbMkrj6Bfdkz1pPV7j7VRxmcE9mrfQ7_csMKC3SZmUjdYk7X2gFwnACBwNMHA52uMKbtcf0qngQmZjLSGK_s7ImQi0ESlqKXhtrVd5pYNreTPBD2OrfokCMHLxAqRg6re2axEFAC7CEQXoBZIosxrTV7y3f6uk9yEey09jBACWthPvLQAFS4kiMQbfqlD-pDpxs5M', level: 88 },
      { name: 'Spring Boot', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6eSEHUas4DncTEWWfO2ZCCEwY2i_OYA7CbPYUdQKDtrDF3TmCCqBkaP7wFUuVNSSfhljpa_b5VVLgY8dOCN_nQz4VpVqreYCIEnze4wVjDD-nAKq2c-N0H04NwWduBZ3wPlAHTmVU74P-99DIYBVfp87EsUMmDUe64tISP4lu2lnISV_FN-JaKT1rzbm3_d0KjsSXEqVEP543iGhclq4xey-FvDyUsDReAhOe8B6hwvvROdo7SvMNh1MQtR7dp4OnrakCdPWRdvI', level: 80 },
    ],
    Database: [
      { name: 'MySQL', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNETd8dlRiyGx5yTH-tAioc7baKGNfw4ZRUwvw9UrSM8zSJD6DGZQowojoP4nADgB0q0iWSAy9D5Hi2ESu23p5EUBsJFZ4tUzBNGXlTTaIZAmCv7DEDm5f-nqvRDgbACKOZqePPu15qL8vov5RFkGEfQwLgDiqKHbHNILIEplOJPe0ydpTS9XvZR71RQc0PuBfmBLoAsk6dfO6ZSWv6DsRAbsYnYS_5wfgmbFC7IJG9T8vUgjKzbTh7F0uSQCesIz4Aw_JxWrJMqo', level: 82 },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', level: 80 },
    ],
    Tools: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 88 },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: 75 },
    ],
  };

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
    hidden: { opacity: 0, y: 30, scale: 0.8 },
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
    <section id="skills" className="py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-heading-dark">My Skills</h3>
          <motion.div
            className="w-16 h-0.5 bg-primary mt-3 mb-12 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <div className="space-y-12">
            {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <h4 className="text-xl font-semibold text-primary mb-6 text-center md:text-left">
                  {category}
                </h4>
                <motion.div
                  ref={categoryIndex === 0 ? ref : null}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView || categoryIndex > 0 ? 'visible' : 'hidden'}
                >
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="bg-card-dark rounded-lg p-4 flex flex-col items-center justify-center text-center aspect-square shadow-soft relative overflow-hidden group"
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, y: -10, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Hover Effect Background */}
                      <motion.div
                        className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />

                      <motion.img
                        alt={`${skill.name} icon`}
                        className="h-12 w-12 mb-3 relative z-10"
                        src={skill.icon}
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="font-medium text-heading-dark relative z-10 text-sm">{skill.name}</span>

                      {/* Progress Bar */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-background-dark"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          whileHover={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

