import React, { useState, useEffect, forwardRef } from 'react';
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

// Enhanced TextTransition component with smoother animations
const TextTransition: React.FC<{ 
  children: React.ReactNode; 
  isActive: boolean; 
  className?: string;
}> = ({ children, isActive, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 10 }}
    animate={{
      opacity: isActive ? 1 : 0,
      y: isActive ? 0 : 10,
      filter: isActive ? "blur(0px)" : "blur(4px)",
    }}
    transition={{ 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1],
      opacity: { duration: 0.4 },
      filter: { duration: 0.3 }
    }}
  >
    {children}
  </motion.div>
);

export const DemoInteractiveSimple = forwardRef<{ triggerRandomScenario: () => void }>((_, ref) => {
  const [activeScenario, setActiveScenario] = useState('default');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDemoLifted, setIsDemoLifted] = useState(false);
  const [hasInitialAnimationCompleted, setHasInitialAnimationCompleted] = useState(false);

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

  // Unified animation timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDemoLifted(true);
      setHasInitialAnimationCompleted(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const triggerRandomScenario = () => {
    const scenarioKeys = Object.keys(scenarios).filter(key => key !== 'default' && key !== activeScenario);
    const randomKey = scenarioKeys[Math.floor(Math.random() * scenarioKeys.length)];
    
    setIsTransitioning(true);
    // Only set lifted state if initial animation hasn't completed yet
    if (!hasInitialAnimationCompleted) {
      setIsDemoLifted(true);
    }
    
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
    // Only set lifted state if initial animation hasn't completed yet
    if (!hasInitialAnimationCompleted) {
      setIsDemoLifted(true);
    }
    
    setTimeout(() => {
      setActiveScenario(scenarioKey);
    }, 200);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const handleReset = () => {
    // Keep the demo lifted if initial animation has completed
    if (hasInitialAnimationCompleted) {
      setActiveScenario('default');
      setIsTransitioning(false);
    } else {
      setIsDemoLifted(false);
      setActiveScenario('default');
      setIsTransitioning(false);
    }
  };

  const currentScenario = scenarios[activeScenario];

  return (
    <motion.div 
      className="w-full sm:w-[110%] md:w-[120%] sm:-ml-[5%] md:-ml-[10%] mx-auto overflow-visible"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {/* Demo Interface */}
      <motion.div 
        className="relative overflow-visible w-full sm:max-w-[95%] mx-auto"
        initial={{
          y: 0,
          scale: 1,
          rotateX: 0,
        }}
        animate={{
          y: isDemoLifted ? -20 : 0,
          scale: isDemoLifted ? 1.02 : 1,
          rotateX: isDemoLifted ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 20,
          mass: 1,
          restDelta: 0.001,
          restSpeed: 0.001
        }}
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
          boxShadow: isDemoLifted 
            ? '0 30px 60px -15px rgba(0, 0, 0, 0.15), 0 15px 25px -8px rgba(54, 76, 213, 0.15), 0 0 0 1px rgba(54, 76, 213, 0.05), 0 0 50px rgba(54, 76, 213, 0.05)' 
            : '0 0px 0px 0px rgba(0, 0, 0, 0), 0 0px 0px 0px rgba(54, 76, 213, 0), 0 0 0 0px rgba(54, 76, 213, 0)',
          transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div 
          className="relative overflow-hidden bg-gradient-to-b from-white to-white/80 backdrop-blur-sm"
          style={{
            borderRadius: isDemoLifted ? '0.5rem' : '0rem',
            transition: 'border-radius 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
            background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.8) 100%)'
          }}
        >
        {/* Analytics Bar */}
        <div 
          className="bg-white px-3 sm:px-4 md:px-8 py-3 sm:py-4 border-b flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4" 
          style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
        >
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
            <div className="flex items-center gap-1 sm:gap-2">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
              <span className="text-[10px] sm:text-xs text-gray-600">Visit:</span>
              <Badge variant="secondary" className="text-[10px] sm:text-xs h-5">{currentScenario.analytics.visitCount}</Badge>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
              <span className="text-[10px] sm:text-xs text-gray-600">Time:</span>
              <span className="text-[10px] sm:text-xs text-gray-600">{currentScenario.analytics.timeOnPage}s</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-[10px] sm:text-xs text-gray-600">Source:</span>
              <Badge variant="outline" className="text-[10px] sm:text-xs h-5">{currentScenario.source}</Badge>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs text-gray-600">Status:</span>
              {isTransitioning ? (
                <Badge className="text-[10px] sm:text-xs animate-pulse h-5" style={{ backgroundColor: '#F73029' }}>
                  Personalizing...
                </Badge>
              ) : (
                <Badge className="text-[10px] sm:text-xs text-white h-5" style={{ backgroundColor: '#F73029' }}>
                  {currentScenario.content.badge}
                </Badge>
              )}
            </div>
            <motion.button
              onClick={handleReset}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Reset to default scenario"
            >
              <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.button>
          </div>
        </div>

        {/* Browser Header */}
        <div 
          className="bg-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 border-b" 
          style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 bg-gray-100 rounded px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-gray-600 overflow-hidden">
              <span className="truncate block">
                {activeScenario === 'default' 
                  ? 'flowsync.com' 
                  : `flowsync.com?utm_source=${currentScenario.source}&utm_campaign=${currentScenario.campaign}`
                }
              </span>
            </div>
          </div>
        </div>

        {/* Website Content */}
        <div 
          className="bg-gradient-to-b from-[#F7F9FF] to-white px-3 sm:px-6 md:px-12 pt-2 sm:pt-4"
        >
          <div className="max-w-6xl mx-auto text-center space-y-2">
            {/* Navbar */}
            <div className="flex items-center justify-between mb-6 sm:mb-10 md:mb-16 bg-white/50 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-lg">
              <div className="text-sm sm:text-lg md:text-xl font-semibold text-[#364cd5]">FlowSync</div>
              <div className="hidden md:flex items-center gap-4 lg:gap-8">
                <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Product</span>
                <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Solutions</span>
                <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Pricing</span>
                <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Resources</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <span className="hidden sm:inline text-xs sm:text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Sign in</span>
                <Button variant="outline" className="text-xs sm:text-sm px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-none border-[#364cd5] text-[#364cd5] hover:bg-[#364cd5] hover:text-white transition-colors">
                  Get Started
                </Button>
              </div>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#364cd5]/10">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#364cd5]" />
              </div>
            </div>

            {/* Headline */}
            <div className="relative min-h-[50px] sm:min-h-[70px] md:h-16 flex items-center justify-center px-3">
              {Object.entries(scenarios).map(([key, scenario]) => (
                <TextTransition
                  key={`headline-${key}`}
                  isActive={activeScenario === key && !isTransitioning}
                  className="absolute inset-0 flex items-center justify-center px-3"
                >
                  <h1 className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-900 leading-tight tracking-tight">
                    {scenario.content.headline}
                  </h1>
                </TextTransition>
              ))}
            </div>

            {/* Subheadline */}
            <div className="relative min-h-[40px] sm:min-h-[50px] md:h-10 flex items-center justify-center -mt-1 sm:-mt-2 md:-mt-4 px-3">
              {Object.entries(scenarios).map(([key, scenario]) => (
                <TextTransition
                  key={`subheadline-${key}`}
                  isActive={activeScenario === key && !isTransitioning}
                  className="absolute inset-0 flex items-center justify-center px-3"
                >
                  <p className="text-[11px] leading-snug sm:text-xs md:text-base text-gray-500 max-w-2xl">
                    {scenario.content.subheadline}
                  </p>
                </TextTransition>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-16 md:pb-24">
              <div className="relative w-full sm:w-auto px-4 sm:px-0">
                {Object.entries(scenarios).map(([key, scenario]) => (
                  <TextTransition
                    key={`cta-primary-${key}`}
                    isActive={activeScenario === key && !isTransitioning}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Button 
                      className="text-white font-medium px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-md text-sm sm:text-base md:text-lg shadow-md whitespace-nowrap w-full sm:w-auto" 
                      style={{ backgroundColor: '#364cd5' }}
                      onClick={() => handleScenarioChange('g2')}
                    >
                      {scenario.content.ctaPrimary}
                    </Button>
                  </TextTransition>
                ))}
                {/* Placeholder for sizing */}
                <Button 
                  className="opacity-0 font-medium px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-md text-sm sm:text-base md:text-lg w-full sm:w-auto"
                  style={{ backgroundColor: '#364cd5' }}
                >
                  Schedule Enterprise Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </motion.div>
    </motion.div>
  );
}); 