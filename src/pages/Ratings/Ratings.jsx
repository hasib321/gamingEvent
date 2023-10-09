import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Ratings = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-[#11052c]">
      <div className="max-w-screen-xl mx-auto px-5">
        <div
          className="text-center space-y-7"
          data-aos="fade"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <p className="text-[#f43b86] font-semibold">RATING & STATISTIC</p>
          <h1 className="text-white text-6xl font-bold">
            Events & Streaming Rate
          </h1>
          <div className="flex justify-center items-center pt-5">
            <div className="bg-[#f43b86] h-1 w-14 "></div>
          </div>
        </div>

        <div className="text-white text-center grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-24 gap-5">
          <div
            className="hover:bg-[#3D087B] border py-8"
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <h1 className="text-[#f43b86] text-6xl font-bold">4.8</h1>
            <p className="text-xl font-semibold">Rating Publishing</p>
          </div>
          <div
            className="hover:bg-[#3D087B] border py-8"
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <h1 className="text-[#f43b86] text-6xl font-bold">99+</h1>
            <p className="text-xl  font-semibold">Game Battle</p>
          </div>
          <div
            className="hover:bg-[#3D087B] border py-8"
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <h1 className="text-[#f43b86] text-6xl font-bold">10 B</h1>
            <p className="text-xl font-semibold">Money Reach</p>
          </div>
          <div
            className="hover:bg-[#3D087B] border py-8"
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <h1 className="text-[#f43b86] text-6xl font-bold">12k</h1>
            <p className="text-xl font-semibold">Community</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
