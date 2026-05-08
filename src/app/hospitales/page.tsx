"use client";

export default function Hospitales() {
  return (
    <div style={{ padding: '6rem 0' }}>
      <div className="container animate-fade-in">
        <div style={{ marginBottom: '5rem', maxWidth: '900px' }}>
          <span style={{ color: 'var(--electric-blue)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Network Node: Public Health</span>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', margin: '1.5rem 0', lineHeight: 1 }}>Transparencia en <br/><span style={{ color: 'var(--electric-blue)' }}>Gasto Público.</span></h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', lineHeight: 1.6 }}>
            Herramientas de control presupuestario y visibilidad de deuda flotante para instituciones de salud pública. Asegura el cumplimiento legal y optimiza la relación con proveedores.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          <div className="glass-panel" style={{ padding: '3rem 2.5rem', borderLeft: '4px solid var(--electric-blue)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>Control de Pasivos</h3>
            <p style={{ color: 'var(--text-muted)' }}>Módulo de auditoría en tiempo real para la detección de compromisos no devengados y facturación pendiente de proceso.</p>
          </div>
          <div className="glass-panel" style={{ padding: '3rem 2.5rem', borderLeft: '4px solid var(--electric-blue)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>Mitigación de Intereses</h3>
            <p style={{ color: 'var(--text-muted)' }}>Sistema de alertas tempranas para evitar el devengo de intereses penales asociados a la Ley de Pago a 30 días.</p>
          </div>
          <div className="glass-panel" style={{ padding: '3rem 2.5rem', borderLeft: '4px solid var(--electric-blue)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>Portal de Abastecimiento</h3>
            <p style={{ color: 'var(--text-muted)' }}>Canal de comunicación encriptado y trazable para la validación de recepciones conformes y órdenes de compra.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
