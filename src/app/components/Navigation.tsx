"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: scrolled ? '0.75rem 0' : '1.5rem 0',
      transition: 'var(--transition)',
      background: scrolled ? 'rgba(5, 11, 20, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0, 240, 255, 0.1)' : '1px solid transparent',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            background: 'linear-gradient(135deg, var(--cyber-cyan), var(--electric-blue))',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)',
            position: 'relative'
          }}>
            <div style={{ width: '18px', height: '18px', position: 'relative' }}>
               <div style={{ content: "''", position: 'absolute', top: '7px', left: 0, width: '18px', height: '4px', background: 'var(--bg-void)', borderRadius: '1px' }}></div>
               <div style={{ content: "''", position: 'absolute', top: 0, left: '7px', width: '4px', height: '18px', background: 'var(--bg-void)', borderRadius: '1px' }}></div>
            </div>
          </div>
          <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.4rem', letterSpacing: '-0.5px' }}>
            Hospital <span style={{ color: 'var(--cyber-cyan)' }}>Digital</span>
          </span>
        </Link>

        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', fontWeight: 500, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <div style={{ position: 'relative', cursor: 'pointer' }} className="nav-dropdown">
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>Soluciones <small style={{ fontSize: '0.6rem' }}>▼</small></span>
            <div style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'var(--bg-slate)',
              border: '1px solid rgba(0, 240, 255, 0.1)',
              borderRadius: '8px',
              padding: '0.5rem',
              display: 'flex',
              flexDirection: 'column',
              minWidth: '180px',
              opacity: 0,
              visibility: 'hidden',
              transition: 'var(--transition)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
              marginTop: '10px'
            }} className="dropdown-menu">
              <Link href="/proveedores" className="dropdown-item">Proveedores</Link>
              <Link href="/hospitales" className="dropdown-item">Hospitales</Link>
              <Link href="/clinicas" className="dropdown-item">Clínicas</Link>
              <Link href="/enfermeras" className="dropdown-item">Enfermeras</Link>
            </div>
          </div>
          <Link href="#nosotros" style={{ color: 'var(--text-muted)' }}>Nosotros</Link>
          <Link href="#contacto" style={{ color: 'var(--text-muted)' }}>Contacto</Link>
        </div>

        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          <Link href="#" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>Portal</Link>
          <button className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>Demo</button>
        </div>
      </div>
      <style jsx>{`
        .nav-dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translate(-50%, 0);
        }
        .dropdown-item {
          padding: 0.75rem 1rem;
          border-radius: 6px;
          transition: var(--transition);
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .dropdown-item:hover {
          background: rgba(0, 240, 255, 0.05);
          color: var(--cyber-cyan);
          padding-left: 1.25rem;
        }
      `}</style>
    </nav>
  );
}
