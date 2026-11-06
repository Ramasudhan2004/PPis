import {
  Cable,
  Wrench,
  Flame,
  Shield,
  BatteryCharging,
  Gauge,
  Zap,
  PlugZap,
  Boxes,
  Network,
  type LucideIcon,
} from "lucide-react";
import { img } from "@/lib/image";

export interface ProductCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  blurb: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  specs: string[];
  image: string;
  featured?: boolean;
}

export const productCategories: ProductCategory[] = [
  {
    id: "covered-conductors",
    label: "Covered Conductors",
    icon: Cable,
    blurb: "Covered overhead conductors that reduce faults and right-of-way conflicts.",
  },
  {
    id: "covered-accessories",
    label: "Covered Conductor Accessories",
    icon: Wrench,
    blurb: "Tension, suspension and dead-end assemblies matched to each conductor.",
  },
  {
    id: "heat-shrinkable",
    label: "Heat Shrinkable Joints & Terminations",
    icon: Flame,
    blurb: "Reliable jointing and termination systems across voltage classes.",
  },
  {
    id: "surge-arresters",
    label: "Polymer Surge Arresters & Disconnectors",
    icon: Shield,
    blurb: "Polymer-housed protection for lines, transformers and switchgear.",
  },
  {
    id: "capacitors-arresters",
    label: "Capacitors & Lightning Arresters",
    icon: Zap,
    blurb: "Voltage support and surge protection for stable networks.",
  },
  {
    id: "energy-metering",
    label: "Energy Management & Metering Solutions",
    icon: Gauge,
    blurb: "Metering, monitoring and energy analytics for measurable efficiency.",
  },
  {
    id: "power-cables",
    label: "Underground Power Cables up to 220 kV",
    icon: Cable,
    blurb: "XLPE and armoured power cables for HT, EHV and LT applications.",
  },
  {
    id: "ev-chargers",
    label: "EV Chargers",
    icon: BatteryCharging,
    blurb: "AC and DC charging solutions for fleets, campuses and public networks.",
  },
  {
    id: "power-equipment",
    label: "Power Equipment Solutions",
    icon: Boxes,
    blurb: "Transformers, switchgear, panels and balance-of-plant equipment.",
  },
  {
    id: "system-integration",
    label: "System Integration Solutions",
    icon: Network,
    blurb: "Integrated equipment, control and protection delivered as one system.",
  },
];

