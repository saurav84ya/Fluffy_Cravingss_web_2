import React from "react";
import logo from "../../public/image/d.png";
import Image from "next/image";

export default function Footer({ scrollToSection, ownerEmail, ownerNumber }) {
  console.log("ownerNumber", ownerNumber);
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-2">
                <Image src={logo} alt="Logo" width={50} height={200} />
                <div className="hidden md:flex">
                  <h1 className="text-2xl font-bold font-heading text-[#7ebcac]">
                    Fluffy Cravingss
                  </h1>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Where passion meets perfection, one pastry at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">WhatsApp</span>
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["home", "about", "menu", "reviews", "contact"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className="text-gray-400 hover:text-white transition-colors capitalize"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href={`tel:+91${ownerNumber}`}>+91 {ownerNumber}</a>
              </li>
              <li className="pr-3">
                <a href={`mailto:${ownerEmail}`}>{ownerEmail}</a>
              </li>
              <li>
                <a 
                  href="https://www.google.com/maps?q=Khalilabad,+UP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Khalilabad, UP
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Delivery Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Saturday: 9AM - 2PM</li>
              <li>Sunday: 10AM - 10PM (Check before ordering)</li>
            </ul>
          </div>
        </div>
        
        {/* Developer Credits Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 space-y-3">
          <p className="text-sm">
            © 2024 Fluffy Cravingss. Made with ❤️ for sweet dreams and delicious treats.
          </p>
          <div className="text-xs space-y-2">
           
              
            <p>Developed by           <a href="https://saurav84ya.netlify.app"   target="_blank" ><span className="text-[#7ebcac] font-medium">Saurav chaurasia</span></a> </p>
            <div className="flex justify-center space-x-4 text-xs">
              <a
                href="mailto:sauravkumarobra50@gmail.com"
                className="hover:text-white transition-colors"
              >
                📧 Email
              </a>
              <a
                href="https://wa.me/917762074220"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                💬 WhatsApp
              </a>
              <a
                href="https://www.instagram.com/saurav_8.4ya/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                📸 Instagram
              </a>
              <a
                href="https://github.com/saurav84ya"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                💻 GitHub
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            Need a website for your business? Contact the developer above!
          </p>
        </div>
      </div>
    </footer>
  );
}