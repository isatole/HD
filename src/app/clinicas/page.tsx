"use client";

export default function Clinicas() {
  return (
    <div style={{ padding: '6rem 0' }}>
      <div className="container animate-fade-in">
        <div style={{ marginBottom: '5rem', maxWidth: '900px' }}>
          <span style={{ color: 'var(--neon-purple)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Network Node: Private Clinics</span>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', margin: '1.5rem 0', lineHeight: 1 }}>Suministro e <br/><span style={{ color: 'var(--neon-purple)' }}>Inventario Inteligente.</span></h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', lineHeight: 1.6 }}>
            Automatización del ciclo de compra y control de rentabilidad operativa. Integra tus bodegas clínicas con la facturación de proveedores sin errores manuales.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          <div className="glass-panel" style={{ padding: '3rem 2.5rem', borderBottom: '4px solid var(--neon-purple)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>Full Automation Match</h3>
            <p style={{ color: 'var(--text-muted)' }}>Sincronización total entre HES (Hoja de Entrega de Servicios), OC (Orden de Compra) y DTE (Documento Tributario Electrónico).</p>
          </div>
          <div className="glass-panel" style={{ padding: '3rem 2.5rem', borderBottom: '4px solid var(--neon-purple)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>Trazabilidad de Alto Costo</h3>
            <p style={{ color: 'var(--text-muted)' }}>Control exhaustivo de insumos médicos e implantes, desde el ingreso a pabellón hasta el cargo automático a la cuenta del paciente.</p>
          </div>
          <div className="glass-panel" style={{ padding: '3rem 2.5rem', borderBottom: '4px solid var(--neon-purple)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>Dashboard de Rentabilidad</h3>
            <p style={{ color: 'var(--text-muted)' }}>Análisis de márgenes por procedimiento y detección de mermas o fugas financieras en el ciclo de abastecimiento.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
