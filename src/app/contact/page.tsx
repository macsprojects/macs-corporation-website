'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import styles from './contact.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        const data = await response.json();
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit the form. Please try again later.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.header}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className={styles.title}>Let&apos;s Build Something Together</h1>
        <p className={styles.subtitle}>
          Reach out for partnerships, business inquiries, or collaborations.
        </p>
      </motion.div>

      <div className={styles.contentWrapper}>
        <motion.div 
          className={styles.infoSection}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className={styles.infoBlock}>
            <h2 className={styles.infoTitle}>Email</h2>
            <p className={styles.infoText}>
              <a href="mailto:info@macscorporation.com" className={styles.emailLink}>
                info@macscorporation.com
              </a>
            </p>
          </div>

          <div className={styles.infoBlock}>
            <h2 className={styles.infoTitle}>Headquarters</h2>
            <p className={styles.infoText}>
              MACS Corporation Pvt Ltd<br />
              Colombo 03<br />
              Sri Lanka
            </p>
          </div>

          <div className={styles.mapContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.513221975764!2d79.84589926868661!3d6.905332577771746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963120b1509%3A0x2db2c18a68712863!2sColombo%2003%2C%20Colombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1714156093154!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        <motion.div 
          className={styles.formSection}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {status === 'success' ? (
            <motion.div 
              className={styles.successMessage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h3>Thank you.</h3>
              <p>Your inquiry has been received. Our team will contact you soon.</p>
              <button 
                className={styles.secondaryBtn} 
                onClick={() => setStatus('idle')}
                style={{ marginTop: '20px' }}
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              {status === 'error' && (
                <div className={styles.errorMessage}>
                  {errorMessage}
                </div>
              )}

              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="company" className={styles.label}>Company / Organization</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className={styles.input}
                  value={formData.company}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={styles.input}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message *</label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className={styles.spinner} size={20} />
                    Submitting...
                  </>
                ) : 'Submit Inquiry'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
