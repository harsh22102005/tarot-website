"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cream/90 backdrop-blur-md fixed top-0 left-0 w-full z-50 border-b border-beige">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="font-heading text-2xl text-indigo font-semibold">
          ✦ Mystic Path
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-indigo hover:text-lavender-dark transition-colors font-body text-sm tracking-wide"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="/services"
          className="hidden md:block bg-indigo text-cream px-6 py-2.5 rounded-full text-sm hover:bg-lavender-dark transition-colors"
        >
          Book a Session
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-indigo"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-cream">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-indigo font-body block py-2"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Link
            href="/services"
            className="bg-indigo text-cream px-6 py-2.5 rounded-full text-sm text-center"
          >
            Book a Session
          </Link>
        </ul>
      )}
    </nav>
  );
}