import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleService from "../singleService/SingleService";

const ServiceDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const serviceDetails = useLoaderData();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const findServices = serviceDetails.find(
      (serviceDetails) => serviceDetails.id === idInt
    );
    setDetails(findServices);
  }, [idInt, serviceDetails]);

  return (
    <div>
      <div>{<SingleService serviceDetails={details}></SingleService>}</div>
    </div>
  );
};

export default ServiceDetails;
