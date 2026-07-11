import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui";
import { skillGroups, profile } from "@/lib/data";
import SkillsGrid from "./SkillsGrid";

export const metadata: Metadata = {
  title: "Skills",
  description: `Technical skill set of ${profile.name} across AI/ML, backend engineering and cloud tooling.`,
};

export default function SkillsPage() {
  return (
    <section className="section">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Skills"
          title="A full-stack view of my toolkit"
          description="From research-grade model training to shipping backend services, here's what I reach for day to day."
        />
        <SkillsGrid groups={skillGroups} />
      </div>
    </section>
  );
}
