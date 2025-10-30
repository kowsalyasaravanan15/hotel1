'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Calendar, Users, Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-20 text-white p-4 lg:p-6 flex justify-between items-center bg-transparent">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-serif tracking-widest uppercase">COZYSTAY</h1>
        <span className="text-xs tracking-widest">RESORT</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex space-x-6 text-sm font-medium">
        <Link href="#" className="hover:text-gray-300">HOME</Link>

        <div className="group relative">
          <button className="flex items-center hover:text-gray-300">
            ROOMS <ChevronDown className="ml-1 w-3 h-3" />
          </button>
          {/* Dropdown */}
          <div className="absolute hidden group-hover:block bg-white text-gray-800 rounded-lg mt-2 shadow-md w-40">
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Luxury Suite</Link>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Family Room</Link>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Beach Villa</Link>
          </div>
        </div>

        <Link href="#" className="hover:text-gray-300">PAGES</Link>
        <Link href="#" className="hover:text-gray-300">BLOG</Link>
      </nav>

      {/* Contact + Button */}
      <div className="hidden md:flex items-center space-x-4 text-sm font-medium">
        <span>TEL: +61 73 545 87 88</span>
        <button className="bg-[#2D453E] hover:bg-[#3D554E] text-white py-2 px-4 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 rounded-md">
          Reserve Now
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden flex items-center"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black bg-opacity-80 text-white flex flex-col items-center space-y-4 py-6 lg:hidden">
          <Link href="#" className="hover:text-gray-300">HOME</Link>
          <Link href="#" className="hover:text-gray-300">ROOMS</Link>
          <Link href="#" className="hover:text-gray-300">PAGES</Link>
          <Link href="#" className="hover:text-gray-300">BLOG</Link>
          <button className="bg-[#2D453E] hover:bg-[#3D554E] py-2 px-6 text-xs font-semibold uppercase rounded-md">
            Reserve Now
          </button>
        </div>
      )}
    </header>
  );
};

const HeroBookingSection = () => {
  return (
    <section className="relative min-h-screen w-full">
      <Header />

      {/* Hero Image */}
      <div className="relative h-[90vh] md:h-screen w-full">
        <Image
          src="/room page.webp" // 👉 Replace with your actual image in /public/images
          alt="Resort view"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <p className="uppercase tracking-widest text-sm mb-3 opacity-90">
            Check Our Accommodations
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-light leading-snug">
            Rooms, Suites & Chalets
          </h2>
        </div>
      </div>

      {/* Booking Form */}
      <div className="absolute bottom-0 left-0 right-0 z-20 transform translate-y-1/2 px-4 md:px-0">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200 rounded-xl overflow-hidden">
          {/* Check In */}
          <div className="flex-1 p-4 flex items-center space-x-3 text-gray-700">
            <Calendar className="w-5 h-5 text-[#2D453E]" />
            <div>
              <p className="text-xs uppercase tracking-wider mb-1">Check In</p>
              <p className="font-semibold text-sm">2025-10-27</p>
            </div>
          </div>

          {/* Check Out */}
          <div className="flex-1 p-4 flex items-center space-x-3 text-gray-700">
            <Calendar className="w-5 h-5 text-[#2D453E]" />
            <div>
              <p className="text-xs uppercase tracking-wider mb-1">Check Out</p>
              <p className="font-semibold text-sm">2025-10-28</p>
            </div>
          </div>

          {/* Guests */}
          <div className="flex-1 p-4 flex items-center space-x-3 text-gray-700">
            <Users className="w-5 h-5 text-[#2D453E]" />
            <div>
              <p className="text-xs uppercase tracking-wider mb-1">Guests</p>
              <p className="font-semibold text-sm">1 Room, 1 Adult, 0 Children</p>
            </div>
          </div>

          {/* Button */}
          <button className="bg-[#536E5F] hover:bg-[#3D554E] text-white py-4 px-8 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 w-full md:w-auto">
            Check Availability
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBookingSection;
