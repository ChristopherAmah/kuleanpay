import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import playstore from "../assets/playstore.png";
import { FaApple, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const solutionsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target)) {
        setIsSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-[#F8F8F9] px-6 lg:px-16 py-3 flex items-center justify-between relative z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="KuleanPay logo" className="w-[32px] h-[32px] rounded-full" />
        <span className="font-medium text-[20px] text-[#242424]">KuleanPay</span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-x-8 text-[#878C91] text-[16px] font-medium">
        <Link to="/why-kuleanpay" className="hover:text-[#060761] transition">
          Why Kuleanpay?
        </Link>

        {/* Solutions Dropdown */}
        <div ref={solutionsRef} className="relative">
          <button
            onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
            className="flex items-center gap-1 hover:text-[#060761] transition"
          >
            Solutions
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${
                isSolutionsOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isSolutionsOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-48 p-3 z-50">
              <Link to="/escrow" className="block px-3 py-2 text-sm text-[#878C91] hover:bg-gray-100 rounded">
                Escrow
              </Link>
              <Link to="/digital-banking" className="block px-3 py-2 text-sm text-[#878C91] hover:bg-gray-100 rounded">
                Digital Banking
              </Link>
              <Link to="/merchant-payments" className="block px-3 py-2 text-sm text-[#878C91] hover:bg-gray-100 rounded">
                Merchant Payments
              </Link>
            </div>
          )}
        </div>

        <Link to="/partners" className="hover:text-[#060761] transition">
          Partners
        </Link>
        <Link to="/about" className="hover:text-[#060761] transition">
          About
        </Link>
      </div>

      {/* Store Buttons (Desktop only) */}
      <div className="hidden md:flex items-center gap-3">
        <a
          href="#"
          className="flex items-center gap-2 bg-[#1C2536] text-white rounded-[6px] border border-[#A6A6A6] px-3 py-2 hover:scale-105 transition"
        >
          <FaApple className="w-5 h-5" />
          <div className="leading-tight">
            <p className="text-[10px]">Download on the</p>
            <p className="text-sm font-semibold">App Store</p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 bg-[#1C2536] text-white rounded-[6px] border border-[#A6A6A6] px-3 py-2 hover:scale-105 transition"
        >
          <img src={playstore} alt="Playstore" className="w-5 h-5" />
          <div className="leading-tight">
            <p className="text-[10px]">GET IT ON</p>
            <p className="text-sm font-semibold">Google Play</p>
          </div>
        </a>
      </div>

      {/* Hamburger Icon (Mobile only) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-[#242424] focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col p-6">
          {/* Close Button */}
          <div className="flex justify-end">
            <button onClick={() => setIsMenuOpen(false)} className="text-2xl">
              <FaTimes />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col mt-10 space-y-6 text-gray-700 text-lg font-medium">
            <Link to="/why-kuleanpay" onClick={() => setIsMenuOpen(false)} className="hover:text-black">
              Why Kuleanpay?
            </Link>
            <details className="cursor-pointer">
              <summary className="hover:text-black">Solutions</summary>
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                <Link to="/escrow" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-black">
                  Escrow
                </Link>
                <Link to="/digital-banking" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-black">
                  Digital Banking
                </Link>
                <Link to="/merchant-payments" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-black">
                  Merchant Payments
                </Link>
              </div>
            </details>
            <Link to="/partners" onClick={() => setIsMenuOpen(false)} className="hover:text-black">
              Partners
            </Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-black">
              About
            </Link>
          </div>

          {/* Store Buttons (Mobile) */}
          <div className="mt-10 flex flex-col gap-3">
            <a
              href="#"
              className="flex items-center gap-2 bg-[#1A1A2E] text-white rounded-md px-3 py-2 hover:scale-105 transition"
            >
              <FaApple className="w-5 h-5" />
              <div className="leading-tight">
                <p className="text-[10px]">Download on the</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-[#1A1A2E] text-white rounded-md px-3 py-2 hover:scale-105 transition"
            >
              <img src={playstore} alt="Playstore" className="w-5 h-5" />
              <div className="leading-tight">
                <p className="text-[10px]">GET IT ON</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
