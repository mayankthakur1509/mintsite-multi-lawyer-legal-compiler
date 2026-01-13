// import { useEffect, useState } from "react";
// import MintForm from "./MintForm";
// import React from "react";

// export default function PracticePage({ lawyer, practice, model }) {
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     // Prevent re-show after submission
//     if (window.__mintTerminal) return;

//     // Read action from response header (SSR-safe)
//     const action = document
//       .querySelector("meta[name='mint-action']")
//       ?.content;

//     if (action === "CONTACT_FORM") {
//       setShowForm(true);
//     }
//   }, []);

//   return (
//     <div className="mintsite">
//       {/* page content */}
//       <h1>{practice.name}</h1>

//       {/* ✅ ONLY PLACE WHERE FORM CAN APPEAR */}
//       {showForm && (
//         <MintForm
//           lawyer={lawyer.id}
//           practice={practice.id}
//           persona={null}
//         />
//       )}
//     </div>
//   );
// }


// mintsite_enterprise_full_zip_real/src/components/PracticePage.jsx
// mintsite_enterprise_full_zip_real/src/components/PracticePage.jsx
// src/components/PracticePage.jsx
import React from "react";
import CaseStudyBlock from "./CaseStudyBlock";

export default function PracticePage({ practice, lawyers = [], personas = [] }) {
  console.log("lawyers",lawyers)
  if (!practice) return <div className="mintsite practice">Practice not found.</div>;

  return (
    <div className="mintsite practice">
      {/* Header */}
      <header className="practice-header" style={{ marginBottom: "2rem" }}>
        <h1>{practice.name}</h1>
        <p>{practice.description}</p>
      </header>

      {/* How We Help */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>How We Help</h2>
        <ul>
          {practice.benefits?.map((b, idx) => (
            <li key={idx}>✔ {b}</li>
          ))}
        </ul>
      </section>

      {/* Sample Services */}
      {practice.sample_services?.length > 0 && (
        <section style={{ marginBottom: "2rem" }}>
          <h2>Sample Services</h2>
          <ul>
            {practice.sample_services.map((s, idx) => (
              <li key={idx}>✔ {s}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Attorneys */}
      {lawyers.length > 0 && (
        <section style={{ marginBottom: "3rem" }}>
          <h2>Attorneys in This Practice</h2>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {lawyers.map(l => (
              <div key={l.id} style={{
                border: '1px solid #ddd',
                padding: '1rem',
                borderRadius: '8px',
                width: '250px'
              }}>
                <h3>{l.name}</h3>
                <p>{l.title}</p>
                <p>{l.bio}</p>
                <p><strong>Practice Areas:</strong> {l.practices?.join(", ")}</p>
                <a href={`/lawyers/${l.id}`} style={{ color: '#0070f3', textDecoration: 'underline' }}>
                  View Profile
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Advisory Views (VFLP Personas) */}
      {personas.length > 0 && (
        <section style={{ marginBottom: "3rem" }}>
      <h2>Advisory Views</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {personas.map(p => (
          <a
            key={p.id}
            href={`/lawyers/${lawyers[0].id}/${practice.id}/vflp/${p.id}`}
            className="button-secondary"
          >
            {p.id.toUpperCase()} Advisory View
          </a>
        ))}
      </div>
    </section>
      )}

      {/* Case Study */}
      {lawyers.length > 0 && (
        <CaseStudyBlock
          lawyer={lawyers[0].name}
          practice={practice.name}
          persona="executive"
        />
      )}
    </div>
  );
}
