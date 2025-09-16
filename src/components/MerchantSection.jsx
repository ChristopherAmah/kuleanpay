import React from 'react';
import merchanta from '../assets/merchanta.png';
import merchantb from '../assets/merchantb.png';
import merchantc from '../assets/merchantc.png';

const steps = [
  {
    title: "Upgrade Level",
    description:
      "We give you a customized payment link when you upgrade to Merchant level.",
    reverse: false,
    image: merchanta,
  },
  {
    title: "Send & Receive Money Instantly",
    description:
      "This link can be used to receive payments instantly from your customers and can be disabled or generated as you wish. Get Linked! Get Paid!",
    reverse: true,
    image: merchantb,
  },
  {
    title: "Say No to Delays",
    description:
      "Say no to transaction delays and fraudulent transactions because we offer you multiple payment options with super-fast transaction time. We support all local banks in Nigeria.",
    reverse: false,
    image: merchantc,
  },
];

const App = () => {
  return (
    <div className="bg-white font-sans text-[#192031] min-h-screen p-8 md:p-16 lg:p-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl text-[#000000] font-medium font-satoshi text-center mb-16">
          How It Works
        </h2>

        {/* Steps */}
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              step.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-16 mb-24`}
          >
            {/* Text Content */}
            <div
              className={`w-full lg:w-1/2 ${
                step.reverse ? "lg:pr-16" : "lg:pl-16"
              } text-center lg:text-left`}
            >
              <h3 className="text-2xl md:text-3xl font-medium font-satoshi mb-4">
                {step.title}
              </h3>
              <p className="text-[20px] leading-relaxed text-[#192031CC]">
                {step.description}
              </p>
            </div>

            {/* Image/Mockup */}
            <div
              className={`w-full lg:w-1/2 flex ${
                step.reverse ? "justify-end" : "justify-start"
              }`}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full max-w-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
