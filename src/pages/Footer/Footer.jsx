import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { MdAddIcCall, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#11052c]">
        <div className="text-white grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 gap-10 px-10 pt-20 ">
          <div className=" lg:col-span-2 border-r mt-5 px-3">
            <div>
              <img
                className="w-32"
                src="/public/Gaming-logo-template-on-transparent-background-PNG.png"
                alt=""
              />
            </div>
            <div>
              Level up your gaming experience with us! Join a community of
              passionate gamers, compete in thrilling events, and celebrate
              victories together.
            </div>
          </div>

          <div className="mt-5 border-r px-3">
            <div>
              <h1 className="text-4xl font-bold">Quick Links</h1>
            </div>
            <ul className="mt-5 space-y-3">
              <li className="flex items-center gap-3">
                <BsFillArrowRightCircleFill className="text-[#f43b86] text-xl"></BsFillArrowRightCircleFill>
                <Link className="text-lg" to="/">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <BsFillArrowRightCircleFill className="text-[#f43b86] text-xl"></BsFillArrowRightCircleFill>
                <Link className="text-lg" to="/aboutUs">
                  About Us
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <BsFillArrowRightCircleFill className="text-[#f43b86] text-xl"></BsFillArrowRightCircleFill>
                <Link className="text-lg" to="/events">
                  Events
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <BsFillArrowRightCircleFill className="text-[#f43b86] text-xl"></BsFillArrowRightCircleFill>
                <Link className="text-lg" to="/login">
                  LogIn
                </Link>
              </li>
              <li className="flex items-center gap-3 ">
                <BsFillArrowRightCircleFill className="text-[#f43b86] text-xl"></BsFillArrowRightCircleFill>
                <Link className="text-lg" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-5 border-r px-3">
            <div>
              <h1 className="text-4xl font-bold">Latest Events</h1>
            </div>
            <ul className="mt-5 space-y-3">
              <li className="flex items-center gap-3 text-lg">
                <BsFillArrowRightCircleFill className="text-[#f43b86] text-xl"></BsFillArrowRightCircleFill>
                October Royale
              </li>
              <li className="flex items-center gap-3 text-lg">
                <BsFillArrowRightCircleFill className="text-[#f43b86] text-xl"></BsFillArrowRightCircleFill>
                Strategic Showdown
              </li>
              <li className="flex items-center gap-3 text-lg">
                <BsFillArrowRightCircleFill className="text-[#f43b86] text-xl"></BsFillArrowRightCircleFill>
                Retro Revival
              </li>
              <li className="flex items-center gap-3 text-lg">
                <BsFillArrowRightCircleFill className="text-[#f43b86] text-xl"></BsFillArrowRightCircleFill>
                eSports Legends
              </li>
              <li className="flex items-center gap-3 text-lg">
                <BsFillArrowRightCircleFill className="text-[#f43b86] text-xl"></BsFillArrowRightCircleFill>
                Winter Gaming Fest
              </li>
            </ul>
          </div>

          <div className="mt-5 px-3 border-r">
            <div>
              <h1 className="text-4xl font-bold">Contact Us</h1>
            </div>
            <div className="mt-5">
              <p>Savar,Dhaka,Bangladesh</p>
            </div>
            <div className="mt-5">
              <p className="flex items-center gap-3 ">
                <MdEmail className="text-[#f43b86] text-xl"></MdEmail>
                <span>gamingevent@gmail.com</span>
              </p>
              <p className="flex items-center gap-3 ">
                <MdAddIcCall className="text-[#f43b86] text-xl"></MdAddIcCall>

                <span>+8801011110001</span>
              </p>
            </div>
          </div>
        </div>
        <div className="pt-16 pb-10">
          <p className="text-center text-white text-sm">
            © 2023 - All right reserved by Gaming Event
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
