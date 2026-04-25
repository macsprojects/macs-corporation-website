'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/subsidiaries', label: 'Subsidiaries' },
    { href: '/industries', label: 'Industries' },
  ];

  return (
    <header style={{
      backgroundColor: 'rgba(11, 11, 11, 0.95)',
      backdropFilter: 'blur(12px)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70px',
      }}>

        {/* Logo + Brand */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img
            src="/logo.jpg"
            alt="MACS Corporation Logo"
            style={{ width: '38px', height: '38px', objectFit: 'contain', borderRadius: '2px' }}
          />
          <span style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            letterSpacing: '2px',
            color: 'var(--foreground)',
            whiteSpace: 'nowrap'
          }}>
            MACS CORPORATION
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{
          display: 'flex',
          gap: '30px',
          fontSize: '0.85rem',
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          alignItems: 'center',
        }} className="desktop-nav">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: 'var(--foreground)',
                transition: 'color 0.3s',
                opacity: 0.85,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" style={{
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '10px 22px',
            borderRadius: '2px',
            fontWeight: 'bold',
            fontSize: '0.85rem',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            boxShadow: '0 0 12px rgba(161, 18, 18, 0.4)',
            transition: 'background-color 0.3s, box-shadow 0.3s',
          }}>
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--foreground)',
            cursor: 'pointer',
            padding: '5px',
          }}
          className="hamburger-btn"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div style={{
          backgroundColor: 'rgba(11, 11, 11, 0.98)',
          borderTop: '1px solid var(--border)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
        }} className="mobile-menu">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'var(--foreground)',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                padding: '14px 10px',
                borderBottom: '1px solid var(--border)',
                display: 'block',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              backgroundColor: 'var(--primary)',
              color: 'white',
              padding: '14px 10px',
              fontWeight: 'bold',
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textAlign: 'center',
              display: 'block',
              marginTop: '10px',
              borderRadius: '2px',
            }}
          >
            Contact
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
}
