import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { ProofStrip } from "@/components/home/ProofStrip";
import { ServicesPillars } from "@/components/home/ServicesPillars";
import { WorkflowSection } from "@/components/home/WorkflowSection";
import { ProjectsTeaser } from "@/components/home/ProjectsTeaser";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProofStrip />
      <ServicesPillars />
      <WorkflowSection />
      <ProjectsTeaser />
      <AboutSnippet />
      <ContactCTA />
    </>
  );
}
