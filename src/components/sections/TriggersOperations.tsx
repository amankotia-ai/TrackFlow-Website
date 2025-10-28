import React from 'react';
import { motion, useInView } from 'framer-motion';
import { slideUp, staggerContainer, staggerItem, fadeIn } from '@/lib/animations';

interface NodeItemProps {
  title: string;
  description: string;
}

const NodeItem: React.FC<NodeItemProps> = ({ title, description }) => (
  <motion.div 
    className="border-b p-5 md:p-8 flex flex-col md:min-h-[180px] md:border-r md:last:border-r-0 md:odd:border-r lg:nth-child-3n:border-r-0" 
    style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
    variants={staggerItem}
  >
    <motion.h4 
      className="text-sm md:text-base font-medium text-gray-800 mb-2"
      variants={slideUp}
    >
      {title}
    </motion.h4>
    <motion.p 
      className="text-xs md:text-sm text-gray-600 leading-snug md:leading-relaxed"
      variants={fadeIn}
    >
      {description}
    </motion.p>
  </motion.div>
);

export const TriggersOperations: React.FC = () => {
  const triggerRef = React.useRef(null);
  const operationRef = React.useRef(null);
  const isTriggerInView = useInView(triggerRef, { once: true, amount: 0.3 });
  const isOperationInView = useInView(operationRef, { once: true, amount: 0.3 });

  const triggers = [
    {
      title: "Page Visits",
      description: "Detect engaged visitors based on page view counts across sessions, 24 hours, 7 days, or 30 days"
    },
    {
      title: "Time on Page",
      description: "Measure engagement through page dwell time to identify serious prospects vs. casual browsers"
    },
    {
      title: "Scroll Depth",
      description: "Understand content engagement through percentage-based scroll tracking (0-100%)"
    },
    {
      title: "User Journey",
      description: "Map multi-page navigation patterns to detect buying intent through browsing behavior"
    },
    {
      title: "Repeat Visitor",
      description: "Recognize and reward returning visitors with minimum visit count thresholds"
    },
    {
      title: "UTM Parameters",
      description: "Personalize based on campaign attribution (source, medium, campaign, term, content)"
    },
    {
      title: "Device Type",
      description: "Optimize experiences by device with mobile, tablet, or desktop detection"
    },
    {
      title: "Exit Intent",
      description: "Capture abandoning visitors before they leave with customizable sensitivity levels"
    },
    {
      title: "User Inactivity",
      description: "Re-engage idle visitors with customizable inactivity duration triggers"
    },
    {
      title: "Geolocation",
      description: "Personalize by country, region, city, postal code, time zone, ISP, and IP type"
    },
    {
      title: "Session Status",
      description: "Target based on user authentication state (logged in, not logged in, session expiring)"
    }
  ];

  const operations = [
    {
      title: "Replace Text",
      description: "Dynamic content replacement in real-time via CSS selectors with smart text matching"
    },
    {
      title: "Hide Element",
      description: "Remove irrelevant content dynamically with smooth animations (fade out, slide up)"
    },
    {
      title: "Show Element",
      description: "Reveal hidden content strategically with engaging animations (fade in, slide down)"
    },
    {
      title: "Modify CSS",
      description: "Apply custom styling in real-time for colors, fonts, sizes, padding, and more"
    },
    {
      title: "Redirect User",
      description: "Intelligent traffic routing with customizable delays and new tab options"
    },
    {
      title: "Button Press",
      description: "Modify button behavior dynamically and change navigation paths on click"
    },
    {
      title: "Display Overlay",
      description: "Create engaging overlays: popups, banners, sidebars, tooltips, fullscreen, and corners"
    },
    {
      title: "Custom Event",
      description: "Trigger analytics events, custom JavaScript, API calls, and DOM events"
    },
    {
      title: "Progressive Form",
      description: "Intelligent multi-step data collection with 10 field types and reduced abandonment"
    },
    {
      title: "Dynamic Content",
      description: "Behavior-based personalization with recommendations, messages, and location-specific content"
    }
  ];

  return (
    <>
      {/* Trigger Nodes Section */}
      <motion.div 
        className="max-w-[72rem] mx-auto border-t border-l border-r" 
        style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
        ref={triggerRef}
        initial="hidden"
        animate={isTriggerInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="px-5 md:px-8 py-8 md:py-16">
          <motion.div 
            className="text-sm font-medium mb-4 md:mb-6 text-gray-600"
            variants={slideUp}
          >
            Know Your Visitors
          </motion.div>
          
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-3 md:mb-4"
            variants={slideUp}
          >
            <span style={{ color: '#F73029' }}>Trigger Nodes:</span> Detect Visitor Behavior
          </motion.h2>
          
          <motion.p 
            className="text-sm leading-snug md:leading-normal mb-6 md:mb-12 text-gray-600 max-w-4xl"
            variants={slideUp}
          >
            TrackFlow monitors 15+ visitor signals in real-time to trigger personalization at the perfect moment. 
            Detect behavior, traffic sources, device types, and context to create intelligent experiences.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t" 
          style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
          variants={staggerContainer}
        >
          {triggers.map((trigger, index) => (
            <NodeItem 
              key={index} 
              title={trigger.title}
              description={trigger.description}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Spacer */}
      <div 
        className="max-w-[72rem] mx-auto border-l border-r h-[1px]"
        style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
      ></div>

      {/* Operation Nodes Section */}
      <motion.div 
        className="max-w-[72rem] mx-auto border-l border-r" 
        style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
        ref={operationRef}
        initial="hidden"
        animate={isOperationInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="px-5 md:px-8 py-8 md:py-16">
          <motion.div 
            className="text-sm font-medium mb-4 md:mb-6 text-gray-600"
            variants={slideUp}
          >
            Transform Your Website
          </motion.div>
          
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-3 md:mb-4"
            variants={slideUp}
          >
            <span style={{ color: '#F73029' }}>Operation Nodes:</span> Execute Personalization
          </motion.h2>
          
          <motion.p 
            className="text-sm leading-snug md:leading-normal mb-6 md:mb-12 text-gray-600 max-w-4xl"
            variants={slideUp}
          >
            Once triggered, TrackFlow executes powerful actions to personalize the experience. 
            Modify content, control navigation, display overlays, and integrate with your marketing stack.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t" 
          style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
          variants={staggerContainer}
        >
          {operations.map((operation, index) => (
            <NodeItem 
              key={index} 
              title={operation.title}
              description={operation.description}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Spacer */}
      <div 
        className="max-w-[72rem] mx-auto border-l border-r h-[1px]"
        style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
      ></div>
    </>
  );
};

