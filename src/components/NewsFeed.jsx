
import one from '../images/one.jpg'

const NewsFeed = () => {
  return (
    <div className="bg-black text-white px-4 py-10 md:px-10">
      <h1 className="uppercase font-bold text-9xl md:text-6xl font-[gumona] lg:text-9xl text-center md:text-left">
        news feeds
      </h1>

      <div className="min-h-[80vh] mt-10 flex flex-col lg:flex-row justify-between gap-6">
        {/* Left Image with Glass Text */}
        <div className="w-full lg:w-[50%] rounded-xl overflow-hidden relative h-[60vh] lg:h-auto">
          <img
            className="w-full h-full object-cover absolute"
            src={one}
            alt="news"
          />
          <div className="absolute z-10 w-[90%] md:w-[80%] left-1/2 bottom-6 transform -translate-x-1/2 backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg rounded-xl p-4">
            <h1 className="text-md md:text-xl lg:text-5xl uppercase font-[gumona]">
              amazing collaboration to be released on youthiapa
            </h1>
          </div>
        </div>

        {/* Right Text Columns */}
        <div className="w-full lg:w-[45%] font-serif flex flex-col justify-between gap-6">
          <div className="border-2 rounded-xl p-5 md:p-9">
            <h3 className="text-2xl md:text-3xl lg:text-6xl uppercase  font-[gumona]">
              Casual fashion: a comfortable and stylish way to dress
            </h3>
            <p className="text-sm md:text-lg font-light mt-2 w-full md:w-[80%] leading-none font-mono">
              casual fashion is a trend that never goes out of style
            </p>
          </div>

          <div className="border-2 rounded-xl bg-[#FDCC0B] text-black p-5 md:p-9">
            <h3 className="text-2xl md:text-3xl lg:text-6xl uppercase  font-[gumona]">
              effortless chic: mastering the art of casual fashion
            </h3>
            <p className="text-sm md:text-lg font-light mt-2 w-full md:w-[80%] leading-none font-mono">
              casual fashion is more than just throwing on a pair of pants and a t-shirt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
