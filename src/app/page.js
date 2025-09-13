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
    id: 10,
    name: "Whole Wheat Crumble Cookies",
    category: "Cookies",
    description:
      "Healthy whole wheat crumble cookies — 4 pieces of guilt-free crunch 🍪",
    price: "60",
    originalPrice: "75",
    image: "🍪",
    rating: 4.7,
    orders: "512",
    tags: ["Healthy", "Crunchy"],
  },
  {
    id: 1,
    name: "Chocolate Bombolonies",
    category: "Bombolonies",
    description:
      "Soft Italian bombolonies filled with rich chocolate cream — melts in your mouth instantly 🍫",
    price: "40",
    originalPrice: "55",
    image: "🍫",
    rating: 4.9,
    orders: "1.2k",
    tags: ["Bestseller", "Chocolate Lover"],
  },
  {
    id: 2,
    name: "Strawberry Bombolonies",
    category: "Bombolonies",
    description:
      "Fluffy bombolonies bursting with fresh strawberry cream, a fruity delight 🍓",
    price: "35",
    originalPrice: "50",
    image: "🍓",
    rating: 4.8,
    orders: "980",
    tags: ["Fresh", "Fruity"],
  },
  {
    id: 3,
    name: "Crème Brûlée Bombolonies",
    category: "Bombolonies",
    description:
      "Golden caramelized top with silky vanilla custard inside — a chef’s signature 🍮",
    price: "50",
    originalPrice: "60",
    image: "🍮",
    rating: 5.0,
    orders: "756",
    tags: ["Premium", "Chef's Special"],
  },
  {
    id: 4,
    name: "Vanilla Donuts",
    category: "Donuts",
    description:
      "Classic soft donuts dipped in creamy vanilla glaze — simple yet irresistible 🍩",
    price: "40",
    originalPrice: "55",
    image: "🍩",
    rating: 4.7,
    orders: "1.5k",
    tags: ["Classic", "Kids Favorite"],
  },
  {
    id: 5,
    name: "Chocolate Donuts",
    category: "Donuts",
    description:
      "Rich chocolate glaze with sprinkles on top — every bite is pure indulgence 🍫",
    price: "45",
    originalPrice: "65",
    image: "🍫",
    rating: 4.9,
    orders: "2.3k",
    tags: ["Bestseller", "Choco Blast"],
  },
  {
    id: 6,
    name: "Oreo Donuts",
    category: "Donuts",
    description:
      "Crunchy Oreo topping over smooth cream glaze — a crowd favorite 🍪",
    price: "50",
    originalPrice: "70",
    image: "🍪",
    rating: 5.0,
    orders: "3.1k",
    tags: ["Bestseller", "Youth Favorite"],
  },
  {
    id: 7,
    name: "Small Box of Churros with Chocolate Dip",
    category: "Churros",
    description:
      "Golden fried churros served with rich chocolate dip — happiness in a box 🥖",
    price: "70",
    originalPrice: "90",
    image: "🥨",
    rating: 4.6,
    orders: "824",
    tags: ["Classic", "Snack Box"],
  },
  {
    id: 8,
    name: "Large Box of Churros with Chocolate Dip",
    category: "Churros",
    description:
      "Share the joy! Bigger box of crispy churros with extra chocolate dip 🎉",
    price: "100",
    originalPrice: "130",
    image: "🥨",
    rating: 4.8,
    orders: "1.1k",
    tags: ["Family Pack", "Party Special"],
  },
  {
    id: 9,
    name: "Special Gift Combo",
    category: "Combo",
    description:
      "Includes: 1 Oreo Madness Donut + 2 Chocolate Bombolonies or 1 Chocolate Donut 🎁",
    price: "200",
    originalPrice: "250",
    image: "🎁",
    rating: 5.0,
    orders: "643",
    tags: ["Gift Box", "Celebration"],
  }
];




  const testimonials = [
    {
      id: 1,
      name: "Arpita singh",
      role: "Student",
      text: "I tried the chocolate bombolonies and an Oreo donut… wow! Everything was so soft, fresh, and absolutely delicious!",
      rating: 5,
      image: "👩🏻‍💼",
      location: "Khalilabad",
    },
     {
      id: 3,
      name: "Abhishek madheshiya",
      role: "teacher ",
      text:"As a teacher, I must say—these Chocolate Bombolonis are top marks! 🍫 Soft, perfectly sweet, and absolutely delightful. A+ for taste! 👩‍🏫",
      rating: 5,
      image: "👨‍🏫",
      location: "Khalilabad",
    },
    {
      id: 2,
      name: " Madhvi pandey",
      role: "Student",
      text: "The churros with chocolate dip are amazing! Crispy, sweet, and perfect for sharing or just treating yourself.",
      rating: 5,
      image: "👩🏻‍💼",
      location: "Khalilabad",
    },
   
    
    {
      id: 4,
      name: "Tanya jaiswal",
      role: "Makeup artist",
      text:"Fluffy Cravingss never disappoints! Every treat is pure happiness in a bite. Definitely ordering again soon!",
      rating: 5,
      image: "👩🏻‍🎨",
      location: "Khalilabad",
    },

    
    
    {
      id: 5,
      name: "Shiddhvi",
      role: "Doctor",
      text:"Bomobolonies were too goood bbg They were full of sweetness ,and very soft My whole family loved it🩷🤌🏻",
      rating: 4,
      image: "👩‍⚕️",
      location: "Khalilabad",
    },

    
  ];

  return (
    <div className=" text-gray-800">
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
