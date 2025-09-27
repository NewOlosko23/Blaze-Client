import { useState, useEffect } from 'react';
import { Cookie, Settings, X, CheckCircle, AlertCircle } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
    
    // Initialize analytics and marketing cookies
    initializeCookies(consent);
  };

  const handleRejectAll = () => {
    const consent = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
    
    // Only initialize essential cookies
    initializeCookies(consent);
  };

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setIsVisible(false);
    setShowSettings(false);
    
    // Initialize cookies based on preferences
    initializeCookies(consent);
  };

  const initializeCookies = (consent) => {
    // Essential cookies (always enabled)
    if (consent.essential) {
      // Set essential cookies
      document.cookie = "essential_cookies=true; path=/; max-age=31536000"; // 1 year
    }

    // Analytics cookies
    if (consent.analytics) {
      // Initialize Google Analytics or other analytics
      document.cookie = "analytics_cookies=true; path=/; max-age=31536000";
      
      // Google Analytics initialization (if you have GA4)
      if (typeof gtag !== 'undefined') {
        gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    }

    // Marketing cookies
    if (consent.marketing) {
      document.cookie = "marketing_cookies=true; path=/; max-age=31536000";
      
      // Initialize marketing pixels
      if (typeof fbq !== 'undefined') {
        fbq('consent', 'grant');
      }
    }
  };

  const togglePreference = (type) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setShowSettings(false)}></div>
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700 p-6">
            {!showSettings ? (
              // Main banner
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">We Use Cookies</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We use cookies to enhance your experience, analyze site traffic, and personalize content. 
                      By clicking "Accept All", you consent to our use of cookies. You can customize your preferences or learn more in our{' '}
                      <a href="/cookies" className="text-green-400 hover:text-green-300 underline">Cookie Policy</a>.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Accept All
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="flex-1 bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Settings className="w-5 h-5 mr-2" />
                    Customize
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                  >
                    Reject All
                  </button>
                </div>
              </div>
            ) : (
              // Settings panel
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Cookie Preferences</h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  {/* Essential Cookies */}
                  <div className="bg-gray-700 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-white">Essential Cookies</h4>
                        <p className="text-sm text-gray-300">Required for website functionality</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-6 bg-green-600 rounded-full flex items-center justify-end px-1">
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                        <span className="text-sm text-gray-300">Always Active</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">
                      These cookies are necessary for the website to function and cannot be switched off.
                    </p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="bg-gray-700 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-white">Analytics Cookies</h4>
                        <p className="text-sm text-gray-300">Help us understand how you use our website</p>
                      </div>
                      <button
                        onClick={() => togglePreference('analytics')}
                        className={`w-10 h-6 rounded-full flex items-center transition-colors duration-200 ${
                          preferences.analytics ? 'bg-green-600 justify-end' : 'bg-gray-600 justify-start'
                        }`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </button>
                    </div>
                    <p className="text-sm text-gray-400">
                      These cookies collect information about how visitors use our website, such as which pages are visited most often.
                    </p>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="bg-gray-700 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-white">Marketing Cookies</h4>
                        <p className="text-sm text-gray-300">Used to deliver relevant advertisements</p>
                      </div>
                      <button
                        onClick={() => togglePreference('marketing')}
                        className={`w-10 h-6 rounded-full flex items-center transition-colors duration-200 ${
                          preferences.marketing ? 'bg-green-600 justify-end' : 'bg-gray-600 justify-start'
                        }`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </button>
                    </div>
                    <p className="text-sm text-gray-400">
                      These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-600">
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                  >
                    Save Preferences
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
