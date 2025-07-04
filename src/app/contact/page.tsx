'use client'

import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(form)
    // You can connect to backend or email service here
  }

  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-blue mb-4 mt-4">Get in Touch</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Have questions, suggestions, or just want to say hi? We&apos;d love to hear from you!
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row gap-12 mb-8">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue resize-none"
              placeholder="Tell us something..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 bg-[#00aeff] text-white px-6 py-3 rounded-md hover:bg-darkblue transition duration-300"
          >
            <Send size={18} /> Send Message
          </button>
        </form>

       {/* Contact Details */}
<div className="w-full md:w-1/2 flex justify-center">
  <div className="space-y-8 text-gray-700 max-w-md mt-12 md:mt-0">
    <div className="flex items-start gap-4">
      <Phone className="text-blue w-6 h-6 mt-1" />
      <div>
        <h4 className="text-lg font-semibold">Call Us</h4>
        <p>+234 816 927 3808</p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <Mail className="text-blue w-6 h-6 mt-1" />
      <div>
        <h4 className="text-lg font-semibold">Email</h4>
        <p>support@brighto.com</p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <MapPin className="text-blue w-6 h-6 mt-1" />
      <div>
        <h4 className="text-lg font-semibold">Location</h4>
        <p>Lagos, Nigeria</p>
      </div>
    </div>

    <div className="pt-4">
      <h4 className="text-lg font-semibold">Office Hours</h4>
      <p>Mon - Fri: 9:00am - 5:00pm</p>
      <p>Sat - Sun: Closed</p>
    </div>
  </div>
</div>

      </div>

      {/* Google Map */}
    <div className="w-full h-[400px] ">
<h3 className="text-xl font-semibold text-center text-blue mb-6 mt-10">Find Us on the Map</h3>

  <iframe
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15827.519038939494!2d3.8757129!3d7.367372250000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398db489030835%3A0x866512550f119ad2!2sMauve21%20Hotel%20and%20Events%20Center!5e0!3m2!1sen!2sng!4v1751629069325!5m2!1sen!2sng"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-md shadow-md"
  ></iframe>
 
</div>


    </section>
  )
}
