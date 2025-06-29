import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA4Tracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-V24YGWR2D9', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default GA4Tracker;
