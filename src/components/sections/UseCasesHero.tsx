import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { slideUp, fadeIn, staggerContainer, staggerItem, buttonHover } from '@/lib/animations';
import { useCloudForm } from '@/contexts/CloudFormContext';

export const UseCasesHero: React.FC = () => {
  const { openForm } = useCloudForm();

  return (
    <motion.div 
      className="max-w-[72rem] mx-auto border-l border-r border-b overflow-hidden" 
      style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="flex flex-col items-center justify-center gap-8 px-4 md:px-8 py-12 md:py-16 min-h-[400px] text-center relative">
        {/* Hero Content */}
        <div className="max-w-3xl">
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 md:mb-8 text-gray-800 tracking-tight"
            variants={staggerItem}
          >
            Personalization <span style={{ color: '#F73029' }}>Use Cases</span>
          </motion.h1>
          
          <motion.p 
            className="text-sm mb-8 md:mb-12 max-w-2xl leading-relaxed text-gray-600 mx-auto"
            variants={staggerItem}
          >
            Discover proven use cases across industries. From B2B lead generation to e-commerce optimization, 
            see how TrackFlow transforms visitor experiences with intelligent personalization strategies 
            that drive real business results.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            variants={staggerItem}
          >
            <motion.div whileHover={buttonHover}>
              <Button 
                onClick={openForm}
                className="text-white hover:opacity-90 font-medium px-6 py-3 rounded-none w-full sm:w-auto" 
                style={{ backgroundColor: '#F73029' }}
              >
                Book a Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Placeholder for illustration */}
        <motion.div 
          className="w-full max-w-md h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center"
          variants={staggerItem}
        >
          <div className="text-center text-gray-400">
            <div className="w-16 h-16 mx-auto mb-2 bg-gray-200 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <p className="text-sm">Use Cases Overview</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}; 