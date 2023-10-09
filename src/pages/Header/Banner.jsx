import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { Link } from "react-router-dom";
const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="py-20 px-8">
        <div>
          <div
            className="flex justify-center items-center gap-2"
            data-aos="slide-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div className="bg-white h-1 w-14"></div>
            <h1 className="text-[#f43b86] font-semibold ">GAMING EVENTS</h1>
          </div>
        </div>
        <div className="text-white space-y-8 mt-5">
          <h1
            className="text-6xl  font-bold"
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            Lets Join Our <br /> ESport Gaming Events
          </h1>
          <p
            data-aos="fade"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            Ready to level up? Join our eSports events for thrilling gaming
            action! Whether you're a pro or just starting out,
            <br /> showcase your talent and compete for victory. Let's unite in
            the world of eSports and make gaming history!
          </p>
        </div>

        <div
          className="text-white flex gap-20 my-8"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <ul>
            <li className="flex gap-2 items-center">
              <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
              World Live Streaming
            </li>
            <li className="flex gap-2 items-center">
              <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
              Big Winner Gift
            </li>
            <li className="flex gap-2 items-center">
              <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
              Game Emblem Winner
            </li>
          </ul>
          <ul>
            <li className="flex gap-2 items-center">
              <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
              Engage Gamers
            </li>
            <li className="flex gap-2 items-center">
              <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
              Foster Unity
            </li>
            <li className="flex gap-2 items-center">
              <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
              Competitive Spirit
            </li>
          </ul>
        </div>
        <div className="mt-7">
          <Link
            to="/register"
            className="text-white bg-[#f43b86] px-7 py-3 rounded-sm font-semibold"
          >
            Register now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
