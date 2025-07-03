import React from 'react';
import { motion, useInView } from 'framer-motion';
import { smoothFadeUp, gentleFadeInLeft, gentleFadeInRight, smoothStaggerContainer, elegantImageReveal, buttonHover } from '@/lib/animations';

export const ResearchGrants: React.FC = () => {
  const containerRef = React.useRef(null);
  const marketingRef = React.useRef(null);
  const salesRef = React.useRef(null);
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.4 });
  const isMarketingInView = useInView(marketingRef, { once: true, amount: 0.5 });
  const isSalesInView = useInView(salesRef, { once: true, amount: 0.5 });

  return (
    <motion.div 
      className="max-w-[72rem] mx-auto border-t border-l border-r" 
      style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
      ref={containerRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={smoothStaggerContainer}
    >
      {/* Marketing Section - Hidden for now */}
      {/* <motion.div 
        className="px-4 md:px-8 py-12 md:py-16"
        ref={marketingRef}
        initial="hidden"
        animate={isMarketingInView ? "visible" : "hidden"}
        variants={smoothStaggerContainer}
      >
        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-16">
          <motion.div 
            className="flex-1 order-2 lg:order-1"
            variants={gentleFadeInLeft}
          >
            <motion.img 
              src="/Frame 633536.png" 
              alt="Visitor Analytics Dashboard" 
              className="w-full h-auto object-contain rounded-lg mb-6 md:mb-8"
              variants={elegantImageReveal}
            />
          </motion.div>
          
          <motion.div 
            className="flex-1 order-1 lg:order-2 text-center lg:text-left"
            variants={gentleFadeInRight}
          >
            <motion.div className="mb-4" variants={smoothFadeUp}>
              <div className="text-sm font-medium mb-6 text-gray-600">For Marketing</div>
            </motion.div>
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-4"
              variants={smoothFadeUp}
            >
              More personalization, less work
            </motion.h2>
            <motion.p 
              className="text-sm mb-6 text-gray-600"
              variants={smoothFadeUp}
            >
              Go beyond inserting a logo or a custom title. The TrackFlow AI tells each visitor exactly how you can meet their needs.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Full-width divider */}
      {/* <motion.div 
        className="w-full border-b" 
        style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.3
        }}
      /> */}

      {/* Sales Section - Hidden for now */}
      {/* <motion.div 
        className="px-4 md:px-8 py-12 md:py-16"
        ref={salesRef}
        initial="hidden"
        animate={isSalesInView ? "visible" : "hidden"}
        variants={smoothStaggerContainer}
      >
        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-16">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            variants={gentleFadeInLeft}
          >
            <motion.div className="mb-4" variants={smoothFadeUp}>
              <div className="text-sm font-medium mb-6 text-gray-600">For Sales</div>
            </motion.div>
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-4"
              variants={smoothFadeUp}
            >
              Turn page views into pipeline
            </motion.h2>
            <motion.p 
              className="text-sm mb-6 text-gray-600"
              variants={smoothFadeUp}
            >
              Whenever an account hits your website, TrackFlow can deliver an AI-generated message, case study, or video. Move your leads down the funnel each time they hit your site.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            variants={gentleFadeInRight}
          >
            <motion.img 
              src="/saasdasf3egew.svg" 
              alt="Visitor Intent Analytics Chart" 
              className="w-full h-auto object-contain rounded-lg"
              variants={elegantImageReveal}
            />
          </motion.div>
        </div>
      </motion.div> */}
    </motion.div>
  );
}; 