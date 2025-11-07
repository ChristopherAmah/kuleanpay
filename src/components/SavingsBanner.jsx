import React from 'react';
import herobg from '../assets/hero.jpg'; // The main background image
import savingsbanner from '../assets/savingsbanner.png'; // This image will be used for the right-side gradient and mockups
import { Link } from 'react-router-dom';
import playstore from "../assets/playstore.png";
import { FaApple} from "react-icons/fa";

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
          <div className="flex flex-col lg:items-start text-left lg:text-left px-6 sm:px-6 lg:px-16">
            <h1 className="text-4xl lg:text-[77px] font-bold text-[#1B2632]">
              Savings & <br />More
            </h1>
            <p className="mt-4 font-satoshi lg:max-w-lg  lg:text-[18px] text-[#19203199]">
              Build better money habits with Kuleanpay. From smart savings to secure payments, every feature is designed to help you take full control of your finances. 
            </p>
            {/* <div className="flex items-center gap-x-[14px] font-jakarta mt-3">
              <Link
                to="/signup"
                className="px-4 lg:px-5 py-2 rounded-[10px] bg-[#03045E] border text-white md:text-[17px] transition"
              >
                Sign up
              </Link>
              <Link
                to="/signup"
                className="px-4 lg:px-5 py-2 rounded-[10px] border border-[#03045E] bg-white md:text-[17px] text-[#03045E] transition"
              >
                Sign up
              </Link>
            </div> */}

            {/* Store Buttons */}
            <div className="mt-5 flex flex-col sm:flex-row lg:items-start gap-4">
              <Link
                to={'https://apps.apple.com/ng/app/kuleanpay/id1659853273'}
                className="flex items-center gap-3 bg-[#01011C] border border-[#A6A6A6] text-white rounded-lg px-3 py-2 md:px-3 md:py-2 w-40 md:w-auto transition-transform duration-300 hover:scale-105"
              >
                <FaApple className="w-5 h-5 md:w-7 md:h-7" />
                <div>
                  <p className="text-xs font-medium">Download on the</p>
                  <p className="text-sm md:text-xl md:font-semibold">
                    App Store
                  </p>
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
                  <p className="text-sm md:text-lg md:font-semibold">
                    Google Play
                  </p>
                </div>
              </Link>
            </div>
          </div> {/* ✅ closed left column properly */}

          {/* Right Column: Gradient Overlay */}
          <div className="hidden lg:block w-full h-full relative">
            <div className="absolute inset-0 bg-[#D4D5FF] z-10">
                <img src={savingsbanner} alt="" className='bg-cover mx-auto justify-center'/>
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
