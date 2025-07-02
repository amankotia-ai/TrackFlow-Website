import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { slideUp, scaleIn, staggerContainer, staggerItem, buttonHover } from '@/lib/animations';
import { useCloudForm } from '@/contexts/CloudFormContext';

export const ReadyToBuild: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { openForm } = useCloudForm();

  return (
    <motion.div 
      className="max-w-[72rem] mx-auto px-4 md:px-8 py-12 md:py-16 border-t border-l border-r overflow-hidden" 
      style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <motion.div 
        className="relative overflow-hidden"
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
          className="relative p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12"
          variants={staggerContainer}
        >
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left flex flex-col justify-center">
            <motion.div 
              className="w-12 h-12 mb-6 md:mb-8 mx-auto lg:mx-0" 
              variants={scaleIn}
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
              className="flex justify-center lg:justify-start"
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
            </motion.div>
          </div>
          
          {/* Right Banner Image */}
          <motion.div 
            className="flex-shrink-0 w-full lg:w-80 xl:w-96 lg:-mr-24 xl:-mr-32 lg:-mb-40 xl:-mb-48"
            style={{ marginRight: '-100px', marginBottom: '-180px' }}
            variants={staggerItem}
          >
            <img 
              src="/image 109_layerstyle.svg" 
              alt="TrackFlow Banner" 
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}; 