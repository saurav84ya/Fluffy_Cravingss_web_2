
'use client'

import React, { useState, useEffect, useRef } from 'react';
import { 
  Heart, Star, MessageCircle, Instagram, Mail, Phone, ShoppingBag, 
  Award, Clock, MapPin, ChevronRight, Play, Users, TrendingUp, 
  Sparkles, ArrowUp, Menu, X, Quote, CheckCircle, Zap
} from 'lucide-react';

export default function FluffyCravingssWebsite() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);
      setShowScrollTop(scrollY > 500);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const menuItems = [
    {
      id: 1,
      name: "Signature Glazed Donuts",
      description: "Our famous glazed donuts with a secret recipe that's been perfected over time",
      price: "₹85",
      originalPrice: "₹110",
      image: "🍩",
      rating: 4.9,
      orders: "2.1k",
      tags: ["Bestseller", "Gluten-Free Option"],
      gradient: "from-amber-400 to-orange-500"
    },
    {
      id: 2,
      name: "Italian Bombolonis",
      description: "Authentic Italian-style cream-filled donuts with premium vanilla custard",
      price: "₹125",
      originalPrice: "₹150",
      image: "🥮",
      rating: 5.0,
      orders: "1.8k",
      tags: ["Premium", "Chef's Special"],
      gradient: "from-rose-400 to-pink-500"
    },
    {
      id: 3,
      name: "Artisan Cookies",
      description: "Hand-rolled chocolate chip cookies with Belgian chocolate",
      price: "₹65",
      originalPrice: "₹85",
      image: "🍪",
      rating: 4.8,
      orders: "3.2k",
      tags: ["Classic", "Kids Favorite"],
      gradient: "from-yellow-400 to-amber-500"
    },
    {
      id: 4,
      name: "Gourmet Cupcakes",
      description: "Moist vanilla cupcakes topped with our signature buttercream frosting",
      price: "₹95",
      originalPrice: "₹120",
      image: "🧁",
      rating: 4.9,
      orders: "1.5k",
      tags: ["Celebration", "Custom Design"],
      gradient: "from-purple-400 to-pink-500"
    },
    {
      id: 5,
      name: "Seasonal Specials",
      description: "Limited edition treats that celebrate the flavors of each season",
      price: "₹140",
      originalPrice: "₹175",
      image: "🎂",
      rating: 5.0,
      orders: "892",
      tags: ["Limited Edition", "Seasonal"],
      gradient: "from-green-400 to-teal-500"
    },
    {
      id: 6,
      name: "French Macarons",
      description: "Delicate almond flour macarons in 12 exquisite flavors",
      price: "₹180",
      originalPrice: "₹220",
      image: "🌈",
      rating: 4.7,
      orders: "654",
      tags: ["Luxury", "Gift Box Available"],
      gradient: "from-indigo-400 to-purple-500"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ananya Sharma",
      role: "Food Blogger",
      text: "Fluffy Cravingss has redefined what home baking can achieve. The bombolonis are restaurant-quality, and the presentation is Instagram-worthy. This young baker is going places!",
      rating: 5,
      image: "👩🏻‍💼",
      location: "Boring Road, Patna"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Event Planner",
      text: "I've ordered for multiple corporate events and family celebrations. The consistency in quality and the creative presentation never fails to impress our guests.",
      rating: 5,
      image: "👨🏻‍💻",
      location: "Frazer Road, Patna"
    },
    {
      id: 3,
      name: "Priya Singh",
      role: "Mother of Two",
      text: "My kids absolutely love the cookies, and I love that I can trust the quality. It's become our go-to for birthday parties and family gatherings.",
      rating: 5,
      image: "👩🏽‍🦱",
      location: "Kankarbagh, Patna"
    }
  ];

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest ingredients make it into our kitchen",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "Baked fresh every morning for optimal taste and texture",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every pastry is crafted with passion and attention to detail",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: Zap,
      title: "Quick Delivery",
      description: "Fast and safe delivery across Patna within 2-3 hours",
      color: "from-purple-400 to-indigo-500"
    }
  ];

  const stats = [
    { number: "5000+", label: "Happy Customers", icon: Users },
    { number: "15K+", label: "Orders Delivered", icon: ShoppingBag },
    { number: "4.9★", label: "Average Rating", icon: Star },
    { number: "50+", label: "Unique Items", icon: Award }
  ];

  const scrollTo = (elementId) => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(elementId);
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-x-hidden">
      {/* Cursor Follower */}
      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full pointer-events-none z-50 opacity-50 transition-all duration-300 ease-out mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🍩</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-black bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Fluffy Cravingss
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Premium Home Bakery</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {['home', 'menu', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`relative px-4 py-2 font-semibold capitalize transition-all duration-300 ${
                    activeSection === item 
                      ? 'text-purple-600' 
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
                  )}
                </button>
              ))}
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Order Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-gray-100 text-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {['home', 'menu', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-xl capitalize font-semibold transition-all duration-300"
                >
                  {item}
                </button>
              ))}
              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold">
                Order Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply animate-pulse opacity-70"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply animate-pulse opacity-70 delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-28 h-28 bg-yellow-200 rounded-full mix-blend-multiply animate-pulse opacity-70 delay-2000"></div>
          <div className="absolute bottom-20 right-10 w-36 h-36 bg-blue-200 rounded-full mix-blend-multiply animate-pulse opacity-70 delay-3000"></div>
        </div>

        {/* Floating Food Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-16 text-4xl sm:text-6xl animate-bounce opacity-80">🍩</div>
          <div className="absolute top-48 right-24 text-3xl sm:text-5xl animate-bounce delay-1000 opacity-80">🧁</div>
          <div className="absolute bottom-48 left-32 text-3xl sm:text-4xl animate-bounce delay-2000 opacity-80">🍪</div>
          <div className="absolute bottom-32 right-16 text-4xl sm:text-5xl animate-bounce delay-3000 opacity-80">🎂</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-semibold text-gray-800">Patna's Most Loved Bakery</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent">
                Handcrafted
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Happiness
              </span>
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Delivered
                </span>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the magic of artisan baking where every bite tells a story. 
              Created with passion by a 16-year-old culinary artist who believes in 
              turning simple ingredients into extraordinary moments.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-3xl text-lg font-bold shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Order on WhatsApp
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => scrollTo('menu')}
                className="group border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-3xl text-lg font-bold hover:border-purple-500 hover:text-purple-600 transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                Explore Menu
              </button>
            </div>

            {/* Stats Preview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Us?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We don't just bake; we create experiences that bring joy to every moment
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full px-6 py-2 mb-6">
              <ShoppingBag className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-semibold text-gray-800">Our Menu</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Artisan <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Collection</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each item is carefully crafted with premium ingredients and a lot of love
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-gray-100 overflow-hidden transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="p-8">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          tag === 'Bestseller' ? 'bg-orange-100 text-orange-600' :
                          tag === 'Premium' ? 'bg-purple-100 text-purple-600' :
                          tag === 'Limited Edition' ? 'bg-pink-100 text-pink-600' :
                          'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-center">
                    <div className="text-8xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      {item.image}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      {item.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Rating and Orders */}
                    <div className="flex justify-center items-center gap-4 mb-6">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold text-gray-700">{item.rating}</span>
                      </div>
                      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                      <div className="text-sm text-gray-600">{item.orders} orders</div>
                    </div>

                    {/* Price */}
                    <div className="flex justify-center items-center gap-3 mb-8">
                      <span className="text-3xl font-black text-gray-900">{item.price}</span>
                      <span className="text-lg text-gray-400 line-through">{item.originalPrice}</span>
                    </div>

                    <button className={`w-full bg-gradient-to-r ${item.gradient} text-white py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-lg`}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-2 mb-8 shadow-lg">
                <Heart className="w-4 h-4 text-pink-500" />
                <span className="text-sm font-semibold text-gray-800">Our Story</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                From Dream to
                <br />
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Delicious Reality
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-10">
                <p>
                  At just 16, our founder discovered that baking isn't just about following recipes—
                  it's about creating moments of pure joy. What started as weekend experiments in 
                  a small kitchen has grown into Patna's most beloved artisan bakery.
                </p>
                <p>
                  Every pastry tells a story of dedication, innovation, and the belief that great 
                  food has the power to bring people together. We use only premium ingredients, 
                  time-honored techniques, and a lot of heart in everything we create.
                </p>
                <p>
                  Today, we're proud to serve thousands of happy customers across Patna, turning 
                  ordinary moments into extraordinary memories, one delicious bite at a time.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-purple-600">16</div>
                  <div className="text-sm text-gray-600">Years Old</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-purple-600">3+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Unique Recipes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-purple-600">100%</div>
                  <div className="text-sm text-gray-600">Made from Scratch</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
                    <span className="text-6xl">👩🏻‍🍳</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Young Chef</h3>
                  <div className="flex items-center justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-gray-600 italic mb-8">
                    "Every pastry is a canvas where I paint flavors, emotions, and memories. 
                    Baking isn't just my passion—it's my way of spreading happiness."
                  </blockquote>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <div className="text-sm font-semibold">Self-Taught</div>
                    </div>
                    <div className="text-center">
                      <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                      <div className="text-sm font-semibold">Award Winner</div>
                    </div>
                    <div className="text-center">
                      <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                      <div className="text-sm font-semibold">Passion Driven</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full px-6 py-2 mb-6">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-semibold text-gray-800">Customer Reviews</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              What Our <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Customers</span> Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100 relative group hover:shadow-2xl transition-all duration-500">
                <Quote className="w-12 h-12 text-gray-300 mb-6" />
                
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                </div>
                
                <blockquote className="text-lg text-gray-700 mb-8 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-purple-600">{testimonial.location}</div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <MessageCircle className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-semibold">Get In Touch</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Ready to <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Order?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's create something magical together. Reach out to place your order or ask any questions!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <a href="https://wa.me/+91XXXXXXXXXX" className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-gray-300 mb-4">Quick orders & updates</p>
              <span className="text-green-400 font-semibold">+91 XXXXX XXXXX</span>
            </a>

            <a href="https://instagram.com/fluffycravingss" className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instagram</h3>
              <p className="text-gray-300 mb-4">Follow & DM us</p>
              <span className="text-pink-400 font-semibold">@fluffycravingss</span>
            </a>

            <a href="mailto:hello@fluffycravingss.com" className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300 mb-4">For custom orders</p>
              <span className="text-blue-400 font-semibold">hello@fluffycravingss.com</span>
            </a>
          </div>

          {/* Delivery Areas */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-center mb-8">We Deliver Across Patna</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {['Boring Road', 'Kankarbagh', 'Fraser Road', 'Patliputra', 'Rajendra Nagar', 'Gandhi Maidan', 'Danapur', 'Patna City'].map((area, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-white/5 rounded-xl">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  <span className="text-gray-300">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🍩</span>
              </div>
              <div className="text-3xl font-bold">Fluffy Cravingss</div>
            </div>
            
            <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
              Where passion meets perfection, one pastry at a time. Serving Patna with love since 2022.
            </p>
            
            <div className="flex justify-center gap-6 mb-8">
              {[
                { icon: Instagram, href: "#", color: "hover:text-pink-400" },
                { icon: MessageCircle, href: "#", color: "hover:text-green-400" },
                { icon: Mail, href: "#", color: "hover:text-blue-400" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className={`w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © 2024 Fluffy Cravingss. Made with 💕 by a 16-year-old dreamer in Patna, Bihar
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float.delay-1000 {
          animation-delay: 1s;
        }
        .animate-float.delay-2000 {
          animation-delay: 2s;
        }
        .animate-float.delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </div>
  );
}