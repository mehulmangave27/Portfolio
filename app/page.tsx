import { resumeData } from "@/data/resume";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ImpactBar } from "@/components/ImpactBar";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Portfolio() {
  return (
    <main className="relative min-h-screen text-slate-100 selection:bg-blue-500/30">
      <ScrollProgress />
      <AnimatedBackground />
      <Navbar name={resumeData.basics.name} />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-28 pb-20 space-y-32">
        <Hero data={resumeData.basics} />

        <ImpactBar metrics={resumeData.top_impact} />

        <section id="experience">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-blue-500">01.</span> Professional Experience
          </h2>
          <div className="space-y-16">
            {resumeData.experience.map((exp, i) => (
              <Experience key={i} exp={exp} />
            ))}
          </div>
        </section>

        <section id="projects">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-blue-500">02.</span> Technical Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {resumeData.projects.map((proj, i) => (
              <Projects key={i} project={proj} />
            ))}
          </div>
        </section>

        <Skills skills={resumeData.skills} education={resumeData.education} />

        <Contact data={resumeData.basics} />

        <footer className="pt-20 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Mehul Mangave | Cloud & AI Engineering</p>
        </footer>
      </div>
    </main>
  );
}