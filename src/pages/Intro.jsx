import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Intro = ({ onFinish }) => {
  const lettersRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          y: '-100vh',
          duration: 2,
          ease: 'power4.inOut',
          onComplete: onFinish,
        });
      },
    });

    tl.from(lettersRef.current, {
      y: 100,
      opacity: 0,
      stagger: 0.08,
      ease: 'power3.out',
      duration: 1,
    });
  }, []);

  const word = 'youthiapa';

  return (
    <div
      ref={containerRef}
      className='fixed z-[9999] bg-black h-screen w-screen text-white flex justify-center items-center overflow-hidden origin-top'
    >
      <div className='relative w-full h-full flex items-center justify-center'>

        {/* Responsive Blurred Background Circle */}
        <div className='
          w-[70vw] max-w-[400px] 
          h-[70vw] max-h-[400px]
          bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]
          blur-[80px] opacity-50 
          absolute z-0 
          rounded-full 
          top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
        '></div>

        {/* Animated Word */}
<h1 className='uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex gap-[0.8vw] text-[1.2rem] md:text-[2.5rem] lg:text-[4.5rem] font-[onder] tracking-wide'>
          {word.split('').map((char, i) => (
            <span
              key={i}
              ref={(el) => (lettersRef.current[i] = el)}
              className='inline-block'
            >
              {char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default Intro;
