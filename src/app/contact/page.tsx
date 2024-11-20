'use client'

import React from 'react';
import '../globals.css';

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <title>CONTACT</title>
      <div className="flex justify-center items-center flex-col bg-black h-screen">
        <h1 className="mb-4 text-4xl font-bold text-white">CONTACT</h1>
      </div>

      {/* Contact Section */}
      <section className="container py-10 mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Let's Talk!</h2>
          <p className="text-lg text-gray-700">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <form
          className="w-full max-w-lg mx-auto"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="10947d5b-61a6-487a-bd31-3f27a9480579"
          />
          <input
            type="hidden"
            name="subject"
            value="Demande de contact"
          />
          <input
            type="hidden"
            name="from_name"
            value="Portfolio Photo"
          />

          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-800 font-medium">Name*</label>
              <input
                id="name"
                name="name"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                placeholder="Your name"
                type="text"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-800 font-medium">Email*</label>
              <input
                id="email"
                name="email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                placeholder="Your email"
                type="email"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-gray-800 font-medium">Phone</label>
              <input
                id="phone"
                name="phone"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                placeholder="+1 (234) 56789"
                type="text"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-gray-800 font-medium">Subject*</label>
              <input
                id="subject"
                name="subject"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                placeholder="Subject"
                type="text"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-800 font-medium">Message*</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                placeholder="Your message"
                required
              ></textarea>
            </div>
          </div>

          {/* Notice for required fields */}
          <p className="mt-4 text-gray-600 text-sm">* Required fields</p>

          {/* Submit Button */}
          <button className="w-full py-3 mt-6 bg-black text-white rounded-md hover:bg-gray-800" type="submit">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};
