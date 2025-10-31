"use client";
import { useState } from "react";

export default function HeroSection() {
  const [checkIn, setCheckIn] = useState("2025-10-17");
  const [checkOut, setCheckOut] = useState("2025-10-18");
  const [guests, setGuests] = useState("1 Room, 1 Adult, 0 Children");

  return (
    <div className="relative min-h-screen bg-cover bg-center text-white" 
      style={{ backgroundImage: "url('/baranti.webp')" }} // replace with your image
    >
      

      {/* Hero Content */}
      <div data-aos="fade-down" className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-0 bg-black/40">
        <h4 className="text-3xl md:text-6xl font-serif font-light mb-7">
          kingsukh Guest House
        </h4>
        <p className="text-sm md:text-base mb-6 text-gray-200">
          Make Yourself At Home
In Our Guest House.

        </p>
        <button className="bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
          Enquire Now
        </button>
      </div>

      {/* Booking Bar */}
      <div data-aos="fade-down" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                      w-[90%] md:w-3/4 bg-white text-gray-900 rounded-xl 
                      shadow-lg flex flex-col md:flex-row items-center justify-between 
                      p-6 md:p-4 space-y-4 md:space-y-0 z-10">
        <div className="flex flex-col items-start w-full md:w-1/3">
          <label className="text-sm text-gray-500">Check In</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/3">
          <label className="text-sm text-gray-500">Check Out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col items-start w-full md:w-1/3">
          <label className="text-sm text-gray-500">Guests</label>
          <input
            type="text"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button className="bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-700 transition w-full md:w-auto">
          Check Availability
        </button>
      </div>
    </div>
  );
}
