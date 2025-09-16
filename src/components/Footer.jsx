import React from "react";
import footerlogo from "../assets/footerlogo.png";
import providus from "../assets/providus.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter    } from "react-icons/fa";

// --- Providus Bank Logo SVG ---
const ProvidusBankLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block mr-2"
  >
    <path d="M12 2L2 7V9H22V7L12 2Z" fill="#FBBF24" />
    <path d="M4 10V17H6V10H4Z" fill="#FBBF24" />
    <path d="M10 10V17H12V10H10Z" fill="#FBBF24" />
    <path d="M16 10V17H18V10H16Z" fill="#FBBF24" />
    <path d="M2 18V20H22V18H2Z" fill="#FBBF24" />
  </svg>
);

// --- Footer Component ---
const Footer = () => {
  const socialLinks = [
    { href: "#", icon: <FaFacebookF /> },
    { href: "#", icon: <FaInstagram  /> },
    { href: "#", icon: <FaLinkedinIn   /> },
    { href: "#", icon: <FaTwitter    /> },
  ];

  const footerLinks = {
    Support: [
      { href: "#", text: "Help center" },
      { href: "#", text: "Account information" },
      { href: "#", text: "About" },
      { href: "#", text: "Contact us" },
    ],
    Product: [
      { href: "#", text: "Updates" },
      { href: "#", text: "Security" },
      { href: "#", text: "Beta test" },
      { href: "#", text: "Pricing product" },
    ],
    "Help and Solutions": [
      { href: "#", text: "Talk to support" },
      { href: "#", text: "Support docs" },
      { href: "#", text: "System status" },
      { href: "#", text: "Covid response" },
    ],
  };

  return (
  <footer className="relative bg-[#1B2333] px-6 md:px-[100px] text-white overflow-hidden">
    {/* Decorative Blur Shape */}
    <div className="absolute -top-80 left-1/2 transform -translate-x-1/8 w-[400px] h-[400px] bg-[#6E83D1]/50 blur-3xl rounded-full pointer-events-none"></div>

    <div className="relative mx-auto md:py-[58.8px] py-6">
      {/* Top section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[8fr_3fr_3fr_3fr] gap-13">
        {/* Column 1: Logo + Social */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <img src={footerlogo} alt="KuleanPay" className="h-10" />
            <span className="text-[28.53px] font-semibold font-jakarta">KuleanPay</span>
          </div>
          <p className="text-white text-[16px] font-satoshi">
            Powered by <span className="underline">Fifthlab</span>
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white border-[0.91px] gap-[21px] md:mt-[80px] border-gray-100 p-[10.97px] rounded-full hover:text-white transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2–4: Links */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-[16px] font-medium font-satoshi mb-4">{title}</h3>
            <ul className="space-y-8 mt-[24px]">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#C9D4E4] font-satoshi text-[16px] font-medium hover:text-white hover:underline transition-colors duration-300"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="my-10 border-gray-700" />

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0 text-sm text-white">
        <p className="font-satoshi text-[16px] font-medium">
          &copy; {new Date().getFullYear()} Kuleanpay. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 font-satoshi text-[16px] font-medium">
          <a href="#" className="hover:text-white hover:underline">
            Terms and Conditions
          </a>
          <span>-</span>
          <a href="#" className="hover:text-white hover:underline">
            Privacy Policy
          </a>
        </div>
        <div className="flex items-center font-satoshi text-[16px] font-medium">
          <img src={providus} alt="" className="w-[23px] h-[19.59px]" />
          <span>Payments Processed by Providus Bank</span>
        </div>
      </div>
    </div>
  </footer>


  );
};

export default Footer;
