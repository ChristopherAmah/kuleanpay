import React from 'react';
import herobg from '../assets/hero.jpg'; // The main background image
import hero from '../assets/herobg.png'; // This image will be used for the right-side gradient and mockups
import playstore from '../assets/playstore.png';
import { FaApple } from "react-icons/fa";
import banner from '../assets/banner.jpg'; // The banner at the bottom
import { Link } from 'react-router-dom';

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
      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[600px]">
          
          {/* Left Column: Text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-4 sm:px-6 lg:px-16">
            <h1 className="text-4xl lg:text-[77px] font-bold text-[#1B2632] leading-tight">
              Go Escrow<br />with <br />Kuleanpay
            </h1>
            <p className="mt-4 font-satoshi lg:max-w-lg text-base lg:text-[18px] font-medium text-[#19203199]">
              Both buyers and sellers are protected and funds held securely by us. Payments are released only after orders are fulfilled.
            </p>
          </div> {/* ✅ closed left column properly */}

          {/* Right Column: Gradient Overlay */}
          <div className="hidden lg:block w-full h-full relative">
            <div className="absolute inset-0 bg-[#D4D5FF] z-10"></div>
          </div>
          
        </div>
      </div>

      {/* Optional Banner Below */}
      <img src={banner} alt="banner" className="w-full mt-auto" />
    </section>
  );
};

// --- App Component ---
export default function App() {
  return (
    <div>
      <HeroSection />
    </div>
  );
}
