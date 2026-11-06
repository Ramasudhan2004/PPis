import {
  Cable,
  Zap,
  Factory,
  Network,
  ClipboardCheck,
  Gauge,
  type LucideIcon,
} from "lucide-react";
import { img } from "@/lib/image";

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  summary: string;
  description: string[];
  technical: { label: string; value: string }[];
  capabilities: string[];
  applications: string[];
  equipment: string[];
  image: string;
  gallery: string[];
}

export const services: Service[] = [
  {
    slug: "underground-cable-laying",
    title: "Underground Cable Laying",
    shortTitle: "Cable Laying",
    icon: Cable,
    summary:
      "Engineered excavation, ducting and laying of HT/EHT underground cable circuits with full route survey and reinstatement.",
    description: [
      "Underground cable networks demand precise route engineering, disciplined excavation and controlled handling of heavy cable drums. PPIS plans and executes the complete laying scope — route survey, trial pits, trenching, duct banks, sand bedding, cable pulling, protection tiles and reinstatement.",
      "Work is executed to IS/IEC practice with documented jointing bays, pulling tension records and as-laid drawings. Our crews operate in live utility corridors, industrial plants and dense urban environments where permits, traffic management and stakeholder coordination are as important as the engineering itself.",
    ],
    technical: [
      { label: "Voltage Class", value: "Up to 220 kV (EHV)" },
      { label: "Cable Types", value: "XLPE, PILC, HT/LT armoured" },
      { label: "Laying Methods", value: "Direct buried, ducted, trench + HDD crossings" },
      { label: "Documentation", value: "As-laid drawings, tension & IR records" },
    ],
    capabilities: [
      "Route survey, profiling and trial pits",
      "Trenching, duct banks and HDD road crossings",
      "Cable drum handling, pulling and side-wall pressure control",
      "Sand bedding, protection tiles and warning tape",
      "Joint bay construction and reinstatement",
    ],
    applications: [
      "Urban distribution upgrades",
      "Industrial plant power feeds",
      "Airport and metro power corridors",
      "Renewable energy evacuation",
    ],
    equipment: [
      "Hydraulic cable pullers & tension meters",
      "Excavators, trenchers and HDD rigs",
      "Cable rollers, guides and winches",
      "Drum trailers and lifting gear",
    ],
    image: img(
      "underwater tunnel with large power cables laid in trays, bright white and ice blue lighting, clean industrial photography, no text",
    ),
    gallery: [
      img("industrial cable trench under construction, white concrete, blue light, clean photography"),
      img("workers installing heavy armoured power cable in a duct, bright clean industrial site"),
      img("cable joint bay with protective tiles and warning tape, bright daylight, clean"),
    ],
  },
  {
    slug: "cable-jointing-terminations",
    title: "Cable Jointing and Terminations",
    shortTitle: "Jointing & Terminations",
    icon: Zap,
    summary:
      "Precision HV/EHV jointing, straight-through joints and terminations executed by certified crews with full test records.",
    description: [
      "Jointing is where cable systems succeed or fail. PPIS deploys trained jointers working in controlled environments with correct humidity, temperature and cleanliness controls for XLPE and PILC systems up to 220 kV.",
      "Every joint and termination is executed to the OEM procedure, recorded, and supported by insulation resistance, continuity and HV test data. Heat-shrinkable and pre-moulded jointing systems are available across voltage classes.",
    ],
    technical: [
      { label: "Voltage Class", value: "LT, 11/33 kV, up to 220 kV" },
      { label: "Joint Types", value: "Straight-through, tee, transition, repair" },
      { label: "Terminations", value: "Indoor/outdoor, heat-shrink, pre-moulded, GIS plug-in" },
      { label: "Testing", value: "IR, continuity, HV withstand, PD screening" },
    ],
    capabilities: [
      "XLPE and PILC jointing to OEM procedure",
      "Indoor & outdoor terminations",
      "Transition joints and repair joints",
      "Joint bay preparation and environmental controls",
      "Fault diagnosis, cable cutting and re-jointing",
    ],
    applications: [
      "Substation incoming and outgoing feeders",
      "Cable fault restoration",
      "Transformer terminations",
      "Switchgear and GIS connections",
    ],
    equipment: [
      "Heat-shrink and pre-moulded jointing kits",
      "HV test sets and PD detectors",
      "Torque tools and crimping systems",
      "Environmental control tents and heaters",
    ],
    image: img(
      "technician performing precision high voltage cable jointing in a clean bright workshop, white and blue tones, no text",
    ),
    gallery: [
      img("outdoor cable termination kit installed on a steel structure, bright sky, clean industrial"),
      img("heat shrink sleeve being applied to a power cable, bright clean lighting"),
      img("high voltage test set connected to a cable, bright laboratory, clean"),
    ],
  },
  {
    slug: "ais-gis-substations",
    title: "AIS/GIS Substations",
    shortTitle: "Substations",
    icon: Factory,
    summary:
      "Turnkey air-insulated and gas-insulated substation delivery — civil, primary equipment, protection and commissioning.",
    description: [
      "PPIS delivers complete AIS and GIS substations as a single accountable scope: civil foundations and structures, busbars and conductors, transformers, circuit breakers, isolators, CTs/PTs, control and protection panels, and full testing and commissioning.",
      "Our engineering team coordinates design review, equipment supply, erection supervision and energisation with the utility and OEMs — with GIS deployed where space, safety or environmental conditions demand a compact footprint.",
    ],
    technical: [
      { label: "Voltage Class", value: "11 kV to 220 kV" },
      { label: "Configuration", value: "AIS, GIS (indoor/outdoor)" },
      { label: "Scheme Types", value: "Single/double busbar, ring main" },
      { label: "Scope", value: "Civil + primary + secondary + commissioning" },
    ],
    capabilities: [
      "Equipment foundation and structural works",
      "Busbar, conductor and jumper erection",
      "Control, protection and metering panels",
      "SAS/SCADA integration support",
      "Pre-commissioning and energisation",
    ],
    applications: [
      "Utility grid substations",
      "Industrial captive substations",
      "Renewable evacuation substations",
      "Metro and transport traction",
    ],
    equipment: [
      "Power transformers & reactors",
      "Circuit breakers, isolators, CT/PT",
      "Surge arresters and capacitors",
      "Protection, control & metering panels",
    ],
    image: img(
      "bright clean electrical substation with silver grey structures and blue sky, architectural photography, no text",
    ),
    gallery: [
      img("gas insulated switchgear building interior, bright white clean, blue accent lighting"),
      img("high voltage circuit breakers and busbars, bright daylight, clean industrial"),
      img("transformer installed on a concrete plinth, bright sky, clean photography"),
    ],
  },
  {
    slug: "transmission-distribution-networks",
    title: "Transmission and Distribution Networks",
    shortTitle: "T&D Networks",
    icon: Network,
    summary:
      "Overhead lines, poles and last-mile distribution networks engineered, built and energised for reliability.",
    description: [
      "From EHV transmission lines to dense urban distribution, PPIS builds networks that hold up in service. We handle tower and pole erection, stringing, sagging, framing, earthing and commissioning across aerial and mixed routes.",
      "Our distribution practice focuses on measurable reliability outcomes — balanced loading, reduced losses, robust earthing and maintainable layouts for utility crews.",
    ],
    technical: [
      { label: "Voltage Class", value: "LT, 11 kV, 33 kV, EHV lines" },
      { label: "Routes", value: "Aerial, mixed, urban & rural" },
      { label: "Structures", value: "Lattice towers, tubular & concrete poles" },
      { label: "Scope", value: "Design, supply, erection, commissioning" },
    ],
    capabilities: [
      "Tower and pole foundation & erection",
      "Conductor stringing and sagging",
      "Earthing and lightning protection",
      "Distribution transformer installation",
      "Network augmentation and feeder separation",
    ],
    applications: [
      "Rural electrification and feeder separation",
      "Urban network augmentation",
      "Industrial park distribution",
      "Utility turnkey packages",
    ],
    equipment: [
      "Transmission towers and poles",
      "Conductors, insulators and hardware",
      "Distribution transformers",
      "Earthing and protection materials",
    ],
    image: img(
      "high voltage transmission towers in bright daylight with blue sky, clean modern photography, no text",
    ),
    gallery: [
      img("electricity distribution poles and wires along a clean street, bright daylight"),
      img("engineers stringing conductor on a lattice tower, bright sky, clean"),
      img("distribution transformer on a pole, bright clean daylight"),
    ],
  },
  {
    slug: "covered-conductors",
    title: "Covered Conductors",
    shortTitle: "Covered Conductors",
    icon: Cable,
    summary:
      "Covered conductor systems and accessories that reduce faults, right-of-way conflicts and outages on overhead networks.",
    description: [
      "Covered conductors combine the economics of overhead lines with a level of safety and fault tolerance closer to insulated systems. They are ideal for congested urban corridors, tree-prone routes and areas with high fault risk.",
      "PPIS supplies and installs covered conductors with the complete accessory set — tension and suspension clamps, dead-end assemblies, connectors and protection fittings — installed to OEM practice.",
    ],
    technical: [
      { label: "Voltage Class", value: "11 kV, 22 kV, 33 kV" },
      { label: "Conductor", value: "HDPE/XLPE covered aluminium" },
      { label: "Accessories", value: "Tension, suspension & dead-end sets" },
      { label: "Benefit", value: "Reduced faults, tighter right-of-way" },
    ],
    capabilities: [
      "Covered conductor supply and installation",
      "Complete accessory and fitting sets",
      "Conversion of bare to covered conductor lines",
      "Corridor optimisation and clearance surveys",
      "Post-installation testing and energisation",
    ],
    applications: [
      "Urban congested corridors",
      "Tree-prone and coastal routes",
      "Industrial campus distribution",
      "High theft/fault-prone feeders",
    ],
    equipment: [
      "Covered conductor spools",
      "Tension & suspension clamps",
      "Dead-end assemblies and connectors",
      "Insulator strings and hardware",
    ],
    image: img(
      "overhead covered conductor power lines through a green clean suburban street, bright daylight, no text",
    ),
    gallery: [
      img("close up of covered conductor accessory clamp, bright clean product photography"),
      img("utility crew installing covered conductor on a pole, bright daylight, clean"),
      img("aerial view of clean suburban power distribution network, bright"),
    ],
  },
  {
    slug: "project-management-consultancy",
    title: "Project Management Consultancy",
    shortTitle: "PMC",
    icon: ClipboardCheck,
    summary:
      "Owner's-side project management — planning, procurement support, quality assurance and handover governance.",
    description: [
      "PPIS acts as the owner's representative across power infrastructure programmes, providing planning, scheduling, procurement support, vendor evaluation, quality assurance and commissioning governance.",
      "We bring the same site discipline we apply to our own execution — documented inspections, milestone tracking, risk registers and clear reporting to stakeholders.",
    ],
    technical: [
      { label: "Engagement", value: "Owner's engineer / PMC" },
      { label: "Coverage", value: "Concept to commissioning" },
      { label: "Reporting", value: "Milestones, risk, quality, cost" },
      { label: "Standards", value: "IS/IEC & utility specifications" },
    ],
    capabilities: [
      "Detailed project planning and scheduling",
      "Procurement and vendor evaluation support",
      "Inspection, QA/QC and witness testing",
      "Site supervision and safety governance",
      "Commissioning and documentation handover",
    ],
    applications: [
      "Utility capital programmes",
      "Industrial power projects",
      "Renewable integration projects",
      "Public infrastructure schemes",
    ],
    equipment: [
      "Planning and scheduling systems",
      "Inspection and test plan frameworks",
      "Quality documentation systems",
      "Site measurement and reporting tools",
    ],
    image: img(
      "bright modern engineering project planning office with blueprints and screens, white and ice blue tones, no text",
    ),
    gallery: [
      img("engineers reviewing project drawings in a bright modern office, clean"),
      img("site inspection with clipboard and safety helmet, bright clean industrial"),
      img("project milestone dashboard on a screen, bright clean office"),
    ],
  },
  {
    slug: "testing-commissioning",
    title: "Testing and Commissioning",
    shortTitle: "Testing & Commissioning",
    icon: Gauge,
    summary:
      "HV testing, protection setting and energisation that prove the installation before it goes into service.",
    description: [
      "Testing and commissioning is the point of proof. PPIS performs pre-commissioning checks, HV withstand and insulation testing, protection relay configuration and staged energisation to confirm every asset behaves as designed.",
      "Results are captured in structured test reports with traceable instruments, giving asset owners an auditable baseline for operations and maintenance.",
    ],
    technical: [
      { label: "Voltage Class", value: "LT to 220 kV" },
      { label: "Tests", value: "IR, HV withstand, tan delta, ratio, CT/PT" },
      { label: "Protection", value: "Relay configuration and trip testing" },
      { label: "Output", value: "Traceable test reports and certificates" },
    ],
    capabilities: [
      "Pre-commissioning inspection and checking",
      "HV withstand and insulation resistance testing",
      "Transformer and switchgear testing",
      "Protection relay setting and trip checks",
      "Staged energisation and load trials",
    ],
    applications: [
      "New substations and bays",
      "Cable and feeder commissioning",
      "Transformer and equipment acceptance",
      "Post-fault restoration",
    ],
    equipment: [
      "HV test sets and tan delta kits",
      "Relay test sets and secondary injection",
      "Primary injection and ratio test kits",
      "Calibrated measuring instruments",
    ],
    image: img(
      "engineer operating a high voltage test set in a bright clean substation, blue and white tones, no text",
    ),
    gallery: [
      img("testing instruments and cables on a bright clean switchgear panel"),
      img("engineer recording test readings on a tablet, bright clean substation"),
      img("protection relay panel with indicator lights, bright clean control room"),
    ],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
