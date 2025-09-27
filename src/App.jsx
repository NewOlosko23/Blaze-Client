import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from './components/AdminLayout';
import Home from './pages/Home';
import Order from './pages/Order';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Cookies from './pages/Cookies';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminContacts from './pages/AdminContacts';
import AdminOrders from './pages/AdminOrders';
import AdminAnalytics from './pages/AdminAnalytics';
import AdminSettings from './pages/AdminSettings';
import cookieTracker from './utils/cookieTracker';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen font-lexend flex flex-col overflow-x-hidden">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={
                <>
                  <Header />
                  <main className="flex-grow">
                    <Home />
                  </main>
                  <Footer />
                  <CookieBanner />
                </>
              } />
              <Route path="/order" element={
                <>
                  <Header />
                  <main className="flex-grow">
                    <Order />
                  </main>
                  <Footer />
                  <CookieBanner />
                </>
              } />
              <Route path="/privacy-policy" element={
                <>
                  <Header />
                  <main className="flex-grow">
                    <PrivacyPolicy />
                  </main>
                  <Footer />
                  <CookieBanner />
                </>
              } />
              <Route path="/terms-of-service" element={
                <>
                  <Header />
                  <main className="flex-grow">
                    <TermsOfService />
                  </main>
                  <Footer />
                  <CookieBanner />
                </>
              } />
              <Route path="/cookies" element={
                <>
                  <Header />
                  <main className="flex-grow">
                    <Cookies />
                  </main>
                  <Footer />
                  <CookieBanner />
                </>
              } />
              
              {/* Admin Routes - No Header/Footer */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <AdminLayout>
                    <AdminDashboard />
                  </AdminLayout>
                </ProtectedRoute>
              } />
              <Route path="/admin/dashboard" element={
                <ProtectedRoute>
                  <AdminLayout>
                    <AdminDashboard />
                  </AdminLayout>
                </ProtectedRoute>
              } />
              <Route path="/admin/contacts" element={
                <ProtectedRoute>
                  <AdminLayout>
                    <AdminContacts />
                  </AdminLayout>
                </ProtectedRoute>
              } />
              <Route path="/admin/orders" element={
                <ProtectedRoute>
                  <AdminLayout>
                    <AdminOrders />
                  </AdminLayout>
                </ProtectedRoute>
              } />
              <Route path="/admin/analytics" element={
                <ProtectedRoute>
                  <AdminLayout>
                    <AdminAnalytics />
                  </AdminLayout>
                </ProtectedRoute>
              } />
              <Route path="/admin/settings" element={
                <ProtectedRoute>
                  <AdminLayout>
                    <AdminSettings />
                  </AdminLayout>
                </ProtectedRoute>
              } />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
