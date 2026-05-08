"use client";

import Link from 'next/link';
import CommandCenter from './components/CommandCenter';

export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Hero Section */}
      <section style={{
        padding: '10rem 0 8rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container animate-fade-in">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '30px' }}>
             <div className="data-node" style={{ background: 'var(--cyber-cyan)', boxShadow: '0 0 10px var(--cyber-cyan)' }}></div>
             <div className="data-node" style={{ background: 'var(--electric-blue)', boxShadow: '0 0 10px var(--electric-blue)', animationDelay: '0.3s' }}></div>
             <div className="data-node" style={{ background: 'var(--neon-purple)', boxShadow: '0 0 10px var(--neon-purple)', animationDelay: '0.6s' }}></div>
          </div>
          
          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            maxWidth: '1000px',
            margin: '0 auto 1.5rem',
            letterSpacing: '-2px',
            background: 'linear-gradient(to bottom, #FFF, #94A3B8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Inteligencia Clínica <br/>
            <span style={{ 
              background: 'linear-gradient(to right, var(--cyber-cyan), var(--electric-blue))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Avanzada.</span>
          </h1>
          
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            color: 'var(--text-muted)',
            maxWidth: '700px',
            margin: '0 auto 3.5rem',
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            Plataforma enterprise para la automatización, análisis y gestión predictiva de la deuda hospitalaria.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/proveedores" className="btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '1.1rem' }}>
              Iniciar Operación
            </Link>
            <Link href="/hospitales" className="btn-secondary" style={{ padding: '1.1rem 2.5rem', fontSize: '1.1rem' }}>
              Ver Ecosistema
            </Link>
          </div>
        </div>
      </section>

      {/* Segmentación Rápida */}
      <section style={{ padding: '6rem 0', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'left', marginBottom: '5rem', borderLeft: '2px solid var(--cyber-cyan)', paddingLeft: '2rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Sistemas de Control</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Módulos especializados para cada nodo del ecosistema de salud.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            <ProfileCard 
              title="Proveedores" 
              desc="Optimización de flujo de caja y detección automática de deuda oculta mediante algoritmos predictivos."
              link="/proveedores"
              color="var(--cyber-cyan)"
              icon="01"
            />
            <ProfileCard 
              title="Hospitales" 
              desc="Transparencia radical en compras públicas y cumplimiento automatizado de la Ley 21.131."
              link="/hospitales"
              color="var(--electric-blue)"
              icon="02"
            />
            <ProfileCard 
              title="Clínicas" 
              desc="Arquitectura de abastecimiento inteligente y control de rentabilidad en tiempo real."
              link="/clinicas"
              color="var(--neon-purple)"
              icon="03"
            />
            <ProfileCard 
              title="Enfermeras" 
              desc="Interfaz clínica simplificada para recepción conforme digital y eliminación de carga administrativa."
              link="/enfermeras"
              color="#FFF"
              icon="04"
            />
          </div>
        </div>
      </section>

      {/* Corporate Strategy Section */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="glass-panel" style={{
            padding: '5rem 4rem',
            position: 'relative',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            {/* Visual Decoration */}
            <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>

            <div style={{ zIndex: 1 }}>
              <h2 style={{ fontSize: '3.5rem', lineHeight: 1, marginBottom: '2rem' }}>La Visión <br/><span style={{ color: 'var(--cyber-cyan)' }}>Enterprise</span></h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2rem' }}>
                Hospital Digital no es solo un software; es una capa de inteligencia que se integra en el núcleo de la gestión hospitalaria para iluminar ineficiencias financieras.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '20px', height: '1px', background: 'var(--cyber-cyan)' }}></div>
                    <span>Seguridad de Datos de Nivel Clínico</span>
                 </li>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '20px', height: '1px', background: 'var(--cyber-cyan)' }}></div>
                    <span>Integración Nativa con ERPs Hospitalarios</span>
                 </li>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '20px', height: '1px', background: 'var(--cyber-cyan)' }}></div>
                    <span>Auditoría Automatizada 24/7</span>
                 </li>
              </ul>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
               <div style={{ 
                 width: '100%', 
                 height: '350px', 
                 background: 'rgba(0,0,0,0.3)', 
                 borderRadius: '20px', 
                 border: '1px solid rgba(0, 240, 255, 0.2)',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 boxShadow: 'inset 0 0 50px rgba(0, 240, 255, 0.05)'
               }}>
                  <div style={{ textAlign: 'center' }}>
                     <div style={{ fontSize: '4rem', opacity: 0.5, marginBottom: '1rem' }}>⚡</div>
                     <div style={{ fontFamily: 'Space Grotesk', color: 'var(--cyber-cyan)', fontWeight: 700, letterSpacing: '2px' }}>DATA_STREAM_ACTIVE</div>
                  </div>
               </div>
            </div>
          </div>
          
          <CommandCenter />
        </div>
      </section>
    </div>
  );
}

function ProfileCard({ title, desc, link, color, icon }: { title: string, desc: string, link: string, color: string, icon: string }) {
  return (
    <Link href={link} style={{ display: 'block' }}>
      <div className="glass-panel" style={{
        padding: '3rem 2rem',
        height: '100%',
        transition: 'var(--transition)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.4), 0 0 20px ${color}33`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.1)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
      }}>
        <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '0.9rem', color, fontWeight: 700, opacity: 0.3 }}>{icon}</div>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1rem', lineHeight: 1.5 }}>{desc}</p>
        <span style={{ color, fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          Configurar Sistema <span>→</span>
        </span>
      </div>
    </Link>
  );
}
