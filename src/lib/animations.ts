import { Variants, Transition } from 'framer-motion';

// Framer Motion smooth scroll easing
export const smoothScrollEasing = [0.6, 0.01, -0.05, 0.9] as const;

// Spring transitions for smooth scrolling
export const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 0.8
};

export const smoothSpringTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 40,
  mass: 1,
  restDelta: 0.001
};

// Enhanced fade in animation for smooth scrolling
export const fadeInSmoothScroll: Variants = {
  hidden: { 
    opacity: 0,
    y: 60,
    scale: 0.95
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: smoothSpringTransition
  }
};

// Slide up with spring animation
export const slideUpSpring: Variants = {
  hidden: { 
    opacity: 0, 
    y: 100 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: springTransition
  }
};

// Stagger container with spring
export const staggerContainerSpring: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
};

// Stagger item with spring
export const staggerItemSpring: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: springTransition
  }
};

// Scale with spring bounce
export const scaleSpring: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -5
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      mass: 0.8
    }
  }
};

// Slide from left with spring
export const slideLeftSpring: Variants = {
  hidden: { 
    opacity: 0, 
    x: -80,
    rotate: -2
  },
  visible: { 
    opacity: 1, 
    x: 0,
    rotate: 0,
    transition: springTransition
  }
};

// Slide from right with spring
export const slideRightSpring: Variants = {
  hidden: { 
    opacity: 0, 
    x: 80,
    rotate: 2
  },
  visible: { 
    opacity: 1, 
    x: 0,
    rotate: 0,
    transition: springTransition
  }
};

// Enhanced button hover with spring
export const buttonHoverSpring = {
  scale: 1.05,
  y: -3,
  transition: {
    type: "spring",
    stiffness: 600,
    damping: 15
  }
};

// Enhanced image hover with spring
export const imageHoverSpring = {
  scale: 1.08,
  y: -6,
  rotate: 1,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 20
  }
};

// Page transition with spring
export const pageTransitionSpring: Variants = {
  hidden: { 
    opacity: 0,
    y: 40,
    scale: 0.98
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: smoothSpringTransition
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

// Floating animation for continuous motion
export const floatingAnimation: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      ease: "easeInOut",
      times: [0, 0.5, 1],
      repeat: Infinity,
    }
  }
};

// Scroll-triggered reveal animation
export const scrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 75,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

// Legacy animations (keeping for compatibility)
export const fadeIn: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const fadeInFromScroll: Variants = {
  hidden: { 
    opacity: 0,
    y: 60
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8,
      ease: smoothScrollEasing
    }
  }
};

export const slideUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const slideUpFromScroll: Variants = {
  hidden: { 
    opacity: 0, 
    y: 80 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: smoothScrollEasing
    }
  }
};

export const slideUpDelay: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      delay: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const scaleFromScroll: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 40
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      duration: 0.8,
      ease: smoothScrollEasing
    }
  }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerContainerScroll: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export const staggerItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const staggerItemScroll: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: smoothScrollEasing
    }
  }
};

export const slideLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const slideLeftFromScroll: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8,
      ease: smoothScrollEasing
    }
  }
};

export const slideRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const slideRightFromScroll: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8,
      ease: smoothScrollEasing
    }
  }
};

export const buttonHover = {
  scale: 1.02,
  transition: { 
    duration: 0.2
  }
};

export const buttonHoverSmooth = {
  scale: 1.02,
  y: -2,
  transition: { 
    duration: 0.3,
    ease: smoothScrollEasing
  }
};

export const imageHover = {
  scale: 1.05,
  transition: { 
    duration: 0.3
  }
};

export const imageHoverSmooth = {
  scale: 1.05,
  y: -4,
  transition: { 
    duration: 0.4,
    ease: smoothScrollEasing
  }
};

export const pageTransition: Variants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6,
      ease: smoothScrollEasing
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { 
      duration: 0.4,
      ease: smoothScrollEasing
    }
  }
}; 