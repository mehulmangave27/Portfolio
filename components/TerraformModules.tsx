"use client";

import { motion } from "framer-motion";
import { Boxes, FileCode } from "lucide-react";

export const TerraformModules = ({ modules }: { modules: any[] }) => {
  if (!modules?.length) return null;

  return (
    <div className="mt-16">
      <div className="flex items-center gap-3 mb-6 text-blue-400">
        <Boxes size={18} />
        <h3 className="font-bold uppercase tracking-widest text-sm text-slate-300">
          Open-Source Terraform Modules
        </h3>
        <span className="text-slate-500 text-xs font-mono normal-case tracking-normal">
          — public proof of work
        </span>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {modules.map((mod, i) => (
          <motion.a
            key={i}
            href={mod.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex items-start gap-3 bg-slate-900/40 border border-slate-800 p-5 rounded-xl hover:border-blue-500/50 transition-all duration-300"
          >
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 shrink-0">
              <FileCode size={18} />
            </div>
            <div>
              <p className="text-white font-mono text-sm font-bold group-hover:text-blue-400 transition-colors">
                {mod.name}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mt-1">
                {mod.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};
