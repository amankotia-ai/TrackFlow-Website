import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Info } from 'lucide-react';
import { slideUp, staggerContainer, staggerItem, fadeIn } from '@/lib/animations';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ExampleCardProps {
  title: string;
  scenario: string;
  ruleCondition: string;
  targetElement: string;
  action: string;
  result: string;
  additionalRule?: string;
  additionalAction?: string;
  icon?: React.ReactNode;
}

const ExampleCard: React.FC<ExampleCardProps> = ({ 
  title, 
  scenario, 
  ruleCondition, 
  targetElement, 
  action, 
  result, 
  additionalRule,
  additionalAction,
  icon 
}) => (
  <motion.div 
    className="border-r border-b p-8 md:p-10 flex flex-col justify-start min-h-[500px] last:border-r-0 md:even:border-r-0 lg:odd:border-r" 
    style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
    variants={staggerItem}
  >
    {/* Header Section */}
    <motion.div 
      className="flex items-center gap-3 mb-6"
      variants={fadeIn}
    >
      <Dialog>
        <DialogTrigger asChild>
          <button 
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors group border border-gray-200 hover:border-gray-300 flex items-center justify-center flex-shrink-0"
            title="View configuration details"
          >
            <Info className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-medium text-gray-800 mb-4">
              {title} - Configuration Details
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Scenario */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Scenario
              </h4>
              <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                {scenario}
              </p>
            </div>

            {/* Rule Configuration */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Rule Configuration
              </h4>
              <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                <div>
                  <div className="text-xs font-medium text-gray-600 mb-2">Condition</div>
                  <code className="block p-3 bg-white border rounded-md text-sm font-mono text-gray-800 leading-relaxed shadow-sm">
                    {ruleCondition}
                  </code>
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-600 mb-2">Target Element</div>
                  <code className="inline-block px-3 py-2 bg-white border rounded-md text-sm font-mono text-gray-800 shadow-sm">
                    {targetElement}
                  </code>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Actions Performed
              </h4>
              <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <div className="text-gray-700 leading-relaxed">
                    <span className="font-medium">Primary Action:</span> {action}
                  </div>
                </div>
                
                {additionalRule && (
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                    <div className="text-gray-700 leading-relaxed">
                      <span className="font-medium">Additional Rule:</span> {additionalRule}
                    </div>
                  </div>
                )}
                
                {additionalAction && (
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-300 mt-2 flex-shrink-0"></div>
                    <div className="text-gray-700 leading-relaxed">
                      <span className="font-medium">Additional Action:</span> {additionalAction}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Expected Result */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: '#F73029' }}>
                Expected Result
              </h4>
              <div className="text-gray-800 leading-relaxed font-medium p-4 rounded-lg" style={{ backgroundColor: 'rgba(247, 48, 41, 0.05)', border: '1px solid rgba(247, 48, 41, 0.1)' }}>
                {result}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {icon || (
        <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </div>
      )}
      
      <motion.h3 
        className="text-xl md:text-2xl font-medium text-gray-800 leading-tight flex-1"
        variants={slideUp}
      >
        {title}
      </motion.h3>
    </motion.div>
    
    <motion.div className="flex-1 flex flex-col" variants={fadeIn}>
      {/* Scenario Section */}
      <div className="space-y-2 mb-6">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Scenario</div>
        <div className="text-sm leading-relaxed text-gray-700 font-medium">
          {scenario}
        </div>
      </div>
      
      {/* Rule Configuration Section */}
      <div className="bg-gray-50 rounded-lg p-4 space-y-4 mb-6" style={{ backgroundColor: 'rgba(247, 248, 250, 0.6)' }}>
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Rule Configuration</div>
        
        <div className="space-y-3">
          <div>
            <div className="text-xs font-medium text-gray-600 mb-2">Condition</div>
            <code className="block p-3 bg-white border rounded-md text-xs font-mono text-gray-800 leading-relaxed shadow-sm">
              {ruleCondition}
            </code>
          </div>
          
          <div>
            <div className="text-xs font-medium text-gray-600 mb-2">Target</div>
            <code className="inline-block px-3 py-1.5 bg-white border rounded-md text-xs font-mono text-gray-800 shadow-sm">
              {targetElement}
            </code>
          </div>
        </div>
      </div>
      
      {/* Actions Section */}
      <div className="space-y-4 mb-auto">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</div>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" style={{ backgroundColor: '#F73029' }}></div>
            <div className="text-sm leading-relaxed text-gray-700">
              {action}
            </div>
          </div>
          
          {additionalRule && (
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-red-300 mt-2 flex-shrink-0" style={{ backgroundColor: 'rgba(247, 48, 41, 0.6)' }}></div>
              <div className="text-sm leading-relaxed text-gray-700">
                {additionalRule}
              </div>
            </div>
          )}
          
          {additionalAction && (
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-red-300 mt-2 flex-shrink-0" style={{ backgroundColor: 'rgba(247, 48, 41, 0.6)' }}></div>
              <div className="text-sm leading-relaxed text-gray-700">
                {additionalAction}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Result Section - Sticks to Bottom */}
      <div className="mt-auto pt-6 border-t space-y-2" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>
        <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#F73029' }}>Result</div>
        <div className="text-sm leading-relaxed text-gray-800 font-medium bg-red-50 p-3 rounded-lg" style={{ backgroundColor: 'rgba(247, 48, 41, 0.05)' }}>
          {result}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export const ExamplesList: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const examples = [
    {
      title: "UTM-Based Content Replacement",
      scenario: "Google Ads visitor lands on your pricing page",
      ruleCondition: 'IF utm_source = "google" AND utm_campaign = "pricing_ads"',
      targetElement: ".main-cta-button",
      action: 'Replace text with "Get Started - 50% Off First Month!"',
      result: 'Generic "Sign Up" button becomes a compelling offer for Google Ads traffic'
    },
    {
      title: "Multi-Visit Personalization",
      scenario: "Returning visitor from LinkedIn who's visited 3+ times",
      ruleCondition: 'IF utm_source = "linkedin" AND visit_count >= 3',
      targetElement: "#hero-section",
      action: 'Replace content with "Welcome back! Ready to see TrackFlow in action?"',
      additionalRule: "Show hidden element #returning-visitor-demo (special demo booking section)",
      result: "Personalized welcome message with special demo booking for engaged LinkedIn visitors"
    },
    {
      title: "Time-Based Content Reveals",
      scenario: "Engaged visitor who's spent 2+ minutes reading your features",
      ruleCondition: "IF time_on_page >= 120",
      targetElement: ".pricing-hint",
      action: 'Show element + add CSS class "highlight-pricing"',
      result: "Pricing information appears with yellow highlight after 2 minutes of engagement"
    },
    {
      title: "Campaign-Specific Messaging",
      scenario: "Email newsletter subscriber clicks through to your homepage",
      ruleCondition: 'IF utm_medium = "email" AND utm_content = "newsletter_cta"',
      targetElement: ".main-headline",
      action: 'Replace with "Thanks for reading our newsletter! Here\'s what\'s new..."',
      additionalAction: "Hide element .generic-signup-form and show .subscriber-exclusive-content",
      result: "Personalized homepage experience that acknowledges the visitor's newsletter engagement"
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
        Real-world scenarios
      </motion.div>
      
      <motion.h2 
        className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-4"
        variants={slideUp}
      >
        Personalization rules in action
      </motion.h2>
      
      <motion.p 
        className="text-sm mb-8 md:mb-12 text-gray-600 max-w-4xl"
        variants={slideUp}
      >
        Each of these examples demonstrates how TrackFlow's rule engine can transform static content 
        into dynamic, personalized experiences based on visitor behavior and context.
      </motion.p>
      
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 border-t -mx-4 md:-mx-8" 
        style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
        variants={staggerContainer}
      >
        {examples.map((example, index) => (
          <ExampleCard 
            key={index} 
            title={example.title}
            scenario={example.scenario}
            ruleCondition={example.ruleCondition}
            targetElement={example.targetElement}
            action={example.action}
            result={example.result}
            additionalRule={example.additionalRule}
            additionalAction={example.additionalAction}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}; 