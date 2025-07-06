import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';
import { Input } from './input';
import { X } from 'lucide-react';

interface CheckoutFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
  });

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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="relative w-full max-w-3xl mx-4 bg-white shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ 
              duration: 0.4, 
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>

            <div className="flex flex-col lg:flex-row">
              {/* Left Panel - Form */}
              <div className="lg:w-1/2 p-8 lg:p-12">
                {/* Header */}
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h2 className="text-3xl font-light text-gray-900 mb-2">
                    Get in Touch
                  </h2>
                  <p className="text-sm text-gray-600">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                </motion.div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <motion.div 
                    className="grid grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First name
                      </label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last name
                      </label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email address
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </motion.div>

                  {/* Company */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company name
                    </label>
                    <Input
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <Button
                      type="submit"
                      className="w-full text-white hover:opacity-90 font-medium px-8 py-4 rounded-none transition-all duration-200"
                      style={{ backgroundColor: '#F73029' }}
                    >
                      Book a Demo
                    </Button>
                  </motion.div>
                </form>
              </div>

              {/* Right Panel - Brand */}
              <motion.div 
                className="lg:w-1/2 p-10 flex flex-col justify-center items-center relative" 
                style={{ backgroundColor: '#F73029' }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {/* Logo */}
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <img 
                    src="/imagsse 95_layerstyle.svg" 
                    alt="Logo" 
                    className="w-32 h-32 object-contain mx-auto"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 