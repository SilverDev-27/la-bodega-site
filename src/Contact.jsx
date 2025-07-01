import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white via-[#f7f3e9] to-[#d2b48c] py-20 px-4 sm:px-8 xl:px-16"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-bold text-yellow-700 mb-6">
          Contact Us
        </h2>
        <p className="text-lg sm:text-xl text-gray-800 mb-10">
          Ask Us To Rent Our Space or Send Us Any Questions Below!
        </p>

        <form
          action="https://formspree.io/f/mqabqpjw" // ← replace this
          method="POST"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded px-4 py-3 text-lg"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded px-4 py-3 text-lg"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-300 rounded px-4 py-3 text-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-700 text-white px-6 py-3 rounded text-lg hover:bg-yellow-800 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-16 space-y-3 text-lg text-yellow-900">
          <p>
            <strong>Instagram:</strong>{' '}
            <a
              href="https://www.instagram.com/labodegacafe_/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-700 underline"
            >
              @labodegacafe_
            </a>
          </p>
          <p>
            <strong>Facebook:</strong>{' '}
            <a
              href="https://www.facebook.com/people/La-Bodega-Caf%C3%A9/61573905029236/#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-700 underline"
            >
              La Bodega Café
            </a>
          </p>
          <p><strong>Phone:</strong> (708) 690-2150</p>
          <p><strong>Address:</strong> 2574 Walter Zimny Dr, Posen, IL 60469</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
