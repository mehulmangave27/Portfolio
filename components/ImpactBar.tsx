"use client";

export const ImpactBar = ({ metrics }: { metrics: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-900/50 backdrop-blur-md border border-blue-500/20 p-8 rounded-2xl shadow-lg shadow-blue-500/10">
      {metrics.map((m, i) => (
        <div key={i} className="text-center md:text-left border-b md:border-b-0 md:border-r border-slate-800 last:border-0 pb-6 md:pb-0 md:pr-6">
          <div className="text-4xl font-black text-blue-500 mb-1">{m.metric}</div>
          <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{m.description}</div>
        </div>
      ))}
    </div>
  );
};