"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#tentang", label: "Tentang" },
  { href: "#perjalanan", label: "Perjalanan" },
  { href: "#prestasi", label: "Prestasi" },
  { href: "#keterampilan", label: "Keterampilan" },
  { href: "#galeri", label: "Galeri" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-garuda-mid/90 backdrop-blur-xl border-b border-garuda-gold/10 py-3 px-8"
          : "bg-transparent py-5 px-8"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-heading font-black text-xl tracking-wide"
        >
          Anindya<span className="text-garuda-gold">.</span>Wardani
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium tracking-widest uppercase relative pb-1
                           text-garuda-text/80 hover:text-garuda-gold transition-colors duration-300
                           after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-garuda-gold
                           after:transition-all after:duration-300 after:w-0 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1 bg-transparent border-none cursor-pointer group"
          aria-label="Menu"
        >
          <span
            className={`block w-7 h-0.5 bg-garuda-text rounded-full transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-garuda-text rounded-full transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-garuda-text rounded-full transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 max-w-xs h-screen bg-garuda-mid/95 backdrop-blur-2xl
                    border-l border-garuda-gold/10 flex flex-col items-center justify-center gap-10
                    transition-all duration-500 md:hidden ${
                      open ? "translate-x-0" : "translate-x-full"
                    }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-garuda-text/60 hover:text-garuda-gold text-2xl"
          aria-label="Tutup menu"
        >
          ✕
        </button>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={handleClose}
            className="text-lg font-medium tracking-widest uppercase text-garuda-text/80
                       hover:text-garuda-gold transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
