export interface Opening {
  id: string;
  role: string;
  department: string;
  location: string;
  type: "Full-time" | "Contract";
  experience: string;
  summary: string;
}

/** PLACEHOLDER openings — replace with the client's live vacancies. */
export const openings: Opening[] = [
  {
    id: "o-01",
    role: "Project Engineer — Substations",
    department: "Projects",
    location: "[Location]",
    type: "Full-time",
    experience: "4–8 years",
    summary:
      "Lead AIS/GIS substation execution from civil works through energisation, coordinating OEMs and site teams.",
  },
  {
    id: "o-02",
    role: "Cable Jointer — HT/EHT",
    department: "Execution",
    location: "[Location]",
    type: "Full-time",
    experience: "5+ years",
    summary:
      "Execute XLPE jointing and terminations up to 220 kV to OEM procedure with full test documentation.",
  },
  {
    id: "o-03",
    role: "Design Engineer — Electrical",
    department: "Engineering",
    location: "[Location]",
    type: "Full-time",
    experience: "3–6 years",
    summary:
      "Prepare layouts, schematics and calculations for substations, cable systems and distribution networks.",
  },
  {
    id: "o-04",
    role: "HSE Officer",
    department: "Quality & HSE",
    location: "[Location]",
    type: "Full-time",
    experience: "3+ years",
    summary:
      "Drive permit-to-work discipline, toolbox talks, inspections and incident reporting across project sites.",
  },
  {
    id: "o-05",
    role: "Testing & Commissioning Engineer",
    department: "Commissioning",
    location: "[Location]",
    type: "Full-time",
    experience: "4+ years",
    summary:
      "Perform HV testing, relay configuration and staged energisation with traceable test reporting.",
  },
  {
    id: "o-06",
    role: "Procurement & Vendor Development",
    department: "Commercial",
    location: "[Location]",
    type: "Full-time",
    experience: "3–7 years",
    summary:
      "Source power equipment and materials, evaluate vendors and manage supply schedules to project milestones.",
  },
];

export const benefits = [
  { icon: "ShieldCheck", title: "Safety-First Culture", text: "Structured training and a genuine zero-harm commitment." },
  { icon: "TrendingUp", title: "Real Career Growth", text: "Clear progression across engineering and execution tracks." },
  { icon: "GraduationCap", title: "Learning Support", text: "Technical upskilling and certification sponsorship." },
  { icon: "HeartPulse", title: "Health Cover", text: "Medical cover for employees and dependants." },
  { icon: "Wallet", title: "Performance Rewards", text: "Project-linked incentives for delivery excellence." },
  { icon: "Users", title: "Strong Teams", text: "Work with experienced engineers on demanding projects." },
];

export const culturePillars = [
  { title: "Ownership", text: "Every team member owns their scope end to end." },
  { title: "Craft", text: "We take pride in workmanship that survives inspection." },
  { title: "Respect", text: "Site teams and office teams are one crew." },
  { title: "Curiosity", text: "We improve methods instead of repeating them." },
];

export const hiringProcess = [
  { step: "01", title: "Application", text: "Submit your resume against a listed opening or as a general application." },
  { step: "02", title: "Screening", text: "Our HR and technical team review your profile against the role." },
  { step: "03", title: "Technical Interview", text: "Discussion of your engineering and execution experience." },
  { step: "04", title: "Offer", text: "We share a formal offer and onboarding plan." },
];
