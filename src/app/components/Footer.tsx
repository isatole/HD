export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      padding: '4rem 0 2rem 0',
      marginTop: '4rem'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '24px',
              height: '24px',
              background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
              borderRadius: '6px',
            }}></div>
            Hospital Digital
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
            La plataforma inteligente que une a proveedores, hospitales, clínicas y personal clínico para transparentar procesos y eliminar la deuda oculta hospitalaria en Chile.
          </p>
        </div>
        
        <div>
          <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Soluciones</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><a href="/proveedores" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Proveedores</a></li>
            <li><a href="/hospitales" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Hospitales</a></li>
            <li><a href="/clinicas" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Clínicas</a></li>
            <li><a href="/enfermeras" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Enfermeras</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Plataforma</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>ODOH Tracker</a></li>
            <li><a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Ley 21.131</a></li>
            <li><a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Scoring Institucional</a></li>
            <li><a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Integraciones</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Contacto</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>contacto@hospital-digital.com</span></li>
            <li><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>+56 9 1234 5678</span></li>
            <li><span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Santiago, Chile</span></li>
          </ul>
        </div>
      </div>
      
      <div className="container" style={{
        borderTop: '1px solid var(--border-color)',
        paddingTop: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} Hospital Digital. Todos los derechos reservados.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Privacidad</a>
          <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Términos</a>
        </div>
      </div>
    </footer>
  );
}
