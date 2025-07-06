import React from 'react';
import {
  Navigation,
  Hero,
  SessionsAPI,
  Stats,
  UseCases,
  GitHubRepo,
  ResearchGrants,
  ReadyToBuild,
  Footer
} from '@/components/sections';
import Grain from '@/components/ui/grain';

const Index = () => {
  return (
    <div className="min-h-screen text-gray-800 pb-[60px]" style={{ backgroundColor: '#FFFAF3' }}>
      <Navigation />
      <Hero />
      <div className="mt-[60px]">
        <SessionsAPI />
      </div>
      {/* <Stats /> */}
      <div 
        className="max-w-[72rem] mx-auto border-l border-r h-[72px]"
        style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}
      ></div>
      <UseCases />
      <GitHubRepo />
      <ResearchGrants />
      <ReadyToBuild />
      <Footer />
      <Grain opacity={0.098} blendMode="screen" filter="brightness(1.2)" />
    </div>
  );
};

export default Index;
