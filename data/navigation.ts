export interface NavItem {
  label: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Project Experience", href: "/projects/" },
  { label: "Contact", href: "/contact/" }
];

export const footerQuickLinks: NavItem[] = [
  { label: "Company Profile", href: "/about/" },
  { label: "All Services", href: "/services/" },
  { label: "Project Archive (2014-2026)", href: "/projects/" },
  { label: "Enquiry & Mobilization", href: "/contact/" }
];

export const footerServiceLinks: NavItem[] = [
  { label: "Heat Exchanger Overhauls", href: "/services/#heat-exchangers" },
  { label: "Distillation Columns & Trays", href: "/services/#distillation-columns" },
  { label: "Reactor Catalyst Handling", href: "/services/#reactors-regenerators" },
  { label: "Heater & Boiler Blasting", href: "/services/#heaters-and-furnaces" },
  { label: "Valves & Pump Servicing", href: "/services/#industrial-valves" },
  { label: "Engineered Scaffolding", href: "/services/#engineered-scaffolding" }
];
