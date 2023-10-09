import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { picture, title, category, description, service_type, price, id } =
    service;

  return (
    <div>
      <div className="border p-5 hover:bg-[#3d087b]">
        <div className="h-[250px] ">
          <img className="h-full w-full" src={picture} alt="" />
        </div>
        <div className="space-y-5">
          <div className="mt-5 flex justify-between items-center">
            <h5 className="text-xl font-semibold text-white ">{title}</h5>
            <span className="text-xl font-bold text-white">${price}</span>
          </div>

          <div className="text-white">
            {description.length > 50 ? (
              <p>{description.slice(0, 120)}.....</p>
            ) : (
              <p>{description}</p>
            )}
            <div className="my-4">
              <Link
                className=" text-white bg-[#f43b86] px-4 py-2 rounded-sm font-semibold"
                to={`/servicedetails/${id}`}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