export const products: Product[] = [
  // ------------- Covered Conductors -------------
  {
    id: "cc-11kv",
    name: "Covered Conductor — 11 kV",
    category: "covered-conductors",
    description:
      "HDPE-covered aluminium conductor for congested 11 kV overhead corridors, reducing faults and allowing tighter clearances.",
    specs: ["Voltage: 11 kV", "Conductor: Covered ACSR/AAAC", "Insulation: HDPE/XLPE", "Standards: IS/IEC"],
    image: img("covered conductor cable spool close up, white and silver, clean product photography"),
    featured: true,
  },
  {
    id: "cc-33kv",
    name: "Covered Conductor — 33 kV",
    category: "covered-conductors",
    description:
      "Higher-voltage covered conductor for urban and coastal 33 kV feeders exposed to trees, salt and fault risk.",
    specs: ["Voltage: 33 kV", "Conductor: Covered AAAC", "Insulation: XLPE", "Application: Urban feeders"],
    image: img("power conductor spool in a bright clean factory, silver and blue tones"),
  },

  // ------------- Covered Conductor Accessories -------------
  {
    id: "cca-tension",
    name: "Tension Clamp Assembly",
    category: "covered-accessories",
    description:
      "Tension set for terminating covered conductors at dead-end structures with protective fittings.",
    specs: ["Type: Tension / dead-end", "Material: Aluminium alloy", "Conductor range: suited to 11–33 kV", "Corrosion: Coastal grade"],
    image: img("aluminium tension clamp for power line accessory, clean white product photography"),
  },
  {
    id: "cca-suspension",
    name: "Suspension Clamp Assembly",
    category: "covered-accessories",
    description:
      "Suspension set with protective armour rods for intermediate structures on covered conductor lines.",
    specs: ["Type: Suspension", "Includes: Armour rods", "Fitting: Bolt-on", "Finish: Hot-dip galvanised"],
    image: img("suspension clamp and armour rods for overhead power line, clean product photo"),
  },

  // ------------- Heat Shrinkable -------------
  {
    id: "hs-joint-lt",
    name: "Heat Shrinkable Joint — LT",
    category: "heat-shrinkable",
    description:
      "Straight-through heat shrinkable joint kit for LT XLPE and PVC power cables.",
    specs: ["Voltage: Up to 1.1 kV", "Type: Straight-through", "Cores: 3C/4C", "Includes: Tubes, sleeves, connectors"],
    image: img("heat shrinkable cable joint kit laid out, colourful clean product photography"),
    featured: true,
  },
  {
    id: "hs-term-33kv",
    name: "Heat Shrinkable Termination — 33 kV",
    category: "heat-shrinkable",
    description:
      "Outdoor/indoor heat shrinkable termination kit for 33 kV XLPE cables.",
    specs: ["Voltage: 33 kV", "Type: Indoor/outdoor", "Insulation: XLPE", "Testing: IR & HV withstand"],
    image: img("outdoor heat shrinkable cable termination on a structure, bright clean, no text"),
  },
  {
    id: "hs-joint-11kv",
    name: "Heat Shrinkable Joint — 11 kV",
    category: "heat-shrinkable",
    description:
      "Field-proven 11 kV joint kit engineered for reliable long-term performance in distribution networks.",
    specs: ["Voltage: 11 kV", "Type: Straight-through", "Conductor: Al/Cu", "Standard: IEC 60502"],
    image: img("cable jointing kit components arranged neatly, bright clean studio photography"),
  },

  // ------------- Polymer Surge Arresters & Disconnectors -------------
  {
    id: "sa-polymer-11",
    name: "Polymer Surge Arrester — 11 kV",
    category: "surge-arresters",
    description:
      "Metal-oxide polymer surge arrester protecting distribution equipment from switching and lightning surges.",
    specs: ["Voltage: 11 kV", "Housing: Silicone polymer", "Type: Metal oxide (ZnO)", "Mounting: Line / station"],
    image: img("polymer surge arrester insulator on a bright clean background, product photography"),
    featured: true,
  },
  {
    id: "sa-polymer-33",
    name: "Polymer Surge Arrester — 33 kV",
    category: "surge-arresters",
    description:
      "33 kV surge arrester for substation and line protection with high energy absorption capability.",
    specs: ["Voltage: 33 kV", "Housing: Silicone polymer", "Duty: Station class", "Standard: IEC 60099-4"],
    image: img("33kV surge arrester mounted on steel structure, bright daylight, clean"),
  },
  {
    id: "disc-hg",
    name: "Horn Gap Disconnector",
    category: "surge-arresters",
    description:
      "Horn gap disconnector providing a visible isolation point and surge path on distribution lines.",
    specs: ["Voltage: 11–33 kV", "Type: Horn gap", "Material: Galvanised steel", "Mounting: Pole / structure"],
    image: img("horn gap disconnector hardware, bright clean industrial product photograph"),
  },

  // ------------- Capacitors & Lightning Arresters -------------
  {
    id: "cap-bank-11",
    name: "Shunt Capacitor Bank — 11 kV",
    category: "capacitors-arresters",
    description:
      "Capacitor bank for voltage support, power factor correction and loss reduction on distribution feeders.",
    specs: ["Voltage: 11 kV", "Type: Shunt bank", "Rating: Configurable (kVAR)", "Protection: Internal fuse + arrester"],
    image: img("capacitor bank panels in a bright clean electrical room, blue and white"),
  },
  {
    id: "la-distribution",
    name: "Distribution Class Lightning Arrester",
    category: "capacitors-arresters",
    description:
      "Lightning arrester for distribution transformers and line equipment subject to direct and induced surges.",
    specs: ["Voltage: 9–36 kV", "Class: Distribution", "Housing: Porcelain / polymer", "Standard: IEC 60099"],
    image: img("lightning arrester insulator on white background, clean product photography"),
  },

  // ------------- Energy Management & Metering -------------
  {
    id: "meter-smart-3ph",
    name: "Smart Three-Phase Energy Meter",
    category: "energy-metering",
    description:
      "Communicating three-phase energy meter with load profiling, tamper detection and remote reading support.",
    specs: ["Type: Three-phase, 4-wire", "Accuracy: Class 0.5S", "Comms: RS485 / optical", "Features: Load profile, tamper log"],
    image: img("smart three phase energy meter close up, clean white product photography"),
    featured: true,
  },
  {
    id: "ems-platform",
    name: "Energy Management & Monitoring",
    category: "energy-metering",
    description:
      "Energy monitoring layer that consolidates metering data into dashboards for consumption, losses and efficiency.",
    specs: ["Scope: Multi-site monitoring", "Data: Consumption & PQ", "Integration: SCADA / APIs", "Reporting: Automated"],
    image: img("energy monitoring dashboard on a bright clean screen, blue tones, no text"),
  },

  // ------------- Underground Power Cables -------------
  {
    id: "cable-xlpe-11",
    name: "XLPE Power Cable — 11 kV",
    category: "power-cables",
    description:
      "Armoured XLPE insulated power cable for HT distribution feeders, industrial plants and substation interconnections.",
    specs: ["Voltage: 11 kV", "Insulation: XLPE", "Armour: Steel wire / strip", "Standard: IS 7098 / IEC 60502"],
    image: img("coiled armoured power cable cross section, clean white product photography"),
  },
  {
    id: "cable-xlpe-33",
    name: "XLPE Power Cable — 33 kV",
    category: "power-cables",
    description:
      "EHV-grade XLPE cable for 33 kV feeders with low dielectric loss and high thermal performance.",
    specs: ["Voltage: 33 kV", "Insulation: XLPE", "Conductor: Al / Cu", "Screen: Copper tape/wire"],
    image: img("industrial power cable reel in a bright clean warehouse, silver blue tones"),
    featured: true,
  },
  {
    id: "cable-ehv-132",
    name: "EHV Power Cable — up to 220 kV",
    category: "power-cables",
    description:
      "High-capacity EHV cable systems for 132 kV to 220 kV transmission-class underground circuits.",
    specs: ["Voltage: Up to 220 kV", "Insulation: XLPE", "Type: Single-core, metallic sheath", "Accessories: Full jointing range"],
    image: img("large ehv power cable drum in a bright industrial yard, clean photography"),
  },

  // ------------- EV Chargers -------------
  {
    id: "ev-ac-7",
    name: "AC EV Charger — 7.4 kW",
    category: "ev-chargers",
    description:
      "Wall-mounted AC charger for homes, offices and fleet depots with app and RFID access.",
    specs: ["Output: 7.4 kW", "Type: AC Type 2", "Access: App / RFID", "Protection: IP54+"],
    image: img("sleek modern white AC ev charger on a wall, minimal clean product photography"),
    featured: true,
  },
  {
    id: "ev-dc-60",
    name: "DC Fast Charger — 60 kW",
    category: "ev-chargers",
    description:
      "Dual-gun DC fast charger for highways, campuses and public charging hubs with smart load management.",
    specs: ["Output: 60 kW", "Guns: 2 (CCS2)", "Network: OCPP compatible", "Display: Touch HMI"],
    image: img("modern dc fast ev charging station in a bright clean plaza, white and blue"),
  },

  // ------------- Power Equipment Solutions -------------
  {
    id: "pe-dist-transformer",
    name: "Distribution Transformer",
    category: "power-equipment",
    description:
      "Energy-efficient distribution transformers for utility and industrial deployment.",
    specs: ["Rating: Configurable kVA", "Type: Oil / dry", "Cooling: ONAN/AN", "Standard: IS 1180 / IEC 60076"],
    image: img("distribution transformer on a concrete plinth, bright daylight, clean"),
  },
  {
    id: "pe-rmu",
    name: "Ring Main Unit (RMU)",
    category: "power-equipment",
    description:
      "Compact ring main unit for medium-voltage distribution with SF6/vacuum switching options.",
    specs: ["Voltage: 11 / 33 kV", "Type: SF6 / vacuum", "Config: 2-way to 4-way", "Standard: IEC 62271"],
    image: img("ring main unit switchgear cabinet, bright clean electrical room, blue tones"),
  },
  {
    id: "pe-panel",
    name: "LT Distribution Panel",
    category: "power-equipment",
    description:
      "Factory-built LT distribution and motor control panels with protection, metering and busbar systems.",
    specs: ["Voltage: Up to 690 V", "Type: Distribution / MCC", "Form: Up to Form 4", "Standard: IEC 61439"],
    image: img("lt distribution electrical panel row, bright clean switchgear room"),
  },

  // ------------- System Integration -------------
  {
    id: "si-substation-package",
    name: "Integrated Substation Package",
    category: "system-integration",
    description:
      "Primary and secondary equipment supplied, integrated and commissioned as one tested package.",
    specs: ["Scope: Supply + integration", "Includes: Protection & control", "Testing: Factory + site", "Handover: Documented"],
    image: img("modern substation control room with panels, bright clean, blue accent"),
  },
  {
    id: "si-scada",
    name: "SCADA & Automation Integration",
    category: "system-integration",
    description:
      "Control, monitoring and automation integration linking field devices to operator systems.",
    specs: ["Protocols: IEC 61850 / Modbus", "Scope: RTU, HMI, comms", "Features: Alarms, trends", "Integration: Utility SCADA"],
    image: img("scada automation workstation with bright clean screens, blue and white"),
  },
];

export const getProductsByCategory = (categoryId: string) =>
  products.filter((p) => p.category === categoryId);

export const getCategory = (id: string) =>
  productCategories.find((c) => c.id === id);
