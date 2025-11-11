import React from "react";
import { ShieldCheck, Banknote, CreditCard } from "lucide-react";
import bwk from "../assets/bwk.png";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-start space-y-3 p-4 md:p-0">
    <div className="flex items-center space-x-3">
      <div className="p-2 bg-[#ECFAFF] rounded-[12px] text-blue-600">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-medium text-[#000000]">{title}</h3>
    </div>
    <p className="text-[#7C7C7C] text-md px-6 ml-4">{description}</p>
  </div>
);

const WhyKuleanpay = () => {
  const featureData = [
    {
      icon: ShieldCheck,
      title: "Buy and Sell With Escrow.",
      description:
        "Get fortified when you create or join a transaction as a buyer or seller. Send and receive messages with our chat feature, and have the peace of mind you deserve.",
    },
    {
      icon: Banknote,
      title: "Bank With Kuleanpay",
      description:
        "Enjoy instant and seamless transactions when you send and receive money by using our digital banking feature.",
    },
    {
      icon: CreditCard,
      title: "Merchant Payment Collection",
      description:
        "Get paid with your customized payment link as a merchant with multiple payment options, and have your payments reflect instantly on your dashboard.",
    },
  ];

  return (
    <div className="py-12 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      {/* What We Offer Section */}
      <section className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-medium text-[#000000] mb-4">
          What We Offer
        </h2>
        <p className="max-w-lg mx-auto text-gray-500 text-[16px]">
          Kuleanpay provides simple and transparent payment solutions to
          the legal and professional services industries and to marketplaces
          and e-commerce platforms.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* Bank With Kuleanpay Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image / Mockup */}
        <div className="flex justify-center">
          <img
            src={bwk}
            alt="Kuleanpay Bank Transaction Mockup"
            className="w-full max-w-md object-contain drop-shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="lg:pl-8">
          <h2 className="text-2xl md:text-[32px] font-medium text-[#000000] mb-4">
            Bank With Kuleanpay
          </h2>
          <p className="text-[#192031CC] text-[20px] max-w-lg">
            Say no to transaction delays and fraudulent transactions as you
            send and receive money instantly within any bank in Nigeria with
            Kuleanpay.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhyKuleanpay;
