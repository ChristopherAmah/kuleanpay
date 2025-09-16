import React from 'react';
// Import your new background images
import stat from '../assets/stat.png'; // Assuming you have these images


const StatsSection = () => {
  return (
    <section className="hidden lg:block bg-[#03045E] text-white py-12 px-6 lg:px-16 relative overflow-hidden">
      {/* Left Background Image */}
      <div
        className="absolute bottom-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${stat})`, backgroundPosition: 'bottom left' }}
      ></div>

      {/* Right Background Image */}
      <div
        className="absolute top-0 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${stat})`, backgroundPosition: 'top right' }}
      ></div>

      {/* Background pattern - (optional, keep if you still want the dots) */}
      {/* <div className="absolute inset-0 z-0 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="dot-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div> */}

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* Left Section: Headline */}
        <div className="text-center lg:text-left flex-shrink-0">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Save times by having <br className="hidden sm:inline" /> in one platform
          </h2>
        </div>

        {/* Right Section: Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16 lg:gap-20 text-center lg:text-left">
          {/* Stat 1 */}
          <div>
            <p className="text-5xl lg:text-6xl font-bold">5.1m+</p>
            <p className="text-sm mt-1 text-gray-300">Downloaded</p>
          </div>

          {/* Stat 2 */}
          <div>
            <p className="text-5xl lg:text-6xl font-bold">4.2m+</p>
            <p className="text-sm mt-1 text-gray-300">User Active</p>
          </div>

          {/* Stat 3 */}
          <div>
            <p className="text-5xl lg:text-6xl font-bold">40+</p>
            <p className="text-sm mt-1 text-gray-300">Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;