import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import { PageHeader } from "@/components/layout/PageHeader";
import { CoreServiceAreas } from "@/components/services/CoreServiceAreas";
import { ServiceCatalog } from "@/components/services/ServiceCatalog";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Turnaround & Shutdown Services | JAY MATAJI CONSTRUCTION",
  description: "Specialized in refinery turnaround and shutdown business since 2014. Critical static equipment, heat exchangers, columns, reactors, fin-fan coolers, 700+ manpower, and specialized tooling."
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="Scope Catalog"
        title="Refinery Shutdown &amp; Turnaround Services"
        description="Established in 2014 specializing in critical static equipment, scaffolding, and reactor jobs across premier Indian and international refineries. Backed by 700+ manpower, dedicated tools, and daily progress trackers."
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="bg-[#EEF1F2] py-12 lg:py-20 border-b border-[#DCE2E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CoreServiceAreas />
          <ServiceCatalog services={servicesData} />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

