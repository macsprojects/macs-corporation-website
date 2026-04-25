'use client';

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import styles from './about.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function About() {
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
            Visionary Leadership.<br />
            <span className="text-crimson">Sustainable Growth.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className={styles.subtitle}>
            Building a legacy of excellence across multiple industries.
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
          <motion.div variants={fadeInUp} className={styles.storyBlock}>
            <p className={styles.storyText}>
              Founded by two visionary entrepreneurs, MACS Corporation Pvt Ltd was established with a singular focus: to build, acquire, and scale high-impact ventures that redefine market standards.
            </p>
            <p className={styles.storyText}>
              As a premier holding company, we provide the strategic foundation, operational expertise, and robust capital necessary to turn ambitious ideas into enduring enterprises. Our approach is rooted in identifying untapped potential and applying rigorous corporate governance to ensure sustainable success across our portfolio.
            </p>
          </motion.div>

          <div className={styles.cardsGrid}>
            <motion.div variants={fadeInUp} className={styles.card}>
              <Target size={48} className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>Our Mission</h2>
              <p className={styles.cardText}>
                To empower and elevate businesses through strategic investment, unified innovation, and unparalleled operational support, driving sustainable value for all stakeholders.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className={styles.card}>
              <Eye size={48} className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>Our Vision</h2>
              <p className={styles.cardText}>
                To be the region&apos;s most respected holding company, recognized for pioneering transformative solutions and building a legacy of excellence across diverse industries.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
