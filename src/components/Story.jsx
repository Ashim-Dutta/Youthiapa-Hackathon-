import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Story = () => {
  return (
    <div className='w-full min-h-screen flex flex-col lg:flex-row items-center justify-evenly p-4 md:p-10 gap-10'>
      
      {/* Left Image */}
      <div className='w-full lg:w-1/2 h-[50vh] lg:h-full flex items-center justify-center'>
        <img
          className='w-full h-full object-cover rounded-xl'
          src='//youthiapa.com/cdn/shop/files/bb-modified.jpg?v=1750000289&width=1366'
          alt='Our Story'
        />
      </div>

      {/* Right Content */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6 items-center justify-center text-center lg:text-left'>
        <h1 className='uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[gumona] leading-tight'>
          do you want to know how it all began back in 2017?
        </h1>

        <Link to="/storydetails">
          <motion.button
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className='cursor-pointer bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white border transition duration-300'
          >
            Read Our Journey
          </motion.button>
        </Link>
      </div>

    </div>
  );
};

export default Story;
