import React from 'react';
import {
  Navigation,
  Footer
} from '@/components/sections';
import { DemoHero } from '@/components/sections/DemoHero';
import { DemoInteractive } from '@/components/sections/DemoInteractive';
import Grain from '@/components/ui/grain';

const Demo = () => {
  return (
    <div className="min-h-screen text-gray-800 pb-[60px]" style={{ backgroundColor: '#FFFAF3' }}>
      <Navigation />
      <DemoHero />
      <div className="mt-[60px]">
        <DemoInteractive />
      </div>
      <Footer />
      <Grain opacity={0.085} blendMode="screen" filter="brightness(1.2)" />
    </div>
  );
};

export default Demo; 