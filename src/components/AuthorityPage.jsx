// import React from "react";

// import LawyerProfile from "./LawyerProfile";
// import ValuePillars from "./ValuePillars";
// import OutcomeBlock from "./OutcomeBlock";
// import CaseStudies from "./CaseStudies";

// export default function AuthorityPage({ site, lawyers, practices, value_map, outcomes, case_studies }) {
//   return (
//     <div className="mintsite authority">
//       <header className="hero">
//         <h1>{site.firm_name}</h1>
//         <p>Trusted expertise. Measurable global outcomes.</p>
//       </header>

//       <section>
//         <h2>Our Attorneys</h2>
//         <div className="lawyer-grid">
//           {lawyers.map(l => (
//             <LawyerProfile key={l.id} lawyer={l} />
//           ))}
//         </div>
//       </section>

//       <section>
//         <h2>Practice Areas</h2>
//         <ul>
//           {practices.map(p => (
//             <li key={p.id}>{p.name}</li>
//           ))}
//         </ul>
//       </section>

//       <ValuePillars pillars={value_map} />
//       <OutcomeBlock outcomes={outcomes} />
//       <CaseStudies items={case_studies} />

//       <footer className="cta">
//         <a href="/contact" className="button-primary">
//           Schedule a Consultation
//         </a>
//       </footer>
//     </div>
//   );
// }


// import React from "react";

// import LawyerProfile from "./LawyerProfile";
// import ValuePillars from "./ValuePillars";
// import OutcomeBlock from "./OutcomeBlock";
// import CaseStudies from "./CaseStudies";

// export default function AuthorityPage({ site, lawyers, practices, value_map, outcomes, case_studies }) {
//   return (
//     <div className="mintsite authority">
//       <header className="hero">
//         <h1>{site.firm_name}</h1>
//         <p>Trusted expertise. Measurable global outcomes.</p>
//       </header>

//       <section>
//         <h2>Our Attorneys</h2>
//         <div className="lawyer-grid">
//           {lawyers.map(l => <LawyerProfile key={l.id} lawyer={l} />)}
//         </div>
//       </section>

//       <section>
//         <h2>Practice Areas</h2>
//         <ul>
//           {practices.map(p => <li key={p.id}>{p.name}</li>)}
//         </ul>
//       </section>

//       <ValuePillars pillars={value_map} />
//       <OutcomeBlock outcomes={outcomes} />
//       <CaseStudies items={case_studies} />

//       <footer className="cta">
//         <a href="/contact" className="button-primary">Schedule a Consultation</a>
//       </footer>
//     </div>
//   );
// }


// src/components/AuthorityPage.jsx
import React from "react";
import LawyerProfile from "./LawyerProfile";
import ValuePillars from "./ValuePillars";
import OutcomeBlock from "./OutcomeBlock";
import CaseStudies from "./CaseStudies";

export default function AuthorityPage({ site, lawyers, practices, value_map, outcomes, case_studies }) {
  return (
    <div className="mintsite authority">
      <header className="hero">
        <h1>{site.firm_name}</h1>
        <p>Trusted expertise. Measurable global outcomes.</p>
      </header>
 <section style={{ marginBottom: "3rem" }}>
  <h2>Our Attorneys</h2>
  <div
    className="lawyer-grid"
    style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}
  >
    {lawyers.map((l) => (
      <div
        key={l.id}
        style={{
          border: "1px solid #ddd",
          padding: "1rem",
          borderRadius: "8px",
          width: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <LawyerProfile lawyer={l} />
        <a
          href={l.link}
          style={{
            marginTop: "1rem",
            textAlign: "center",
            display: "block",
            textDecoration: "none",
            color: "#0070f3",
            fontWeight: "bold",
          }}
        >
          View Profile
        </a>
      </div>
    ))}
  </div>
</section>




      <section style={{ marginBottom: "3rem" }}>
        <h2>Practice Areas</h2>
        <ul>
          {practices.map(p => <li key={p.id}>{p.name}</li>)}
        </ul>
      </section>

      <ValuePillars pillars={value_map} />
      <OutcomeBlock outcomes={outcomes} />
      <CaseStudies items={case_studies} />

      
    </div>
  );
}
