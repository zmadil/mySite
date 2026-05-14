"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Impact", href: "#impact" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolledRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 20;
      if (next !== scrolledRef.current) {
        scrolledRef.current = next;
        setScrolled(next);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080c12]/90 backdrop-blur-md border-b border-[#1e2d3d]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded border border-[#00d4ff]/40 flex items-center justify-center group-hover:border-[#00d4ff] transition-colors duration-200">
            <Terminal size={14} className="text-[#00d4ff]" />
          </div>
          <span className="text-sm font-mono text-[#f1f5f9] tracking-widest uppercase">
            ZA
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#64748b] hover:text-[#00d4ff] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-4 py-1.5 border border-[#00d4ff]/40 text-[#00d4ff] rounded hover:bg-[#00d4ff]/10 hover:border-[#00d4ff] transition-all duration-200 font-mono tracking-wide"
          >
            Hire Me
          </a>
        </div>

        <button
          className="md:hidden text-[#64748b] hover:text-[#00d4ff] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0d1117] border-t border-[#1e2d3d] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#64748b] hover:text-[#00d4ff] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
