import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Advertise = () => {
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].muted = false;
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].muted = true;
    }
  };

  const data = [
    {
      id: 1,
      video: "//youthiapa.com/cdn/shop/videos/c/vp/bec0eef27aa94de99a25cdd97b6a2bdc/bec0eef27aa94de99a25cdd97b6a2bdc.HD-1080p-7.2Mbps-49421806.mp4?v=0",
      name: "VTG Cargo",
      price: "2,499.00",
      image: "//youthiapa.com/cdn/shop/files/7_1.jpg?v=1749401298&width=720"
    },
    {
      id: 2,
      video: "//youthiapa.com/cdn/shop/videos/c/vp/6a3572187b2243cda71a45789afec15b/6a3572187b2243cda71a45789afec15b.HD-1080p-7.2Mbps-49421697.mp4?v=0",
      name: "Sand Cargo",
      price: "1,999.00",
      image: "//youthiapa.com/cdn/shop/files/6_6.jpg?v=1749405435&width=720"
    },
    {
      id: 3,
      video: "//youthiapa.com/cdn/shop/videos/c/vp/7f033f2d6a754fa78fd4e4c917f43c3b/7f033f2d6a754fa78fd4e4c917f43c3b.HD-1080p-7.2Mbps-49421698.mp4?v=0",
      name: "Twin Koi Tee",
      price: "1,999.00",
      image: "//youthiapa.com/cdn/shop/files/4_4.jpg?v=1749384189&width=720"
    },
    {
      id: 4,
      video: "//youthiapa.com/cdn/shop/videos/c/vp/3654e4c7a7bb4367bd215825eede885a/3654e4c7a7bb4367bd215825eede885a.HD-1080p-7.2Mbps-49421692.mp4?v=0",
      name: "Summer time-happiness",
      price: "2,499.00",
      image: "//youthiapa.com/cdn/shop/files/4_3.jpg?v=1749383692&width=720"
    },
  ];

  return (
    <div className="w-full py-10 px-4 flex flex-wrap justify-center gap-4">
      {data.map((item, index) => (
        <Link
          to="/BBMerchandise"
          key={item.id}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          className="w-full sm:w-[48%] md:w-[31%] lg:w-[22%] h-[50vh] relative overflow-hidden rounded-xl shadow-lg"
        >
          {/* Video */}
          <div className="w-full h-full">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              src={item.video}
            />
          </div>

          {/* Overlay content */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] flex items-center gap-4 justify-center bg-white/20 backdrop-blur-md border border-white/30 shadow-lg p-2 rounded-xl">
            <img
              src={item.image}
              alt={item.name}
              className="w-[60px] h-[80px] object-cover rounded-lg"
            />
            <div className="text-white">
              <h2 className="text-base font-bold">{item.name}</h2>
              <p className="text-sm">Rs. {item.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Advertise;
