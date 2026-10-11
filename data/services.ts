export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: "static-equipment" | "rotating-equipment" | "site-execution";
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  documentedActivities: string[];
  equipmentHandled: string[];
  imagePath: string;
}

export interface CoreServiceArea {
  id: string;
  title: string;
  description: string;
  equipmentSummary: string;
  iconName: "heat-exchanger" | "column" | "cooler" | "reactor" | "manpower";
}

export const coreServiceAreas: CoreServiceArea[] = [
  {
    id: "heat-exchangers-area",
    title: "Heat Exchangers Maintenance & Replacement",
    description: "All types of Heat Exchangers maintenance, repair, and replacement jobs including bundle extraction, high-pressure hydro jetting, rolling, sand blasting, Belzona coating, and hydro testing.",
    equipmentSummary: "Shell & tube exchangers, reboilers, condensers, floating head & U-tube units",
    iconName: "heat-exchanger"
  },
  {
    id: "columns-vessels-furnaces-area",
    title: "Columns, Vessels, Heaters & Boilers",
    description: "Turnaround maintenance, repair, and replacement of distillation columns, pressure vessels, fired heaters, boilers, and furnaces with tray revamps, decoking, and ACFM chemical wash.",
    equipmentSummary: "Distillation towers, trays/packings, separator drums, LPG spheres, fired heaters & boilers",
    iconName: "column"
  },
  {
    id: "fin-fan-coolers-area",
    title: "Fin-Fan Air Coolers Maintenance",
    description: "All types of Fin-fan air-cooled heat exchangers maintenance, repair, and replacement jobs with header box plug servicing, tube jetting, fin comb cleaning, and pressure testing.",
    equipmentSummary: "Air-cooled exchangers, overhead condensing banks, run-down fin bundles",
    iconName: "cooler"
  },
  {
    id: "reactors-regenerators-area",
    title: "Reactor & Regenerator Catalyst Turnaround",
    description: "Reactor and regenerator maintenance, repair, and replacement jobs with controlled atmosphere blinding, catalyst unloading/loading, internal grid repairs, box-up, and de-blinding.",
    equipmentSummary: "Hydrocracker, FCCU, DHDT, DHDS, reforming reactors & regenerators",
    iconName: "reactor"
  },
  {
    id: "manpower-supply-area",
    title: "All Types Manpower Supply (700+ Capacity)",
    description: "700+ vetted, experienced turnaround manpower available at any time with complete tooling & trackers, scalable to arrange additional crews as per client turnaround requirement.",
    equipmentSummary: "Millwright fitters, certified welders, riggers, hydro jetters, safety marshals & supervisors",
    iconName: "manpower"
  }
];

export const turnaroundHighlights = {
  establishedYear: 2014,
  experienceYears: "12+",
  availableManpower: "700+",
  scalability: "Scalable anytime as per client requirement",
  toolsAndTrackers: "Dedicated specialized tooling and progress trackers available for all turnaround jobs",
  marketTrackRecord: "Executed large shutdown jobs in almost all refineries across India and select international facilities"
};

