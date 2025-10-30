// components/RestaurantMenu.jsx

import React from 'react';
// import Image from 'next/image'; // Uncomment if using Next.js Image component for optimization

// --- Data Structure ---
const menuData = {
  appetizers: [
    {
      image: '/a1.png', // Placeholder path
      title: 'Purple Corn Tostada',
      description: 'Ricotta, goat cheese, beetroot and datterini.',
      price: 36,
    },
    {
      image: '/a2.png', // Placeholder path
      title: "Bruno's Scribble",
      description: 'Culatello, Spalla Cotta, Mortadella, Culacciona.',
      price: 30,
      tag: 'ORIGINAL',
    },
    {
      image: '/a3.png', // Placeholder path
      title: 'Fresh Oysters Dozen',
      description: 'Our selection of fresh oysters, limes.',
      price: 59,
    },
  ],
  mainCourses: [
    {
      image: 'm1.jpg', // Placeholder path
      title: 'Crispy Skin Chicken',
      description: 'Ricotta, radicchio, prosciutto salad, cabernet.',
      price: 33,
      tag: 'CHEF RECOMMENDS',
    },
    {
      image: '/m2.png',// Placeholder path
      title: 'Flank Steak',
      description: 'Served medium rare, salad, mushroom sauce.',
      price: 35,
    },
    {
      image: 'm3.png', // Placeholder path
      title: 'Alaskan King Crab',
      description: 'Truffle mash, pepper sauce.',
      price: 58,
      tag: 'POPULAR',
    },
    {
      image: '/m4.png', // Placeholder path
      title: 'Filet Mignon',
      description: 'Atlantic cod fillet, chips, salad, tartare, lemon.',
      price: 33,
    },
    {
      image: '/m5.png', // Placeholder path
      title: 'Fish & Chips',
      description: 'Served medium rare, salad, mushroom sauce.',
      price: 35,
    },
    {
      image: '/m1.jpg', // Placeholder path
      title: 'Beefsteak Tomato & Onion',
      description: 'Ricotta, radicchio, prosciutto salad, cabernet.',
      price: 33,
    },
    {
      image: '/a1.png', // Placeholder path
      title: 'Ebony Fillet Steak',
      description: 'Truffle mash, pepper sauce.',
      price: 58,
    },
  ],
  sideDishes: [
    {
      image: '/s1.png', // Placeholder path
      title: 'Wild Mushroom Arancini',
      description: 'Porcini puree, parmesan, basil.',
      price: 18,
    },
    {
      image: '/s2.png', // Placeholder path
      title: 'Purple Corn Tostada',
      description: 'Ricotta, goat cheese, beetroot and datterini.',
      price: 36,
    },
    {
      image: '/s3.png', // Placeholder path
      title: 'Grilled Octopus',
      description: 'Culatello, Spalla Cotta, Mortadella, Culacciona.',
      price: 30,
    },
    {
      image: '/s4.png', // Placeholder path
      title: 'Fresh Oysters Dozen',
      description: 'Our selection of fresh oysters, limes.',
      price: 59,
    },
  ],
};

// --- Helper Components ---

/**
 * Renders a small tag (e.g., ORIGINAL, POPULAR).
 */
const MenuTag = ({ children, className }) => (
  <span
    className={`ml-2 text-[10px] uppercase font-bold tracking-wider px-1 py-0.5 rounded ${className}`}
  >
    {children}
  </span>
);

/**
 * Renders a single menu item row.
 */
const MenuItem = ({ item }) => {
  // Determine tag style
  let tagClass = 'bg-gray-200 text-gray-800';
  if (item.tag === 'ORIGINAL') {
    tagClass = 'bg-[#D1B174] text-white'; // Custom gold/beige color for ORIGINAL
  } else if (item.tag === 'CHEF RECOMMENDS') {
    tagClass = 'bg-[#6D8A77] text-white'; // Custom green color for CHEF RECOMMENDS
  } else if (item.tag === 'POPULAR') {
    tagClass = 'bg-red-600 text-white'; // Custom red for POPULAR
  }

  return (
    <div className="flex items-start py-3 border-b border-gray-100 last:border-b-0">
      {/* Item Image (Circle) */}
      <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden mr-4">
        {/*
        If using Next.js Image:
        <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
        */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Item Details */}
      <div className="flex-grow min-w-0">
        <div className="flex justify-between items-start">
          {/* Title */}
          <h3 className="text-base md:text-lg font-medium text-gray-800 flex items-center min-w-[70%]">
            {item.title}
            {item.tag && <MenuTag className={tagClass}>{item.tag}</MenuTag>}
            
            {/* Dotted line filler */}
            <span className="flex-grow border-b border-dotted border-gray-400 mx-2 mt-4"></span>
          </h3>

          {/* Price */}
          <p className="text-base md:text-lg font-serif text-[#D1B174] font-bold pl-2 flex-shrink-0">
            ${item.price}
          </p>
        </div>
        
        {/* Description */}
        <p className="text-xs md:text-sm text-gray-500 mt-0.5 leading-snug">
          {item.description}
        </p>
      </div>
    </div>
  );
};

// --- Main Component ---

const RestaurantMenu = () => {
  return (
    <section className="bg-white py-12 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:space-x-12">

          {/* Left Column (Appetizers & Side Dishes) */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            
            {/* Appetizers Header */}
            <h2 className="text-2xl sm:text-3xl font-serif text-[#D1B174] uppercase tracking-wider text-center mb-10 relative">
              APPETIZERS
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-gray-200" style={{ transform: 'rotate(45deg)' }}>◆</span>
            </h2>

            {/* Appetizers List */}
            <div>
              {menuData.appetizers.map((item, index) => (
                <MenuItem key={`app-${index}`} item={item} />
              ))}
            </div>

            {/* Separator / Footer Decoration */}
            <div className="h-10 my-10 border-t border-b border-gray-100 flex items-center justify-center">
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            </div>
            
            {/* Side Dishes Header */}
            <h2 className="text-2xl sm:text-3xl font-serif text-[#D1B174] uppercase tracking-wider text-center mb-10 relative">
              SIDE DISHES
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-gray-200" style={{ transform: 'rotate(45deg)' }}>◆</span>
            </h2>

            {/* Side Dishes List */}
            <div>
              {menuData.sideDishes.map((item, index) => (
                <MenuItem key={`side-${index}`} item={item} />
              ))}
            </div>
          </div>

          {/* Right Column (Main Courses) */}
          <div className="lg:w-1/2">
            
            {/* Main Courses Header */}
            <h2 className="text-2xl sm:text-3xl font-serif text-[#D1B174] uppercase tracking-wider text-center mb-10 relative">
              MAIN COURSES
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-gray-200" style={{ transform: 'rotate(45deg)' }}>◆</span>
            </h2>

            {/* Main Courses List */}
            <div>
              {menuData.mainCourses.map((item, index) => (
                <MenuItem key={`main-${index}`} item={item} />
              ))}
            </div>

             {/* Footer Decoration (to match the design's bottom-center element) */}
            <div className="h-10 mt-10 flex items-center justify-center">
                <span className="w-4 h-4 text-gray-200" style={{ transform: 'rotate(45deg)' }}>◆</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantMenu;