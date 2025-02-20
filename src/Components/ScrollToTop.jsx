import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = "manual"; // Prevent Browser From Remembering Scroll Position
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target.closest("a"); // Check If Click Was On <a>
      if (target && target.pathname === window.location.pathname) {
        window.scrollTo(0, 0); // Scroll To Top If Same Page Link Clicked
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
};

export default ScrollToTop;