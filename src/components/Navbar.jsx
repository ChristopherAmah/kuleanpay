import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import playstore from "../assets/playstore.png";
import { FaApple, FaTimes } from "react-icons/fa";
import { FaShieldAlt, FaCreditCard, FaLock, FaMoneyBillWave } from "react-icons/fa";

const SolutionItem = ({ to, title, description, icon: Icon, bgColor, textColor }) => (
  <Link
    to={to}
    className={`p-4 rounded-xl flex flex-col items-start text-left transition-transform transform hover:bg-[#F0F5FF] ${bgColor} ${textColor}`}
  >
    <div className="flex items-center mb-2">
      <div className="w-10 h-10 mr-3 rounded-full flex items-center justify-center bg-[#060761] text-white">
        <Icon className="w-5 h-5" />
      </div>
      <span className={`font-semibold text-base ${textColor}`}>{title}</span>
    </div>
    <p className="text-xs leading-relaxed text-[#555555] font-normal">{description}</p>
  </Link>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [triangleLeft, setTriangleLeft] = useState(0);
  const solutionsRef = useRef(null);
  const solutionButtonRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target) &&
        (!solutionButtonRef.current || !solutionButtonRef.current.contains(event.target))
      ) {
        setIsSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update triangle position when dropdown opens
  useEffect(() => {
    if (isSolutionsOpen && solutionButtonRef.current) {
      const rect = solutionButtonRef.current.getBoundingClientRect();
      // Calculate position relative to the viewport's left edge
      setTriangleLeft(rect.left + rect.width / 2); // center of button
    }
  }, [isSolutionsOpen]);

  const solutionsData = [
    { to: "/escrow", title: "Escrow", description: "Both Buyers and Sellers are protected and funds are held securely by us", icon: FaLock, bgColor: "bg-white", textColor: "text-[#242424]" },
    { to: "/digital-banking", title: "Digital Banking", description: "Say no to transaction delays and fraudulent transactions as you send and receive money", icon: FaCreditCard, bgColor: "bg-white", textColor: "text-[#242424]" },
    { to: "/merchant-payments", title: "Merchant Payments", description: "Secure payments for your business with advanced features", icon: FaShieldAlt, bgColor: "bg-white", textColor: "text-[#242424]" },
    { to: "/savingsandmore", title: "Savings & More", description: "Grow your savings with ease and manage your funds securely", icon: FaMoneyBillWave, bgColor: "bg-white", textColor: "text-[#242424]" },
  ];

  return (
    <nav className="w-full bg-[#F4F4F7] px-6 lg:px-16 py-3 flex items-center justify-between relative z-50">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="KuleanPay logo" className="w-[32px] h-[32px] rounded-full" />
        <span className="font-medium text-[20px] text-[#242424]">KuleanPay</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-x-8 text-[#878C91] text-[16px] font-medium">
        <Link to="/why-kuleanpay" className="hover:text-[#060761] transition">Why Kuleanpay</Link>
        <div className="relative">
          <button
            ref={solutionButtonRef}
            onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
            className={`flex items-center gap-1 transition font-medium ${isSolutionsOpen ? 'text-[#060761]' : 'hover:text-[#060761]'}`}
          >
            Features
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${isSolutionsOpen ? "rotate-180 text-[#060761]" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown - FULLY CENTERED */}
          {isSolutionsOpen && (
            <div
              ref={solutionsRef}
              className="absolute ml-[76px] mt-[20px] top-full left-1/2 transform -translate-x-1/2 w-screen bg-white shadow-lg z-50 p-6" // UPDATED: left-1/2 transform -translate-x-1/2
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              {/* Triangle - Position is calculated based on viewport, so this remains the same */}
{/*               <div
                className="absolute w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"
                style={{ left: triangleLeft, transform: "translateX(-50%)", top: "-8px" }}
              ></div> */}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
                {solutionsData.map((item, index) => (
                  <SolutionItem key={index} {...item} />
                ))}
              </div>
            </div>
          )}
        </div>

        <Link to="/partners" className="hover:text-[#060761] transition">Partners</Link>
        <Link to="/about" className="hover:text-[#060761] transition">About Us</Link>
      </div>

      {/* Download Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <Link to={'https://apps.apple.com/ng/app/kuleanpay/id1659853273'} className="flex items-center gap-2 bg-[#1C2536] text-white rounded-[6px] border border-[#A6A6A6] px-2 py-1 hover:scale-105 transition">
          <FaApple className="w-5 h-5" />
          <div>
            <p className="text-[10px]">Download on the</p>
            <p className="text-sm font-medium">App Store</p>
          </div>
        </Link>
        <Link to={'https://play.google.com/store/apps/details?id=com.cwg.kuleanpay'} className="flex items-center gap-2 bg-[#1C2536] text-white rounded-[6px] border border-[#A6A6A6] px-2 py-1 hover:scale-105 transition">
          <img src={playstore} alt="Playstore" className="w-5 h-5" />
          <div>
            <p className="text-[10px]">GET IT ON</p>
            <p className="text-sm font-medium">Google Play</p>
          </div>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(true)} className="text-[#242424] focus:outline-none">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col p-6">
          <div className="flex justify-end">
            <button onClick={() => setIsMenuOpen(false)} className="text-2xl">
              <FaTimes />
            </button>
            </div>
          <div className="flex flex-col mt-10 space-y-6 text-gray-700 text-lg font-medium">
            <Link to="/why-kuleanpay" onClick={() => setIsMenuOpen(false)} className="hover:text-black">Why Kuleanpay</Link>
            <details className="cursor-pointer">
              <summary className="hover:text-black">Features</summary>
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                <Link to="/escrow" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-black">Escrow</Link>
                <Link to="/digital-banking" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-black">Digital Banking</Link>
                <Link to="/merchant-payments" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-black">Merchant Payments</Link>
                <Link to="/savingsandmore" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-black">Savings and More</Link>
              </div>
            </details>
            <Link to="/partners" onClick={() => setIsMenuOpen(false)} className="hover:text-black">Partners</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-black">About Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;