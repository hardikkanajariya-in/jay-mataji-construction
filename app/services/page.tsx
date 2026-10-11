import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceCatalog } from "@/components/services/ServiceCatalog";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Specialized Shutdown Services | Static & Rotating Equipment",
  description: "Comprehensive turnaround maintenance services: Heat exchangers, columns, reactors, furnaces, pumps, valves, compressors, scaffolding, and 700+ manpower."
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="Scope Catalog"
        title="Refinery Shutdown &amp; Maintenance Services"
        description="Comprehensive mechanical execution packages for planned turnaround outages. Grounded strictly in our documented equipment experience across premier Indian process units."
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="bg-[#EEF1F2] py-12 lg:py-20 border-b border-[#DCE2E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceCatalog services={servicesData} />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

