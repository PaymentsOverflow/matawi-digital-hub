import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/services/analytics";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Track page view
    const pageTitle = document.title;
    trackPageView(pathname, pageTitle);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
