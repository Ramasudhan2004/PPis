/**
 * ============================================================================
 *  CENTRAL SITE CONTENT — SINGLE SOURCE OF TRUTH
 * ============================================================================
 *  All company-specific values live here. Values marked `[ ... ]` or listed in
 *  COMPANY_FACT_SLOTS below are PLACEHOLDERS pending verified client data —
 *  they are intentionally neutral and must be replaced before launch.
 *  Descriptive content for services, products and capabilities is taken from
 *  the approved brief.
 * ============================================================================
 */

export interface NavItem {
  label: string;
  to: string;
}

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Products", to: "/products" },
  { label: "Careers", to: "/careers" },
  { label: "Downloads", to: "/downloads" },
  { label: "Contact Us", to: "/contact" },
];

/** Fields below still awaiting verified client input. */
export const COMPANY_FACT_SLOTS = [
  "legalName",
  "registeredAddress",
  "phones",
  "emails",
  "whatsapp",
  "mapQuery",
  "leadership",
  "certifications",
  "statistics",
  "projectRecords",
] as const;

export const company = {
  name: "PPIS",
  legalName: "PPIS [Legal entity name]",
  logo: "/ppis-logo.png",
  tagline: "Powering Progress. Delivering Excellence.",
  heroTitle: "Powering the Future",
  description:
    "PPIS delivers end-to-end power infrastructure — from generation and high-voltage transmission to AIS/GIS substations, distribution networks, cables, products and EV charging solutions.",
  foundedNote:
    "Engineering power infrastructure for utilities, industry and communities. [Founding year to be confirmed]",
};

export const contact = {
  addressLines: [
    "PPIS Corporate Office",
    "[Street address]",
    "[City, State — PIN]",
    "India",
  ],
  phones: ["+91 [phone]", "+91 [phone]"],
  emails: ["info@[domain]", "projects@[domain]"],
  whatsapp: "+91 [whatsapp number]",
  hours: [
    { day: "Monday – Friday", time: "9:30 AM – 6:30 PM" },
    { day: "Saturday", time: "9:30 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  mapQuery: "PPIS Corporate Office India",
};

export const socials = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "X", href: "#", icon: "twitter" },
  { label: "YouTube", href: "#", icon: "youtube" },
];

export const heroScenes = [
  {
    id: "generation",
    label: "Generation",
    title: "Powering the Future",
    subtitle: "Where energy begins its journey.",
    range: [0, 0.2] as [number, number],
  },
  {
    id: "transmission",
    label: "Transmission",
    title: "Engineering Power Transmission",
    subtitle: "Connecting energy across distances.",
    range: [0.2, 0.4] as [number, number],
  },
  {
    id: "substations",
    label: "Substations",
    title: "Precision in Every Connection",
    subtitle: "Advanced AIS/GIS substations and electrical infrastructure.",
    range: [0.4, 0.6] as [number, number],
  },
  {
    id: "distribution",
    label: "Distribution",
    title: "Powering Industries and Communities",
    subtitle: "Reliable electrical distribution and engineered solutions.",
    range: [0.6, 0.8] as [number, number],
  },
  {
    id: "end-users",
    label: "End Users & EV",
    title: "Building Energy Together",
    subtitle: "Powering Progress. Delivering Excellence.",
    range: [0.8, 1] as [number, number],
  },
];

/** PLACEHOLDER metrics — replace with verified figures. */
export const stats = [
  { value: 250, suffix: "+", label: "Projects Delivered", sub: "Across utilities & industry" },
  { value: 1800, suffix: "+", label: "Circuit Kilometres", sub: "Cable laid & commissioned" },
  { value: 40, suffix: "+", label: "Substations", sub: "AIS & GIS executed" },
  { value: 15, suffix: " yrs", label: "Industry Experience", sub: "Power infrastructure" },
];

