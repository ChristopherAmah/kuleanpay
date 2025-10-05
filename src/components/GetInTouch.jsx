import React from "react";
import join from "../assets/join.png"; // ✅ Ensure this path is correct
import { Link } from "react-router-dom";

const ContactSection = () => {
  // Background grid style
  const backgroundStyle = {
    backgroundColor: "#EDF5FB",
    backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: "3rem 3rem",
  };

  return (
    <section className="md:px-16 lg:px-16 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-satoshi font-medium text-[#000000]">
          Join the Kuleanpay Community
        </h1>
      </div>

      {/* Main Grid */}
      <div
        style={backgroundStyle}
        className="rounded-[21px] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* LEFT: Form Card */}
          <div className="flex justify-center items-center py-3 px-3">
            <div className="bg-white rounded-[14px] p-8 sm:p-10 w-full">
              <form>
                {/* Name */}
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#5E5E5E] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Jacob Moore"
                    className="w-full px-4 py-3 bg-[#F5F5F5] rounded-[12px] border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                  />
                </div>

                {/* Email */}
                <div className="mb-8">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#5E5E5E] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="name@email.com"
                    className="w-full px-4 py-3 bg-[#F5F5F5] rounded-[12px] border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
                  />
                </div>

                {/* Join Button */}
                <button
                  type="submit"
                  className="w-full bg-[#03045E] text-white text-md font-medium py-3 rounded-full hover:bg-black transition-colors"
                >
                  Join
                </button>
              </form>

              {/* Telegram link */}
              <p className="text-center text-[14px] font-semibold text-[#5E5E5E] mt-6">
                Join Us On{" "}
                <Link
                  to={'https://t.me/kuleanpay'}
                  className="font-semibold text-[#03045E] hover:underline"
                >
                  Telegram
                </Link>
              </p>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="flex justify-center items-center">
            <img
              src={join}
              alt="Kuleanpay Community"
              className="w-4/5 md:w-[70%] h-auto object-contain mx-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/f0f0f0/333?text=Image+Not+Found";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
