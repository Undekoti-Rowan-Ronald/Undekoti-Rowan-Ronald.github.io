"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui";

type Group = { title: string; skills: string[] };

export default function SkillsGrid({ groups }: { groups: Group[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {groups.map((group, gi) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: gi * 0.08 }}
        >
          <GlassCard hover={false} className="h-full">
            <h3 className="font-display text-lg font-semibold text-white">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: si * 0.02 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 transition-colors hover:border-accent-cyan/40 hover:text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
