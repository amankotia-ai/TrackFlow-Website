import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { slideUp, staggerContainer, staggerItem, buttonHover } from "@/lib/animations";
import { useCloudForm } from '@/contexts/CloudFormContext';

export const GitHubRepo: React.FC = () => {
  const { openForm } = useCloudForm();

  return (
    <motion.div 
      className="max-w-[72rem] mx-auto px-4 md:px-8 py-12 md:py-16 border-t border-l border-r" 
      style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="text-center">
        <motion.img 
          src="/integraiton_icon.svg" 
          alt="Integration Icon" 
          className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6"
          variants={staggerItem}
        />
        <motion.div 
          className="text-sm font-medium mb-6 text-gray-600"
          variants={staggerItem}
        >
          Integrations
        </motion.div>
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-4"
          variants={staggerItem}
        >
          Drop a script into any website
        </motion.h2>
        <motion.p 
          className="text-sm mb-6 md:mb-8 text-gray-600 max-w-2xl mx-auto"
          variants={staggerItem}
        >
          Simply drop a pixel into your site header. TrackFlow integrates with every CMS and website builder.
        </motion.p>
        <motion.div 
          variants={staggerItem}
          whileHover={buttonHover}
        >
          <Button 
            onClick={openForm}
            className="text-white hover:opacity-90 font-medium px-8 rounded-none"
            style={{ backgroundColor: '#F73029' }}
          >
            Start For Free
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}; 