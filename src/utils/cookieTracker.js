// Cookie Tracking Utility for Blaze Briquettes
class CookieTracker {
  constructor() {
    this.consent = this.getConsent();
    this.initializeTracking();
  }

  // Get user's cookie consent preferences
  getConsent() {
    try {
      const stored = localStorage.getItem('cookieConsent');
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Error reading cookie consent:', error);
      return null;
    }
  }

  // Initialize tracking based on consent
  initializeTracking() {
    if (!this.consent) return;

    // Essential tracking (always enabled)
    this.trackEssential();

    // Analytics tracking
    if (this.consent.analytics) {
      this.trackAnalytics();
    }

    // Marketing tracking
    if (this.consent.marketing) {
      this.trackMarketing();
    }
  }

  // Essential tracking functions
  trackEssential() {
    // Track page views
    this.trackPageView();
    
    // Track user sessions
    this.trackSession();
    
    // Track form interactions
    this.trackFormInteractions();
  }

  // Analytics tracking functions
  trackAnalytics() {
    // Google Analytics tracking
    this.initializeGoogleAnalytics();
    
    // Custom analytics
    this.trackUserBehavior();
    this.trackPerformance();
    this.trackEngagement();
  }

  // Marketing tracking functions
  trackMarketing() {
    // Facebook Pixel
    this.initializeFacebookPixel();
    
    // Google Ads
    this.initializeGoogleAds();
    
    // Email marketing
    this.trackEmailMarketing();
  }

  // Page view tracking
  trackPageView() {
    const pageData = {
      url: window.location.href,
      title: document.title,
      timestamp: new Date().toISOString(),
      referrer: document.referrer,
      userAgent: navigator.userAgent
    };

    // Store in localStorage for analytics
    this.storeAnalyticsData('page_views', pageData);
    
    // Send to server (if you have a backend)
    this.sendToServer('page_view', pageData);
  }

  // Session tracking
  trackSession() {
    const sessionId = this.generateSessionId();
    const sessionData = {
      sessionId: sessionId,
      startTime: new Date().toISOString(),
      deviceInfo: this.getDeviceInfo(),
      location: this.getLocationInfo()
    };

    // Store session data
    sessionStorage.setItem('session_data', JSON.stringify(sessionData));
    
    // Track session duration
    this.trackSessionDuration();
  }

  // User behavior tracking
  trackUserBehavior() {
    // Track clicks
    document.addEventListener('click', (event) => {
      const clickData = {
        element: event.target.tagName,
        className: event.target.className,
        id: event.target.id,
        text: event.target.textContent?.substring(0, 100),
        timestamp: new Date().toISOString(),
        url: window.location.href
      };
      
      this.storeAnalyticsData('clicks', clickData);
    });

    // Track scroll depth
    this.trackScrollDepth();
    
    // Track time on page
    this.trackTimeOnPage();
    
    // Track form submissions
    this.trackFormSubmissions();
  }

