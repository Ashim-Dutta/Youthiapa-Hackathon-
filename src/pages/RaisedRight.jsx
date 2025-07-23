import React, { useContext, useState } from 'react';
import { productcontext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import InfiniteScroll from 'react-infinite-scroll-component';

const ITEMS_PER_PAGE = 8;

const RaisedRight = () => {
  const { products } = useContext(productcontext);
  const oversize = products.filter((p) => p.size?.trim().toLowerCase() === 'oversize');

  // Local state to hold the visible items
  const [visibleItems, setVisibleItems] = useState(oversize.slice(0, ITEMS_PER_PAGE));
  const [hasMore, setHasMore] = useState(true);

  // Load more function
  const fetchMoreData = () => {
    const nextItems = oversize.slice(visibleItems.length, visibleItems.length + ITEMS_PER_PAGE);

    if (nextItems.length === 0) {
      setHasMore(false); // No more items to load
      return;
    }

    setVisibleItems((prev) => [...prev, ...nextItems]);
  };

  return (
    <div className="min-h-screen px-4 md:px-10 mt-40">
      <h2 className="text-xl my-8 text-center font-[onder]">Oversize Collection</h2>

      <InfiniteScroll
        dataLength={visibleItems.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p className="text-center py-4 font-medium">Loading more products...</p>}
        endMessage={<p className="text-center py-4 font-medium text-gray-500">No more products</p>}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleItems.map((O) => (
            <Link
              to={`/BBMerchandise/details/${O.id}`}
              key={O.id}
              className="bg-white shadow-md rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] will-change-transform"
            >
              <img
                loading="lazy"
                src={O.image}
                alt={O.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-[0.7rem] mb-2 font-[onder]">{O.name}</h3>
                <p className="text-lg text-green-600 font-[marios]">₹ {O.price}</p>
                <button className="bg-black font-[marios] text-white w-full rounded-xl mx-auto m-5 p-3">Buy Now</button>
              </div>
            </Link>
          ))}
        </div>
      </InfiniteScroll>

      <Footer />
    </div>
  );
};

export default RaisedRight;
