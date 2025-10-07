import { useState } from "react";
import {
  Flame,
  Truck,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Users,
  Package,
  CreditCard,
  Shield,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import SEO from "../components/SEO";
import { localBusinessSchema, breadcrumbSchema } from "../data/structuredData";

const Order = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    quantity: "1",
    deliveryType: "standard",
    paymentMethod: "cash",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create order record
    const order = {
      id: Date.now(),
      orderId: `BB-${Date.now()}`,
      customerName: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      quantity: formData.quantity,
      deliveryType: formData.deliveryType,
      paymentMethod: formData.paymentMethod,
      notes: formData.notes,
      total: formData.quantity * 200, // KSh 200 per kg
      timestamp: new Date().toISOString(),
      status: "pending",
    };

    // Save to localStorage for admin
    const existingOrders = JSON.parse(
      localStorage.getItem("admin_orders") || "[]"
    );
    existingOrders.push(order);
    localStorage.setItem("admin_orders", JSON.stringify(existingOrders));

    console.log("Order submitted:", order);
    alert("Order submitted successfully! We will contact you soon.");

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      quantity: 1,
      deliveryType: "standard",
      paymentMethod: "mpesa",
      notes: "",
    });
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <SEO
        title="Order Premium Charcoal Briquettes Online - Blaze Briquettes Homabay, Kenya"
        description="Order premium charcoal briquettes online from Blaze Briquettes in Homabay, Kenya. Fast delivery, eco-friendly fuel. Order now from KSh 200/kg with countrywide delivery!"
        keywords="order charcoal briquettes Kenya, buy charcoal online Homabay, charcoal delivery Kenya, order fuel Nyanza, charcoal briquettes purchase, eco-friendly fuel order"
        canonical="/order"
        structuredData={[localBusinessSchema, breadcrumbSchema]}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-600 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-800 text-white text-sm font-bold mb-6 shadow-lg">
              <Package className="w-5 h-5 mr-2 animate-pulse" />
              Place Your Order
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Order{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Premium Briquettes
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Get your premium charcoal briquettes delivered anywhere in Kenya.
              Fast, reliable, and eco-friendly.
            </p>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-600 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Order Form */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">
                Order Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+254 715 607 720"
                  />
                </div>

                {/* Address Information */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Delivery Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your full delivery address"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Nairobi, Mombasa, Kisumu..."
                  />
                </div>

                {/* Product Selection */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Quantity *
                  </label>
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="1">1kg - KSh 200</option>
                    <option value="5">5kg - KSh 1,000</option>
                    <option value="10">10kg - KSh 1,800 (Save KSh 200)</option>
                    <option value="20">20kg - KSh 3,500 (Save KSh 500)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Delivery Type
                  </label>
                  <select
                    name="deliveryType"
                    value={formData.deliveryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="standard">
                      Standard Delivery (3-5 days)
                    </option>
                    <option value="express">
                      Express Delivery (1-2 days) - +KSh 200
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Payment Method
                  </label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="cash">Cash on Delivery</option>
                    <option value="mpesa">M-Pesa</option>
                    <option value="bank">Bank Transfer</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Place Order
                </button>
              </form>
            </div>

            {/* Order Summary & Info */}
            <div className="space-y-8">
              {/* Order Summary */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Order Summary
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Premium Briquettes</span>
                    <span className="text-white font-semibold">10 kg</span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Unit Price</span>
                    <span className="text-white font-semibold">
                      KSh 25 / kg
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Subtotal</span>
                    <span className="text-white font-semibold">KSh 250</span>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300">Delivery</span>
                    <span className="text-green-400 font-semibold">
                      From KSh 300
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-4 text-xl font-bold">
                    <span className="text-white">Total (approx.)</span>
                    <span className="text-green-400">KSh 550</span>
                  </div>
                </div>

                <div className="mt-6 text-sm text-gray-400">
                  <p>* Prices decrease with larger orders:</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>1 – 9 kg: KSh 30 / kg</li>
                    <li>10 – 49 kg: KSh 25 / kg</li>
                    <li>50 kg +: KSh 20 / kg</li>
                  </ul>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Need Help?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-900 rounded-lg">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Call Us</div>
                      <div className="text-gray-300 text-sm">
                        +254 715 607 720
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-900 rounded-lg">
                    <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email Us</div>
                      <div className="text-gray-300 text-sm">
                        info@blazebriquettes.co.ke
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">
                      100% Quality Guarantee
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Delivery from KSh 300</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">
                      Made from Recycled Materials
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">4-6 Hours Burn Time</span>
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

export default Order;
