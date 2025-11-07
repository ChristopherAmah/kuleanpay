import React from "react";
import crowdfund from "../assets/crowdfund.jpg";
import spendsave from "../assets/spendsave.jpg";
import target from "../assets/target.jpg";

const features = [
  {
    title: "Crowdfunding",
    description:
      "Create or join group savings to bring meaningful projects to life transparent, secure, and goal-driven.",
    image:
      crowdfund, 
    reverse: false,
  },
  {
    title: "Spend & Save",
    description:
      "Every transaction helps you save. Automate your savings each time you make a payment and grow your balance without thinking about it.",
    image:
      spendsave,
    reverse: true,
  },
  {
    title: "Target Savings",
    description:
      "Set financial goals from a vacation fund to school fees and hit them faster with automated deposits and smart reminders.",
    image:
      target,
    reverse: false,
  },
  {
    title: "Bill Payments",
    description:
      "Skip the queues and late fees. Pay your utilities, airtime, and subscriptions instantly from your dashboard.",
    image:
      spendsave,
    reverse: true,
  },
  {
    title: "Safe Vault",
    description:
      "Keep your money safe until you’re ready. Protect your funds with Kuleanpay’s secure vault your digital safety box.",
    image:
      crowdfund,
    reverse: false,
  },
];

const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 md:px-20 px-6 space-y-24">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl text-[#000000] font-semibold font-satoshi text-center mb-8 lg:mb-16">
          How It Works
        </h2>
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col items-center md:items-start md:flex-row ${
            feature.reverse ? "md:flex-row-reverse" : ""
          } gap-20`}
        >
          <div className="md:w-1/2">
            <h3 className="text-xl md:text-3xl font-medium font-satoshi mb-3">{feature.title}</h3>
            <p className="text-[#192031CC] text-[20px] font-satoshi leading-relaxed">
              {feature.description}
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={feature.image}
              alt={feature.title}
              className="rounded-[12px] w-full object-cover"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
