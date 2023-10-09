import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const BottomBanner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="bg-[url('/public/topTeam.jpg')] bg-cover bg-center min-h-[70vh] static">
        <div className=" min-w-full bg-gradient-to-r from-[#11052cbe] to-[#3e087b70]  min-h-screen">
          <div className="max-w-screen-xl mx-auto py-24 px-10">
            <div>
              <div
                className="flex justify-center items-center gap-2 mt-10"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <div className="bg-white h-1 w-14"></div>
                <h1 className="text-[#f43b86] font-semibold ">GREATE TEAM</h1>
              </div>
            </div>
            <div className="text-white space-y-8 mt-10">
              <h1
                className="text-6xl  font-bold"
                data-aos="flip-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                Top Of Team <br /> From Monthly Winner
              </h1>
              <p
                data-aos="flip-left"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                he pinnacle of achievement in our gaming events. The Top of Team
                award is the ultimate recognition for skill,
                <br /> strategy, and teamwork. Every month, the best of the best
                rise to the occasion, showcasing exceptional <br /> gaming
                prowess and dominating the competition.
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
