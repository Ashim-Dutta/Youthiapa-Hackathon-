import React from 'react'
import Footer from './Footer'
import { motion} from 'framer-motion'



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

const StoryDetails = () => {
  return (
      <>
          <motion.div
              variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
              className='flex justify-center '>
          

          <div className='text-sm mt-20 w-1/2 flex flex-col justify-center items-center gap-5 p-5'>
              <h1 className='text-3xl font-bold'>Read Our Journey</h1> <br/>
              <p>Post by <span className='text-red-500 font-bold'>Digihakk</span> &nbsp;&nbsp;&nbsp;&nbsp; May 19 2025</p>
              <p className='font-bold'>From Friends to Founders</p>
              <p>We started as friends, just a couple of curious minds with a love for creativity, storytelling, and building things from the ground up. In our early twenties, that passion took shape as Youthiapa—a merchandise brand that grew hand-in-hand with Bhuvan’s journey on YouTube. As his content began connecting with millions, Youthiapa became more than just merch. It became a symbol of community, relatability, and youthful energy.</p>
              <p>But like all things, we evolved.</p>
              <p>Over time, we began to feel a deeper pull towards something more intentional. We didn’t just want to chase trends; we wanted to stand for something. We wanted to create a brand that looked good and felt right. One that had purpose stitched into every piece.</p>
              <p>That search brought us home to the values we grew up with. And that’s how Raised Right came to life.</p>
              <p>Raised Right is a celebration of being grounded yet bold, expressive yet effortless. It’s about wearing your values, feeling confident in your skin, and staying true to who you are.</p>
              <p>Because at the end of the day, it’s not just about what you wear—it’s about what you stand for.</p>
          </div>
              


          </motion.div>
          
          <Footer/>
      </>
  )
}

export default StoryDetails