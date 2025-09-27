import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  Eye,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Flame
} from 'lucide-react';
import SEO from '../components/SEO';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalContacts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    conversionRate: 0
  });

  const [recentContacts, setRecentContacts] = useState([]);
  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    // Load data from localStorage (hardcoded data)
    loadDashboardData();
  }, []);

  const loadDashboardData = () => {
    // Load contacts
    const contacts = JSON.parse(localStorage.getItem('admin_contacts') || '[]');
    setRecentContacts(contacts.slice(0, 5));

    // Load orders
    const orders = JSON.parse(localStorage.getItem('admin_orders') || '[]');
    setRecentOrders(orders.slice(0, 5));

    // Calculate stats
    const totalRevenue = orders.reduce((sum, order) => sum + (order.total || 0), 0);
    const conversionRate = contacts.length > 0 ? (orders.length / contacts.length * 100).toFixed(1) : 0;

    setStats({
      totalContacts: contacts.length,
      totalOrders: orders.length,
      totalRevenue: totalRevenue,
      conversionRate: conversionRate
    });
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

  return (
    <div className="space-y-6">
      <SEO 
        title="Admin Dashboard - Blaze Briquettes | Management Overview"
        description="Comprehensive admin dashboard for managing Blaze Briquettes business operations."
        keywords="admin dashboard, management, Blaze Briquettes admin, business overview"
        canonical="/admin/dashboard"
      />

      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your business.</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Blaze Briquettes</p>
              <p className="text-lg font-semibold text-gray-900">Admin Panel</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Contacts */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Contacts</p>
              <p className="text-3xl font-bold text-gray-900">{stats.totalContacts}</p>
              <p className="text-sm text-green-600 mt-1">+12% from last month</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Total Orders */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-3xl font-bold text-gray-900">{stats.totalOrders}</p>
              <p className="text-sm text-green-600 mt-1">+8% from last month</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-3xl font-bold text-gray-900">{formatCurrency(stats.totalRevenue)}</p>
              <p className="text-sm text-green-600 mt-1">+15% from last month</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
              <p className="text-3xl font-bold text-gray-900">{stats.conversionRate}%</p>
              <p className="text-sm text-green-600 mt-1">+3% from last month</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Contacts */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Recent Contacts</h3>
              <Link to="/admin/contacts" className="text-green-600 hover:text-green-700 text-sm font-medium">
                View all
              </Link>
            </div>
          </div>
          <div className="p-6">
            {recentContacts.length > 0 ? (
              <div className="space-y-4">
                {recentContacts.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {contact.name || 'Unknown Contact'}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {contact.email || contact.phone || 'No contact info'}
                      </p>
                    </div>
                    <div className="text-xs text-gray-500">
                      {formatDate(contact.timestamp || new Date().toISOString())}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No recent contacts</p>
                <p className="text-sm text-gray-400">Contacts will appear here when submitted</p>
              </div>
            )}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
              <Link to="/admin/orders" className="text-green-600 hover:text-green-700 text-sm font-medium">
                View all
              </Link>
            </div>
          </div>
          <div className="p-6">
            {recentOrders.length > 0 ? (
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <ShoppingCart className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {order.customerName || 'Unknown Customer'}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {order.quantity}kg - {formatCurrency(order.total || 0)}
                      </p>
                    </div>
                    <div className="text-xs text-gray-500">
                      {formatDate(order.timestamp || new Date().toISOString())}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <ShoppingCart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No recent orders</p>
                <p className="text-sm text-gray-400">Orders will appear here when placed</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/admin/contacts"
            className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
          >
            <Users className="w-6 h-6 text-blue-600 mr-3" />
            <div>
              <p className="font-medium text-gray-900">Manage Contacts</p>
              <p className="text-sm text-gray-600">View and respond to inquiries</p>
            </div>
          </Link>
          
          <Link
            to="/admin/orders"
            className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200"
          >
            <ShoppingCart className="w-6 h-6 text-green-600 mr-3" />
            <div>
              <p className="font-medium text-gray-900">Process Orders</p>
              <p className="text-sm text-gray-600">Manage customer orders</p>
            </div>
          </Link>
          
          <Link
            to="/admin/analytics"
            className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200"
          >
            <TrendingUp className="w-6 h-6 text-purple-600 mr-3" />
            <div>
              <p className="font-medium text-gray-900">View Analytics</p>
              <p className="text-sm text-gray-600">Business insights and reports</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
