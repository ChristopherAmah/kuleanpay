import React from 'react';
import fraud1 from '../assets/fraud1.png';
import fraud2 from '../assets/fraud2.png';
import fraud3 from '../assets/fraud3.png';

// --- SVG Icon Components ---
// These are simplified representations of the icons in the image.
const EscrowIcon = () => <img src={fraud1} alt="Escrow Icon" className="w-full h-full object-contain" />;
const MobilePaymentIcon = () => <img src={fraud2} alt="Mobile Payment Icon" className="w-full h-full object-contain" />;
const CashPaymentIcon = () => <img src={fraud3} alt="Cash Payment Icon" className="w-full h-full object-contain" />;

// --- Reusable Feature Card Component ---
const FeatureCard = ({ icon, title, children }) => {
  return (
    <div className="relative bg-[#F3F7FB] p-6 rounded-[16px] h-full overflow-hidden">
      {/* Big faded background icon */}
      <div className="absolute -top-6 -right-6 opacity-10 w-[174.38px] h-[174.38px]">
        {icon}
      </div>
      {/* Content on top */}
      <div className="relative z-10">
        <h3 className="text-[20px] font-medium text-[#000000] mt-4 pt-10">{title}</h3>
        <p className="text-[#7C7C7C] text-md leading-relaxed mt-4">{children}</p>
      </div>
    </div>
  );
};

// --- Main Fraud Protection Section Component ---
const FraudProtectionSection = () => {
  return (
    <section className="bg-white font-sans py-12 sm:py-16">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: Text Content */}
          <div className="pr-4 lg:pr-0">
            <h2 className="text-3xl sm:text-4xl font-medium text-[#000000] leading-tight">
              Taking away the risks of fraudulent transactions
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-[16px] font-medium text-[#19203199]">
              Kuleanpay provides simple and transparent payment solutions to the legal and professional services industries and to marketplaces and e-commerce platforms.
            </p>
          </div>

          {/* Right Column: Feature Cards */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <FeatureCard title="Buy & Sell with Escrow" icon={<EscrowIcon />}>
                Get fortified when you create or join a transaction as a buyer or seller. Send and receive messages with our chat feature, and have the peace of mind you deserve.
              </FeatureCard>
              <FeatureCard title="Merchant Payment Collection" icon={<MobilePaymentIcon />}>
                Enjoy instant and seamless transactions when you send and receive money by using our digital banking feature.
              </FeatureCard>
            </div>
            <div>
              <FeatureCard title="Merchant Payment Collection" icon={<CashPaymentIcon />}>
                Get paid with your customized payment link as a merchant with multiple payment options, and have your payments reflect instantly on your dashboard.
              </FeatureCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- App Component to render the Section ---
export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <FraudProtectionSection />
    </div>
  );
}