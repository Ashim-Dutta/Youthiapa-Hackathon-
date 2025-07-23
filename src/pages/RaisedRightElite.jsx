import MyForm from '../components/MyForm'
import Footer from '../components/Footer'
import { motion} from 'framer-motion'
import React from 'react'


const pageTransition = {
    initial: {
    opacity: 0,
    scale: 0.98,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // "easeInOut"
    },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: -15,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1], // exit ease
    },
  },
}


const RaisedRightElite = () => {
  return (
    <div className='mt-30'>
      <motion.div
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full min-h-screen bg-white text-black">
  {/* Hero Image */}
  <div className="w-full mt-15 flex items-center justify-center p-4 sm:p-10">
    <img
      className="w-full max-w-5xl h-auto object-contain"
      src="https://youthiapa.com/cdn/shop/files/didi_transparent.png?v=1749580034&width=2400"
      alt="Elite Access"
    />
  </div>

  {/* Heading */}
  <h1 className="mt-10 text-3xl md:text-5xl text-center px-4 font-[marios]">
    Unlock Raised Right Elite Access
  </h1>

  {/* Features Section */}
  <div className="w-full mt-16 px-4 sm:px-10 flex flex-col gap-6 text-left max-w-5xl mx-auto">
    <h2 className="text-2xl sm:text-4xl  font-[gumona]">
      Step into a world reserved for the discerning few.
    </h2>

    <ul className="list-disc pl-5 sm:pl-10 text-sm sm:text-base space-y-2">
      <li>Get ₹500 Reward Points instantly as your welcome bonus.</li>
      <li>Priority Access to limited-edition, handpicked collections.</li>
      <li>Elite-Only Pricing on every purchase, always.</li>
      <li>Concierge-Style Support tailored just for you.</li>
      <li>Invites to VIP-Only Events & Secret Drops.</li>
      <li>Lifetime Free Priority Shipping – on us!</li>
    </ul>

    <h2 className="text-2xl sm:text-4xl ">
      Claim your spot. Own your style. Wear your values.
    </h2>
  </div>

  {/* Form Section */}
  <div className="w-full mt-16 px-4 sm:px-10">
    <MyForm />
  </div>

  {/* Email Subscription */}
  <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-10 text-center">
    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
      Subscribe to Our Emails
    </h2>
    <p className="text-base sm:text-lg mb-8 max-w-xl text-gray-700">
      Be the first to get exclusive updates, discounts, and product drops directly in your inbox.
    </p>
<form className="flex flex-col sm:flex-row items-stretch gap-4 w-full max-w-lg mx-auto px-4">
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
  />
  <button
    type="submit"
    className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
  >
    Subscribe
  </button>
</form>


  </div>
</motion.div>

      
      <Footer/>
    </div>
  )
}

export default RaisedRightElite