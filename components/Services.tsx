"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🤖",
    title: "AI-Powered Web Applications",
    description:
      "Custom AI-integrated web apps that automate decision-making and improve user experience.",
  },
  {
    icon: "⚙️",
    title: "CRM & Lead Automation Systems",
    description:
      "End-to-end pipelines for lead capture, nurturing, and conversion automation.",
  },
  {
    icon: "🎨",
    title: "UI/UX for Digital Products",
    description:
      "Clean, conversion-focused interfaces built with modern design principles.",
  },
  {
    icon: "📊",
    title: "Data-Driven Marketing Systems",
    description:
      "Analytics-first marketing platforms that connect strategy to measurable outcomes.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-green-500 text-sm font-semibold tracking-widest uppercase">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            What I Build
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-green-500/30 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div
                className="text-3xl flex-shrink-0 mt-0.5"
                aria-label={service.title}
                role="img"
              >
                {service.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
