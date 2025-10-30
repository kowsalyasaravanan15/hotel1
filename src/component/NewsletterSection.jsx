"use client";
import { Send } from "lucide-react";

const images = [
  "/boot.png",// Replace these with your real image URLs
  "/boot2.png",
  "/boot3.png",
  "/header.jpg",
];

const NewsletterSection = () => {
  return (
    <section className="bg-[#f6f6f4] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-gray-800">
        {/* ================== Newsletter Section ================== */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16 gap-10">
          {/* Left Text Content */}
          <div className="lg:w-1/2">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
              Stay tuned with Cozystay
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light leading-snug">
              Sign up for our newsletter to <br /> receive our news, deals and <br /> special offers.
            </h2>
          </div>

          {/* Right Form */}
          <div className="lg:w-1/2">
            <form className="flex flex-col gap-4">
              <div className="flex items-center border-b border-gray-400 pb-2">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-grow bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="text-sm flex items-center gap-1 hover:text-[#5a765a] transition-colors"
                >
                  Subscribe <Send className="w-4 h-4" />
                </button>
              </div>
              <label className="flex items-center gap-2 text-xs text-gray-600">
                <input type="checkbox" className="accent-[#5a765a]" required />
                I agree to the Privacy Policy
              </label>
            </form>
          </div>
        </div>

        {/* ================== Instagram Gallery ================== */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden group">
              <img
                src={src}
                alt={`Instagram ${index + 1}`}
                className="w-full h-60 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* ================== Instagram Button ================== */}
        <div className="text-center">
          <button className="bg-[#5a765a] text-white text-sm font-medium py-3 px-8 hover:bg-[#3e533e] transition-colors">
            Follow Us on Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
