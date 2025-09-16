import React from 'react';
import escrowa from '../assets/escrowa.png';
import escrowb from '../assets/escrowb.png';
import escrowc from '../assets/escrowc.png';
import escrowd from '../assets/escrowd.png';
import escrowe from '../assets/escrowe.png';

const steps = [
  {
    title: "Create Transaction",
    description:
      "Signup on kuleanpay via web or mobile to create a transaction. Enter the details on the transaction and click create transaction.",
    image: escrowa,
    circleColor: "bg-[#EBEBF6]",
    reverse: false,
  },
  {
    title: "Join Transaction",
    description:
      "The other party instantly gets notified of the transaction you created with a transaction link via email and SMS, and clicks on Join Transaction.",
    image: escrowb,
    circleColor: "bg-[#D6DAE4]",
    reverse: true,
  },
  {
    title: "Make Payment",
    description:
      "After transaction is accepted by the other party, you will be prompted to make payment. Once payment is made, the other party would see the payment made but cannot access it.",
    image: escrowc,
    circleColor: "bg-[#EBEBF6]",
    reverse: false,
  },
  {
    title: "Order Processing",
    description:
      "The other party processes the order and delivers the product or service as expected. Once you are satisfied with the order, you would be prompted to confirm delivery.",
    image: escrowd,
    circleColor: "bg-[#D6DAE4]",
    reverse: true,
  },
  {
    title: "Release Funds",
    description:
      "Once you confirm delivery of the product or service, the funds would be released into the other party's wallet and transaction is completed.",
    image: escrowe,
    circleColor: "bg-[#EBEBF6]",
    reverse: false,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white font-sans py-16 px-6 md:px-8 lg:px-16">
      <div className="container mx-auto max-w-7xl">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold lg:font-medium text-center text-[#000000] mb-16">
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
            {/* Image with background circle */}
            <div
              className={`relative w-full lg:w-1/2 flex ${
                step.reverse ? "justify-start" : "justify-end"
              }`}
            >
              <div className="relative w-full max-w-[420px]">
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full ${step.circleColor} opacity-40`}
                ></div>
                <img
                  src={step.image}
                  alt={step.title}
                  className="relative z-10 w-full"
                />
              </div>
            </div>

            {/* Text Content */}
            <div
              className={`w-full lg:w-1/2 ${
                step.reverse ? "lg:pr-16" : "lg:pl-16"
              } text-center lg:text-left gap-6`}
            >
              <h3 className="text-2xl md:text-3xl font-medium text-[#000000] mb-4">
                {step.title}
              </h3>
              <p className="text-[#192031CC] leading-relaxed text-left md:text-[20px]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
