import React, { useState } from "react";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import { CoursesService } from "../../services/CoursesService";
import { getLocalStore } from "../../utils/local";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  fetchSubcriptionRecoil,
  subscriptionListRecoil,
} from "../../redux/recoil/subscriptionListRecoil";
import {
  fetchWishlistRecoil,
  wishlistCoursesRecoil,
} from "../../redux/recoil/wishlistCoursesRecoil";

const CourseOveral = ({ courses, code }) => {
  const user = getLocalStore("user_info");
  const [successData, setSuccessData] = useState("");
  const [failData, setFailData] = useState("");
  const [_, setSubscriptionList] = useRecoilState(subscriptionListRecoil);
  const [currentWishlist, setWishlist] = useRecoilState(wishlistCoursesRecoil);
  const wishlist = useRecoilValue(fetchWishlistRecoil);
  const subscriptionList = useRecoilValue(fetchSubcriptionRecoil);
  let list = [];

  const subscribeCourse = (user, code) => {
    if (user != null) {
      CoursesService.subscribeCourse({
        maKhoaHoc: String(code),
        taiKhoan: user.taiKhoan,
      })
        .then((result) => {
          document.getElementById("successNotification").style.display =
            "block";
          document.getElementById("failNotification").style.display = "none";
          list.push(courses);
          if (subscriptionList.length == 0) {
            setSubscriptionList(() => list);
          } else {
            setSubscriptionList((current) => current.concat(list));
          }

          setFailData("");
          setSuccessData("You has been subscribe this courses");
        })
        .catch((err) => {
          console.log(err);
          document.getElementById("successNotification").style.display = "none";
          document.getElementById("failNotification").style.display = "block";

          setFailData("Sorry, maybe you has been subscribe this before");
          setSuccessData("");
        });
    } else {
      window.location.href = "http://localhost:3000/login";
    }
  };

  const addToWishlist = (courses) => {
    let list = [];
    if (wishlist.length == 0) {
      list.push(courses);
      setWishlist(() => list);

      document.getElementById("successNotification").style.display = "block";
      document.getElementById("failNotification").style.display = "none";

      setSuccessData("This courses has been add to your wishlist");
    } else {
      list.push(courses);
      setWishlist((current) => current.concat(list));

      document.getElementById("successNotification").style.display = "block";
      document.getElementById("failNotification").style.display = "none";

      setSuccessData("This courses has been add to your wishlist");
    }
  };

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
            <button
              onClick={() => {
                subscribeCourse(user, code);
              }}
              className="text-lg px-10 bg-purple-500 border border-purple-500 text-white py-3 sm:w-full w-full"
            >
              Subscription
            </button>
            <button onClick={() => {
              addToWishlist(courses);
            }}>
              <i className="fa-regular fa-heart text-lg py-3 px-4 text-center ml-2 border bg-black border-black"></i>
            </button>
          </div>
        </li>
        <li>
          <button
            className="w-full px-20 text-lg border border-black bg-black py-3"
          >
            Buy now
          </button>
          <div className="my-3">
            <span
              id="successNotification"
              className="font-normal text-green-600 w-full text-center text-sm inline-block hidden"
            >
              {successData}
            </span>
            <span
              id="failNotification"
              className="font-normal text-red-600 w-full text-center text-sm inline-block hidden"
            >
              {failData}
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CourseOveral;
