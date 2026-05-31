"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#home" className="group flex items-center gap-2">
          <span className="font-serif text-2xl font-semibold tracking-wide text-charcoal">
            Lumière
          </span>
          <span className="hidden text-xs uppercase tracking-[0.3em] text-rose sm:inline">
            Beauty
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-charcoal/80 transition-colors hover:text-rose"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="rounded-full bg-rose px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-rose-dark hover:shadow-lg"
          >
            Book Appointment
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-charcoal transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-charcoal transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-charcoal transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-2xl text-charcoal transition-colors hover:text-rose"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 rounded-full bg-rose px-8 py-3 text-sm font-medium text-white"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
