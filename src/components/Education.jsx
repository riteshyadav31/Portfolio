import { motion } from "framer-motion";
import { GraduationCap, CalendarDays, ArrowUpRight } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications",
    short: "MCA",
    institution: "Kamla Nehru Institute of Technology, Sultanpur",
    type: "Postgraduate",
    period: "2025 – 2027",
    description:
      "Advanced studies in software development, programming, databases, web technologies, and modern application development.",
  },
  {
    degree: "Bachelor of Vocation in Computer Applications",
    short: "B.Voc.",
    institution: "Banaras Hindu University",
    type: "Undergraduate",
    period: "2022 – 2025",
    description:
      "Built a strong foundation in programming, software development, databases, computer applications, and web technologies.",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-shell section-space">
      <div className="section-label">04 / Education</div>

      <div className="mt-10 space-y-5">
        {education.map((item, index) => (
          <motion.article
            key={item.degree}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.045] sm:p-8"
          >
            {/* Subtle background glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/[0.04] blur-3xl transition-all duration-500 group-hover:bg-white/[0.08]" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white text-black shadow-lg">
                <GraduationCap size={25} strokeWidth={1.8} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-400">
                        {item.type}
                      </span>

                      <span className="text-xs text-zinc-600">•</span>

                      <span className="text-xs text-zinc-500">
                        {item.short}
                      </span>
                    </div>

                    <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {item.degree}
                    </h2>

                    <p className="mt-2 text-sm font-medium text-zinc-400">
                      {item.institution}
                    </p>
                  </div>

                  {/* Period */}
                  <div className="flex shrink-0 items-center gap-2 text-xs text-zinc-500 sm:pt-1">
                    <CalendarDays size={14} />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-500">
                  {item.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                    Academic Journey
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-zinc-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-zinc-300"
                  />
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}