"use client";

import Link from 'next/link';

export default function Proveedores() {
  return (
    <div style={{ padding: '6rem 0' }}>
      <div className="container animate-fade-in">
        <div style={{ marginBottom: '5rem', maxWidth: '900px' }}>
          <span style={{ color: 'var(--cyber-cyan)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Network Node: Suppliers</span>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', margin: '1.5rem 0', lineHeight: 1 }}>Optimización de <br/><span style={{ color: 'var(--cyber-cyan)' }}>Flujo de Caja.</span></h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', lineHeight: 1.6 }}>
            Arquitectura de gestión predictiva diseñada para proveedores B2B del sector salud. Detecta deuda oculta y asegura el cumplimiento automatizado de la Ley 21.131.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          <FeatureCard 
            title="Detección de Deuda Oculta"
            desc="Algoritmos de reconciliación automática que identifican facturas rechazadas o sin recepción conforme antes de que afecten tu liquidez."
            status="ACTIVE"
          />
          <FeatureCard 
            title="Compliance Ley 21.131"
            desc="Cálculo automático de intereses penales y multas de 1 UF. Generación inmediata de expedientes para gestión de cobro judicial o extrajudicial."
            status="READY"
          />
          <FeatureCard 
            title="Institutional Scoring"
            desc="Ranking de comportamiento de pago basado en datos reales del ecosistema. Evalúa el riesgo crediticio de cada institución antes de la venta."
            status="ONLINE"
          />
        </div>

        <div className="glass-panel" style={{ padding: '4rem', textAlign: 'center', border: '1px dashed rgba(0, 240, 255, 0.3)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>¿Listo para automatizar tu cobranza?</h2>
          <button className="btn-primary" style={{ padding: '1.2rem 3.5rem', fontSize: '1.1rem' }}>Solicitar Acceso a la Red</button>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, desc, status }: { title: string, desc: string, status: string }) {
  return (
    <div className="glass-panel" style={{ padding: '3rem 2.5rem', position: 'relative' }}>
      <div style={{ 
        position: 'absolute', 
        top: '1.5rem', 
        right: '1.5rem', 
        fontSize: '0.65rem', 
        fontWeight: 700, 
        color: 'var(--cyber-cyan)',
        background: 'rgba(0, 240, 255, 0.1)',
        padding: '4px 8px',
        borderRadius: '4px',
        letterSpacing: '1px'
      }}>{status}</div>
      <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', color: '#FFF' }}>{title}</h3>
      <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}
