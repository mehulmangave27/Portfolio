"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export const Experience = ({ exp }: { exp: any }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 border-l border-slate-800 last:pb-0"
    >
      {/* Timeline Dot */}
      <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
      
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
        <div>
          <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
          <p className="text-blue-400 font-medium text-lg">{exp.company}</p>
        </div>
        <div className="flex flex-col md:items-end text-slate-400 text-sm gap-1">
          <span className="flex items-center gap-2"><Calendar size={14}/> {exp.dates}</span>
          <span className="flex items-center gap-2"><MapPin size={14}/> {exp.location}</span>
        </div>
      </div>

      <ul className="space-y-3">
        {exp.bullets.map((bullet: string, idx: number) => {
          // Visual trick: Bold numbers/percentages for fast scanning
          const highlightedBullet = bullet.replace(/(\d+%|\$\d+[kK]|\d+\+)/g, '<span class="text-blue-300 font-bold">$1</span>');
          
          return (
            <li key={idx} className="flex gap-3 text-slate-400 leading-relaxed">
              <span className="text-blue-500 mt-1.5">•</span>
              <span dangerouslySetInnerHTML={{ __html: highlightedBullet }} />
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};