// components/BanffParkExperience.jsx
import React from 'react';

const BanffParkExperience = () => {
  return (
    <div className="font-sans">
      {/* Section 1: Top Text - In The Heart of the Banff Park */}
      <section className="bg-gray-100 py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-gray-600 mb-3">
            In the heart of the Banff Park
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 leading-tight mb-8">
            Outstanding Views
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Situated in the heart of the Banff National Park, the lodge offers a unique and beautiful mountain retreat. The perfect place to relax after a day of adventures and soak in the park's natural beauty.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Our accommodations all feature stunning views, comfortable beds, and all the amenities needed for a memorable stay.
          </p>
        </div>
      </section>

      {/* Section 2: Image Gallery (Three Vertical Images) */}
      <section className="bg-gray-100 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Image 1 */}
          <div 
            className="h-96 w-full bg-gray-300 bg-cover bg-center rounded-sm"
            style={{ backgroundImage: "url('/house 2.png')" }} // Placeholder
          ></div>
          {/* Image 2 */}
          <div 
            className="h-96 w-full bg-gray-300 bg-cover bg-center rounded-sm"
            style={{ backgroundImage: "url('/pot.jpg')" }} // Placeholder
          ></div>
          {/* Image 3 */}
          <div 
            className="h-96 w-full bg-gray-300 bg-cover bg-center rounded-sm"
            style={{ backgroundImage: "url('/flower.jpg')" }} // Placeholder
          ></div>
        </div>
      </section>

      {/* Section 3: Count-Up Section */}
      <section
        className="relative py-20 md:py-50 px-4 sm:px-6 lg:px-5 text-white text-center bg-cover bg-center mt-0"
        style={{ backgroundImage: "url('/ayodhya.webp')" }} // Placeholder
      >
        <div className="absolute inset-0 bg-black  opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          <p className="text-5xl font-'Poppins', sans-serif; uppercase tracking-widest text-gray-200 mb-6">
            The Best Holidays Start Here!
          </p>

          <p className="text-xl font-span; uppercase tracking-widest text-gray-200 mb-6">
          Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
          </p>

{/*         
          {/* <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-span mb-1">30</span>
              <span className="block text-sm uppercase tracking-wider text-gray-200">Rooms</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-span mb-1">10</span>
              <span className="block text-sm uppercase tracking-wider text-gray-200">Chalets</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-span mb-1">12</span>
              <span className="block text-sm uppercase tracking-wider text-gray-200">Lodges</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-span mb-1">9</span>
              <span className="block text-sm uppercase tracking-wider text-gray-200">Suites</span>
            </div> */} */
          {/* </div> */}
        </div>
      </section>

      {/* Section 4: Naturally Comfortable Rooms & Quote */}
      <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-600 mb-3">
              NATURALLY COMFORTABLE
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 leading-tight mb-6">
              Naturally Comfortable rooms and Private Chalets
            </h3>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Nestled into a vibrant landscape, all of our rooms and chalets offer private balconies overlooking spectacular views. They're designed to be a comfortable sanctuary after a day of adventures.
            </p>
            <button className="bg-[#536E5F] text-white px-6 py-3 hover:bg-[#3D554E] transition-colors duration-200 text-sm uppercase tracking-wider">
              Read More
            </button>
          </div>
          {/* Right Image/Quote Box */}
          <div 
            className="p-8 md:p-10 bg-[#536E5F] text-white flex flex-col justify-center min-h-[500px] rounded-sm"
            style={{ backgroundImage: "url('/family.webp')", backgroundBlendMode: 'overlay' }} // Placeholder
          >
            {/* <p className="text-lg md:text-xl font-serif leading-relaxed mb-4 italic">
              "We're providing an inviting, comfortable haven that, whether you're alone or with companions, creates a memorable experience."
            </p> */}
            {/* <p className="text-sm text-gray-200 uppercase tracking-widest">- Management</p> */}
          </div>
        </div>
      </section>

      {/* Section 5: The Best Mountain Stay Experience */}
      <section className="bg-white pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Image */}
          <div 
            className="h-100 md:h-100 w-full bg-gray-300 bg-cover bg-center rounded-sm"
            style={{ backgroundImage: "url('walk.jpg')" }} // Placeholder
          ></div>
          {/* Right Content */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-600 mb-3">
              OUR COMFORT
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 leading-tight mb-6">
              The Best Mountain Stay Experience
            </h3>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Our unique mountain setting offers an unparalleled experience. Wake up to fresh mountain air, enjoy scenic trails, and unwind in our luxurious accommodations. Your adventure awaits!
            </p>
            <button className="bg-[#536E5F] text-white px-6 py-3 hover:bg-[#3D554E] transition-colors duration-200 text-sm uppercase tracking-wider">
              Explore Amenities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BanffParkExperience;