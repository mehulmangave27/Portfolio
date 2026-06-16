"use client";

import { motion } from "framer-motion";
import { ExternalLink, Terminal, Brain, Share2, Navigation, Activity, Bird, Trophy } from "lucide-react";

const FALLBACK_REPO = "https://github.com/mehulmangave27";

const getProjectIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("magpie")) return <Bird size={24} />;
  if (t.includes("rag") || t.includes("weight") || t.includes("llm")) return <Brain size={24} />;
  if (t.includes("graph") || t.includes("omni") || t.includes("knowledge")) return <Share2 size={24} />;
  if (t.includes("driver") || t.includes("assistance")) return <Navigation size={24} />;
  if (t.includes("arrhythmia") || t.includes("detection") || t.includes("svm")) return <Activity size={24} />;
  return <Terminal size={24} />;
};

export const Projects = ({ project }: { project: any }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`group bg-slate-900/40 border p-6 rounded-2xl transition-all duration-300 flex flex-col h-full ${
        project.featured
          ? "border-amber-500/40 hover:border-amber-400/70 shadow-lg shadow-amber-500/5"
          : "border-slate-800 hover:border-blue-500/50"
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <div
          className={`p-3 rounded-lg ${
            project.featured
              ? "bg-amber-500/10 text-amber-400"
              : "bg-blue-500/10 text-blue-400"
          }`}
        >
          {getProjectIcon(project.title)}
        </div>

        <div className="flex gap-4 text-slate-400">
          <a
            href={project.link || FALLBACK_REPO}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label={`${project.title} repository`}
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      {project.award && (
        <div className="inline-flex items-center gap-2 self-start mb-4 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-bold">
          <Trophy size={13} className="shrink-0" />
          <span>{project.award}</span>
        </div>
      )}

      <h3
        className={`text-xl font-bold text-white mb-2 transition-colors ${
          project.featured ? "group-hover:text-amber-400" : "group-hover:text-blue-400"
        }`}
      >
        {project.title}
      </h3>

      <p className="text-slate-500 text-xs font-mono mb-4 uppercase tracking-widest">
        {project.dates}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech: string) => (
          <span
            key={tech}
            className="px-2 py-1 bg-slate-800 text-slate-300 text-[10px] font-bold rounded uppercase border border-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="space-y-3 mb-6 flex-grow">
        {project.bullets.map((bullet: string, idx: number) => (
          <li
            key={idx}
            className="text-sm text-slate-400 leading-relaxed flex gap-2"
          >
            <span className="text-blue-500/50">▹</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
