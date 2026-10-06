import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07070a] text-zinc-100">
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]" />
        <div className="absolute right-[-12rem] top-[35%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/8 blur-[120px]" />
        <div className="grid-bg absolute inset-0 opacity-[0.25]" />
      </div>

      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        <Hero setActiveSection={setActiveSection} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        <motion.div
          className="pointer-events-none fixed bottom-5 left-1/2 z-50 h-1 w-24 -translate-x-1/2 rounded-full bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </AnimatePresence>
    </div>
  );
}