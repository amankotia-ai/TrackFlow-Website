import React from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, staggerItem, slideUp } from '@/lib/animations';

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <motion.div 
    className="text-center md:text-left"
    variants={staggerItem}
  >
    <motion.div 
      className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-2"
      variants={slideUp}
    >
      {value}
    </motion.div>
    <motion.div 
      className="text-gray-600 text-sm md:text-base"
      variants={slideUp}
    >
      {label}
    </motion.div>
  </motion.div>
);

export const Stats: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const stats = [
    { value: "80B+", label: "Tokens Scraped" },
    { value: "200,000+", label: "Browser Hours Served" },
    { value: "<1s", label: "Avg. Session Start Time" }
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
        {stats.map((stat, index) => (
          <StatItem key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </motion.div>
  );
}; 