import type { Metadata } from "next";
import { SectionHeading, GlassCard } from "@/components/ui";
import { profile, socials } from "@/lib/data";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}.`,
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          description="Open to full-time AI/ML engineering roles, research collaborations, and interesting problems in general."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <GlassCard hover={false} className="flex items-center gap-4">
              <span className="glass flex h-11 w-11 items-center justify-center rounded-xl text-accent-cyan">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-white/40">
                  Email
                </p>
                <a
                  href={socials.email}
                  className="text-sm text-white hover:text-accent-cyan"
                >
                  {profile.email}
                </a>
              </div>
            </GlassCard>

            <GlassCard hover={false} className="flex items-center gap-4">
              <span className="glass flex h-11 w-11 items-center justify-center rounded-xl text-accent-purple">
                <Linkedin size={18} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-white/40">
                  LinkedIn
                </p>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  className="text-sm text-white hover:text-accent-cyan"
                >
                  undekoti-rowan-ronald
                </a>
              </div>
            </GlassCard>

            <GlassCard hover={false} className="flex items-center gap-4">
              <span className="glass flex h-11 w-11 items-center justify-center rounded-xl text-accent-blue">
                <Github size={18} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-white/40">
                  GitHub
                </p>
                <a
                  href={socials.github}
                  target="_blank"
                  className="text-sm text-white hover:text-accent-cyan"
                >
                  Undekoti-Rowan-Ronald
                </a>
              </div>
            </GlassCard>

            <GlassCard hover={false} className="flex items-center gap-4">
              <span className="glass flex h-11 w-11 items-center justify-center rounded-xl text-accent-cyan">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-white/40">
                  Location
                </p>
                <p className="text-sm text-white">{profile.location}</p>
              </div>
            </GlassCard>
          </div>

          <GlassCard hover={false}>
            <ContactForm />
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
