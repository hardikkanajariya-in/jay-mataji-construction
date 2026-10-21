import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, servicesData } from "@/data/services";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactCTA } from "@/components/home/ContactCTA";
import { IconCheckCircle, IconChevronRight, IconArrowRight } from "@/components/ui/Icons";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found | JAY MATAJI CONSTRUCTION" };
  }

  return {
    title: `${service.title} | JAY MATAJI CONSTRUCTION`,
    description: service.shortDescription
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData
    .filter((item) => item.category === service.category && item.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        badge={service.categoryLabel}
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={[
          { label: "Services", href: "/services/" },
          { label: service.title }
        ]}
      />

      <section className="bg-white py-12 lg:py-16 border-b border-[#DCE2E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-[#DCE2E5] shadow-xs bg-slate-100">
                <Image
                  src={service.imagePath}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#155497] mb-3">
                  Scope Overview
                </h2>
                <p className="text-sm sm:text-base text-[#5A6A78] leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#155497] mb-3">
                  Documented Scope Activities
                </h2>
                <ul className="space-y-2.5">
                  {service.documentedActivities.map((activity) => (
                    <li key={activity} className="flex items-start gap-2.5 text-sm text-[#292929]">
                      <IconCheckCircle className="w-4 h-4 text-[#F28A00] flex-shrink-0 mt-0.5" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#155497] mb-3">
                  Equipment &amp; Systems Handled
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.equipmentHandled.map((equipment) => (
                    <li
                      key={equipment}
                      className="text-xs sm:text-sm text-[#292929] bg-[#F8FAFC] border border-[#DCE2E5] rounded-lg px-3 py-2"
                    >
                      {equipment}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-[#F28A00] hover:bg-[#d97c00] text-white font-bold px-6 py-3 rounded-lg text-sm shadow-md transition-colors"
              >
                <span>Request Mobilization for This Scope</span>
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="bg-[#EEF1F2] py-12 lg:py-16 border-b border-[#DCE2E5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#155497] block mb-1">
                  Related Scopes
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#292929]">
                  More in {service.categoryLabel}
                </h2>
              </div>
              <Link
                href="/services/"
                className="inline-flex items-center gap-1 text-sm font-bold text-[#155497] hover:text-[#123A68]"
              >
                <span>Back to full catalog</span>
                <IconChevronRight className="w-4 h-4 text-[#F28A00]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((related) => (
                <Link
                  key={related.id}
                  href={`/services/${related.slug}/`}
                  className="group bg-white rounded-xl border border-[#DCE2E5] p-5 shadow-xs hover:border-[#155497]/50 hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#155497] focus-visible:ring-offset-2"
                >
                  <h3 className="text-sm font-bold text-[#292929] group-hover:text-[#155497] transition-colors mb-2 leading-snug">
                    {related.title}
                  </h3>
                  <p className="text-xs text-[#5A6A78] line-clamp-3 leading-relaxed">
                    {related.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
    </>
  );
}
