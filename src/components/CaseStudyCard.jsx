import React from "react";

export default function CaseStudyCard({ item }) {
  return (
    <div className="case-card" style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
      <h3>{item.title}</h3>
      <p><strong>Lawyer:</strong> {item.lawyer}</p>
      <p><strong>Practice:</strong> {item.practice}</p>
      <p>{item.summary}</p>
      {item.outcomes?.length > 0 && (
        <ul>
          {item.outcomes.map((o, idx) => <li key={idx}>{o}</li>)}
        </ul>
      )}
    </div>
  );
}
