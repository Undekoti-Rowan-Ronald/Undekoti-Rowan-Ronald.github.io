"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { profile, projects, skillGroups } from "@/lib/data";
import { GlassCard, SectionHeading, AnimatedCounter } from "@/components/ui";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="section relative flex min-h-[88vh] items-center !pt-24">
        <div className="container-narrow grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >
            <motion.span
              variants={item}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan"
            >
              Available for full-time roles · {profile.location}
            </motion.span>

            <motion.h1
              variants={item}
              className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.div
              variants={item}
              className="mt-4 flex flex-wrap justify-center gap-x-2 gap-y-1 font-display text-lg text-white/70 lg:justify-start sm:text-xl"
            >
              {profile.titles.map((title, i) => (
                <span key={title} className="flex items-center gap-2">
                  <span className={i === 0 ? "text-gradient font-semibold" : ""}>
                    {title}
                  </span>
                  {i < profile.titles.length - 1 && (
                    <span className="text-white/20">/</span>
                  )}
                </span>
              ))}
            </motion.div>

            <motion.p
              variants={item}
              className="mx-auto mt-6 max-w-xl text-balance text-white/60 lg:mx-0"
            >
              {profile.subtitle}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              <a
                href={profile.resumeFile}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-grad-primary bg-[length:200%_200%] px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:animate-gradient-x hover:scale-[1.03]"
              >
                <Download size={16} /> Download Resume
              </a>
              <Link
                href={profile.github}
                target="_blank"
                className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.03]"
              >
                <Github size={16} /> GitHub
              </Link>
              <Link
                href={profile.linkedin}
                target="_blank"
                className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.03]"
              >
                <Linkedin size={16} /> LinkedIn
              </Link>
              <Link
                href="/contact"
                className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.03]"
              >
                <Mail size={16} /> Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated profile illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80"
          >
            <div className="absolute inset-0 animate-float rounded-full bg-grad-primary opacity-30 blur-3xl" />
            <div className="glass-strong relative flex h-full w-full items-center justify-center rounded-full">
              <svg
                viewBox="0 0 200 200"
                className="h-2/3 w-2/3 animate-float"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#4f7bff" />
                    <stop offset="55%" stopColor="#9b5cff" />
                    <stop offset="100%" stopColor="#4fd6ff" />
                  </linearGradient>
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="url(#ringGrad)"
                  strokeWidth="3"
                  strokeDasharray="8 10"
                />
                <circle cx="100" cy="100" r="46" fill="url(#ringGrad)" opacity="0.15" />
                <circle cx="100" cy="60" r="6" fill="#4fd6ff" />
                <circle cx="145" cy="120" r="6" fill="#9b5cff" />
                <circle cx="60" cy="130" r="6" fill="#4f7bff" />
                <line x1="100" y1="60" x2="145" y2="120" stroke="#ffffff33" />
                <line x1="145" y1="120" x2="60" y2="130" stroke="#ffffff33" />
                <line x1="60" y1="130" x2="100" y2="60" stroke="#ffffff33" />
                <text
                  x="100"
                  y="106"
                  textAnchor="middle"
                  fontSize="34"
                  fontFamily="var(--font-display)"
                  fill="#ffffff"
                  fontWeight="700"
                >
                  RR
                </text>
              </svg>
            </div>
          </motion.div>
        </div>
      </section>


      {/* SNAPSHOT */}
      <section className="section">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Snapshot"
            title="Research-grade models, shipped to real devices"
            description="From self-supervised speech models to edge-optimized detection pipelines, I care about work that survives contact with production."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <GlassCard>
              <h3 className="font-display text-lg font-semibold text-white">
                Research
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Self-supervised audio forensics, published with CRC Press, plus
                ongoing work comparing HuBERT and XLS-R for deepfake detection.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-display text-lg font-semibold text-white">
                Edge AI
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Real-time OpenVINO pipelines on Raspberry Pi 5 — YOLOX Nano,
                YuNet, and SFace running on-device at production intern scale
                at Valeo.
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-display text-lg font-semibold text-white">
                LLMs & Backend
              </h3>
              <p className="mt-2 text-sm text-white/60">
                RAG pipelines, LangChain and MCP integrations paired with Core
                Java and Spring Boot fundamentals for durable backend systems.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS TEASER */}
      <section className="section">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Featured Work"
            title="A few things I've built"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((p) => (
              <GlassCard key={p.slug} className="flex flex-col">
                <h3 className="font-display text-lg font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-white/60">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/5 px-2.5 py-1 font-mono text-[11px] text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-semibold text-accent-cyan transition hover:gap-3"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SKILLS TEASER */}
      <section className="section">
        <div className="container-narrow">
          <SectionHeading eyebrow="Toolkit" title="Technologies I reach for" />
          <div className="flex flex-wrap justify-center gap-2">
            {skillGroups
              .flatMap((g) => g.skills)
              .slice(0, 18)
              .map((skill) => (
                <span
                  key={skill}
                  className="glass rounded-full px-3.5 py-1.5 text-xs text-white/70"
                >
                  {skill}
                </span>
              ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 font-semibold text-accent-cyan transition hover:gap-3"
            >
              See full skill set <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
