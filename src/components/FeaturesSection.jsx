import React from "react";
import { CheckCircle } from "lucide-react"; // optional icon set
import featurecard from "../assets/featurecard.png";

const FeaturesSection = () => {
  return (
    <section className="relative w-full bg-[#0b0f1a] text-white py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Left side: Phone Mockup */}
        <div className="relative flex justify-center">
          {/* Phone Container */}
          <div className="relative rounded-3xl p-8 shadow-lg">
            <img src={featurecard} alt="" />
          </div>
        </div>

        {/* Right side: Features List */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-snug">
            Best features provide by{" "}
            <span className="text-blue-500">Kuleanpay</span>
          </h2>

          {/* Feature Item */}
          <div className="bg-[#111827] rounded-xl p-5 mb-4 shadow-md">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 flex items-center justify-center p-5 rounded-full border border-gray-500 text-sm font-semibold">
                1
              </div>
              <div>
                <h3 className="font-semibold">Buy & sell with Kuleanpay Escrow</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Kuleanpay is adaptable to meet the financial processing
                  requirements of global companies and support with multiple
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#111827] rounded-xl p-5 mb-4 shadow-md">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 flex items-center justify-center p-5 rounded-full border border-gray-500 text-sm font-semibold">
                2
              </div>
              <div>
                <h3 className="font-semibold">Bank With Kuleanpay</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Say no to transaction delays and fraudulent transactions as you
                  send and receive money instantly within any bank in Nigeria
                  with Kuleanpay.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#111827] rounded-xl p-5 mb-4 shadow-md">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 flex items-center justify-center p-5 rounded-full border border-gray-500 text-sm font-semibold">
                3
              </div>
              <div>
                <h3 className="font-semibold">Bank With Kuleanpay</h3>
                <p className="text-gray-400 text-sm mt-1">
                  We ensure that the app is used safely and correctly, and that
                  you can manage your own wallet in one place
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
