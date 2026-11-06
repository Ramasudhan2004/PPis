import { img } from "@/lib/image";

export interface Project {
  id: string;
  title: string;
  client: string;
  state: string;
  region: "North" | "South" | "East" | "West" | "Central" | "North East";
  category: string;
  status: "Ongoing" | "Completed";
  year: string;
  scope: string;
  capacity: string;
  description: string;
  image: string;
  featured?: boolean;
}

/**
 * PLACEHOLDER project records — structure is final, values await verified
 * project data from the client. Keep `state` accurate when replacing so the
 * geographic presence view stays correct.
 */
export const projects: Project[] = [
  {
    id: "p-01",
    title: "33 kV Underground Cable Package",
    client: "[Client name]",
    state: "Maharashtra",
    region: "West",
    category: "Underground Cable Laying",
    status: "Completed",
    year: "[Year]",
    scope: "Supply, laying, jointing & commissioning",
    capacity: "[Route length] km",
    description:
      "Turnkey underground cable package including trenching, ducting, cable pulling, jointing and energisation across a live industrial corridor.",
    image: img("underground cable trench with armoured cables, bright clean industrial site"),
    featured: true,
  },
  {
    id: "p-02",
    title: "132 kV AIS Substation Execution",
    client: "[Client name]",
    state: "Gujarat",
    region: "West",
    category: "AIS/GIS Substations",
    status: "Completed",
    year: "[Year]",
    scope: "Civil + primary + secondary + commissioning",
    capacity: "[MVA] / [kV]",
    description:
      "Complete air-insulated substation delivered as a single scope — foundations, structures, primary equipment, control & protection and energisation.",
    image: img("bright clean 132kv air insulated substation with silver structures and blue sky"),
    featured: true,
  },
  {
    id: "p-03",
    title: "Urban Distribution Augmentation",
    client: "[Client name]",
    state: "Karnataka",
    region: "South",
    category: "Transmission and Distribution Networks",
    status: "Ongoing",
    year: "[Year]",
    scope: "Network augmentation & feeder separation",
    capacity: "[Feeders]",
    description:
      "Distribution augmentation programme including pole erection, conductor stringing, distribution transformers and earthing.",
    image: img("clean urban electricity distribution network, bright daylight, city street"),
  },
  {
    id: "p-04",
    title: "Covered Conductor Conversion — Coastal Feeder",
    client: "[Client name]",
    state: "Tamil Nadu",
    region: "South",
    category: "Covered Conductors",
    status: "Completed",
    year: "[Year]",
    scope: "Bare to covered conductor conversion",
    capacity: "[Route length] km",
    description:
      "Conversion of a fault-prone coastal feeder to covered conductor with complete accessory sets to reduce outages.",
    image: img("overhead covered conductor lines along a coastal clean road, bright sky"),
  },
  {
    id: "p-05",
    title: "GIS Substation — Compact Urban Site",
    client: "[Client name]",
    state: "Delhi",
    region: "North",
    category: "AIS/GIS Substations",
    status: "Completed",
    year: "[Year]",
    scope: "Indoor GIS, protection & SAS",
    capacity: "[MVA] / [kV]",
    description:
      "Space-constrained indoor gas-insulated substation with SCADA integration, delivered in a dense urban environment.",
    image: img("indoor gas insulated switchgear hall, bright white clean, blue lighting"),
    featured: true,
  },
  {
    id: "p-06",
    title: "EHV Cable Jointing & Terminations",
    client: "[Client name]",
    state: "Telangana",
    region: "South",
    category: "Cable Jointing and Terminations",
    status: "Completed",
    year: "[Year]",
    scope: "EHV jointing, terminations & HV testing",
    capacity: "[Joints] joints",
    description:
      "EHV cable jointing and termination scope executed under controlled conditions with full HV test documentation.",
    image: img("ehv cable jointing bay with protective tent, bright clean industrial site"),
  },
  {
    id: "p-07",
    title: "Industrial Captive Substation",
    client: "[Client name]",
    state: "Chhattisgarh",
    region: "Central",
    category: "AIS/GIS Substations",
    status: "Ongoing",
    year: "[Year]",
    scope: "Captive substation + LT distribution",
    capacity: "[MVA]",
    description:
      "Captive substation and LT distribution package for a heavy manufacturing plant, including protection and metering.",
    image: img("industrial captive substation with transformers, bright clean daylight"),
  },
  {
    id: "p-08",
    title: "Metro Power Corridor — Cable Works",
    client: "[Client name]",
    state: "West Bengal",
    region: "East",
    category: "Underground Cable Laying",
    status: "Completed",
    year: "[Year]",
    scope: "Cable laying in live urban corridor",
    capacity: "[Route length] km",
    description:
      "Cable laying through a live urban transport corridor with traffic management, night working and staged reinstatement.",
    image: img("urban cable laying works at night with clean bright lighting, city street"),
  },
  {
    id: "p-09",
    title: "Renewable Evacuation Substation",
    client: "[Client name]",
    state: "Rajasthan",
    region: "North",
    category: "AIS/GIS Substations",
    status: "Ongoing",
    year: "[Year]",
    scope: "Evacuation substation + bay extension",
    capacity: "[MVA] / [kV]",
    description:
      "Evacuation substation and bay extension works supporting renewable generation integration into the grid.",
    image: img("solar farm with substation in the background, bright clean daylight"),
  },
  {
    id: "p-10",
    title: "Testing & Commissioning — Multiple Bays",
    client: "[Client name]",
    state: "Odisha",
    region: "East",
    category: "Testing and Commissioning",
    status: "Completed",
    year: "[Year]",
    scope: "Pre-commissioning, HV testing, energisation",
    capacity: "[Bays] bays",
    description:
      "Testing and commissioning of multiple bays including HV withstand, protection configuration and staged energisation.",
    image: img("testing engineer with hv test equipment in bright clean substation"),
  },
  {
    id: "p-11",
    title: "EV Charging Hub — Commercial Campus",
    client: "[Client name]",
    state: "Haryana",
    region: "North",
    category: "System Integration Solutions",
    status: "Completed",
    year: "[Year]",
    scope: "DC chargers + LT infrastructure + integration",
    capacity: "[Guns] chargers",
    description:
      "Deployment of DC fast charging infrastructure with LT distribution, protection and network integration.",
    image: img("modern ev charging hub with white dc chargers, bright clean plaza"),
  },
  {
    id: "p-12",
    title: "PMU Augmentation Programme",
    client: "[Client name]",
    state: "Assam",
    region: "North East",
    category: "Project Management Consultancy",
    status: "Ongoing",
    year: "[Year]",
    scope: "Owner's engineer / PMC",
    capacity: "[Scope]",
    description:
      "Owner's-side PMC covering planning, procurement support, quality assurance and commissioning governance.",
    image: img("project management office with engineers and drawings, bright clean"),
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectStates = Array.from(new Set(projects.map((p) => p.state)));

export const regionSummary = (
  ["North", "South", "East", "West", "Central", "North East"] as const
).map((region) => ({
  region,
  count: projects.filter((p) => p.region === region).length,
  states: Array.from(
    new Set(projects.filter((p) => p.region === region).map((p) => p.state)),
  ),
}));
