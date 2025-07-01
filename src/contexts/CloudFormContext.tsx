import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CloudFormContextType {
  isOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const CloudFormContext = createContext<CloudFormContextType | undefined>(undefined);

interface CloudFormProviderProps {
  children: ReactNode;
}

export const CloudFormProvider: React.FC<CloudFormProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    <CloudFormContext.Provider value={{ isOpen, openForm, closeForm }}>
      {children}
    </CloudFormContext.Provider>
  );
};

export const useCloudForm = () => {
  const context = useContext(CloudFormContext);
  if (context === undefined) {
    throw new Error('useCloudForm must be used within a CloudFormProvider');
  }
  return context;
}; 