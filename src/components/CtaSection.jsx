import React from 'react';
import banner from '../assets/bg.png';
import line from '../assets/line.png';
import { Link } from 'react-router-dom';

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
    <div className="flex items-center justify-center sm:px-6 lg:px-8 md:py-12 font-sans">
      <div 
        className="w-full max-w-4xl mx-auto px-6 sm:px-12 lg:px-16 py-10 sm:py-14 lg:py-16 text-center" 
        style={backgroundStyle}
      >
        <div className="flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug sm: md:">
            The best way to save yourself from fraudulent transactions
          </h1>
          <p className="mt-4 sm:mt-6 max-w-xl sm:max-w-2xl text-base sm:text-lg text-white/80">
            Both buyers and sellers are protected with funds held in a third party
            escrow. Payments are released only after orders are fulfilled.
          </p>
          <Link to={'https://apps.apple.com/ng/app/kuleanpay/id1659853273'}>
            <button className="mt-6 sm:mt-10 px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              Get Started
            </button> 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
