import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import footerlogo from "../assets/footerlogo.png";
import providus from "../assets/providus.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 🧭 Handles all footer link clicks (scroll / navigate / external)
  const handleLinkClick = (e, href) => {
    e.preventDefault();

    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        // Smooth scroll if already on same page
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (location.pathname !== "/") {
        // Navigate to home and then scroll after load
        sessionStorage.setItem("scrollToHash", href);
        navigate("/");
      }
    } else if (href.startsWith("http") || href.startsWith("mailto")) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // --- Footer Link Data ---
  const socialLinks = [
    { href: "https://web.facebook.com/FifthlabAfrica", icon: <FaFacebookF /> },
    { href: "https://www.instagram.com/fifthlabafrica/", icon: <FaInstagram /> },
    { href: "https://x.com/FifthlabAfrica", icon: <FaXTwitter /> },
  ];

  const footerLinks = {
    "QUICK LINKS": [
      { href: "/escrow", text: "Escrow" },
      { href: "/digital-banking", text: "Digital Banking" },
      { href: "/partners", text: "Partners" },
      { href: "/merchant-payments", text: "Merchant Payment Collection" },
    ],
    PRODUCT: [
      { href: "/privacy-policy", text: "Privacy Policy" },
      { href: "/terms-of-use", text: "Terms & Conditions" },
      { href: "#faq", text: "FAQs" },
    ],
    DEVELOPER: [
      { href: "#", text: "Documentation" },
      { href: "#", text: "API" },
    ],
    COMPANY: [
      { href: "/about", text: "About us" },
      { href: "/partners", text: "Become a partner" },
      { href: "mailto:kuleanpay.support@thefifthlab.com", text: "Contact us" },
    ],
  };

  return (
    <footer className="relative bg-[#1B2333] px-6 md:px-16 text-white overflow-hidden">
      {/* Decorative Blur Shape */}
      <div className="absolute -top-80 left-1/2 transform -translate-x-1/8 w-[400px] h-[400px] bg-[#6E83D1]/50 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative mx-auto md:py-[58.8px] py-6">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[5fr_4fr_2fr_2fr_3fr] gap-13">
          {/* Logo + Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Link to="/">
                <img src={footerlogo} alt="KuleanPay" className="h-10" />
              </Link>
              <span className="text-[28.53px] font-semibold font-jakarta">
                KuleanPay
              </span>
            </div>
            <p className="text-white text-[16px] font-satoshi">
              Powered by{" "}
              <span className="underline">
                <a
                  href="https://thefifthlab.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fifthlab
                </a>
              </span>
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border-[0.91px] gap-[21px] md:mt-[80px] border-gray-100 p-[10.97px] rounded-full hover:text-white transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[16px] font-medium font-satoshi mb-4">
                {title}
              </h3>
              <ul className="space-y-8 mt-[24px]">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-[#C9D4E4] font-satoshi text-[16px] font-medium hover:text-white hover:underline transition-colors duration-300 cursor-pointer"
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

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0 text-sm text-white">
          <p className="font-satoshi text-[16px] font-medium">
            &copy; {new Date().getFullYear()} Kuleanpay. Copyright and All
            rights reserved.
          </p>
          <div className="flex items-center font-satoshi text-[16px] font-medium">
            <img
              src={providus}
              alt="Providus Bank"
              className="w-[23px] h-[19.59px] mr-2"
            />
            <span>Payments Processed by Providus Bank</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
