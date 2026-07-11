import type { Metadata } from "next";
import { SectionHeading, GlassCard } from "@/components/ui";
import { experience, projects, profile } from "@/lib/data";
import { Briefcase, FolderKanban, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience",
  description: `Professional experience, project work and achievements of ${profile.name}.`,
};

export default function ExperiencePage() {
  return (
    <section className="section">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Experience"
          title="Where the work has happened"
          description="Internship experience, hands-on project work, and the measurable wins along the way."
        />

        <div className="mb-16">
          <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-semibold text-white">
            <Briefcase size={20} className="text-accent-cyan" /> Internships
          </h3>
          <div className="space-y-6">
            {experience.map((exp) => (
              <GlassCard key={exp.company} hover={false}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-display text-lg font-semibold text-white">
                    {exp.role} · {exp.company}
                  </h4>
                  <span className="font-mono text-xs text-white/40">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-white/50">{exp.location}</p>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-white/60">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-semibold text-white">
            <FolderKanban size={20} className="text-accent-purple" /> Project Work
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <GlassCard key={p.slug} hover={false} className="!p-5">
                <p className="font-mono text-xs text-white/40">{p.period}</p>
                <h4 className="mt-1 font-display text-base font-semibold text-white">
                  {p.title}
                </h4>
                <p className="mt-2 text-sm text-white/60">{p.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-semibold text-white">
            <Trophy size={20} className="text-accent-blue" /> Achievements
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <GlassCard hover={false} className="!p-5 text-sm text-white/60">
              Reduced deployment-critical bugs by 20% through systematic validation
              protocols at Valeo.
            </GlassCard>
            <GlassCard hover={false} className="!p-5 text-sm text-white/60">
              Cut manual engineering tasks by 30% with LLM + RAG workflow automation.
            </GlassCard>
            <GlassCard hover={false} className="!p-5 text-sm text-white/60">
              Published a CRC Press book chapter on fine-tuning Gemma-2-2B for
              mathematical reasoning.
            </GlassCard>
            <GlassCard hover={false} className="!p-5 text-sm text-white/60">
              Reached 0.72% EER on ASVspoof 2019 — 15% better than multilingual
              baselines.
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
