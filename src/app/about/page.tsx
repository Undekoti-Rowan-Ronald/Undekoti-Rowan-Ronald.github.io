import type { Metadata } from "next";
import { SectionHeading, GlassCard } from "@/components/ui";
import { profile, education, experience } from "@/lib/data";
import { GraduationCap, Briefcase, Cpu, Code2, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name} — background, passions and journey into AI engineering.`,
};

const passions = [
  { icon: Cpu, label: "Machine Learning" },
  { icon: FlaskConical, label: "LLMs" },
  { icon: Code2, label: "Computer Vision" },
  { icon: Cpu, label: "Edge AI" },
  { icon: Code2, label: "Java Backend" },
  { icon: Code2, label: "Spring Boot" },
  { icon: FlaskConical, label: "Research" },
];

const timeline = [
  ...education.map((e) => ({
    kind: "Education",
    title: e.degree,
    org: e.school,
    period: e.period,
    detail: e.detail,
  })),
  ...experience.map((e) => ({
    kind: "Experience",
    title: e.role,
    org: e.company,
    period: e.period,
    detail: e.points[0],
  })),
].sort((a, b) => (a.period > b.period ? -1 : 1));

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="About"
          title="Hi, I'm Rowan"
          description="An AI engineer who likes taking research out of the notebook and onto real hardware."
        />

        <div className="mx-auto max-w-3xl text-center text-white/70">
          <p>{profile.summary}</p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {passions.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/70"
            >
              <Icon size={14} className="text-accent-cyan" /> {label}
            </span>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="mb-8 text-center font-display text-2xl font-semibold text-white">
            Education &amp; Internships
          </h3>
          <ol className="relative mx-auto max-w-2xl border-l border-white/10 pl-8">
            {timeline.map((entry, idx) => (
              <li key={idx} className="mb-10 last:mb-0">
                <span className="absolute -left-[9px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-grad-primary">
                  {entry.kind === "Education" ? (
                    <GraduationCap size={10} className="text-white" />
                  ) : (
                    <Briefcase size={10} className="text-white" />
                  )}
                </span>
                <GlassCard hover={false} className="!p-5">
                  <p className="font-mono text-xs uppercase tracking-wide text-accent-cyan">
                    {entry.period} · {entry.kind}
                  </p>
                  <h4 className="mt-1 font-display text-lg font-semibold text-white">
                    {entry.title}
                  </h4>
                  <p className="text-sm text-white/50">{entry.org}</p>
                  <p className="mt-2 text-sm text-white/60">{entry.detail}</p>
                </GlassCard>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
