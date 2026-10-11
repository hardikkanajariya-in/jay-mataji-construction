import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { verifiedMetrics } from "@/data/company";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactCTA } from "@/components/home/ContactCTA";
import { IconCheckCircle, IconMapPin, IconChevronRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "About Us | Industrial Maintenance & Shutdown Contractor",
  description: "Established in 2014, Jay Mataji Construction provides specialized turnaround manpower, static equipment overhaul, and scaffolding services for major Indian refineries."
};

const keyRefineryHubs = [
  { name: "Jamnagar, Gujarat", desc: "FCCU, SEZ CDU-3, ROGS units turnaround contracts" },
  { name: "Mangalore, Karnataka", desc: "CDU, VBU, HCU, SRU blocks, OMPL and MRPL complexes" },
  { name: "Mumbai, Maharashtra", desc: "PRIME-G, ARU, SWSU, MR Loup, CCR/ISOM/DHT units" },
  { name: "Vizag, Andhra Pradesh", desc: "DHDS block and CDU-3 towers and exchangers" },
  { name: "Vadinar, Gujarat", desc: "VGO, CDU-1, DHDT, SRU and utility blocks at Nayara" },
  { name: "Bhatinda, Punjab", desc: "HMEL FCCU catalyst coke removal & breechlock work" },
  { name: "Barauni & Haldia", desc: "IOCL Barauni & HPL Haldia naphtha cracker exchangers" },
  { name: "Kochi, Kerala", desc: "BPCL Kochi FCCU columns & Air Products Kochi units" }
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="Company Overview"
        title="Industrial Turnaround Execution Since 2014"
        description="Jay Mataji Construction was established with a singular mission: to provide expert technical manpower and disciplined mechanical execution for complex static equipment maintenance, scaffolding, and reactor overhauls."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Historical Genesis Section */}
      <section className="bg-white py-16 lg:py-24 border-b border-[#DCE2E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeader
                badge="Origin & Focus"
                title="A Decade of Refinery Site Performance"
                description="Built on practical field competence in high-stakes turnaround environments."
                className="mb-6!"
              />

              <div className="space-y-4 text-sm sm:text-base text-[#5A6A78] leading-relaxed">
                <p>
                  Established in <strong>2014</strong>, <strong className="text-[#292929]">JAY MATAJI CONSTRUCTION</strong> was founded to meet the rigorous demands of India&apos;s refining and petrochemical sector during critical plant shutdowns. Turnarounds leave zero margin for error: every hour off-stream carries substantial commercial impact, demanding contractor crews with verified equipment familiarity and strict procedural compliance.
                </p>
                <p>
                  Since our inception, our personnel have executed multiple large turnaround and shutdown contracts in almost all major refineries across India, as well as selected overseas assignments. Our core strengths center on critical static equipment—heat exchangers, distillation towers, reactors, and furnaces—supported by dedicated mechanical tooling and rapid manpower mobilization.
                </p>
              </div>

              {/* Verified Stated Capabilities */}
              <div className="pt-4 border-t border-[#DCE2E5]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#292929] mb-3">
                  Documented Operational Tenets:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#292929]">
                  <div className="flex items-start gap-2.5">
                    <IconCheckCircle className="w-4 h-4 text-[#155497] flex-shrink-0 mt-0.5" />
                    <span>700+ technical personnel available on immediate call</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <IconCheckCircle className="w-4 h-4 text-[#155497] flex-shrink-0 mt-0.5" />
                    <span>In-house bolt tensioning, torque tools, and trackers</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <IconCheckCircle className="w-4 h-4 text-[#155497] flex-shrink-0 mt-0.5" />
                    <span>Pan-India refinery execution from Punjab to Kerala</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <IconCheckCircle className="w-4 h-4 text-[#155497] flex-shrink-0 mt-0.5" />
                    <span>Experience with tier-1 turnaround primes and EPCs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-[#DCE2E5] shadow-lg aspect-[4/3]">
                <Image
                  src="/images/scaffolding-column-maintenance.jpg"
                  alt="Industrial scaffolding erected around refinery column for shutdown maintenance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3.5 rounded-lg border border-[#DCE2E5]">
                  <div className="text-xs font-bold text-[#155497]">Engineered Site Execution</div>
                  <div className="text-[11px] text-[#5A6A78]">Modular scaffolding, confined space entry, and positive isolation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Metrics Counter Strip */}
      <section className="bg-[#EEF1F2] py-12 border-b border-[#DCE2E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {verifiedMetrics.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-[#DCE2E5] shadow-xs">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#155497]">
                  {item.value}
                </div>
                <div className="text-sm font-bold text-[#292929] mt-1">
                  {item.label}
                </div>
                <div className="text-xs text-[#5A6A78] mt-0.5">
                  {item.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Footprint Grid */}
      <section className="bg-white py-16 lg:py-24 border-b border-[#DCE2E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Geographical Reach"
            title="Refinery Outages Executed Across India"
            description="Our project register documents extensive on-site turnaround experience at premier petroleum refining and petrochemical complexes nationwide."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyRefineryHubs.map((hub) => (
              <div
                key={hub.name}
                className="bg-[#F8FAFC] p-5 rounded-xl border border-[#DCE2E5] hover:border-[#155497]/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-sm font-bold text-[#155497] mb-1.5">
                  <IconMapPin className="w-4 h-4 text-[#F28A00] flex-shrink-0" />
                  <span>{hub.name}</span>
                </div>
                <p className="text-xs text-[#5A6A78] leading-relaxed">
                  {hub.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects/"
              className="inline-flex items-center gap-2 bg-[#155497] hover:bg-[#123A68] text-white font-semibold px-6 py-3 rounded-md text-xs sm:text-sm shadow-xs transition-colors"
            >
              <span>Examine Historical Project Experience Register</span>
              <IconChevronRight className="w-4 h-4 text-[#F28A00]" />
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
