import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero({ setActiveSection }) {
  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="section-shell relative flex min-h-screen items-center pt-28">
      <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
      <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-zinc-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for opportunities
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-zinc-500"
          >
            MCA Graduate · Full Stack Developer
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-[6.2rem]"
          >
            Building digital
            <span className="block bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
              things that matter.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg"
          >
            I'm Ritesh Yadav, an MCA graduate from KNIT Sultanpur. I build
            modern web applications, backend systems and AI-powered products
            with a focus on clean UX and practical engineering.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button onClick={() => scrollTo("projects")} className="primary-btn">
              Explore projects <ArrowUpRight size={16} />
            </button>
            <button onClick={() => scrollTo("contact")} className="secondary-btn">
              Let's connect
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-9 flex items-center gap-3"
          >
            <a className="icon-btn" href="https://github.com/riteshyadav31" target="_blank" rel="noreferrer">
              <Github size={17} />
            </a>
            <a className="icon-btn" href="https://www.linkedin.com/in/ritesh-yadav-555070437/" target="_blank" rel="noreferrer">
              <Linkedin size={17} />
            </a>
            <a className="icon-btn" href="mailto:dev.ritesh.in@gmail.com">
              <Mail size={17} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-fuchsia-500/15 via-transparent to-cyan-400/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-2 shadow-2xl shadow-black/40">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="/profile.png"
                alt="Ritesh Yadav"
                className="h-[480px] w-full object-cover object-top grayscale-[12%] transition duration-700 hover:scale-[1.025] hover:grayscale-0 sm:h-[560px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Currently focused on</p>
                <p className="mt-1 text-sm font-semibold">Full Stack · AI · Cybersecurity</p>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-5 top-10 rounded-2xl border border-white/10 bg-[#101014]/80 px-4 py-3 shadow-xl backdrop-blur-xl"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Stack</p>
            <p className="mt-1 text-sm font-bold">React · Python</p>
          </motion.div>
        </motion.div>
      </div>

      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-zinc-500 transition hover:text-white sm:flex"
      >
        Scroll to explore <ArrowDown size={14} className="animate-bounce" />
      </button>
    </section>
  );
}