// components/BlogHeroSection.jsx
import React from 'react';

const BlogHeroSection = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-white p-4"
      // Placeholder for the background image (the cozy cabin interior)
      style={{ backgroundImage: "url('/luxury.jpg')" }} 
    >
      {/* Dark Overlay to make the text stand out */}
      <div className="absolute inset-0 bg-black opacity-40"></div> 

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 opacity-80">
          THE LATEST NEWS AND BLOG
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-light leading-none">
          Our Blog
        </h1>
      </div>
    </section>
  );
};

export default BlogHeroSection;