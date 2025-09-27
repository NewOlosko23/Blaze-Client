import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  DollarSign,
  Eye,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Filter,
  Download
} from 'lucide-react';
import SEO from '../components/SEO';

const AdminAnalytics = () => {
  const [analytics, setAnalytics] = useState({
    pageViews: 0,
    uniqueVisitors: 0,
    contacts: 0,
    orders: 0,
    revenue: 0,
    conversionRate: 0
  });

  const [recentActivity, setRecentActivity] = useState([]);
  const [topPages, setTopPages] = useState([]);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = () => {
    // Load contacts and orders
    const contacts = JSON.parse(localStorage.getItem('admin_contacts') || '[]');
    const orders = JSON.parse(localStorage.getItem('admin_orders') || '[]');
    
    // Load analytics data from localStorage
    const pageViews = JSON.parse(localStorage.getItem('analytics_page_views') || '[]');
    const clicks = JSON.parse(localStorage.getItem('analytics_clicks') || '[]');
    const formSubmissions = JSON.parse(localStorage.getItem('analytics_form_submission') || '[]');
    
    // Calculate metrics
    const totalRevenue = orders.reduce((sum, order) => sum + (order.total || 0), 0);
    const conversionRate = contacts.length > 0 ? (orders.length / contacts.length * 100).toFixed(1) : 0;
    
    // Get unique visitors (simplified)
    const uniqueVisitors = new Set(pageViews.map(view => view.userAgent)).size;
    
    setAnalytics({
      pageViews: pageViews.length,
      uniqueVisitors: uniqueVisitors,
      contacts: contacts.length,
      orders: orders.length,
      revenue: totalRevenue,
      conversionRate: conversionRate
    });

    // Set recent activity
    const allActivity = [
      ...pageViews.slice(-5).map(view => ({ ...view, type: 'page_view', icon: Eye })),
      ...contacts.slice(-5).map(contact => ({ ...contact, type: 'contact', icon: Users })),
      ...orders.slice(-5).map(order => ({ ...order, type: 'order', icon: ShoppingCart }))
    ].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 10);

    setRecentActivity(allActivity);

    // Set top pages
    const pageCounts = {};
    pageViews.forEach(view => {
      const url = view.url || 'Unknown';
      pageCounts[url] = (pageCounts[url] || 0) + 1;
    });
    
    const topPagesData = Object.entries(pageCounts)
      .map(([url, count]) => ({ url, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
    
    setTopPages(topPagesData);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES'
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-KE', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'page_view': return <Eye className="w-4 h-4 text-blue-600" />;
      case 'contact': return <Users className="w-4 h-4 text-green-600" />;
      case 'order': return <ShoppingCart className="w-4 h-4 text-purple-600" />;
      default: return <Eye className="w-4 h-4 text-gray-600" />;
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'page_view': return 'bg-blue-100 text-blue-800';
      case 'contact': return 'bg-green-100 text-green-800';
      case 'order': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <SEO 
        title="Analytics Dashboard - Blaze Briquettes Admin | Business Insights"
        description="Comprehensive analytics and insights for Blaze Briquettes business performance."
        keywords="analytics dashboard, business insights, performance metrics, Blaze Briquettes admin"
        canonical="/admin/analytics"
      />

      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600 mt-2">Business insights and performance metrics</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <BarChart className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Updated</p>
              <p className="text-lg font-semibold text-gray-900">{formatDate(new Date().toISOString())}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Page Views</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.pageViews}</p>
              <p className="text-sm text-green-600 mt-1">+12% from last month</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Unique Visitors</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.uniqueVisitors}</p>
              <p className="text-sm text-green-600 mt-1">+8% from last month</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-3xl font-bold text-gray-900">{formatCurrency(analytics.revenue)}</p>
              <p className="text-sm text-green-600 mt-1">+15% from last month</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Contacts</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.contacts}</p>
              <p className="text-sm text-green-600 mt-1">+5% from last month</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Orders</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.orders}</p>
              <p className="text-sm text-green-600 mt-1">+10% from last month</p>
            </div>
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
              <p className="text-3xl font-bold text-gray-900">{analytics.conversionRate}%</p>
              <p className="text-sm text-green-600 mt-1">+3% from last month</p>
            </div>
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-pink-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                View all
              </button>
            </div>
          </div>
          <div className="p-6">
            {recentActivity.length > 0 ? (
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {activity.type === 'page_view' && 'Page viewed'}
                        {activity.type === 'contact' && 'New contact submission'}
                        {activity.type === 'order' && 'New order placed'}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {activity.url || activity.name || activity.customerName || 'Unknown'}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getActivityColor(activity.type)}`}>
                        {activity.type}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatDate(activity.timestamp || new Date().toISOString())}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <BarChart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No recent activity</p>
                <p className="text-sm text-gray-400">Activity will appear here as users interact with the site</p>
              </div>
            )}
          </div>
        </div>

        {/* Top Pages */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Top Pages</h3>
              <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                View all
              </button>
            </div>
          </div>
          <div className="p-6">
            {topPages.length > 0 ? (
              <div className="space-y-4">
                {topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {page.url.replace(window.location.origin, '') || 'Home'}
                        </p>
                        <p className="text-xs text-gray-500">Page views</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">{page.count}</p>
                      <p className="text-xs text-gray-500">views</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Eye className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No page data available</p>
                <p className="text-sm text-gray-400">Page views will appear here as users visit your site</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Export and Actions */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Data Export</h3>
            <p className="text-gray-600 mt-1">Export analytics data for further analysis</p>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Filter className="w-4 h-4 mr-2" />
              Filter Data
            </button>
            <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
