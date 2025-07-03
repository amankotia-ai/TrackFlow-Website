import React from 'react';
import { motion, useInView } from 'framer-motion';
import { slideUp, slideLeft, slideRight, staggerContainer, staggerItem, scaleIn } from '@/lib/animations';

export const Footer: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <motion.div 
        className="max-w-[72rem] mx-auto px-4 md:px-8 py-8 md:py-12 border-t border-l border-r border-b" 
        style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
        variants={staggerContainer}
      >
        <div className="flex flex-col space-y-8">
          <motion.div 
            className="text-center md:text-left"
            variants={slideLeft}
          >
            <motion.img 
              src="/Vesasctor.svg" 
              alt="Steel Logo" 
              className="h-8 mb-4 mx-auto md:mx-0"
              variants={scaleIn}
            />
            <motion.p 
              className="text-sm mb-4 text-gray-600 max-w-56"
              variants={slideUp}
            >
              Stand out from the crowd with next-generation marketing.
            </motion.p>
            <motion.p 
              className="text-xs text-gray-500"
              variants={slideUp}
            >
              © Poliform Technologies LLP, 2025
            </motion.p>
            <motion.div 
              className="flex items-center justify-center md:justify-start space-x-4 mt-2 text-xs"
              variants={staggerContainer}
            >
              <motion.span 
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                variants={staggerItem}
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.span>
              <motion.span 
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                variants={staggerItem}
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.span>
            </motion.div>
            <motion.div 
              className="flex items-center justify-center md:justify-start space-x-2 mt-4"
              variants={slideUp}
            >
              <motion.div 
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-xs text-gray-500">All Systems Operational</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  );
}; 