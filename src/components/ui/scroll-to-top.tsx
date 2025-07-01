import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { animate } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // Use Framer Motion for smooth animation
    const startY = window.scrollY;
    
    animate(startY, 0, {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (value) => {
        window.scrollTo(0, value);
      },
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-4 bg-white shadow-lg rounded-full border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-200"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5 text-gray-600" />
    </button>
  );
};

export default ScrollToTop; 