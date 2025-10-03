import React from 'react';
import herobg from '../assets/hero.jpg'; // The main background image
import escrowbanner from '../assets/escrowbanner.png'; // The banner at the bottom


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
          <div className="flex flex-col text-left lg:items-start lg:text-left px-6 sm:px-6 lg:px-16">
            <h1 className="text-4xl lg:text-[77px] font-bold text-[#1B2632] leading-tight" style={{fontStyle: "satoshi"}}>
              Go Escrow<br />with <br />Kuleanpay
            </h1>
            <p className="mt-4 font-satoshi md:max-w-xl lg:max-w-lg  lg:text-[18px] md:font-medium text-[#19203199]">
              Both buyers and sellers are protected and funds held securely by us. Payments are released only after orders are fulfilled.
            </p>
          </div> {/* ✅ closed left column properly */}

          {/* Right Column: Gradient Overlay */}
          <div className="hidden lg:block w-full h-full relative">
            <div className="absolute inset-0 bg-[#D4D5FF] z-10">
                <img src={escrowbanner} alt="" className='bg-cover mx-auto justify-center'/>
            </div>
          </div>
          
        </div>
      </div>
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
