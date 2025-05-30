'use client';

import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  // Correctly extract form values with type casting
  const name = (form.elements.namedItem('name') as HTMLInputElement).value;
  const email = (form.elements.namedItem('email') as HTMLInputElement).value;
  const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

  try {
    const res = await fetch('https://formspree.io/f/xeogypvl', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

  
    if (res.ok) {
      setSubmitted(true);
  
  form.reset(); 
}

  } catch (error) {
    console.error('Form error:', error);
  }
};


  return (
    <section className="w-full  max-w-xl mx-auto py-16 px-4" id="contact">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Contact Me</h2>
      
      
        <form onSubmit={handleSubmit} className="border border-white bg-black rounded-lg shadow-lg p-6 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded h-32"
          />
          <button
            type="submit"
            className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Send Message...
          </button>
          {submitted && (
          <p className="text-green-400 text-center" aria-live="polite">
            Thank you! I&apos;ll get back to you soon.
          </p>
        )}

        </form>
      
    </section>
  );
}
