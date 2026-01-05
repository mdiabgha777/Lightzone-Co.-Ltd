'use client';
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--card)]/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <h1 className="text-xl sm:text-2xl font-bold text-[var(--accent)]">
            Lightzone
          </h1>

          {/* Desktop menu - aligned to the right */}
          <div className="hidden md:flex items-center space-x-14">
            {NavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="primary"
            size="md"
            className="md:hidden cursor-pointer hover:bg-[var(--accent)/0.8]"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
                {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {NavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
