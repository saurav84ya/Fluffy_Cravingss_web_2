
'use client'
import React, { useState, useEffect } from 'react';
import { Heart, Star, MessageCircle, Instagram, Mail, Phone, ShoppingBag, Award, Clock, MapPin } from 'lucide-react';

export default function FluffyCravingssWebsite() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      name: "Glazed Donuts",
      description: "Fluffy donuts with sweet glaze",
      price: "₹80",
      image: "🍩",
      popular: true
    },
    {
      name: "Bombolonis",
      description: "Italian filled donuts with cream",
      price: "₹120",
      image: "🧁",
      popular: true
    },
    {
      name: "Chocolate Cookies",
      description: "Crispy cookies with chocolate chips",
      price: "₹60",
      image: "🍪",
      popular: false
    },
    {
      name: "Vanilla Cupcakes",
      description: "Soft cupcakes with vanilla frosting",
      price: "₹90",
      image: "🧁",
      popular: false
    },
    {
      name: "Seasonal Specials",
      description: "Limited time festive treats",
      price: "₹100",
      image: "🎂",
      popular: true
    },
    {
      name: "Mini Macarons",
      description: "Colorful French macarons",
      price: "₹150",
      image: "🌈",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Best donuts I&quot;ve ever had! So fresh and delicious. My family loves ordering from Fluffy Cravingss!",
      rating: 5,
      avatar: "👩🏻"
    },
    {
      name: "Rahul Kumar",
      text: "The bombolonis are absolutely divine! Perfect for special occasions. Highly recommended!",
      rating: 5,
      avatar: "👨🏻"
    },
    {
      name: "Anita Patel",
      text: "Amazing quality and such cute presentation! My daughter&quot;s birthday was perfect with these treats.",
      rating: 5,
      avatar: "👩🏽"
    }
  ];

  const scrollTo = (elementId) => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(elementId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      {/* Header/Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-pink-100' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              Fluffy Cravingss 🍩✨
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'menu', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`capitalize font-medium transition-all duration-300 hover:text-pink-500 ${
                    activeSection === item ? 'text-pink-500' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-2 rounded-full hover:from-pink-500 hover:to-rose-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-6xl animate-bounce delay-1000">🍩</div>
          <div className="absolute top-40 right-20 text-5xl animate-bounce delay-2000">🧁</div>
          <div className="absolute bottom-40 left-20 text-4xl animate-bounce delay-3000">🍪</div>
          <div className="absolute bottom-20 right-10 text-5xl animate-bounce delay-500">🎂</div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-rose-400 to-orange-400 bg-clip-text text-transparent leading-tight">
              Freshly Baked<br />Happiness 💖
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Donuts, Bombolonis, Cookies & Cupcakes made with love by a passionate 16-year-old baker
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-green-400 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-500 hover:to-green-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp
              </button>
              <button 
                onClick={() => scrollTo('menu')}
                className="border-2 border-pink-300 text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                View Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Made with finest ingredients and lots of love</p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Daily</h3>
              <p className="text-gray-600">Baked fresh every day for maximum taste</p>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Delivery</h3>
              <p className="text-gray-600">Quick delivery across Patna with care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              Our Delicious Menu 🍽️
            </h2>
            <p className="text-xl text-gray-600">Handcrafted treats that make every moment special</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-pink-100 group"
              >
                {item.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-400 to-pink-400 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Popular!
                  </div>
                )}
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.image}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-pink-500">{item.price}</span>
                    <button className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-4 py-2 rounded-full hover:from-pink-500 hover:to-rose-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
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
      <section id="about" className="py-20 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              Our Story 💕
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-100">
              <div className="text-8xl mb-6">👧🏻‍🍳</div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Fluffy Cravingss is run by a passionate 16-year-old baker who believes in bringing joy through homemade treats. 
                Every item is crafted with love, care, and the finest ingredients to create moments of pure happiness.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From classic glazed donuts to innovative bombolonis, each bite tells a story of dedication, creativity, 
                and the simple joy of sharing something delicious with the world.
              </p>
              <div className="flex justify-center gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500">500+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500">1000+</div>
                  <div className="text-gray-600">Orders Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500">5⭐</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              What Our Customers Say ✨
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-pink-100"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              Get In Touch 📞
            </h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-100">
              <p className="text-lg text-gray-700 mb-8">
                Ready to satisfy your sweet cravings? Contact us to place your order!
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <a href="https://wa.me/+91XXXXXXXXXX" className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-400 to-green-500 text-white p-4 rounded-2xl hover:from-green-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <MessageCircle className="w-6 h-6" />
                  <span className="font-semibold">WhatsApp</span>
                </a>
                
                <a href="https://instagram.com/fluffycravingss" className="flex items-center justify-center gap-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white p-4 rounded-2xl hover:from-pink-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Instagram className="w-6 h-6" />
                  <span className="font-semibold">Instagram</span>
                </a>
                
                <a href="mailto:hello@fluffycravingss.com" className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white p-4 rounded-2xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Mail className="w-6 h-6" />
                  <span className="font-semibold">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4">Fluffy Cravingss 🍩✨</div>
            <p className="text-pink-100 mb-6">Baked with Love, Served with Joy</p>
            <div className="flex justify-center gap-6 mb-6">
              <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-pink-100">© 2025 Fluffy Cravingss – Made with 💕 in Patna</p>
          </div>
        </div>
      </footer>
    </div>
  );
}