import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner";
import NavBar from "../Header/NavBar";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";

import Ratings from "../Ratings/Ratings";
import PriceCard from "../PriceCard/PriceCard";
import BottomBanner from "../bottomBanner/BottomBanner";

const Home = () => {
  const allEvents = useLoaderData();
  return (
    <div>
      <div className="bg-[url('/public/banner.jpg')] bg-cover bg-center min-h-[90vh]">
        <div className=" min-w-full bg-gradient-to-r from-[#11052cbe] to-[#3e087b70]  min-h-screen">
          <div className="max-w-screen-xl mx-auto">
            <div className="py-5">
              <NavBar></NavBar>
            </div>
            <Banner></Banner>
          </div>
        </div>
      </div>
      <div>
        <Services services={allEvents}></Services>
      </div>
      <div>
        <Ratings></Ratings>
      </div>
      <div>
        <PriceCard></PriceCard>
      </div>

      <div>
        <BottomBanner></BottomBanner>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
