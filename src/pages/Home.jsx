import {
  ChefHat,
  DollarSign,
  Flame,
  House,
  Leaf,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import BackToTop from "../components/BackToTop";
import SEO from "../components/SEO";
import {
  localBusinessSchema,
  organizationSchema,
  productSchema,
} from "../data/structuredData";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <SEO
        title="Blaze Briquettes - Premium Charcoal Briquettes in Homabay, Kenya | Eco-Friendly Fuel"
        description="Premium charcoal briquettes made from recycled materials in Homabay, Nyanza, Kenya. Countrywide delivery, eco-friendly fuel for cooking and heating. Order now from KSh 200/kg!"
        keywords="charcoal briquettes Kenya, Homabay charcoal, Nyanza fuel, eco-friendly charcoal, recycled briquettes, cooking fuel Kenya, heating fuel, charcoal delivery Kenya, Homabay Nyanza, sustainable fuel Kenya"
        structuredData={[
          localBusinessSchema,
          organizationSchema,
          productSchema,
        ]}
      />
      {/* Modern Hero Section */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        itemScope
        itemType="https://schema.org/Product"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 pt-20 sm:pt-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 mt-5 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                Trusted by 800+ customers
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                  itemProp="name"
                >
                  Premium{" "}
                  <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                    Charcoal Briquettes
                  </span>{" "}
                  for Every Need
                </h1>
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl">
                  High-quality charcoal briquettes for cooking, heating, and
                  grilling. Long-lasting, efficient, and perfect for your home
                  or business needs.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Long burning time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Consistent heat output</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Easy to light</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">Minimal ash production</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/order"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Order Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Link>
                <button
                  onClick={() => {
                    const element = document.getElementById("products");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-lg hover:border-green-400 hover:text-green-400 transition-colors duration-200 text-sm sm:text-base"
                >
                  View Products
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-600 border-2 border-white"
                      ></div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-200">
                    <div className="font-semibold">4.5/5 rating</div>
                    <div>from 477 reviews</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                        <Flame className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-lg">
                          Premium Charcoal Briquettes
                        </div>
                        <p className="text-sm text-gray-500">
                          High-Quality Fuel
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-700">
                        200
                      </div>
                      <div className="text-sm text-gray-500">per kilo</div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900">
                        4-6 hrs
                      </div>
                      <div className="text-sm text-gray-500">Burn Time</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900">
                        20kg
                      </div>
                      <div className="text-sm text-gray-500">Bag Weight</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Heat Output</span>
                      <span className="font-semibold text-green-700">High</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-700" />
                      <span>Long burning time</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-700" />
                      <span>Easy to light</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-700" />
                      <span>Minimal ash</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    In Stock
                  </span>
                </div>
                <div className="text-2xl font-bold text-green-700 mt-1">
                  500+
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-green-700" />
                  <span className="text-sm font-medium text-gray-700">
                    Happy Customers
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mt-1">747</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Unique Design */}
      <section id="about" className="py-20 bg-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm font-bold mb-8 shadow-lg">
              <Flame className="w-5 h-5 mr-2 animate-pulse" />
              Why Blaze Briquettes?
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">
              The{" "}
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Fire
              </span>{" "}
              That Never Dies
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience the difference with charcoal briquettes engineered for
              cooking and heating. Not just fuel – it's the foundation of
              perfect fire.
            </p>
          </div>

          {/* Unique Feature Showcase */}
          <div className="space-y-16">
            {/* Feature 1 - Heat Performance */}
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
                      <Flame className="text-white" size={40} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">
                        Consistent Heat
                      </h3>
                      <p className="text-red-400 font-semibold">
                        4-6 Hours of Perfect Fire
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Our briquettes maintain steady temperature throughout your
                    entire cooking session. No more adjusting vents or adding
                    fuel mid-cook.
                  </p>
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-500">
                        450°C
                      </div>
                      <div className="text-sm text-gray-400">
                        Peak Temperature
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-500">
                        4-6h
                      </div>
                      <div className="text-sm text-gray-400">Burn Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-500">
                        95%
                      </div>
                      <div className="text-sm text-gray-400">
                        Heat Retention
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 shadow-2xl">
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-white mb-2">
                        Heat Curve
                      </div>
                      <div className="text-gray-400">Temperature over time</div>
                    </div>
                    <div className="relative h-32 bg-gray-900 rounded-lg p-4">
                      <div className="absolute inset-4">
                        <div className="w-full h-full bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg flex items-end">
                          <div className="w-full h-3/4 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg opacity-80"></div>
                        </div>
                      </div>
                      <div className="absolute top-2 left-4 text-xs text-gray-400">
                        450°C
                      </div>
                      <div className="absolute bottom-2 left-4 text-xs text-gray-400">
                        0h
                      </div>
                      <div className="absolute bottom-2 right-4 text-xs text-gray-400">
                        6h
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 - Ash Comparison */}
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 shadow-2xl">
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-white mb-2">
                        Ash Comparison
                      </div>
                      <div className="text-gray-400">
                        Traditional vs Blaze Briquettes
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                        <span className="text-white font-semibold">
                          Traditional Charcoal
                        </span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 h-4 bg-gray-600 rounded-full">
                            <div className="w-full h-full bg-gray-500 rounded-full"></div>
                          </div>
                          <span className="text-gray-400 text-sm">100%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                        <span className="text-white font-semibold">
                          Blaze Briquettes
                        </span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 h-4 bg-gray-600 rounded-full">
                            <div className="w-2 h-full bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-green-400 text-sm">10%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl">
                      <Leaf className="text-white" size={40} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">
                        Minimal Ash
                      </h3>
                      <p className="text-green-400 font-semibold">
                        90% Less Cleanup
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Clean burning technology means less mess, easier cleanup,
                    and better air quality for your cooking environment.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <div className="text-2xl font-bold text-green-500">
                        90%
                      </div>
                      <div className="text-sm text-gray-400">Less Ash</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <div className="text-2xl font-bold text-blue-500">
                        5min
                      </div>
                      <div className="text-sm text-gray-400">Cleanup Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 - Cooking Applications */}
            <div className="relative">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-white mb-4">
                  Perfect for Every Fire
                </h3>
                <p className="text-xl text-gray-300">
                  From backyard grilling to industrial heating
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-orange-500 transition-colors duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Flame className="text-white" size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Grilling
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Perfect sear marks, even cooking
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <House className="text-white" size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Heating
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Long-lasting warmth for any space
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-colors duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Star className="text-white" size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Smoking
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Low, slow, and consistent
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="products"
        className="py-20 bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-600 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-800 text-white text-sm font-bold mb-8 shadow-lg">
              <DollarSign className="w-5 h-5 mr-2 animate-pulse" />
              Affordable Pricing
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">
              Simple,{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Transparent
              </span>{" "}
              Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Quality charcoal briquettes at unbeatable prices. No hidden fees,
              no surprises.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Single Purchase */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Flame className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Single Purchase
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-green-400">
                    KSh 30
                  </span>
                  <span className="text-gray-300 text-lg">/kg</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Up to 9 kg of premium briquettes</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>4–6 hours burn time per kg</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Countrywide delivery from KSh 300</span>
                  </li>
                </ul>
                <Link
                  to="/order"
                  className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors duration-200 shadow-lg hover:shadow-xl inline-block text-center"
                >
                  Order Now
                </Link>
              </div>
            </div>

            {/* Bulk Purchase */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-green-500 relative hover:border-green-400 transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-green-700 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Star className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Bulk Purchase
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-green-400">
                    KSh 25
                  </span>
                  <span className="text-gray-300 text-lg">/kg</span>
                  <div className="text-sm text-green-400 font-semibold mt-2">
                    Save 17%
                  </div>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>10 – 49 kg of premium briquettes</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Extended burn time (100 – 140 hours total)</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Delivery from KSh 300</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Link
                  to="/order"
                  className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors duration-200 shadow-lg hover:shadow-xl inline-block text-center"
                >
                  Order 20 kg
                </Link>
              </div>
            </div>

            {/* Wholesale */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <House className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Wholesale
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-green-400">
                    KSh 20
                  </span>
                  <span className="text-gray-300 text-lg">/kg</span>
                  <div className="text-sm text-green-400 font-semibold mt-2">
                    Save 33%
                  </div>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>50 kg and above</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Long burn time (400 + hours total)</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Free local delivery</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Business partnership discounts</span>
                  </li>
                </ul>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Contact for Wholesale
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">
              Delivery charges start from KSh 300
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span>Delivery from KSh 300 nationwide</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span>Quality guaranteed</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span>Made from recycled materials</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              Clean Energy Impact
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Powering Kenya's{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                Green Future
              </span>
            </h2>
            <p className="text-xl text-green-100 max-w-4xl mx-auto">
              Our charcoal briquettes are made from 100% recycled materials,
              reducing waste and contributing to Kenya's environmental
              sustainability goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Environmental Benefits
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <Leaf className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        Waste Reduction
                      </div>
                      <div className="text-green-200 text-sm">
                        Diverts 2,000+ tons of waste annually
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                      <Flame className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        Carbon Footprint
                      </div>
                      <div className="text-green-200 text-sm">
                        75% lower emissions than traditional charcoal
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                      <Star className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        Sustainable Production
                      </div>
                      <div className="text-green-200 text-sm">
                        100% recycled agricultural waste
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Impact Statistics
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400">
                      2,000+
                    </div>
                    <div className="text-white text-sm">
                      Tons Waste Diverted
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400">75%</div>
                    <div className="text-white text-sm">Lower Emissions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400">
                      100%
                    </div>
                    <div className="text-white text-sm">Recycled Materials</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-400">
                      50+
                    </div>
                    <div className="text-white text-sm">Jobs Created</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Modern Design */}
      <section
        id="services"
        className="py-20 bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white text-sm font-bold mb-8 shadow-lg">
              <Star className="w-5 h-5 mr-2 animate-pulse" />
              Customer Stories
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">
              Real{" "}
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                Fire
              </span>{" "}
              Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Hear from our customers who've experienced the difference with
              Blaze Briquettes. These aren't just reviews – they're fire
              stories.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Testimonial 1 */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">JM</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">
                      John Mwangi
                    </div>
                    <div className="text-gray-400 text-sm">
                      Restaurant Owner, Nairobi
                    </div>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-300 text-lg leading-relaxed mb-6">
                  "These briquettes transformed my restaurant's cooking.
                  Consistent heat for 6+ hours, perfect sear marks on every
                  steak. My customers can taste the difference."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="text-orange-400 font-semibold">
                    6 months customer
                  </div>
                  <div className="text-gray-500 text-sm">
                    Orders 50kg monthly
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">AW</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">
                      Alice Wanjiku
                    </div>
                    <div className="text-gray-400 text-sm">
                      Home Chef, Mombasa
                    </div>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-300 text-lg leading-relaxed mb-6">
                  "The environmental impact sold me. Made from recycled
                  materials, burns clean, minimal ash. I feel good about my
                  cooking choices now."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="text-blue-400 font-semibold">
                    Environmental advocate
                  </div>
                  <div className="text-gray-500 text-sm">2 years customer</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">PK</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">
                      Peter Kimani
                    </div>
                    <div className="text-gray-400 text-sm">
                      BBQ Enthusiast, Kisumu
                    </div>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-300 text-lg leading-relaxed mb-6">
                  "Perfect for smoking. Low, slow, consistent heat for 8+ hours.
                  My brisket has never been better. The neighbors ask for my
                  secret."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="text-purple-400 font-semibold">
                    Smoking expert
                  </div>
                  <div className="text-gray-500 text-sm">1 year customer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  4.9/5
                </div>
                <div className="text-gray-400">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-500 mb-2">
                  2,847
                </div>
                <div className="text-gray-400">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-500 mb-2">
                  98%
                </div>
                <div className="text-gray-400">Would Recommend</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-500 mb-2">
                  24/7
                </div>
                <div className="text-gray-400">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Modern Design */}
      <section id="contact" className="py-20 bg-black relative overflow-hidden">
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-800 text-white text-sm font-bold mb-8 shadow-lg">
              <Users className="w-5 h-5 mr-2 animate-pulse" />
              Get in Touch
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">
              Ready to{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Ignite
              </span>{" "}
              Your Fire?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Contact us today for orders, delivery inquiries, or any questions
              about our premium charcoal briquettes. We're here to fuel your
              fire.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors duration-200">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <Users className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <div className="text-gray-300">+254 715 607 720</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors duration-200">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <Star className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-gray-300">
                        info@blazebriquettes.co.ke
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors duration-200">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <House className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Address</div>
                      <div className="text-gray-300">Homabay, Kenya</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors duration-200">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <Flame className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Delivery</div>
                      <div className="text-gray-300">
                        Countrywide delivery available
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Business Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300 font-medium">
                      Monday - Friday
                    </span>
                    <span className="text-white font-semibold">
                      8:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="text-gray-300 font-medium">Saturday</span>
                    <span className="text-white font-semibold">
                      9:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-300 font-medium">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+254 715 607 720"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject-select"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject-select"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Place an Order</option>
                    <option value="delivery">Delivery Inquiry</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-4 rounded-lg font-semibold hover:bg-green-800 transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Experience{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Perfect Fire
            </span>
            ?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have made the switch to
            Blaze Briquettes. Order now and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/order"
              className="bg-white text-green-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl inline-block text-center"
            >
              Order Now - KSh 200/kg
            </Link>
            <a
              href="tel:+254715607720"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-700 transition-colors duration-200 inline-block text-center"
            >
              Call +254 715 607 720
            </a>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default Home;
