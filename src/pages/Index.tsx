
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen text-gray-800" style={{ backgroundColor: '#FFF5E6' }}>
      {/* Navigation Header */}
      <nav className="border-b border-gray-200">
        <div className="max-w-[70rem] mx-auto flex items-center justify-between px-8 py-4">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ backgroundColor: '#F73029' }}>
                <span className="text-white font-bold text-sm">S</span>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <span className="px-3 py-2 border-r border-gray-200">Sessions API</span>
              <span className="px-3 py-2 border-r border-gray-200">Pricing</span>
              <span className="px-3 py-2 border-r border-gray-200">Playground</span>
              <span className="px-3 py-2">Docs</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Github className="w-4 h-4" />
              <span>4.7K</span>
            </div>
            <span className="text-sm text-gray-600">Log In</span>
            <Button className="text-white hover:opacity-90 font-medium px-6" style={{ backgroundColor: '#F73029' }}>
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
            <h1 className="text-6xl font-light leading-tight mb-8 text-gray-800">
              Browser<br />
              Infrastructure<br />
              <span style={{ color: '#F73029' }}>for AI Agents</span>
            </h1>
            
            <p className="text-lg mb-12 max-w-lg leading-relaxed text-gray-600">
              Steel is an open-source browser API that lets you control fleets of browsers in the cloud.
            </p>

            <div className="flex items-center space-x-6 mb-8">
              <Button className="text-white hover:opacity-90 font-medium px-6 py-3" style={{ backgroundColor: '#F73029' }}>
                Start For Free
              </Button>
              <Button variant="ghost" className="font-medium text-gray-600 hover:text-gray-800">
                Docs
              </Button>
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <span className="text-white px-2 py-1 rounded text-xs font-medium" style={{ backgroundColor: '#F73029' }}>New</span>
              <span className="text-gray-600">Go to Playground</span>
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Right Content - Clean Empty Space */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-3xl">
              <div className="w-full h-96 rounded-lg overflow-hidden relative bg-gray-50">
                {/* Empty clean space */}
              </div>
            </div>
          </div>
        </div>

        {/* Sessions API Section */}
        <div className="px-8 py-16 border-t border-gray-200">
          <div className="flex items-start space-x-16">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 rounded" style={{ backgroundColor: '#F73029' }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-3 h-3 grid grid-cols-2 gap-0.5">
                      <div className="w-1 h-1 bg-white rounded-sm"></div>
                      <div className="w-1 h-1 bg-white rounded-sm"></div>
                      <div className="w-1 h-1 bg-white rounded-sm"></div>
                      <div className="w-1 h-1 bg-white rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl font-light text-gray-800">Sessions API</h2>
              </div>
              <p className="text-lg mb-8 text-gray-600">
                Spin up on-demand browser sessions with a simple API call.
              </p>
              <Button className="text-white font-medium px-8" style={{ backgroundColor: '#F73029' }}>
                Start For Free
              </Button>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-4 h-4 rounded bg-gray-400">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-2 h-2 border border-white rounded-sm"></div>
                    </div>
                  </div>
                  <span className="font-medium text-gray-800">Auto CAPTCHA solving</span>
                </div>
                <p className="text-sm text-gray-600">
                  Built-in CAPTCHA solving that keeps your automation flowing.
                </p>
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-4 h-4 rounded bg-gray-400">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <span className="font-medium text-gray-800">Proxy and Browser Fingerprinting</span>
                </div>
                <p className="text-sm text-gray-600">
                  Simple controls to never worry about getting flagged as a bot again.
                </p>
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-4 h-4 rounded bg-gray-400">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-2 h-1 bg-white"></div>
                    </div>
                  </div>
                  <span className="font-medium text-gray-800">Quick-start</span>
                </div>
                <p className="text-sm text-gray-600">
                  Average session starts in less than 1s when client is in same region.
                </p>
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-4 h-4 rounded bg-gray-400">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-2 h-2 border border-white rounded-full"></div>
                    </div>
                  </div>
                  <span className="font-medium text-gray-800">Up to 24h Long Sessions</span>
                </div>
                <p className="text-sm text-gray-600">
                  Run for a minute or several hours, each session can run up to 24 hours.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full border border-gray-300 bg-gray-50">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">Live - 23h:59m</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="px-8 py-16 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-5xl font-light text-gray-800 mb-2">80B+</div>
              <div className="text-gray-600">Tokens Scraped</div>
            </div>
            <div>
              <div className="text-5xl font-light text-gray-800 mb-2">200,000+</div>
              <div className="text-gray-600">Browser Hours Served</div>
            </div>
            <div>
              <div className="text-5xl font-light text-gray-800 mb-2">&lt;1s</div>
              <div className="text-gray-600">Avg. Session Start Time</div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="px-8 py-8 border-t border-gray-200">
          <h2 className="text-sm font-medium mb-6 text-gray-600">Use Cases</h2>
          <h3 className="text-3xl font-light text-gray-800 mb-4">What Developers Build on Steel</h3>
          <p className="text-lg mb-12 text-gray-600">
            From large-scale scrape jobs to fully autonomous web agents, Steel makes it easy to run browser automations in the cloud.
          </p>
          
          <div className="grid grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-4 h-4" style={{ color: '#F73029' }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-current"></div>
                  </div>
                </div>
                <span className="font-medium" style={{ color: '#F73029' }}>AI Agents</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-4 h-4 text-gray-600">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-current"></div>
                  </div>
                </div>
                <span className="font-medium text-gray-600">Foundational Model Training</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-4 h-4 text-gray-600">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-current"></div>
                  </div>
                </div>
                <span className="font-medium text-gray-600">AI Shopping Assistants</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-4 h-4 text-gray-600">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-current"></div>
                  </div>
                </div>
                <span className="font-medium text-gray-600">Web Scraping</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-4 h-4 text-gray-600">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-current"></div>
                  </div>
                </div>
                <span className="font-medium text-gray-600">RPA Software</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-4 h-4 text-gray-600">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-current"></div>
                  </div>
                </div>
                <span className="font-medium text-gray-600">Sales Automation</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-4 h-4 text-gray-600">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-current"></div>
                  </div>
                </div>
                <span className="font-medium text-gray-600">QA Software</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-4 h-4 text-gray-600">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-current"></div>
                  </div>
                </div>
                <span className="font-medium text-gray-600">Customer Service Agents</span>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Repository Section */}
        <div className="px-8 py-16 border-t border-gray-200">
          <div className="text-center">
            <Github className="w-16 h-16 mx-auto mb-6 text-gray-600" />
            <h2 className="text-3xl font-light text-gray-800 mb-4">GitHub Repository</h2>
            <p className="text-lg mb-8 text-gray-600">
              Steel is proudly open-source. Run our sessions locally or self-hosted with our docker container.
            </p>
            <Button variant="outline" className="border-gray-400 text-gray-800 hover:bg-gray-50">
              steel-browser
            </Button>
          </div>
        </div>

        {/* Research Grants Section */}
        <div className="px-8 py-16 border-t border-gray-200">
          <div className="flex items-center space-x-16">
            <div className="flex-1">
              <h2 className="text-3xl font-light text-gray-800 mb-4">Research Grants</h2>
              <p className="text-lg mb-4 text-gray-600">
                If you're doing research for a school, send us an email from your school email: 
                to <span className="text-gray-800">research@steel.dev</span> for grants in the form of free credits.
              </p>
              
              <div className="mt-8">
                <h3 className="font-medium text-gray-800 mb-2">Eligibility</h3>
                <p className="text-sm text-gray-600">
                  The Steel Research Grants program is open to anyone passionate about advancing AI through open source projects. Whether you're a seasoned researcher or a self-taught developer, we welcome your applications.
                </p>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="w-full h-64 rounded-lg bg-gray-200">
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-6xl font-light">
                  MAP
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ready to Build Section */}
        <div className="px-8 py-16 border-t border-gray-200">
          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-gray-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            </div>
            
            <div className="relative p-12">
              <div className="w-8 h-8 rounded-sm flex items-center justify-center mb-8" style={{ backgroundColor: '#F73029' }}>
                <span className="text-white font-bold text-sm">S</span>
              </div>
              
              <h2 className="text-4xl font-light text-gray-800 mb-8">
                Ready to<br />
                Build with Steel?
              </h2>
              
              <div className="flex items-center space-x-4">
                <Button className="text-white font-medium px-8" style={{ backgroundColor: '#F73029' }}>
                  Start For Free
                </Button>
                <Button variant="outline" className="border-gray-400 text-gray-800 hover:bg-gray-50">
                  Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-[70rem] mx-auto px-8 py-12">
          <div className="flex justify-between">
            <div>
              <div className="w-8 h-8 rounded-sm flex items-center justify-center mb-4" style={{ backgroundColor: '#F73029' }}>
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <p className="text-sm mb-4 text-gray-600">
                A better way to take your LLMs online.
              </p>
              <p className="text-xs text-gray-500">
                © Nen Labs, Inc. 2025.
              </p>
              <div className="flex items-center space-x-4 mt-2 text-xs">
                <span className="text-gray-500">Terms of Service</span>
                <span className="text-gray-500">Privacy Policy</span>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-600">All Systems Operational</span>
              </div>
            </div>
            
            <div className="flex space-x-16">
              <div>
                <h3 className="font-medium text-gray-800 mb-4">Platform</h3>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-600">Docs</div>
                  <div className="text-gray-600">Status</div>
                  <div className="text-gray-600">Launch Week @ Steel</div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-4">Join the Community</h3>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-600">X / Twitter</div>
                  <div className="text-gray-600">GitHub</div>
                  <div className="text-gray-600">Discord</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <Github className="w-8 h-8 text-gray-300" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
