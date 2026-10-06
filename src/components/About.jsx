import { motion } from "framer-motion";
import { Code2, Layers3, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "Build",
    text: "Modern interfaces and practical full-stack applications with clean, maintainable code.",
  },
  {
    icon: Layers3,
    title: "Integrate",
    text: "APIs, databases, authentication and AI services into complete product workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Secure",
    text: "I keep security in mind while designing authentication, data access and backend flows.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell section-space">
      <div className="section-label">01 / About</div>

      <div className="mt-6 grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            Developer with a
            <span className="text-zinc-500"> product mindset.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-5 text-zinc-400"
        >
          <p className="text-lg leading-8 text-zinc-300">
            I'm an MCA graduate from KNIT Sultanpur who enjoys turning ideas
            into useful, real-world software.
          </p>
          <p className="leading-7">
            My core experience is around React, JavaScript, Python, Node.js,
            Express, FastAPI, REST APIs, Firebase, SQL and authentication. I
            also explore AI integration and basic cybersecurity.
          </p>
          <p className="leading-7">
            I care about how a product feels as much as how it works — from
            responsive UI and smooth interactions to reliable backend logic.
          </p>
        </motion.div>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
              className="glass-card group"
            >
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">{card.text}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}