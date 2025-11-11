import React from "react";
import about1 from "../assets/about1.png"; 
import about2 from "../assets/about2.png"; 

const HowItWorks = () => {
  return (
    <section className="py-12 sm:py-16 bg-white font-sans">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-[56px] font-semibold lg:font-medium text-center text-[#000000] mb-6 sm:mb-8 lg:mb-16">
        How It Works
      </h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:px-16 mx-auto px-4">
        {/* Mission Card */}
        <div className="bg-[#F5F5F5] rounded-[20px] overflow-hidden flex flex-col">
          <img
            src={about1}
            alt="Our Mission"
            className="w-full h-auto object-contain"
          />
          <div className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-medium mb-2">Our Mission</h3>
            <p className="text-[#7C7C7C] text-base sm:text-lg leading-relaxed">
              To create simplified solutions that make life and work easy.
            </p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="bg-[#F5F5F5] rounded-[20px] overflow-hidden flex flex-col">
          <img
            src={about2}
            alt="Our Vision"
            className="w-full h-auto object-contain"
          />
          <div className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-medium mb-2">Our Vision</h3>
            <p className="text-[#7C7C7C] text-base sm:text-lg leading-relaxed">
              To build high tech IT solutions that empower people and businesses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
