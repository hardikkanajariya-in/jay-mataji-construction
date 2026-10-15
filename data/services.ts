export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: "static-equipment" | "plant-maintenance" | "site-execution";
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
  iconName: "heat-exchanger" | "column" | "cooler" | "manpower" | "maintenance";
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
    id: "columns-vessels-area",
    title: "Columns, Trays & Process Vessels",
    description: "Turnaround maintenance, repair, and overhaul of distillation columns, pressure vessels, separator drums, and storage spheres with tray revamps, internal cleaning, and box-up.",
    equipmentSummary: "Distillation towers, trays/packings, separator drums, LPG spheres & pressure vessels",
    iconName: "column"
  },
  {
    id: "plant-equipment-maintenance-area",
    title: "Plant & Industrial Equipment Maintenance",
    description: "Comprehensive routine, preventive, AMC, and emergency mechanical maintenance services for operational refinery units, petrochemical plants, utility facilities, and industrial complexes.",
    equipmentSummary: "Running process units, rotating machinery, static vessels, piping manifolds, and auxiliary equipment",
    iconName: "maintenance"
  },
  {
    id: "fin-fan-coolers-area",
    title: "Fin-Fan Air Coolers Maintenance",
    description: "All types of Fin-fan air-cooled heat exchangers maintenance, repair, and replacement jobs with header box plug servicing, tube jetting, fin comb cleaning, and pressure testing.",
    equipmentSummary: "Air-cooled exchangers, overhead condensing banks, run-down fin bundles",
    iconName: "cooler"
  },
  {
    id: "manpower-supply-area",
    title: "All Types Manpower Supply (700+ Capacity)",
    description: "700+ vetted, experienced turnaround and maintenance manpower available at any time with complete tooling & trackers, scalable to arrange additional crews as per client requirement.",
    equipmentSummary: "Millwright fitters, certified welders, riggers, hydro jetters, safety marshals & supervisors",
    iconName: "manpower"
  }
];

export const turnaroundHighlights = {
  establishedYear: 2014,
  experienceYears: "12+",
  availableManpower: "700+",
  scalability: "Scalable anytime as per client requirement",
  toolsAndTrackers: "Dedicated specialized tooling and progress trackers available for all turnaround and maintenance jobs",
  marketTrackRecord: "Executed large shutdown and maintenance jobs in almost all refineries across India and select international facilities"
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
    shortDescription: "Opening, confined space cleaning, internal inspection, shell descaling, and chemical vessel passivation.",
    fullDescription: "Specialized turnkey servicing of high-pressure separators, accumulator drums, and pressurized LPG/chemical spheres including gas-free opening, internal washing, mechanical cleaning, and protective passivation.",
    documentedActivities: [
      "Isolation, positive blinding, and certified gas-free manway opening",
      "Internal cleaning, sludge extraction, and hydroblasting",
      "Internal tray, demister pad, and vessel nozzle inspection and cleaning",
      "Servicing, inspection, and replacement of internal piping, distributor nozzles, and deflectors",
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
    id: "industrial-valves",
    slug: "valve-servicing-testing",
    title: "Industrial Valve Servicing & Hydro Testing",
    category: "plant-maintenance",
    categoryLabel: "Plant Maintenance & Servicing",
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
    id: "engineered-scaffolding",
    slug: "industrial-scaffolding-services",
    title: "Engineered Refinery Scaffolding & Access",
    category: "site-execution",
    categoryLabel: "Site Execution & Manpower",
    shortDescription: "Refinery scaffolding jobs for critical static equipment maintenance, columns, vessels, pipe racks, and exchanger platforms.",
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
      "Process vessel access platforms",
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
  },
  {
    id: "plant-equipment-maintenance",
    slug: "plant-equipment-maintenance-services",
    title: "Plant & Equipment Maintenance Services",
    category: "plant-maintenance",
    categoryLabel: "Plant Maintenance & Turnaround",
    shortDescription: "Routine, preventive, AMC, and emergency mechanical maintenance services for continuous plant operations, utility systems, and process equipment.",
    fullDescription: "Jay Mataji Construction provides comprehensive on-site plant and equipment maintenance services ('Maintenance job') beyond scheduled turnarounds. Our experienced crews execute annual maintenance contracts (AMC), routine mechanical upkeep, flange management, preventive servicing of static and utility equipment, piping repairs, and emergency breakdown rectification for refineries, petrochemical plants, and chemical processing facilities.",
    documentedActivities: [
      "Routine and preventive mechanical maintenance across operational process and utility units",
      "Annual Maintenance Contracts (AMC) and ongoing on-site mechanical contractor support",
      "Emergency breakdown troubleshooting, rapid mobilization, and round-the-clock repair response",
      "Controlled bolt tensioning, torque tightening, flange inspection, and gasket replacement",
      "Piping spool fabrication, line modifications, valve gland repacking, and hydrostatic testing",
      "Preventive overhaul of static equipment, heat transfer equipment, and auxiliary units",
      "Routine servicing of utility systems, piping manifolds, and circulating water circuits"
    ],
    equipmentHandled: [
      "Refinery and petrochemical continuous process units",
      "Utility systems, offsites, and steam manifolds",
      "Static pressure vessels, heat exchangers, and storage tankages",
      "Industrial piping networks, valves, and process equipment auxiliaries"
    ],
    imagePath: "/images/equipment-servicing.jpg"
  }
];
