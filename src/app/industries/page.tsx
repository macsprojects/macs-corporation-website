'use client';

import { motion } from 'framer-motion';
import styles from './industries.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Industries() {
  const futureIndustries = [
    'Agriculture',
    'Finance',
    'Education',
    'Healthcare',
    'Retail',
    'Real Estate',
    'Logistics',
    'Energy',
    'Media'
  ];

  return (
    <div>
      <section className={styles.heroSection}>
        <motion.div 
          className={styles.container}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className={styles.title}>
            Strategic <span className="text-crimson">Future Expansion</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className={styles.subtitle}>
            Identifying high-growth sectors for future investment and acquisition to build a robust, diversified corporate portfolio.
          </motion.p>
        </motion.div>
      </section>

      <section className={styles.contentSection}>
        <motion.div 
          className={styles.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className={styles.warningBanner}>
            <h3 className={styles.warningTitle}>Roadmap Notice</h3>
            <p className={styles.warningText}>
              The sectors listed below represent strategic areas identified for <strong>future expansion</strong> and investment. They are not current operating businesses, but active targets for upcoming acquisitions and venture development.
            </p>
          </motion.div>

          <div className={styles.industriesGrid}>
            {futureIndustries.map((industry, idx) => (
              <motion.div key={idx} variants={fadeInUp} className={styles.industryCard}>
                <h3 className={styles.industryTitle}>{industry}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
