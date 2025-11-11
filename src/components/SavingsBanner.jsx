import React from 'react';
import herobg from '../assets/hero.jpg';
import savingsbanner from '../assets/savingsbanner.png';
import { Link } from 'react-router-dom';
import playstore from "../assets/playstore.png";
import { FaApple } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden font-sans"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="relative z-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:py-0">
          
          {/* Left Column: Text */}
          <div className="flex flex-col lg:items-start text-left px-6 sm:px-6 lg:px-16 py-6">
            <h1 className="text-4xl lg:text-[77px] font-bold text-[#1B2632] py-2">
              Savings & <br />More
            </h1>
            <p className="mt-4 font-satoshi lg:max-w-lg lg:text-[18px] text-[#19203199] text-base sm:text-lg py-2">
              Build better money habits with Kuleanpay. From smart savings to secure payments, every feature is designed to help you take full control of your finances. 
            </p>

            {/* Store Buttons */}
            <div className="mt-5 flex flex-row sm:flex-row lg:items-start gap-4 py-2">
              <Link
                to={'https://apps.apple.com/ng/app/kuleanpay/id1659853273'}
                className="flex items-center gap-3 bg-[#01011C] border border-[#A6A6A6] text-white rounded-lg px-2 py-2 md:px-3 md:py-2 md:w-auto transition-transform duration-300 hover:scale-105"
              >
                <FaApple className="w-5 h-5 md:w-7 md:h-7" />
                <div>
                  <p className="text-[12px] md:text-xs md:font-medium">Download on the</p>
                  <p className="text-xs md:text-xl md:font-semibold">
                    App Store
                  </p>
                </div>
              </Link>

              <Link
                to={'https://play.google.com/store/apps/details?id=com.cwg.kuleanpay'}
                className="flex items-center gap-3 bg-[#01011C] border border-[#A6A6A6] text-white rounded-lg px-5 py-2 md:px-3 md:py-2 md:w-auto transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={playstore}
                  alt="Playstore"
                  className="w-4 h-4 md:w-7 md:h-7"
                />
                <div>
                  <p className="text-[12px] md:text-xs md:font-medium">GET IT ON</p>
                  <p className="text-xs md:text-lg md:font-semibold">
                    Google Play
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Background + Image */}
          <div className="w-full flex justify-center items-center relative">
            <div className="bg-[#D4D5FF] w-full flex justify-center items-center">
              <div className="w-full max-w-2xl">
                <img
                  src={savingsbanner}
                  alt="Savings Banner"
                  className="w-full object-contain"
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
