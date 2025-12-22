import React from "react";
import { ArrowRight } from "lucide-react";

// Blog data (var)
var blogPosts = [
  {
    category: "NEWS, SIGHTSEEING",
    title: "Alpine Scenery in Summer",
    imageUrl: "/b1.jpg",
    link: "#",
    hasReadMore: true,
  },
  {
    category: "DINING, NEWS",
    title: "New Chef and Spring Special Menu",
    imageUrl: "/b2.jpg",
    link: "#",
    hasReadMore: false,
  },
  {
    category: "DINING, NEWS",
    title: "Introducing New Restaurants",
    imageUrl: "/v1.png",
    link: "#",
    hasReadMore: false,
  },
  {
    category: "NEWS, SIGHTSEEING, WELLNESS",
    title: "Infinite Pool is Back",
    imageUrl: "/b4.jpg",
    link: "#",
    hasReadMore: false,
  },
  {
    category: "NEWS, WELLNESS",
    title: "Tour Tips When Visiting Zermatt",
    imageUrl: "/b5.jpg",
    link: "#",
    hasReadMore: false,
  },
  {
    category: "NEWS, WELLNESS",
    title: "Mountain Trail and Fitness Centre",
    imageUrl: "/b6.jpg",
    link: "#",
    hasReadMore: false,
  },
];

const BlogPostGrid = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            className="group relative block h-96 overflow-hidden"
          >
            {/* 1️⃣ BACKGROUND IMAGE */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${post.imageUrl})` }}
            ></div>

            {/* 2️⃣ OVERLAY (INGA DHAAN VEKKANUM) */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-300"></div>

            {/* 3️⃣ CONTENT */}
            <div className="relative z-10 h-full p-6 flex flex-col justify-end text-white">
              <p className="text-xs uppercase tracking-widest text-gray-200 mb-2">
                {post.category}
              </p>

              <h3 className="text-xl font-serif mb-4">
                {post.title}
              </h3>

              {/* {post.hasReadMore && (
                <span className="flex items-center text-sm uppercase tracking-wider">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              )} */}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BlogPostGrid;