export const capabilities = [
  {
    icon: "Cable",
    title: "Underground Cable Systems",
    text: "Excavation, laying, jointing and termination of HT/EHT underground cable networks up to 220 kV.",
  },
  {
    icon: "Factory",
    title: "Substation Execution",
    text: "Turnkey AIS/GIS substations — civil, structural, primary and secondary systems integration.",
  },
  {
    icon: "Network",
    title: "Transmission & Distribution",
    text: "Overhead lines, covered conductors and last-mile distribution networks engineered for reliability.",
  },
  {
    icon: "PlugZap",
    title: "Testing & Commissioning",
    text: "Pre-commissioning checks, HV testing, protection settings, energisation and handover.",
  },
  {
    icon: "Gauge",
    title: "Energy Management & Metering",
    text: "Metering solutions, monitoring and energy management for efficient, measurable operations.",
  },
  {
    icon: "Blocks",
    title: "System Integration",
    text: "Integrated power equipment solutions combining products, control and protection into one system.",
  },
];

export const industries = [
  { icon: "Building2", label: "Utilities & DISCOMs" },
  { icon: "Factory", label: "Manufacturing" },
  { icon: "HardHat", label: "Infrastructure & EPC" },
  { icon: "Server", label: "Data Centres" },
  { icon: "Trees", label: "Renewable Energy" },
  { icon: "Train", label: "Railways & Metro" },
  { icon: "Droplets", label: "Water & Municipal" },
  { icon: "Hospital", label: "Healthcare Campuses" },
  { icon: "Plane", label: "Airports" },
  { icon: "Warehouse", label: "Logistics & Ports" },
  { icon: "GraduationCap", label: "Education Campuses" },
  { icon: "Car", label: "EV & Mobility" },
];

export const whyChoose = [
  {
    icon: "ShieldCheck",
    title: "Safety First, Always",
    text: "A zero-harm culture with disciplined permit-to-work, training and site governance on every project.",
  },
  {
    icon: "Layers",
    title: "Single-Point Delivery",
    text: "Design, supply, execution, testing and commissioning delivered by one accountable team.",
  },
  {
    icon: "BadgeCheck",
    title: "Quality & Compliance",
    text: "Work executed to IS/IEC standards with documented quality plans and inspection records.",
  },
  {
    icon: "Clock",
    title: "On-Time Energisation",
    text: "Milestone-driven planning, resource depth and proactive approvals to hold the schedule.",
  },
  {
    icon: "Wrench",
    title: "Engineering Depth",
    text: "In-house design, jointing crews and testing capability for complex EHT environments.",
  },
  {
    icon: "HeartHandshake",
    title: "Long-Term Partners",
    text: "OEM collaborations, O&M support and responsiveness that outlasts project handover.",
  },
];

export const values = [
  { title: "Integrity", text: "We do what we commit to, transparently and on the record." },
  { title: "Safety", text: "No commercial outcome justifies compromising people." },
  { title: "Precision", text: "Engineering detail is the difference between working and reliable." },
  { title: "Partnership", text: "We succeed when our clients' assets perform for decades." },
  { title: "Sustainability", text: "Efficient networks and clean mobility for the energy transition." },
  { title: "Ownership", text: "One accountable team from concept to commissioning." },
];

/** PLACEHOLDER partner names — replace with verified OEM/client list. */
export const partners = [
  "OEM Partner 01",
  "OEM Partner 02",
  "OEM Partner 03",
  "OEM Partner 04",
  "OEM Partner 05",
  "OEM Partner 06",
  "OEM Partner 07",
  "OEM Partner 08",
];

/** PLACEHOLDER leadership — replace with verified names, roles and bios. */
export const leadership = [
  {
    name: "[Founder / Managing Director]",
    role: "Founder & Managing Director",
    bio: "Sets the strategic direction for PPIS and leads client relationships across power infrastructure programmes. [Bio to be updated]",
    initials: "MD",
  },
  {
    name: "[Director — Projects]",
    role: "Director — Projects",
    bio: "Owns project delivery, construction planning and site execution governance. [Bio to be updated]",
    initials: "DP",
  },
  {
    name: "[Head — Engineering]",
    role: "Head — Engineering",
    bio: "Leads design, testing and commissioning standards across substations and cable systems. [Bio to be updated]",
    initials: "HE",
  },
  {
    name: "[Head — Quality & HSE]",
    role: "Head — Quality, Health, Safety & Environment",
    bio: "Maintains the quality management system and the company's zero-harm safety culture. [Bio to be updated]",
    initials: "QH",
  },
];

