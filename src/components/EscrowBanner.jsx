import React from 'react';
import herobg from '../assets/hero.jpg'; // The main background image
import escrowbanner from '../assets/escrowbanner.png'; // The right-side image

const HeroSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden font-sans"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:py-0">
          
          {/* Left Column: Text */}
          <div className="flex flex-col text-left lg:items-start px-6 sm:px-6 lg:pl-16 py-6">
            <h1 className="text-4xl lg:text-[77px] font-bold text-[#1B2632] ">
              Go Escrow<br />with <br />Kuleanpay
            </h1>
            <p className="mt-4 font-satoshi md:max-w-xl lg:max-w-md lg:text-[18px] text-[#19203199] text-base sm:text-lg">
              Both buyers and sellers are protected and funds held securely by us. Payments are released only after orders are fulfilled.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="w-full bg-[#D4D5FF] flex justify-center lg:justify-end items-center py-6 lg:py-0">
            <div className="w-3/4 sm:w-1/2 lg:w-full max-w-md lg:max-w-full">
              <img
                src={escrowbanner}
                alt="Escrow with Kuleanpay"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
