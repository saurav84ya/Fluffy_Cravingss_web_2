import React from 'react'

export default function Testmonials({testimonials}) {
  return (
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Customer Reviews
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What our customers say about us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl p-6 shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {"★".repeat(testimonial.rating)}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
