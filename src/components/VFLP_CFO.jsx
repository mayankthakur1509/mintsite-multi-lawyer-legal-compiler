// import React from "react";
// import ValuePillars from "./ValuePillars";
// import OutcomeBlock from "./OutcomeBlock";
// import CTA from "./CTA";

// import CaseStudies from "./CaseStudies";
// export default function VFLP_CFO({ persona, lawyer, practice, model }) {
//   return (
//     <div className="mintsite">
//       <section className="hero">
//         <h1>{practice.name} — CFO View</h1>
//         <p>Financial clarity, compliance, risk mitigation.</p>
//       </section>

//       <ValuePillars pillars={model.value_map} />
//       <OutcomeBlock outcomes={model.outcomes} />
//       {/* <Differentiators items={model.value_map} /> */}
//       <CaseStudies items={model.case_studies} persona="cfo" />

//       <CTA />
//     </div>
//   );
// }

// import MintForm from "./MintForm";
// import React from "react";

// export default function VFLP_CFO({
//   persona,
//   lawyer,
//   practice,
//   model,
//   __mintAction
// }) {
//   return (
//     <div className="mintsite">
//       <h1>{practice.name} — CFO View</h1>

//       {/* content */}

//       {/* ✅ FORM-FREE LOGIC */}
//       {__mintAction === "CONTACT_FORM" && (
//         <MintForm
//           lawyer={lawyer.id}
//           practice={practice.id}
//           persona={persona.id}
//         />
//       )}
//     </div>
//   );
// }



// import MintForm from "./MintForm";
// import React from "react";
// import CaseStudyBlock from "./CaseStudyBlock";


// export default function VFLP_CFO({
//   persona,
//   lawyer,
//   practice,
//   model,
//   __mintAction
// }) {
//   return (
//     <div className="mintsite">
//       <h1>{practice.name} — CFO View</h1>

//       {/* MAIN CONTENT */}

//       {/* 🔵 HIGH INTENT: TRUST */}
//       {__mintAction === "SHOW_CASE_STUDY" && (
//         <CaseStudyBlock
//           lawyer={lawyer.name}
//           practice={practice.name}
//           persona={persona.id}
//         />
//     )}
//       {/* 🔴 DECISION: CONTACT */}
//       {__mintAction === "CONTACT_FORM" && (
//         <MintForm
//           lawyer={lawyer.id}
//           practice={practice.id}
//           persona={persona.id}
//         />
//       )}
//     </div>
//   );
// }




// mintsite_enterprise_full_zip_real/src/components/VFLP_CFO.jsx
// import React from "react";
// import MintForm from "./MintForm";

// export default function VFLP_CFO({
//   lawyer,
//   practice,
//   site,
//   outcomes,
//   case_studies,
//   __mintAction
// }) {
//   return (
//     <div className="mintsite vflp">
//       <header>
//         <h1>{practice.name} — CFO Advisory</h1>
//         <p>
//           Strategic tax leadership for CFOs managing cross-border exposure.
//         </p>
//       </header>

//       <section>
//         <h2>What CFOs Care About</h2>
//         <ul>
//           <li>✔ Audit risk reduction</li>
//           <li>✔ Predictable tax exposure</li>
//           <li>✔ Executive compliance</li>
//         </ul>
//       </section>

//       <section>
//         <h2>Measured Outcomes</h2>
//         <ul>
//           {outcomes.map(o => (
//             <li key={o.id}>📈 {o.text}</li>
//           ))}
//         </ul>
//       </section>

//       <section>
//         <h2>Relevant Case Study</h2>
//         {case_studies.map(c => (
//           <article key={c.id}>
//             <h3>{c.headline}</h3>
//             <p>{c.summary}</p>
//           </article>
//         ))}
//       </section>

//       {/* FORM-FREE → CONDITIONAL FORM */}
//       {__mintAction === "CONTACT_FORM" && (
//         <section className="contact-form">
//           <h2>Speak With {lawyer.name}</h2>
//           <form method="POST" action="/__mint_outcome">
//             <input type="hidden" name="outcome" value="form_submitted" />

//             <input name="name" placeholder="Your name" />
//             <input name="email" placeholder="Work email" />

//             <button type="submit">
//               Request CFO Consultation
//             </button>
//           </form>
//         </section>
//       )}
//     </div>
//   );
// }


import React from "react";

import VFLP_Template from "./VFLP_Template";

export default function VFLP_CFO(props) {
  return <VFLP_Template {...props} />;
}
