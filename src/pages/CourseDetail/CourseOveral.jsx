import React from "react";
import { Rate } from "antd";
import { Link } from "react-router-dom";

const CourseOveral = ({ courses }) => {

  return (
    <div className="mx-5 p-5 text-white relative">
      <div className="flex my-3 items-center font-medium text-purple-400">
        <Link to={"/"} className="my-2 block text-sm">
          Home
        </Link>
        <i className="fa-solid fa-chevron-right block text-xs text-white mx-2"></i>
        <Link to={"/category/10"} className="my-2 block text-sm">
          Development
        </Link>
        <i className="fa-solid fa-chevron-right block text-xs text-white mx-2"></i>
        <Link to={""} className="my-2 block text-sm">
          Development
        </Link>
      </div>

      <h2 className="font-bold text-3xl">{courses.tenKhoaHoc}</h2>
      <p className="font-medium text-lg my-2">
        fullstack web development MERN STACK, ChatGPT, nodejs, react, mongodb,{" "}
        <br /> javascript, HTML, CSS, express, API, & more
      </p>

      <div className="flex my-2 items-center">
        <p className="font-semibold text-base text-yellow-500">4.3</p>
        <Rate
          allowHalf
          defaultValue={4.3}
          className="mx-1 text-sm space-x-0.5"
        />
        <span className="font-normal underline text-purple-300 text-sm">
          {" "}
          ({courses.luotXem} ratings){" "}
        </span>
      </div>

      {courses.nguoiTao ? (
        <p className="font-normal text-sm my-1">
          Created by{" "}
          <span className="font-normal underline text-purple-300">
            {courses.nguoiTao.hoTen}
          </span>
        </p>
      ) : (
        <p className="font-normal text-sm my-1">
          Created by{" "}
          <span className="font-normal underline text-purple-300">Unknown</span>
        </p>
      )}

      <p className="font-normal text-sm my-1">
        <i className="fa-solid fa-triangle-exclamation mr-2"></i>
        Last Updated {courses.ngayTao}
        <i className="fa-solid fa-globe ml-4 mr-2"></i>
        English
        <i className="fa-solid fa-closed-captioning ml-4 mr-2"></i>
        English[CC], Simplify Chinese[Auto]
      </p>

      <ul className="my-5 w-full font-bold text-3xl md:hidden sm:block list-none sm:space-y-3">
        <li>
          <p>đ1,750,000</p>
        </li>
        <li>
          <div className="flex items-center my-2">
            <button className="text-lg px-10 bg-purple-500 border border-purple-500 text-white py-3 sm:w-full">
              Add to cart
            </button>
            <button>
              <i className="fa-regular fa-heart text-lg py-3 px-4 text-center ml-2 border bg-black border-black"></i>
            </button>
          </div>
        </li>
        <li>
          <button className="w-full px-20 text-lg border border-black bg-black py-3">
            Buy Now
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CourseOveral;
