import type { Metadata } from "next";
import { SectionHeading, GlassCard } from "@/components/ui";
import { certifications, profile } from "@/lib/data";
import { Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Certifications",
  description: `Certifications earned by ${profile.name}.`,
};

export default function CertificationsPage() {
  return (
    <section className="section">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & coursework"
          description="Update this list with your verified certificates, issue dates and credential links."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <GlassCard key={cert.title}>
              <span className="glass mb-4 flex h-10 w-10 items-center justify-center rounded-lg text-accent-cyan">
                <Award size={18} />
              </span>
              <h3 className="font-display text-base font-semibold text-white">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm text-white/50">{cert.issuer}</p>
              <p className="mt-2 text-sm text-white/60">{cert.note}</p>
            </GlassCard>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-white/30">
          Placeholder entries — swap in your verified certificate names, issuers,
          and credential IDs before publishing.
        </p>
      </div>
    </section>
  );
}
