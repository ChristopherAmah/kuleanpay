import React from 'react';
import finance from '../assets/finance.png';
import admin from '../assets/admin.png';
import payments from '../assets/payments.png';

// Card data with titles, descriptions, and colors
const benefits = [
  {
    title: "Increased Sales",
    description:
      "We help you stop unfinished deals by ensuring that every transaction is fulfilled accordingly leaving both parties satisfied, and your customers happy.",
    bgColor: "bg-[#F3F4FE]",
    icon: finance,
  },
  {
    title: "Security",
    description:
      "Boost your customers confidence by providing top notch security to all their transactions as our escrow shield is placed on your transactions. We go the extra mile to verify all your transactions.",
    bgColor: "bg-[#FDF8F0]",
    icon: admin,
  },
  {
    title: "Multiple Payment Options",
    description:
      "We provide you with a variety of payment options that gives your customers access to make their payments faster and conveniently.",
    bgColor: "bg-[#FDF5F7]",
    icon: payments,
  },
];

const App = () => {
  return (
    <div className="bg-white font-sans text-[#192031] min-h-screen p-8 md:p-16 lg:p-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          What do you stand to gain
        </h2>
        <p className="text-center text-lg text-[#19203199] max-w-2xl mx-auto mb-16">
          We offer you a seamless integration into your platform to enable you make secure transactions through Kuleanpay. We also provide you with different integration options based on your preferences
        </p>

        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`relative ${benefit.bgColor} p-8 md:p-12 overflow-hidden flex flex-col justify-end h-[400px] rounded-xl`}
            >
              {/* Background Icon as watermark */}
              <div className="absolute bottom-0 right-0 z-0 pointer-events-none">
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="w-40 h-40 md:w-52 md:h-52 object-contain opacity-10"
                />
              </div>

              {/* Text Content */}
              <div className="relative z-10 pr-4 pb-24">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-[#19203199]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
