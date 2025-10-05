import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="w-full bg-[#1C2536] text-white flex justify-center items-center gap-x-[16px] px-6 py-[8px] text-xs">
      {/* Button */}
      <button className="bg-[#4E6CDB] text-white text-[10px]  font-medium font-satoshi px-[10px] py-[5px] rounded-[60px] transition">
        New Update
      </button>

      {/* Text */}
      <p className="text-[#FFFFFFB2] font-satoshi text-[12px]">
        Learn about our new feature in 2025 that will make it easier to organize
        some finance tasks.
      </p>

      {/* Link */}
      <Link
        to={'/why-kuleanpay'}
        className="text-white font-bold font-satoshi underline text-[12px] hover:text-[#4E6CDB] transition"
      >
        Learn more
      </Link>
    </div>
  );
};

export default Topbar;
