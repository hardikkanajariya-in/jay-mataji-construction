import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectExplorer } from "@/components/projects/ProjectExplorer";
import { ContactCTA } from "@/components/home/ContactCTA";
import { IconCalendar, IconUsers, IconMapPin, IconShield } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Project Experience (2014–2026) | Verified Refinery Register",
  description: "Explore 49 documented turnaround, shutdown, and equipment overhaul contracts across major Indian refineries including Jamnagar, Mangalore, Mumbai, Vizag, and Vadinar."
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        badge="Historical Register"
        title="Documented Refinery Turnaround Contracts"
        description="A transparent, searchable record of 49 major shutdown scopes executed from 2014 through 2026 across premier Indian refineries and petrochemical facilities."
        breadcrumbs={[{ label: "Project Experience" }]}
      />

      {/* Main Interactive Explorer */}
      <section className="bg-[#EEF1F2] py-12 lg:py-20 border-b border-[#DCE2E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectExplorer />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
