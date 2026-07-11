import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui";
import { projects, profile } from "@/lib/data";
import ProjectsGrid from "./ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description: `Featured AI, ML and edge-computing projects by ${profile.name}.`,
};

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I've built end to end"
          description="Each project pairs a research idea with a working, measurable outcome."
        />
        <ProjectsGrid projects={projects} />
      </div>
    </section>
  );
}
