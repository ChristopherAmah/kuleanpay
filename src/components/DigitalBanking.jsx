import React from 'react';
import herobg from '../assets/hero.jpg'; // The main background image
import dbanking from '../assets/dbanking.png'; // Right-side image
import { Link } from 'react-router-dom';

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
          <div className="flex flex-col text-left lg:items-start px-6 sm:px-6 lg:px-16 py-6">
            <h1 className="text-4xl lg:text-[77px] font-bold text-[#1B2632] ">
              Digital <br />Banking
            </h1>
            <p className="mt-4 font-satoshi lg:max-w-lg lg:text-[18px] text-[#19203199] text-base sm:text-lg">
              Say no to transaction delays and fraudulent transactions as you send and receive money instantly within any bank in Nigeria with Kuleanpay.
            </p>
            <div className="flex flex-row sm:flex-row gap-4 mt-4">
              <Link
                to="https://play.google.com/store/apps/details?id=com.cwg.kuleanpay&pli=1"
                className="px-4 lg:px-5 py-2 rounded-[10px] bg-[#03045E] border text-white text-center transition"
              >
                Get Started
              </Link>
              <a
                href="#digitalhowitworks"
                className="px-4 lg:px-5 py-2 rounded-[10px] border border-[#03045E] bg-white text-[#03045E] text-center transition"
              >
                How it Works
              </a>
            </div>
          </div>

          {/* Right Column: Background color + Image */}
          <div className="w-full flex justify-center lg:justify-end items-center lg:py-0 relative">
            <div className="bg-[#D4D5FF] w-full h-full flex justify-center items-center">
              <div className="w-3/4 sm:w-1/2 lg:w-full max-w-md">
                <img
                  src={dbanking}
                  alt="Digital Banking with Kuleanpay"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
