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
import ScrollToTop from '@/components/ui/scroll-to-top';
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
      <UseCases />
      <GitHubRepo />
      <ResearchGrants />
      <ReadyToBuild />
      <Footer />
      <ScrollToTop />
      <Grain opacity={0.085} blendMode="screen" filter="brightness(1.2)" />
    </div>
  );
};

export default Index;
