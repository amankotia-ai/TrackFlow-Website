import React from 'react';
import { motion, useInView } from 'framer-motion';
import { slideUp, fadeIn, staggerContainer, staggerItem } from '@/lib/animations';
import { Button } from "@/components/ui/button";
import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Link } from 'react-router-dom';
import Grain from '@/components/ui/grain';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  slug: string;
}

// Helper function to create URL-friendly slugs
const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <Link to={`/blog/${post.slug}`}>
    <motion.article 
      className="border-r border-b p-6 md:p-8 hover:bg-hover-bg transition-colors cursor-pointer h-full flex flex-col -mr-px -mb-px" 
      style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
      variants={staggerItem}
    >
      <motion.div 
        className="flex items-center mb-4"
        variants={fadeIn}
      >
        <span className="text-xs text-gray-500">{post.date}</span>
      </motion.div>
      
      <motion.h3 
        className="text-base md:text-lg font-medium text-gray-800 mb-3 leading-tight flex-grow"
        variants={slideUp}
      >
        {post.title}
      </motion.h3>
      
      <motion.p 
        className="text-sm text-gray-600 mb-4 leading-relaxed flex-grow"
        variants={slideUp}
      >
        {post.excerpt}
      </motion.p>
      
      <motion.div 
        className="flex items-center justify-between mt-auto"
        variants={fadeIn}
      >
        <span className="text-xs text-gray-500">By {post.author}</span>
        <motion.span 
          className="text-xs font-medium text-gray-800 hover:text-gray-600 transition-colors"
          whileHover={{ x: 2 }}
        >
          Read more →
        </motion.span>
      </motion.div>
    </motion.article>
  </Link>
);

export const Blog: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of Website Personalization: AI-Driven Visitor Intelligence',
      excerpt: 'Discover how artificial intelligence is revolutionizing the way businesses understand and engage with their website visitors through personalized experiences.',
      date: '2024-01-15',
      author: 'Sarah Chen',
      category: 'AI & Technology',
      slug: createSlug('The Future of Website Personalization: AI-Driven Visitor Intelligence')
    },
    {
      id: '2',
      title: 'Converting Anonymous Visitors: Strategies That Actually Work',
      excerpt: 'Learn proven techniques to turn anonymous website traffic into qualified leads using behavioral tracking and dynamic content personalization.',
      date: '2024-01-12',
      author: 'Marcus Rodriguez',
      category: 'Marketing',
      slug: createSlug('Converting Anonymous Visitors: Strategies That Actually Work')
    },
    {
      id: '3',
      title: 'Building Trust Through Transparency: The New Era of Data Privacy',
      excerpt: 'Explore how modern businesses balance personalization with privacy, building trust while delivering relevant experiences to their audience.',
      date: '2024-01-10',
      author: 'Emily Thompson',
      category: 'Privacy & Ethics',
      slug: createSlug('Building Trust Through Transparency: The New Era of Data Privacy')
    },
    {
      id: '4',
      title: 'Case Study: How TrackFlow Increased Demo Bookings by 74%',
      excerpt: 'A deep dive into how one SaaS company transformed their visitor experience and dramatically improved their conversion rates.',
      date: '2024-01-08',
      author: 'David Kim',
      category: 'Case Studies',
      slug: createSlug('Case Study: How TrackFlow Increased Demo Bookings by 74%')
    },
    {
      id: '5',
      title: 'The Psychology of Website Personalization: What Really Drives Engagement',
      excerpt: 'Understanding the cognitive principles behind effective personalization and how to apply them to create compelling user experiences.',
      date: '2024-01-05',
      author: 'Dr. Lisa Park',
      category: 'Psychology',
      slug: createSlug('The Psychology of Website Personalization: What Really Drives Engagement')
    },
    {
      id: '6',
      title: 'API Integration Made Simple: Getting Started with TrackFlow Sessions',
      excerpt: 'A comprehensive guide to integrating visitor intelligence into your existing tech stack with minimal development overhead.',
      date: '2024-01-03',
      author: 'Alex Johnson',
      category: 'Technical',
      slug: createSlug('API Integration Made Simple: Getting Started with TrackFlow Sessions')
    }
  ];

  return (
    <div className="min-h-screen text-gray-800 pb-[60px]" style={{ backgroundColor: '#FFFAF3' }}>
      <Grain opacity={0.085} blendMode="screen" filter="brightness(1.2)" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <motion.div 
        className="max-w-[72rem] mx-auto border-l border-r border-b" 
        style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="px-4 md:px-8 py-12 md:py-16 text-center">
          <motion.div 
            className="flex flex-col items-center mb-6"
            variants={staggerItem}
          >
            <img 
              src="/image 108_layerstyle.svg" 
              alt="Blog icon" 
              className="w-12 h-16 mb-4"
            />
            <div className="text-sm font-medium text-gray-600">
              Blog & Insights
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 text-gray-800 max-w-4xl mx-auto"
            variants={staggerItem}
          >
            Insights on visitor intelligence, personalization, and growth
          </motion.h1>
          
          <motion.p 
            className="text-sm mb-8 max-w-2xl mx-auto text-gray-600"
            variants={staggerItem}
          >
            Stay updated with the latest trends, strategies, and insights in website personalization and visitor intelligence.
          </motion.p>
        </div>
      </motion.div>

      {/* Blog Posts Grid */}
      <motion.div 
        className="max-w-[72rem] mx-auto border-l border-r border-b" 
        style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </motion.div>

      
      {/* Footer */}
      <Footer />
    </div>
  );
}; 