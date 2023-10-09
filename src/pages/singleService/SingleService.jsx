import { Link } from "react-router-dom";

const SingleService = ({ serviceDetails }) => {
  const { picture, title, category, description, service_type, price, id } =
    serviceDetails;

  return (
    <div className="bg-[#11052c]">
      <div className="max-w-screen-xl mx-auto py-10">
        <div className="text-white">
          <h1 className="text-[#f43b86] font-bold text-4xl pb-8 text-center">
            {title}
          </h1>
          <div className="mb-6">
            <div className="w-full h-[100vh]">
              <img className="w-full h-full" src={picture} alt="" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-2 mt-3">
              <h1 className="text-base ">
                <span className="text-2xl text-[#f43b86]"> Category: </span>
                {category}
              </h1>
            </div>
            <div className="space-y-2 mt-3">
              <h1 className="text-base ">
                <span className="text-2xl text-[#f43b86]"> Types: </span>
                {service_type}
              </h1>
            </div>
          </div>
          <div className="space-y-2 mt-5">
            <h1 className="text-2xl text-[#f43b86]">Event Details:</h1>
            <p className="text-sm">{description}</p>
          </div>
          <div className="space-y-2 mt-3">
            <h1 className="text-base ">
              <span className="text-2xl text-[#f43b86]"> Price: </span>
              {price} $
            </h1>
          </div>
          <Link to="/">
            <button className="text-white bg-[#f43b86] px-7 py-3 rounded-sm font-semibold mt-5">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
