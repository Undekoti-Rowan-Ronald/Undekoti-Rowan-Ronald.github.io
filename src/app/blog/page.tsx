import type { Metadata } from "next";
import { SectionHeading, GlassCard } from "@/components/ui";
import { profile } from "@/lib/data";
import { Newspaper, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: `Upcoming AI and machine learning articles from ${profile.name}.`,
};

const upcoming = [
  "Distilling HuBERT: what actually survives compression",
  "Deploying computer vision models on Raspberry Pi 5 with OpenVINO",
  "QLoRA in practice: fine-tuning Gemma-2-2B on a single GPU",
];

export default function BlogPage() {
  return (
    <section className="section">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Blog"
          title="Writing, coming soon"
          description="This space is reserved for long-form notes on the AI and edge-computing work I'm doing."
        />
        <div className="mx-auto max-w-xl">
          <GlassCard hover={false} className="text-center">
            <Newspaper size={28} className="mx-auto mb-4 text-accent-cyan" />
            <h3 className="font-display text-lg font-semibold text-white">
              No posts published yet
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Articles on self-supervised audio models, edge AI deployment, and
              LLM fine-tuning are in the works.
            </p>
          </GlassCard>

          <div className="mt-8 space-y-3">
            {upcoming.map((title) => (
              <div
                key={title}
                className="glass flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/60"
              >
                <Clock size={14} className="shrink-0 text-accent-purple" />
                {title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
