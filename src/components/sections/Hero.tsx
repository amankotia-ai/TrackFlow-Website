import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { slideUp, fadeIn, staggerContainer, staggerItem, buttonHover } from '@/lib/animations';
import { useCloudForm } from '@/contexts/CloudFormContext';
import { DemoInteractiveSimple } from './DemoInteractiveSimple';

export const Hero: React.FC = () => {
  const { openForm } = useCloudForm();
  const demoRef = React.useRef<{ triggerRandomScenario: () => void }>();

  const handleDemoClick = () => {
    demoRef.current?.triggerRandomScenario();
  };

  const pulseAnimation = {
    scale: [1, 1.2, 1],
    transition: {
      duration: 3,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  };

  const buttonAnimation: Variants = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.div 
      className="max-w-[72rem] mx-auto border-l border-r border-b overflow-visible" 
      style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="flex flex-col items-center justify-center px-6 sm:px-6 md:px-8 pt-8 sm:pt-16 md:pt-24 pb-8 sm:pb-12 md:pb-16">
        {/* Content */}
        <div className="flex flex-col items-center text-center w-full">
          <motion.h1 
            className="text-[36px] leading-[1.2] sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl xl:text-[64px] font-light mb-3 sm:mb-4 text-[#1F2937] w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] tracking-[-0.03em]"
            style={{ 
              fontFamily: 'ui-sans-serif, system-ui, sans-serif'
            }}
            variants={staggerItem}
          >
            Make each site visit as personal as <span className="text-[#F73029]">a sales call</span>
          </motion.h1>
          <motion.p 
            className="text-[15px] leading-relaxed sm:text-base md:text-base text-gray-600 max-w-2xl mb-6 sm:mb-12 md:mb-16 px-2 sm:px-4"
            variants={staggerItem}
          >
            Deliver the right message to the right visitor, at exactly the right moment.
          </motion.p>
          <motion.div 
            className="mb-6 sm:mb-6 md:mb-8"
            variants={buttonAnimation}
            initial="initial"
            animate="animate"
          >
            <Button 
              className="text-[#F73029] font-medium px-5 sm:px-8 py-2 sm:py-3 text-[13px] sm:text-base bg-transparent hover:bg-transparent rounded-none flex items-center gap-2" 
              onClick={handleDemoClick}
            >
              <motion.img 
                src="/imageaaa 95_layerstyle.svg" 
                alt="" 
                className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                animate={pulseAnimation}
              />
              <span className="whitespace-nowrap">Watch TrackFlow in Action</span>
            </Button>
          </motion.div>
          
          {/* Demo Section */}
          <motion.div 
            className="w-full -mx-6 sm:mx-0 sm:px-2 md:px-4 overflow-visible"
            variants={staggerItem}
          >
            <div className="w-full max-w-full mx-auto overflow-visible">
              <DemoInteractiveSimple ref={demoRef} />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}; 