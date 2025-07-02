import React, { useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { staggerContainer, staggerItem, buttonHover } from '@/lib/animations';
import { Calendar, Clock, Users, TrendingUp, MousePointer, Eye, Zap, Target, Search, Award, Mail, Shield, Building, RotateCcw, Info, CheckCircle, ArrowRight, Star, Lock, Globe, CreditCard, Code } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Reuse the same TextTransition component
const TextTransition: React.FC<{ 
  children: React.ReactNode; 
  isActive: boolean; 
  className?: string;
}> = ({ children, isActive, className = "" }) => (
  <motion.div
    className={className}
    animate={{
      opacity: isActive ? 1 : 0,
      filter: isActive ? "blur(0px)" : "blur(4px)",
    }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export const DemoInteractiveSimple = forwardRef<{ triggerRandomScenario: () => void }>((_, ref) => {
  const [activeScenario, setActiveScenario] = useState('default');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDemoLifted, setIsDemoLifted] = useState(false);

  // Expanded scenarios object with 4 different examples
  const scenarios = {
    'default': {
      title: 'Default View',
      description: 'Generic website before personalization',
      icon: <Target className="w-4 h-4" />,
      source: 'direct',
      campaign: 'none',
      icp: 'Generic',
      analytics: {
        visitCount: 1,
        timeOnPage: 0,
        previousSessions: 0
      },
      content: {
        headline: 'Automate Your Workflows with FlowSync',
        subheadline: 'The intelligent workflow automation platform that helps teams collaborate more efficiently and get more done.',
        ctaPrimary: 'Get Started Free',
        ctaSecondary: 'Learn More',
        badge: 'Default View',
        valueProps: [
          'Streamline your business processes',
          'Improve team productivity',
          'Scale your operations efficiently'
        ]
      }
    },
    'g2': {
      title: 'G2 Review',
      description: 'Clicked from "Best Workflow Tools 2024" review',
      icon: <Award className="w-4 h-4" />,
      source: 'g2',
      campaign: 'enterprise-comparison',
      icp: 'Enterprise',
      analytics: {
        visitCount: 3,
        timeOnPage: 145,
        previousSessions: 2
      },
      content: {
        headline: 'Enterprise-Grade Workflow Intelligence',
        subheadline: 'Trusted by Fortune 500 companies to orchestrate complex business processes at scale.',
        ctaPrimary: 'Schedule Enterprise Demo',
        ctaSecondary: 'Download ROI Calculator',
        badge: 'Enterprise Evaluation',
        valueProps: [
          'SOC 2 Type II certified security',
          '99.9% uptime SLA guarantee',
          'Dedicated success manager included'
        ]
      }
    },
    'startup': {
      title: 'Startup Visitor',
      description: 'Visitor from YC Demo Day',
      icon: <TrendingUp className="w-4 h-4" />,
      source: 'ycombinator',
      campaign: 'demo-day-2024',
      icp: 'Startup',
      analytics: {
        visitCount: 1,
        timeOnPage: 30,
        previousSessions: 0
      },
      content: {
        headline: 'Scale Your Startup with Smart Automation',
        subheadline: 'Built for fast-growing teams. Get up and running in minutes with our no-code workflow builder.',
        ctaPrimary: 'Start Free Trial',
        ctaSecondary: 'View Pricing',
        badge: 'Startup Special',
        valueProps: [
          'Free for up to 5 team members',
          'Unlimited workflows',
          'Priority support'
        ]
      }
    },
    'developer': {
      title: 'Developer Focus',
      description: 'Visitor from GitHub',
      icon: <Code className="w-4 h-4" />,
      source: 'github',
      campaign: 'api-launch',
      icp: 'Developer',
      analytics: {
        visitCount: 2,
        timeOnPage: 180,
        previousSessions: 1
      },
      content: {
        headline: 'Powerful API-First Workflow Engine',
        subheadline: 'Built by developers, for developers. Full access to our REST API and webhooks.',
        ctaPrimary: 'View API Docs',
        ctaSecondary: 'Join Discord',
        badge: 'Developer Edition',
        valueProps: [
          'GraphQL API access',
          'Custom webhook support',
          'SDK libraries for all major languages'
        ]
      }
    }
  };

  const triggerRandomScenario = () => {
    const scenarioKeys = Object.keys(scenarios).filter(key => key !== 'default' && key !== activeScenario);
    const randomKey = scenarioKeys[Math.floor(Math.random() * scenarioKeys.length)];
    
    setIsTransitioning(true);
    setIsDemoLifted(true);
    
    setTimeout(() => {
      setActiveScenario(randomKey);
    }, 200);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  // Expose the triggerRandomScenario function through the ref
  React.useImperativeHandle(ref, () => ({
    triggerRandomScenario
  }));

  const handleScenarioChange = (scenarioKey: string) => {
    if (scenarioKey === activeScenario) return;
    
    setIsTransitioning(true);
    setIsDemoLifted(true);
    
    setTimeout(() => {
      setActiveScenario(scenarioKey);
    }, 200);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const handleReset = () => {
    setIsDemoLifted(false);
    setActiveScenario('default');
    setIsTransitioning(false);
  };

  const currentScenario = scenarios[activeScenario];

  return (
    <motion.div 
      className="w-[135%] -ml-[17.5%] mx-auto"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Demo Interface */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-b from-[#F7F9FF] to-white/80 rounded-none max-w-[95%] mx-auto backdrop-blur-sm"
        variants={staggerItem}
        animate={{
          y: isDemoLifted ? -20 : 0,
          scale: isDemoLifted ? 1.02 : 1,
          rotateX: isDemoLifted ? 1 : 0,
          borderRadius: isDemoLifted ? '0.5rem' : '0rem',
        }}
        transition={{ 
          duration: 0.4, 
          ease: [0.22, 1, 0.36, 1],
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
          boxShadow: isDemoLifted 
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 15px 25px -8px rgba(54, 76, 213, 0.1), 0 0 0 1px rgba(54, 76, 213, 0.05)' 
            : 'none',
          background: 'linear-gradient(180deg, #F7F9FF 0%, rgba(247, 249, 255, 0.8) 100%)'
        }}
      >
        {/* Analytics Bar */}
        <div className="bg-gray-50 px-8 py-4 border-b flex flex-wrap items-center justify-between gap-4" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-500" />
              <span className="text-xs text-gray-600">Visit:</span>
              <Badge variant="secondary" className="text-xs">{currentScenario.analytics.visitCount}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-xs text-gray-600">Time:</span>
              <span className="text-xs text-gray-600">{currentScenario.analytics.timeOnPage}s</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600">Source:</span>
              <Badge variant="outline" className="text-xs">{currentScenario.source}</Badge>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-600">Status:</span>
            {isTransitioning ? (
              <Badge className="text-xs animate-pulse" style={{ backgroundColor: '#F73029' }}>
                Personalizing...
              </Badge>
            ) : (
              <Badge className="text-xs text-white" style={{ backgroundColor: '#F73029' }}>
                {currentScenario.content.badge}
              </Badge>
            )}
            <motion.button
              onClick={handleReset}
              className="ml-2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Reset to default scenario"
            >
              <RotateCcw className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Browser Header */}
        <div className="bg-gray-50 px-6 py-3 border-b" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 bg-gray-200 rounded px-3 py-1 text-xs text-gray-600">
              {activeScenario === 'default' 
                ? 'flowsync.com' 
                : `flowsync.com?utm_source=${currentScenario.source}&utm_campaign=${currentScenario.campaign}`
              }
            </div>
          </div>
        </div>

        {/* Website Content */}
        <div className="bg-gradient-to-b from-[#F7F9FF] to-white px-12 pt-4">
          <div className="max-w-6xl mx-auto text-center space-y-2">
            {/* Navbar */}
            <div className="flex items-center justify-between mb-16 bg-white/50 backdrop-blur-sm px-6 py-4 rounded-lg">
              <div className="text-xl font-semibold text-[#364cd5]">FlowSync</div>
              <div className="flex items-center gap-8">
                <span className="text-gray-600 hover:text-gray-900 cursor-pointer">Product</span>
                <span className="text-gray-600 hover:text-gray-900 cursor-pointer">Solutions</span>
                <span className="text-gray-600 hover:text-gray-900 cursor-pointer">Pricing</span>
                <span className="text-gray-600 hover:text-gray-900 cursor-pointer">Resources</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-600 hover:text-gray-900 cursor-pointer">Sign in</span>
                <Button variant="outline" className="rounded-none border-[#364cd5] text-[#364cd5] hover:bg-[#364cd5] hover:text-white transition-colors">
                  Get Started
                </Button>
              </div>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#364cd5]/10">
                <Zap className="w-10 h-10 text-[#364cd5]" />
              </div>
            </div>

            {/* Headline */}
            <div className="relative h-16 flex items-center justify-center">
              {Object.entries(scenarios).map(([key, scenario]) => (
                <TextTransition
                  key={`headline-${key}`}
                  isActive={activeScenario === key && !isTransitioning}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight tracking-tight">
                    {scenario.content.headline}
                  </h1>
                </TextTransition>
              ))}
            </div>

            {/* Subheadline */}
            <div className="relative h-10 flex items-center justify-center -mt-4">
              {Object.entries(scenarios).map(([key, scenario]) => (
                <TextTransition
                  key={`subheadline-${key}`}
                  isActive={activeScenario === key && !isTransitioning}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <p className="text-base text-gray-500 max-w-2xl leading-relaxed">
                    {scenario.content.subheadline}
                  </p>
                </TextTransition>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center pt-8 pb-24">
              <div className="relative">
                {Object.entries(scenarios).map(([key, scenario]) => (
                  <TextTransition
                    key={`cta-primary-${key}`}
                    isActive={activeScenario === key && !isTransitioning}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Button 
                      className="text-white font-medium px-8 py-4 rounded-md text-lg shadow-md whitespace-nowrap" 
                      style={{ backgroundColor: '#364cd5' }}
                      onClick={() => handleScenarioChange('g2')}
                    >
                      {scenario.content.ctaPrimary}
                    </Button>
                  </TextTransition>
                ))}
                {/* Placeholder for sizing */}
                <Button 
                  className="opacity-0 font-medium px-8 py-4 rounded-md text-lg"
                  style={{ backgroundColor: '#364cd5' }}
                >
                  Schedule Enterprise Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}); 