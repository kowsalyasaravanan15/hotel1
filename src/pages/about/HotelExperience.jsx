// components/HotelExperienceGrid.jsx
// import React from 'react';

// const HotelExperienceGrid = () => {
//   // Data for the three sections
//   const sections = [
//     {
//       title: 'Restaurants & Bars',
//       subtitle: 'EXPERIENCE THE TASTE',
//       description: "CozyStay at CozyStay has an amazing dining options from around the world.",
//       imageClass: 'bg-restaurant',
//       linkText: 'Discover More',
//       imagePath: '/images/dining-table-bg.jpg', // Placeholder for bottom left image
//       align: 'top',
//     },
//     {
//       title: 'Spa & Wellness',
//       subtitle: 'RELAX & RECHARGE',
//       description: "Book a Four-Hour Spa and Wellness Center.",
//       imageClass: 'bg-spa',
//       linkText: 'Discover More',
//       imagePath: '/images/spa-jacuzzi-bg.jpg', // Placeholder for center image
//       align: 'bottom',
//       centerContent: true,
//     },
//     {
//       title: 'Local Activities',
//       subtitle: 'ACTIVITIES & CULTURE',
//       description: "White Bear is a mountains resort. The hotel provides options of places near to the villa.",
//       imageClass: 'bg-activities',
//       linkText: 'Discover More',
//       imagePath: '/images/pool-house-bg.jpg', // Placeholder for bottom right image
//       align: 'top',
//     },
//   ];

//   const SectionContent = ({ title, subtitle, description, linkText, align, centerContent }) => (
//     <div className={`relative z-10 flex flex-col p-8 md:p-12 ${centerContent ? 'h-full justify-end text-center' : 'h-full justify-start'}`}>
      
//       {/* Spacer div to push content to the bottom for center section */}
//       {centerContent ? <div className="flex-grow"></div> : null}

//       {/* Content Box */}
//       <div className={`${centerContent ? 'bg-black bg-opacity-40 p-6 md:p-8' : 'p-4 md:p-0'} rounded-sm`}>
//         <p className={`uppercase tracking-widest text-[0.6rem] sm:text-xs mb-1 ${centerContent ? 'text-white' : 'text-gray-600'}`}>
//           {subtitle}
//         </p>
//         <h3 className={`text-xl sm:text-2xl font-serif leading-tight mb-3 ${centerContent ? 'text-white' : 'text-gray-900'}`}>
//           {title}
//         </h3>
//         <p className={`text-sm leading-relaxed mb-4 ${centerContent ? 'text-gray-200' : 'text-gray-700'}`}>
//           {description}
//         </p>
//         <a href="#" className={`text-sm font-medium uppercase tracking-wider ${centerContent ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'}`}>
//           {linkText}
//         </a>
//       </div>
//     </div>
//   );

//   const getSectionClasses = (index) => {
//     switch (index) {
//       case 0: // Restaurants & Bars (Top Text, Bottom Image)
//         return 'lg:col-span-1 flex flex-col h-[50vh] lg:h-auto';
//       case 1: // Spa & Wellness (Full Height, Center Image, Bottom Text)
//         return 'lg:col-span-1 row-span-2 h-[80vh] lg:h-full';
//       case 2: // Local Activities (Top Text, Bottom Image)
//         return 'lg:col-span-1 flex flex-col h-[50vh] lg:h-auto';
//       default:
//         return 'lg:col-span-1 h-[50vh] lg:h-full';
//     }
//   };

//   const ContentBlock = ({ section }) => (
//     <div className={`relative ${section.imagePath ? 'bg-cover bg-center' : 'bg-white'} transition-all duration-500`}
//       style={{ backgroundImage: section.imagePath ? `url(${section.imagePath})` : 'none' }}>
      
//       {/* Only apply a light overlay to sections with background images */}
//       {section.imagePath && <div className="absolute inset-0 bg-black opacity-10"></div>}

//       <SectionContent {...section} />
//     </div>
//   );

//   return (
//     <section className="bg-white">
//       <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-0">
        
//         {/* Section 0: Restaurants (Content Block 1) */}
//         <div className={`bg-white ${getSectionClasses(0)}`}>
//           <SectionContent {...sections[0]} align="top" centerContent={false} />
//         </div>

//         {/* Section 1: Spa & Wellness (Main Image Block - occupies two rows on large screens) */}
//         <div className={`relative ${getSectionClasses(1)} bg-cover bg-center`}
//              style={{ backgroundImage: `url(${sections[1].imagePath})` }}>
//             <div className="absolute inset-0 bg-black opacity-30"></div> {/* Darker overlay for center image */}
//             <SectionContent {...sections[1]} align="bottom" centerContent={true} />
//         </div>
        
//         {/* Section 2: Local Activities (Content Block 3) */}
//         <div className={`bg-white ${getSectionClasses(2)}`}>
//           <SectionContent {...sections[2]} align="top" centerContent={false} />
//         </div>

//         {/* Section 3: Restaurants Image (Matches Section 0) */}
//         <ContentBlock section={sections[0]} />

//         {/* Section 4: Local Activities Image (Matches Section 2) */}
//         <ContentBlock section={sections[2]} />
//       </div>
//     </section>
//   );
// };

// export default HotelExperienceGrid;