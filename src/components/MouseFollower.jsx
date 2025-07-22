import React, { useEffect, useRef, useState } from 'react';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {

      current.current.x += (target.current.x - current.current.x) * 0.1;
      current.current.y += (target.current.y - current.current.y) * 0.1;

      setPosition({
        x: current.current.x,
        y: current.current.y,
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-5 h-5 bg-amber-600 rounded-full pointer-events-none z-[9999]"
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
        transition: 'transform 0.05s ease-out',
      }}
    />
  );
};

export default MouseFollower;
