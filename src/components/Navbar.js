"use client";

import React, { useEffect, useRef, useState } from "react";
import logo from "../../public/image/d.png";
import Image from "next/image";
import { CircleX, Menu } from "lucide-react";

export default function Navbar({
  setIsMenuOpen,
  scrollToSection,
  activeSection,
  isMenuOpen,
}) {
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // agar click menu ke andar nahi hua
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
   <header className="fixed w-full bg-white/30 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-4 py-4 cursor-pointer flex justify-between items-center">
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center space-x-2"
        >
          <Image src={logo} alt="Logo" width={50} height={200} />
          <div className="">
            <h1 className="text-2xl font-bold font-heading  text-[#7ebcac] ">
              Fluffy Cravingss
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex lg:space-x-8 space-x-3 ">
          {["about", "menu", "reviews", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize font-medium transition-all duration-300 ${
                activeSection === item
                  ? "text-pink-600 font-semibold"
                  : "text-gray-600 hover:text-pink-500"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
        <a
          href="https://wa.me/919219538487?text=Hi%20I%27m%20interested%20in%20your%20menu%20items!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hidden cursor-pointer md:block bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
            Order Now
          </button>
        </a>

        {/* Mobile Menu Button */}
        <button
        
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
         
            {!isMenuOpen ? (
            <Menu />
            ) : (
             <CircleX />
            )}
        </button>

        
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div   ref={menuRef} className="md:hidden backdrop-blur-md  z-50 py-4 px-4 shadow-inner">
          <div className="flex flex-col space-y-4">
            {["about", "menu", "reviews", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium text-left py-2 px-4 rounded-lg ${
                    activeSection === item
                      ? "bg-pink-100 text-pink-600 font-semibold"
                      : "text-gray-600 hover:bg-pink-50"
                  }`}
                >
                  {item}
                </button>
              )
            )}

            <a
              className="bg-gradient-to-r from-pink-500 text-center to-orange-500 text-white py-2 px-4 rounded-full font-semibold mt-2"
              href="https://wa.me/919219538487?text=Hi%20I%27m%20interested%20in%20your%20menu%20items!"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
