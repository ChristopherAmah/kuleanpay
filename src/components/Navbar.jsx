import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { FaTimes } from "react-icons/fa"; // Keep FaTimes for the mobile menu close button

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSolutionsOpen(false);
  };

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsSolutionsOpen(false);
  };

  return (
    <nav className="w-full bg-[#00000005] px-5 lg:px-16 py-2 flex items-center justify-between relative z-50">
      {/* Left: Logo */}
      <Link to="/" onClick={closeMenus}>
        <div className="flex items-center gap-x-2 lg:mr-[-200px]">
          <img src={logo} alt="KuleanPay logo" className="w-[40px]" />
          <span className="font-jakarta text-[25.96px] font-semibold text-[#242424]">
            KuleanPay
          </span>
        </div>
      </Link>

      {/* Mobile Menu Button (SVG Icon) */}
      <div className="md:hidden flex items-center gap-x-[14px]">
        <button onClick={toggleMenu} className="text-[#03045E]">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-x-[52px] text-[#878C91] font-dm">
        {/* Solutions Dropdown for Desktop */}
        <div ref={solutionsRef} className="relative">
          <button
            onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
            className="flex items-center gap-1 hover:text-gray-900 transition"
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
            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white shadow-2xl rounded-2xl p-6 w-[340px] z-50 animate-slideUp">
              <SolutionsDropdownMenu closeMenus={closeMenus} />
            </div>
          )}
        </div>
        <Link to="/company" onClick={closeMenus} className="hover:text-gray-900 transition">
          Company
        </Link>
        <Link to="/blog" onClick={closeMenus} className="hover:text-gray-900 transition">
          Blog
        </Link>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-x-[14px] font-jakarta">
        <Link
          to="/login"
          onClick={closeMenus}
          className="px-4 lg:px-5 py-2 rounded-[10px] border border-[#00000033] text-[#03045E] hover:bg-gray-100 transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          onClick={closeMenus}
          className="px-4 lg:px-5 py-2 rounded-[10px] bg-[#03045E] text-[17px] text-white hover:bg-[#03045E] transition"
        >
          Sign up
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white md:hidden z-40 p-5 pt-20 flex flex-col items-center space-y-8 animate-slideIn">
          {/* Menu Header with Close Button */}
          <div className="absolute top-4 right-4">
            <button onClick={closeMenus} className="text-[#03045E] text-3xl">
              <FaTimes />
            </button>
          </div>
          
          <div className="w-full text-center space-y-6">
            {/* Solutions Links for Mobile */}
            <h3 className="text-lg font-semibold text-[#878C91]">Solutions</h3>
            <div className="flex flex-col items-center space-y-3">
              <Link
                to="/escrow"
                onClick={closeMenus}
                className="block text-base text-gray-700 hover:text-gray-900 transition"
              >
                Escrow
              </Link>
              <Link
                to="/digital-banking"
                onClick={closeMenus}
                className="block text-base text-gray-700 hover:text-gray-900 transition"
              >
                Digital Banking
              </Link>
              <Link
                to="/merchant-payments"
                onClick={closeMenus}
                className="block text-base text-gray-700 hover:text-gray-900 transition"
              >
                Merchants Payments Collection
              </Link>
            </div>
            
            <Link
              to="/company"
              onClick={closeMenus}
              className="block text-lg font-semibold text-[#878C91] hover:text-gray-900 transition"
            >
              Company
            </Link>
            <Link
              to="/blog"
              onClick={closeMenus}
              className="block text-lg font-semibold text-[#878C91] hover:text-gray-900 transition"
            >
              Blog
            </Link>
          </div>

          <div className="flex flex-col gap-4 w-full px-5 mt-10">
            <Link
              to="/signup"
              onClick={closeMenus}
              className="w-full text-center px-4 py-3 rounded-[10px] bg-[#03045E] text-lg text-white"
            >
              Sign up
            </Link>
            <Link
              to="/login"
              onClick={closeMenus}
              className="w-full text-center px-4 py-3 rounded-[10px] border border-[#00000033] text-[#03045E]"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const SolutionsDropdownMenu = ({ closeMenus }) => (
  <div className="space-y-4">
    {/* Item 1 */}
    <Link
      to="/escrow"
      onClick={closeMenus}
      className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition"
    >
      <div className="text-blue-600 text-xl">✦</div>
      <div>
        <h3 className="font-semibold text-gray-900">Escrow</h3>
        <p className="text-sm text-gray-600">
          Both Buyers and Sellers are protected and funds are held securely by us.
        </p>
      </div>
    </Link>
    {/* Item 2 */}
    <Link
      to="/digital-banking"
      onClick={closeMenus}
      className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition bg-blue-50"
    >
      <div className="text-blue-600 text-xl">◉</div>
      <div>
        <h3 className="font-semibold text-gray-900">Digital Banking</h3>
        <p className="text-sm text-gray-600">
          Say no to transaction delays and fraudulent transactions as you send and receive money.
        </p>
      </div>
    </Link>
    {/* Item 3 */}
    <Link
      to="/merchant-payments"
      onClick={closeMenus}
      className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition"
    >
      <div className="text-blue-600 text-xl">☑</div>
      <div>
        <h3 className="font-semibold text-gray-900">
          Merchants Payments Collection
        </h3>
        <p className="text-sm text-gray-600">
          Say no to transaction delays and fraudulent transactions as you send and receive money.
        </p>
      </div>
    </Link>
  </div>
);

export default Navbar;