import React from 'react';
import { motion, useInView } from 'framer-motion';
import { slideUp, staggerContainer, staggerItem, fadeIn } from '@/lib/animations';

interface UseCaseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ title, description, icon, items }) => (
  <motion.div 
    className="border-r border-b p-8 md:p-10 flex flex-col justify-start min-h-[400px] last:border-r-0 md:even:border-r-0 lg:odd:border-r" 
    style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
    variants={staggerItem}
  >
    {/* Header Section */}
    <motion.div 
      className="flex items-center gap-3 mb-4"
      variants={fadeIn}
    >
      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <motion.h3 
        className="text-xl md:text-2xl font-medium text-gray-800 leading-tight"
        variants={slideUp}
      >
        {title}
      </motion.h3>
    </motion.div>
    
    {/* Description */}
    <motion.p 
      className="text-sm text-gray-600 mb-6 leading-relaxed"
      variants={fadeIn}
    >
      {description}
    </motion.p>
    
    <motion.div className="flex-1 flex flex-col" variants={fadeIn}>
      {/* Use Cases List */}
      <div className="space-y-4 mb-auto">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" style={{ backgroundColor: '#F73029' }}></div>
            <div className="text-sm leading-relaxed text-gray-700">
              {item}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

// Icon components
const OfficeIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="7" y="7" width="3" height="3" fill="currentColor"/>
    <rect x="14" y="7" width="3" height="3" fill="currentColor"/>
    <rect x="7" y="14" width="10" height="3" fill="currentColor"/>
  </svg>
);

const ShoppingIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L5 3H3m4 10v6a2 2 0 002 2h10a2 2 0 002-2v-6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="9" cy="19" r="1" fill="currentColor"/>
    <circle cx="20" cy="19" r="1" fill="currentColor"/>
  </svg>
);

const CodeIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const TrendingUpIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" stroke="currentColor" strokeWidth="2" fill="none"/>
    <polyline points="17,6 23,6 23,12" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

export const UseCasesList: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const useCases = [
    {
      title: "Track Visitor Journeys",
      description: "Complete UTM parameter tracking and multi-visit intelligence",
      icon: <TrendingUpIcon />,
      items: [
        "First-touch and last-touch UTM attribution",
        "Visit count and session-based personalization",
        "Time-on-page triggered content changes",
        "Cross-session visitor recognition"
      ]
    },
    {
      title: "Tailor Existing Copy",
      description: "CSS selector-based content replacement system",
      icon: <CodeIcon />,
      items: [
        "Replace any text, button, or link content",
        "UTM parameter condition matching",
        "Rule priority and conflict resolution",
        "Real-time content personalization"
      ]
    },
    {
      title: "Per-Visit Personalization",
      description: "Dynamic experiences that evolve with each visit",
      icon: <ShoppingIcon />,
      items: [
        "Show/hide elements based on visit count",
        "Time-based content reveals",
        "Returning visitor exclusive content",
        "CSS class manipulation for styling changes"
      ]
    },
    {
      title: "Fine-Tune Personalization",
      description: "Flexible rule engine with precise targeting",
      icon: <OfficeIcon />,
      items: [
        "Target elements using CSS selectors",
        "Combine multiple conditions (UTM + visit count + time)",
        "Hide, show, add/remove classes actions",
        "Rule execution tracking and analytics"
      ]
    }
  ];

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
        className="text-sm font-medium mb-6 text-gray-600"
        variants={slideUp}
      >
        Proven strategies
      </motion.div>
      
      <motion.h2 
        className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-4"
        variants={slideUp}
      >
        Personalization across industries
      </motion.h2>
      
      <motion.p 
        className="text-sm mb-8 md:mb-12 text-gray-600 max-w-4xl"
        variants={slideUp}
      >
        TrackFlow powers personalized experiences across diverse industries and business models. 
        Each use case represents proven strategies that drive engagement, conversions, and revenue growth.
      </motion.p>
      
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 border-t -mx-4 md:-mx-8" 
        style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
        variants={staggerContainer}
      >
        {useCases.map((useCase, index) => (
          <UseCaseCard 
            key={index} 
            title={useCase.title}
            description={useCase.description}
            icon={useCase.icon}
            items={useCase.items}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}; 