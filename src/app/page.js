"use client";

import React, { useState, useEffect } from "react";
import MenuItems from "@/components/MenuItems";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Testmonials from "@/components/Testmonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const FluffyCravingss = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "menu", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const ownerNumber = "9219538487";
  const ownerEmail ="fluffycravingss@gmail.com"
  const ownerName = "Ashita Jaiswal";
  const dob = "2009-11-02"; // YYYY-MM-DD format
  const today = new Date();
  const birthDate = new Date(dob);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // agar birthday abhi aaya nahi hai iss saal, to age -1 kar do
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

 const menuItems = [
  {
    id: 1,
    name: "Signature Glazed Donuts",
    description:
      "Soft, fluffy donuts dipped in our iconic golden glaze — a timeless recipe perfected over the years 🤎",
    price: "85",
    originalPrice: "110",
    image: "🍩",
    rating: 4.9,
    orders: "2.1k",
    tags: ["Bestseller", "Gluten-Free Option"],
  },
  {
    id: 2,
    name: "Italian Bombolonis",
    description:
      "Authentic Italian cream-filled delights, oozing with silky vanilla custard & baked to perfection 🇮🇹✨",
    price: "125",
    originalPrice: "150",
    image: "🥮",
    rating: 5.0,
    orders: "1.8k",
    tags: ["Premium", "Chef's Special"],
  },
  {
    id: 3,
    name: "Artisan Cookies",
    description:
      "Crispy on the edges, gooey inside — loaded with rich Belgian chocolate chunks 🍫🍪",
    price: "65",
    originalPrice: "85",
    image: "🍪",
    rating: 4.8,
    orders: "3.2k",
    tags: ["Classic", "Kids Favorite"],
  },
  {
    id: 4,
    name: "Gourmet Cupcakes",
    description:
      "Moist vanilla cupcakes crowned with our signature silky-smooth buttercream swirl 🧁🌸",
    price: "95",
    originalPrice: "120",
    image: "🧁",
    rating: 4.9,
    orders: "1.5k",
    tags: ["Celebration", "Custom Design"],
  },
  {
    id: 5,
    name: "Seasonal Specials",
    description:
      "Handcrafted limited-edition treats, inspired by the festive flavors of every season 🎉🍂",
    price: "140",
    originalPrice: "175",
    image: "🎂",
    rating: 5.0,
    orders: "892",
    tags: ["Limited Edition", "Seasonal"],
  },
  {
    id: 6,
    name: "French Macarons",
    description:
      "Delicate almond shells with dreamy fillings — 12 luxurious flavors to savor 🌈✨",
    price: "180",
    originalPrice: "220",
    image: "🌈",
    rating: 4.7,
    orders: "654",
    tags: ["Luxury", "Gift Box Available"],
  },
];


  const testimonials = [
    {
      id: 1,
      name: "Ananya Sharma",
      role: "Food Blogger",
      text: "Fluffy Cravingss has redefined what home baking can achieve. The bombolonis are restaurant-quality, and the presentation is Instagram-worthy. This young baker is going places!",
      rating: 5,
      image: "👩🏻‍💼",
      location: "Boring Road, Patna",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Event Planner",
      text: "I've ordered for multiple corporate events and family celebrations. The consistency in quality and the creative presentation never fails to impress our guests.",
      rating: 5,
      image: "👨🏻‍💻",
      location: "Frazer Road, Patna",
    },
    {
      id: 3,
      name: "Priya Singh",
      role: "Mother of Two",
      text: "My kids absolutely love the cookies, and I love that I can trust the quality. It's become our go-to for birthday parties and family gatherings.",
      rating: 5,
      image: "👩🏽‍🦱",
      location: "Kankarbagh, Patna",
    },
  ];

  return (
    <div className=" text-gray-800 bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}


           



      <Navbar
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <HeroSection age={age} scrollToSection={scrollToSection} />

      {/* About Section */}
      <AboutSection age={age} />

      {/* Menu Section */}
      <MenuItems menuItems={menuItems} ownerNumber={ownerNumber} />

      {/* Testimonials Section */}
      <Testmonials testimonials={testimonials} />

      {/* Contact Section */}
      <ContactSection ownerNumber={ownerNumber} ownerEmail={ownerEmail} />

      {/* Footer */}
      <Footer ownerEmail={ownerEmail} ownerNumber={ownerNumber}  scrollToSection ={scrollToSection}/>
    </div>
  );
};

export default FluffyCravingss;
