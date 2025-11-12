import React from 'react';
// Import your background images
import stat from '../assets/stat.png';

const StatsSection = () => {
  return (
    <section className="relative bg-[#03045E] text-white py-8 px-4 sm:px-10 lg:px-16 overflow-hidden">
      {/* Left Background Image */}
      <div
        className="absolute bottom-0 left-0 w-[120px] sm:w-[250px] lg:w-[400px] h-[120px] sm:h-[250px] lg:h-[500px] bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: `url(${stat})`, backgroundPosition: 'bottom left' }}
      ></div>

      {/* Right Background Image */}
      <div
        className="absolute top-0 right-0 w-[120px] sm:w-[250px] lg:w-[500px] h-[120px] sm:h-[250px] lg:h-[400px] bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: `url(${stat})`, backgroundPosition: 'top right' }}
      ></div>

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-20">
        {/* Left Section: Headline */}
        <div className="text-center lg:text-left flex-shrink-0">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold ">
            Kuelanpay is a complete <br className="hidden sm:inline" /> financial solution for everyone
          </h2>
        </div>

        {/* Right Section: Stats */}
        <div className="flex flex-wrap justify-center lg:grid lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-20 text-center lg:text-left mt-6">
          {/* Stat 1 */}
          <div className="flex-1 min-w-[80px]">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">40K+</p>
            <p className="text-xs sm:text-sm mt-1 text-[#FFFFFF80]">Downloads</p>
          </div>

          {/* Stat 2 */}
          <div className="flex-1 min-w-[80px]">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">10K+</p>
            <p className="text-xs sm:text-sm mt-1 text-[#FFFFFF80]">Active Users</p>
          </div>

          {/* Stat 3 */}
          <div className="flex-1 min-w-[80px]">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">95%</p>
            <p className="text-xs sm:text-sm mt-1 text-[#FFFFFF80]">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
