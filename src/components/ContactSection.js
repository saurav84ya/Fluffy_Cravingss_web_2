import React from 'react'

export default function ContactSection({ownerEmail,ownerNumber}) {
  return (
     <section
        id="contact"
        className="py-20 bg-gradient-to-br from-pink-500 to-orange-500 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Get In Touch
            </h2>
            <p className="max-w-2xl mx-auto">
              Ready to order or have questions? Wed love to hear from you!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div>+91 {ownerNumber}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div>{ownerEmail}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div>Khalilabad, UP - Serving across the city</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">
                Send us a Message
              </h3>
             <form 
  action="https://getform.io/f/bjjrrmxb" 
  method="POST" 
  className="space-y-6 max-w-lg mx-auto"
>
  {/* Name Field */}
  <div className="flex flex-col space-y-2">
    <label htmlFor="name" className="text-white font-medium">
      Your Name
    </label>
    <input
      id="name"
      name="name"
      type="text"
      placeholder="Enter your name"
      required
      className="w-full text-black bg-white bg-opacity-20 border border-white border-opacity-30 rounded-full px-6 py-3 placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-pink-400"
    />
  </div>

  {/* Email Field */}
  <div className="flex flex-col space-y-2">
    <label htmlFor="email" className="text-white font-medium">
      Your Email
    </label>
    <input
      id="email"
      name="email"
      type="email"
      placeholder="Enter your email"
      required
      className="w-full text-black bg-white bg-opacity-20 border border-white border-opacity-30 rounded-full px-6 py-3 placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-pink-400"
    />
  </div>

  {/* Message Field */}
  <div className="flex flex-col space-y-2">
    <label htmlFor="message" className="text-white font-medium">
      Your Message
    </label>
    <textarea
      id="message"
      name="message"
      placeholder="Write your message..."
      rows="5"
      required
      className="w-full text-black bg-white bg-opacity-20 border border-white border-opacity-30 rounded-3xl px-6 py-3 placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-pink-400"
    ></textarea>
  </div>

  {/* Submit Button */}
<button
                  type="submit"
                  className="bg-white cursor-pointer text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Send Message
                </button> 
</form>



               


            </div>
          </div>
        </div>
      </section>
  )
}
