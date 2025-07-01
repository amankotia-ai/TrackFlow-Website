import { useCallback } from 'react';
import { animate, Easing } from 'framer-motion';

interface UseSmoothScrollOptions {
  offset?: number;
  duration?: number;
  ease?: Easing;
  onComplete?: () => void;
}

export const useSmoothScroll = (options: UseSmoothScrollOptions = {}) => {
  const { 
    offset = 80, 
    duration = 0.8, 
    ease = [0.25, 0.46, 0.45, 0.94] as const,
    onComplete
  } = options;

  const smoothScrollTo = useCallback((targetY: number) => {
    const startY = window.scrollY;
    
    animate(startY, targetY, {
      duration,
      ease,
      onUpdate: (value) => {
        window.scrollTo(0, value);
      },
      onComplete,
    });
  }, [duration, ease, onComplete]);

  const scrollToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    smoothScrollTo(offsetPosition);
  }, [offset, smoothScrollTo]);

  const scrollToTop = useCallback(() => {
    smoothScrollTo(0);
  }, [smoothScrollTo]);

  const scrollToSection = useCallback((selector: string) => {
    const element = document.querySelector(selector);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    smoothScrollTo(offsetPosition);
  }, [offset, smoothScrollTo]);

  const scrollByAmount = useCallback((amount: number) => {
    const currentY = window.scrollY;
    const targetY = currentY + amount;
    
    smoothScrollTo(targetY);
  }, [smoothScrollTo]);

  const scrollToPercentage = useCallback((percentage: number) => {
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetY = (documentHeight * percentage) / 100;
    
    smoothScrollTo(targetY);
  }, [smoothScrollTo]);

  return {
    scrollToElement,
    scrollToTop,
    scrollToSection,
    scrollByAmount,
    scrollToPercentage,
    smoothScrollTo,
  };
}; 