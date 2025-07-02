import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { slideUp, fadeIn, staggerContainer, staggerItem, buttonHover } from '@/lib/animations';
import { useCloudForm } from '@/contexts/CloudFormContext';

export const ExamplesHero: React.FC = () => {
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
          <motion.div 
            className="flex flex-col items-center mb-6"
            variants={staggerItem}
          >
            <img 
              src="/image 115_layerstyle.svg" 
              alt="Examples icon" 
              className="w-12 h-16 mb-4"
            />
            <div className="text-sm font-medium text-gray-600">
              Rule Examples
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 md:mb-8 text-gray-800 tracking-tight"
            variants={staggerItem}
          >
            Detailed Rule <span style={{ color: '#F73029' }}>Examples</span>
          </motion.h1>
          
          <motion.p 
            className="text-sm mb-8 md:mb-12 max-w-2xl leading-relaxed text-gray-600 mx-auto"
            variants={staggerItem}
          >
            See how TrackFlow's powerful personalization rules work in real-world scenarios. 
            From UTM-based content replacement to time-based reveals, these examples show 
            how to create dynamic, engaging experiences for every visitor.
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


      </div>
    </motion.div>
  );
}; 