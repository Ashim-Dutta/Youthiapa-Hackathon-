import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Section_4 from './Section_4';
import { productcontext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const Section_1 = () => {
  const { products } = useContext(productcontext);
  const BottomFits = products.filter((p) => p.category && p.category.trim().toLowerCase() === 'cargos');
  const OversizeTop = products.filter((p) => p.category && p.category.trim().toLowerCase() === 'oversized t-shirt');
  const OversizeSet = products.filter((p) => p.category && p.category.trim().toLowerCase() === 'coords fit');

  return (
    <div className="min-h-screen bg-black text-white px-5 md:px-10 py-10 space-y-20 font-['helvetica'] ">
      {/* Top Heading Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <h1 className="text-4xl md:text-6xl lg:text-8xl uppercase font-bold font-[marios]">
          our best collection
        </h1>
        <p className="text-sm md:text-md lg:text-lg w-full lg:w-[45%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
        </p>
      </div>

      {/* Oversize Top Fits */}
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-light uppercase font-bold font-[gumona]">
        Oversize Top Fits
      </h1>
      <div className="h-1 bg-amber-600 -mt-20 w-[20%] lg:w-[20%]"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 max-w-7xl mx-auto">
        {OversizeTop.map((tshirt, index) => (
          <Link
            to={`/BBMerchandise/details/${tshirt.id}`}
            key={index}
            className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="h-[30vh] bg-gray-100">
              <motion.img
                src={tshirt.image.split(' ')[0]}
                alt={tshirt.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h4 className="text-[0.7rem] font-semibold text-gray-800 line-clamp-1 font-[onder]">
                {tshirt.name}
              </h4>
              <p className="text-sm text-green-600 font-[marios]">₹{tshirt.price}</p>
              <button className="cursor-pointer mt-2 bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition font-[marios]">
                Buy Now
              </button>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom Fits */}
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-light uppercase font-bold font-[gumona]">
        Bottom Fits
      </h1>
            <div className="h-1 bg-amber-600 -mt-20 w-[20%] lg:w-[15%]"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 max-w-7xl mx-auto">
        {BottomFits.map((pant, index) => (
          <Link
            to={`/BBMerchandise/details/${pant.id}`}
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="h-[30vh] bg-gray-100">
              <img
                src={pant.image.split(' ')[0]}
                alt={pant.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h4 className="text-[0.7rem] text-gray-800 line-clamp-1 font-[onder]">
                {pant.name}
              </h4>
              <p className="text-sm text-green-600 font-[marios]">₹{pant.price}</p>
              <button className="cursor-pointer mt-2 bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition font-[marios]">
                Buy Now
              </button>
            </div>
          </Link>
        ))}
      </div>

      {/* Coords Fits */}
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-light uppercase font-bold font-[gumona]">
        Coords Fits
      </h1>
            <div className="h-1 bg-amber-600 -mt-20 w-[20%] lg:w-[15%]"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 max-w-7xl mx-auto">
        {OversizeSet.map((set, index) => (
          <Link
            to={`/BBMerchandise/details/${set.id}`}
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <div className="h-[30vh] bg-gray-100">
              <img
                src={set.image.split(' ')[0]}
                alt={set.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h4 className="text-[0.7rem] text-black line-clamp-1 font-[onder]">
                {set.name}
              </h4>
              <p className="text-sm text-green-600 font-[marios]">₹{set.price}</p>
              <button className="cursor-pointer mt-2 bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition font-[marios]">
                Buy Now
              </button>
            </div>
          </Link>
        ))}
      </div>

      <Section_4 />
    </div>
  );
};

export default Section_1;
