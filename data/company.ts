export interface CompanyProfile {
  name: string;
  shortName: string;
  tagline: string;
  establishedYear: number;
  statedManpowerCapacity: string;
  totalDocumentedProjects: number;
  contactEmail: string;
  contactPhone: string;
  headquarters: string;
  coverage: string;
  operatingPhilosophy: string;
}

export const companyData: CompanyProfile = {
  name: "JAY MATAJI CONSTRUCTION",
  shortName: "JMC",
  tagline: "Shutdown & Maintenance Solutions",
  establishedYear: 2014,
  statedManpowerCapacity: "700+ technical personnel at any time, with rapid scalability per turnaround scope",
  totalDocumentedProjects: 49,
  contactEmail: "contact@jaymatajiconstruction.com", // Configurable production mailbox
  contactPhone: "+91 98765 43210", // Client to provide final confirmed official hotline
  headquarters: "Gujarat, India",
  coverage: "Pan-India Refineries & Petrochemical Complexes (Jamnagar, Mumbai, Mangalore, Vizag, Vadinar, Bhatinda, Barauni, Haldia, Kochi, Assam, Nagothane)",
  operatingPhilosophy: "Dependable turnaround execution, mechanical precision, and experienced industrial manpower deployed to meet strict refinery shutdown windows."
};

export const verifiedMetrics = [
  {
    label: "Year Established",
    value: "2014",
    subtext: "12+ years of turnaround & maintenance focus"
  },
  {
    label: "Available Manpower",
    value: "700+",
    subtext: "Skilled technicians on immediate call"
  },
  {
    label: "Documented Shutdowns",
    value: "49+",
    subtext: "Major refinery units from 2014 to 2026"
  },
  {
    label: "Refinery Footprint",
    value: "Pan-India",
    subtext: "Executing across 10+ states & premier operators"
  }
];
