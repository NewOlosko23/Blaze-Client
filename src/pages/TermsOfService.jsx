import { FileText, Scale, Shield, Truck, CreditCard, AlertTriangle, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import BackToTop from '../components/BackToTop';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <SEO 
        title="Terms of Service - Blaze Briquettes | Legal Terms & Conditions"
        description="Read our terms of service for Blaze Briquettes. Legal terms, conditions, and user agreements for our charcoal briquettes services in Kenya."
        keywords="terms of service, legal terms, user agreement, service conditions, Kenya legal, charcoal briquettes terms"
        canonical="/terms-of-service"
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
              <FileText className="w-5 h-5 mr-2 animate-pulse" />
              Legal Terms
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Terms of{' '}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before using our services. By using our website or services, you agree to these terms.
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
                <Scale className="w-8 h-8 mr-3 text-green-400" />
                Agreement to Terms
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                These Terms of Service ("Terms") govern your use of Blaze Briquettes' website and services. 
                By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">Important Notice</h3>
                    <p className="text-gray-300">
                      If you do not agree to these Terms, please do not use our services. 
                      We reserve the right to modify these Terms at any time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-8 h-8 mr-3 text-green-400" />
                Our Services
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">What We Provide</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span>Premium charcoal briquettes made from recycled materials</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span>Countrywide delivery across Kenya</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span>Customer support and order management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span>Online ordering and payment processing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Order Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Truck className="w-8 h-8 mr-3 text-green-400" />
                Order Terms & Conditions
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Pricing & Payment</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>All prices are in Kenyan Shillings (KES)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Payment required before delivery</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Accepted: M-Pesa, Bank Transfer, Cash</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Delivery charges start from KSh 300</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Delivery Terms</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Delivery within 2-5 business days</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Countrywide delivery available</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Recipient must be available for delivery</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Delivery address must be accurate</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">User Responsibilities</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Account Information</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Provide accurate and complete information</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Keep contact information up to date</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Maintain security of your account</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Notify us of any unauthorized use</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Prohibited Activities</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Using our services for illegal purposes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Attempting to hack or damage our systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Providing false or misleading information</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Reselling our products without permission</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Limitation of Liability</h2>
              
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Service Limitations</h3>
                    <p className="text-gray-300 leading-relaxed">
                      While we strive to provide the best service possible, we cannot guarantee that our services 
                      will be uninterrupted, error-free, or completely secure. We are not liable for any indirect, 
                      incidental, or consequential damages.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Product Use</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our charcoal briquettes are intended for cooking and heating purposes. Users are responsible 
                      for proper handling, storage, and use of our products. We are not liable for misuse or 
                      improper handling of our products.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Maximum Liability</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our total liability to you for any claims arising from these Terms or our services shall not 
                      exceed the amount you paid for the specific product or service that gave rise to the claim.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Refund Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Refund & Cancellation Policy</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Cancellation</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Orders can be cancelled before processing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Contact us immediately to cancel</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Processing begins within 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>No cancellation after dispatch</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">Refunds</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Refunds for cancelled orders within 5 days</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Quality issues: Full refund or replacement</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Delivery issues: Refund or redelivery</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Refunds processed to original payment method</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Governing Law</h2>
              
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Jurisdiction</h3>
                    <p className="text-gray-300 leading-relaxed">
                      These Terms are governed by the laws of Kenya. Any disputes arising from these Terms or 
                      our services will be subject to the exclusive jurisdiction of the courts of Kenya.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Dispute Resolution</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We encourage resolving disputes through direct communication. If a dispute cannot be resolved 
                      amicably, it will be subject to the legal process in Kenya.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Legal Inquiries</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">legal@blazebriquettes.co.ke</span>
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
                    <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
                    <div className="space-y-3 text-gray-300">
                      <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                      <div>Saturday: 9:00 AM - 4:00 PM</div>
                      <div>Sunday: Closed</div>
                      <div className="text-sm text-gray-400 mt-2">
                        Response time: 24-48 hours for legal inquiries
                      </div>
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

export default TermsOfService;
