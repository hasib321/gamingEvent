import { BsFillCheckCircleFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const PriceCard = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-[#11052c]">
      <div className="max-w-screen-xl mx-auto py-20">
        <div className="text-center space-y-7">
          <p className="text-[#f43b86] font-semibold">EVENTS CLASS</p>
          <h1 className="text-white text-6xl font-bold">Lets Join Your Team</h1>
          <div className="flex justify-center items-center pt-5">
            <div className="bg-[#f43b86] h-1 w-14 "></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 pt-10">
          {/* price card 1 */}
          <div
            className="px-5 py-5 text-white border-gray-400 border hover:bg-[#3d087b]"
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div className="border-b">
              <h1 className="text-[#f43b86] text-center text-4xl font-bold py-8">
                Junior Class
              </h1>
            </div>
            <div className="text-white flex gap-20 my-8 ">
              <ul className="space-y-5">
                <li className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
                  0 - 2 Winner Rate
                </li>
                <li className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
                  Open For New Team
                </li>
                <li className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
                  Easy Battle
                </li>
                <li className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
                  Certificate
                </li>
                <li className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
                  Moderate Support
                </li>
              </ul>
            </div>
            <div className="pb-5">
              <button className="text-white bg-[#f43b86] px-7 py-3 rounded-sm font-semibold">
                Take Event
              </button>
            </div>
          </div>

          {/* price card 2 */}

          <div className="px-5 py-5 text-white border-gray-400 border hover:bg-[#3d087b]">
            <div className="border-b">
              <h1 className="text-[#f43b86] text-center text-4xl font-bold py-8">
                Middle Class
              </h1>
            </div>
            <div className="text-white flex gap-20 my-8 ">
              <ul className="space-y-5">
                <li className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
                  3 - 6 Winner Rate
                </li>
                <li className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
                  Open For New Team
                </li>
                <li className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
                  Moderate Battle
                </li>
                <li className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
                  Certificate
                </li>
                <li className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
                  High Support
                </li>
              </ul>
            </div>
            <div className="pb-5">
              <button className="text-white bg-[#f43b86] px-7 py-3 rounded-sm font-semibold">
                Take Event
              </button>
            </div>
          </div>

          {/* price card 3 */}

          <div
            className="px-5 py-5 text-white border-gray-400 border hover:bg-[#3d087b]"
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div className="border-b">
              <h1 className="text-[#f43b86] text-center text-4xl font-bold py-8">
                Expert Class
              </h1>
            </div>

            <div className="text-white flex gap-20 my-8 ">
              <ul className="space-y-5">
                <li className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
                  More 10+ Winner Rate
                </li>
                <li className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
                  High Class Team
                </li>
                <li className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
                  Super Battle
                </li>
                <li className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
                  Certificate
                </li>
                <li className="flex gap-2 items-center">
                  <BsFillCheckCircleFill className="text-[#f43b86]"></BsFillCheckCircleFill>
                  Extreme Support
                </li>
              </ul>
            </div>
            <div className="pb-5">
              <button className="text-white bg-[#f43b86] px-7 py-3 rounded-sm font-semibold">
                Take Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
