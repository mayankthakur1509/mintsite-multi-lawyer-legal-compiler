import React from "react";

export default function ValuePillars({ pillars }) {
  if (!pillars?.length) return null;

  return (
    <section style={{ marginBottom: '2rem' }}>
      <h2>Value Pillars</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {pillars.map((p, idx) => (
          <div key={idx} style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', minWidth: '200px' }}>
            <h3>{p.pillar}</h3>
            <ul>
              {p.signals.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
