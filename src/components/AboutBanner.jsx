import React from 'react';
import herobg from '../assets/hero.jpg'; // The main background image
import about from '../assets/about.png'; // This image will be used for the right-side gradient and mockups
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
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-0">
          
          {/* Left Column: Text */}
          <div className="flex flex-col lg:items-start text-left px-6 sm:px-6 lg:px-16 md:pl-16 py-12">
            <h1 className="text-3xl sm:text-4xl lg:text-[77px] font-bold text-[#1B2632] ">
              About <br />Kuleanpay
            </h1>
            <p className="mt-4 font-satoshi lg:max-w-lg lg:text-[18px] text-[#19203199] text-base sm:text-lg">
              We are in the business of providing individuals and corporate bodies a secure online payment platform to reduce the growing rate of fraudulent transactions online.
            </p>
            <div className="flex items-center gap-x-3 sm:gap-x-4 font-jakarta mt-4 sm:mt-6">
              <Link
                to="https://play.google.com/store/apps/details?id=com.cwg.kuleanpay&pli=1"
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-[10px] bg-[#03045E] border text-white text-sm sm:text-[17px] transition"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full bg-[#D4D5FF] flex justify-center lg:justify-end items-center relative">
            <div className="w-3/4 sm:w-1/2 lg:w-full max-w-md lg:max-w-full">
              <img
                src={about}
                alt="About Kuleanpay"
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
