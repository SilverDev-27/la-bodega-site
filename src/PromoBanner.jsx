import React from 'react';
import promoBg from './assets/promo-bg.jpg';

const PromotionBanner = () => {
  return (
    <section
      id="promotions"
      className="relative bg-cover bg-center bg-no-repeat py-12 px-4 sm:px-6 xl:px-12 text-white mt-20"
      data-aos="fade-up"
      style={{
        backgroundImage: `url(${promoBg})`,
        backgroundColor: 'rgba(210, 180, 140, 0.5)',
        backgroundBlendMode: 'multiply',
      }}
    >
      <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Sip, Savor, & Save - 2 to 5PM
        </h2>

        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl mb-6">
          Join us every Tuesday and Thursday
        </p>

        <div className="bg-white bg-opacity-70 text-black rounded-lg p-4 sm:p-6 max-w-4xl mx-auto space-y-4 shadow-md">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-800 mb-1">
              Tuesdays: BOGO ½ Off
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              Buy one drink, get the second 50% off
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              *Does Not Include Specialty Drinks*
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-800 mb-1">
              Thursdays: $6 Specialty Latte + Cookie
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              Get any specialty latte with a cookie for just $6
            </p>
          </div>

          <div className="border-t border-yellow-900 pt-4">
            <p className="text-sm sm:text-base md:text-lg text-yellow-900 italic mb-2">
              *Happy Hour drink sizes: Medium & Large on Tuesdays, Medium only on Thursdays. <br />
              20% Service Discount valid on Medium & Large drinks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;
