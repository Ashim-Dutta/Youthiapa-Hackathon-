import React, { useContext, useState } from 'react';
import { productcontext } from '../context/ProductContext';
import { useParams, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiCreditCard, FiStar, FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const pageTransition = {
  initial: { opacity: 0, scale: 0.98, y: 20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: -15,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

const ProductDetails = () => {
  const { products } = useContext(productcontext);
  const navigate = useNavigate();
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const singleProduct = products.find((p) => p.id == params.id);

  if (!singleProduct) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4 px-4 text-center">
        <h2 className="text-2xl font-medium text-gray-700">Product not found</h2>
        <Link 
          to="/" 
          className="flex items-center text-amber-600 hover:text-amber-700 transition-colors"
        >
          <FiChevronLeft className="mr-1" /> Back to Home Page
        </Link>
      </div>
    );
  }

  const handleQuantityChange = (value) => {
    const newValue = quantity + value;
    if (newValue > 0 && newValue <= 10) {
      setQuantity(newValue);
    }
  };

  return (
    <div className='mt-30'>
      <motion.div
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12"
      >
        <div className="mb-6">
          <Link 
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-gray-600 hover:text-amber-600 transition-colors"
          >
            <FiChevronLeft className="mr-1" /> Back to products
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-2/5">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <img
                className="w-full h-80 sm:h-96 object-contain p-4"
                src={singleProduct.image}
                alt={singleProduct.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/500?text=Product+Image';
                }}
              />
            </div>

            {/* Thumbnail gallery */}
            <div className="flex mt-4 space-x-2 overflow-x-auto">
              {[singleProduct.image, singleProduct.image, singleProduct.image].map((img, index) => (
                <div key={index} className="w-16 h-16 border border-gray-200 rounded-md overflow-hidden flex-shrink-0 cursor-pointer">
                  <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-3/5">
            <div className="space-y-4">
              <div>
                <span className="text-sm text-gray-500">{singleProduct.category || 'Generic Category'}</span>
                <h1 className="text-sm md:text-sm text-gray-900 mt-1 font-[onder]">
                  {singleProduct.name}
                </h1>
                <div className="flex items-center mt-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className={i < 4 ? 'fill-current' : ''} />
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm ml-2">(24 reviews)</span>
                </div>
              </div>

              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold text-gray-900 ">
                  ₹{singleProduct.price.toFixed(2)}
                </span>
                {singleProduct.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    ₹{singleProduct.originalPrice.toLocaleString()}
                  </span>
                )}
                {singleProduct.discount && (
                  <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded">
                    {singleProduct.discount}% off
                  </span>
                )}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-900">Description</h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {singleProduct.description || "This premium product features high-quality materials and craftsmanship. Designed for durability and style, it's the perfect addition to your collection."}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-900">Specifications</h3>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                  <div><span className="font-medium">Brand:</span> {singleProduct.brand || 'Generic'}</div>
                  <div><span className="font-medium">Model:</span> {singleProduct.model || 'Standard'}</div>
                  <div><span className="font-medium">Availability:</span> <span className="text-green-600 ml-1">In Stock</span></div>
                  <div><span className="font-medium">SKU:</span> {singleProduct.sku || 'N/A'}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button onClick={() => handleQuantityChange(-1)} className="px-3 py-2 text-gray-600 hover:bg-gray-100">-</button>
                    <span className="px-3 py-2 w-12 text-center">{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)} className="px-3 py-2 text-gray-600 hover:bg-gray-100">+</button>
                  </div>
                  <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3">
                    <motion.button
                      whileTap={{scale:0.9}}
                      className="cursor-pointer flex-1 flex items-center justify-center px-6 py-3 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition-colors">
                      <FiShoppingCart className="mr-2" /> Add to Cart
                    </motion.button>
                    <motion.div
                      whileTap={{scale:0.9}}
                    >
                      <Link  state={{ quantity: quantity }}  quantity={ quantity} to={`checkout/${params.id}`} className="flex-1 flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors">
                      <FiCreditCard  className="mr-2" /> Buy Now
                    </Link>
                    </motion.div>
                    
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 text-sm text-gray-600 space-y-2">
                <p className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free shipping on orders over ₹1000
                </p>
                <p className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  30-day return policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
