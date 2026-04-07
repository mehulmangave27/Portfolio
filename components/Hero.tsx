"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail, Download } from "lucide-react";

export const Hero = ({ data }: { data: any }) => {
  const linkedInUrl =
    data.links?.find((link: any) => link.label === "LinkedIn")?.url || "#";

  const githubUrl =
    data.links?.find((link: any) => link.label === "GitHub")?.url || "#";

  return (
    <section className="min-h-[60vh] flex flex-col justify-center">
      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-blue-400 font-mono mb-4"
      >
        Hi, my name is
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
      >
        {data.name}.
      </motion.h1>

      {/* Tagline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl md:text-5xl font-bold text-slate-400 mb-8"
      >
        Engineering the intersection of Cloud & Intelligence.
      </motion.h2>

      {/* Summary */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl text-slate-400 text-lg leading-relaxed mb-10"
      >
        {data.summary}
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap gap-4"
      >
        {/* GitHub */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-full transition-all border border-slate-700"
        >
          <ExternalLink size={18} />
          GitHub
        </a>

        {/* LinkedIn */}
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full transition-all"
        >
          <ExternalLink size={18} />
          LinkedIn
        </a>

        {/* Email */}
        <a
          href={`mailto:${data.email}`}
          className="flex items-center gap-2 text-slate-300 hover:text-white px-6 py-3 transition-all"
        >
          <Mail size={18} />
          Email
        </a>

        {/* Resume Download */}
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 text-slate-300 hover:text-white px-6 py-3 transition-all"
        >
          <Download size={18} />
          Resume
        </a>
      </motion.div>
    </section>
  );
};