'use client'
import React, { useState } from 'react'
import { ShoppingBag, Plus, Minus, X, MessageCircle, Sparkles, CreditCard } from 'lucide-react';
import toast from 'react-hot-toast';

// Sample menu data


export default function MenuItems({ ownerNumber , menuItems }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  // Get unique categories from menu items
  const categories = ['All', ...new Set(menuItems.map(item => item.category))];

  // Filter menu items based on active category
  const filteredMenuItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + parseInt(item.price) * item.quantity,
      0
    );
  };

  // Get total items count
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Generate WhatsApp link with cart items
  const generateWhatsAppLink = () => {
    let message = "✨ Hello! I'd like to place an order ✨\n\n";
    message += "🛒 *My Cart:*\n\n";

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - ₹${item.price} x ${item.quantity} = *₹${item.quantity * parseInt(item.price)}*\n`;
    });

    message += `\n💰 *Total = ₹${getTotalPrice()}*\n\n`;
    message += "🙏 Please confirm my order ✅";

    return `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;
  };

  const showToast = (message) => {
    // Simple toast simulation - you can replace with actual toast library
    console.log(message);
  };

  return (
    <>
      <section
        id="menu"
        className="py-20  bg-gradient-to-br

 from-orange-100 via-white to-purple-200"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Menu
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Delicious treats made with the finest ingredients
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg shadow-pink-500/30'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-pink-300 hover:text-pink-600 hover:shadow-md'
                  }`}
                >
                  {category}
                  {category !== 'All' && (
                    <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
                      {menuItems.filter(item => item.category === category).length}
                    </span>
                  )}
                  {category === 'All' && (
                    <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs">
                      {menuItems.length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {filteredMenuItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
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
                      <span className="font-bold text-pink-600">₹{item.price}</span>
                      <span className="text-gray-400 text-sm line-through ml-2">
                        ₹{item.originalPrice}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        addToCart(item);
                        toast.success("Added to cart");
                      }}
                      className="bg-pink-500 text-white cursor-pointer px-4 py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show message when no items match filter */}
          {filteredMenuItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No items found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Floating Cart Icon */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative group"
          >
            {/* Glow Effect */}
            <div className="absolute border inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity animate-pulse"></div>
            
            {/* Main Button */}
            <div className="relative bg-gradient-to-br from-pink-500 to-orange-500 p-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 group-hover:shadow-purple-500/25">
              <ShoppingBag className="w-6 h-6 text-white" />
              
              {/* Item Count Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
                {getTotalItems()}
              </div>
            </div>
            
            {/* Floating Sparkles */}
            <div className="absolute top-0 right-0 text-yellow-400 animate-ping">
              <Sparkles className="w-3 h-3" />
            </div>
          </button>
        </div>
      )}

      {/* Cart Modal/Overlay */}
{isCartOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center px-2 sm:px-4">
    {/* Animated Backdrop */}
    <div
      className="fixed inset-0 bg-gradient-to-br from-black/60 via-purple-900/40 to-pink-900/40 backdrop-blur-md transition-all duration-300"
      onClick={() => setIsCartOpen(false)}
    ></div>

    {/* Modal Wrapper with bounce animation */}
    <div className="relative w-full max-w-2xl mx-auto p-2 sm:p-4 lg:p-6 animate-in zoom-in-95 fade-in duration-300">
      {/* Enhanced Close Button */}
      <button
        onClick={() => setIsCartOpen(false)}
        className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-10 bg-gradient-to-br from-white to-gray-50 hover:from-red-50 hover:to-red-100 rounded-full p-2 sm:p-3 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-200 border border-gray-200 hover:border-red-300"
      >
        <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-red-500 transition-colors" />
      </button>

      {/* Enhanced Modal Content */}
      <div className="relative bg-white/95 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl overflow-hidden">
        {/* Animated Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 via-pink-400/25 to-blue-400/30 animate-pulse rounded-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-3xl"></div>

        {/* Content Container */}
        <div className="relative p-4 sm:p-6 lg:p-8">
          {/* Enhanced Header */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 p-2 sm:p-3 rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-200">
                  <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                  Shopping Cart
                </h2>
                <p className="text-gray-500 text-sm sm:text-base">{cart.length} items selected</p>
              </div>
            </div>

            {/* Enhanced Item Count Badge */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-2xl font-bold text-xs sm:text-sm shadow-lg transform group-hover:scale-105 transition-transform duration-200">
                {getTotalItems()} Items
              </div>
            </div>
          </div>

          {/* Enhanced Cart Items with better scrolling */}
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 max-h-60 sm:max-h-80 lg:max-h-96 overflow-y-auto pr-2 custom-scrollbar">
            {cart.map((item, index) => (
              <div
                key={item.id}
                className="group bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-sm border border-gray-200/50 hover:border-purple-300/50 rounded-2xl sm:rounded-3xl p-3 sm:p-4 hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 animate-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between items-start sm:items-center">
                  {/* Enhanced Left Section */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 hover:text-pink-600 transition-colors duration-200 truncate pr-2">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                        ₹{item.price}
                      </span>
                      <span className="text-gray-400 text-xs sm:text-sm">per unit</span>
                    </div>
                  </div>

                  {/* Enhanced Right Section */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    {/* Enhanced Quantity Controls */}
                    <div className="flex items-center bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-purple-300 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="p-2 sm:p-2.5 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-200 text-gray-600 hover:text-purple-600 transform active:scale-95"
                      >
                        <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                      <span className="px-3 sm:px-4 py-1 sm:py-1.5 font-bold text-orange-700 bg-gradient-to-r from-purple-50 to-pink-50 min-w-[2.5rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="p-2 sm:p-2.5 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-200 text-gray-600 hover:text-purple-600 transform active:scale-95"
                      >
                        <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>

                    {/* Enhanced Subtotal + Remove */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="font-bold text-gray-800 text-lg bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
                        ₹{item.price * item.quantity}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200 transform hover:scale-110 active:scale-95 hover:shadow-md"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Total Section */}
          <div className="bg-gradient-to-r from-white/90 via-purple-50/50 to-pink-50/50 backdrop-blur-sm border border-purple-200/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-6 shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-gray-600 font-medium">Total Amount</span>
                <div className="flex items-center space-x-2 mt-1">
                  <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                  <span className="text-xs sm:text-sm text-gray-500">Inclusive of all taxes</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                  ₹{getTotalPrice()}
                </div>
                <div className="text-sm text-gray-500">{getTotalItems()} items</div>
              </div>
            </div>
          </div>

          {/* Enhanced Checkout Button */}
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsCartOpen(false)}
            className="group block w-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 hover:from-pink-600 hover:via-purple-600 hover:to-orange-500 text-white font-bold text-base sm:text-lg py-3 sm:py-4 px-6 rounded-2xl sm:rounded-3xl text-center transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden shadow-lg"
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="relative flex items-center justify-center space-x-2 sm:space-x-3">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Checkout on WhatsApp</span>
              <div className="bg-white/20 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm border border-white/20">
                ₹{getTotalPrice()}
              </div>
            </div>
          </a>

          {/* Enhanced Trust Badges */}
          <div className="mt-4 sm:mt-6 flex justify-center flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
            {[
              { color: 'green', text: 'Secure Payment' },
              { color: 'blue', text: 'Fast Delivery' },
              { color: 'purple', text: '24/7 Support' }
            ].map((badge, index) => (
              <div key={badge.text} className="flex items-center space-x-2 group">
                <div className={`w-2 h-2 bg-${badge.color}-400 rounded-full animate-pulse`}></div>
                <span className="group-hover:text-gray-700 transition-colors">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)}


    </>
  );
}