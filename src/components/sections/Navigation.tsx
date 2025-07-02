import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { fadeIn, slideUp, staggerContainer, staggerItem, buttonHover } from '@/lib/animations';
import { useCloudForm } from '@/contexts/CloudFormContext';

export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openForm } = useCloudForm();

  const navItems = [
    { name: 'Examples', href: '/examples' },
    { name: 'Use Cases', href: '/use-cases' },
    { name: 'Demo', href: '/demo' },
    { name: 'Blog', href: '/blog' }
  ];

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div 
        className="max-w-[72rem] mx-auto flex items-center justify-between px-4 md:px-8 py-1 border-b border-l border-r" 
        style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
      >
        <div className="flex items-center space-x-4 md:space-x-8">
          <motion.div 
            className="flex items-center space-x-2"
            variants={staggerItem}
          >
            <Link to="/">
              <img src="/image 96_layerstyle.svg" alt="Logo" className="w-16 h-16 md:w-24 md:h-24" />
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center text-sm text-gray-600"
            variants={staggerItem}
          >
            {navItems.map((item, index) => (
              <Link 
                key={item.name}
                to={item.href}
                className={`px-4 py-2 border${index === 0 ? '' : '-t border-b border-r'} hover:bg-hover-bg transition-colors cursor-pointer`}
                style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Desktop Auth Actions */}
        <motion.div 
          className="hidden md:flex items-center"
          variants={staggerItem}
        >
          <span 
            className="px-6 border-t border-b border-l text-sm text-gray-600 cursor-pointer hover:bg-hover-bg hover:text-gray-800 transition-colors flex items-center h-[44px]"
            style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
          >
            Log In
          </span>
          <motion.div whileHover={buttonHover}>
            <Button 
              onClick={openForm}
              className="text-white hover:opacity-90 font-medium px-6 rounded-none border-t border-b border-r h-[44px]" 
              style={{ backgroundColor: '#F73029', borderColor: 'rgba(247, 48, 41, 0.1)' }}
            >
              Start For Free
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          variants={staggerItem}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-gray-600" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6 text-gray-600" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden border-b border-l border-r bg-white" 
            style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="max-w-[72rem] mx-auto px-4 py-4 space-y-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <div className="space-y-2 text-sm text-gray-600">
                {navItems.map((item) => (
                  <motion.div key={item.name} variants={staggerItem}>
                    <Link 
                      to={item.href}
                      className="px-4 py-2 border rounded hover:bg-hover-bg transition-colors cursor-pointer block" 
                      style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="flex flex-col space-y-2 pt-4 border-t" 
                style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
                variants={staggerItem}
              >
                <div className="px-4 py-2 border rounded text-sm text-gray-600 hover:bg-hover-bg hover:text-gray-800 transition-colors cursor-pointer" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>
                  Log In
                </div>
                <motion.div whileHover={buttonHover}>
                  <Button 
                    onClick={openForm}
                    className="text-white hover:opacity-90 font-medium px-6 py-3 rounded-none" 
                    style={{ backgroundColor: '#F73029' }}
                  >
                    Start For Free
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}; 