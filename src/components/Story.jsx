import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import React from 'react';

const Story = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between  p-4 md:p-10 gap-6 md:gap-10">
      {/* Left Image - Order changes on mobile */}
      <div className="w-full lg:w-1/2 h-auto aspect-video lg:aspect-auto lg:h-[30rem] flex items-center justify-center order-1 lg:order-none">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="//youthiapa.com/cdn/shop/files/bb-modified.jpg?v=1750000289&width=1366"
          alt="Our Story"
          loading="lazy"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 items-center lg:items-start justify-center text-center lg:text-left order-2 lg:order-none">
        <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-5xl font-[gumona] leading-tight">
          do you want to know how it all began back in 2017?
        </h1>

        <Link to="/storydetails" className="w-full sm:w-auto">
          <motion.button
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:w-auto cursor-pointer bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white border transition duration-300"
          >
            Read Our Journey
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Story;