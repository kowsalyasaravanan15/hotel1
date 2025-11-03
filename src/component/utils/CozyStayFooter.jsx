"use client";
import React from "react";
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";

/**
 * Responsive Footer Component for CozyStay Resort
 * Built with Tailwind CSS + lucide-react icons
 */
const CozyStayFooter = () => {
  // Navigation and contact data
  const aboutLinks = [
    "Our Story",
    "Contact Us",
    "Premium Services",
    // "Careers",
    "Blog",
  ];
  const experienceLinks = [
    "Browse Destination",
    "Special Offers & Packages",
    "Room Types",
    "Customer Reviews & Ratings",
    "Travel Tips & Guides",
  ];

  // Background image (optional)
  const footerBgImageUrl = "/ayodhya.webp"; // Place inside public/images

  return (
    <footer className="relative text-white">
      {/* ===== Background Image + Overlay ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${footerBgImageUrl}')`,
          backgroundColor: "#5a765a",
        }}
      >
        {/* Overlay for darker tone */}
        <div className="absolute inset-0 bg-[#5a765a] opacity-90"></div>
      </div>

      {/* ===== Main Footer Content ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-12">

          {/* === COZYSTAY INFO === */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif tracking-widest">
              <span className="font-span">Kingsukh Guest House</span>
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.

            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
              </a>
              <a href="https://www.instagram.com/kingsukhguesthouse/" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
              </a>
              <a href="#" aria-label="Mail">
                <Mail className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* === About Us Links === */}
          <div>
            <h5 className="text-lg font-serif mb-4 tracking-wider">About Us</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* === Experiences Links === */}
          <div>
            <h4 className="text-lg font-serif mb-4 tracking-wider">Experiences</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {experienceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* === Contact / Reach Out === */}
          <div>
            <h4 className="text-lg font-serif mb-4 tracking-wider">Reach Out</h4>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Beside Barshal Water Tank, Manpur,Barhanti,West Bengal 723156</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:kkghosh0099@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  kkghosh0099@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a
                  href="tel:+91 9007062180"
                  className="hover:text-white transition-colors"
                >
                  +91 9007062180
                </a>
              </div>
            </div>

            <a
              href="#"
              className="inline-block text-sm mt-6 border-b border-gray-300 hover:border-white transition-colors text-gray-300 hover:text-white"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* ===== Copyright Bar ===== */}
      <div className="bg-black bg-opacity-30 border-t border-white border-opacity-10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p className="mb-2 md:mb-0 text-center md:text-left">
            © Copyright  KINGSUKH GUEST HOUSE WordPress Theme for Hotel Booking
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              PRIVACY
            </a>
            <a href="#" className="hover:text-white transition-colors">
              TERMS OF USE
            </a>
            <a href="#" className="hover:text-white transition-colors">
              POLICY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CozyStayFooter;
 