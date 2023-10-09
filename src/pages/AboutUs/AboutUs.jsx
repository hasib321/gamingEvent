import { BsFillCheckCircleFill } from "react-icons/bs";
import NavBar from "../Header/NavBar";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";
import BottomBanner from "../bottomBanner/BottomBanner";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-[url('/public/aboutBanner.jpg')] bg-cover bg-center min-h-[80vh]">
        <div className=" min-w-full bg-gradient-to-r from-[#11052cbe] to-[#3e087b70]  min-h-[80vh]">
          <div className="max-w-screen-xl mx-auto">
            <div className="py-5">
              <NavBar></NavBar>
            </div>
            <div className="px-8">
              <div>
                <div className="flex justify-center items-center gap-2 mt-24">
                  <div className="bg-white h-1 w-14"></div>
                  <h1 className="text-[#f43b86] font-semibold ">
                    GAMING EVENTS
                  </h1>
                </div>
              </div>
              <div className="text-white space-y-8 mt-10">
                <h1 className="text-8xl  font-bold">About Us</h1>
                <p>
                  Welcome to our gaming event platform, where the excitement
                  never ends! We are passionate about bringing gaming <br />{" "}
                  enthusiasts together to experience the thrill of competitive
                  gaming. Our platform hosts a variety of exhilarating events,
                  <br /> each carefully crafted to offer a unique and immersive
                  gaming experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* team */}
      <div>
        <Team></Team>
      </div>

      {/* monthly winner*/}
      <div className="bg-[#11052c] pt-24">
        <div className="max-w-screen-xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-10 px-8">
            <div>
              <img className="w-min" src="aboutUs.jpg" alt="" />
            </div>
            <div>
              <div className="text-white space-y-8 mt-10 ">
                <h1 className="text-6xl  font-bold ">
                  Top Of Team <br /> From Monthly Winner
                </h1>
                <p>
                  he pinnacle of achievement in our gaming events. The Top of
                  Team award is the ultimate recognition for skill,
                  <br /> strategy, and teamwork. Every month, the best of the
                  best rise to the occasion, showcasing exceptional <br />{" "}
                  gaming prowess and dominating the competition.
                </p>
              </div>
              <div className="text-white flex gap-20 my-8">
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
      <BottomBanner></BottomBanner>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AboutUs;
