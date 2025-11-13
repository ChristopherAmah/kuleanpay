import React, { useState, useEffect } from "react";

// ⚠️ Replace with your actual image paths
import img1 from "../assets/kuleanpay1.svg";
import img2 from "../assets/kuleanpay2.svg";

const sections = [
  {
    text: "Fifthlab is a startup company with an ecosystem of advanced but simple solutions focusing on delivering client-centered products and services that make our client's lives and daily operations easy.",
    img: img1,
  },
  {
    text: "Fifthlab aspires to assume the role of a key Change Catalyst, by combining digital innovation with deep Financial Services expertise and thorough processes.",
    img: img2,
  },
];

const KuleanpayScrollSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    if (isMobile) return; // disable desktop scroll logic on mobile

    const triggerOffset = window.innerHeight * 0.3;
    const contentContainer = document.getElementById("scroll-content");
    if (!contentContainer) return;
    const { top } = contentContainer.getBoundingClientRect();

    const scrollProgress = top - triggerOffset;
    const sectionHeight = contentContainer.clientHeight / sections.length;
    let newIndex = Math.floor(-scrollProgress / sectionHeight);
    newIndex = Math.max(0, Math.min(sections.length - 1, newIndex));

    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  return (
    <div className="w-full flex flex-col items-center py-10 md:py-20 bg-white">
      {/* --- Heading --- */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium font-satoshi text-center mb-12 md:mb-16 px-4 md:max-w-4xl leading-[120%]">
        Kuleanpay is a flagship product of Fifthlab Limited.
      </h1>

      {/* --- Main Container --- */}
      {!isMobile ? (
        /* ===== Desktop Layout ===== */
        <div
          id="scroll-content"
          className="flex flex-col md:flex-row w-full max-w-6xl items-start gap-10 px-4"
          style={{ minHeight: `${sections.length * 100}vh` }}
        >
          {/* --- Text Section (Sticky) --- */}
          <div className="flex-1 sticky top-[30vh] max-w-md pr-5">
            {sections.map((section, index) => (
              <p
                key={index}
                className={`transition-all duration-500 text-lg leading-relaxed mb-8 ${
                  index === currentIndex
                    ? "font-bold text-[#000000] font-satoshi opacity-100 border-l-4 border-[#03045E] pl-4"
                    : "font-normal text-[#00000066] font-satoshi opacity-50 pl-4"
                }`}
              >
                {section.text}
              </p>
            ))}
          </div>

          {/* --- Image Section (Sticky) --- */}
          <div className="flex-1 w-full md:sticky md:top-[20vh] h-[60vh] flex items-center justify-center">
            <img
              src={sections[currentIndex].img}
              alt="Section visual"
              className="w-full h-full object-cover rounded-lg shadow-xl transition-opacity duration-500"
            />
          </div>
        </div>
      ) : (
        /* ===== Mobile Layout ===== */
        <div className="flex flex-col gap-16 w-full max-w-2xl px-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center transition-all duration-700 ease-in-out opacity-100 transform translate-y-0"
            >
              <img
                src={section.img}
                alt={`section-${index}`}
                className="w-full h-auto rounded-lg shadow-lg mb-6 object-cover"
              />
              <p className="text-base sm:text-lg leading-relaxed font-satoshi text-[#000000]">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default KuleanpayScrollSection;
