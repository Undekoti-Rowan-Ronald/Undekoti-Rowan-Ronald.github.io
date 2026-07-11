import type { Metadata } from "next";
import { SectionHeading, GlassCard } from "@/components/ui";
import { publications, researchInterests, futureWork, profile } from "@/lib/data";
import { BookOpen, Telescope, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Research",
  description: `Publications, research interests and future work by ${profile.name} in AI and audio forensics.`,
};

export default function ResearchPage() {
  return (
    <section className="section">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Research"
          title="Publications & ongoing research"
          description="Work on self-supervised audio forensics and efficient LLM reasoning, written up for peer review."
        />

        <div className="mb-16 space-y-6">
          {publications.map((pub) => (
            <GlassCard key={pub.title} hover={false}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="glass flex h-9 w-9 items-center justify-center rounded-lg text-accent-cyan">
                  <BookOpen size={16} />
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-wide text-white/50">
                  {pub.type} · {pub.period}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {pub.title}
              </h3>
              <p className="mt-2 text-sm text-white/60">{pub.authors}</p>
              <p className="text-sm text-white/50">{pub.venue}</p>
              <p className="mt-1 font-mono text-xs text-white/40">{pub.detail}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <GlassCard hover={false}>
            <div className="mb-4 flex items-center gap-2">
              <Telescope size={18} className="text-accent-purple" />
              <h3 className="font-display text-lg font-semibold text-white">
                Research Interests
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-white/60">
              {researchInterests.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="text-accent-cyan">—</span> {r}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard hover={false}>
            <div className="mb-4 flex items-center gap-2">
              <Rocket size={18} className="text-accent-blue" />
              <h3 className="font-display text-lg font-semibold text-white">
                Future Work
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-white/60">
              {futureWork.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="text-accent-cyan">—</span> {r}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
