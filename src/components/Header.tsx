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
            width={180}
            height={40}
            priority
          />
        </div>

        {/* Desktop Nav (ONLY laptop and above) */}
        <nav className="hidden lg:flex items-center gap-6 text-gray-700 text-lg">
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

        {/* Button (ONLY laptop and above) */}
        <div className="hidden lg:block">
          <button className="bg-teal-500 text-white px-5 py-2 rounded-full hover:bg-teal-600 transition">
            Book Now
          </button>
        </div>

        {/* Mobile + Tablet Toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu (tablet + mobile only) */}
      {open && (
       <div className="lg:hidden bg-white px-4 pb-7 pt-8 flex flex-col items-center gap-6 font-cormorant text-3xl text-center">
          <h6>{navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-gray-700 hover:text-teal-600 font-bold pt-10">
              {link.name}
            </a>
          ))}

          <button className="mt-3 w-full bg-teal-500 text-white py-2 px-20 rounded-full">
            Book Now
          </button>
          </h6>
          </div>
      )}
    </header>
  );
};

export default Header;