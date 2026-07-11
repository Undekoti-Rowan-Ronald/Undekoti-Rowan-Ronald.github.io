"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui";

type Project = {
  slug: string;
  title: string;
  description: string;
  achievements: string[];
  tech: string[];
  github: string;
  period: string;
};

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, idx) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: (idx % 2) * 0.1 }}
        >
          <GlassCard className="group flex h-full flex-col">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-xl font-semibold text-white">
                {project.title}
              </h3>
              <span className="whitespace-nowrap rounded-full bg-white/5 px-2.5 py-1 font-mono text-[11px] text-white/50">
                {project.period}
              </span>
            </div>

            <p className="mt-3 text-sm text-white/60">{project.description}</p>

            <ul className="mt-4 space-y-2">
              {project.achievements.map((a) => (
                <li key={a} className="flex gap-2 text-sm text-white/60">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-accent-cyan"
                  />
                  <span>{a}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/5 px-2.5 py-1 font-mono text-[11px] text-white/60"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3 pt-2">
              <Link
                href={project.github}
                target="_blank"
                className="glass inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold text-white transition group-hover:border-accent-cyan/40"
              >
                <Github size={14} /> Code
              </Link>
              <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-white/5 px-4 py-2 text-xs text-white/30">
                <ExternalLink size={14} /> Live Demo
              </span>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
