import React, { useState, useEffect, useRef } from 'react';
import icecream1 from './assets/icecream1.jpg';
import icecream2 from './assets/icecream2.jpg';
import icecream3 from './assets/icecream3.jpg';
import icecream4 from './assets/icecream4.jpg';
import icecream5 from './assets/icecream5.jpg';
import icecreamVideo from './assets/icecream-video.mp4';

const slides = [
  { type: 'image', src: icecream4 },
  { type: 'image', src: icecream5 },
  { type: 'image', src: icecream1 },
  { type: 'image', src: icecream2 },
  { type: 'image', src: icecream3 },
  { type: 'video', src: icecreamVideo, duration: 14000 },
];

const IceCream = () => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const duration = slides[current].duration || 4000;

    // If the current slide is a video, try to play it
    if (slides[current].type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((err) => console.error("Video play error:", err));
    }

    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, duration);

    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <section
      id="ice-cream"
      className="py-20 px-4"
      data-aos="fade-up"
    >
      <div className="text-center mb-10">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-yellow-700 mb-4">
          In-Person Only Ice Cream 🍨
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 max-w-3xl mx-auto">
          Stop by to check out our in-person ice cream flavors and enjoy a treat on-site!
        </p>
      </div>

      {/* Full-width slideshow */}
      <div className="relative mx-auto w-full aspect-[9/9] max-w-5xl overflow-hidden rounded-lg shadow-lg bg-[#f7f3e9]">
        {slides.map((slide, index) =>
          slide.type === 'image' ? (
            <img
              key={index}
              src={slide.src}
              alt={`Ice cream ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ) : (
            <video
              key={index}
              ref={videoRef}
              src={slide.src}
              muted
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          )
        )}
      </div>
    </section>
  );
};

export default IceCream;
