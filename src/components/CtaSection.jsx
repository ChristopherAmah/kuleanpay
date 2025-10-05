import React from 'react';
import banner from '../assets/bg.png';
import line from '../assets/line.png';

const CtaSection = () => {
  const backgroundStyle = {
    backgroundColor: '#03045E', // Base deep navy blue
    backgroundImage: `
      url(${line}),
      linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
    `,
    backgroundSize: `
      cover,         /* herobg fills the area */
      4rem 4rem,     /* horizontal grid */
      4rem 4rem      /* vertical grid */
    `,
    backgroundPosition: `
      center,        /* herobg centered */
      top,           
      left
    `,
    backgroundRepeat: 'no-repeat, repeat, repeat',
  };

  return (
    <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8 py-8 md:py-16 font-sans">
      <div 
        className="w-full max-w-5xl mx-auto p-12 sm:p-16 lg:p-16 text-center" 
        style={backgroundStyle}
      >
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            The best way to save yourself from fraudulent transactions
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Both buyers and sellers are protected with funds held in a third party
            escrow. Payments are released only after orders are fulfilled.
          </p>
          <button className="mt-10 px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
