import { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showWarning, setShowWarning] = useState(false);
  
  // Inactivity timeout: 30 minutes = 30 * 60 * 1000 = 1,800,000 ms
  const INACTIVITY_TIMEOUT = 30 * 60 * 1000;
  // Warning timeout: 5 minutes before logout = 25 * 60 * 1000 = 1,500,000 ms
  const WARNING_TIMEOUT = 25 * 60 * 1000;
  
  const timeoutRef = useRef(null);
  const warningTimeoutRef = useRef(null);
  const lastActivityRef = useRef(Date.now());

  // Function to reset inactivity timers
  const resetInactivityTimer = useCallback(() => {
    if (!isAuthenticated) return;
    
    lastActivityRef.current = Date.now();
    setShowWarning(false);
    
    // Clear existing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (warningTimeoutRef.current) {
      clearTimeout(warningTimeoutRef.current);
    }
    
    // Set warning timeout (5 minutes before logout)
    warningTimeoutRef.current = setTimeout(() => {
      setShowWarning(true);
    }, WARNING_TIMEOUT);
    
    // Set logout timeout
    timeoutRef.current = setTimeout(() => {
      logout();
    }, INACTIVITY_TIMEOUT);
  }, [isAuthenticated]);

  // Function to handle user activity
  const handleActivity = useCallback(() => {
    if (isAuthenticated) {
      resetInactivityTimer();
    }
  }, [isAuthenticated, resetInactivityTimer]);

  // Function to dismiss warning and extend session
  const dismissWarning = useCallback(() => {
    setShowWarning(false);
    resetInactivityTimer();
  }, [resetInactivityTimer]);

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = () => {
      const token = localStorage.getItem('admin_token');
      const userData = localStorage.getItem('admin_user');
      
      if (token && userData) {
        try {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
          setIsAuthenticated(true);
        } catch (error) {
          console.error('Error parsing user data:', error);
          localStorage.removeItem('admin_token');
          localStorage.removeItem('admin_user');
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  // Set up activity listeners when authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      // Clear timeouts when not authenticated
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (warningTimeoutRef.current) {
        clearTimeout(warningTimeoutRef.current);
      }
      setShowWarning(false);
      return;
    }

    // Start inactivity timer
    resetInactivityTimer();

    // Add event listeners for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      // Cleanup event listeners
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
      
      // Clear timeouts on cleanup
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (warningTimeoutRef.current) {
        clearTimeout(warningTimeoutRef.current);
      }
    };
  }, [isAuthenticated, handleActivity, resetInactivityTimer]);

  const login = async (username, password) => {
    setLoading(true);
    
    try {
      // Simple hardcoded authentication
      if (username === 'admin' && password === 'admin2025') {
        const userData = {
          id: 1,
          username: 'admin',
          name: 'Blaze Briquettes Admin',
          role: 'admin',
          loginTime: new Date().toISOString()
        };
        
        const token = btoa(`${username}:${password}:${Date.now()}`);
        
        localStorage.setItem('admin_token', token);
        localStorage.setItem('admin_user', JSON.stringify(userData));
        
        setUser(userData);
        setIsAuthenticated(true);
        
        return { success: true, message: 'Login successful' };
      } else {
        return { success: false, message: 'Invalid username or password' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Login failed. Please try again.' };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    // Clear timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (warningTimeoutRef.current) {
      clearTimeout(warningTimeoutRef.current);
    }
    
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    setUser(null);
    setIsAuthenticated(false);
    setShowWarning(false);
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    showWarning,
    login,
    logout,
    dismissWarning
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
