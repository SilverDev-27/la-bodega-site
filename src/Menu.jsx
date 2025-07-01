import React, { useState, useRef, useEffect } from 'react';
import duvalinImg from './assets/slide1.jpg'; // Replace with actual Duvalin image
import matchaImg from './assets/matcha.jpg';
import strawberryImg from './assets/strawberry-refresher.jpg';
import brownSugarImg from './assets/brown-sugar.jpg';
import abuelitaImg from './assets/abuelita.jpg';
import icedMacchiatoImg from './assets/iced-macchiato.jpg';
import icedAmericanoImg from './assets/iced-americano.jpg';
import icedCoffeeImg from './assets/iced-coffee.jpg';
import icedMazapanImg from './assets/mazapan.jpg';
import icedSignatureImg from './assets/iced-signature-latte.jpg';
import icedHorchataImg from './assets/iced-horchata.jpg';
// Monthly Drinks
import icedHoneyLavenderImg from './assets/iced-honey-lavender.jpg';
import icedWhiteChocolateImg from './assets/iced-white-chocolate-dirty-chai.jpg';
import icedFruityPebblesImg from './assets/fruitypebbles.jpg';
import icedStrawberriesNdCreamImg from './assets/strawberries-cream.jpg';
import icedBananaCreamMatchaImg from './assets/banana-cream-matcha.jpg';
import icedCaramelButterscotchImg from './assets/caramel-butterscotch.jpg';


const MenuItem = ({ name, price, image, description }) => {
  const [showImage, setShowImage] = useState(false);
  const [enlarged, setEnlarged] = useState(false);
  const overlayRef = useRef(null);

  const handleImageClick = () => setEnlarged(true);
  const closeOverlay = () => setEnlarged(false);

    // Auto-scroll to the image when enlarged
  useEffect(() => {
    if (enlarged && overlayRef.current) {
      overlayRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [enlarged]);

  return (
    <>
      <div
        className="w-full transition-all duration-300 cursor-pointer"
        onClick={() => setShowImage(!showImage)}
      >
        {/* Make border outside to ensure full width */}
        <div className="border-b border-gray-300 w-full">
          <div className="w-full max-w-lg mx-auto flex flex-col gap-1 py-2">
            <div className="flex justify-between items-center gap-4">
              <span className="flex-1 font-medium text-lg">{name}</span>
              {image && showImage ? (
                <img
                  src={image}
                  alt={name}
                  onClick={handleImageClick}
                  className="w-44 h-44 object-cover rounded shadow ml-auto mr-5 hover:scale-105 transition-transform"
                />
              ) : (
                <span className="text-right whitespace-nowrap">{price}</span>
              )}
            </div>

            {image && !showImage && (
              <span className="text-sm text-gray-500 italic text-right pr-5">
                Click to view image
              </span>
            )}

            {!image && description && (
              <p className="text-sm italic text-gray-500 text-right">{description}</p>
            )}
          </div>
        </div>
      </div>

      {enlarged && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeOverlay}
        >
          <img
          ref={overlayRef}
            src={image}
            alt={`${name} enlarged`}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg border-4 border-white"
          />
        </div>
      )}
    </>
  );
};

