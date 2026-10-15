export interface CompanyProfile {
  name: string;
  shortName: string;
  tagline: string;
  contactPerson: string;
  establishedYear: number;
  statedManpowerCapacity: string;
  totalDocumentedProjects: number;
  contactEmail: string;
  additionalEmail: string;
  contactPhone: string;
  contactPhoneFormatted: string;
  secondaryPhone: string;
  secondaryPhoneFormatted: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  headquarters: string;
  coverage: string;
  operatingPhilosophy: string;
}

export const companyData: CompanyProfile = {
  name: "Jay Mataji Construction",
  shortName: "JMC",
  tagline: "Shutdown & Maintenance Solutions",
  contactPerson: "Sanjay Harshalia",
  establishedYear: 2014,
  statedManpowerCapacity: "700+ technical personnel at any time, with rapid scalability per turnaround scope",
  totalDocumentedProjects: 49,
  contactEmail: "sanjayharshalia@jaymatajiconstruction.com",
  additionalEmail: "sanjayharshalia200@gmail.com",
  contactPhone: "9033539524",
  contactPhoneFormatted: "+91 90335 39524",
  secondaryPhone: "8511144006",
  secondaryPhoneFormatted: "+91 85111 44006",
  address: {
    line1: "A-23, Amrapali Residency",
    line2: "Opp. Giriraj Nagar, Bajwa",
    city: "Vadodara",
    state: "Gujarat",
    pincode: "391310",
    full: "A-23, Amrapali Residency, Opp. Giriraj Nagar, Bajwa, Vadodara, Gujarat – 391310"
  },
  headquarters: "Vadodara, Gujarat, India",
  coverage: "Pan-India Refineries & Petrochemical Complexes (Jamnagar, Mumbai, Mangalore, Vizag, Vadinar, Bhatinda, Barauni, Haldia, Kochi, Assam, Nagothane)",
  operatingPhilosophy: "Dependable turnaround execution, routine & emergency plant maintenance, mechanical precision, and experienced industrial manpower deployed to meet strict industrial windows."
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
