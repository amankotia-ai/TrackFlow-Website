import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { slideUp, scaleIn, staggerContainer, staggerItem, buttonHover } from '@/lib/animations';
import { useCloudForm } from '@/contexts/CloudFormContext';

export const ReadyToBuild: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { openForm } = useCloudForm();

  return (
    <motion.div 
      className="max-w-[72rem] mx-auto px-4 md:px-8 py-12 md:py-16 border-t border-l border-r" 
      style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <motion.div 
        className="relative"
        variants={scaleIn}
      >
        <motion.div 
          className="absolute inset-0 rounded-lg bg-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        </motion.div>
        
        <motion.div 
          className="relative p-6 md:p-8 lg:p-12 text-center md:text-left"
          variants={staggerContainer}
        >
          <motion.div 
            className="w-12 h-12 mb-6 md:mb-8 mx-auto md:mx-0" 
            variants={scaleIn}
            whileHover={{ 
              scale: 1.1,
              rotate: 360,
              transition: { duration: 0.3 }
            }}
          >
            <img 
              src="/image 95_layerstyle.svg" 
              alt="TrackFlow Logo" 
              className="w-full h-full object-contain"
            />
          </motion.div>
          
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-6 md:mb-8"
            variants={slideUp}
          >
            Ready to<br />
            Build with TrackFlow?
          </motion.h2>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            variants={staggerContainer}
          >
            <motion.div 
              variants={staggerItem}
              whileHover={buttonHover}
            >
              <Button 
                onClick={openForm}
                className="text-white font-medium px-8 rounded-none w-full sm:w-auto" 
                style={{ backgroundColor: '#F73029' }}
              >
                Start For Free
              </Button>
            </motion.div>
            <motion.div 
              variants={staggerItem}
              whileHover={buttonHover}
            >
              <Button 
                variant="outline" 
                className="border-gray-400 text-gray-800 hover:bg-hover-bg rounded-none w-full sm:w-auto"
              >
                Documentation
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}; 