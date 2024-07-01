import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    isMobile: window.matchMedia('(max-width: 750px)').matches,
    isTablet: window.matchMedia('(min-width: 751px) and (max-width: 1024px)')
      .matches,
    isLaptop: window.matchMedia('(min-width: 1025px) and (max-width: 1279px)')
      .matches,
    isDesktop: window.matchMedia('(min-width: 1280px) and (max-width: 1439px)')
      .matches,
    isLargeDesktop: window.matchMedia('(min-width: 1440px)').matches,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        isMobile: window.matchMedia('(max-width: 750px)').matches,
        isTablet: window.matchMedia(
          '(min-width: 751px) and (max-width: 1024px)'
        ).matches,
        isLaptop: window.matchMedia(
          '(min-width: 1025px) and (max-width: 1279px)'
        ).matches,
        isDesktop: window.matchMedia(
          '(min-width: 1280px) and (max-width: 1439px)'
        ).matches,
        isLargeDesktop: window.matchMedia('(min-width: 1440px)').matches,
      });
    };

    const mediaQueryList = [
      '(max-width: 750px)',
      '(min-width: 751px) and (max-width: 1024px)',
      '(min-width: 1025px) and (max-width: 1279px)',
      '(min-width: 1280px) and (max-width: 1439px)',
      '(min-width: 1440px)',
    ].map((query) => window.matchMedia(query));

    handleResize();

    mediaQueryList.forEach((mediaQuery) => {
      mediaQuery.addEventListener('change', handleResize);
    });

    return () => {
      mediaQueryList.forEach((mediaQuery) => {
        mediaQuery.removeEventListener('change', handleResize);
      });
    };
  }, []);

  return windowSize;
};

export default useWindowSize;

// thanks chatgpt :)
