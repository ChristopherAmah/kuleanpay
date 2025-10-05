import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import phoneandlaptop from "../assets/phoneandlaptop.png";
import bg from "../assets/bg.png";
import playstore from "../assets/playstore.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="pt-16 text-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl px-2 font-bold text-[#1B2632]">
        Let’s connect and manage your{" "}
        <br className="hidden md:block" /> finances with{" "}
        <span className="text-[#5E7CEE] font-bold">Kuleanpay.</span>
      </h1>

      {/* Store Buttons */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <Link
          to={'https://apps.apple.com/ng/app/kuleanpay/id1659853273'}
          className="flex items-center bg-[#01011C] text-white rounded-lg px-4 py-2 gap-2 border border-[#A6A6A6] hover:bg-gray-800 transition"
        >
          <FaApple size={20} />
          <div className="text-left">
            <p className="text-xs">Download on the</p>
            <p className="font-semibold text-sm">App Store</p>
          </div>
        </Link>

        <Link
          to={'https://play.google.com/store/apps/details?id=com.cwg.kuleanpay'}
          className="flex items-center gap-2 bg-[#01011C] text-white rounded-lg px-4 py-2 border border-[#A6A6A6] hover:bg-gray-800 transition"
        >
          <img src={playstore} alt="Playstore" className="w-5 h-5" />
          <div className="text-left">
            <p className="text-xs">GET IT ON</p>
            <p className="text-sm font-semibold">Google Play</p>
          </div>
        </Link>
      </div>

      {/* Mockup Preview - Top Half Only (Responsive) */}
      <div className="flex justify-center items-center mt-10">
        <div className="w-full max-w-5xl h-[200px] md:ml-20 sm:h-[300px] md:h-[320px] overflow-hidden">
          <img
            src={phoneandlaptop}
            alt="Phone and Laptop Mockup"
            className="w-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
