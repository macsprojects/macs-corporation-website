import Link from 'next/link';

export default function Footer() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/subsidiaries', label: 'Subsidiaries' },
    { href: '/industries', label: 'Industries' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer style={{
      backgroundColor: '#050505',
      borderTop: '1px solid var(--border)',
      color: 'var(--foreground)',
      padding: '70px 20px 30px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Top section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '40px',
          marginBottom: '60px',
        }}>
          {/* Brand Block */}
          <div style={{ maxWidth: '400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <img
                src="/logo.jpg"
                alt="MACS Corporation Logo"
                style={{ width: '40px', height: '40px', objectFit: 'contain' }}
              />
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '2px' }}>
                MACS Corporation Pvt Ltd
              </h2>
            </div>
            <p style={{ color: '#aaaaaa', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '10px' }}>
              Modern Alliance for Corporate Success
            </p>
            <p style={{ color: 'var(--primary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Building the Future Through Unified Innovation
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#aaaaaa', marginBottom: '20px' }}>
              Quick Links
            </h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: 'var(--foreground)',
                    fontSize: '0.9rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    opacity: 0.8,
                    transition: 'opacity 0.3s, color 0.3s',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Block */}
          <div>
            <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#aaaaaa', marginBottom: '20px' }}>
              Contact
            </h3>
            <a href="mailto:info@macscorporation.com" style={{
              color: 'var(--foreground)',
              fontSize: '0.9rem',
              opacity: 0.8,
            }}>
              info@macscorporation.com
            </a>
            <p style={{ color: '#666', fontSize: '0.85rem', marginTop: '10px' }}>
              Colombo 03, Sri Lanka
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '25px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px',
        }}>
          <p style={{ fontSize: '0.8rem', color: '#555' }}>
            &copy; {new Date().getFullYear()} MACS Corporation Pvt Ltd. All rights reserved.
          </p>
          <p style={{ fontSize: '0.8rem', color: '#444' }}>
            Pvt. Limited Company · Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
