
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen text-gray-800" style={{ backgroundColor: '#FFF5E6' }}>
      {/* Navigation Header */}
      <nav className="border-b" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>
        <div className="max-w-[70rem] mx-auto flex items-center justify-between px-8 py-4">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ backgroundColor: '#F73029' }}>
                <span className="text-white font-bold text-sm">S</span>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm" style={{ color: 'rgba(247, 48, 41, 0.7)' }}>
              <span className="px-3 py-2 border-r" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>Sessions API</span>
              <span className="px-3 py-2 border-r" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>Pricing</span>
              <span className="px-3 py-2 border-r" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>Playground</span>
              <span className="px-3 py-2">Docs</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm" style={{ color: 'rgba(247, 48, 41, 0.7)' }}>
              <Github className="w-4 h-4" />
              <span>4.7K</span>
            </div>
            <span className="text-sm" style={{ color: 'rgba(247, 48, 41, 0.7)' }}>Log In</span>
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
              <span style={{ color: 'rgba(247, 48, 41, 0.6)' }}>for AI Agents</span>
            </h1>
            
            <p className="text-lg mb-12 max-w-lg leading-relaxed" style={{ color: 'rgba(247, 48, 41, 0.6)' }}>
              Steel is an open-source browser API that lets you control fleets of browsers in the cloud.
            </p>

            <div className="flex items-center space-x-6 mb-8">
              <Button className="text-white hover:opacity-90 font-medium px-6 py-3" style={{ backgroundColor: '#F73029' }}>
                Start For Free
              </Button>
              <Button variant="ghost" className="font-medium" style={{ color: '#F73029' }}>
                Docs
              </Button>
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <span className="text-white px-2 py-1 rounded text-xs font-medium" style={{ backgroundColor: '#F73029' }}>New</span>
              <span style={{ color: 'rgba(247, 48, 41, 0.6)' }}>Go to Playground</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'rgba(247, 48, 41, 0.6)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Right Content - Mock Browser Interface */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-3xl">
              <div className="w-full h-96 rounded-lg overflow-hidden relative" style={{ backgroundColor: 'rgba(247, 48, 41, 0.05)' }}>
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full opacity-30" style={{ background: `linear-gradient(135deg, rgba(247, 48, 41, 0.3), rgba(247, 48, 41, 0.1))` }}></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,48,41,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                </div>
                
                <div className="absolute top-8 left-8 w-80 rounded-lg border p-4" style={{ backgroundColor: 'rgba(247, 48, 41, 0.02)', borderColor: 'rgba(247, 48, 41, 0.1)' }}>
                  <div className="text-xs mb-2" style={{ color: 'rgba(247, 48, 41, 0.5)' }}>MY_APP</div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#F73029' }}></div>
                      <span className="text-gray-800">Prioritize time over price</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'rgba(247, 48, 41, 0.6)' }}></div>
                      <span className="text-xs" style={{ color: 'rgba(247, 48, 41, 0.7)' }}>Shortest flight from Amsterdam to Madrid</span>
                    </div>
                    <div className="text-xs" style={{ color: 'rgba(247, 48, 41, 0.6)' }}>
                      lasts 3h 36min, on November 19, 2024 -<br />
                      priced at <span className="text-gray-800 font-medium">$250</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'rgba(247, 48, 41, 0.3)' }}></div>
                      <span className="text-xs" style={{ color: 'rgba(247, 48, 41, 0.7)' }}>Book the flight using my primary MasterCard</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#F73029' }}></div>
                      <span className="text-xs" style={{ color: 'rgba(247, 48, 41, 0.7)' }}>Flight Booked.</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-8 right-8 w-72 rounded-lg border p-4" style={{ backgroundColor: 'rgba(247, 48, 41, 0.02)', borderColor: 'rgba(247, 48, 41, 0.1)' }}>
                  <div className="text-xs mb-4" style={{ color: 'rgba(247, 48, 41, 0.5)' }}>STEEL_BROWSER</div>
                  <div className="text-xs mb-2" style={{ color: 'rgba(247, 48, 41, 0.6)' }}>skyscanner.net</div>
                  <div className="flex justify-between items-center text-lg font-mono">
                    <div>
                      <div className="text-xs" style={{ color: 'rgba(247, 48, 41, 0.6)' }}>20:05</div>
                      <div className="text-gray-800">AMS</div>
                    </div>
                    <div className="flex-1 mx-4 relative">
                      <div className="border-t border-dashed" style={{ borderColor: 'rgba(247, 48, 41, 0.3)' }}></div>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'rgba(247, 48, 41, 0.6)' }}>
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs" style={{ color: 'rgba(247, 48, 41, 0.6)' }}>23:35</div>
                      <div className="text-gray-800">MAD</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sessions API Section */}
        <div className="px-8 py-16 border-t" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>
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
              <p className="text-lg mb-8" style={{ color: 'rgba(247, 48, 41, 0.6)' }}>
                Spin up on-demand browser sessions with a simple API call.
              </p>
              <Button className="text-white font-medium px-8" style={{ backgroundColor: '#F73029' }}>
                Start For Free
              </Button>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: 'rgba(247, 48, 41, 0.6)' }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-2 h-2 border border-white rounded-sm"></div>
                    </div>
                  </div>
                  <span className="font-medium text-gray-800">Auto CAPTCHA solving</span>
                </div>
                <p className="text-sm" style={{ color: 'rgba(247, 48, 41, 0.6)' }}>
                  Built-in CAPTCHA solving that keeps your automation flowing.
                </p>
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: 'rgba(247, 48, 41, 0.6)' }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <span className="font-medium text-gray-800">Proxy and Browser Fingerprinting</span>
                </div>
                <p className="text-sm" style={{ color: 'rgba(247, 48, 41, 0.6)' }}>
                  Simple controls to never worry about getting flagged as a bot again.
                </p>
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: 'rgba(247, 48, 41, 0.6)' }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-2 h-1 bg-white"></div>
                    </div>
                  </div>
                  <span className="font-medium text-gray-800">Quick-start</span>
                </div>
                <p className="text-sm" style={{ color: 'rgba(247, 48, 41, 0.6)' }}>
                  Average session starts in less than 1s when client is in same region.
                </p>
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: 'rgba(247, 48, 41, 0.6)' }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-2 h-2 border border-white rounded-full"></div>
                    </div>
                  </div>
                  <span className="font-medium text-gray-800">Up to 24h Long Sessions</span>
                </div>
                <p className="text-sm" style={{ color: 'rgba(247, 48, 41, 0.6)' }}>
                  Run for a minute or several hours, each session can run up to 24 hours.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full border" style={{ borderColor: 'rgba(247, 48, 41, 0.2)', backgroundColor: 'rgba(247, 48, 41, 0.05)' }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00ff00' }}></div>
              <span className="text-sm" style={{ color: 'rgba(247, 48, 41, 0.7)' }}>Live - 23h:59m</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="px-8 py-16 border-t" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-5xl font-light text-gray-800 mb-2">80B+</div>
              <div style={{ color: 'rgba(247, 48, 41, 0.6)' }}>Tokens Scraped</div>
            </div>
            <div>
              <div className="text-5xl font-light text-gray-800 mb-2">200,000+</div>
              <div style={{ color: 'rgba(247, 48, 41, 0.6)' }}>Browser Hours Served</div>
            </div>
            <div>
              <div className="text-5xl font-light text-gray-800 mb-2">&lt;1s</div>
              <div style={{ color: 'rgba(247, 48, 41, 0.6)' }}>Avg. Session Start Time</div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="px-8 py-8 border-t" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>
          <h2 className="text-sm font-medium mb-6" style={{ color: 'rgba(247, 48, 41, 0.6)' }}>Use Cases</h2>
          <h3 className="text-3xl font-light text-gray-800 mb-4">What Developers Build on Steel</h3>
          <p className="text-lg mb-12" style={{ color: 'rgba(247, 48, 41, 0.6)' }}>
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
                <div className="w-4 h-4" style={{ color: 'rgba(247, 48, 41, 0.7)' }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-current"></div>
                  </div>
                </div>
                <span className="font-medium" style={{ color: 'rgba(247, 48, 41, 0.7)' }}>Foundational Model Training</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-4 h-4" style={{ color: 'rgba(247, 48, 41, 0.7)' }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-current"></div>
                  </div>
                </div>
                <span className="font-medium" style={{ color: 'rgba(247, 48, 41, 0.7)' }}>AI Shopping Assistants</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-4 h-4" style={{ color: 'rgba(247, 48, 41, 0.7)' }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-current"></div>
                  </div>
                </div>
                <span className="font-medium" style={{ color: 'rgba(247, 48, 41, 0.7)' }}>Web Scraping</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-4 h-4" style={{ color: 'rgba(247, 48, 41, 0.7)' }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-current"></div>
                  </div>
                </div>
                <span className="font-medium" style={{ color: 'rgba(247, 48, 41, 0.7)' }}>RPA Software</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-4 h-4" style={{ color: 'rgba(247, 48, 41, 0.7)' }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-current"></div>
                  </div>
                </div>
                <span className="font-medium" style={{ color: 'rgba(247, 48, 41, 0.7)' }}>Sales Automation</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-4 h-4" style={{ color: 'rgba(247, 48, 41, 0.7)' }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-current"></div>
                  </div>
                </div>
                <span className="font-medium" style={{ color: 'rgba(247, 48, 41, 0.7)' }}>QA Software</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-4 h-4" style={{ color: 'rgba(247, 48, 41, 0.7)' }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-current"></div>
                  </div>
                </div>
                <span className="font-medium" style={{ color: 'rgba(247, 48, 41, 0.7)' }}>Customer Service Agents</span>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Repository Section */}
        <div className="px-8 py-16 border-t" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>
          <div className="text-center">
            <Github className="w-16 h-16 mx-auto mb-6" style={{ color: 'rgba(247, 48, 41, 0.6)' }} />
            <h2 className="text-3xl font-light text-gray-800 mb-4">GitHub Repository</h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(247, 48, 41, 0.6)' }}>
              Steel is proudly open-source. Run our sessions locally or self-hosted with our docker container.
            </p>
            <Button variant="outline" className="border-gray-400 text-gray-800 hover:bg-gray-50">
              steel-browser
            </Button>
          </div>
        </div>

        {/* Research Grants Section */}
        <div className="px-8 py-16 border-t" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>
          <div className="flex items-center space-x-16">
            <div className="flex-1">
              <h2 className="text-3xl font-light text-gray-800 mb-4">Research Grants</h2>
              <p className="text-lg mb-4" style={{ color: 'rgba(247, 48, 41, 0.6)' }}>
                If you're doing research for a school, send us an email from your school email: 
                to <span className="text-gray-800">research@steel.dev</span> for grants in the form of free credits.
              </p>
              
              <div className="mt-8">
                <h3 className="font-medium text-gray-800 mb-2">Eligibility</h3>
                <p className="text-sm" style={{ color: 'rgba(247, 48, 41, 0.6)' }}>
                  The Steel Research Grants program is open to anyone passionate about advancing AI through open source projects. Whether you're a seasoned researcher or a self-taught developer, we welcome your applications.
                </p>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="w-full h-64 rounded-lg" style={{ backgroundColor: 'rgba(0, 255, 255, 0.8)' }}>
                <div className="w-full h-full flex items-center justify-center text-white text-6xl font-light">
                  MAP
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ready to Build Section */}
        <div className="px-8 py-16 border-t" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>
          <div className="relative">
            <div className="absolute inset-0 rounded-lg" style={{ backgroundColor: 'rgba(247, 48, 41, 0.1)' }}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,48,41,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
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
      <footer className="border-t" style={{ borderColor: 'rgba(247, 48, 41, 0.1)' }}>
        <div className="max-w-[70rem] mx-auto px-8 py-12">
          <div className="flex justify-between">
            <div>
              <div className="w-8 h-8 rounded-sm flex items-center justify-center mb-4" style={{ backgroundColor: '#F73029' }}>
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <p className="text-sm mb-4" style={{ color: 'rgba(247, 48, 41, 0.6)' }}>
                A better way to take your LLMs online.
              </p>
              <p className="text-xs" style={{ color: 'rgba(247, 48, 41, 0.5)' }}>
                © Nen Labs, Inc. 2025.
              </p>
              <div className="flex items-center space-x-4 mt-2 text-xs">
                <span style={{ color: 'rgba(247, 48, 41, 0.5)' }}>Terms of Service</span>
                <span style={{ color: 'rgba(247, 48, 41, 0.5)' }}>Privacy Policy</span>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm" style={{ color: 'rgba(247, 48, 41, 0.6)' }}>All Systems Operational</span>
              </div>
            </div>
            
            <div className="flex space-x-16">
              <div>
                <h3 className="font-medium text-gray-800 mb-4">Platform</h3>
                <div className="space-y-2 text-sm">
                  <div style={{ color: 'rgba(247, 48, 41, 0.6)' }}>Docs</div>
                  <div style={{ color: 'rgba(247, 48, 41, 0.6)' }}>Status</div>
                  <div style={{ color: 'rgba(247, 48, 41, 0.6)' }}>Launch Week @ Steel</div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-4">Join the Community</h3>
                <div className="space-y-2 text-sm">
                  <div style={{ color: 'rgba(247, 48, 41, 0.6)' }}>X / Twitter</div>
                  <div style={{ color: 'rgba(247, 48, 41, 0.6)' }}>GitHub</div>
                  <div style={{ color: 'rgba(247, 48, 41, 0.6)' }}>Discord</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <Github className="w-8 h-8" style={{ color: 'rgba(247, 48, 41, 0.3)' }} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
