import React from 'react';
import { motion, useInView } from 'framer-motion';
import { slideUp, staggerContainer, staggerItem, fadeIn } from '@/lib/animations';

interface UseCaseCardProps {
  title: string;
  icon?: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ title, icon }) => (
  <motion.div 
    className="border-r border-b p-6 md:p-8 flex flex-col justify-between min-h-[140px] md:min-h-[160px] last:border-r-0 md:even:border-r md:odd:border-r lg:nth-child-4n:border-r-0" 
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
    <motion.h3 
      className="text-sm md:text-base font-medium text-gray-800"
      variants={slideUp}
    >
      {title}
    </motion.h3>
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
    { title: "Track visitor journeys", icon: "/image 114_layerstyle.svg" },
    { title: "Tailor existing copy", icon: "/image 115_layerstyle.svg" },
    { title: "Per-visit-personalization", icon: "/image 116_layerstyle.svg" },
    { title: "Fine-tune personalization", icon: "/image 117_layerstyle.svg" }
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
        How it works
      </motion.div>
      <motion.h2 
        className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-4"
        variants={slideUp}
      >
        Website personalization on autopilot
      </motion.h2>
      <motion.p 
        className="text-sm mb-8 md:mb-12 text-gray-600 max-w-4xl"
        variants={slideUp}
      >
        TrackFlow determines what your website visitors are interested in, and modifies or creates content to move each one down the funnel.
      </motion.p>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t -mx-4 md:-mx-8" 
        style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
        variants={staggerContainer}
      >
        {useCases.map((useCase, index) => (
          <UseCaseCard 
            key={index} 
            title={useCase.title}
            icon={useCase.icon}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}; 