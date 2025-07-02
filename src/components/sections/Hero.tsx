import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { slideUp, fadeIn, staggerContainer, staggerItem, buttonHover } from '@/lib/animations';
import { useCloudForm } from '@/contexts/CloudFormContext';

export const Hero: React.FC = () => {
  const { openForm } = useCloudForm();

  return (
    <motion.div 
      className="max-w-[72rem] mx-auto border-l border-r border-b overflow-hidden" 
      style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 px-4 md:px-8 py-8 md:py-8 min-h-[300px] md:min-h-[450px] relative">
        {/* Left Content */}
        <div className="flex-1 max-w-lg text-center md:text-left">
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 md:mb-8 text-gray-800 max-w-xl tracking-tight"
            variants={staggerItem}
          >
            Make each site visit as personal as <span style={{ color: '#F73029' }}>a sales call</span>
          </motion.h1>
          
          <motion.p 
            className="text-sm mb-8 md:mb-12 max-w-md leading-relaxed text-gray-600 mx-auto md:mx-0"
            variants={staggerItem}
          >
            Serve custom content to each of your website visitors based on their interests.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
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

        {/* Right Content - Hero Image */}
        <motion.div 
          className="flex-1 md:flex-[1.2] flex justify-center md:absolute md:right-[54px] md:bottom-0 items-end self-end -mb-4 md:-mb-8 order-first md:order-last"
          variants={staggerItem}
        >
          <img 
            src="/Frame 633535.png" 
            alt="Hero Section Illustration" 
            className="w-full max-w-sm md:max-w-lg md:w-auto h-auto object-contain scale-[0.81] md:scale-[1.089]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}; 