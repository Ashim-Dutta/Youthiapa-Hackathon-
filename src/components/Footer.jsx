import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { motion} from 'framer-motion'

const Footer = () => {
  return (
    <div className='max-h-[78vh] flex flex-col gap-10'>
      {/* Top Footer Section */}
      <div className='mt-20 flex flex-col lg:flex-row justify-evenly gap-10 p-5  font-semibold text-sm'>

        <div className='space-y-1 text-center lg:text-left'>
          <h3>contact information</h3>
          <motion.a
             initial={{ color: "#221f1fff" }}
              whileHover={{ color: "#3b82f6" }} // blue-500
  transition={{ duration: 0.3 }}
            href='mailto:support@youthiapa.com' >support@youthiapa.com</motion.a>
        </div>

        <div className='space-y-1 text-center lg:text-left flex flex-col'>
          <h3 className='text-lg font-bold'>Menu</h3>
          <Link to='/raisedright' className='hover:text-blue-600'>Cargos</Link>
          <Link to='/raisedright' className='hover:text-blue-600'>Oversized T-Shirt</Link>
          <Link to='/raisedright' className='hover:text-blue-600'>Cooed Fits</Link>
          <Link to='/BBMerchandise' className='hover:text-blue-600'>BB Merchandise</Link>
          <Link to='/raisedright' className='hover:text-blue-600'>Raised Right</Link>
        </div>

        <div className='space-y-1 text-center lg:text-left'>
          <h3  className='text-lg font-bold'>Links</h3>
          <h3 className='hover:text-blue-600 cursor-pointer'>Track order</h3>
          <h3 className='hover:text-blue-600 cursor-pointer'>Privacy Policy</h3>
          <h3 className='hover:text-blue-600 cursor-pointer'>Refund Policy</h3>
          <h3 className='hover:text-blue-600 cursor-pointer'>Shipping Policy</h3>
          <h3 className='hover:text-blue-600 cursor-pointer'>Terms of Service</h3>
        </div>

        <div className='flex items-center justify-center lg:justify-start'>
  <div className='relative w-full max-w-[20rem]'>
    <input
      className='border w-full p-3 pr-12 rounded-full'
      placeholder='Email'
    />
    <i className="ri-send-plane-fill text-2xl cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2  hover:text-blue-500 transition" />
  </div>
</div>

      </div>

      {/* Newsletter Section */}
      <div className='mt-10 mb-10 flex flex-col lg:flex-row items-center gap-8 px-5 lg:px-20'>
        <h1 className='text-3xl lg:text-sm uppercase text-center lg:text-left lg:w-[45%] font-[onder]'>
          subscribe our newsletter for update
        </h1>
        <motion.button
        whileTap={{ scale: 0.45 }}
                  transition={{ duration: 0.2 }}
          className='cursor-pointer border-2 border-black rounded-full px-10 py-4 text-lg lg:text-4xl  uppercase hover:bg-black hover:text-white transition-all duration-300 ease-in-out font-[gumona]'>
          subscribe now
        </motion.button>
      </div>

      <div className='text-[5rem] uppercase mask-b-from-neutral-600 font-[onder] flex justify-center'>youthiapa</div>
    </div>
  )
}

export default Footer
