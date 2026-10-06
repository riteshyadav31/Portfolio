export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="section-shell flex flex-col justify-between gap-4 py-7 text-xs text-zinc-600 sm:flex-row">
        <p>© {new Date().getFullYear()} Ritesh Yadav. All rights reserved.</p>
        <p>Designed & built with React.</p>
      </div>
    </footer>
  );
}