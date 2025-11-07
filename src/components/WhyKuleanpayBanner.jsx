import React from 'react';
import herobg from '../assets/hero.jpg'; // The main background image
import whykuleanbanner from '../assets/whykuleanbanner.png'; // This image will be used for the right-side gradient and mockups
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
      <div className=" relative z-10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-16 lg:py-0 md:min-h-screen">
          
          {/* Left Column: Text */}
          <div className="flex flex-col lg:items-start text-left lg:text-left px-6 lg:pl-16">
            <h1 className="text-4xl lg:text-[67px] font-bold text-[#1B2632]">
              We protect <br />both parties on <br />all transactions
            </h1>
            <p className="mt-4 font-satoshi lg:max-w-lg  lg:text-[18px] text-[#19203199]">
              We ensure that both buyers and seller are protected on every transaction 
            </p>
            <div className="flex items-center gap-x-[14px] font-jakarta mt-3">
              <Link
                to="https://play.google.com/store/apps/details?id=com.cwg.kuleanpay&pli=1"
                className="px-4 lg:px-5 py-3 rounded-[10px] bg-[#03045E] border border-[#FFFFFF87] text-white md:text-[17px] transition"
              >
                Create An Account
              </Link>
            </div>
          </div> {/* ✅ closed left column properly */}

          {/* Right Column: Gradient Overlay */}
          <div className="hidden lg:block w-full h-full relative">
            <div className="absolute inset-0 bg-[#D4D5FF] z-10">
                <img src={whykuleanbanner} alt="" className='bg-cover mx-auto justify-center'/>
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
