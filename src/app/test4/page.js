
'use client'

import React, { useState, useEffect } from 'react';

const FluffyCravingss = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'menu', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

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

  return (
    <div className="font-body text-gray-800 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🍩</span>
            </div>
            <span className="text-2xl font-bold font-heading bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              Fluffy Cravingss
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'menu', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium transition-all duration-300 ${activeSection === item ? 'text-pink-600 font-semibold' : 'text-gray-600 hover:text-pink-500'}`}
              >
                {item}
              </button>
            ))}
          </nav>

          <button className="hidden md:block bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
            Order Now
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-inner">
            <div className="flex flex-col space-y-4">
              {['home', 'about', 'menu', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium text-left py-2 px-4 rounded-lg ${activeSection === item ? 'bg-pink-100 text-pink-600 font-semibold' : 'text-gray-600 hover:bg-pink-50'}`}
                >
                  {item}
                </button>
              ))}
              <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-2 px-4 rounded-full font-semibold mt-2">
                Order Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="inline-flex items-center bg-pink-100 text-pink-700 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-semibold">Patnas Most Loved Bakery</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Handcrafted <span className="text-pink-600">Happiness</span> Delivered to Your Door
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Experience the magic of artisan baking where every bite tells a story. Created with passion by a 16-year-old culinary artist.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Order Now
                </button>
                <button className="border-2 border-pink-500 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300">
                  View Menu
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative z-10 bg-white p-6 rounded-3xl shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-pink-100 rounded-2xl p-6 text-center transform rotate-2">
                    <span className="text-5xl">🍩</span>
                    <h3 className="font-semibold mt-2">Donuts</h3>
                  </div>
                  <div className="bg-orange-100 rounded-2xl p-6 text-center transform -rotate-2">
                    <span className="text-5xl">🧁</span>
                    <h3 className="font-semibold mt-2">Cupcakes</h3>
                  </div>
                  <div className="bg-yellow-100 rounded-2xl p-6 text-center transform -rotate-2">
                    <span className="text-5xl">🍪</span>
                    <h3 className="font-semibold mt-2">Cookies</h3>
                  </div>
                  <div className="bg-purple-100 rounded-2xl p-6 text-center transform rotate-2">
                    <span className="text-5xl">🎂</span>
                    <h3 className="font-semibold mt-2">Cakes</h3>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-3xl opacity-20 blur-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From a small kitchen to Patnas favorite bakery</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1555507036-ab794f24d8c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Bakery" 
                  className="rounded-3xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-pink-500 text-white p-6 rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold">16</div>
                  <div className="text-sm">Year Old Baker</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-heading font-bold mb-6">Baking with Passion Since 2022</h3>
              <p className="text-gray-600 mb-6">
                What started as a hobby in a small kitchen has blossomed into Patnas most beloved artisan bakery. 
                Our young founder discovered the magic of transforming simple ingredients into extraordinary experiences.
              </p>
              <p className="text-gray-600 mb-8">
                Every creation tells a story of dedication, innovation, and the relentless pursuit of perfection. 
                We believe that great food is more than just taste—its about creating moments of pure joy.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <span className="text-pink-600 text-xl">🍃</span>
                  </div>
                  <div>
                    <div className="font-semibold">Fresh Ingredients</div>
                    <div className="text-sm text-gray-500">Locally sourced</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <span className="text-orange-600 text-xl">❤️</span>
                  </div>
                  <div>
                    <div className="font-semibold">Made with Love</div>
                    <div className="text-sm text-gray-500">Passionate baking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Menu</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Delicious treats made with the finest ingredients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="text-6xl text-center mb-4">{item.image}</div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <div className="bg-pink-100 text-pink-700 text-xs font-semibold px-2 py-1 rounded-full">
                      {item.tags[0]}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-pink-600">{item.price}</span>
                      <span className="text-gray-400 text-sm line-through ml-2">{item.originalPrice}</span>
                    </div>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Customer Reviews</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">What our customers say about us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {"★".repeat(testimonial.rating)}
                  </div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-pink-500 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Get In Touch</h2>
            <p className="max-w-2xl mx-auto">Ready to order or have questions? Wed love to hear from you!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div>+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div>hello@fluffycravingss.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div>Patna, Bihar - Serving across the city</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-white bg-opacity-20 border border-white border-opacity-30 rounded-full px-6 py-3 placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full bg-white bg-opacity-20 border border-white border-opacity-30 rounded-full px-6 py-3 placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows="4"
                    className="w-full bg-white bg-opacity-20 border border-white border-opacity-30 rounded-3xl px-6 py-3 placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🍩</span>
                </div>
                <span className="text-xl font-bold font-heading">Fluffy Cravingss</span>
              </div>
              <p className="text-gray-400 mb-4">Where passion meets perfection, one pastry at a time.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">WhatsApp</span>
                  <i className="fab fa-whatsapp text-xl"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['home', 'about', 'menu', 'testimonials', 'contact'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection(item)}
                      className="text-gray-400 hover:text-white transition-colors capitalize"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+91 98765 43210</li>
                <li>hello@fluffycravingss.com</li>
                <li>Patna, Bihar</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Delivery Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Friday: 9AM - 9PM</li>
                <li>Saturday - Sunday: 10AM - 10PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2023 Fluffy Cravingss. Made with ❤️ by a 16-year-old dreamer in Patna, Bihar</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FluffyCravingss;