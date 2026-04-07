"use client";
import { motion } from "framer-motion";
import { Cpu, Cloud, Code, BrainCircuit, GraduationCap } from "lucide-react";

export const Skills = ({ skills, education }: { skills: any, education: any[] }) => {
  const categories = [
    { title: "Cloud & Platforms", icon: <Cloud />, items: skills.platforms },
    { title: "AI/ML Engineering", icon: <BrainCircuit />, items: skills.ai_ml },
    { title: "Languages", icon: <Code />, items: skills.languages },
    { title: "Tools & Frameworks", icon: <Cpu />, items: skills.frameworks },
  ];

  return (
    <section id="skills" className="grid lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2 space-y-12">
        <h2 className="text-3xl font-bold flex items-center gap-4">
          <span className="text-blue-500">03.</span> Technical Mastery
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4 text-blue-400">
                {cat.icon}
                <h4 className="font-bold uppercase tracking-widest text-sm">{cat.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill: string) => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-400 text-xs rounded-md hover:border-blue-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold flex items-center gap-4">
          <span className="text-blue-500">04.</span> Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, i) => (
            <div key={i} className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
              <GraduationCap className="text-blue-500 mb-3" size={24} />
              <h4 className="text-white font-bold">{edu.institution}</h4>
              <p className="text-blue-400 text-sm mb-1">{edu.degree}</p>
              <p className="text-slate-500 text-xs">{edu.date} | {edu.location}</p>
            </div>
          ))}
          <div className="p-4 border-l-2 border-blue-500/20 text-xs text-slate-500 italic">
            Relevant Coursework: {skills.coursework.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};