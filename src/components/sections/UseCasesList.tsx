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
      className="flex items-start gap-4 mb-8"
      variants={fadeIn}
    >
      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-full bg-[rgba(247,48,41,0.1)] text-[#F73029] mt-1">
        {icon}
      </div>
      <div className="flex-1">
        <motion.h3 
          className="text-xl md:text-2xl font-medium text-gray-800 leading-tight mb-3"
          variants={slideUp}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-sm text-gray-600 leading-relaxed"
          variants={fadeIn}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
    
    <motion.div className="flex-1" variants={fadeIn}>
      {/* Use Cases List */}
      <div className="space-y-5">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" style={{ backgroundColor: '#F73029' }}></div>
            <div className="text-sm leading-relaxed text-gray-700 flex-1">
              {item}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

// Icon components
const ShoppingIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-current">
    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L5 3H3m4 10v6a2 2 0 002 2h10a2 2 0 002-2v-6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="9" cy="19" r="1" fill="currentColor"/>
    <circle cx="20" cy="19" r="1" fill="currentColor"/>
  </svg>
);

const CodeIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-current">
    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const OfficeIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-current">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="7" y="7" width="3" height="3" fill="currentColor"/>
    <rect x="14" y="7" width="3" height="3" fill="currentColor"/>
    <rect x="7" y="14" width="10" height="3" fill="currentColor"/>
  </svg>
);

const NewspaperIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-current">
    <path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H4a2 2 0 00-2 2v16a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M7 7h10M7 11h10M7 15h5" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

export const UseCasesList: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const useCases = [
    {
      title: "E-Commerce & Retail",
      description: "Reduce cart abandonment and boost mobile conversions",
      icon: <ShoppingIcon />,
      items: [
        "Cart Abandonment Recovery: Display 15% off + free shipping popup on exit intent (30-50% reduction)",
        "Mobile Shopping Optimization: Replace 'Click' with 'Tap', increase button sizes, show mobile checkout",
        "Geographic Pricing: Auto-convert currency and show local shipping for international visitors",
        "Product Recommendations: Show personalized products based on browsing and purchase history"
      ]
    },
    {
      title: "SaaS & Technology",
      description: "Improve trial conversions and feature adoption",
      icon: <CodeIcon />,
      items: [
        "Trial Extension for Engaged Users: Offer 14 extra days to users spending 5+ minutes across key pages",
        "Feature Discovery: Show advanced features panel to power users with 10+ visits in 7 days",
        "Exit-Intent Demo Scheduling: Display personalized demo booking form before users leave pricing page",
        "User Onboarding: Guide new users through key features with contextual overlays and tooltips"
      ]
    },
    {
      title: "B2B Services",
      description: "Qualify leads and personalize for enterprise buyers",
      icon: <OfficeIcon />,
      items: [
        "Account-Based Marketing: Show enterprise messaging and case studies to business IP addresses",
        "Lead Qualification Workflow: Add company size and industry fields for engaged visitors (70% better SQLs)",
        "Geographic Content Localization: Auto-translate headlines and show regional compliance badges",
        "Industry-Specific Messaging: Display relevant testimonials and solutions based on visitor segment"
      ]
    },
    {
      title: "Media & Publishing",
      description: "Grow subscriptions and boost reader engagement",
      icon: <NewspaperIcon />,
      items: [
        "Newsletter Signup Optimization: Show slide-in banner at 75% scroll (80% increase in signups)",
        "Ad Blocker Detection: Display subscription offers and hide broken ad spaces for ad-block users",
        "Returning Reader Recognition: Welcome back visitors with personalized reading history and recommendations",
        "Content Engagement: Display related articles and premium content previews to highly engaged readers"
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
        Real-World Examples
      </motion.div>
      
      <motion.h2 
        className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-4"
        variants={slideUp}
      >
        <span style={{ color: '#F73029' }}>Industry Use Cases:</span> Proven Results
      </motion.h2>
      
      <motion.p 
        className="text-sm mb-8 md:mb-12 text-gray-600 max-w-4xl"
        variants={slideUp}
      >
        See how companies across industries combine triggers and operations to create powerful personalization workflows. 
        Each use case shows real strategies that drive measurable improvements in conversions, engagement, and revenue.
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