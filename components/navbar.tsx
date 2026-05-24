"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto h-20 px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Shamiro Rent A Car"
            width={170}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/bookings"
            className="text-black hover:text-yellow-400 transition font-semibold"
          >
            Bookings
          </Link>

          <Link
            href="#services"
            className="text-black hover:text-yellow-400 transition font-semibold"
          >
            Services
          </Link>

          <Link
            href="#about"
            className="text-black hover:text-yellow-400 transition font-semibold"
          >
            About
          </Link>

          <Link
            href="#reviews"
            className="text-black hover:text-yellow-400 transition font-semibold"
          >
            Testimonials
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Desktop Button */}
          <a
            href="https://wa.me/917972660029"
            target="_blank"
            className="hidden md:flex bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-md font-bold transition"
          >
            Book Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-black"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-white border-t border-gray-100 flex flex-col gap-5">
          <Link
            href="/bookings"
            onClick={() => setMenuOpen(false)}
            className="text-black font-semibold hover:text-yellow-500 transition"
          >
            Bookings
          </Link>

          <Link
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="text-black font-semibold hover:text-yellow-500 transition"
          >
            Services
          </Link>

          <Link
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-black font-semibold hover:text-yellow-500 transition"
          >
            About
          </Link>

          <Link
            href="#reviews"
            onClick={() => setMenuOpen(false)}
            className="text-black font-semibold hover:text-yellow-500 transition"
          >
            Testimonials
          </Link>

          {/* Mobile CTA */}
          <a
            href="https://wa.me/917972660029"
            target="_blank"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-4 rounded-md font-bold text-center transition mt-2"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
