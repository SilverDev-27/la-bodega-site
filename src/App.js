import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './Navbar';
import Menu from './Menu';
import About from './About';
import IceCream from './IceCream';
import Contact from './Contact';
import PromoBanner from './PromoBanner';

import openingSlide from './assets/slide4.mp4';
import slide1 from './assets/strawberry-refresher.jpg'; // Updated first slide
import slide2 from './assets/slide1.jpg'; // Duvalin or fallback image
import slide3 from './assets/slide2.jpg'; // Matcha w strawberry coldfoam

const slides = [openingSlide, slide1, slide2, slide3];

const App = () => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (current === 0 && videoRef.current) {
      videoRef.current.currentTime = 0; // ✅ Reset to start
      // No need to call play()
    }
  }, [current]);

  return (
    <div className="bg-gradient-to-b from-[#d2b48c] via-[#f7f3e9] to-white text-black">
      <Navbar />
      <main className="min-h-screen pt-24">
        {/* Welcome Section */}
        <section id="home" className="px-4 sm:px-6 xl:px-12 max-w-screen-2xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">Welcome to La Bodega Café</h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8">Crafted Drinks. Community Vibes.</p>

          {/* Slideshow */}
          <div
            className="relative w-full aspect-[9/9] max-w-5xl mx-auto overflow-hidden rounded-lg shadow-md bg-white"
            data-aos="fade-up"
          >
            {slides.map((src, index) => {
            const isVideo = typeof src === 'string' && src.endsWith('.mp4');

            return isVideo ? (
              <video
                key={index}
                ref={videoRef}
                src={src}
                autoPlay
                muted
                loop
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              />
            ) : (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              />
            );
          })}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold my-6" data-aos="fade-up">
            Try Our New Specialty Drinks!
          </h2>

          <a
            href="https://www.clover.com/online-ordering/la-bodega-cafe-posen/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-8 py-4 text-lg sm:text-xl lg:text-2xl rounded-full shadow hover:bg-blue-700 transition"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Order Now
          </a>
        </section>

        {/* Promo Banner Section */}
        <PromoBanner />

        {/* Menu Section */}
        <Menu />

        {/* About Section */}
        <About />

        {/* Ice Cream */}
        <IceCream />

        {/* Contact Section */}
        <Contact />
      </main>

      <footer className="text-center py-6 text-sm text-gray-600 bg-[#f7f3e9] border-t border-gray-200">
  <p>
    © {new Date().getFullYear()} La Bodega Café | Website by{' '}
    <a
      href="https://github.com/SilverDev-27" // GitHub/portfolio
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-700 hover:underline"
    >
      Silver Aguayo
    </a>
  </p>
</footer>

    </div>
  );
};

export default App;
