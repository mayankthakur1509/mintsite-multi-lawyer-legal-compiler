import React from "react";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudies({ items, persona }) {
  const filtered = persona 
    ? items.filter(i => i.persona === persona) 
    : items; // show all if persona not provided

  if (!filtered.length) return null;

  return (
    <section>
      <h2>Case Studies</h2>
      <div className="case-grid">
        {filtered.map(i => <CaseStudyCard key={i.id} item={i} />)}
      </div>
    </section>
  );
}
