import Image from "next/image";
import React from "react";
import ashita from "../../public/image/ashita.png";

export default function AboutSection({ age }) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From a Small Kitchen to Khalilabad&apos;s Favorite Home Bakery
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-start items-center gap-10 max-w-6xl mx-auto">
  {/* Left side (image) */}
  <div className="md:w-1/2 flex justify-center md:justify-end">
    <div className="relative inline-block">
      <Image
        src={ashita}
        alt="Logo"
        width={400}
        height={400}
        className="rounded-3xl shadow-lg"
      />
      <div className="absolute -bottom-6 -right-6 bg-pink-500 text-white p-6 rounded-2xl shadow-lg">
        <div className="text-3xl font-bold">{age}</div>
        <div className="text-sm">Year Old Baker</div>
      </div>
    </div>
  </div>

  {/* Right side (text) */}
  <div className="md:w-1/2">
    <h3 className="text-2xl font-heading font-bold mb-6">
      Baking with Passion Since 2022
    </h3>
    <p className="text-gray-600 mb-6">
      Baking with Passion Since 2022 What started as a hobby in a small
      kitchen has grown into Khalilabad&apos;s most loved home bakery.
      Our young founder discovered the joy of turning simple ingredients
      into delightful treats that bring smiles and sweet memories.
    </p>
    <p className="text-gray-600 mb-8">
      Every creation reflects dedication, creativity, and the love for
      making every bite special. At Fluffy Cravingss, we believe that
      baking is not just about taste – it&apos;s about creating moments
      of happiness and celebration.
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
  );
}
