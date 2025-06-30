
import React from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#111110' }}>
      {/* Navigation Header */}
      <nav className="border-b border-gray-800">
        <div className="max-w-[70rem] mx-auto flex items-center justify-between px-8 py-4">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-bold text-sm">S</span>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <span className="px-3 py-2 border-r border-gray-800">Sessions API</span>
              <span className="px-3 py-2 border-r border-gray-800">Pricing</span>
              <span className="px-3 py-2 border-r border-gray-800">Playground</span>
              <span className="px-3 py-2">Docs</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-gray-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              <span>4.7K</span>
            </div>
            <span className="text-sm text-gray-300">Log In</span>
            <Button className="text-black hover:opacity-90 font-medium px-6" style={{ backgroundColor: '#f5d90a' }}>
              Start For Free
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-[70rem] mx-auto">
        <div className="flex items-center justify-between px-8 py-16">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-6xl font-light leading-tight mb-8">
              Browser<br />
              Infrastructure<br />
              <span className="text-gray-400">for AI Agents</span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-12 max-w-lg leading-relaxed">
              Steel is an open-source browser API that lets you control fleets of browsers in the cloud.
            </p>

            <div className="flex items-center space-x-6 mb-8">
              <Button className="text-black hover:opacity-90 font-medium px-6 py-3" style={{ backgroundColor: '#f5d90a' }}>
                Start For Free
              </Button>
              <Button variant="ghost" className="text-white hover:text-gray-300 font-medium">
                Docs
              </Button>
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">New</span>
              <span className="text-gray-400">Go to Playground</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Right Content - Mock Browser Interface */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-3xl">
              {/* Background container with tech pattern */}
              <div className="w-full h-96 bg-gray-700 rounded-lg overflow-hidden relative">
                {/* Tech pattern background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600 opacity-30"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                </div>
                
                {/* Mock browser windows */}
                <div className="absolute top-8 left-8 w-80 bg-gray-900 rounded-lg border border-gray-700 p-4">
                  <div className="text-xs text-gray-500 mb-2">MY_APP</div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-white">Prioritize time over price</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-300 text-xs">Shortest flight from Amsterdam to Madrid</span>
                    </div>
                    <div className="text-xs text-gray-400">
                      lasts 3h 36min, on November 19, 2024 -<br />
                      priced at <span className="text-white font-medium">$250</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                      <span className="text-gray-300 text-xs">Book the flight using my primary MasterCard</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <span className="text-gray-300 text-xs">Flight Booked.</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-8 right-8 w-72 bg-gray-900 rounded-lg border border-gray-700 p-4">
                  <div className="text-xs text-gray-500 mb-4">STEEL_BROWSER</div>
                  <div className="text-xs text-gray-400 mb-2">skyscanner.net</div>
                  <div className="flex justify-between items-center text-lg font-mono">
                    <div>
                      <div className="text-gray-400 text-xs">20:05</div>
                      <div className="text-white">AMS</div>
                    </div>
                    <div className="flex-1 mx-4 relative">
                      <div className="border-t border-dashed border-gray-600"></div>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs">23:35</div>
                      <div className="text-white">MAD</div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">20:05</span>
                      <span className="text-gray-400">23:35</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="px-8 py-16 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-5xl font-light text-white mb-2">80B+</div>
              <div className="text-gray-400">Tokens Scraped</div>
            </div>
            <div>
              <div className="text-5xl font-light text-white mb-2">200,000+</div>
              <div className="text-gray-400">Browser Hours Served</div>
            </div>
            <div>
              <div className="text-5xl font-light text-white mb-2">&lt;1s</div>
              <div className="text-gray-400">Avg. Session Start Time</div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="px-8 py-8 border-t border-gray-800">
          <h2 className="text-2xl font-light text-white mb-8">Use Cases</h2>
          <div className="grid grid-cols-4 gap-8 text-lg">
            <div className="text-gray-300 px-4 py-2 border-r border-gray-800">AI Agents Development</div>
            <div className="text-gray-300 px-4 py-2 border-r border-gray-800">Parallel</div>
            <div className="text-gray-300 px-4 py-2 border-r border-gray-800">Scraping</div>
            <div className="text-gray-300 px-4 py-2">QA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
