import React, { useEffect} from 'react';
import { easeInOut, motion } from 'framer-motion';
import CircularText from './CircularText';
import RippleGrid from './RippleGrid';

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

const Hero = () => {


  useEffect(() => {

    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <div className='relative mt-30'>
      <div style={{position: 'absolute', height: '100vh', overflow: 'hidden'}}>
  <RippleGrid
    enableRainbow={true}
    gridColor="#0f1070ff"
    rippleIntensity={0.06}
    gridSize={15}
    gridThickness={50}
    mouseInteraction={true}
    mouseInteractionRadius={0.5}
    opacity={1}
  />
      </div>

      

<motion.div
  variants={pageTransition}
  initial="initial"
  animate="animate"
  exit="exit"
  className="h-[85vh] flex justify-center flex-col leading-none relative"
>
  <motion.div className="flex absolute justify-start px-4 sm:px-8 md:px-10 lg:mt-[25vh] sm:mt-[10rem] md:mt-40">
    <motion.h1
            className=" lg:-top-[20rem] 
      absolute -top-[12rem]
        uppercase  font-[neo]
        text-[3rem] sm:text-[6rem]  lg:text-[6rem] xl:text-[6rem]
      "
    >
      explore your
    </motion.h1>
  </motion.div>







<model-viewer
          src="zara_pullover.glb"
  className="
    hidden md:block
    absolute z-[999]
    top-[8vh] right-[6vw]
    h-[50vh] md:h-[60vh] lg:h-[80vh]
    w-[60vw] md:w-[40vw] lg:w-[25vw] loading:lazy
  "
  camera-controls
  disable-zoom
  auto-rotate
/>



      {/* Bottom Heading */}
<motion.div
  animate={{
    x: [50, 0],
    opacity: [0, 1],
    transition: { duration: 0.5 },
  }}
  className="mx-4 sm:mx-8 md:mx-10 "
>
  <h1
    className="
      text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]
mt-10 sm:mt-12 md:mt-0 lg:mt-24 xl:mt-[1rem]

      flex flex-col
      rounded-xl
      uppercase
      font-[neo]
      bg-gradient-to-r from-[#000428] via-[#004e92] to-[#1CB5E0]
      bg-clip-text text-transparent absolute top-[17rem]
      
    "
  >
    true <span className="outline-text">style!</span>
  </h1>
</motion.div>


      {/* Footer */}
      <div className=' mt-[35rem] w-full uppercase flex  items-center justify-center font-bold '>
        <h3 className='mx-10 '>&copy;2025 moods</h3>
        <CircularText
          text="UNLEASE*YOUR*FASHION*"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class absolute -top-20 mr-[2vw] z-[999]  sm:hidden md:hidden lg:block"

        />
      </div>

      
    </motion.div>
    </div>
  );
};

export default Hero;
