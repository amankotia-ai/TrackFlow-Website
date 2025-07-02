import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { slideUp, fadeIn, staggerContainer, staggerItem, buttonHover } from '@/lib/animations';

export const DemoHero: React.FC = () => {
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
            See TrackFlow <span style={{ color: '#F73029' }}>in action</span>
          </motion.h1>
          
          <motion.p 
            className="text-sm mb-8 md:mb-12 max-w-md leading-relaxed text-gray-600 mx-auto md:mx-0"
            variants={staggerItem}
          >
            Experience how TrackFlow personalizes your website for different visitor types. 
            Select a scenario below to see real-time personalization in action.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
            variants={staggerItem}
          >
            <motion.div whileHover={buttonHover}>
              <Button 
                className="text-white hover:opacity-90 font-medium px-6 py-3 rounded-none w-full sm:w-auto" 
                style={{ backgroundColor: '#F73029' }}
              >
                Try Demo Below
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Content - Demo Preview */}
        <motion.div 
          className="flex-1 md:flex-[1.2] flex justify-center md:absolute md:right-[54px] md:bottom-0 items-end self-end -mb-4 md:-mb-8 order-first md:order-last"
          variants={staggerItem}
        >
          <div className="w-full max-w-sm md:max-w-lg bg-white border rounded-lg shadow-sm overflow-hidden" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>
            <div className="bg-gray-50 px-4 py-2 border-b" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-gray-200 rounded px-2 py-1 text-xs text-gray-600">
                  yourwebsite.com
                </div>
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-medium text-gray-800 mb-2">Your Website</h3>
              <p className="text-xs text-gray-600 mb-3">Personalized in real-time</p>
              <div className="text-xs px-3 py-1 rounded" style={{ backgroundColor: '#F73029', color: 'white' }}>
                Interactive Demo
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}; 