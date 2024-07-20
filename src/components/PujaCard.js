import React from "react";
import { Link } from "react-router-dom";

const PujaCard = ({ puja }) => {
  const { id, imageUrl, name, description, whatFor, temple, venue } = puja;
  console.log(id, imageUrl);
  return (
    <Link to={`/epuja/${id}`}>
      <div className="p-2 w-[350px]  card m-6">
        <img alt="puja" src={imageUrl} />
        <p className="my-2 text-center text-red-500">{name}</p>
        <hr className="text-red-500 " />
        <h1 className="my-2 text-2xl">{description}</h1>
        <p className="my-2">{whatFor}</p>
        <div>
          <p className="my-2">{temple} </p>
        </div>
        <div>
          <p className="my-2">{venue}</p>
        </div>
        <button className="w-full bg-green-500 p-4 rounded-sm" type="button">
          PARTICIPATE →
        </button>
      </div>
    </Link>
  );
};

export default PujaCard;
