import React from "react";
import about1 from "../assets/about1.jpg"; // replace with your image path
import about2 from "../assets/about2.jpg"; // replace with your image path

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white font-sans">
      {/* Title */}
       <h2 className="text-4xl md:text-5xl font-semibold lg:font-medium text-center text-[#000000] mb-8 lg:mb-16">
          How It Works
        </h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {/* Mission Card */}
        <div className="bg-[#F5F5F5] rounded-[20px] overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-medium mb-2">Our Mission</h3>
            <p className="text-[#7C7C7C] text-sm leading-relaxed">
              Looks great on phones, tablets, and desktops without extra effort.
              Built to adapt and perform.
            </p>
          </div>
          <img
            src={about1}
            alt="Our Mission"
            className="w-full object-cover h-64"
          />
        </div>

        {/* Vision Card */}
        <div className="bg-[#F5F5F5] rounded-[20px] overflow-hidden flex flex-col-reverse">
          <div className="p-6">
            <h3 className="text-2xl font-medium mb-2">Our Vision</h3>
            <p className="text-[#7C7C7C] text-sm leading-relaxed">
              Looks great on phones, tablets, and desktops without extra effort.
              Built to adapt and perform.
            </p>
          </div>
          <img
            src={about2}
            alt="Our Vision"
            className="w-full object-cover h-64"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
