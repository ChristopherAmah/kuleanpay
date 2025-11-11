import React from 'react';
import herobg from '../assets/hero.jpg';
import merchant from '../assets/merchant.png';
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
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:py-0">
          
          {/* Left Column: Text */}
          <div className="flex flex-col lg:items-start text-left px-6 sm:px-6 lg:px-16 py-12">
            <h1 className="text-4xl lg:text-[77px] font-bold text-[#1B2632]">
              Merchants <br />payments <br />collection
            </h1>
            <p className="mt-4 font-satoshi lg:max-w-lg lg:text-[18px] text-[#19203199] text-base sm:text-lg">
              Partner with Kuleanpay to grow your business and accept secure payments. Our world-class API lets you integrate safe, fast services in just a few lines of code 
            </p>

            {/* Store Buttons */}
            <div className="mt-5 flex flex-row sm:flex-row gap-4">
              <Link
                to={'https://apps.apple.com/ng/app/kuleanpay/id1659853273'}
                className="flex items-center gap-3 bg-[#01011C] border border-[#A6A6A6] text-white rounded-lg px-3 py-2 md:px-3 md:py-2 w-40 md:w-auto transition-transform duration-300 hover:scale-105"
              >
                <FaApple className="w-5 h-5 md:w-7 md:h-7" />
                <div>
                  <p className="text-xs font-medium">Download on the</p>
                  <p className="text-sm md:text-xl md:font-semibold">App Store</p>
                </div>
              </Link>

              <Link
                to={'https://play.google.com/store/apps/details?id=com.cwg.kuleanpay'}
                className="flex items-center gap-3 bg-[#01011C] border border-[#A6A6A6] text-white rounded-lg px-3 py-2 md:px-3 md:py-2 w-40 md:w-auto transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={playstore}
                  alt="Playstore"
                  className="w-4 h-4 md:w-7 md:h-7"
                />
                <div>
                  <p className="text-xs font-medium">GET IT ON</p>
                  <p className="text-sm md:text-lg md:font-semibold">Google Play</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Background color + Image */}
          <div className="w-full flex justify-center lg:justify-end items-center relative lg:py-0">
            <div className="bg-[#D4D5FF] w-full flex justify-center items-center">
              <div className="w-full">
                <img
                  src={merchant}
                  alt="Merchant Payments"
                  className="w-3/4 object-contain"
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
