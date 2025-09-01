'use client'
import React, { useState } from 'react'
import { ShoppingBag, Plus, Minus, X, MessageCircle, Sparkles, CreditCard } from 'lucide-react';
import toast from 'react-hot-toast';

export default function MenuItems({menuItems, ownerNumber}) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  return (
    <>
      <section
        id="menu"
        className="py-20 bg-gradient-to-br from-pink-50 to-orange-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Menu
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Delicious treats made with the finest ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {menuItems.map((item) => (
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
            <div className="relative bg-gradient-to-br  from-pink-500 to-orange-500 p-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 group-hover:shadow-purple-500/25">
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
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="flex min-h-full items-center justify-center xl:p-4 p-8">
            <div className="relative w-full max-w-2xl transform transition-all">
              {/* Close Button */}
              <button
                onClick={() => setIsCartOpen(false)}
                className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>

              {/* Cart Component */}
              <div className="relative">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-blue-400/20 blur-xl rounded-3xl"></div>
                
                {/* Main Cart Container */}
                <div className="relative bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 overflow-hidden">
                  {/* Floating Sparkles */}
                  <div className="absolute top-4 right-4 text-yellow-400 animate-pulse">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div className="absolute top-8 right-12 text-purple-400 animate-bounce" style={{ animationDelay: '0.5s' }}>
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="absolute top-6 right-20 text-pink-400 animate-pulse" style={{ animationDelay: '1s' }}>
                    <Sparkles className="w-3 h-3" />
                  </div>

                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl blur opacity-30"></div>
                        <div className="relative bg-gradient-to-br  from-pink-500 to-orange-500 p-3 rounded-2xl">
                          <ShoppingBag className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold bg-gradient-to-r  from-pink-500 to-orange-500 bg-clip-text text-transparent">
                          Your Cart
                        </h2>
                        <p className="text-gray-500 text-sm">{cart.length} items selected</p>
                      </div>
                    </div>
                    
                    {/* Cart Item Count Badge */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur opacity-30"></div>
                      <div className="relative bg-gradient-to-br from-[#7EBCAC] to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                        {getTotalItems()} Items
                      </div>
                    </div>
                  </div>

                  {/* Cart Items */}
                  <div className="space-y-4 mb-8 max-h-96 overflow-y-auto">
                    {cart.map((item, index) => (
                      <div
                        key={item.id}
                        className="group bg-gradient-to-r from-gray-50 to-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-800 hover:text-pink-500  transition-colors">
                              {item.name}
                            </h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="text-lg font-bold text-pink-600">₹{item.price}</span>
                              <span className="text-gray-400">per unit</span>
                            </div>
                          </div>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center bg-white border-2 border-gray-200 rounded-full overflow-hidden shadow-sm">
                              <button
                                onClick={() => decreaseQty(item.id)}
                                className="p-2 hover:bg-gray-100 transition-colors text-gray-600 hover:text-purple-600"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="px-4 py-2 font-bold text-orange-700 bg-purple-50">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => increaseQty(item.id)}
                                className="p-2 hover:bg-gray-100 transition-colors text-gray-600 hover:text-purple-600"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            
                            {/* Subtotal */}
                            <div className="text-right min-w-[80px]">
                              <div className="font-bold text-gray-800">₹{item.price * item.quantity}</div>
                            </div>
                            
                            {/* Remove Button */}
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all duration-200 hover:scale-110"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Total Section */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl opacity-50"></div>
                    <div className="relative bg-gradient-to-r from-gray-50 to-white border-2 border-purple-200 rounded-2xl p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-gray-600">Total Amount</span>
                          <div className="flex items-center space-x-2 mt-1">
                            <CreditCard className="w-5 h-5 text-purple-500" />
                            <span className="text-sm text-gray-500">Inclusive of all taxes</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                            ₹{getTotalPrice()}
                          </div>
                          <div className="text-sm text-gray-500">
                            {getTotalItems()} items
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block w-full bg-gradient-to-r from-pink-500  to-orange-400 text-white font-bold text-lg py-4 px-8 rounded-2xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden"
                      onClick={() => setIsCartOpen(false)}
                    >
                      {/* Button Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      <div className="relative flex items-center justify-center space-x-3">
                        <MessageCircle className="w-6 h-6" />
                        <span>Checkout on WhatsApp</span>
                        <div className="bg-white/20 px-2 py-1 rounded-full text-sm">
                          ₹{getTotalPrice()}
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Trust Badges */}
                  <div className="mt-6 flex justify-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Fast Delivery</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}