import React, { useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { slideUp, fadeIn, staggerContainer, staggerItem, buttonHover } from '@/lib/animations';
import { Calendar, Clock, Users, TrendingUp, MousePointer, Eye, Zap, Target, Search, Award, Mail, Shield, Building, RotateCcw, Info, CheckCircle, ArrowRight, Star, Lock, Globe, CreditCard } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ScenarioCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  scenario: any;
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({ title, description, icon, isActive, onClick, scenario }) => (
  <motion.div 
    className={`border-r border-b p-6 flex flex-col justify-between min-h-[140px] relative transition-colors group ${
      isActive ? 'bg-red-50' : 'hover:bg-gray-50'
    } last:border-r-0 lg:nth-child-4n:border-r-0`}
    style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
    variants={staggerItem}
    whileTap={{ scale: 0.98 }}
  >
    {/* Info Icon */}
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="absolute top-3 right-3 p-2 transition-all opacity-0 group-hover:opacity-100 z-10"
          onClick={(e) => e.stopPropagation()}
          title="View configuration details"
        >
          <Info className="w-4 h-4 text-gray-500 hover:text-red-600 transition-colors" />
        </button>
      </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto border" style={{ backgroundColor: '#FFFAF3', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
         <DialogHeader className="border-b pb-6" style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}>
           <div className="flex items-center gap-4">
             <div className="w-14 h-14 rounded-full flex items-center justify-center bg-red-500 text-white">
               {scenario.icon}
             </div>
             <div>
               <DialogTitle className="text-2xl font-semibold text-gray-900">
                 {title} Configuration
               </DialogTitle>
               <p className="text-sm text-gray-600 mt-1 font-medium">Personalization rules and content transformations</p>
             </div>
           </div>
         </DialogHeader>
         
         <div>
           {/* Content Rules */}
           <div className="border-l border-r border-t px-6 pt-6 pb-6" style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}>
             <div className="flex items-center gap-3 mb-6">
               <div className="w-8 h-8 flex items-center justify-center" style={{ color: '#F73029' }}>
                 <Target className="w-5 h-5" />
               </div>
               <h4 className="text-xl font-semibold text-gray-900">Content Rules</h4>
             </div>
             
             <div className="flex items-center gap-3 mb-4">
               <div className="w-2 h-2 rounded-full bg-gray-400"></div>
               <span className="text-sm font-semibold text-gray-700">UTM Source Detection</span>
             </div>
             <code className="block p-4 border text-sm font-mono text-gray-900 leading-relaxed mb-6" style={{ backgroundColor: '#FFFAF3', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
               IF utm_source = &quot;{scenario.source}&quot;
             </code>
             
             <div className="grid md:grid-cols-2 gap-6">
               <div>
                 <div className="flex items-center gap-3 mb-4">
                   <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                   <span className="text-sm font-semibold text-gray-700">Campaign Context</span>
                 </div>
                 <code className="block p-4 border text-sm font-mono text-gray-900 leading-relaxed" style={{ backgroundColor: '#FFFAF3', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
                   utm_campaign = &quot;{scenario.campaign}&quot;
                 </code>
               </div>
               <div>
                 <div className="flex items-center gap-3 mb-4">
                   <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                   <span className="text-sm font-semibold text-gray-700">Target Audience</span>
                 </div>
                 <code className="block p-4 border text-sm font-mono text-gray-900 leading-relaxed" style={{ backgroundColor: '#FFFAF3', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
                   ICP = &quot;{scenario.icp}&quot;
                 </code>
               </div>
             </div>
           </div>

           {/* Content Replacement */}
           <div className={`px-6 pt-6 pb-6 ${(title === 'G2 Review' || title === 'Email Newsletter') ? 'border-l border-r border-t' : 'border'}`} style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}>
             <div className="flex items-center gap-3 mb-6">
               <div className="w-8 h-8 flex items-center justify-center" style={{ color: '#F73029' }}>
                 <ArrowRight className="w-5 h-5" />
               </div>
               <h4 className="text-xl font-semibold text-gray-900">Content Replacement</h4>
             </div>
             
             <div className="flex items-center gap-3 mb-4">
               <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F73029' }}></div>
               <span className="text-sm font-semibold text-gray-700">Main Headline Replacement</span>
             </div>
             <div className="space-y-3 mb-6">
               <div className="p-4 border rounded-lg" style={{ borderColor: 'rgba(0, 0, 0, 0.1)', backgroundColor: 'rgba(0, 0, 0, 0.02)' }}>
                 <div className="flex items-center gap-2 mb-3">
                   <div className="w-5 h-5 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center">
                     <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                   </div>
                   <div className="text-xs font-semibold tracking-wide text-gray-500">BEFORE</div>
                 </div>
                 <div className="text-sm text-gray-700 font-medium pl-7">&quot;Automate Your Workflows with FlowSync&quot;</div>
               </div>
               <div className="p-4 border rounded-lg" style={{ borderColor: 'rgba(0, 0, 0, 0.1)', backgroundColor: 'rgba(0, 0, 0, 0.02)' }}>
                 <div className="flex items-center gap-2 mb-3">
                   <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center" style={{ borderColor: '#F73029', backgroundColor: '#F73029' }}>
                     <div className="w-2 h-2 rounded-full bg-white"></div>
                   </div>
                   <div className="text-xs font-semibold tracking-wide" style={{ color: '#F73029' }}>AFTER</div>
                 </div>
                 <div className="text-sm text-gray-900 font-medium pl-7">&quot;{scenario.content.headline}&quot;</div>
               </div>
             </div>
             
             <div className="grid md:grid-cols-2 gap-6">
               <div>
                 <div className="flex items-center gap-3 mb-4">
                   <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                   <span className="text-sm font-semibold text-gray-700">Subheadline</span>
                 </div>
                 <div className="text-sm text-gray-900 p-4 border font-medium" style={{ backgroundColor: '#FFFAF3', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
                   <span className="text-gray-600 font-semibold">New:</span> &quot;{scenario.content.subheadline}&quot;
                 </div>
               </div>
               <div>
                 <div className="flex items-center gap-3 mb-4">
                   <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                   <span className="text-sm font-semibold text-gray-700">Primary CTA</span>
                 </div>
                 <div className="text-sm text-gray-900 p-4 border font-medium" style={{ backgroundColor: '#FFFAF3', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
                   <span className="text-gray-600 font-semibold">New:</span> &quot;{scenario.content.ctaPrimary}&quot;
                 </div>
               </div>
             </div>
           </div>

           {/* Per Visit Personalization */}
           {(title === 'G2 Review' || title === 'Email Newsletter') && (
             <div className="border px-6 pt-6 pb-6" style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}>
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-8 h-8 flex items-center justify-center text-gray-600">
                   <Eye className="w-5 h-5" />
                 </div>
                 <h4 className="text-xl font-semibold text-gray-900">Per Visit Personalization</h4>
               </div>
               
               {title === 'G2 Review' && (
                 <>
                   <div className="flex items-center gap-3 mb-4">
                     <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                     <span className="text-sm font-semibold text-gray-700">Enterprise Trust Section</span>
                   </div>
                   <code className="block p-4 border text-sm font-mono text-gray-900 leading-relaxed mb-2" style={{ backgroundColor: '#FFFAF3', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
                     IF utm_source = &quot;g2&quot; AND visit_count &gt;= 2
                   </code>
                   <div className="text-sm text-gray-700 p-3 border" style={{ borderColor: 'rgba(0, 0, 0, 0.1)', backgroundColor: '#FFFAF3' }}>
                     <span className="font-semibold">Action:</span> Show element <code className="px-2 py-1 text-xs font-mono ml-1" style={{ backgroundColor: '#F73029', color: 'white' }}>#enterprise-trust-section</code>
                   </div>
                 </>
               )}
               {title === 'Email Newsletter' && (
                 <>
                   <div className="flex items-center gap-3 mb-4">
                     <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                     <span className="text-sm font-semibold text-gray-700">Subscriber Pricing Section</span>
                   </div>
                   <code className="block p-4 border text-sm font-mono text-gray-900 leading-relaxed mb-2" style={{ backgroundColor: '#FFFAF3', borderColor: 'rgba(0, 0, 0, 0.1)' }}>
                     IF utm_source = &quot;email&quot; AND visit_count &gt;= 3
                   </code>
                   <div className="text-sm text-gray-700 p-3 border" style={{ borderColor: 'rgba(0, 0, 0, 0.1)', backgroundColor: '#FFFAF3' }}>
                     <span className="font-semibold">Action:</span> Show element <code className="px-2 py-1 text-xs font-mono ml-1" style={{ backgroundColor: '#F73029', color: 'white' }}>#subscriber-pricing</code>
                   </div>
                 </>
                                )}
             </div>
           )}
         </div>
       </DialogContent>
    </Dialog>

    {/* Card Content - Clickable */}
    <div className="flex flex-col h-full cursor-pointer" onClick={onClick}>
      <motion.div 
        className="flex justify-start mb-4"
        variants={fadeIn}
      >
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          isActive ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600'
        }`}>
          {icon}
        </div>
      </motion.div>
      <div className="flex-1">
        <motion.h3 
          className="text-sm font-medium text-gray-800 mb-2"
          variants={slideUp}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-xs text-gray-600"
          variants={slideUp}
        >
          {description}
        </motion.p>
      </div>
      
      {/* Try Now Lozenge */}
      <motion.div 
        className="flex justify-start mt-6"
        variants={fadeIn}
      >
        <div 
          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
            isActive 
              ? 'bg-red-500 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          {isActive ? 'Active' : 'Try Now'}
        </div>
      </motion.div>
    </div>
  </motion.div>
);

// Text transition component to handle blur effects
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

// Component to show personalization indicators
const PersonalizedIndicator: React.FC<{ show: boolean; className?: string }> = ({ show, className = "" }) => {
  if (!show) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 border border-red-200 ${className}`}
      style={{ gap: '10px' }}
    >
      <Zap className="w-3 h-3 flex-shrink-0" style={{ display: 'inline' }} />
      <span style={{ display: 'inline', lineHeight: '1' }}>Personalized</span>
    </motion.div>
  );
};

export const DemoInteractive: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  
  const [activeScenario, setActiveScenario] = useState('default');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDemoLifted, setIsDemoLifted] = useState(false);
  const [showChanges, setShowChanges] = useState(false);

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
        ],
        features: [
          {
            icon: <Target className="w-5 h-5" />,
            title: 'Workflow Automation',
            description: 'Create powerful automated workflows that save time and reduce errors'
          },
          {
            icon: <Users className="w-5 h-5" />,
            title: 'Team Collaboration',
            description: 'Keep your team aligned with shared workflows and real-time updates'
          },
          {
            icon: <TrendingUp className="w-5 h-5" />,
            title: 'Analytics & Insights',
            description: 'Track performance and optimize your processes with detailed analytics'
          }
        ],
        testimonial: {
          quote: "FlowSync has transformed how we work. Our team is more productive and our processes are more reliable.",
          author: "Sarah Johnson",
          title: "Operations Manager"
        }
      }
    },
    'google-search': {
      title: 'Google Search',
      description: 'Searched "workflow automation for small business"',
      icon: <Search className="w-4 h-4" />,
      source: 'google',
      campaign: 'small-business-productivity',
      icp: 'Small Business',
      analytics: {
        visitCount: 1,
        timeOnPage: 35,
        previousSessions: 0
      },
      content: {
        headline: 'Stop Drowning in Tasks. Start Flowing.',
        subheadline: 'FlowSync helps small businesses automate workflows and reclaim 15+ hours per week.',
        ctaPrimary: 'Start Free 14-Day Trial',
        ctaSecondary: 'Watch 2-Min Demo',
        badge: 'Small Business Special',
        valueProps: [
          'Save 15+ hours per week on repetitive tasks',
          'Easy setup in under 10 minutes',
          'No technical expertise required'
        ],
        features: [
          {
            icon: <Target className="w-5 h-5" />,
            title: 'Simple Automation',
            description: 'Drag-and-drop workflow builder designed for busy entrepreneurs'
          },
          {
            icon: <Clock className="w-5 h-5" />,
            title: 'Time Tracking',
            description: 'See exactly how much time you save with automated processes'
          },
          {
            icon: <Zap className="w-5 h-5" />,
            title: 'Quick Wins',
            description: 'Pre-built templates for common small business workflows'
          }
        ],
        testimonial: {
          quote: "FlowSync gave me my weekends back. I'm processing 3x more orders with half the manual work.",
          author: "Maria Rodriguez",
          title: "Owner, Local Boutique"
        }
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
        ],
        features: [
          {
            icon: <Shield className="w-5 h-5" />,
            title: 'Enterprise Security',
            description: 'Advanced compliance, SSO, and audit trails for regulated industries'
          },
          {
            icon: <Building className="w-5 h-5" />,
            title: 'Scalable Architecture',
            description: 'Handle millions of workflows across global teams and departments'
          },
          {
            icon: <TrendingUp className="w-5 h-5" />,
            title: 'Advanced Analytics',
            description: 'Real-time insights and custom reporting for executive dashboards'
          }
        ],
        testimonial: {
          quote: "FlowSync scaled with us from 100 to 10,000 employees. The ROI was evident within the first quarter.",
          author: "David Chen",
          title: "CTO, TechCorp Global"
        }
      }
    },
    'linkedin': {
      title: 'LinkedIn',
      description: 'Clicked "Optimize consulting firm operations" post',
      icon: <Users className="w-4 h-4" />,
      source: 'linkedin',
      campaign: 'professional-services',
      icp: 'Professional Services',
      analytics: {
        visitCount: 2,
        timeOnPage: 85,
        previousSessions: 1
      },
      content: {
        headline: 'Elevate Client Delivery Excellence',
        subheadline: 'Professional services firms use FlowSync to standardize processes and deliver consistent, high-quality client outcomes.',
        ctaPrimary: 'Book Strategy Session',
        ctaSecondary: 'View Case Studies',
        badge: 'Professional Services',
        valueProps: [
          'Standardize delivery across all client projects',
          'Improve project margins by 25%+',
          'Client-branded workflows and reports'
        ],
        features: [
          {
            icon: <Target className="w-5 h-5" />,
            title: 'Client Workflows',
            description: 'Branded process templates that impress clients and ensure consistency'
          },
          {
            icon: <TrendingUp className="w-5 h-5" />,
            title: 'Profitability Tracking',
            description: 'Monitor project margins and resource allocation in real-time'
          },
          {
            icon: <Users className="w-5 h-5" />,
            title: 'Team Collaboration',
            description: 'Seamless handoffs between consultants, analysts, and project managers'
          }
        ],
        testimonial: {
          quote: "Our client satisfaction scores increased 40% after implementing FlowSync. Deliverables are now consistent and on-time.",
          author: "Jennifer Walsh",
          title: "Partner, Strategic Consulting Group"
        }
      }
    },
    'email': {
      title: 'Email Newsletter',
      description: 'Clicked "Unlock your FlowSync potential" email',
      icon: <Mail className="w-4 h-4" />,
      source: 'email',
      campaign: 'subscriber-upgrade',
      icp: 'Existing Customer',
      analytics: {
        visitCount: 5,
        timeOnPage: 95,
        previousSessions: 4
      },
      content: {
        headline: 'Unlock Your FlowSync Potential',
        subheadline: 'Discover advanced features and integrations that transform your workflow automation from good to extraordinary.',
        ctaPrimary: 'Upgrade to Pro',
        ctaSecondary: 'Explore New Features',
        badge: 'Valued Subscriber',
        valueProps: [
          'Advanced integrations with 500+ apps',
          'AI-powered workflow optimization',
          'Priority support and training'
        ],
        features: [
          {
            icon: <Zap className="w-5 h-5" />,
            title: 'AI Optimization',
            description: 'Machine learning suggests workflow improvements and bottleneck solutions'
          },
          {
            icon: <Target className="w-5 h-5" />,
            title: 'Advanced Integrations',
            description: 'Connect with Salesforce, HubSpot, and hundreds of enterprise tools'
          },
          {
            icon: <Shield className="w-5 h-5" />,
            title: 'Premium Support',
            description: 'Dedicated success manager and priority technical support'
          }
        ],
        testimonial: {
          quote: "The Pro features transformed our workflows from automated to intelligent. We're saving 40% more time than before.",
          author: "Alex Thompson",
          title: "Operations Director, GrowthCorp"
        }
      }
    }
  };

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
      className="max-w-[72rem] mx-auto px-4 md:px-8 py-12 md:py-16 border-t border-l border-r" 
      style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
      ref={ref}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Section Header */}
      <motion.div 
        className="text-sm font-medium mb-6 text-gray-600"
        variants={slideUp}
      >
        Interactive Demo
      </motion.div>
      <motion.h2 
        className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-4"
        variants={slideUp}
      >
        See personalization in action
      </motion.h2>
      <motion.p 
        className="text-sm mb-8 md:mb-12 text-gray-600 max-w-4xl"
        variants={slideUp}
      >
        The demo below shows a generic SaaS website. Select a visitor scenario to see how TrackFlow automatically personalizes content based on visitor source, industry, and engagement patterns.
        <span className="block mt-2 text-xs text-gray-500">
          💡 Tip: Click the <Eye className="w-3 h-3 inline mx-1" /> icon in the demo to highlight personalized content
        </span>
      </motion.p>

      {/* Scenario Selector Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t mb-16 -mx-4 md:-mx-8" 
        style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
        variants={staggerContainer}
      >
        {Object.entries(scenarios)
          .filter(([key]) => key !== 'default')
          .map(([key, scenario]) => (
            <ScenarioCard
              key={key}
              title={scenario.title}
              description={scenario.description}
              icon={scenario.icon}
              isActive={activeScenario === key}
              onClick={() => handleScenarioChange(key)}
              scenario={scenario}
            />
          ))}
      </motion.div>

      {/* Demo Interface */}
      <motion.div 
        className="border-t -mx-4 md:-mx-8 relative overflow-hidden" 
        variants={staggerItem}
        animate={{
          y: isDemoLifted ? -20 : 0,
          scale: isDemoLifted ? 1.02 : 1,
          rotateX: isDemoLifted ? 1 : 0,
        }}
        transition={{ 
          duration: 0.4, 
          ease: [0.22, 1, 0.36, 1],
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        style={{
          borderColor: 'rgba(247, 48, 41, 0.1)',
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
          boxShadow: isDemoLifted 
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 15px 25px -8px rgba(247, 48, 41, 0.1), 0 0 0 1px rgba(247, 48, 41, 0.05)' 
            : 'none',
          borderRadius: isDemoLifted ? '12px' : '0px',
        }}
      >
        {/* Subtle glow effect when lifted */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: isDemoLifted ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
          style={{
            background: 'radial-gradient(circle at center, rgba(247, 48, 41, 0.03) 0%, transparent 70%)',
            borderRadius: '12px',
          }}
        />

        {/* Analytics Bar */}
        <div className="bg-gray-50 px-6 py-4 border-b flex flex-wrap items-center justify-between gap-4" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>
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
              onClick={() => setShowChanges(!showChanges)}
              className={`ml-2 p-1 transition-colors ${showChanges ? 'text-red-600' : 'text-gray-400 hover:text-gray-600'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Show personalized content"
            >
              <Eye className="w-4 h-4" />
            </motion.button>
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
        <div className="bg-gray-50 px-4 py-3 border-b" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>
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
        <div className="bg-white relative">
          {/* Navigation */}
          <div className="border-b px-8 py-4" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <div className="flex items-center gap-8">
                <div className="font-bold text-gray-800 text-xl">FlowSync</div>
                <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
                  <span className="cursor-pointer hover:text-red-500 transition-colors">Features</span>
                  <span className="cursor-pointer hover:text-red-500 transition-colors">Pricing</span>
                  <span className="cursor-pointer hover:text-red-500 transition-colors">Solutions</span>
                  <span className="cursor-pointer hover:text-red-500 transition-colors">Resources</span>
                </nav>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 cursor-pointer hover:text-blue-600 transition-colors">Sign In</span>
                <Button 
                  className="text-white hover:opacity-90 font-medium px-6 py-2 rounded-lg text-sm" 
                  style={{ backgroundColor: '#364cd5' }}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  style={{ borderColor: 'rgba(54, 76, 213, 0.2)' }}
                >
                  <span className="sr-only">Menu</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="px-8 pt-12 pb-24 relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-4xl mx-auto space-y-6">
                {/* Headline - Fixed position with text transitions */}
                <div className="relative h-24 flex items-center justify-center">
                  {Object.entries(scenarios).map(([key, scenario]) => (
                    <TextTransition
                      key={`headline-${key}`}
                      isActive={activeScenario === key && !isTransitioning}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="relative">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                          {scenario.content.headline}
                        </h1>
                        <PersonalizedIndicator 
                          show={showChanges && activeScenario !== 'default' && activeScenario === key}
                          className="absolute -top-2 -right-16 hidden lg:block"
                        />
                      </div>
                    </TextTransition>
                  ))}
                </div>

                {/* Subheadline - Fixed position with text transitions */}
                <div className="relative h-12 flex items-center justify-center">
                  {Object.entries(scenarios).map(([key, scenario]) => (
                    <TextTransition
                      key={`subheadline-${key}`}
                      isActive={activeScenario === key && !isTransitioning}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="relative">
                        <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                          {scenario.content.subheadline}
                        </p>
                        <PersonalizedIndicator 
                          show={showChanges && activeScenario !== 'default' && activeScenario === key}
                          className="absolute -top-2 -right-16 hidden lg:block"
                        />
                      </div>
                    </TextTransition>
                  ))}
                </div>

                {/* CTAs - Fixed position */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <div className="relative">
                    {Object.entries(scenarios).map(([key, scenario]) => (
                      <TextTransition
                        key={`cta-primary-${key}`}
                        isActive={activeScenario === key && !isTransitioning}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="relative">
                          <Button 
                            className="text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg whitespace-nowrap" 
                            style={{ backgroundColor: '#364cd5' }}
                          >
                            {scenario.content.ctaPrimary}
                          </Button>
                          <PersonalizedIndicator 
                            show={showChanges && activeScenario !== 'default' && activeScenario === key}
                            className="absolute -top-2 -right-16 hidden lg:block"
                          />
                        </div>
                      </TextTransition>
                    ))}
                    {/* Placeholder for sizing */}
                    <Button 
                      className="opacity-0 font-semibold px-8 py-4 rounded-lg text-lg"
                      style={{ backgroundColor: '#364cd5' }}
                    >
                      Schedule Enterprise Demo
                    </Button>
                  </div>
                </div>

                {/* Trial Features */}
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    Free trial
                  </div>
                  <div>•</div>
                  <div>No credit card required</div>
                  <div>•</div>
                  <div>Cancel anytime</div>
                </div>
              </div>
            </div>
          </div>

          {/* Subscriber Pricing Section for Email Newsletter */}
          <motion.div
            id="subscriber-pricing"
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: activeScenario === 'email' ? 'auto' : 0,
              opacity: activeScenario === 'email' ? 1 : 0
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="px-8 py-16 border-t bg-gradient-to-br from-blue-50 to-slate-50" style={{ borderColor: 'rgba(54, 76, 213, 0.1)' }}>
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-white" />
                    </div>
                    <div className="relative">
                      <h3 className="text-2xl font-bold text-gray-900">Exclusive Subscriber Pricing</h3>
                      <PersonalizedIndicator 
                        show={showChanges}
                        className="absolute -top-2 -right-16 hidden lg:block"
                      />
                    </div>
                  </div>
                  <p className="text-gray-600 max-w-3xl mx-auto">Special pricing for our newsletter subscribers - Save up to 40% on annual plans</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Pro</h4>
                      <div className="text-3xl font-bold text-blue-600 mb-1">$49<span className="text-lg text-gray-500">/mo</span></div>
                      <div className="text-sm text-red-500 font-medium">Save 20% - Usually $59/mo</div>
                    </div>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>All basic features</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Up to 25 team members</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Advanced analytics</span>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Upgrade to Pro</Button>
                  </div>

                  <div className="bg-white p-8 rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-1">Most Popular</Badge>
                    </div>
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Business</h4>
                      <div className="text-3xl font-bold text-blue-600 mb-1">$99<span className="text-lg text-gray-500">/mo</span></div>
                      <div className="text-sm text-red-500 font-medium">Save 30% - Usually $149/mo</div>
                    </div>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>All Pro features</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Unlimited team members</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Priority support</span>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Upgrade to Business</Button>
                  </div>

                  <div className="bg-white p-8 rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h4>
                      <div className="text-3xl font-bold text-blue-600 mb-1">$199<span className="text-lg text-gray-500">/mo</span></div>
                      <div className="text-sm text-red-500 font-medium">Save 40% - Usually $299/mo</div>
                    </div>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>All Business features</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Custom integrations</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Dedicated support</span>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Contact Sales</Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* G2 Review - Enterprise Trust Section */}
          <motion.div
            id="enterprise-trust-section"
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: activeScenario === 'g2' ? 'auto' : 0,
              opacity: activeScenario === 'g2' ? 1 : 0
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="px-8 py-16 border-t bg-gradient-to-br from-gray-50 to-slate-50" style={{ borderColor: 'rgba(54, 76, 213, 0.1)' }}>
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div className="relative">
                      <h3 className="text-2xl font-bold text-gray-900">Enterprise-Grade Security & Compliance</h3>
                      <PersonalizedIndicator 
                        show={showChanges}
                        className="absolute -top-2 -right-16 hidden lg:block"
                      />
                    </div>
                  </div>
                  <p className="text-gray-600 max-w-3xl mx-auto">Trusted by Fortune 500 companies with the highest security standards and compliance requirements</p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Lock className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">SOC 2 Type II</h4>
                    <p className="text-sm text-gray-600">Independently audited security controls</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">GDPR Compliant</h4>
                    <p className="text-sm text-gray-600">Full European data protection compliance</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">99.9% Uptime</h4>
                    <p className="text-sm text-gray-600">Enterprise SLA with guaranteed availability</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-orange-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">SSO Integration</h4>
                    <p className="text-sm text-gray-600">SAML, OAuth, and directory integration</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Value Props Section */}
          <div className="px-8 py-24 bg-white border-t" style={{ borderColor: 'rgba(54, 76, 213, 0.1)' }}>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-24">
                <h2 className="text-4xl font-semibold text-gray-900 mb-6">Why leading companies choose FlowSync</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" style={{ backgroundColor: '#364cd5' }}></div>
              </div>

              {/* Value Props Grid - Fixed positions */}
              <div className="grid md:grid-cols-3 gap-20">
                {[0, 1, 2].map((index) => (
                  <div key={index} className="text-center relative group">
                    <div className="w-20 h-20 bg-white shadow-lg rounded-2xl flex items-center justify-center mx-auto mb-8">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl font-medium" style={{ backgroundColor: '#364cd5' }}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="relative min-h-[60px] flex items-center justify-center">
                      {Object.entries(scenarios).map(([key, scenario]) => (
                        <TextTransition
                          key={`value-prop-${key}-${index}`}
                          isActive={activeScenario === key && !isTransitioning}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="relative">
                            <p className="text-2xl text-gray-700 font-normal">
                              {scenario.content.valueProps[index]}
                            </p>
                            <PersonalizedIndicator 
                              show={showChanges && activeScenario !== 'default' && activeScenario === key}
                              className="absolute -top-2 -right-16 hidden lg:block"
                            />
                          </div>
                        </TextTransition>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="px-8 py-24 border-t bg-white" style={{ borderColor: 'rgba(54, 76, 213, 0.1)' }}>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Built for your workflow</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" style={{ backgroundColor: '#364cd5' }}></div>
              </div>

              {/* Features Grid - Fixed positions */}
              <div className="grid md:grid-cols-3 gap-12">
                {[0, 1, 2].map((index) => (
                  <div key={index} className="text-center group relative hover:translate-y-[-8px] transition-all duration-300">
                    {/* Icon container - fixed */}
                    <div className="relative h-16 flex items-center justify-center mb-8">
                      {Object.entries(scenarios).map(([key, scenario]) => (
                        <TextTransition
                          key={`feature-icon-${key}-${index}`}
                          isActive={activeScenario === key && !isTransitioning}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-all duration-300">
                            <div className="text-blue-600 transition-colors" style={{ color: '#364cd5' }}>
                              {scenario.content.features[index].icon}
                            </div>
                          </div>
                        </TextTransition>
                      ))}
                    </div>

                    {/* Title - fixed height */}
                    <div className="relative h-8 flex items-center justify-center mb-4">
                      {Object.entries(scenarios).map(([key, scenario]) => (
                        <TextTransition
                          key={`feature-title-${key}-${index}`}
                          isActive={activeScenario === key && !isTransitioning}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="relative">
                            <h4 className="text-xl font-semibold text-gray-900">
                              {scenario.content.features[index].title}
                            </h4>
                            <PersonalizedIndicator 
                              show={showChanges && activeScenario !== 'default' && activeScenario === key}
                              className="absolute -top-2 -right-16 hidden lg:block"
                            />
                          </div>
                        </TextTransition>
                      ))}
                    </div>

                    {/* Description - fixed height */}
                    <div className="relative h-20 flex items-center justify-center">
                      {Object.entries(scenarios).map(([key, scenario]) => (
                        <TextTransition
                          key={`feature-desc-${key}-${index}`}
                          isActive={activeScenario === key && !isTransitioning}
                          className="absolute inset-0 flex items-center justify-center px-4"
                        >
                          <p className="text-gray-600 leading-relaxed">
                            {scenario.content.features[index].description}
                          </p>
                        </TextTransition>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Section with Blur Fade */}
          <div className="px-8 py-16 bg-gray-50 border-t relative" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>
            <div className="max-w-6xl mx-auto">
              <div className="text-center">
                <div className="relative h-24 flex items-center justify-center mb-8">
                  {Object.entries(scenarios).map(([key, scenario]) => (
                    <TextTransition
                      key={`testimonial-${key}`}
                      isActive={activeScenario === key && !isTransitioning}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="relative">
                        <blockquote className="text-2xl text-gray-700 italic max-w-4xl">
                          "{scenario.content.testimonial.quote}"
                        </blockquote>
                        <PersonalizedIndicator 
                          show={showChanges && activeScenario !== 'default' && activeScenario === key}
                          className="absolute -top-2 -right-16 hidden lg:block"
                        />
                      </div>
                    </TextTransition>
                  ))}
                </div>

                <div className="relative h-16 flex items-center justify-center">
                  {Object.entries(scenarios).map(([key, scenario]) => (
                    <TextTransition
                      key={`testimonial-author-${key}`}
                      isActive={activeScenario === key && !isTransitioning}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">{scenario.content.testimonial.author}</div>
                          <div className="text-sm text-gray-600">{scenario.content.testimonial.title}</div>
                        </div>
                      </div>
                    </TextTransition>
                  ))}
                </div>
              </div>
            </div>

            {/* Blur fade overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </div>

          {/* Content continuation blur */}
          <div className="h-48 bg-gradient-to-b from-gray-50 to-white relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white"></div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-white"></div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}; 