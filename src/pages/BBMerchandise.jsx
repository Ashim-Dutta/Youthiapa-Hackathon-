import React, { useContext, useState, useEffect } from 'react';
import { productcontext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import ShinyText from '../components/ShinyText';
import Filter from '../components/Filter';
import { motion } from 'framer-motion';
import InfiniteScroll from 'react-infinite-scroll-component';

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

const ITEMS_PER_PAGE = 8;

const BBMerchandise = () => {
  const { products } = useContext(productcontext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Fetch more products on scroll
  const fetchMoreData = () => {
    const nextItems = filteredProducts.slice(
      visibleItems.length,
      visibleItems.length + ITEMS_PER_PAGE
    );

    const newVisibleItems = [...visibleItems, ...nextItems];
    setVisibleItems(newVisibleItems);

    if (newVisibleItems.length >= filteredProducts.length) {
      setHasMore(false);
    }
  };

  // Get all unique categories
  const categories = ['All', ...new Set(products.map((p) => p.category))];

  // Handle category filter
  useEffect(() => {
    let filtered = [];

    if (selectedCategory === 'All') {
      filtered = products;
    } else {
      filtered = products.filter((p) => p.category === selectedCategory);
    }

    setFilteredProducts(filtered);
    setVisibleItems(filtered.slice(0, ITEMS_PER_PAGE));
    setHasMore(filtered.length > ITEMS_PER_PAGE);
  }, [selectedCategory, products]);

  return (
    <div className='mt-30'>
      <InfiniteScroll
        dataLength={visibleItems.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p className="text-center py-4 font-medium">Loading more products...</p>}
        endMessage={<p className="text-center py-4 font-medium text-gray-500">No more products</p>}
      >
        <motion.div
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full pt-7 px-6"
        >
          <div className="flex items-center gap-4 mt-5 flex-wrap justify-center">
            <ShinyText
              text="BB Merchandise"
              disabled={false}
              speed={1.2}
              className="shiny-text font-bold text-5xl m-5"
            />
            <Filter
              label="Select Category"
              options={categories}
              onSelect={(option) => setSelectedCategory(option)}
            />
          </div>

          {visibleItems.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-10 mt-10">
              {visibleItems.map((pro) => (
                <ProductCard products={pro} key={pro.id} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 text-xl font-medium mt-20">
              No Products Found
            </div>
          )}
        </motion.div>
      </InfiniteScroll>

      <Footer />
    </div>
  );
};

export default BBMerchandise;
