export interface DownloadItem {
  id: string;
  title: string;
  description: string;
  file: string;
  type: string;
  size: string;
  category: "Company" | "Policies" | "Technical" | "Commercial";
}

/**
 * Documents are served from /public/downloads. Until the client supplies the
 * approved files these contain a clearly-marked placeholder cover page so the
 * download flow is fully functional.
 */
export const downloads: DownloadItem[] = [
  {
    id: "company-profile",
    title: "Company Profile",
    description: "Who PPIS is, what we build and how we deliver power infrastructure.",
    file: "/downloads/company-profile.pdf",
    type: "PDF",
    size: "≈ 1.2 MB",
    category: "Company",
  },
  {
    id: "capability-statement",
    title: "Capability Statement",
    description: "Engineering, execution and commissioning capabilities across voltage classes.",
    file: "/downloads/capability-statement.pdf",
    type: "PDF",
    size: "≈ 0.9 MB",
    category: "Company",
  },
  {
    id: "project-experience",
    title: "Project Experience",
    description: "Representative project record across substations, cables and distribution.",
    file: "/downloads/project-experience.pdf",
    type: "PDF",
    size: "≈ 1.4 MB",
    category: "Company",
  },
  {
    id: "certifications",
    title: "Certifications & Licences",
    description: "Certification summary and statutory registrations.",
    file: "/downloads/certifications.pdf",
    type: "PDF",
    size: "≈ 0.6 MB",
    category: "Policies",
  },
  {
    id: "hse-policy",
    title: "HSE Policy",
    description: "Health, Safety and Environment policy and site governance commitments.",
    file: "/downloads/hse-policy.pdf",
    type: "PDF",
    size: "≈ 0.5 MB",
    category: "Policies",
  },
  {
    id: "quality-policy",
    title: "Quality Policy",
    description: "Quality management approach, inspection plans and documentation standards.",
    file: "/downloads/quality-policy.pdf",
    type: "PDF",
    size: "≈ 0.5 MB",
    category: "Policies",
  },
  {
    id: "technical-documents",
    title: "Technical Documents",
    description: "Technical data sheets and installation guidance for core products.",
    file: "/downloads/technical-documents.pdf",
    type: "PDF",
    size: "≈ 2.1 MB",
    category: "Technical",
  },
  {
    id: "brochures",
    title: "Product Brochures",
    description: "Category brochures for conductors, joints, arresters, cables and EV chargers.",
    file: "/downloads/brochures.pdf",
    type: "PDF",
    size: "≈ 2.6 MB",
    category: "Technical",
  },
  {
    id: "vendor-registration",
    title: "Vendor Registration Documents",
    description: "Registration checklist and document pack for vendor onboarding.",
    file: "/downloads/vendor-registration.pdf",
    type: "PDF",
    size: "≈ 0.7 MB",
    category: "Commercial",
  },
];

export const downloadCategories = ["Company", "Policies", "Technical", "Commercial"] as const;
