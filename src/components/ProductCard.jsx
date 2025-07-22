import { Link } from "react-router-dom";
import React from 'react'

const ProductCard = (props) => {
  const { id, name, image, price } = props.products;

  return (
    <Link
      to={`/BBMerchandise/details/${id}`}
      className="group relative w-full max-w-[300px] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 flex flex-col h-full"
    >
      {/* Image container with hover effect */}
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Price badge - more subtle and modern */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-medium px-3 py-1.5 rounded-lg shadow-sm">
          ₹{price.toFixed(2)}
        </div>
      </div>

      {/* Content container */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-[0.5rem] text-gray-900 line-clamp-2 m-2  transition-colors font-[onder]">
          {name}
        </h3>
        
        {/* CTA with subtle animation */}
        <div className="mt-auto">
          <button className="w-full p-2 flex bg-black items-center justify-center rounded-xl font-bold text-white cursor-pointer transition-colors font-[marios]">
            Buy Now
          </button>
        </div>
      </div>

      {/* Subtle hover overlay */}
      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Link>
  );
};

export default ProductCard;