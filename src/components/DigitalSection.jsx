import React from 'react';
import escrowa from '../assets/escrowa.png'
import escrowb from '../assets/escrowb.png'

const cards = [
  {
    title: "Create An Account",
    description: "Create an account via web or mobile and go to your account settings and complete KYC verification for tier 1 and 2. Your account will be verified instantly and you will be issued an account number. Your account number will be visible when you choose the fund wallet by bank transfer option.",
    image: escrowa,
    reverse: false,
  },
  {
    title: "Send & Receive Money Instantly",
    description: "Say no to transaction delays and fraudulent transactions because we offer you multiple payment options with super-fast transaction time. We support all local banks in Nigeria.",
    image: escrowb,
    reverse: true,
  },
];

const TwoCardsSection = () => {
  return (
    <section className="bg-white font-sans py-20 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto max-w-7xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              card.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-16 mb-24`}
          >
            {/* Text Content */}
            <div
              className={`w-full lg:w-1/2 ${
                card.reverse ? "lg:pr-16" : "lg:pl-16"
              } text-center lg:text-left`}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-[#192031] mb-4">
                {card.title}
              </h3>
              <p className="text-[#19203199] leading-relaxed text-lg">
                {card.description}
              </p>
            </div>

            {/* Image with background circle */}
            <div
              className={`relative w-full lg:w-1/2 flex ${
                card.reverse ? "justify-start" : "justify-end"
              }`}
            >
              <div className="relative w-full max-w-[420px]">
                {/* You can add a background circle if you want, similar to your provided code */}
                {/* <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#EBEBF6] opacity-40`}></div> */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="relative z-10 w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TwoCardsSection;