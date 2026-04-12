"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "EV Comparison & Finance Platform",
    description:
      "A comprehensive platform for comparing electric vehicles, calculating EMIs, and getting AI-powered purchase recommendations.",
    tech: ["Next.js", "Supabase", "OpenAI API", "TypeScript"],
    cta: "View Case Study",
  },
  {
    title: "CRM Automation System",
    description:
      "End-to-end CRM pipeline with automated lead capture, email/SMS funnels, and intelligent customer segmentation.",
    tech: ["Next.js", "PostgreSQL", "Twilio", "Resend"],
    cta: "View Case Study",
  },
  {
    title: "AI Consultation System",
    description:
      "A guided multi-step form system connected to an AI recommendation engine for intelligent consultation workflows.",
    tech: ["Next.js", "OpenAI API", "Supabase", "Framer Motion"],
    cta: "View Case Study",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-green-500 text-sm font-semibold tracking-widest uppercase">
            Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all duration-300 cursor-pointer"
            >
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button className="mt-2 text-sm font-semibold text-green-500 hover:text-green-400 transition-colors flex items-center gap-2 group">
                {project.cta}
                <span className="group-hover:translate-x-1 transition-transform inline-block">
                  →
                </span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
