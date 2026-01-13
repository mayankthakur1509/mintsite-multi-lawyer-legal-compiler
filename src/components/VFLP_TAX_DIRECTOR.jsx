// import React from "react";
// import ValuePillars from "./ValuePillars";
// import OutcomeBlock from "./OutcomeBlock";
// import CaseStudies from "./CaseStudies";
// export default function VFLP_TAX_DIRECTOR({ persona, lawyer, practice, model }) {
//   return (
//     <div className="mintsite">
//       <section className="hero">
//         <h1>{practice.name} — Tax Director View</h1>
//         <p>Technical accuracy, cross-border alignment, audit certainty.</p>
//       </section>

//       <ValuePillars pillars={model.value_map} />
//       <OutcomeBlock outcomes={model.outcomes} />
//       <CaseStudies items={model.case_studies} persona="tax_director" />
//       <CTA />
//     </div>
//   );
// }


import React from "react";
import VFLP_Template from "./VFLP_Template";
export default function VFLP_TAX_DIRECTOR(props) { return <VFLP_Template {...props} />; }