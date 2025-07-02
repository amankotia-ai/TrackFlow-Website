import React from 'react';
import {
  Navigation,
  Footer
} from '@/components/sections';
import { ExamplesHero } from '@/components/sections/ExamplesHero';
import { ExamplesList } from '@/components/sections/ExamplesList';
import Grain from '@/components/ui/grain';

const Examples = () => {
  return (
    <div className="min-h-screen text-gray-800 pb-[60px]" style={{ backgroundColor: '#FFFAF3' }}>
      <Navigation />
      <ExamplesHero />
      <div className="mt-[60px]">
        <ExamplesList />
      </div>
      <Footer />
      <Grain opacity={0.085} blendMode="screen" filter="brightness(1.2)" />
    </div>
  );
};

export { Examples };
export default Examples; 