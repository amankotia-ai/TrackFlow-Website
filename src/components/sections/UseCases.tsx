import React from 'react';
import { motion, useInView } from 'framer-motion';
import { slideUp, staggerContainer, staggerItem, fadeIn } from '@/lib/animations';

interface UseCaseCardProps {
  title: string;
  description: string;
  icon?: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ title, description, icon }) => (
  <motion.div 
    className="border-r border-b p-6 md:p-8 flex flex-col justify-between min-h-[200px] md:min-h-[220px] last:border-r-0 md:even:border-r md:odd:border-r lg:nth-child-4n:border-r-0" 
    style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
    variants={staggerItem}
  >
    <motion.div 
      className="flex justify-start mb-4"
      variants={fadeIn}
    >
      {icon ? (
        <img 
          src={icon} 
          alt="" 
          className="w-6 h-6 object-contain"
        />
      ) : (
        /* Small pixel-art style icon */
        <div className="grid grid-cols-3 gap-0.5">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 ${[0, 1, 3, 4, 5, 7, 8].includes(index) ? 'bg-[#F73029]' : 'bg-transparent'}`}
            />
          ))}
        </div>
      )}
    </motion.div>
    <div className="flex-1">
      <motion.h3 
        className="text-sm md:text-base font-medium text-gray-800 mb-2"
        variants={slideUp}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-xs md:text-sm text-gray-600 leading-relaxed"
        variants={fadeIn}
      >
        {description}
      </motion.p>
    </div>
  </motion.div>
);

// Icon components
const BarChartIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
    <rect x="3" y="12" width="4" height="9" fill="currentColor" />
    <rect x="10" y="8" width="4" height="13" fill="currentColor" />
    <rect x="17" y="4" width="4" height="17" fill="currentColor" />
  </svg>
);

const GridIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
    <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor" />
    <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor" />
    <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor" />
    <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor" />
  </svg>
);

const LayersIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" />
    <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const SettingsIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-700">
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="currentColor" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

export const UseCases: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const useCases = [
    { 
      title: "Behavioral Targeting", 
      description: "Trigger actions based on scroll depth, time on page, repeat visits, user journeys, and exit intent",
      icon: "/image 114_layerstyle.svg" 
    },
    { 
      title: "Content Personalization", 
      description: "Replace text, modify CSS, hide/show elements, and display custom overlays for any visitor segment",
      icon: "/image 115_layerstyle.svg" 
    },
    { 
      title: "Campaign Intelligence", 
      description: "Adapt messaging based on UTM parameters, traffic source, device type, and geographic location",
      icon: "/image 116_layerstyle.svg" 
    },
    { 
      title: "Conversion Optimization", 
      description: "Reduce cart abandonment, improve lead quality, and increase conversions by 15-40%",
      icon: "/image 117_layerstyle.svg" 
    }
  ];

  return (
    <motion.div 
      className="max-w-[72rem] mx-auto px-4 md:px-8 py-8 md:py-12 border-t border-l border-r" 
      style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <motion.h2 
        className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-4 max-w-sm"
        variants={slideUp}
      >
        Turn your website into your best closer
      </motion.h2>
      <motion.p 
        className="text-sm mb-10 text-gray-600 max-w-xs"
        variants={slideUp}
      >
        From the first click to the final visit, TrackFlow adjusts your content to keep leads moving.
      </motion.p>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t -mx-4 md:-mx-8 mt-10" 
        style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
        variants={staggerContainer}
      >
        {useCases.map((useCase, index) => (
          <UseCaseCard 
            key={index} 
            title={useCase.title}
            description={useCase.description}
            icon={useCase.icon}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}; 