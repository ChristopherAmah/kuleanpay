import React, { useState, useEffect } from "react";

const CookiePopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = document.cookie.includes("cookieAccepted=true");
    if (!hasAccepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    // Set cookie for 5 minutes (for testing)
    document.cookie = "cookieAccepted=true; path=/; max-age=" + 7 * 24 * 60 * 60; //1 year - 60 * 60 * 24 * 365;
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="
        fixed bottom-5 left-1/2 -translate-x-1/2 
        bg-white text-gray-900 
        px-5 py-4 rounded-xl shadow-lg 
        flex flex-wrap items-center justify-between gap-3 
        w-[90%] max-w-[500px] 
        font-inter z-[1000]
      "
    >
      <p className="m-0 text-sm leading-relaxed flex-1 text-center sm:text-left">
        We use cookies to enhance your experience. By continuing, you agree to our{" "}
        <a
          href="/privacy-policy"
          className="text-blue-500 font-medium hover:underline"
        >
          Privacy Policy
        </a>.
      </p>

      <button
        onClick={handleAccept}
        className="
          bg-blue-500 hover:bg-blue-600 
          text-white font-medium text-sm 
          px-4 py-2 rounded-lg 
          transition-colors duration-300 
          mx-auto sm:mx-0
        "
      >
        Accept
      </button>
    </div>
  );
};

export default CookiePopup;
