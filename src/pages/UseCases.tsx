import React from 'react';
import {
  Navigation,
  Footer
} from '@/components/sections';
import { UseCasesHero } from '@/components/sections/UseCasesHero';
import { UseCasesList } from '@/components/sections/UseCasesList';
import Grain from '@/components/ui/grain';

const UseCases = () => {
  return (
    <div className="min-h-screen text-gray-800 pb-[60px]" style={{ backgroundColor: '#FFFAF3' }}>
      <Navigation />
      <UseCasesHero />
      <div className="mt-[60px]">
        <UseCasesList />
      </div>
      <Footer />
      <Grain opacity={0.085} blendMode="screen" filter="brightness(1.2)" />
    </div>
  );
};

export { UseCases };
export default UseCases; 