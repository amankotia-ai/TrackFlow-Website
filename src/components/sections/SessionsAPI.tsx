import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { slideUp, fadeIn, staggerContainer, staggerItem } from '@/lib/animations';

export const SessionsAPI: React.FC = () => {
  const features = [
    {
      title: "Increase pipeline",
      description: "B2B companies using TrackFlow get 74% more demos on average. Just like in a cold email, a personal touch goes a long way.",
      icon: "/image 118_layerstyle.svg"
    },
    {
      title: "Speak to your visitors directly",
      description: "Deliver a custom-generated blog post or sales pitch to your most engaged visitors.",
      icon: "/image 111_layerstyle.svg"
    },
    {
      title: "Understand what your visitors want",
      description: "See what your visitors are engaging with and why. Spend time with your leads that are most likely to convert.",
      icon: "/image 112_layerstyle.svg"
    },
    {
      title: "Automatic landing page creation",
      description: "Never build another landing page by hand again. TrackFlow generates all content and lets you review it before launching.",
      icon: "/image 113_layerstyle.svg"
    }
  ];

  return (
    <motion.div 
      className="max-w-[72rem] mx-auto pl-4 md:pl-8 border-t border-l border-r" 
      style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0">
        <div className="flex-1 max-w-lg text-center lg:text-left pt-8 pb-12 md:pt-8 md:pb-16 pr-8 lg:pr-16">
          <motion.div 
            className="text-sm font-medium mb-6 text-gray-600"
            variants={staggerItem}
          >
            Why businesses use TrackFlow
          </motion.div>
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-4"
            variants={staggerItem}
          >
            Visitor Intelligence
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
                className={`hover:bg-hover-bg transition-colors p-6 ${
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