"use client";

import { motion } from "framer-motion";

const highlights = [
  { label: "Education", value: "MBA – Digital Marketing, UEL" },
  { label: "Background", value: "Information Management" },
  { label: "Focus", value: "AI, Automation & Business Impact" },
  { label: "Industry", value: "Automotive & Digital Systems" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-green-500 text-sm font-semibold tracking-widest uppercase">
            About
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            About Smaran
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-white/65 leading-relaxed"
          >
            <p>
              I&apos;m Smaran Basnet — a digital product builder with an MBA in
              Digital Marketing from the University of East London and a
              background in Information Management.
            </p>
            <p>
              My work sits at the intersection of business strategy and
              technology. I build AI-integrated platforms, CRM automation
              systems, and data-driven digital products that solve real
              problems and create measurable outcomes.
            </p>
            <p>
              With experience across the automotive and digital sectors, I
              approach every project with a focus on clarity, scalability, and
              business impact — from initial architecture to post-launch
              optimization.
            </p>
            <p>
              I&apos;m currently open to projects, consulting engagements, and
              collaborations where technology and strategy intersect.
            </p>
            <a
              href="https://linkedin.com/in/smaran-basnet-475a90254/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-500 font-semibold hover:text-green-400 transition-colors mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452H17.1v-5.569c0-1.328-.027-3.037-1.851-3.037-1.854 0-2.137 1.447-2.137 2.942v5.664H9.768V9h3.198v1.562h.047c.445-.843 1.533-1.733 3.156-1.733 3.376 0 3.999 2.221 3.999 5.113v6.51zM5.337 7.433a1.856 1.856 0 110-3.713 1.856 1.856 0 010 3.713zM6.896 20.452H3.776V9h3.12v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-2xl bg-white/5 border border-white/10"
              >
                <p className="text-green-500 text-xs font-semibold tracking-wider uppercase mb-2">
                  {item.label}
                </p>
                <p className="text-white font-medium text-sm leading-snug">
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
