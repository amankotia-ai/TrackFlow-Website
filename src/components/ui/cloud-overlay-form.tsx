import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';
import { Input } from './input';
import { X } from 'lucide-react';

interface CloudOverlayFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  title: string;
}

export const CloudOverlayForm: React.FC<CloudOverlayFormProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    title: '',
  });

  const [filledFields, setFilledFields] = useState<number>(0);

  // Calculate filled fields count
  useEffect(() => {
    const count = Object.values(formData).filter(value => value.trim() !== '').length;
    setFilledFields(count);
  }, [formData]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    onClose();
  };

  const cloudOpacity = Math.max(0.1, 0.9 - (filledFields * 0.15));
  const cloudScale = Math.max(0.3, 1 - (filledFields * 0.1));
  const cloudBlur = filledFields * 2;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Cloud Layers */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Cloud Layer 1 - Main background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-200"
              initial={{ opacity: 0.9 }}
              animate={{ 
                opacity: cloudOpacity,
                scale: cloudScale,
                filter: `blur(${cloudBlur}px)`
              }}
              transition={{ duration: 0.8 }}
            />
            
            {/* Cloud Layer 2 - Floating clouds */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0.8 }}
              animate={{ 
                opacity: Math.max(0.1, cloudOpacity - 0.2),
                x: filledFields * -50,
                scale: cloudScale
              }}
              transition={{ duration: 1 }}
            >
              <div className="cloud-layer cloud-1" />
              <div className="cloud-layer cloud-2" />
              <div className="cloud-layer cloud-3" />
              <div className="cloud-layer cloud-4" />
              <div className="cloud-layer cloud-5" />
            </motion.div>
            
            {/* Cloud Layer 3 - Mist overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-white/60 via-blue-50/40 to-indigo-100/60"
              initial={{ opacity: 0.7 }}
              animate={{ 
                opacity: Math.max(0.05, cloudOpacity - 0.3),
                y: filledFields * -30
              }}
              transition={{ duration: 1.2 }}
            />
            
            {/* Animated mist particles */}
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-32 h-32 bg-white/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ opacity: 0.6, scale: 0.8 }}
                  animate={{
                    opacity: Math.max(0, cloudOpacity - 0.4),
                    scale: Math.max(0.2, cloudScale - 0.2),
                    x: filledFields * (Math.random() > 0.5 ? 100 : -100),
                    y: filledFields * (Math.random() > 0.5 ? 50 : -50),
                  }}
                  transition={{ 
                    duration: 1.5 + Math.random(),
                    delay: i * 0.1 
                  }}
                />
              ))}
            </div>
          </div>

          {/* Form Content */}
          <motion.div
            className="relative z-10 w-full max-w-md mx-4"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-2xl p-8 border border-white/20">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Form Header */}
              <div className="text-center mb-8">
                <motion.h2 
                  className="text-2xl md:text-3xl font-light text-gray-800 mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Start Your Journey
                </motion.h2>
                <motion.p 
                  className="text-sm text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Transform your visitor experience with TrackFlow
                </motion.p>
              </div>

              {/* Progress Indicator */}
              <div className="mb-6">
                <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-red-500 to-red-600"
                    initial={{ width: '0%' }}
                    animate={{ width: `${(filledFields / 5) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  {filledFields}/5 fields completed
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Input
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="rounded-md border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Input
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="rounded-md border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="rounded-md border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <Input
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="rounded-md border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  <Input
                    placeholder="Job Title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="rounded-md border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </motion.div>

                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <Button
                    type="submit"
                    className="w-full text-white font-medium py-3 rounded-md"
                    style={{ backgroundColor: '#F73029' }}
                    disabled={filledFields < 5}
                  >
                    Get Started
                  </Button>
                </motion.div>
              </form>

              {/* Trust Indicators */}
              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <p className="text-xs text-gray-500">
                  ✓ Free 14-day trial • ✓ No credit card required • ✓ Setup in minutes
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 