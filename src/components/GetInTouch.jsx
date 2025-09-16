import React from 'react';
import hands from '../assets/hands.png'; // Ensure this path is correct

const ContactSection = () => {
  // Inline style for the background grid pattern
  const backgroundStyle = {
    backgroundColor: '#f7f8fa', // A very light gray
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: '3rem 3rem', // Size of the grid squares
  };

  return (
    <section className="px-20">
        <div className="w-full py-8 lg:py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-satoshi font-medium text-[#000000]">
            Get in touch
          </h1>
          <p className="mt-4 text-[#19203199] font-satoshi text-[18px]">
            We'd love to hear from you. Please fill out this form.
          </p>
        </div>

        {/* Main Content */}
        <div style={backgroundStyle}>
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Column: Form */}
          <div className="bg-white p-8 sm:p-10">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-[#5E5E5E] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Jacob Moore"
                  className="w-full px-4 py-3 bg-[#F5F5F5]  rounded-[12px] border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="email" className="block text-sm font-medium text-[#5E5E5E] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@email.com"
                  className="w-full px-4 py-3 bg-[#F5F5F5] rounded-[12px] border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#222222] text-white text-md font-medium py-3 rounded-[8px] hover:bg-black transition-colors"
              >
                Join Community
              </button>
            </form>
            <p className="text-center text-[14px] font-semibold text-[#5E5E5E] mt-6">
              Join Us On <a href="#" className="font-semibold text-[#03045E] hover:underline">Telegram</a>
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="hidden lg:block">
            <img 
              src={hands}
              alt="Community illustration with colorful hands around a central logo" 
              className="w-full h-auto object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/f0f0f0/333?text=Image+Not+Found'; }}
            />
          </div>
        </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ContactSection;
