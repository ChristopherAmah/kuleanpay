import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import phoneandlaptop from "../assets/phoneandlaptop.png";
import bg from "../assets/bg.png";

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
      <h1 className="text-3xl md:text-4xl px-2 font-semibold text-gray-900 leading-snug">
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

      {/* Mockup Preview - Top Half Only (Responsive) */}
      <div className="flex justify-center items-center mt-10">
        <div className="w-full max-w-5xl h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden">
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
