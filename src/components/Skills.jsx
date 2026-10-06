import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Python", "FastAPI", "Node.js", "Express", "REST APIs","Docker"],
  },
  {
    title: "Data & Auth",
    skills: ["SQL","Mongo DB", "SQLite", "Firebase", "Firestore", "JWT", "OAuth2"],
  },
  {
    title: "Tools & Other",
    skills: ["Git", "GitHub", "Docker", "Gemini API", "Basic Cybersecurity"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell section-space">
      <div className="section-label">02 / Skills</div>
      <div className="mt-6 max-w-3xl">
        <h2 className="section-title">Tools I use to turn ideas into products.</h2>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.07 }}
            className="glass-card"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold">{group.title}</h3>
              <span className="text-xs text-zinc-600">0{index + 1}</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-zinc-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}