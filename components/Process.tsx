"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Research & Strategy",
    description:
      "Deep dive into your business goals, users, and competitive landscape.",
  },
  {
    number: "02",
    title: "System Design",
    description:
      "Architecture, wireframes, and technical planning before a single line of code.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Full-stack implementation with clean code, performance, and scalability in mind.",
  },
  {
    number: "04",
    title: "Optimization",
    description:
      "Data-driven iteration, A/B testing, and continuous improvement post-launch.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-green-500 text-sm font-semibold tracking-widest uppercase">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            How I Work
          </h2>
        </motion.div>

        {/* Desktop: horizontal with connecting line */}
        <div className="hidden md:flex items-start gap-0 relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-white/10" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex-1 flex flex-col items-center text-center px-4"
            >
              <div className="relative z-10 w-16 h-16 rounded-full bg-[#0B0B0B] border-2 border-green-500/50 flex items-center justify-center mb-5">
                <span className="text-green-500 font-bold text-lg">
                  {step.number}
                </span>
              </div>
              <h3 className="text-white font-semibold text-base mb-2">
                {step.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden flex flex-col gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-green-500/50 flex items-center justify-center">
                <span className="text-green-500 font-bold text-sm">
                  {step.number}
                </span>
              </div>
              <div className="pt-2">
                <h3 className="text-white font-semibold text-base mb-1">
                  {step.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
