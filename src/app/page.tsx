'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Lightbulb, Target, Users, Zap, Code, Cpu, LineChart, Server, Layout } from "lucide-react";
import styles from "./page.module.css";

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

export default function Home() {
  return (
    <div className={styles.page}>
      
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <motion.div 
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className={styles.title}>
            Building the Future Through <br />
            <span className="text-crimson">Unified Innovation</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className={styles.description}>
            MACS Corporation Pvt Ltd is a premier parent company, building, acquiring, and scaling ventures that redefine industries.
          </motion.p>
          
          <motion.div variants={fadeInUp} className={styles.ctas}>
            <Link href="#about" className={styles.primaryBtn}>
              Explore Our Vision
            </Link>
            <Link href="#subsidiaries" className={styles.secondaryBtn}>
              View Subsidiaries
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. ABOUT PREVIEW */}
      <section id="about" className={styles.section}>
        <motion.div 
          className={styles.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className={styles.sectionTitle}>About Us</h2>
          <div className={styles.aboutCard}>
            <p className={styles.aboutText}>
              Founded by two visionary entrepreneurs, MACS Corporation Pvt Ltd stands as a powerful parent company dedicated to building and scaling high-impact ventures. We provide the strategic foundation, capital, and leadership required to turn ambitious ideas into market-leading enterprises.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className={`${styles.section} ${styles.bgDarker}`}>
        <motion.div 
          className={styles.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            {[
              { title: 'Innovation', icon: Lightbulb, desc: 'Pioneering new solutions across sectors.' },
              { title: 'Integrity', icon: Shield, desc: 'Unwavering commitment to ethical practices.' },
              { title: 'Excellence', icon: Target, desc: 'Delivering premium quality in every venture.' },
              { title: 'Collaboration', icon: Users, desc: 'Building strong, unified partnerships.' },
              { title: 'Agility', icon: Zap, desc: 'Adapting quickly to future market demands.' },
            ].map((value, idx) => (
              <motion.div key={idx} variants={fadeInUp} className={styles.valueCard}>
                <value.icon className={styles.valueIcon} size={40} />
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDesc}>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. SUBSIDIARY SECTION */}
      <section id="subsidiaries" className={styles.section}>
        <motion.div 
          className={styles.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <h2 className={styles.sectionTitle}>Active Subsidiaries</h2>
          
          <motion.div variants={fadeInUp} className={styles.subsidiaryCard}>
            <div className={styles.subsidiaryHeader}>
              <h3 className={styles.subsidiaryTitle}>MACS Technologies Pvt Ltd</h3>
              <p className={styles.subsidiaryDesc}>
                Our flagship technology arm delivering enterprise-grade software solutions, artificial intelligence, and digital transformation services.
              </p>
            </div>
            
            <div className={styles.servicesGrid}>
              {[
                { name: 'Web Development', icon: Layout },
                { name: 'AI Systems', icon: Cpu },
                { name: 'Automation', icon: Zap },
                { name: 'Applications', icon: Code },
                { name: 'Data Analytics', icon: LineChart },
                { name: 'Infrastructure', icon: Server },
              ].map((service, idx) => (
                <div key={idx} className={styles.serviceItem}>
                  <service.icon size={24} className={styles.serviceIcon} />
                  <span>{service.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 5. FUTURE INDUSTRIES SECTION */}
      <section className={`${styles.section} ${styles.bgDarker}`}>
        <motion.div 
          className={styles.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className={styles.futureHeader}>
            <h2 className={styles.sectionTitle}>Future Expansion</h2>
            <p className={styles.sectionSubtitle}>Strategic sectors identified for future growth and acquisition.</p>
          </div>
          
          <div className={styles.industriesGrid}>
            {['Agriculture', 'Finance', 'Education', 'Healthcare', 'Retail', 'Real Estate', 'Logistics', 'Energy', 'Media'].map((industry, idx) => (
              <motion.div key={idx} variants={fadeInUp} className={styles.industryCard}>
                {industry}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 6. CTA SECTION */}
      <section className={styles.ctaSection}>
        <motion.div 
          className={styles.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className={styles.ctaTitle}>Ready to shape the future?</h2>
          <p className={styles.ctaDesc}>Join us in building sustainable, high-growth ventures.</p>
          <Link href="/contact" className={styles.primaryBtn}>
            Partner With Us
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
