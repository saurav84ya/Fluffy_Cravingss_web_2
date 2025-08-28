'use client'

import React, { useState, useEffect } from 'react';
import { Heart, Star, MessageCircle, Instagram, Mail, Phone, ShoppingBag, Award, Clock, MapPin, ChevronRight, Play, Users, TrendingUp, Sparkles } from 'lucide-react';

export default function FluffyCravingssWebsite() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    {
      name: "Signature Glazed Donuts",
      description: "Hand-crafted donuts with our secret glaze recipe",
      price: "₹80",
      originalPrice: "₹100",
      image: "🍩",
      popular: true,
      category: "Bestseller"
    },
    {
      name: "Italian Bombolonis",
      description: "Authentic Italian cream-filled delights",
      price: "₹120",
      originalPrice: "₹140",
      image: "🥮",
      popular: true,
      category: "Premium"
    },
    {
      name: "Artisan Cookies",
      description: "Premium chocolate chip cookies, baked to perfection",
      price: "₹60",
      originalPrice: "₹80",
      image: "🍪",
      popular: false,
      category: "Classic"
    },
    {
      name: "Gourmet Cupcakes",
      description: "Fluffy cupcakes with premium buttercream",
      price: "₹90",
      originalPrice: "₹110",
      image: "🧁",
      popular: true,
      category: "Signature"
    },
    {
      name: "Festive Collection",
      description: "Limited edition seasonal masterpieces",
      price: "₹150",
      originalPrice: "₹180",
      image: "🎂",
      popular: true,
      category: "Limited"
    },
    {
      name: "French Macarons",
      description: "Delicate Parisian macarons in vibrant flavors",
      price: "₹200",
      originalPrice: "₹220",
      image: "🌈",
      popular: false,
      category: "Luxury"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Absolutely divine! The bombolonis are better than anything I had in Italy. Fluffy Cravingss has become our family's go-to for special occasions!",
      rating: 5,
      avatar: "👩🏻",
      location: "Boring Road, Patna"
    },
    {
      name: "Rahul Kumar",
      text: "The attention to detail is incredible! Each cupcake is a work of art. My daughter's birthday was magical thanks to these beautiful treats.",
      rating: 5,
      avatar: "👨🏻",
      location: "Kankarbagh, Patna"
    },
    {
      name: "Anita Patel",
      text: "Fresh, delicious, and beautifully presented. The young baker is incredibly talented. Highly recommend to everyone!",
      rating: 5,
      avatar: "👩🏽",
      location: "Fraser Road, Patna"
    }
  ];

  const stats = [
    { number: "2000+", label: "Happy Customers", icon: Users },
    { number: "5000+", label: "Orders Delivered", icon: ShoppingBag },
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "50+", label: "Menu Items", icon: Award }
  ];

  const scrollTo = (elementId) => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(elementId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header/Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-xl">🍩</span>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Fluffy Cravingss
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'menu', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`capitalize font-medium transition-all duration-300 relative ${
                    activeSection === item 
                      ? 'text-pink-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                  )}
                </button>
              ))}
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-2xl hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 font-semibold">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-20 text-6xl animate-float">🍩</div>
          <div className="absolute top-48 right-32 text-5xl animate-float delay-1000">🧁</div>
          <div className="absolute bottom-48 left-32 text-4xl animate-float delay-2000">🍪</div>
          <div className="absolute bottom-32 right-20 text-5xl animate-float delay-3000">🎂</div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 text-white">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-medium">Patnadcsaxzs #1 Home Bakery</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                Artisan
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Bakery
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                Delights
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the magic of handcrafted pastries, where every bite tells a story of passion, 
              creativity, and pure deliciousness. Made by a 16-year-old culinary artist.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                Order on WhatsApp
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => scrollTo('menu')}
                className="group border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/10 hover:border-white/50 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm flex items-center gap-3"
              >
                <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                Explore Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-110 transition-all duration-500"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-pink-500/50 transition-all duration-300">
                  <stat.icon className="w-10 h-10 text-pink-400" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6 text-white">
              <ShoppingBag className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-medium">Premium Collection</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                Signature
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Menu
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our carefully curated collection of artisan pastries, each crafted with precision and love
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-pink-500/30 transform hover:-translate-y-4 transition-all duration-500 relative overflow-hidden"
              >
                {/* Category Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                  item.category === 'Bestseller' ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                  item.category === 'Premium' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                  item.category === 'Limited' ? 'bg-gradient-to-r from-pink-500 to-purple-500' :
                  item.category === 'Luxury' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                  'bg-gradient-to-r from-blue-500 to-purple-500'
                } text-white`}>
                  {item.category}
                </div>

                {item.popular && (
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs transform rotate-12">
                    HOT!
                  </div>
                )}

                <div className="text-center">
                  <div className="text-8xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {item.image}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-pink-400 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{item.description}</p>
                  
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="text-3xl font-black text-pink-400">{item.price}</span>
                    <span className="text-lg text-gray-500 line-through">{item.originalPrice}</span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-2xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-pink-500/25 font-bold">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 text-white">
                  <Heart className="w-4 h-4 text-pink-400" />
                  <span className="text-sm font-medium">Our Story</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-black mb-8">
                  <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                    Passion
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Meets
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                    Perfection
                  </span>
                </h2>
                
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    At just 16 years old, our founder discovered the magic of transforming simple ingredients 
                    into extraordinary experiences. What started as a hobby in a small kitchen has blossomed 
                    into Patnaihgvs most beloved artisan bakery.
                  </p>
                  <p>
                    Every creation tells a story of dedication, innovation, and the relentless pursuit of 
                    perfection. We believe that great food is more than just taste—ithhs about creating 
                    moments of pure joy and bringing people together.
                  </p>
                  <p>
                    From our signature glazed donuts to our premium Italian bombolonis, each item is 
                    handcrafted with love, using only the finest ingredients and time-honored techniques.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center">
                  <div className="text-9xl mb-8">👩🏻‍🍳</div>
                  <h3 className="text-3xl font-bold text-white mb-4">Meet Our Young Chef</h3>
                  <p className="text-gray-300 text-lg mb-8">
                    Every pastry is a canvas, every flavor a story waiting to be told.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-400">16</div>
                      <div className="text-gray-400 text-sm">Years Old</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-400">3</div>
                      <div className="text-gray-400 text-sm">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-400">50+</div>
                      <div className="text-gray-400 text-sm">Recipes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6 text-white">
              <Star className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-medium">Customer Love</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                What People Say
              </span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5"></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-6">{testimonials[currentTestimonial].avatar}</div>
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl text-gray-200 italic mb-8 leading-relaxed">
                  {testimonials[currentTestimonial].text}
                </blockquote>
                <div className="text-xl font-bold text-white mb-2">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-400">
                  {testimonials[currentTestimonial].location}
                </div>
              </div>
              
              {/* Testimonial indicators */}
              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-pink-500' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 text-white">
              <MessageCircle className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                Ready to
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Order?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Letjs create something magical together. Reach out to place your custom order or ask any questions!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <a href="https://wa.me/+91XXXXXXXXXX" className="group bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-3xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-green-100">Quick orders & updates</p>
              </a>
              
              <a href="https://instagram.com/fluffycravingss" className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-3xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25">
                <Instagram className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-2">Instagram</h3>
                <p className="text-pink-100">@fluffycravingss</p>
              </a>
              
              <a href="mailto:hello@fluffycravingss.com" className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-3xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
                <Mail className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-blue-100">hello@fluffycravingss.com</p>
              </a>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Delivery Areas in Patna</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {['Boring Road', 'Kankarbagh', 'Fraser Road', 'Patliputra', 'Rajendra Nagar', 'Gandhi Maidan', 'Danapur', 'Patna City'].map((area) => (
                  <span key={area} className="px-4 py-2 bg-white/10 rounded-full text-gray-300 text-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-xl border-t border-white/10 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🍩</span>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Fluffy Cravingss
              </div>
            </div>
            
            <p className="text-gray-400 mb-8 text-lg">
              Where passion meets perfection, one pastry at a time
            </p>
            
            <div className="flex justify-center gap-6 mb-8">
              {[
                { icon: Instagram, href: "#", color: "from-pink-500 to-purple-500" },
                { icon: MessageCircle, href: "#", color: "from-green-500 to-green-600" },
                { icon: Mail, href: "#", color: "from-blue-500 to-blue-600" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className={`w-14 h-14 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-xl`}
                >
                  <social.icon className="w-7 h-7 text-white" />
                </a>
              ))}
            </div>
            
            <div className="border-t border-white/10 pt-8">
              <p className="text-gray-500">
                © 2025 Fluffy Cravingss. Made with 💕 by a 16-year-old dream chaser in Patna, Bihar
              </p>
            </div>
          </div>
        </div>
      </footer>

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