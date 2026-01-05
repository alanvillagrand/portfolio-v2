// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-6 text-center text-zinc-500">
      © {new Date().getFullYear()} Alan Villagrand. All rights reserved.
    </footer>
  );
}
