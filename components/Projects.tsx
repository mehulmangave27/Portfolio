"use client";

import { motion } from "framer-motion";
import { ExternalLink, Terminal } from "lucide-react";

export const Projects = ({ project }: { project: any }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
          <Terminal size={24} />
        </div>

        <div className="flex gap-4 text-slate-400">
          <a
            href="https://github.com/mehulmangave27"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub repository"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
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