"use client";

export default function Enfermeras() {
  return (
    <div style={{ padding: '6rem 0' }}>
      <div className="container animate-fade-in">
        <div style={{ marginBottom: '5rem', maxWidth: '900px' }}>
          <span style={{ color: '#FFF', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Network Node: Clinical Operations</span>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', margin: '1.5rem 0', lineHeight: 1 }}>Cero Burocracia. <br/><span style={{ color: 'var(--text-muted)' }}>Más Cuidado.</span></h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', lineHeight: 1.6 }}>
            Elimina la carga administrativa del personal clínico. Herramientas digitales para la recepción y trazabilidad de insumos en el punto de atención.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          <div className="glass-panel" style={{ padding: '3rem 2.5rem', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>Recepción One-Click</h3>
            <p style={{ color: 'var(--text-muted)' }}>Validación digital de insumos directamente en pabellón. Notifica instantáneamente a abastecimiento y finanzas.</p>
          </div>
          <div className="glass-panel" style={{ padding: '3rem 2.5rem', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>Escaner de Insumos</h3>
            <p style={{ color: 'var(--text-muted)' }}>Captura de datos mediante cámara o lector para asegurar la trazabilidad del material utilizado en el paciente.</p>
          </div>
          <div className="glass-panel" style={{ padding: '3rem 2.5rem', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>Comunicación Ágil</h3>
            <p style={{ color: 'var(--text-muted)' }}>Chatbot clínico para reportar incidencias con proveedores o faltantes de stock de manera inmediata.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
