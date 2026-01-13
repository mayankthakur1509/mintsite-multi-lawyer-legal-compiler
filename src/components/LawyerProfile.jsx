// import React from "react";

// export default function LawyerProfile({ lawyer }) {
//   return (
//     <article>
//       <h3>{lawyer.name}</h3>
//       <p>{lawyer.title}</p>
//       <p>{lawyer.bio}</p>
//     </article>
//   );
// }

// src/components/LawyerProfile.jsx


import React from "react";

export default function LawyerProfile({ lawyer }) {
  return (
    <article className="lawyer-profile" style={{ marginBottom: '2rem', border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
      <h3>{lawyer.name}</h3>
      <p><em>{lawyer.title}</em></p>
      <p>{lawyer.bio}</p>

      {lawyer.practices && lawyer.practices.length > 0 && (
        <div>
          <strong>Practice Areas:</strong>
          <ul>
            {lawyer.practices.map((p, idx) => (
              <li key={idx}>
                <a href={`/lawyers/${lawyer.id}/${p}`} style={{ color: '#0070f3', textDecoration: 'underline' }}>
                  {p.replace(/-/g, ' ')}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
        <a href={`/lawyers/${lawyer.id}`} className="button-secondary">View Profile</a>
      </div> */}
    </article>
  );
}
