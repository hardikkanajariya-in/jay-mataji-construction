export interface ProjectRecord {
  id: number;
  srNo: number;
  client: string;
  siteLocation: string;
  jobDescription: string;
  period: string;
  month: string;
  year: number;
  manpowerQty: number;
  category: "Exchangers & Heat Transfer" | "Catalyst & Reactors" | "Columns & Vessels" | "Integrated Shutdown" | "Specialized Maintenance";
}

/**
 * Centralized publication configuration.
 * Allows client names or proprietary refinery unit details to be masked/anonymized
 * until customer signs off on public disclosure.
 */
export const projectPublicationConfig = {
  anonymizeThirdPartyClients: false, // Set to true to mask client names with industrial descriptions
  anonymizeSites: false,             // Set to true to show regional location only
};

export function getDisplayClient(project: ProjectRecord): string {
  if (projectPublicationConfig.anonymizeThirdPartyClients) {
    if (project.client.includes("CR ASIA") || project.client.includes("CR3")) {
      return "Multinational Turnaround Specialist";
    }
    if (project.client.includes("RADIANT")) {
      return "Tier-1 Industrial Engineering EPC";
    }
    if (project.client.includes("JECON")) {
      return "Refinery Mechanical Contractor";
    }
    return "Industrial Contracting Partner";
  }
  return project.client;
}

export function getDisplaySite(project: ProjectRecord): string {
  if (projectPublicationConfig.anonymizeSites) {
    if (project.siteLocation.includes("JAMNAGAR")) return "Refinery Complex, Gujarat";
    if (project.siteLocation.includes("MANGLORE")) return "Coastal Refinery, Karnataka";
    if (project.siteLocation.includes("MUMBAI")) return "Petrochemical Complex, Maharashtra";
    if (project.siteLocation.includes("VIZAG")) return "Refinery, Andhra Pradesh";
    if (project.siteLocation.includes("BHATINDA")) return "Refinery, Punjab";
    if (project.siteLocation.includes("HALDIA")) return "Petrochemical Hub, West Bengal";
    if (project.siteLocation.includes("COCHI")) return "Refinery, Kerala";
    return "Major Indian Refinery Facility";
  }
  return project.siteLocation;
}

