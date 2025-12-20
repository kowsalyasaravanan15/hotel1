// components/BlogPostGrid.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react'; // Using Lucide icon for the "Read More" arrow

// Sample data for the blog posts
const blogPosts = [
  {
    // date: 'AUG 16',
    category: 'NEWS, SIGHTSEEING',
    title: 'Alpine Scenery in Summer',
    imageUrl: '/b1.jpg', // Placeholder
    link: '#',
    overlayColor: 'bg-[#536E5F]', // Specific color for this card as per design
    hasReadMore: true,
  },
  {
    // date: 'AUG 12',
    category: 'DINING, NEWS',
    title: 'New Chef and Spring Special Menu',
    imageUrl: '/b2.jpg', // Placeholder
    link: '#',
    overlayColor: 'bg-black', // Default for other cards
    hasReadMore: false,
  },
  {
    // date: 'AUG 24',
    category: 'DINING, NEWS',
    title: 'Introducing New Restaurants',
    imageUrl: '/v1.png', // Placeholder
    link: '#',
    overlayColor: 'bg-black',
    hasReadMore: false,
  },
  {
    // date: 'JUN 18',
    category: 'NEWS, SIGHTSEEING, WELLNESS',
    title: 'Infinite Pool is Back',
    imageUrl: '/b4.jpg', // Placeholder
    link: '#',
    overlayColor: 'bg-black',
    hasReadMore: false,
  },
  {
    // date: 'JUN 17',
    category: 'NEWS, WELLNESS',
    title: 'Tour Tips When Visiting Zermatt',
    imageUrl: '/b5.jpg', // Placeholder
    link: '#',
    overlayColor: 'bg-black',
    hasReadMore: false,
  },
  {
    // date: 'JUN 12',
    category: 'NEWS, WELLNESS',
    title: 'Mountain Trail and Fitness Centre',
    imageUrl: '/b6.jpg', // Placeholder
    link: '#',
    overlayColor: 'bg-black',
    hasReadMore: false,
  },
];

const BlogPostGrid = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <a href={post.link} key={index} className="group relative block w-full h-96 overflow-hidden cursor-pointer">
            {/* Background Image */}
  

            {/* Overlay */}
            <div className={`absolute inset-0 ${post.overlayColor} opacity-30 group-hover:opacity-80 transition-opacity duration-300`}></div>

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col justify-between h-full text-white">
              {/* Date Tag */}
              {/* <span className="absolute top-4 right-4 bg-white text-gray-800 text-xs font-medium px-3 py-1">
                {post.date}
              </span> */}

              {/* Bottom Content */}
              <div className="mt-auto"> {/* Pushes content to the bottom */}
                <p className="text-xs uppercase tracking-widest text-gray-200 mb-2"> 
                  {post.category}
                </p>
                <h3 className="text-xl font-serif leading-tight mb-4 group-hover:text-gray-100 transition-colors duration-200">
                  {post.title}
                </h3>
                {post.hasReadMore && (
                  <span className="flex items-center text-sm uppercase font-medium tracking-wider hover:text-gray-300 transition-colors duration-200">
                    {/* Read More <ArrowRight className="w-4 h-4 ml-2" /> */}
                  </span>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BlogPostGrid;