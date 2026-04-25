'use client';

import { motion } from 'framer-motion';
import { Layout, Cpu, Zap, Code, LineChart, Server } from 'lucide-react';
import styles from './subsidiaries.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Subsidiaries() {
  const services = [
    { name: 'Web Development', icon: Layout, desc: 'Enterprise-grade web applications and high-performance platforms.' },
    { name: 'AI Systems', icon: Cpu, desc: 'Custom artificial intelligence integration and machine learning models.' },
    { name: 'Automation', icon: Zap, desc: 'Streamlining complex business workflows through intelligent automation.' },
    { name: 'Applications', icon: Code, desc: 'Scalable mobile and desktop applications tailored to modern needs.' },
    { name: 'Data Analytics', icon: LineChart, desc: 'Transforming raw data into actionable business intelligence.' },
    { name: 'Infrastructure', icon: Server, desc: 'Robust cloud infrastructure and secure deployment pipelines.' },
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
            Our <span className="text-crimson">Subsidiaries</span>
          </motion.h1>
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
          <motion.div variants={fadeInUp} className={styles.subsidiaryCard}>
            <div className={styles.subsidiaryHeader}>
              <span className={styles.flagshipBadge}>First & Flagship Subsidiary</span>
              <div className={styles.techLogoWrapper}>
                <img 
                  src="/macs-technologies-logo.jpg" 
                  alt="MACS Technologies Pvt Ltd Logo"
                  className={styles.techLogo}
                />
              </div>
              <p className={styles.subsidiaryDesc}>
                As the inaugural and flagship venture under MACS Corporation, MACS Technologies Pvt Ltd drives digital transformation. We architect modern, scalable, and secure technology solutions designed to empower enterprises globally.
              </p>
            </div>
            
            <div className={styles.servicesWrapper}>
              <h3 className={styles.servicesTitle}>Core Services</h3>
              <div className={styles.servicesGrid}>
                {services.map((service, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className={styles.serviceItem}>
                    <service.icon size={40} className={styles.serviceIcon} />
                    <h4 className={styles.serviceName}>{service.name}</h4>
                    <p className={styles.serviceDesc}>{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
