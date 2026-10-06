import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

const filters = ["All", ...new Set(projects.map((project) => project.category))];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="section-shell section-space">
      <div className="section-label">03 / Projects</div>

      <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-3xl">
          <h2 className="section-title">Selected work, built with purpose.</h2>
          <p className="mt-5 max-w-2xl leading-7 text-zinc-500">
          A collection of projects that showcase my journey in building practical, modern, and impactful digital solutions.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-full border px-3 py-2 text-xs transition ${
                filter === item
                  ? "border-white bg-white text-black"
                  : "border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="mt-12 grid gap-5 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <motion.article
            layout
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: index * 0.06 }}
            className={`group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] ${
              project.featured ? "md:col-span-1" : ""
            }`}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                onError={(event) => {
                  event.currentTarget.src = "/projects/placeholder.svg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-zinc-300 backdrop-blur-md">
                {project.category}
              </span>
              <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-md transition group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                <ArrowUpRight size={17} />
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <div className="flex gap-2">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-500 transition hover:text-white"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github size={17} />
                    </a>
                  )}
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-500 transition hover:text-white"
                      aria-label={`${project.title} live site`}
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-zinc-500">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-md bg-white/5 px-2.5 py-1.5 text-[11px] text-zinc-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}