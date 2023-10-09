import { useEffect, useState } from "react";
import Service from "../Service/Service";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = ({ services }) => {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-[#11052c] ">
      <div className="max-w-screen-xl mx-auto py-20">
        <div
          className="text-center space-y-7"
          data-aos="flip-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <p className="text-[#f43b86] font-semibold">GAMING SERVICE</p>
          <h1 className="text-white text-6xl font-bold">
            We Do E - Sport Gaming
          </h1>
          <div className="flex justify-center items-center pt-5">
            <div className="bg-[#f43b86] h-1 w-14 "></div>
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 px-5"
          data-aos="slide-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          {isShow
            ? services.map((service) => (
                <Service service={service} key={service.id}></Service>
              ))
            : services
                .slice(0, 6)
                .map((service) => (
                  <Service service={service} key={service.id}></Service>
                ))}
        </div>
        <div>
          {services.length > 6 && (
            <div className="flex items-center justify-center mt-5">
              <button
                className="text-white bg-[#f43b86] px-7 py-3 rounded-sm font-semibold"
                onClick={() => setIsShow(!isShow)}
              >
                {isShow ? "see less" : "see more"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
