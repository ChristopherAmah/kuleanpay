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
        backgroundPosition: 'center'
      }}
    >
      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-16 lg:py-0 md:min-h-[600px]">
          
          {/* Left Column: Text */}
          <div className="flex flex-col lg:items-start text-left lg:text-left px-6 sm:px-6 lg:px-16">
            <h1 className="text-4xl lg:text-[77px] font-bold text-[#1B2632] leading-tight">
              About <br />Kuleanpay
            </h1>
            <p className="mt-4 font-satoshi lg:max-w-lg text-base lg:text-[18px] md:font-medium text-[#19203199]">
                We are in the business of providing individuals and corporate bodies a secure online payment platform to reduce the growing rate of fraudulent transactions online.            </p>
            <div className="flex items-center gap-x-[14px] font-jakarta mt-3">
              <Link
                to="/signup"
                className="px-4 lg:px-5 py-2 rounded-[10px] bg-[#03045E] border text-white md:text-[17px] transition"
              >
                Get Started
              </Link>
            </div>
          </div> {/* ✅ closed left column properly */}

          {/* Right Column: Gradient Overlay */}
          <div className="hidden lg:block w-full h-full relative">
            <div className="absolute inset-0 bg-[#D4D5FF] z-10">
                <img src={about} alt="" className='bg-cover mx-auto justify-center'/>
            </div>
          </div>
          
        </div>
      </div>

      {/* Optional Banner Below */}
      {/* <img src={banner} alt="banner" className="w-full mt-auto" /> */}
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
