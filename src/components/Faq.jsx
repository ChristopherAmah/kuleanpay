import React, { useState } from 'react';

// You can install this icon library with: npm install lucide-react
import { Headset, MessageSquare, Plus, Minus } from 'lucide-react';

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 py-4 sm:py-6">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <h3 className="text-base sm:text-lg font-medium text-[#1B2632]">{question}</h3>
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
          {isOpen ? <Minus size={16} className="text-gray-600" /> : <Plus size={16} className="text-gray-600" />}
        </div>
      </button>
      {isOpen && (
        <div className="mt-2 sm:mt-4 text-gray-500 text-sm sm:text-base">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('General');

  const handleFaqToggle = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqData = {
    General: [
      {
        question: 'What is Kuleanpay?',
        answer: 'Kuleanpay is adaptable to meet the financial processing requirements of global companies and support with multiple local bank channels and digital wallets.',
      },
      {
        question: 'What are the advantages of using Kuleanpay?',
        answer: 'Kuleanpay offers competitive pricing, robust security, and a user-friendly interface for seamless transactions.',
      },
      {
        question: 'Can we register via online?',
        answer: 'Yes, registration can be completed entirely online through our secure portal in just a few simple steps.',
      },
      {
        question: 'Requirements that to be needed to register Kuleanpay?',
        answer: 'You will need a valid business registration, a bank account, and identification documents for the primary account holder.',
      },
    ],
    Payment: [
        {
            question: 'What payment methods are supported?',
            answer: 'We support a wide range of payment methods including credit/debit cards, bank transfers, and various digital wallets.'
        },
        {
            question: 'Is there a transaction fee?',
            answer: 'Yes, we have a competitive transaction fee structure. Please refer to our pricing page for detailed information.'
        }
    ],
    Transaction: [
        {
            question: 'How long do transactions take to process?',
            answer: 'Most transactions are processed instantly. Bank transfers may take 1-3 business days depending on the banking institutions involved.'
        },
        {
            question: 'Can I view my transaction history?',
            answer: 'Yes, you can access your complete transaction history from your Kuleanpay dashboard at any time.'
        }
    ],
    Security: [
        {
            question: 'How secure is Kuleanpay?',
            answer: 'We use industry-leading encryption and security protocols to protect your data and transactions. Our systems are fully PCI DSS compliant.'
        },
        {
            question: 'What is two-factor authentication (2FA)?',
            answer: '2FA adds an extra layer of security to your account by requiring a second verification step, such as a code sent to your phone, when you log in.'
        }
    ]
  };
  
  const tabs = ['General', 'Payment', 'Transaction', 'Security'];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-16 font-sans">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24">
          
          {/* Left Section */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#454545] leading-tight">
              Frequently Asked <br className="hidden sm:inline" />
              <span className="text-[#3b49df]">Questions</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-[#19203199] text-sm sm:text-[16px] md:text-[18px] font-medium max-w-lg mx-auto lg:mx-0">
              have some questions before you get started? check out our FAQs or lets talk :)
            </p>
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="border-2 border-[#03045E] rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center cursor-pointer hover:bg-blue-50 transition-colors">
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                  <Headset className="text-[#03045E]" size={24} sm:size={32} />
                </div>
                <p className="mt-2 sm:mt-4 font-medium text-[14px] sm:text-[16px] text-[#19203199]">Call with Customer Service</p>
              </div>
              <div className="bg-[#D6DAE43D] rounded-[16px] p-4 sm:p-6 flex flex-col items-center text-center cursor-pointer hover:bg-gray-50 transition-colors">
                 <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                  <MessageSquare className="text-[#292D32]" size={24} sm:size={32} />
                </div>
                <p className="mt-2 sm:mt-4 font-medium text-[14px] sm:text-[16px] text-[#19203199]">Chat with Kuleanpay's Bot system</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-8 lg:mt-0">
            <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-8 justify-center lg:justify-start">
              {tabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => {
                        setActiveTab(tab);
                        setOpenFaqIndex(0); // Open the first question of the new tab
                    }}
                    className={`px-4 sm:px-6 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors focus:outline-none ${
                      activeTab === tab
                        ? 'bg-[#1d2780] text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {tab}
                  </button>
              ))}
            </div>
            
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
              {faqData[activeTab].map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaqIndex === index}
                  onToggle={() => handleFaqToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;