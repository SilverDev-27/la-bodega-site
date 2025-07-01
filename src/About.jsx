import React from 'react';
import aboutImg from './assets/about.jpg';
import strawberryRefresher from './assets/strawberry-refresher.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-8 xl:px-16"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-yellow-700 mb-8">
          More Than Just Coffee
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-gray-800 max-w-3xl mx-auto mb-12 leading-relaxed tracking-wide font-light">
          Welcome to <span className="font-semibold text-yellow-800">La Bodega Café</span>, a neighborhood coffee shop in the heart of Posen where good vibes, bold flavors, and community come together.
          Whether you're starting your morning with a rich cafecito or winding down with a sweet pastry and smooth cold brew, La Bodega is your cozy corner for connection and comfort.
          <br /><br />
          Rooted in Latin flavor and local pride, we offer handcrafted drinks, house specialties, and rotating seasonal treats that highlight culture and creativity. 
          From casual catch-ups to quiet work sessions, our space is designed to make you feel at home with every sip, every visit.
          <br /><br />
          Come through. Stay a while. Let’s build our community one cup at a time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"
        data-aos="fade-up"
        >
          <img
            src={aboutImg}
            alt="Cafe"
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
          <img
            src={strawberryRefresher}
            alt="Drink"
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
