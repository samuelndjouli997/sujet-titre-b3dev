"use client"

import { useState, useEffect } from 'react';

import Image from 'next/image';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-5 right-5 bg-primary-green z-99 text-white px-4 py-5 rounded-[99px] shadow-lg"
          onClick={scrollToTop}
        >
          <Image src="/img/anchor/arrowUp.svg" alt="Arrow Up" width={21} height={11} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