  // Scroll depth tracking
  trackScrollDepth() {
    let maxScroll = 0;
    
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Track milestone scroll depths
        if ([25, 50, 75, 90, 100].includes(scrollPercent)) {
          this.storeAnalyticsData('scroll_depth', {
            percent: scrollPercent,
            timestamp: new Date().toISOString(),
            url: window.location.href
          });
        }
      }
    });
  }

  // Time on page tracking
  trackTimeOnPage() {
    const startTime = Date.now();
    
    window.addEventListener('beforeunload', () => {
      const timeOnPage = Date.now() - startTime;
      
      this.storeAnalyticsData('time_on_page', {
        duration: timeOnPage,
        timestamp: new Date().toISOString(),
        url: window.location.href
      });
    });
  }

  // Form interaction tracking
  trackFormInteractions() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      // Track form starts
      form.addEventListener('focusin', (event) => {
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
          this.storeAnalyticsData('form_interaction', {
            action: 'form_start',
            formId: form.id || 'unnamed',
            field: event.target.name || event.target.id,
            timestamp: new Date().toISOString()
          });
        }
      });

      // Track form submissions
      form.addEventListener('submit', (event) => {
        const formData = new FormData(form);
        const formFields = {};
        
        for (let [key, value] of formData.entries()) {
          formFields[key] = value ? 'filled' : 'empty';
        }

        this.storeAnalyticsData('form_submission', {
          formId: form.id || 'unnamed',
          fields: formFields,
          timestamp: new Date().toISOString(),
          url: window.location.href
        });
      });
    });
  }

  // Form submission tracking
  trackFormSubmissions() {
    // Track order form submissions
    const orderForms = document.querySelectorAll('form[action*="order"], form[data-form="order"]');
    
    orderForms.forEach(form => {
      form.addEventListener('submit', (event) => {
        this.storeAnalyticsData('order_form_submission', {
          timestamp: new Date().toISOString(),
          url: window.location.href,
          formData: this.extractFormData(form)
        });
      });
    });
  }

  // Performance tracking
  trackPerformance() {
    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      
      this.storeAnalyticsData('performance', {
        loadTime: loadTime,
        timestamp: new Date().toISOString(),
        url: window.location.href
      });
    });
  }

  // Engagement tracking
  trackEngagement() {
    // Track button clicks
    const buttons = document.querySelectorAll('button, a[role="button"]');
    
    buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        this.storeAnalyticsData('button_clicks', {
          text: event.target.textContent?.substring(0, 50),
          className: event.target.className,
          id: event.target.id,
          timestamp: new Date().toISOString(),
          url: window.location.href
        });
      });
    });
  }

  // Google Analytics initialization
  initializeGoogleAnalytics() {
    // Initialize GA4 if available
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  }

  // Facebook Pixel initialization
  initializeFacebookPixel() {
    if (typeof fbq !== 'undefined') {
      fbq('consent', 'grant');
    }
  }

  // Google Ads initialization
  initializeGoogleAds() {
    // Initialize Google Ads tracking
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'ad_storage': 'granted'
      });
    }
  }

  // Email marketing tracking
  trackEmailMarketing() {
    // Track newsletter signups
    const newsletterForms = document.querySelectorAll('form[data-form="newsletter"]');
    
    newsletterForms.forEach(form => {
      form.addEventListener('submit', (event) => {
        this.storeAnalyticsData('newsletter_signup', {
          timestamp: new Date().toISOString(),
          url: window.location.href
        });
      });
    });
  }

  // Session duration tracking
  trackSessionDuration() {
    const startTime = Date.now();
    
    window.addEventListener('beforeunload', () => {
      const sessionDuration = Date.now() - startTime;
      
      this.storeAnalyticsData('session_duration', {
        duration: sessionDuration,
        timestamp: new Date().toISOString()
      });
    });
  }

  // Store analytics data
  storeAnalyticsData(type, data) {
    try {
      const key = `analytics_${type}`;
      const existing = JSON.parse(localStorage.getItem(key) || '[]');
      const updated = [...existing, data];
      
      // Keep only last 100 entries per type
      if (updated.length > 100) {
        updated.splice(0, updated.length - 100);
      }
      
      localStorage.setItem(key, JSON.stringify(updated));
    } catch (error) {
      console.error('Error storing analytics data:', error);
    }
  }

  // Send data to server
  sendToServer(eventType, data) {
    // This would send data to your backend server
    // For now, we'll just log it
    console.log(`Sending ${eventType} to server:`, data);
    
    // Example of how you might send to a server:
    // fetch('/api/analytics', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ eventType, data })
    // });
  }

  // Generate session ID
  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // Get device information
  getDeviceInfo() {
    return {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight
    };
  }

  // Get location information (approximate)
  getLocationInfo() {
    // This would typically use a geolocation service
    return {
      country: 'Kenya', // Default for Blaze Briquettes
      region: 'Nyanza',
      city: 'Homabay'
    };
  }

  // Extract form data
  extractFormData(form) {
    const formData = new FormData(form);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
      data[key] = value ? 'provided' : 'empty';
    }
    
    return data;
  }

  // Get analytics data
  getAnalyticsData(type) {
    try {
      const key = `analytics_${type}`;
      return JSON.parse(localStorage.getItem(key) || '[]');
    } catch (error) {
      console.error('Error reading analytics data:', error);
      return [];
    }
  }

  // Clear analytics data
  clearAnalyticsData() {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith('analytics_')) {
        localStorage.removeItem(key);
      }
    });
  }
}

// Initialize cookie tracker
const cookieTracker = new CookieTracker();

export default cookieTracker;
