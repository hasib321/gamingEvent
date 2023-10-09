import Accordian from "../Accordian/Accordian";
import Footer from "../Footer/Footer";
import NavBar from "../Header/NavBar";
import PriceCard from "../PriceCard/PriceCard";
import Progressbar from "../Progressbar/Progressbar";

import BottomBanner from "../bottomBanner/BottomBanner";

const Events = () => {
  return (
    <div>
      <div className="bg-[url('/public/gamer-winning.jpg')] bg-cover bg-center min-h-[80vh]">
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
                <h1 className="text-8xl  font-bold">Events</h1>
                <p>
                  Welcome to the heart of the action - our gaming events
                  section! Immerse yourself in a world of virtual
                  <br /> challenges , strategic showdowns, and
                  adrenaline-pumping battles. We curate a diverse array of
                  events <br />
                  designed to cater to every gaming enthusiast, from the
                  seasoned pro to the casual gamer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#11052c]">
        <div className="max-w-screen-xl mx-auto">
          <div>
            <PriceCard></PriceCard>
          </div>
          <div>
            <Accordian></Accordian>
          </div>
          <div>
            <Progressbar></Progressbar>
          </div>
          <div>
            <BottomBanner></BottomBanner>
          </div>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Events;
