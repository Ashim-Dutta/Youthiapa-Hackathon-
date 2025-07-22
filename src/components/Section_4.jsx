import React from 'react';
import { Link } from 'react-router-dom';
import { motion} from 'framer-motion'

const Section_4 = () => {
  return (
    <div className="bg-white max-h-[70vh] rounded-xl mt-20 flex flex-col lg:flex-row justify-between items-center overflow-hidden">
      
      {/* Left Text Content */}
      <div className="text-black p-6 md:p-10 w-full lg:w-[55%] h-full flex flex-col justify-between">
        
        <div>
          <h1 className=" font-[gumona] text-4xl md:text-6xl lg:text-[5rem] leading-none  uppercase">
            special <span className='bg-red-500 p-2 text-white rounded-xl font-[onder] text-[0.7rem]'>offer</span> <br /> on holiday!
          </h1>
        </div>

        <div className="mt-6 flex items-center gap-4 text-2xl md:text-3xl uppercase font-[gumona] ">
          <span>up to</span>
          <span className="text-[4rem] md:text-[6rem] lg:text-[7rem] font-bold leading-none">35%</span>
        </div>

        

        <Link to={ '/BBMerchandise'}>
          <motion.button
             whileTap={{ scale: 0.45 }}
                  transition={{ duration: 0.2 }}
            className="mt-10 md:mt-20 border-2 border-black rounded-full px-6 py-4 uppercase text-xl md:text-3xl lg:text-5xl flex items-center gap-3 w-fit font-[gumona] hover:bg-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
          get special offer
          <i className="ri-arrow-right-line text-3xl"></i>
        </motion.button>
        </Link>
      </div>

      {/* Right Image */}
      <img
        className="w-full lg:w-[45%] h-[50vh] lg:h-full object-cover"
        src="//youthiapa.com/cdn/shop/files/WhatsApp_Image_2025-07-15_at_20.27.58.jpg?v=1752603412&width=720 720w, //youthiapa.com/cdn/shop/files/WhatsApp_Image_2025-07-15_at_20.27.58.jpg?v=1752603412&width=660 660w, //youthiapa.com/cdn/shop/files/WhatsApp_Image_2025-07-15_at_20.27.58.jpg?v=1752603412&width=550 550w, //youthiapa.com/cdn/shop/files/WhatsApp_Image_2025-07-15_at_20.27.58.jpg?v=1752603412&width=480 480w, //youthiapa.com/cdn/shop/files/WhatsApp_Image_2025-07-15_at_20.27.58.jpg?v=1752603412&width=360 360w"
        alt="Holiday Offer"
      />
    </div>
  );
};

export default Section_4;
