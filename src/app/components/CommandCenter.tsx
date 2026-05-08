"use client";

import { useState, useEffect } from 'react';

export default function CommandCenter() {
  const [detectedDebt, setDetectedDebt] = useState(12450890);
  const [anomalies, setAnomalies] = useState<string[]>([]);
  const hospitals = ["Hosp. San Borja", "Clínica Las Condes", "Hosp. Barros Luco", "Red Salud UC", "Hosp. Salvador"];

  useEffect(() => {
    const interval = setInterval(() => {
      setDetectedDebt(prev => prev + Math.floor(Math.random() * 5000));
      const newAnomaly = `${hospitals[Math.floor(Math.random() * hospitals.length)]} - OC_${Math.floor(Math.random() * 9999)} RECHAZADA`;
      setAnomalies(prev => [newAnomaly, ...prev].slice(0, 5));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel" style={{
      padding: '3rem',
      marginTop: '4rem',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid rgba(0, 240, 255, 0.3)',
      boxShadow: '0 0 50px rgba(0, 240, 255, 0.1)'
    }}>
      {/* Scanning Line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(to right, transparent, var(--cyber-cyan), transparent)',
        animation: 'scan 4s linear infinite',
        zIndex: 10
      }} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
            <div className="data-node" style={{ background: 'var(--cyber-cyan)' }}></div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', color: 'var(--cyber-cyan)' }}>AI_LIVE_DETECTION</span>
          </div>
          <h2 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
            ${detectedDebt.toLocaleString()}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Deuda Oculta Detectada en Tiempo Real (Ecosistema Chile)</p>
          
          <div style={{ marginTop: '2.5rem' }}>
             <button className="btn-primary" style={{ width: '100%' }}>Acceder al Centro de Mando</button>
          </div>
        </div>

        <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
           <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
             <span>ÚLTIMAS ANOMALÍAS</span>
             <span className="pulse" style={{ color: 'var(--danger-color)' }}>● LIVE</span>
           </h4>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
             {anomalies.map((anomaly, i) => (
               <div key={i} style={{ 
                 fontSize: '0.8rem', 
                 fontFamily: 'monospace', 
                 color: 'var(--cyber-cyan)',
                 padding: '0.5rem',
                 borderLeft: '2px solid var(--cyber-cyan)',
                 background: 'rgba(0, 240, 255, 0.05)',
                 animation: 'fadeIn 0.5s ease-out'
               }}>
                 {`> [${new Date().toLocaleTimeString()}] ALERT: ${anomaly}`}
               </div>
             ))}
             {anomalies.length === 0 && <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Sincronizando con nodos regionales...</div>}
           </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .pulse {
          animation: pulseOpacity 1s infinite;
        }
        @keyframes pulseOpacity {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
