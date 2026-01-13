import React from "react";

export default function CaseStudyBlock({ lawyer, practice, persona }) {
  return (
    <section className="case-study">
      <h3>Recent {practice} Case</h3>

      <p>
        A {persona.toUpperCase()} worked with {lawyer} on a {practice} matter.
        Compliance risk was resolved within 21 days.
      </p>

      <ul>
        <li>✔ Risk assessment</li>
        <li>✔ Strategy planning</li>
        <li>✔ Regulatory closure</li>
      </ul>
    </section>
  );
}
