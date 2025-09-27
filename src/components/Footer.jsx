import { Link } from 'react-router-dom';
import { Flame, Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden min-h-[400px] border-t-4 border-green-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Flame className="text-white" size={24} />
                  </div>
                  <span className="text-2xl font-bold text-white">Blaze</span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Premium charcoal briquettes made from 100% recycled materials. 
                  Powering Kenya's sustainable future, one fire at a time.
                </p>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/people/BLAZE-Charcoal/61578335618851/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200 hover:scale-110 transform">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.twitter.com/blazebriquettes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200 hover:scale-110 transform">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/blazebriquettes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200 hover:scale-110 transform">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/blazebriquettes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200 hover:scale-110 transform">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Products</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Contact</Link></li>
              <li><Link to="/admin/login" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Admin Login</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Products</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Premium Briquettes</li>
              <li className="text-gray-300">Bulk Orders</li>
              <li className="text-gray-300">Wholesale</li>
              <li className="text-gray-300">Custom Solutions</li>
              <li className="text-gray-300">Delivery Service</li>
            </ul>
          </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <div className="text-gray-300 text-sm">+254 715 607 720</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-gray-300 text-sm">info@blazebriquettes.co.ke</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Address</div>
                      <div className="text-gray-300 text-sm">Homabay, Kenya</div>
                    </div>
                  </div>
                </div>
              </div>
        </div>

            {/* Newsletter Signup */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Stay Updated</h4>
                  <p className="text-gray-300">Get the latest news about our products and environmental impact.</p>
                </div>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent hover:border-green-500 transition-colors duration-200"
                  />
                  <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 hover:scale-105 transform shadow-lg hover:shadow-xl">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-gray-400 text-sm">
                  © {currentYear} Blaze Briquettes. All rights reserved. Made with ❤️ in Kenya.
                </div>
                <div className="flex space-x-6 text-sm">
                  <Link to="/privacy-policy" className="text-gray-400 hover:text-green-400 transition-colors duration-200 hover:underline">Privacy Policy</Link>
                  <Link to="/terms-of-service" className="text-gray-400 hover:text-green-400 transition-colors duration-200 hover:underline">Terms of Service</Link>
                  <Link to="/cookies" className="text-gray-400 hover:text-green-400 transition-colors duration-200 hover:underline">Cookies</Link>
                </div>
              </div>
            </div>
      </div>
    </footer>
  );
};

export default Footer;

