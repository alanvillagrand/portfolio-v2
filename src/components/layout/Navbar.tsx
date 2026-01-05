
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <span className="font-bold">Alan</span>
        <div className="space-x-6 text-zinc-400">
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-white">Projects</a>
        </div>
      </div>
    </nav>
  );
}
