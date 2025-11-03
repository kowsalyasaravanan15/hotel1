"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-16 py-4 text-gray-900">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif tracking-wide text-green-900">
         KINGSUKH GUEST HOUSE
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-green-700 transition">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/rooms" className="hover:text-green-700 transition">
              ROOMS
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-700 transition">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-green-700 transition">
              BLOG
            </Link>
          </li>
          <li>
            <Link href="/menu" className="hover:text-green-700 transition">
              MENU
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-green-700 transition">
              CONTACT
            </Link>
          </li>
          
          <li className="text-gray-600 text-sm">Tel: +91 9007062180</li>
          <Link
            href='https://api.whatsapp.com/send?phone=919007062180'
            target="blank"
            className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            Enquire Now
          </Link>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            // Close icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md px-6 py-4 shadow-lg">
          <ul className="flex flex-col gap-4 text-gray-800 font-medium">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
            <Link href="/rooms" onClick={() => setMenuOpen(false)}>
              ROOMS
            </Link>
            <Link href="/pages" onClick={() => setMenuOpen(false)}>
              PAGES
            </Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)}>
              BLOG
            </Link>
            <li className="text-gray-600">Tel: ++91 9007062180</li>
            <Link
              href="/enquiry"
              onClick={() => setMenuOpen(false)}
              className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700 transition w-fit"
            >
              Enquire Now
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
