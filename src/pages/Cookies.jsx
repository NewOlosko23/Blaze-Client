import { Cookie, Eye, Settings, Shield, BarChart, Users, Target, Database, AlertCircle, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import BackToTop from '../components/BackToTop';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <SEO 
        title="Cookie Policy - Blaze Briquettes | Cookie Usage & Tracking"
        description="Learn about our cookie usage, tracking technologies, and how we use cookies to improve your experience on Blaze Briquettes website."
        keywords="cookie policy, tracking cookies, analytics cookies, privacy cookies, website cookies, user tracking"
        canonical="/cookies"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-800 text-white text-sm font-bold mb-6 shadow-lg">
              <Cookie className="w-5 h-5 mr-2 animate-pulse" />
              Cookie Policy
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Cookie{' '}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Learn about how we use cookies and tracking technologies to enhance your experience and improve our services.
            </p>
            <div className="mt-8 text-sm text-gray-400">
              Last updated: January {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-700">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Eye className="w-8 h-8 mr-3 text-green-400" />
                What Are Cookies?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our site.
              </p>
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-blue-400 mb-2">Important Notice</h3>
                    <p className="text-gray-300">
                      By continuing to use our website, you consent to our use of cookies as described in this policy. 
                      You can manage your cookie preferences at any time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Settings className="w-8 h-8 mr-3 text-green-400" />
                Types of Cookies We Use
              </h2>
              
              <div className="space-y-8">
                {/* Essential Cookies */}
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <div className="flex items-center mb-4">
                    <Shield className="w-6 h-6 text-green-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">Essential Cookies</h3>
                    <span className="ml-auto bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Required</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Purpose:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• User authentication and login</li>
                        <li>• Shopping cart functionality</li>
                        <li>• Security and fraud prevention</li>
                        <li>• Basic website functionality</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Examples:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Session management</li>
                        <li>• Form data retention</li>
                        <li>• Security tokens</li>
                        <li>• User preferences</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <div className="flex items-center mb-4">
                    <BarChart className="w-6 h-6 text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">Analytics Cookies</h3>
                    <span className="ml-auto bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Optional</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    These cookies help us understand how visitors interact with our website by collecting anonymous information.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Data Collected:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Page views and visits</li>
                        <li>• Time spent on pages</li>
                        <li>• Click patterns and navigation</li>
                        <li>• Device and browser information</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Tools Used:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Google Analytics</li>
                        <li>• Custom tracking scripts</li>
                        <li>• Heat mapping tools</li>
                        <li>• Performance monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-purple-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">Marketing Cookies</h3>
                    <span className="ml-auto bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Optional</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    These cookies are used to deliver relevant advertisements and track the effectiveness of our marketing campaigns.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Purpose:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Personalized advertisements</li>
                        <li>• Campaign effectiveness</li>
                        <li>• Retargeting visitors</li>
                        <li>• Social media integration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Platforms:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Facebook Pixel</li>
                        <li>• Google Ads</li>
                        <li>• Social media platforms</li>
                        <li>• Email marketing tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Tracking Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Database className="w-8 h-8 mr-3 text-green-400" />
                Detailed Tracking Information
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">User Behavior Tracking</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Navigation Patterns</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-1" />
                          <span>Pages visited and time spent</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-1" />
                          <span>Click-through rates on buttons</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-1" />
                          <span>Scroll depth and engagement</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-1" />
                          <span>Exit points and bounce rates</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Device Information</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-1" />
                          <span>Device type and operating system</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-1" />
                          <span>Browser type and version</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-1" />
                          <span>Screen resolution and viewport</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-1" />
                          <span>Network connection type</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Personal Data Collection</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Automatically Collected</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-1" />
                          <span>IP address and location data</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-1" />
                          <span>Referral source and campaign data</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-1" />
                          <span>User agent and device fingerprint</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-1" />
                          <span>Session duration and frequency</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">User-Provided Data</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-1" />
                          <span>Contact form submissions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-1" />
                          <span>Order and delivery information</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-1" />
                          <span>Newsletter subscriptions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-1" />
                          <span>Customer feedback and reviews</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookie Management */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Settings className="w-8 h-8 mr-3 text-green-400" />
                Managing Your Cookies
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Browser Settings</h3>
                  <p className="text-gray-300 mb-4">
                    You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Chrome</h4>
                      <p className="text-gray-300 text-sm">
                        Settings → Privacy and Security → Cookies and other site data
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Firefox</h4>
                      <p className="text-gray-300 text-sm">
                        Options → Privacy & Security → Cookies and Site Data
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Safari</h4>
                      <p className="text-gray-300 text-sm">
                        Preferences → Privacy → Manage Website Data
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Edge</h4>
                      <p className="text-gray-300 text-sm">
                        Settings → Cookies and site permissions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Our Cookie Banner</h3>
                  <p className="text-gray-300 mb-4">
                    When you first visit our website, you'll see a cookie consent banner where you can:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span>Accept all cookies for the best experience</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span>Customize your cookie preferences</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span>Reject non-essential cookies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span>Change your preferences anytime</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Third-Party Services</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Analytics Services</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Google Analytics</h4>
                      <p className="text-gray-300 text-sm mb-3">
                        We use Google Analytics to understand website traffic and user behavior. 
                        This service may set cookies on your device.
                      </p>
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm">
                        Google Privacy Policy →
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Custom Analytics</h4>
                      <p className="text-gray-300 text-sm mb-3">
                        Our own analytics system tracks user interactions to improve our services 
                        and understand customer preferences.
                      </p>
                      <span className="text-gray-400 text-sm">Data stored securely on our servers</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Social Media Integration</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Facebook Integration</h4>
                      <p className="text-gray-300 text-sm mb-3">
                        Social media buttons and sharing features may set cookies from Facebook 
                        and other social platforms.
                      </p>
                      <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm">
                        Facebook Privacy Policy →
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Other Platforms</h4>
                      <p className="text-gray-300 text-sm mb-3">
                        Twitter, Instagram, and LinkedIn integrations may also set cookies 
                        when you interact with social features.
                      </p>
                      <span className="text-gray-400 text-sm">Check individual platform policies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Questions About Cookies?</h2>
              
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">privacy@blazebriquettes.co.ke</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">+254 715 607 720</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
                    <div className="space-y-3 text-gray-300">
                      <div>Cookie inquiries: 24-48 hours</div>
                      <div>Privacy concerns: Same day</div>
                      <div>Technical support: 2-4 hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default Cookies;
