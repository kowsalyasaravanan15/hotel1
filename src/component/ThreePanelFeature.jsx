"use client";
import React from 'react';

const ThreePanelFeature = () => {
  const imageUrls = {
    left: "/house 2.png",
    center: "/hero.jpg.jpg",
    right: "/river.png"
  };

  return (
    <div data-aos="zoom-in-up" className="py-16 md:py-24 bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-xl overflow-hidden">

          {/* Left image */}
          <div
            className="relative h-96 md:h-[600px] bg-cover bg-center"
            style={{ backgroundImage: `url('${imageUrls.left}')` }}
          />

          {/* Center text panel */}
          <div
            className="relative h-96 md:h-[600px]  bg-100 bg-center text-white flex items-center justify-center p-8"
            style={{ backgroundImage: `url('${imageUrls.center}')` }}
          >
            {/* inga opacity change irruku */}
            <div className="absolute inset-0 bg- bg-opacity-100 flex flex-col items-center justify-center text-center px-6 border-y-2 border-x-2 border-opacity-70 border-yellow-700">
              <p className="text-xs uppercase tracking-widest mb-3 font-serif">
                Welcome to KINGSUKH GUEST HOUSE
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-8 font-light">
                In the Heart of Banff Park, Outstanding Views
              </h2>
              <a
                href="#"
                className="text-sm border-b border-white hover:text-gray-300 hover:border-gray-300 transition-colors tracking-widest"
              >
                Explore the hotel
              </a>
            </div>
          </div>

          {/* Right image */}
          <div
            className="relative h-96 md:h-[600px] bg-cover bg-center"
            style={{ backgroundImage: `url('${imageUrls.right}')` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ThreePanelFeature;
