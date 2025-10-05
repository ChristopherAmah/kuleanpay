import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Case 1: normal hash scroll
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    // Case 2: scrollToHash from sessionStorage (redirect from another page)
    const storedHash = sessionStorage.getItem("scrollToHash");
    if (storedHash && pathname === "/") {
      const element = document.querySelector(storedHash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
        sessionStorage.removeItem("scrollToHash");
      }
      return;
    }

    // Case 3: normal route change (scroll to top)
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
