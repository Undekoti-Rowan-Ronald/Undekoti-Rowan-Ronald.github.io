import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { socials, profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="section !pb-10 !pt-16">
      <div className="container-narrow">
        <div className="glass flex flex-col items-center gap-6 rounded-2xl px-6 py-10 text-center">
          <p className="font-display text-xl text-white">
            Let&apos;s build something intelligent.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={socials.github}
              target="_blank"
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition hover:text-accent-cyan"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </Link>
            <Link
              href={socials.linkedin}
              target="_blank"
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition hover:text-accent-cyan"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
            </Link>
            <Link
              href={socials.email}
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition hover:text-accent-cyan"
              aria-label="Send an email"
            >
              <Mail size={18} />
            </Link>
          </div>
          <p className="text-sm text-white/40">
            © {year} {profile.name}. Built with Next.js, Tailwind CSS &amp; Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
