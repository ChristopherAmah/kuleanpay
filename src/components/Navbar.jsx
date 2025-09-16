import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-[#00000005] px-5 lg:px-16 py-2 flex items-center justify-between relative">
      {/* Left: Logo */}
      <Link
      to="/">
        <div className="flex items-center gap-x-2 lg:mr-[-200px]">
          <img src={logo} alt="KuleanPay logo" className="w-[40px]" />
          <span className="font-jakarta text-[25.96px] font-semibold text-[#242424]">
            KuleanPay
          </span>
        </div>
      </Link>

      {/* Middle: Nav links */}
      <div className="hidden md:flex gap-x-[52px] text-[#878C91] font-dm">
        <Link
          to="/how-it-works"
          className="hover:text-gray-900 transition text-[16px]"
        >
          How it works
        </Link>

        {/* Solutions Dropdown */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1 hover:text-gray-900 transition"
          >
            Solutions
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Card appears bottom-left like screenshot */}
          {isOpen && (
            <div className="fixed bottom-8 left-8 bg-white shadow-2xl rounded-2xl p-6 w-[340px] z-50 animate-slideUp">
              <div className="space-y-4">
                {/* Item 1 */}
                <Link
                  to="/escrow"
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
            </div>
          )}
        </div>

        <Link to="/company" className="hover:text-gray-900 transition">
          Company
        </Link>
        <Link to="/blog" className="hover:text-gray-900 transition">
          Blog
        </Link>
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center gap-x-[14px] font-jakarta">
        <Link
          to="/login"
          className="px-4 lg:px-5 py-2 rounded-[10px] border border-[#00000033] text-[#03045E] hover:bg-gray-100 transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-4 lg:px-5 py-2 rounded-[10px] bg-[#03045E] text-[17px] text-white hover:bg-[#03045E] transition"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
