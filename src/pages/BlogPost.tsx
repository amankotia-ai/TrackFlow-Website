import React from 'react';
import { motion, useInView } from 'framer-motion';
import { slideUp, fadeIn, staggerContainer, staggerItem } from '@/lib/animations';
import { Button } from "@/components/ui/button";
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Link } from 'react-router-dom';
import Grain from '@/components/ui/grain';
import { useCloudForm } from '@/contexts/CloudFormContext';

export const BlogPost: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { openForm } = useCloudForm();

  // Helper function to create URL-friendly slugs
  const createSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  const relatedPosts = [
    {
      title: 'Converting Anonymous Visitors: Strategies That Actually Work',
      date: '2024-01-12',
      slug: createSlug('Converting Anonymous Visitors: Strategies That Actually Work')
    },
    {
      title: 'Building Trust Through Transparency: The New Era of Data Privacy',
      date: '2024-01-10', 
      slug: createSlug('Building Trust Through Transparency: The New Era of Data Privacy')
    },
    {
      title: 'Case Study: How TrackFlow Increased Demo Bookings by 74%',
      date: '2024-01-08',
      slug: createSlug('Case Study: How TrackFlow Increased Demo Bookings by 74%')
    }
  ];

  return (
    <div className="min-h-screen text-gray-800 pb-[60px]" style={{ backgroundColor: '#FFFAF3' }}>
      <Grain opacity={0.085} blendMode="screen" filter="brightness(1.2)" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Article Header */}
      <motion.div 
        className="max-w-[72rem] mx-auto border-l border-r border-b" 
        style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="px-4 md:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="flex items-center mb-6"
              variants={staggerItem}
            >
              <span className="text-xs text-gray-500">January 15, 2024</span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 text-gray-800"
              variants={staggerItem}
            >
              The Future of Website Personalization: AI-Driven Visitor Intelligence
            </motion.h1>
            
            <motion.div 
              className="flex items-center space-x-2 mb-8"
              variants={staggerItem}
            >
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-gray-600">SC</span>
              </div>
              <span className="text-sm text-gray-600">By Sarah Chen</span>
            </motion.div>
            
            <motion.p 
              className="text-sm text-gray-600 leading-relaxed"
              variants={staggerItem}
            >
              Discover how artificial intelligence is revolutionizing the way businesses understand and engage with their website visitors through personalized experiences that drive real results.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Article Content */}
      <motion.div 
        className="max-w-[72rem] mx-auto border-t border-l border-r" 
        style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="px-4 md:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="prose prose-sm max-w-none"
              variants={staggerItem}
            >
              <motion.h2 
                className="text-xl md:text-2xl font-light text-gray-800 mb-6"
                variants={slideUp}
              >
                The Evolution of Digital Personalization
              </motion.h2>
              
              <motion.p 
                className="text-sm text-gray-600 mb-6 leading-relaxed"
                variants={slideUp}
              >
                In today's digital landscape, the one-size-fits-all approach to website design is becoming increasingly obsolete. Modern consumers expect experiences tailored to their specific needs, preferences, and behaviors. This shift has given rise to a new era of website personalization, powered by artificial intelligence and visitor intelligence technologies.
              </motion.p>
              
              <motion.p 
                className="text-sm text-gray-600 mb-8 leading-relaxed"
                variants={slideUp}
              >
                Traditional personalization methods relied heavily on explicit data collection—forms, surveys, and manual user input. While effective to some extent, these approaches often created friction in the user experience and provided limited insights into visitor behavior.
              </motion.p>
              
              <motion.h2 
                className="text-xl md:text-2xl font-light text-gray-800 mb-6"
                variants={slideUp}
              >
                AI-Powered Visitor Intelligence: A Game Changer
              </motion.h2>
              
              <motion.p 
                className="text-sm text-gray-600 mb-6 leading-relaxed"
                variants={slideUp}
              >
                The emergence of AI-driven visitor intelligence has fundamentally transformed how businesses understand their website visitors. By analyzing behavioral patterns, engagement metrics, and interaction data in real-time, AI systems can create detailed visitor profiles without requiring explicit input from users.
              </motion.p>
              
              <motion.div 
                className="bg-gray-50 p-6 mb-8 border rounded-sm"
                style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
                variants={fadeIn}
              >
                <motion.h3 
                  className="text-base font-medium text-gray-800 mb-3"
                  variants={slideUp}
                >
                  Key Benefits of AI-Driven Personalization:
                </motion.h3>
                <motion.ul 
                  className="text-sm text-gray-600 space-y-2"
                  variants={staggerContainer}
                >
                  <motion.li variants={staggerItem}>• Real-time content adaptation based on visitor behavior</motion.li>
                  <motion.li variants={staggerItem}>• Predictive analytics for visitor intent and likelihood to convert</motion.li>
                  <motion.li variants={staggerItem}>• Automated A/B testing and optimization</motion.li>
                  <motion.li variants={staggerItem}>• Seamless integration with existing marketing stacks</motion.li>
                </motion.ul>
              </motion.div>
              
              <motion.h2 
                className="text-xl md:text-2xl font-light text-gray-800 mb-6"
                variants={slideUp}
              >
                Implementing Visitor Intelligence: Best Practices
              </motion.h2>
              
              <motion.p 
                className="text-sm text-gray-600 mb-6 leading-relaxed"
                variants={slideUp}
              >
                Successfully implementing AI-driven visitor intelligence requires a strategic approach that balances personalization with privacy, performance with user experience. Organizations that excel in this space focus on gradual implementation, continuous testing, and transparent data practices.
              </motion.p>
              
              <motion.p 
                className="text-sm text-gray-600 mb-8 leading-relaxed"
                variants={slideUp}
              >
                The future of website personalization lies in the seamless integration of AI technologies that can understand, predict, and respond to visitor needs in real-time. As these technologies continue to evolve, businesses that embrace visitor intelligence will find themselves at a significant competitive advantage.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Related Articles */}
      <motion.div 
        className="max-w-[72rem] mx-auto border-t border-l border-r" 
        style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="px-4 md:px-8 py-12 md:py-16">
          <motion.h2 
            className="text-xl md:text-2xl font-light text-gray-800 mb-8"
            variants={slideUp}
          >
            Related Articles
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 border-t -mx-4 md:-mx-8"
            style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
            variants={staggerContainer}
          >
            {relatedPosts.map((post, index) => (
              <Link key={index} to={`/blog/${post.slug}`}>
                <motion.article 
                  className="border-r border-b p-6 hover:bg-hover-bg transition-colors cursor-pointer h-full min-h-[180px] flex flex-col justify-between last:border-r-0 md:last:border-r md:nth-child-3n:border-r-0"
                  style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
                  variants={staggerItem}
                >
                  <motion.h3 
                    className="text-base font-medium text-gray-800 mb-3 leading-tight"
                    variants={slideUp}
                  >
                    {post.title}
                  </motion.h3>
                  <motion.div 
                    className="flex items-center text-xs text-gray-500 mt-auto"
                    variants={fadeIn}
                  >
                    <span>{post.date}</span>
                  </motion.div>
                </motion.article>
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="max-w-[72rem] mx-auto border-t border-l border-r border-b px-4 md:px-8 py-12 md:py-16 text-center" 
        style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 
          className="text-2xl md:text-3xl font-light text-gray-800 mb-4"
          variants={slideUp}
        >
          Ready to transform your visitor experience?
        </motion.h2>
        <motion.p 
          className="text-sm text-gray-600 mb-8 max-w-2xl mx-auto"
          variants={slideUp}
        >
          See how TrackFlow's AI-driven visitor intelligence can help you personalize every visitor interaction.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <Button 
              onClick={openForm}
              className="text-white hover:opacity-90 font-medium px-8 rounded-none" 
              style={{ backgroundColor: '#F73029' }}
            >
              Start For Free
            </Button>
          </motion.div>
          <motion.div variants={staggerItem}>
            <Link to="/blog">
              <Button variant="outline" className="border-gray-400 text-gray-800 hover:bg-hover-bg rounded-none">
                View More Articles
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}; 