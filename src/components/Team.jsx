import React from "react";

import member1 from "../assets/merchantlink1.svg";
import member2 from "../assets/merchantlink1.svg";
import member3 from "../assets/merchantlink1.svg";

const TeamSection = () => {
  return (
    <div className="flex justify-center items-center px-4 sm:px-6 md:px-12 py-12 bg-white">
      <div className="w-full max-w-3xl text-center bg-blue-50 px-6 sm:px-10 md:px-20 py-10 rounded-lg shadow-sm border border-blue-100">
        
        {/* --- Team Member Images --- */}
        <div className="flex justify-center -space-x-3 sm:-space-x-4 mb-6">
          <img
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-white object-cover shadow-md"
            src={member1}
            alt="Team Member 1"
          />
          <img
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-white object-cover shadow-md"
            src={member2}
            alt="Team Member 2"
          />
          <img
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-white object-cover shadow-md"
            src={member3}
            alt="Team Member 3"
          />
        </div>

        {/* --- Heading --- */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-satoshi font-medium text-[#000000] mb-4">
          See The Team
        </h2>

        {/* --- Description --- */}
        <p className="text-sm sm:text-base md:text-[17px] text-[#7C7C7C] mb-8 font-medium mx-auto max-w-xl px-2">
          Our team consists of a group of talented and creative people who work hard to solve real problems and change how people live and work.
        </p>

        {/* --- Button --- */}
        <button
          className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#03045E] text-white text-base sm:text-lg md:text-[20px] font-medium rounded-lg hover:bg-[#020347] transition duration-300"
          onClick={() => console.log("Viewing team...")}
        >
          View Team
        </button>
      </div>
    </div>
  );
};

export default TeamSection;
