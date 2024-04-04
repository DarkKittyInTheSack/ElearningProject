import React from "react";
import { Link } from "react-router-dom";

const TopCompanyChoose = () => {
  return (
    <div className="border border-gray-400 md:w-4/6 sm:w-full p-3 my-8">
      <h2 className="font-bold text-base mb-1 px-2">
        Top companies offer this course to their employees
      </h2>
      <span className="font-normal text-sm mb-3 px-2">
        This course was selected for our collection of top-rated courses trusted
        by businesses worldwide.
        <br />
        <Link className="underline text-purple-500 ml-2"> Learn more</Link>
      </span>

      <ul className="flex justify-between items-center px-2 my-3">
        <li>
          <img
            src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
            alt="#"
          />
        </li>
        <li>
          <img
            src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
            alt="#"
          />
        </li>
        <li>
          <img
            src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
            alt="#"
          />
        </li>
        <li>
          <img
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
            alt="#"
          />
        </li>
      </ul>
    </div>
  );
};

export default TopCompanyChoose;