const renderSection = (id, title, items, sizeLabel = null, showDisclaimer = false) => {
  const isOdd = items.length % 2 !== 0;

  return (
    <section
      id={id}
      className="py-16 px-4 sm:px-6 xl:px-12 max-w-screen-2xl mx-auto"
      data-aos="fade-up"
    >
      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center text-yellow-700">
        {title}
      </h2>
      {title === 'Monthly Specials' && (
        <p className="text-xl sm:text-2xl lg:text-3xl text-center text-yellow-700 italic mb-6">
          Only for the month of <span className="underline">July</span> Try them while you can!
        </p>
      )}

      {(sizeLabel || showDisclaimer) && (
        <div className="text-center text-yellow-700 text-xl sm:text-2xl lg:text-3xl mb-6">
          {sizeLabel && <p className="mb-1">{sizeLabel}</p>}
          {showDisclaimer && (
            <p className="text-lg italic">Some Add Ons May Result in Additional Charges</p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xl sm:text-2xl">
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;
          const className =
            isLastItem && isOdd ? 'md:col-span-2 md:flex md:justify-center' : '';
          return (
            <div key={index} className={className}>
              <MenuItem {...item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

const CoffeeDivider = () => {
  return (
    <div
      className="bg-[#fefae0] text-black w-full py-4 px-4 sm:px-8 xl:px-16 my-6 border-t border-b border-yellow-300"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-800 text-center mb-3">
            Available Milk Options
          </h3>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-base sm:text-lg lg:text-xl font-medium">
            <span>Whole</span>
            <span>Skim</span>
            <span>Almond</span>
            <span>Oat</span>
            <span>Half &amp; Half</span>
            <span>Horchata</span>
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-800 text-center mb-3">
            Available Syrup Flavors
          </h3>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-base sm:text-lg lg:text-xl font-medium">
            <span>Caramel</span>
            <span>Vanilla</span>
            <span>Hazelnut</span>
            <span>Sugar-Free Vanilla</span>
            <span>Sugar-Free Caramel</span>
            <span>Spiced Brown Sugar</span>
            <span>Toasted Marshmallow</span>
            <span>Pure Cane Syrup</span>
            <span>Pistachio</span>
            <span>Lavender</span>
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-800 text-center mb-3">
            Available Fruit Syrups
          </h3>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-base sm:text-lg lg:text-xl font-medium">
            <span>Guava</span>
            <span>Strawberry</span>
            <span>Peach</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Menu Data
const monthlySpecials = [
  { name: 'Iced Honey Lavender Matcha' , price: '$5.50 / $6.60 / $7.50', image: icedHoneyLavenderImg },
  { name: 'Hot Honey Lavender Matcha', price: '5.50 / 6.60 / 7.50', description: 'Honey Infused Matcha with Lavender Syrup' },
  { name: 'Iced Banana Cream Matcha' , price: '$6.50 / $7.50 / $8.50', image: icedBananaCreamMatchaImg },
  { name: 'Iced Fruity Pebbles Latte' , price: '$7.00 / $7.90 / $8.90', image: icedFruityPebblesImg },
  { name: 'Strawberries & Cream Latte' , price: '$6.25 / $7.25 / $8.25', image: icedStrawberriesNdCreamImg },
  { name: 'Iced Caramel Butterscotch Latte' , price: '$6.20 / $7.20 / $8.20', image:icedCaramelButterscotchImg },
  { name: 'Iced White Chocolate Dirty-Chai' , price: '$7.20 / $8.20 / $9.00', image: icedWhiteChocolateImg },
];

const breakfastItems = [
  { name: 'Sausage, Egg, Cheese Sandwich', price: '$7.85' },
  { name: 'Bacon, Egg, Cheese Sandwich', price: '$7.85' },
  { name: 'Avocado Toast', price: '$6.00' },
  { name: 'Avocado Toast w/ Egg', price: '$7.00'},
  { name: 'Bagel', price: '$4.65' },
  { name: 'Breakfast Burrito', price: '$6.80' },
  { name: 'Bodega Breakfast Torta', price: '$8.50' },
  { name: 'Bodega Breakfast Burrito', price: '$7.00' },
];

const hotCoffeeItems = [
  { name: 'Espresso', price: '$3.09 (One Size)' },
  { name: 'Americano', price: '$4.07 / $4.33 / $5.15' },
  { name: 'Latte', price: '$4.38 / $4.94 / $5.77' },
  { name: 'Cappuccino', price: '$4.38 / $4.94 / $5.97' },
  { name: 'Macchiato', price: '$4.63 / $5.15 / $5.97' },
  { name: 'Chai Latte', price: '$5.36 / $6.18 / $7.00' },
  { name: 'Matcha Latte', price: '$5.36 / $6.18 / $7.00' },
  { name: 'Regular/Decaf Coffee', price: '$2.57 / $3.09 / $3.71' },
  { name: 'Hot Teas', price: '$3.09 / $3.60 / $4.33' },
  { name: 'Hot Chocolate', price: '$3.60 / $4.33 / $4.94' },
  { name: 'Cafe de Olla', price: '$2.76 / $3.30 / $3.91' },
];

const coldCoffeeItems = [
  { name: 'Iced Americano', price: '$4.38 / $4.94 / $5.97', image: icedAmericanoImg },
  { name: 'Iced Latte', price: '$5.15 / $5.66 / $6.80', description: 'Your Favorite Syrup mixed with expresso and milk' },
  { name: 'Iced Macchiato', price: '$5.36 / $5.97 / $7.00', image: icedMacchiatoImg },
  { name: 'Iced Chai Latte', price: '$6.18 / $7.00 / $8.24', description: 'Our Creamy Vanilla Chai Mixture poured over ice and milk' },
  { name: 'Iced Matcha Latte', price: '$6.18 / $7.00 / $8.24', image: matchaImg },
  { name: 'Iced Coffee', price: '$4.07 / $4.43 / $5.77', image: icedCoffeeImg },
  { name: 'Iced Tea', price: '$4.12 / $4.74 / $5.82', description: 'Freshly Brewed Green Tea poured over ice' },
  { name: 'Refreshers', price: '$6.20 / $7.20 / $8.00', image: strawberryImg },
];

const lunchItems = [
  { name: 'Beef Burrito', price: '$8.75' },
  { name: 'Beef Torta', price: '$9.26' },
  { name: 'Tacos', price: '$3.60' },
  { name: 'Tacos Duros', price: '$8.03' },
  { name: 'Enchiladas', price: '$10.81' },
  { name: 'Quesadillas', price: '$8.75' },
  { name: 'Tostadas', price: '$3.35' },
  { name: 'Torta de Jamon', price: '$9.26' },
];

const sandwichItems = [
  { name: 'Heavy Hitter', price: '$11.00' },
  { name: 'Compa Pollo', price: '$11.00' },
  { name: 'Ham Sandwich', price: '$10.00' },
  { name: 'Turkey Sandwich', price: '$10.00' },
];

const specialtyItems = [
  { name: 'Iced Mazapan Latte', price: '$6.18 / $7.00 / $8.03', image: icedMazapanImg },
  { name: 'Hot Signature Latte', price: '$5.15 / $6.28 / $7.00', description: 'Our house blend made with rich espresso & a hint of vanilla' },
  { name: 'Iced Signature Latte', price: '$5.97 / $7.00 / $8.03', image: icedSignatureImg },
  { name: 'Hot Mazapan Latte', price: '$5.15 / $6.28 / $7.00', description: 'Mazapan Latte with Carmel drizzle topped with Whipped Cream' },
  { name: 'Iced Chocolate Abuelita Latte', price: '$6.69 / $7.42 / $8.45', image: abuelitaImg },
  { name: 'Hot Chocolate Abuelita Latte', price: '$5.66 / $6.28 / $7.21', description: 'Mexican Hot Chocolate Latte topped with Whipped Cream' },
  { name: 'Brown Sugar Shaken Espresso', price: '$6.18 / $7.00 / $8.03', image: brownSugarImg },
  { name: 'Iced Horchata Latte', price: '$6.18 / $7.00 / $8.03', image: icedHorchataImg },
  { name: 'Iced Duvalin Latte', price: '$7.00 / $7.90 / $8.80', image: duvalinImg, },
];

const dessertItems = [
  { name: 'Cheesecake', price: '$3.50' },
  { name: 'Churro Cheesecake', price: '$3.50' },
  { name: 'Dubai Cheesecake', price: '$6.00' },
  { name: 'Conchas', price: '$2.50' },
  { name: 'Cookies (3)', price: '$3.25' },
  { name: 'Chocolate Croissants', price: '$4.12' },
];

const Menu = () => {
  return (
    <section id="menu" className="pt-24">
      {renderSection('monthly-specials', 'Monthly Specials', monthlySpecials, 'M / L / XL', true )}
      {renderSection('breakfast', 'Breakfast', breakfastItems, null, true)}
      {renderSection('hot-coffee', 'Hot Coffee', hotCoffeeItems, '12 oz / 16 oz / 20 oz', true)}
      {renderSection('cold-coffee', 'Cold Coffee', coldCoffeeItems, '16 oz / 20 oz / 32 oz', true)}
      <CoffeeDivider />
      {renderSection('lunch', 'Lunch', lunchItems, null, true)}
      {renderSection('sandwiches', 'Sandwiches', sandwichItems, null, true)}
      {renderSection('specialty-drinks', 'Specialty Drinks', specialtyItems, 'M / L / XL', true)}
      {renderSection('dessert', 'Dessert', dessertItems, null, true)}
    </section>
  );
};

export default Menu;
