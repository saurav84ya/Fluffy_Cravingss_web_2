import React from 'react'

export default function HeroSection({scrollToSection,age}) {
  return (
    <section id="home" className="pt-32 md:pt-0 md:pb-0 pb-20 px-4  bg-gradient-to-br from-pink-100 via-white to-purple-200 ">
        <div className="container mx-auto">
          <div className="flex flex-col min-h-screen  md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="inline-flex items-center bg-pink-100 text-pink-700 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-semibold">
                  Khalilabad&apos;s Most Loved Bakery
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Handcrafted <span className="text-pink-600">Happiness</span>{" "}
                Delivered to Your Door
              </h1>
              <p className="text-lg text-gray-600 mb-8">
               Experience the magic of artisan baking where every bite tells a story — handcrafted happiness, made just for you, created with passion by a {age}-year-old culinary artist. 🌸
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                className="bg-gradient-to-r cursor-pointer from-pink-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-center "
                  href="https://wa.me/919219538487?text=Hi%20I%27m%20interested%20in%20your%20menu%20items!" target="_blank"
                  rel="noopener noreferrer"
                >
                  
                    Order Now
                  
                </a>

                <button
                  onClick={() => scrollToSection("menu")}
                  className="border-2 cursor-pointer border-pink-500 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300"
                >
                  View Menu
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative z-10 bg-white p-6 rounded-3xl shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-pink-100 rounded-2xl p-6 text-center transform rotate-2">
                    <span className="text-5xl"> 🍮</span>
                    <h3 className="font-semibold mt-2">bombolonies</h3>
                  </div>
                  <div className="bg-orange-100 rounded-2xl p-6 text-center transform -rotate-2">
                    <span className="text-5xl">🥨</span>
                    <h3 className="font-semibold mt-2">churros</h3>
                  </div>
                  <div className="bg-yellow-100 rounded-2xl p-6 text-center transform -rotate-2">
                    <span className="text-5xl">🥐</span>
                    <h3 className="font-semibold mt-2">croissant</h3>
                  </div>
                  <div className="bg-purple-100 rounded-2xl p-6 text-center transform rotate-2">
                    <span className="text-5xl">🍩</span>
                    <h3 className="font-semibold mt-2">Donuts</h3>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-3xl opacity-20 blur-lg"></div>
            </div>
          </div>
        </div>
      </section>
  )
}
