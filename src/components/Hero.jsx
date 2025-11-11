import React from "react";
import herobg from "../assets/hero.jpg";
import hero from "../assets/herobg.png";
import phoneandlaptop from "../assets/phoneandlaptop.png";
import playstore from "../assets/playstore.png";
import { FaApple, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import banner from "../assets/banner.jpg";
import { Link } from "react-router-dom";

// ⭐ Reusable Rating Component
const Rating = ({ rating = 4.5 }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="mt-10 flex items-center gap-2 mb-10">
      <div className="flex text-yellow-400">
        {/* Full Stars */}
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="w-4 h-4 md:w-6 md:h-6" />
        ))}

        {/* Half Star */}
        {hasHalfStar && <FaStarHalfAlt className="w-4 h-4 md:w-6 md:h-6" />}

        {/* Empty Stars */}
        {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map(
          (_, i) => (
            <FaRegStar key={`empty-${i}`} className="w-4 h-4 md:w-6 md:h-6 text-gray-300" />
          )
        )}
      </div>
      <p className="font-semibold text-slate-700">{rating.toFixed(1)} / 5.0</p>
    </div>
  );
};

// --- Hero Section ---
const HeroSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden font-sans"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-[5fr_5fr] items-center">
          {/* Left Column: Text */}
          <div className="order-1 lg:order-1 lg:pl-16 px-6 lg:px-0">
            <h1 className="text-4xl lg:text-7xl font-bold font-satoshi pt-20 md:pt-0 text-[#1B2632]">
              Unlock Better Finances with Kuleanpay!
            </h1>
            <p className="mt-[16px] px-2 font-satoshi md:text-[18px] text-[#19203199] md:max-w-xl">
              Download our app for seamless daily transactions and effortless
              finance management. Stay on top of your spending and make buying
              and selling a breeze!
            </p>

            {/* Store Buttons */}
            <div className="mt-10 flex flex-row sm:flex-row lg:items-start gap-4">
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

            {/* Rating Section */}
            <Rating rating={4.9} />
          </div>

          {/* Right Column: Image */}
          <div className="order-2 lg:order-2 w-full bg-[#D4D5FF] flex justify-center items-center">
            {/* Mobile & Tablet (smaller screens) */}
            <div className="block lg:hidden w-full overflow-hidden">
              <div className="w-full h-[250px] overflow-hidden relative">
                <img
                  src={phoneandlaptop}
                  alt="Phone Mockup"
                  className="absolute top-0 left-0 w-full h-auto object-cover pl-8 pt-16"
                  style={{ transform: "translateY(0%)" }}
                />
              </div>
            </div>


            {/* Desktop (larger screens) */}
            <div className="hidden lg:block w-full h-full overflow-hidden">
              <img
                src={hero}
                alt="Hero"
                className="w-full h-full object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Optional Banner Below */}
      {/* <img src={banner} alt="banner" className="w-full" /> */}
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
