import React from "react";
import { Shield, Settings, Truck } from "lucide-react";
import buysell from "../assets/buysell.png";

// --- Reusable component for each feature item ---
const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4">
    {/* Icon */}
    <div className="text-blue-600 bg-[#F5FBFF] border border-[#A5DBFD] p-3 rounded-lg flex-shrink-0">
      <Icon className="w-5 h-5" />
    </div>
    {/* Text */}
    <div>
      <h3 className="text-[24px] text-[#000000DE] mb-1">{title}</h3>
      <p className="text-[#192031CC] text-[20px]">{description}</p>
    </div>
  </div>
);

// --- Main component for Buy & Sell Section ---
const BuySellWithKuleanpay = () => {
  const featureItems = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Seamless, transparent and secure transactions.",
    },
    {
      icon: Settings,
      title: "Quality Services",
      description: "Authorize or receive payments seamlessly.",
    },
    {
      icon: Truck,
      title: "Timely Delivery",
      description: "The buyer and seller can track packages in real time.",
    },
  ];

  return (
    <section className="relative py-12 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
      {/* Two-column grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-start">
        
        {/* --- Left Column: Features --- */}
        <div className="space-y-10">
          <h2 className="text-3xl md:text-[32px] font-medium text-[#000000]">
            Buy & Sell With Kuleanpay
          </h2>

          <div className="space-y-8">
            {featureItems.map((item, index) => (
              <FeatureItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* --- Right Column: Image / Mockup --- */}
        <div className="relative w-full flex justify-center lg:items-center">
          <img
            src={buysell}
            alt="Kuleanpay transaction mockups"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BuySellWithKuleanpay;