export const strengths = [
  "In-house design and engineering review",
  "Specialised EHT cable jointing crews",
  "Turnkey substation execution capability",
  "Documented quality and inspection plans",
  "Own HV testing and commissioning equipment",
  "Pan-India project mobilisation",
];

/** PLACEHOLDER certifications — replace with verified licence numbers. */
export const certifications = [
  { name: "ISO 9001 — Quality Management", detail: "[Certificate no. / validity]" },
  { name: "ISO 45001 — Occupational Health & Safety", detail: "[Certificate no. / validity]" },
  { name: "ISO 14001 — Environmental Management", detail: "[Certificate no. / validity]" },
  { name: "Electrical Contractor Licence", detail: "[Licence no. / class]" },
  { name: "GST & Statutory Registrations", detail: "[Registration details]" },
];

export const timeline = [
  {
    year: "[Year]",
    title: "Foundation",
    text: "PPIS is established to serve power distribution and electrical infrastructure needs.",
  },
  {
    year: "[Year]",
    title: "Cable Capability",
    text: "Developed specialised underground cable laying, jointing and termination capability.",
  },
  {
    year: "[Year]",
    title: "Substation Execution",
    text: "Expanded into turnkey AIS/GIS substation delivery across transmission and distribution.",
  },
  {
    year: "[Year]",
    title: "Products & Integration",
    text: "Added a product portfolio — covered conductors, joints, arresters, metering and EV charging.",
  },
  {
    year: "[Year]",
    title: "Today",
    text: "A single accountable partner for generation-to-end-user power infrastructure.",
  },
];

export const policyPages = {
  privacy: {
    title: "Privacy Policy",
    intro:
      "This policy explains how PPIS collects, uses and protects information submitted through this website.",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect the details you voluntarily provide through our enquiry and quotation forms — such as your name, company, email, phone number, project location and requirement description — together with basic technical information needed to operate the website.",
      },
      {
        heading: "How We Use Information",
        body: "Submitted information is used solely to respond to your enquiry, prepare a quotation, and maintain our business records. We do not sell your information.",
      },
      {
        heading: "Data Retention & Security",
        body: "Information is retained only as long as required for the purpose for which it was collected and is protected using reasonable technical and organisational safeguards.",
      },
      {
        heading: "Your Choices",
        body: "You may request access to, correction of, or deletion of the information you have submitted by contacting us using the details on our Contact page.",
      },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    intro:
      "By accessing this website you agree to the following terms. Please read them carefully.",
    sections: [
      {
        heading: "Use of Website",
        body: "The content on this website is provided for general information about PPIS and its services, products and projects. It does not constitute a contractual offer.",
      },
      {
        heading: "Quotations",
        body: "Any quotation issued by PPIS is subject to a separate written proposal, technical scope and commercial terms agreed with the client.",
      },
      {
        heading: "Intellectual Property",
        body: "All trademarks, logos and content on this website remain the property of their respective owners and may not be reproduced without permission.",
      },
      {
        heading: "Limitation of Liability",
        body: "PPIS makes reasonable efforts to keep information accurate but does not warrant that the website will be uninterrupted or error-free.",
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    intro:
      "This policy describes how and why cookies and similar technologies are used on this website.",
    sections: [
      {
        heading: "What Are Cookies",
        body: "Cookies are small text files stored on your device that help websites function and remember your preferences.",
      },
      {
        heading: "How We Use Cookies",
        body: "We use essential cookies required for the website to function, and preference cookies that remember choices such as your cookie-consent decision.",
      },
      {
        heading: "Managing Cookies",
        body: "You can control or delete cookies through your browser settings. Disabling essential cookies may affect how the website behaves.",
      },
    ],
  },
};

export const quotes = [
  {
    text: "PPIS executed our underground cable package with disciplined safety and on-time energisation. Their jointing crews are among the most capable we have worked with. [Placeholder testimonial]",
    author: "[Client Name]",
    role: "[Designation, Organisation]",
  },
  {
    text: "From design coordination to commissioning, the team stayed accountable and responsive throughout the substation build. [Placeholder testimonial]",
    author: "[Client Name]",
    role: "[Designation, Organisation]",
  },
  {
    text: "A dependable partner for distribution works — clear reporting, strong site governance and measured quality. [Placeholder testimonial]",
    author: "[Client Name]",
    role: "[Designation, Organisation]",
  },
];
