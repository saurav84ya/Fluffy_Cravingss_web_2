'use client'

import React, { useState, useEffect } from 'react';
import { Heart, Instagram, Mail, Phone, Star, ShoppingCart, MapPin } from 'lucide-react';

const FluffyCravings = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      id: 1,
      name: "Classic Glazed Donuts",
      description: "Soft, fluffy donuts with sweet glaze that melts in your mouth",
      price: "₹80",
      image: "🍩",
      category: "donuts"
    },
    {
      id: 2,
      name: "Chocolate Bombolonis",
      description: "Italian-style filled pastries with rich chocolate cream",
      price: "₹120",
      image: "🧁",
      category: "bombolonis"
    },
    {
      id: 3,
      name: "Rainbow Cookies",
      description: "Colorful, chewy cookies that bring joy to every bite",
      price: "₹60",
      image: "🍪",
      category: "cookies"
    },
    {
      id: 4,
      name: "Vanilla Cupcakes",
      description: "Moist vanilla cupcakes topped with creamy buttercream",
      price: "₹100",
      image: "🧁",
      category: "cupcakes"
    },
    {
      id: 5,
      name: "Strawberry Special",
      description: "Seasonal strawberry-filled treats with fresh berries",
      price: "₹150",
      image: "🍓",
      category: "seasonal"
    },
    {
      id: 6,
      name: "Chocolate Chip Cookies",
      description: "Crispy edges, chewy center, loaded with chocolate chips",
      price: "₹70",
      image: "🍪",
      category: "cookies"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      review: "Best donuts I&apos;ve ever had! So fresh and delicious! 😍",
      rating: 5,
      avatar: "👩"
    },
    {
      name: "Arjun Patel",
      review: "The bombolonis are absolutely divine. Worth every penny!",
      rating: 5,
      avatar: "👨"
    },
    {
      name: "Sneha Roy",
      review: "Amazing quality for a home bakery. Highly recommended! 💕",
      rating: 5,
      avatar: "👩"
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-cream-50 to-pink-100">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-pink-200/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-amber-800 flex items-center gap-2">
              <span className="text-3xl">🍩</span>
              Fluffy Cravingss
              <span className="text-2xl">✨</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-medium transition-all duration-300 hover:text-pink-500 relative ${
                    activeSection === item.toLowerCase() ? 'text-pink-500' : 'text-amber-800'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"></div>
                  )}
                </button>
              ))}
              <button className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-300/50 transform hover:-translate-y-1 transition-all duration-300">
                Order Now 🛒
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center text-center px-4 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-bounce">
            <span className="text-8xl">🍩</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 leading-tight">
            Freshly Baked Happiness,
            <span className="block text-pink-500">Just For You 💖</span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-700 mb-8 font-medium">
            Donuts, Bombolonis, Cookies & Cupcakes made with love by a passionate 16-year-old baker
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-green-300/50 transform hover:-translate-y-2 transition-all duration-300 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Order on WhatsApp
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-pink-300/50 transform hover:-translate-y-2 transition-all duration-300"
            >
              View Menu ✨
            </button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Our Sweet Menu 🍰
            </h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Every treat is handcrafted with premium ingredients and lots of love
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div 
                key={item.id}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:shadow-pink-200/30 transform hover:-translate-y-3 transition-all duration-500 group border border-pink-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">{item.name}</h3>
                <p className="text-amber-700 mb-4 text-sm leading-relaxed">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-pink-500">{item.price}</span>
                  <button className="bg-gradient-to-r from-pink-400 to-pink-600 text-white px-4 py-2 rounded-full hover:shadow-lg hover:shadow-pink-300/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-r from-pink-50 to-cream-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
                Our Story 💕
              </h2>
              <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                Fluffy Cravingss is run by a passionate 16-year-old baker who believes that every bite should bring joy. What started as a hobby in my kitchen has grown into a labor of love, creating handmade treats that spread happiness one sweet bite at a time.
              </p>
              <p className="text-lg text-amber-700 mb-8 leading-relaxed">
                Each recipe is carefully crafted with the finest ingredients, ensuring every donut, bomboloni, cookie, and cupcake meets our high standards of taste and quality. We believe in the magic of homemade goodness! ✨
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500">500+</div>
                  <div className="text-amber-700">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500">50+</div>
                  <div className="text-amber-700">Recipes Perfected</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500">100%</div>
                  <div className="text-amber-700">Made with Love</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-9xl mb-4">👩‍🍳</div>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-pink-500" />
                    <span className="text-amber-700">Made with genuine love and care</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-pink-500" />
                    <span className="text-amber-700">Premium quality ingredients</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-pink-500" />
                    <span className="text-amber-700">Fresh, made-to-order treats</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              What Our Customers Say 🌟
            </h2>
            <p className="text-xl text-amber-700">
              Don&apos;t just take our word for it - hear from our happy customers!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-3xl shadow-lg hover:shadow-xl hover:shadow-pink-200/30 transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">{testimonial.avatar}</span>
                  <div>
                    <h4 className="font-semibold text-amber-900">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-amber-700 italic">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-pink-100 to-cream-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-8">
            Let&apos;s Get in Touch! 📞
          </h2>
          <p className="text-xl text-amber-700 mb-12">
            Ready to satisfy your sweet cravings? Reach out to us and let&apos;s make your day sweeter!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <button className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-3xl hover:shadow-xl hover:shadow-green-300/50 transform hover:-translate-y-2 transition-all duration-300">
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold text-lg">WhatsApp</div>
              <div className="text-sm opacity-90">Quick Orders</div>
            </button>
            
            <button className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-6 rounded-3xl hover:shadow-xl hover:shadow-pink-300/50 transform hover:-translate-y-2 transition-all duration-300">
              <Instagram className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold text-lg">Instagram</div>
              <div className="text-sm opacity-90">@fluffycravingss</div>
            </button>
            
            <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 rounded-3xl hover:shadow-xl hover:shadow-blue-300/50 transform hover:-translate-y-2 transition-all duration-300">
              <Mail className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold text-lg">Email</div>
              <div className="text-sm opacity-90">hello@fluffycravingss.com</div>
            </button>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Order Information 📋</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Minimum Order:</h4>
                <p className="text-amber-700">₹200 for delivery</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Delivery Time:</h4>
                <p className="text-amber-700">24-48 hours advance notice</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Delivery Areas:</h4>
                <p className="text-amber-700">Local areas within 10km</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Payment:</h4>
                <p className="text-amber-700">Cash, UPI, Card accepted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-3xl">🍩</span>
                Fluffy Cravingss
                <span className="text-2xl">✨</span>
              </div>
              <p className="text-amber-200 leading-relaxed">
                Spreading joy through freshly baked happiness, one sweet treat at a time.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-amber-200 hover:text-white transition-colors">Home</button>
                <button onClick={() => scrollToSection('menu')} className="block text-amber-200 hover:text-white transition-colors">Menu</button>
                <button onClick={() => scrollToSection('about')} className="block text-amber-200 hover:text-white transition-colors">About</button>
                <button onClick={() => scrollToSection('contact')} className="block text-amber-200 hover:text-white transition-colors">Contact</button>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <button className="bg-pink-500 p-3 rounded-full hover:bg-pink-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition-colors">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-amber-700 pt-8 text-center">
            <p className="text-amber-200">
              © 2025 Fluffy Cravingss - Baked with Love 💕 | Made by a passionate 16-year-old baker
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FluffyCravings;