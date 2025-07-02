import React from 'react';
import { motion } from 'framer-motion';
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

  return (
    <motion.div 
      className="max-w-[72rem] mx-auto border-l border-r border-b overflow-visible" 
      style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="flex flex-col items-center justify-center px-4 md:px-8 pt-16 md:pt-24">
        {/* Content */}
        <div className="flex flex-col items-center text-center">
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-4 text-[#1F2937] w-[60%] tracking-[-0.03em]"
            style={{ 
              fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              fontSize: '56px'
            }}
            variants={staggerItem}
          >
            Make each site visit as personal as <span className="text-[#F73029]">a sales call</span>
          </motion.h1>
          <motion.p 
            className="text-sm text-gray-600 max-w-2xl mb-8"
            variants={staggerItem}
          >
            Serve custom content to each of your website visitors based on their interests.
          </motion.p>
          <motion.div 
            className="mb-16"
            variants={staggerItem}
          >
            <motion.div whileHover={buttonHover}>
              <Button 
                className="text-white hover:opacity-90 font-normal px-8 py-3 text-base bg-[#F73029] rounded-none flex items-center gap-2" 
                onClick={handleDemoClick}
              >
                <img 
                  src="/imageaaa 95_layerstyle.svg" 
                  alt="" 
                  className="w-5 h-5"
                />
                Watch TrackFlow in Action
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Demo Section */}
          <motion.div 
            className="w-full px-4 md:px-8"
            variants={staggerItem}
          >
            <div className="max-w-[90%] mx-auto">
              <DemoInteractiveSimple ref={demoRef} />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}; 