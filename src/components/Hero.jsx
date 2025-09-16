import React from 'react';
import herobg from '../assets/hero.jpg';
import hero from '../assets/herobg.png';
import playstore from '../assets/playstore.png';
import { FaApple } from "react-icons/fa";
import banner from '../assets/banner.jpg';

// --- SVG Icon Component ---
const StarIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
      00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 
      1 0 00-.364 1.118l1.07 3.292c.3.921-.755 
      1.688-1.54 1.118l-2.8-2.034a1 1 0 
      00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 
      1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 
      1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// --- Hero Section ---
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
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[4fr_5fr] items-center min-h-[600px]">
          
          {/* Left Column: Text */}
          <div className="pl-10 pt-20">
            <h1 className="text-4xl lg:text-7xl mt-[70px] font-bold font-satoshi text-[#1B2632]">
              Unlock Better Finances with Kuleanpay!
            </h1>
            <p className="mt-[16px] font-satoshi text-[18px] text-[#19203199] max-w-xl">
              Download our app for seamless daily transactions and effortless finance management. 
              Stay on top of your spending and make buying and selling a breeze!
            </p>
            
            {/* Store Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <a href="#" className="flex items-center gap-3 bg-[#01011C] shadow-lg border border-[#A6A6A6] text-white rounded-lg px-5 py-3 w-48 transition-transform duration-300 hover:scale-105">
                <FaApple className="w-7 h-7"/>
                <div>
                  <p className="text-xs font-medium">Download on the</p>
                  <p className="text-xl font-semibold">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 bg-[#01011C] shadow-lg border border-[#A6A6A6] text-white rounded-lg px-5 py-3 w-48 transition-transform duration-300 hover:scale-105">
                <img src={playstore} alt="Playstore" className="w-6 h-6"/>
                <div>
                  <p className="text-xs font-medium">GET IT ON</p>
                  <p className="text-lg font-semibold">Google Play</p>
                </div>
              </a>
            </div>

            {/* Ratings */}
            <div className="mt-10 flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="font-semibold text-slate-700">4.9 / 5.0</p>
            </div>
          </div>

          {/* Right Column: Full Cover Image */}
          <div className="hidden lg:block w-full h-full bg-[#D4D5FF]">
            <img 
              src={hero} 
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>
      </div>

      {/* Optional Banner Below */}
      <img src={banner} alt="banner" className="w-full"/>
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
