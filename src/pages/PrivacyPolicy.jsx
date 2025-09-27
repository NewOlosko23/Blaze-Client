import { Shield, Eye, Lock, Database, Users, Globe, Phone, Mail, MapPin, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import BackToTop from '../components/BackToTop';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <SEO 
        title="Privacy Policy - Blaze Briquettes | Data Protection & Privacy"
        description="Learn how Blaze Briquettes protects your personal information. Our comprehensive privacy policy covers data collection, usage, and protection in Kenya."
        keywords="privacy policy, data protection, personal information, Kenya privacy law, GDPR compliance, data security"
        canonical="/privacy-policy"
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
              <Shield className="w-5 h-5 mr-2 animate-pulse" />
              Data Protection
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy{' '}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
                Introduction
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Blaze Briquettes ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website or use our services.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                By using our website or services, you consent to the data practices described in this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Database className="w-8 h-8 mr-3 text-green-400" />
                Information We Collect
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Personal Information</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Name and contact information (email, phone number)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Delivery address and location data</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Payment information (processed securely through third-party providers)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Order history and preferences</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Technical Information</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>IP address and device information</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Browser type and version</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Operating system and device type</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Website usage data and analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Users className="w-8 h-8 mr-3 text-green-400" />
                How We Use Your Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Service Delivery</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Process and fulfill your orders</li>
                    <li>• Arrange delivery to your location</li>
                    <li>• Provide customer support</li>
                    <li>• Send order confirmations and updates</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Communication</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Respond to your inquiries</li>
                    <li>• Send important service updates</li>
                    <li>• Marketing communications (with consent)</li>
                    <li>• Newsletter and promotional content</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Analytics & Improvement</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Analyze website usage patterns</li>
                    <li>• Improve our services and website</li>
                    <li>• Understand customer preferences</li>
                    <li>• Optimize user experience</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Legal Compliance</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Comply with Kenyan laws</li>
                    <li>• Prevent fraud and abuse</li>
                    <li>• Protect our rights and interests</li>
                    <li>• Respond to legal requests</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Lock className="w-8 h-8 mr-3 text-green-400" />
                Data Protection & Security
              </h2>
              
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Security Measures</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>SSL encryption for all data transmission</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Secure servers and databases</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Regular security audits and updates</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Limited access to personal data</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Data Retention</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Order data: 7 years (legal requirement)</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Marketing data: Until consent withdrawn</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Analytics data: 2 years maximum</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Automatic deletion after retention period</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Globe className="w-8 h-8 mr-3 text-green-400" />
                Your Rights
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Access & Control</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Access your personal data</li>
                    <li>• Correct inaccurate information</li>
                    <li>• Delete your account and data</li>
                    <li>• Withdraw consent for marketing</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Data Portability</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Export your data in common formats</li>
                    <li>• Transfer data to other services</li>
                    <li>• Request data processing information</li>
                    <li>• Object to certain data processing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Phone className="w-8 h-8 mr-3 text-green-400" />
                Contact Us
              </h2>
              
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Data Protection Officer</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">privacy@blazebriquettes.co.ke</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">+254 715 607 720</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">Homabay, Nyanza, Kenya</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
                    <div className="space-y-3 text-gray-300">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-green-400" />
                        <span>General inquiries: 24-48 hours</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-green-400" />
                        <span>Data requests: 30 days maximum</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-green-400" />
                        <span>Urgent matters: Same day</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Policy Updates</h2>
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <p className="text-gray-300 text-lg leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review 
                  this Privacy Policy periodically for any changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default PrivacyPolicy;
