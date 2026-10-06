import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["contact", "Contact"],
];

export default function Navbar({ activeSection, setActiveSection }) {
  const [open, setOpen] = useState(false);

  const goTo = (id) => {
    setActiveSection(id);
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/45 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <button onClick={() => goTo("home")} className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-black text-black transition-transform group-hover:rotate-6">
            RY
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            Ritesh<span className="text-zinc-500">.</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(([id, label]) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className={`rounded-xl px-3 py-2 text-xs font-medium transition ${
                activeSection === id
                  ? "bg-white/10 text-white"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          onClick={() => goTo("contact")}
          className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white px-3 py-2 text-xs font-bold text-black transition hover:scale-[1.03] sm:flex"
        >
          Let's talk <ArrowUpRight size={14} />
        </button>

        <button
          className="rounded-xl border border-white/10 p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-[#0d0d11]/95 p-2 shadow-2xl backdrop-blur-xl md:hidden">
          {links.map(([id, label]) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}