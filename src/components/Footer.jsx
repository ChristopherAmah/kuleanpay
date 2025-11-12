import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import footerlogo from "../assets/footerlogo.png";
import providus from "../assets/providus.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e, href) => {
    e.preventDefault();

    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (location.pathname !== "/") {
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
      { href: "#", text: "Documentation", badge: "Coming Soon" },
      { href: "#", text: "API", badge: "Coming Soon" },
    ],
    COMPANY: [
      { href: "/about", text: "About us" },
      { href: "/partners", text: "Become a partner" },
      { href: "mailto:kuleanpay.support@thefifthlab.com", text: "Contact us" },
    ],
  };

  return (
    <footer className="relative bg-[#1B2333] px-4 sm:px-6 md:px-16 py-6 sm:py-8 md:py-[58.8px] overflow-hidden">
      {/* Decorative Blur Shape */}
      <div className="absolute -top-80 left-1/2 transform -translate-x-1/8 w-[400px] h-[400px] bg-[#6E83D1]/50 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative mx-auto">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-[5fr_4fr_2fr_2fr_3fr] gap-6 sm:gap-8 md:gap-13">
          {/* Logo + Social */}
          <div className="col-span-2 sm:col-span-1 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2">
              <Link to="/">
                <img src={footerlogo} alt="KuleanPay" className="h-10" />
              </Link>
              <span className="text-white text-[22px] sm:text-[28px] font-semibold font-jakarta">
                KuleanPay
              </span>
            </div>
            <p className="text-white text-[14px] sm:text-[16px] font-satoshi">
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
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border-[0.91px] border-gray-100 p-2.5 rounded-full hover:text-white transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="mt-4 sm:mt-0">
              <h3 className="text-white text-[14px] sm:text-[16px] font-medium font-satoshi mb-3 sm:mb-4">
                {title}
              </h3>
              <ul className="space-y-4 sm:space-y-8 mt-2 sm:mt-[24px]">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="flex items-center gap-1 sm:gap-2 text-[#C9D4E4] font-satoshi text-[14px] sm:text-[16px] font-medium hover:text-white hover:underline transition-colors duration-300 cursor-pointer"
                    >
                      {link.text}
                      {link.badge && (
                        <span className="text-[8px] sm:text-[10px] bg-gray-600 text-white px-1 py-[1px] md:px-3 md:py-[3px] rounded-full uppercase">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="my-6 sm:my-10 border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-2 sm:space-y-0 text-sm text-white">
          <p className="font-satoshi text-[14px] sm:text-[16px] font-medium">
            &copy; {new Date().getFullYear()} Kuleanpay. All rights reserved.
          </p>
          <div className="flex items-center font-satoshi text-[14px] sm:text-[16px] font-medium mt-2 sm:mt-0">
            <img
              src={providus}
              alt="Providus Bank"
              className="w-[20px] h-[17px] sm:w-[23px] sm:h-[19.59px] mr-2"
            />
            <span>Payments Processed by Providus Bank</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
