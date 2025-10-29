import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { slideUp, fadeIn, staggerContainer, staggerItem } from '@/lib/animations';

export const SessionsAPI: React.FC = () => {
  const features = [
    {
      title: "15+ Behavioral Triggers",
      description: "Detect page visits, scroll depth, time on page, user journeys, exit intent, and device type in real-time",
      icon: "/image 118_layerstyle.svg"
    },
    {
      title: "Traffic Source Intelligence",
      description: "Personalize based on UTM parameters, geolocation, referral source, and session status",
      icon: "/image 111_layerstyle.svg"
    },
    {
      title: "Powerful Operations",
      description: "Replace text, modify CSS, hide/show elements, display overlays, and redirect users dynamically",
      icon: "/image 112_layerstyle.svg"
    },
    {
      title: "Advanced Integrations",
      description: "Fire custom events, trigger analytics, execute JavaScript, and connect with CRM systems",
      icon: "/image 113_layerstyle.svg"
    }
  ];

  return (
    <motion.div 
      className="max-w-[72rem] mx-auto border-t border-l border-r border-b" 
      style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="flex flex-col lg:flex-row items-start">
        <div className="flex-1 lg:max-w-lg text-center lg:text-left pt-8 pb-8 lg:pb-16 px-6 md:px-8 lg:pr-16 border-b lg:border-b-0 lg:border-r" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-4"
            variants={staggerItem}
          >
            Outbound is personal. Inbound should be too.
          </motion.h2>
          <motion.p 
            className="text-sm mb-0 text-gray-600 max-w-sm mx-auto lg:mx-0"
            variants={staggerItem}
          >
            TrackFlow's powerful workflow system combines triggers and operations to create intelligent, behavior-driven web experiences. Simply drag, drop, connect, and deploy.
          </motion.p>
        </div>
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 w-full">
          {features.map((feature, index) => {
            const isFirstColumn = index % 2 === 0;
            const isLastRow = index >= features.length - 2;
            
            return (
              <motion.div 
                key={index}
                className={`p-6 border-b last:border-b-0 md:border-r md:even:border-r-0 ${
                  isLastRow ? 'md:border-b-0' : ''
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