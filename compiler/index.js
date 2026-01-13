// MintSite Compiler v4.0.2
import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export function loadYAML(dir) {
  const out = {};
  fs.readdirSync(dir).forEach(f => {
    if (f.endsWith(".yaml")) {
      out[f.replace(".yaml", "")] = yaml.load(
        fs.readFileSync(path.join(dir, f), "utf8")
      );
    }
  });
  return out;
}

// export function buildSemanticModel(y) {
//   return {
//     site: y.site,
//     lawyers: y.lawyers || [],
//     practices: y.practice_areas || [],
//     value_map: y.value_map || [],
//     outcomes: y.outcomes || [],
//     case_studies: y.case_studies || []
//   };
// }

export function buildSemanticModel(y) {
  const lawyers = (y.lawyers?.lawyers || []).map(l => ({
    ...l,
    link: `/lawyers/${l.id}` // <-- add this
  }));

  return {
    site: y.site?.site || {},
    // lawyers: y.lawyers?.lawyers || [],
    lawyers,
    practices: y.practice_areas?.practice_areas || [],
    value_map: y.value_map?.value_map || [],
    outcomes: y.outcomes?.outcomes || [],
    case_studies: y.case_studies?.case_studies || []
  };
}


// export function generatePages(model) {
//   const pages = [], routes = [];
//   pages.push({ route: "/", component: "AuthorityPage", props: model });
//   model.lawyers.forEach(l => {
//     const base = `/lawyers/${l.id}`;
//     pages.push({ route: base, component: "LawyerProfile", props: { lawyer: l, model } });
//     routes.push(base);
//     l.practices?.forEach(pr => {
//       const p = model.practices.find(x => x.id === pr);
//       if (!p) return;
//       const pracRt = `${base}/${p.id}`;
//       // Collect all lawyers for this practice


//       pages.push({ route: pracRt, component: "PracticePage", props: { lawyer: l, practice: p, model } });
//       routes.push(pracRt);
//       (model.site.personas || []).forEach(ps => {
//         const r = `${pracRt}/vflp/${ps.id}`;
//         pages.push({ route: r, component: `VFLP_${ps.id.toUpperCase()}`, props: { persona: ps, lawyer: l, practice: p, model } });
//         // Use:
//         // pages.push({
//         //   route: r,
//         //   component: "VFLP_Template",
//         //   props: { persona: ps, lawyer: l, practice: p, model }
//         // });

//         routes.push(r);
//       });
//     });
//   });
//   return { pages, routes };
// }


export function generatePages(model) {
  const pages = [];
  const routes = [];

  // -------------------------------
  // Firm Root Pages
  // -------------------------------
  pages.push({
    route: "/",
    component: "AuthorityPage",
    props: model
  });
  routes.push("/");

  // -------------------------------
  // Lawyer Pages
  // -------------------------------
  model.lawyers.forEach(lawyer => {
    const base = `/lawyers/${lawyer.id}`;

    pages.push({
      route: base,
      component: "LawyerProfile",
      props: { lawyer, model }
    });

    routes.push(base);

    // Lawyer Practice Pages
    lawyer.practices?.forEach(pr => {
      const practice = model.practices.find(p => p.id === pr);
      if (!practice) return;

      const pracRoute = `${base}/${practice.id}`;

      // Collect all lawyers for this practice
      const practiceLawyers = model.lawyers.filter(l => l.practices?.includes(pr));

      // Collect all personas
      const personas = model.site.personas || [];

      pages.push({
        route: pracRoute,
        component: "PracticePage",
        props: { practice, lawyers: practiceLawyers, personas }
      });

      routes.push(pracRoute);

      // Persona VFLPs per practice
      personas.forEach(persona => {
        const pRoute = `${pracRoute}/vflp/${persona.id}`;
        // pages.push({
        //   route: pRoute,
        //   component: `VFLP_${persona.id.toUpperCase()}`,
        //   props: { persona, lawyer, practice, model }
        // });

        pages.push({
          route: pRoute,
          component: "VFLP_Template",
          props: { persona: persona, lawyer: lawyer, practice: practice, model }
        });

        routes.push(pRoute);
      });
    });


  });

  return { pages, routes };
}


export function compile(dir) {
  const y = loadYAML(dir);
  const model = buildSemanticModel(y);
  const { pages, routes } = generatePages(model);
  return { model, pages, routes, timestamp: new Date().toISOString() };
}



// -------------------------------
// FORCE CLI EXECUTION (DEBUG SAFE)
// -------------------------------

const YAML_DIR = path.resolve("./yaml");
const DIST_FILE = path.resolve("./dist/manifest.json");

try {
  const files = fs.readdirSync(YAML_DIR);
} catch (e) {
  console.error("Error reading YAML folder:", e.message);
}


const out = compile(YAML_DIR);

console.log("🧠 Lawyers:", out.model.lawyers.length);
console.log("🧠 Practices:", out.model.practices.length);
console.log("🧠 Personas:", out.model.site.personas?.length || 0);

const DIST_DIR = path.dirname(DIST_FILE);

if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR, { recursive: true });
}

fs.writeFileSync(
  DIST_FILE,
  JSON.stringify(
    {
      pages: out.pages,
      routes: out.routes,
      timestamp: out.timestamp
    },
    null,
    2
  )
);

// console.log("✅ Manifest generated with", out.pages.length, "pages");
// console.log("📄 Output:", DIST_FILE);