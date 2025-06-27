// useScrollToHashTargets.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToHashTargets = (targets = [], delay = 500) => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');

    if (targets.includes(hash)) {
      const scrollToElement = () => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const timer = setTimeout(scrollToElement, delay);
      return () => clearTimeout(timer);
    }
  }, [location, targets, delay]);
};

export default useScrollToHashTargets;
