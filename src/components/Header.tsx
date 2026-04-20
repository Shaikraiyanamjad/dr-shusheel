"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Invisalign", href: "#" },
    { name: "Pediatric", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur py-4">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Dr. Susheel Aligners"
            width={220}
            height={40}
            priority
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 text-lg font-medium">
  {navLinks.map((link, index) => (
    <a
      key={link.name}
      href={link.href}
      className={`relative pb-1 transition ${
        index === 0
          ? "text-teal-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-teal-600"
          : "hover:text-teal-600 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-teal-600 after:transition-all after:duration-300 hover:after:w-full"
      }`}
    >
      {link.name}
    </a>
  ))}
</nav>
        {/* Button */}
        <div className="hidden md:block">
          <button className="bg-teal-500 text-white px-5 py-2 rounded-full hover:bg-teal-600 transition">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-8 pb-4 pt-10 gap-4 flex flex-col items-center font-cormorant font-bold text-3xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-gray-700 hover:text-teal-600"
            >
              {link.name}
            </a>
          ))}
          <button className="mt-3 w-full bg-teal-500 text-white py-2 rounded-full">
            Book Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;