export const projectsData: ProjectRecord[] = [
  {
    id: 1,
    srNo: 1,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "SAP 3 Unit, Hindalco Industries Ltd., Dahej, Gujarat",
    jobDescription: "Manpower assistance for catalyst unloading, loading, and segregation",
    period: "4.5 Days",
    month: "Nov",
    year: 2014,
    manpowerQty: 60,
    category: "Catalyst & Reactors"
  },
  {
    id: 2,
    srNo: 2,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "FCCU SEZ, RIL Jamnagar, Gujarat",
    jobDescription: "Manpower assistance for heat exchangers & vessels",
    period: "30 Days",
    month: "Mar",
    year: 2015,
    manpowerQty: 140,
    category: "Exchangers & Heat Transfer"
  },
  {
    id: 3,
    srNo: 3,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "FCCU SEZ, RIL Jamnagar, Gujarat",
    jobDescription: "Manpower assistance for exchangers & vessel maintenance",
    period: "15 Days",
    month: "Mar",
    year: 2015,
    manpowerQty: 200,
    category: "Exchangers & Heat Transfer"
  },
  {
    id: 4,
    srNo: 4,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "PRIME-G, ARU & SWSU, HPCL Mumbai",
    jobDescription: "Manpower assistance for exchangers, vessel, column, AFC, valve servicing, all-over blinding & de-blinding",
    period: "18 Days",
    month: "Apr - May",
    year: 2015,
    manpowerQty: 250,
    category: "Integrated Shutdown"
  },
  {
    id: 5,
    srNo: 5,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "DHDS Block, HPCL Vizag, Andhra Pradesh",
    jobDescription: "Manpower assistance for exchangers, vessel, column, AFC, valve, LG/LT & spring supports, all-over blinding & de-blinding",
    period: "18 Days",
    month: "Jun - Jul",
    year: 2015,
    manpowerQty: 350,
    category: "Integrated Shutdown"
  },
  {
    id: 6,
    srNo: 6,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "FCCU / DHDS / SRU, Essar Oil Ltd., Vadinar, Gujarat",
    jobDescription: "Manpower assistance for exchangers, all-over blinding/de-blinding with hydrotest",
    period: "15 Days",
    month: "Oct",
    year: 2015,
    manpowerQty: 500,
    category: "Exchangers & Heat Transfer"
  },
  {
    id: 7,
    srNo: 7,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "Inox Dolvi Pen, Maharashtra",
    jobDescription: "Cold work insulation removal work",
    period: "15 Days",
    month: "Oct",
    year: 2015,
    manpowerQty: 133,
    category: "Specialized Maintenance"
  },
  {
    id: 8,
    srNo: 8,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "IGL Kashipur, Uttarakhand",
    jobDescription: "Manpower assisting for tubular reactor & exchangers",
    period: "10 Days",
    month: "Jan",
    year: 2016,
    manpowerQty: 125,
    category: "Catalyst & Reactors"
  },
  {
    id: 9,
    srNo: 9,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "HCU-1 & HGU-1, MRPL Mangalore, Karnataka",
    jobDescription: "Manpower assistance for assisting in AFC & exchangers",
    period: "15 Days",
    month: "Sep",
    year: 2016,
    manpowerQty: 130,
    category: "Exchangers & Heat Transfer"
  },
  {
    id: 10,
    srNo: 10,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "FCCU SEZ, RIL Jamnagar, Gujarat",
    jobDescription: "Manpower assistance for assisting in exchangers, vessels & coke removal",
    period: "15 Days",
    month: "Nov",
    year: 2016,
    manpowerQty: 200,
    category: "Columns & Vessels"
  },
  {
    id: 11,
    srNo: 11,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "VBU-2, MRPL Mangalore, Karnataka",
    jobDescription: "Manpower assistance for assisting in exchangers",
    period: "10 Days",
    month: "Feb",
    year: 2017,
    manpowerQty: 30,
    category: "Exchangers & Heat Transfer"
  },
  {
    id: 12,
    srNo: 12,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "CDU-3, MRPL Mangalore, Karnataka",
    jobDescription: "Manpower assistance for assisting in exchangers",
    period: "15 Days",
    month: "Apr",
    year: 2017,
    manpowerQty: 200,
    category: "Exchangers & Heat Transfer"
  },
  {
    id: 13,
    srNo: 13,
    client: "RADIANT HITECH ENGG. PVT. LTD.",
    siteLocation: "FCCU, IOCL Barauni, Bihar",
    jobDescription: "Manpower assistance for assisting in exchangers",
    period: "25 Days",
    month: "Jul",
    year: 2017,
    manpowerQty: 120,
    category: "Exchangers & Heat Transfer"
  },
  {
    id: 14,
    srNo: 14,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "HCU-2, MRPL Mangalore, Karnataka",
    jobDescription: "Manpower assistance for exchangers, vessel, column, AFC, valves, all-over blinding & de-blinding",
    period: "18 Days",
    month: "Aug",
    year: 2017,
    manpowerQty: 250,
    category: "Integrated Shutdown"
  },
  {
    id: 15,
    srNo: 15,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "CDU-1, MRPL Mangalore, Karnataka",
    jobDescription: "Manpower assistance for exchangers all-over blinding & de-blinding",
    period: "18 Days",
    month: "Sep",
    year: 2017,
    manpowerQty: 250,
    category: "Exchangers & Heat Transfer"
  },
  {
    id: 16,
    srNo: 16,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "Inox Dolvi Pen, Maharashtra",
    jobDescription: "Cold work insulation removal work",
    period: "5 Days",
    month: "Oct",
    year: 2017,
    manpowerQty: 250,
    category: "Specialized Maintenance"
  },
  {
    id: 17,
    srNo: 17,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "PFCCU, MRPL Mangalore, Karnataka",
    jobDescription: "Manpower assistance for assisting in exchangers",
    period: "10 Days",
    month: "Jan",
    year: 2018,
    manpowerQty: 50,
    category: "Exchangers & Heat Transfer"
  },
  {
    id: 18,
    srNo: 18,
    client: "RADIANT HITECH ENGG. PVT. LTD.",
    siteLocation: "HPL Haldia, West Bengal",
    jobDescription: "Naphtha cracker exchangers turnaround job",
    period: "18 Days",
    month: "May",
    year: 2018,
    manpowerQty: 100,
    category: "Exchangers & Heat Transfer"
  },
  {
    id: 19,
    srNo: 19,
    client: "SILPI ENGG. PVT. LTD.",
    siteLocation: "FCCU, BPCL Kochi, Kerala",
    jobDescription: "FCCU column, vessels & exchangers maintenance",
    period: "22 Days",
    month: "Aug",
    year: 2018,
    manpowerQty: 100,
    category: "Columns & Vessels"
  },
  {
    id: 20,
    srNo: 20,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "DHDT / VGO MHC / FCCU DHDS & SRU, Nayara Energy Ltd., Vadinar",
    jobDescription: "Manpower assistance for assisting in exchangers",
    period: "18 Days",
    month: "Nov",
    year: 2018,
    manpowerQty: 500,
    category: "Exchangers & Heat Transfer"
  },
  {
    id: 21,
    srNo: 21,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "MR Loup Unit, HPCL Mumbai",
    jobDescription: "Manpower assistance for assisting in heater, column, drums, vessels, filter, exchangers, AFC, relief valve, control valve & spring supports",
    period: "18 Days",
    month: "Jan",
    year: 2019,
    manpowerQty: 173,
    category: "Integrated Shutdown"
  },
  {
    id: 22,
    srNo: 22,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "OMPL Mangalore, Karnataka",
    jobDescription: "Manpower assistance for heater, column, drums, vessels, filter, exchangers, AFC, relief valve, control valve & spring supports",
    period: "18 Days",
    month: "Mar - Apr",
    year: 2019,
    manpowerQty: 281,
    category: "Integrated Shutdown"
  },
  {
    id: 23,
    srNo: 23,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "MRPL Mangalore, Karnataka",
    jobDescription: "Manpower assistance for heater, column, drums, vessels, filter, exchangers, AFC, relief valve, control valve & spring supports",
    period: "18 Days",
    month: "Mar - Apr",
    year: 2019,
    manpowerQty: 144,
    category: "Integrated Shutdown"
  },
  {
    id: 24,
    srNo: 24,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "G.G. Refinery, HMEL Bhatinda, Punjab",
    jobDescription: "Catalyst loading & unloading of VGO/DHDT/HMU/SRU & PPU, coke removal of LTHE/FCCU and VGO/DHDT breechlock",
    period: "18 Days",
    month: "Jan",
    year: 2021,
    manpowerQty: 300,
    category: "Catalyst & Reactors"
  },
  {
    id: 25,
    srNo: 25,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "HPCL Mumbai",
    jobDescription: "Manpower assistance for drums, vessels, tower & exchangers of CCR/ISOM/PRIME-G & DHT with all-over blinding/de-blinding & hydrotest",
    period: "30 Days",
    month: "Feb",
    year: 2021,
    manpowerQty: 100,
    category: "Integrated Shutdown"
  },
  {
    id: 26,
    srNo: 26,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "RIL Patalganga, Raigarh, Maharashtra",
    jobDescription: "Manpower assistance for column/vessels & exchangers random packing unloading & loading, all-over blinding/de-blinding with hydrotest",
    period: "18 Days",
    month: "Jun",
    year: 2021,
    manpowerQty: 150,
    category: "Columns & Vessels"
  },
  {
    id: 27,
    srNo: 27,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "HPCL Vizag, Andhra Pradesh",
    jobDescription: "Manpower assistance for CDU-3 vessels, exchangers & column",
    period: "18 Days",
    month: "Jun",
    year: 2021,
    manpowerQty: 150,
    category: "Columns & Vessels"
  },
  {
    id: 28,
    srNo: 28,
    client: "RADIANT HITECH ENGG. PVT. LTD.",
    siteLocation: "HPL Haldia, West Bengal",
    jobDescription: "Manpower assistance for naphtha cracker exchangers job",
    period: "18 Days",
    month: "Jul",
    year: 2021,
    manpowerQty: 100,
    category: "Exchangers & Heat Transfer"
  },
  {
    id: 29,
    srNo: 29,
    client: "CR ASIA INDIA PVT. LTD.",
    siteLocation: "MRPL Mangalore, Karnataka",
    jobDescription: "Manpower assistance for CDU-3 vessels, exchangers & column",
    period: "18 Days",
    month: "Aug",
    year: 2021,
    manpowerQty: 100,
    category: "Columns & Vessels"
  },
  {
    id: 30,
    srNo: 30,
    client: "CR3 INDIA PVT. LTD.",
    siteLocation: "RIL SEZ CDU-3, Jamnagar, Gujarat",
    jobDescription: "Manpower assistance for CDU-3 exchangers",
    period: "22 Days",
    month: "Sep",
    year: 2022,
    manpowerQty: 150,
    category: "Exchangers & Heat Transfer"
  },
  {
    id: 31,
    srNo: 31,
    client: "CR3 INDIA PVT. LTD.",
    siteLocation: "RIL SEZ CDU-3, Jamnagar, Gujarat",
    jobDescription: "Manpower assistance for CDU-3 air fin coolers (AFC)",
    period: "22 Days",
    month: "Sep",
    year: 2022,
    manpowerQty: 67,
    category: "Exchangers & Heat Transfer"
  },
  {
    id: 32,
    srNo: 32,
    client: "CR3 INDIA PVT. LTD.",
    siteLocation: "RIL SEZ FCCU, Jamnagar, Gujarat",
    jobDescription: "Manpower assistance for FCCU reactor & regenerator catalyst loading, unloading & coke removal",
    period: "10 Days",
    month: "Sep",
    year: 2022,
    manpowerQty: 200,
    category: "Catalyst & Reactors"
  },
  {
    id: 33,
    srNo: 33,
    client: "CR3 INDIA PVT. LTD.",
    siteLocation: "RIL SEZ FCCU, Jamnagar, Gujarat",
    jobDescription: "Manpower assistance for FCCU main column trays cleaning & coke removal",
    period: "23 Days",
    month: "Sep",
    year: 2022,
    manpowerQty: 200,
    category: "Columns & Vessels"
  },
  {
    id: 34,
    srNo: 34,
    client: "CR3 INDIA PVT. LTD.",
    siteLocation: "OMPL Mangalore, Karnataka",
    jobDescription: "Block-3 manpower assistance for exchangers all-over blinding/de-blinding with hydrotest",
    period: "10 Days",
    month: "Sep",
    year: 2022,
    manpowerQty: 30,
    category: "Exchangers & Heat Transfer"
  },
  {
    id: 35,
    srNo: 35,
    client: "CR3 INDIA PVT. LTD.",
    siteLocation: "Air Products, Kochi, Kerala",
    jobDescription: "Manpower assistance for exchangers & valves all-over blinding/de-blinding with hydrotest",
    period: "20 Days",
    month: "Oct",
    year: 2022,
    manpowerQty: 150,
    category: "Exchangers & Heat Transfer"
  },
  {
    id: 36,
    srNo: 36,
    client: "CR3 INDIA PVT. LTD.",
    siteLocation: "CPCL Chennai, Tamil Nadu",
    jobDescription: "Manpower assistance for exchangers, column & vessels all-over blinding/de-blinding with hydrotest",
    period: "15 Days",
    month: "Oct",
    year: 2022,
    manpowerQty: 100,
    category: "Integrated Shutdown"
  },
  {
    id: 37,
    srNo: 37,
    client: "CR3 INDIA PVT. LTD.",
    siteLocation: "Nayara Energy Ltd., Vadinar, Gujarat",
    jobDescription: "VGO / CDU-1 & utility manpower assistance for exchangers & AFC all-over blinding/de-blinding with hydrotest",
    period: "15 Days",
    month: "Nov",
    year: 2022,
    manpowerQty: 350,
    category: "Exchangers & Heat Transfer"
  },
  {
    id: 38,
    srNo: 38,
    client: "RADIANT HITECH ENGG. PVT. LTD.",
    siteLocation: "Nayara Energy Ltd., Vadinar, Gujarat",
    jobDescription: "DHDT manpower assistance for exchangers & AFC all-over blinding/de-blinding with hydrotest",
    period: "15 Days",
    month: "Nov",
    year: 2022,
    manpowerQty: 130,
    category: "Exchangers & Heat Transfer"
  },
  {
    id: 39,
    srNo: 39,
    client: "CR3 INDIA PVT. LTD.",
    siteLocation: "DHDS Block, HPCL Vizag, Andhra Pradesh",
    jobDescription: "Manpower assistance for exchangers, vessel, column, AFC, valve, LG/LT & spring supports, all-over blinding & de-blinding",
    period: "18 Days",
    month: "Jan",
    year: 2023,
    manpowerQty: 275,
    category: "Integrated Shutdown"
  },
  {
    id: 40,
    srNo: 40,
    client: "CR3 INDIA PVT. LTD.",
    siteLocation: "NRL (Numaligarh Refinery Ltd.), Assam",
    jobDescription: "DCU/H2U/HCU/MSU/NSU/OM manpower assistance for exchangers & all-over blinding/de-blinding with hydrotest",
    period: "22 Days",
    month: "Mar - Apr",
    year: 2023,
    manpowerQty: 225,
    category: "Exchangers & Heat Transfer"
  },
  {
    id: 41,
    srNo: 41,
    client: "CR3 INDIA PVT. LTD.",
    siteLocation: "OMPL Mangalore, Karnataka",
    jobDescription: "Block 2 & 3 manpower assistance for exchangers, column, vessels, AFC all-over blinding/de-blinding with hydrotest",
    period: "30 Days",
    month: "Jul - Aug",
    year: 2023,
    manpowerQty: 360,
    category: "Integrated Shutdown"
  },
  {
    id: 42,
    srNo: 42,
    client: "CR3 INDIA PVT. LTD.",
    siteLocation: "MRPL Mangalore, Karnataka",
    jobDescription: "HCU manpower assistance for exchangers, column, vessels, AFC all-over blinding/de-blinding with hydrotest",
    period: "30 Days",
    month: "Jul - Aug",
    year: 2023,
    manpowerQty: 350,
    category: "Integrated Shutdown"
  },
  {
    id: 43,
    srNo: 43,
    client: "CR3 INDIA PVT. LTD.",
    siteLocation: "MRPL Mangalore, Karnataka",
    jobDescription: "CHTU & CDU manpower assistance for exchangers, column, vessels, AFC all-over blinding/de-blinding with hydrotest",
    period: "30 Days",
    month: "Jul - Aug",
    year: 2023,
    manpowerQty: 160,
    category: "Integrated Shutdown"
  },
  {
    id: 44,
    srNo: 44,
    client: "CR3 INDIA PVT. LTD.",
    siteLocation: "RIL FCCU, Jamnagar, Gujarat",
    jobDescription: "FCCU manpower assistance for FCCU main column trays cleaning",
    period: "18 Days",
    month: "Sep - Oct",
    year: 2023,
    manpowerQty: 130,
    category: "Columns & Vessels"
  },
  {
    id: 45,
    srNo: 45,
    client: "RADIANT HITECH ENGG. PVT. LTD.",
    siteLocation: "RIL ROGS, Jamnagar, Gujarat",
    jobDescription: "ROGS manpower assistance for exchangers all-over blinding & de-blinding with hydrotest",
    period: "18 Days",
    month: "Sep - Oct",
    year: 2023,
    manpowerQty: 130,
    category: "Exchangers & Heat Transfer"
  },
  {
    id: 46,
    srNo: 46,
    client: "JECON ENGINEERS PVT. LTD.",
    siteLocation: "RIL Nagothane, Maharashtra",
    jobDescription: "Gas cracker unit manpower assistance for exchangers & vessels all-over blinding & de-blinding with hydrotest",
    period: "18 Days",
    month: "Apr - May",
    year: 2024,
    manpowerQty: 150,
    category: "Exchangers & Heat Transfer"
  },
  {
    id: 47,
    srNo: 47,
    client: "NIREEKSHA ENGITECH PVT. LTD.",
    siteLocation: "MRPL Mangalore, Karnataka",
    jobDescription: "SRU-2, 3, 7 manpower assistance for exchangers, column, vessels, AFC all-over blinding/de-blinding with hydrotest",
    period: "50 Days",
    month: "Apr - Jun",
    year: 2025,
    manpowerQty: 160,
    category: "Integrated Shutdown"
  },
  {
    id: 48,
    srNo: 48,
    client: "CR3 INDIA PVT. LTD.",
    siteLocation: "HMEL Bhatinda, Punjab",
    jobDescription: "Catalyst coke removal & cleaning services for FCCU unit",
    period: "30 Days",
    month: "Nov",
    year: 2025,
    manpowerQty: 120,
    category: "Catalyst & Reactors"
  },
  {
    id: 49,
    srNo: 49,
    client: "JECON ENGINEERING PVT. LTD.",
    siteLocation: "Nayara Energy Ltd., Vadinar, Gujarat",
    jobDescription: "HGU-1 & HGU-2 turnkey job: column, vessel, exchanger, reformer loop hydrotest",
    period: "40 Days",
    month: "Apr - May",
    year: 2026,
    manpowerQty: 400,
    category: "Integrated Shutdown"
  }
];
