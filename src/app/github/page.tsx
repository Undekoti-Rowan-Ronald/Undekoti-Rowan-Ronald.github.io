"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink, RefreshCcw } from "lucide-react";
import { SectionHeading, GlassCard } from "@/components/ui";
import { socials } from "@/lib/data";

const USERNAME = "Undekoti-Rowan-Ronald";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
};

export default function GithubPage() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(
      `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`
    )
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API error");
        return res.json();
      })
      .then((data: Repo[]) => {
        if (!cancelled) setRepos(data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const topLanguages = repos
    ? Array.from(
        repos.reduce((map, r) => {
          if (r.language) map.set(r.language, (map.get(r.language) || 0) + 1);
          return map;
        }, new Map<string, number>())
      )
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
    : [];

  const recentRepos = repos
    ? [...repos]
        .sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        )
        .slice(0, 6)
    : [];

  return (
    <section className="section">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="GitHub"
          title="Live from my GitHub"
          description="Repositories, contribution activity and top languages, pulled straight from the GitHub API."
        />

        {/* Stats + contribution graph via public GitHub badge services */}
        <div className="mb-12 grid gap-6 lg:grid-cols-2">
          <GlassCard hover={false} className="flex items-center justify-center overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=4fd6ff&icon_color=9b5cff&text_color=e7e9f2`}
              alt="GitHub stats"
              className="w-full max-w-md"
              loading="lazy"
            />
          </GlassCard>
          <GlassCard hover={false} className="flex items-center justify-center overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/9b5cff/${USERNAME}`}
              alt="GitHub contribution graph"
              className="w-full max-w-md"
              loading="lazy"
            />
          </GlassCard>
        </div>

        {error && (
          <div className="glass mb-12 flex flex-col items-center gap-3 rounded-2xl p-8 text-center text-white/60">
            <RefreshCcw size={20} />
            <p>
              GitHub&apos;s API rate limit may have been reached. View the profile
              directly on{" "}
              <Link
                href={socials.github}
                target="_blank"
                className="text-accent-cyan underline"
              >
                GitHub
              </Link>
              .
            </p>
          </div>
        )}

        {topLanguages.length > 0 && (
          <div className="mb-12">
            <h3 className="mb-4 text-center font-display text-lg font-semibold text-white">
              Top Languages
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {topLanguages.map(([lang, count]) => (
                <span
                  key={lang}
                  className="glass rounded-full px-4 py-1.5 text-xs text-white/70"
                >
                  {lang} · {count}
                </span>
              ))}
            </div>
          </div>
        )}

        <h3 className="mb-6 text-center font-display text-lg font-semibold text-white">
          Recently Updated Repositories
        </h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recentRepos.map((repo, i) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <GlassCard className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-display text-sm font-semibold text-white">
                    {repo.name}
                  </h4>
                  <Link href={repo.html_url} target="_blank" aria-label={`Open ${repo.name} on GitHub`}>
                    <ExternalLink size={14} className="text-white/40 hover:text-accent-cyan" />
                  </Link>
                </div>
                <p className="mt-2 flex-1 text-xs text-white/50">
                  {repo.description || "No description provided."}
                </p>
                <div className="mt-3 flex items-center gap-4 text-xs text-white/40">
                  {repo.language && <span>{repo.language}</span>}
                  <span className="flex items-center gap-1">
                    <Star size={12} /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} /> {repo.forks_count}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
          {!repos && !error && (
            <p className="col-span-full text-center text-sm text-white/40">
              Loading repositories…
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
