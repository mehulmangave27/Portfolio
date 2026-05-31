"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export const Contact = ({ data }: { data: any }) => {
  const linkedInUrl =
    data.links?.find((l: any) => l.label === "LinkedIn")?.url || "#";

  return (
    <section id="contact" className="text-center space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-4">
          <span className="text-blue-500">05.</span> Get In Touch
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
          I am actively seeking full-time Cloud and AI Engineering roles.
          Whether you have an opening or just want to connect, my inbox is open.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap"
      >
        <a
          href={`mailto:${data.email}`}
          className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-full transition-all font-medium"
        >
          <Mail size={18} />
          {data.email}
        </a>
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 px-8 py-4 rounded-full transition-all font-medium"
        >
          <ExternalLink size={18} />
          LinkedIn
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-6 text-slate-500 text-sm"
      >
        <span className="flex items-center gap-2">
          <Phone size={14} />
          {data.phone}
        </span>
        <span className="flex items-center gap-2">
          <MapPin size={14} />
          {data.location}
        </span>
      </motion.div>
    </section>
  );
};
