import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import hero from "../assets/herobg.png"; // Ensure this path is correct
import bg from "../assets/bg.png"; // Ensure this path is correct

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
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
        Let’s connect and manage your{" "}
        <br className="hidden md:block" /> finances with{" "}
        <span className="text-indigo-500 font-bold">Kuleanpay</span>
      </h1>

      {/* Store Buttons */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <a
          href="#"
          className="flex items-center bg-black text-white rounded-lg px-4 py-2 gap-2 hover:bg-gray-800 transition"
        >
          <FaApple size={20} />
          <div className="text-left">
            <p className="text-xs">Download on the</p>
            <p className="font-semibold text-sm">App Store</p>
          </div>
        </a>

        <a
          href="#"
          className="flex items-center bg-black text-white rounded-lg px-4 py-2 gap-2 hover:bg-gray-800 transition"
        >
          <FaGooglePlay size={20} />
          <div className="text-left">
            <p className="text-xs">GET IT ON</p>
            <p className="font-semibold text-sm">Google Play</p>
          </div>
        </a>
      </div>

      {/* Mockup Preview */}
      <div className="flex justify-center items-center">
        <div className="w-max-w-7xl h-100  overflow-hidden">
          <img
            src={hero}
            alt="Phone Mockup"
            className="h-[180%] object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