export const servicesData: ServiceItem[] = [
  {
    id: "heat-exchangers",
    slug: "heat-exchanger-maintenance",
    title: "Heat Exchanger Maintenance & Overhaul",
    category: "static-equipment",
    categoryLabel: "Static Equipment",
    shortDescription: "Complete turnaround servicing including blinding, opening, mechanical cleaning by rolling, brushing, sand blasting, hydro jetting, Belzona coating, hydro testing, box-up, and de-blinding.",
    fullDescription: "Jay Mataji Construction delivers end-to-end turnaround maintenance, repair, and replacement for all types of industrial heat exchangers across premier refinery process units with specialized tube pullers, hydro jetting trailers, and torque equipment.",
    documentedActivities: [
      "Isolation and positive blinding of shell and tube nozzles",
      "Channel cover, floating head, and shell cover de-bolting and opening",
      "Cleaning by rolling, wire brushing, sand blasting, and rotary mechanical tools",
      "High-pressure hydro jetting for stubborn scale, polymer, and heavy fouling removal",
      "Belzona coating application on tube sheets and channel heads for erosion/corrosion prevention",
      "Full pressure hydrostatic testing of shell side and tube side to verify integrity",
      "Final gasket placement, torque-controlled box-up, and systematic de-blinding"
    ],
    equipmentHandled: [
      "Shell-and-tube heat exchangers",
      "Floating-head exchangers",
      "U-tube exchangers & reboilers",
      "Surface condensers & chillers"
    ],
    imagePath: "/images/services/heat-exchanger.jpg"
  },
  {
    id: "distillation-columns",
    slug: "column-tray-vessel-maintenance",
    title: "Columns, Trays & Process Towers",
    category: "static-equipment",
    categoryLabel: "Static Equipment",
    shortDescription: "Blinding, opening of manways, opening of trays man-ways/packings, shell cleaning, hydroblasting trays & saddles, silpan test, re-fixing/replacement, box-up, and de-blinding.",
    fullDescription: "Comprehensive turnaround overhaul for refinery fractionation columns, vacuum towers, and process strippers. Our crews execute internal tray revamps and packing replacements under strict critical-path shutdown schedules.",
    documentedActivities: [
      "Unit isolation, positive blinding, and safe manway opening",
      "Opening of tray man-ways, dismantling valve/sieve trays, and packing unloading",
      "Internal column shell scraping, grit cleaning, and washing",
      "High-pressure hydroblasting of trays, downcomers, and structural saddles",
      "Silpan test witnessing and internal QA/QC witness inspection",
      "Replacement and precision re-fixing of tray hardware and structured packings",
      "Systematic box-up of tray man-ways/packings, shell manway box-up, and de-blinding"
    ],
    equipmentHandled: [
      "Crude Distillation Units (CDU)",
      "Vacuum Distillation Units (VDU)",
      "FCCU Main Fractionators",
      "Strippers, Absorbers & Packed Towers"
    ],
    imagePath: "/images/services/distillation-column.jpg"
  },
  {
    id: "vessels-and-spheres",
    slug: "vessels-spheres-maintenance",
    title: "Vessels, Drums & Storage Spheres",
    category: "static-equipment",
    categoryLabel: "Static Equipment",
    shortDescription: "Opening, confined space cleaning, unloading/loading of catalyst, servicing catalyst pipes, and chemical vessel passivation.",
    fullDescription: "Specialized turnkey servicing of high-pressure separators, accumulator drums, and pressurized LPG/chemical spheres including gas-free opening, internal washing, catalyst handling, and protective passivation.",
    documentedActivities: [
      "Isolation, positive blinding, and certified gas-free manway opening",
      "Internal cleaning, sludge extraction, and hydroblasting",
      "Unloading and fresh charge loading of catalyst types and adsorbent media",
      "Servicing, inspection, and replacement of internal catalyst pipes and distributor nozzles",
      "Vessel internal passivation and chemical surface protective treatment",
      "Precision torque-controlled box-up with fresh gaskets and joint hydro testing"
    ],
    equipmentHandled: [
      "High-pressure separator drums",
      "Flash drums and knock-out pots",
      "LPG & pressurized spheres",
      "Chemical storage surge tanks"
    ],
    imagePath: "/images/services/vessels-and-spheres.jpg"
  },
  {
    id: "heaters-and-furnaces",
    slug: "heaters-boilers-furnaces",
    title: "Heaters, Boilers & Process Furnaces",
    category: "static-equipment",
    categoryLabel: "Static Equipment",
    shortDescription: "Cleaning of heaters, inert blasting, hydroblasting, de-coking of heaters, chemical wash of ACFM cleaning, and burner/box-up servicing.",
    fullDescription: "Turnaround maintenance for refinery process fired heaters, crude heaters, cracking furnaces, and auxiliary industrial boilers requiring mechanical decoking, inert blasting, and non-destructive surface preparation.",
    documentedActivities: [
      "Process coil blinding and radiant/convection section opening",
      "Mechanical and hydroblasting decoking of heater tube passes",
      "Inert blasting and high-pressure washing of outer tube surfaces",
      "Chemical wash and ACFM (Alternating Current Field Measurement) cleaning",
      "Damper, peep door, and burner servicing support",
      "Furnace header box opening, plug servicing, and hydro testing"
    ],
    equipmentHandled: [
      "Crude & Vacuum Fired Heaters",
      "Reformer & Cracker Furnaces",
      "Industrial Utility Boilers",
      "Convection & Radiant Coils"
    ],
    imagePath: "/images/services/heaters-furnaces.jpg"
  },
  {
    id: "fin-fan-coolers",
    slug: "fin-fan-cooler-maintenance",
    title: "Fin-Fan Air-Cooled Heat Exchangers",
    category: "static-equipment",
    categoryLabel: "Static Equipment",
    shortDescription: "Header box plug removal, high-pressure tube jetting, external fin cleaning, bundle repair, plugging, and pressure testing.",
    fullDescription: "Turnaround maintenance, repair, and replacement for all types of fin-fan coolers and air-cooled heat exchangers ensuring optimal heat dissipation across refinery condensing circuits.",
    documentedActivities: [
      "Header box plug unscrewing, threading inspection, and gasket replacement",
      "Tube internal descaling and high-pressure hydro jetting",
      "External fin bank cleaning, comb alignment, and debris removal",
      "Defective tube plugging and hydro testing verification",
      "Re-plugging with anti-seize compound, torque tightening, and box-up"
    ],
    equipmentHandled: [
      "Fin-fan air coolers",
      "Overhead condensing banks",
      "Product run-down coolers",
      "Multi-bay air cooler bundles"
    ],
    imagePath: "/images/services/fin-fan-coolers.jpg"
  },
  {
    id: "reactors-regenerators",
    slug: "reactor-regenerator-maintenance",
    title: "Reactors & Regenerators (Catalyst Handling)",
    category: "static-equipment",
    categoryLabel: "Static Equipment",
    shortDescription: "Blinding, opening, catalyst unloading and loading under controlled conditions, internal grid repair, box-up, and de-blinding.",
    fullDescription: "High-hazard, critical-path turnaround maintenance for catalytic reactors, hydrotreaters, hydrocrackers, and FCCU regenerators executing controlled unloading, skimming, and dense loading.",
    documentedActivities: [
      "Safe nitrogen purge isolation and reactor head unbolting",
      "Gravity dumping, vacuum unloading, and segregation of spent catalyst",
      "Coke removal, internal cleaning, and decontamination",
      "Dense and sock catalyst loading with precision distribution profiling",
      "Internal support grid, scallop, and center pipe inspection and repair",
      "Final box-up, torque verification, and systematic de-blinding"
    ],
    equipmentHandled: [
      "FCCU Reactors & Regenerators",
      "Hydrocracker (HCU) Reactors",
      "Diesel Hydrotreater (DHDT / DHDS) Reactors",
      "Continuous Catalytic Reformers (CCR)"
    ],
    imagePath: "/images/services/reactors-regenerators.jpg"
  },
  {
    id: "industrial-valves",
    slug: "valve-servicing-testing",
    title: "Industrial Valve Servicing & Hydro Testing",
    category: "rotating-equipment",
    categoryLabel: "Rotating & Mechanical Servicing",
    shortDescription: "Internal and external cleaning of all valve types, servicing, hydro testing, replacement of internals, and boxing up.",
    fullDescription: "Complete in-situ and shop overhaul, internal seat lapping, gland packing replacement, and calibrated hydrostatic pressure testing for critical isolation, safety relief, and control valves.",
    documentedActivities: [
      "Unbolting from pipeline manifolds and safe crane rigging",
      "Internal and external grit cleaning and visual seat inspection",
      "Precision lapping of gates, plugs, and seats to eliminate passing",
      "Replacement of internals, gland packing, bonnet gaskets, and stems",
      "Body hydrostatic testing and seat leak tightness testing on calibrated benches",
      "Controlled boxing up and re-installation with specified torque sequences"
    ],
    equipmentHandled: [
      "Gate, Globe & Check Valves",
      "Pressure Safety & Relief Valves (PSV)",
      "Pneumatic & Electric Control Valves",
      "High-pressure wedge and ball valves"
    ],
    imagePath: "/images/services/industrial-valves.jpg"
  },
  {
    id: "process-pumps",
    slug: "pump-overhaul-servicing",
    title: "Process Pump Overhaul & Alignment",
    category: "rotating-equipment",
    categoryLabel: "Rotating & Mechanical Servicing",
    shortDescription: "Repairing and overhauling of all types of pumps, mechanical seal replacement, dynamic balancing, and laser alignment.",
    fullDescription: "Turnaround overhauls of single and multi-stage process pumps handling hydrocarbons, sour water, boiler feedwater, and chemical additives with laser precision shaft alignment.",
    documentedActivities: [
      "Coupling de-coupling and pump pull-out from baseplate",
      "Repairing and overhauling of all types of process pumps",
      "Replacement of mechanical seals, bearing sets, and wear rings",
      "Internal casing clearance restoration and dynamic impeller checks",
      "Motor-pump laser alignment to stringent engineering tolerances",
      "Solo run verification and mechanical witness sign-off"
    ],
    equipmentHandled: [
      "Centrifugal hydrocarbon process pumps",
      "Multi-stage boiler feed pumps",
      "Chemical injection & metering pumps",
      "Vertical sump and canned motor pumps"
    ],
    imagePath: "/images/services/process-pumps.jpg"
  },
  {
    id: "compressors-and-motors",
    slug: "compressor-motor-servicing",
    title: "Compressor & Motor Overhauling, Erection & Alignment",
    category: "rotating-equipment",
    categoryLabel: "Rotating & Mechanical Servicing",
    shortDescription: "Overhauling, erection, and precision alignment of compressor and motor assemblies during turnaround outages.",
    fullDescription: "Comprehensive mechanical servicing of reciprocating and centrifugal gas compressors, industrial blowers, and high-voltage electric motor drives with laser and dial-indicator alignment.",
    documentedActivities: [
      "Overhauling of all reciprocating and centrifugal process gas compressors",
      "Erection and mechanical re-assembly of compressor skids and baseplates",
      "Precision cold and thermal growth alignment with electric motor drivers",
      "Cylinder head and suction/discharge valve removal and refurbishment",
      "Piston, rod, and crosshead clearance checks and packing replacement",
      "Lube oil console flushing, barrier seal checks, and coupling box-up"
    ],
    equipmentHandled: [
      "Reciprocating gas compressors",
      "Centrifugal process compressors",
      "High-voltage electric motor drivers",
      "Industrial combustion blowers"
    ],
    imagePath: "/images/services/compressors-motors.jpg"
  },
  {
    id: "cooling-towers",
    slug: "cooling-tower-maintenance",
    title: "Cooling Tower Fan & Gearbox Assembly",
    category: "rotating-equipment",
    categoryLabel: "Rotating & Mechanical Servicing",
    shortDescription: "Replacement of fan and gear box assembly, axial blade pitch balancing, driveshaft dynamic alignment, and oil servicing.",
    fullDescription: "Specialized maintenance and replacement of large industrial cooling tower mechanical assemblies to sustain refinery utility cooling water circulation.",
    documentedActivities: [
      "Safe isolation, lockout-tagout, and fan deck access scaffolding",
      "Replacement of cooling tower fan blades and hub assembly",
      "Replacement and overhauling of right-angle drive gearbox assembly",
      "Floating driveshaft and flexible coupling precision alignment",
      "Blade pitch angle calibration, static balancing, and vibration testing",
      "Lubrication fill, seals replacement, and full mechanical test run"
    ],
    equipmentHandled: [
      "Induced draft cooling towers",
      "Right-angle fan gearboxes",
      "Variable pitch axial fans",
      "Composite drive shafts"
    ],
    imagePath: "/images/services/cooling-towers.jpg"
  },
  {
    id: "engineered-scaffolding",
    slug: "industrial-scaffolding-services",
    title: "Engineered Refinery Scaffolding & Access",
    category: "site-execution",
    categoryLabel: "Site Execution & Manpower",
    shortDescription: "Refinery scaffolding jobs for critical static equipment maintenance, columns, reactors, pipe racks, and furnace headers.",
    fullDescription: "Safe, OSHA-compliant temporary access systems engineered to facilitate heavy mechanical maintenance at extreme refinery heights with certified cuplock and modular scaffolding.",
    documentedActivities: [
      "Scaffolding jobs for refinery static equipment and turnaround maintenance",
      "Erection of heavy-duty working platforms, hanging scaffolds, and stair towers",
      "Column circumferential and internal suspended scaffolding",
      "Daily safety inspection, green tag certification, and handrail maintenance",
      "Prompt dismantling and site housekeeping upon turnaround completion"
    ],
    equipmentHandled: [
      "Tall fractionation column scaffolding",
      "Reactor head access platforms",
      "Overhead pipe rack cantilever scaffolds",
      "Confined space internal vessel scaffolds"
    ],
    imagePath: "/images/services/engineered-scaffolding.jpg"
  },
  {
    id: "shutdown-manpower",
    slug: "industrial-shutdown-manpower",
    title: "All Types Manpower Supply (700+ Personnel)",
    category: "site-execution",
    categoryLabel: "Site Execution & Manpower",
    shortDescription: "700+ manpower available at any time, with capability to arrange additional skilled personnel per client turnaround requirement.",
    fullDescription: "Immediate mobilization of high-caliber trade crews trained in refinery safety protocols, blind lists, torque specifications, and shift handovers with dedicated tools and trackers for all turnaround jobs.",
    documentedActivities: [
      "700+ permanent technical roster available at any time",
      "Ability to arrange additional manpower dynamically as per client requirement",
      "Multi-skilled teams: Millwright fitters, riggers, certified welders, hydro jetters",
      "Experienced shutdown supervisors, safety marshals, and blind coordinators",
      "Equipped with dedicated tools and progress trackers for all jobs",
      "Compliance with client gate-pass, medical fitness, and safety induction standards"
    ],
    equipmentHandled: [
      "All refinery process units (CDU, VDU, FCCU, HCU, DHDT, SRU)",
      "Petrochemical cracking and polyolefin units",
      "Utility and offsite manifolds"
    ],
    imagePath: "/images/services/shutdown-manpower.jpg"
  }
];
