import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromLocalStorage } from "../../utils/local";
import { useForm } from "react-hook-form";
import { CoursesService } from "../../services/CoursesService";

const ResponsiveMenu = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useSelector((state) => state.userSlice);
  const [searchData, setSearchData] = useState({});
  const [keyData, setKeyData] = useState("");
  const [pageData, setPageData] = useState(0);
  const renderUser = () => {
    if (user) {
      return (
        <>
          <div className="flex justify-start list-none items-center sm:mb-3 mx-auto header_account_area">
            <Link
              to={`/profile/${user.taiKhoan}`}
              className="uppercase mx-2 text-sm text-white bg-black font-medium border border-black rounded-full leading-4 px-3 py-2 hover:bg-gray-100 hover:text-black duration-300"
            >
              {user.taiKhoan.split("").slice(0, 1)}
            </Link>

            <button
              type="button"
              onClick={() => {
                removeFromLocalStorage("user_info");
                removeFromLocalStorage("password");

                window.location.href = "http://localhost:3000/";
              }}
              className="mx-0 text-sm text-center border border-black border-t-2 border-b-2 border-l-2 border-r-2 font-medium px-3 py-2 hover:bg-gray-100 duration-300"
            >
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="flex justify-center my-3 list-none items-center sm:mb-3 mx-auto header_account_area">
            <Link
              to={"/login"}
              className="mx-0 text-sm text-black  font-medium border border-black border-t-2 border-b-2 border-l-2 border-r-2 px-3 py-2 hover:bg-gray-100 duration-300"
            >
              Login
            </Link>
            <Link
              to={"/signup"}
              className="text-sm text-white bg-black border border-black border-t-2 border-b-2 border-l-2 border-r-2 mx-3 font-medium px-3 py-2 hover:text-gray-100 duration-300"
            >
              Sign Up
            </Link>

            <button className="mx-0 text-sm text-center border border-black border-t-2 border-b-2 border-l-2 border-r-2 font-medium px-3 py-2 hover:bg-gray-100 duration-300">
              <i className="fa-solid fa-globe"></i>
            </button>
          </div>
        </>
      );
    }
  };
  const onSubmit = (data) => {
    window.location.href = `http://localhost:3000/search/${data.searchKey}`;
  };
  const setPagingData = (key, page, pageSize) => {
    CoursesService.getCoursesPaging(key, page, pageSize)
      .then((result) => {
        setSearchData(result.data.items);
      })
      .catch((err) => {});
  };
  return (
    <div
      className="bg-white w-full z-10 absolute top-0 right-0 p-2 translate-x-full hidden"
      id="btn_list"
    >
      <button
        className="p-2 text-white"
        onClick={() => {
          const btn_list = document.getElementById("btn_list");
          btn_list.style.display = "none";
          btn_list.style.transform = "translateX(100%)";
          btn_list.style.transition = "all 0.5s";
        }}
      >
        <i className="fa-solid fa-xmark text-black text-xl"></i>
      </button>
      <ul className="space-y-3 mx-3 flex flex-col list-none items-center text-center">
        <li>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex border border-slate-800 rounded-3xl w-full sm:mx-auto bg-gray-200 p-3"
          >
            <button type="submit" className="inline-block text-center w-7">
              <i className="fa fa-search text-gray-500"></i>
            </button>
            <input
              {...register("searchKey")}
              type="text"
              className="mx-3 w-full text-sm outline-none bg-transparent"
              placeholder="Search for anything..."
              onChange={(event) => {
                setKeyData(event.target.value);
                setPageData(1);
                setPagingData(keyData, pageData, 3);
              }}
            />
          </form>
        </li>

        <li>
          <Link
            to={"/business"}
            className="text-sm text-slate-700 mx-3 font-normal hover:text-purple-500 duration-500"
          >
            learnit Business
          </Link>
        </li>
        <li>
          <Link
            to={"/teacher"}
            className="text-sm text-slate-700 mx-3 font-normal hover:text-purple-500 duration-500"
          >
            Teach With Us
          </Link>
        </li>
        <li>
          <Link
            to={"/learning"}
            className="text-sm text-slate-700 mx-3 font-normal hover:text-purple-500 duration-500"
          >
            My Learning
          </Link>
        </li>
        <li>
          <ul className="flex md:justify-between sm:justify-center list-none items-center mx-1">
            <li>
              <button className="text-sm text-slate-700 mx-3 font-medium hover:text-purple-500 duration-500">
                <i className="fa-regular fa-heart text-lg"></i>
              </button>
            </li>
            <li>
              <button className="text-sm text-slate-700 mx-3 font-medium hover:text-purple-500 duration-500">
                <i className="fa-solid fa-cart-shopping text-lg"></i>
              </button>
            </li>
            <li>
              <button className="text-sm text-slate-700 mx-3 font-medium hover:text-purple-500 duration-500">
                <i className="fa-regular fa-bell text-lg"></i>
              </button>
            </li>
          </ul>
        </li>
      </ul>
      {renderUser()}
    </div>
  );
};

export default ResponsiveMenu;
