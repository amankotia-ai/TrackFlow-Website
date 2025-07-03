import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { slideUp, fadeIn, staggerContainer, staggerItem } from '@/lib/animations';

export const SessionsAPI: React.FC = () => {
  const features = [
    {
      title: "Increase pipeline",
      description: "Show different content based on visitor source",
      icon: "/image 118_layerstyle.svg"
    },
    {
      title: "Speak to your visitors directly",
      description: "Adapt messaging based on visitor behavior",
      icon: "/image 111_layerstyle.svg"
    },
    {
      title: "Understand your visitors",
      description: "Track journeys and optimize conversions",
      icon: "/image 112_layerstyle.svg"
    },
    {
      title: "Automatic landing page creation",
      description: "Dynamic content based on visitor behavior",
      icon: "/image 113_layerstyle.svg"
    }
  ];

  return (
    <motion.div 
      className="max-w-[72rem] mx-auto pl-4 md:pl-8 border-t border-l border-r border-b" 
      style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0">
        <div className="flex-1 max-w-lg text-center lg:text-left pt-8 pb-12 md:pt-8 md:pb-16 pr-8 lg:pr-16">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-4"
            variants={staggerItem}
          >
            Outbound is personal. Inbound should be too.
          </motion.h2>
          <motion.p 
            className="text-sm mb-8 text-gray-600"
            variants={staggerItem}
          >
            Transform anonymous visitors into qualified leads with personalized experiences.
          </motion.p>
        </div>
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
          {features.map((feature, index) => {
            const isFirstColumn = index % 2 === 0;
            const isLastColumn = index % 2 === 1;
            const isLastRow = index >= features.length - 2;
            
            return (
              <motion.div 
                key={index}
                className={`p-6 ${
                  isFirstColumn ? 'border-l' : ''
                } ${
                  isLastColumn ? '' : 'border-r'
                } ${
                  isLastRow ? '' : 'border-b'
                }`}
                style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
                variants={staggerItem}
              >
                <motion.div 
                  className="flex justify-start mb-4"
                  variants={fadeIn}
                >
                  <img 
                    src={feature.icon} 
                    alt={`${feature.title} icon`}
                    className="w-6 h-6 object-contain"
                  />
                </motion.div>
                <h3 className="text-sm md:text-base font-medium text-gray-800 leading-tight mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}; 