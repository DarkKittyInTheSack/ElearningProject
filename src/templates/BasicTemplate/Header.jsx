import { useSignalEffect, useSignals } from "@preact/signals-react/runtime";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoursesCategory } from "../../redux/reducer/coursesCategorySlice";
import { useForm } from "react-hook-form";
import "./header.scss";
import { CoursesService } from "../../services/CoursesService";
import { removeFromLocalStorage } from "../../utils/local";
import ResponsiveMenu from "./ResponsiveMenu";
import { debounce } from "lodash";
import { useAllCategory } from "../../components/customCategoryHook";
import { useRecoilState } from "recoil";
import { subscriptionListRecoil } from "../../redux/recoil/subscriptionListRecoil";
import { wishlistCoursesRecoil } from "../../redux/recoil/wishlistCoursesRecoil";

const Header = () => {
  const isResponsive = useSignals(false);
  const category = useAllCategory();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const [searchData, setSearchData] = useState([]);
  const [keyData, setKeyData] = useState("");
  const [pageData, setPageData] = useState(1);
  const [clearSubscription,setClearLogoutData] = useRecoilState(subscriptionListRecoil)
  const [clearWishlist,setClearWishlistData] = useRecoilState(wishlistCoursesRecoil)

  const { user } = useSelector((state) => state.userSlice);
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

            <Link to={'/login'} onClick={() =>{
              removeFromLocalStorage('user_info')
              removeFromLocalStorage('password')

              setClearLogoutData((current) => {current = []})
              setClearWishlistData((current) => {current = []})
              
            }} className="mx-0 text-sm text-center border border-black border-t-2 border-b-2 border-l-2 border-r-2 font-medium px-3 py-2 hover:bg-gray-100 duration-300">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </Link>
          </div>
          
        </>
      );
    } else {
      return (
        <>
          <div className="flex justify-start list-none items-center sm:mb-3 mx-auto header_account_area">
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
      .catch((err) => {

      });
  };

  const handleSearchProgress = debounce((key,page) =>{
    setPagingData(key,page,3)
  },100)

  useSignalEffect(() => {
    dispatch(fetchCoursesCategory());
  }, []);

  return (
    <header className="font-sans mx-auto sm:overflow-x-auto sm:w-full">
      <nav className="md:p-3 sm:p-2 border-gray-200 border-b-2 main_nav">
        <div className="md:flex md:items-center sm:grid sm:grid-cols-1 sm:space-y-3 md:justify-around header_nav_content">
          <div className="md:flex md:items-center md:mr-3 sm:grid sm:grid-cols-2 header_nav_logo">
            <Link to={"/"} className="px-3 py-2 w-28 outline-none">
              <img
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                className="w-full block"
              />
            </Link>

            <button
              type="button"
              className="text-sm text-slate-700 mx-3 py-3 z-20 font-normal sm:hidden md:block btn_header_logo_category"
              onMouseOver={() => {
                const btn_list = document.getElementById("data_onMouse");
                btn_list.style.display = "block";
              }}
              onMouseOut={() => {
                const btn_list = document.getElementById("data_onMouse");
                btn_list.style.display = "none";
              }}
            >
              <div
                className="hidden grid grid-cols-3 w-1/3 space-x-3 items-center bg-white py-5 px-2 font-medium text-sm absolute top-16 left-0 z-10"
                id="data_onMouse"
              >
                {category.map((item) => {
                  const { maDanhMuc, tenDanhMuc } = item;
                  const categoryBlur = maDanhMuc + "categoryBlur";
                  return (
                    <a
                      href={`/category/${maDanhMuc}`}
                      className="py-2 px-1 inline-block text-center hover:text-purple-500 duration-500"
                      key={categoryBlur}
                    >
                      {tenDanhMuc}
                    </a>
                  );
                })}
              </div>
              Categories
            </button>
            <button
              className="md:hidden sm:ps-14 sm:pe-3 sm:text-right"
              onClick={() => {
                const btn_list = document.getElementById("btn_list");

                if (!isResponsive.u) {
                  
                  btn_list.style.transition = 'all 0.5s'
                  isResponsive.u = true;
                } else {
                  btn_list.style.display = 'block'
                  btn_list.style.transform = "translateX(0)";
                  btn_list.style.transition = 'all 0.5s'
                  isResponsive.u = false;
                }
              }}
            >
              <i className="fa-solid fa-bars text-base px-2 py-1 rounded bg-black text-white"></i>
            </button>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex border border-slate-800 rounded-3xl md:w-4/12 sm:w-11/12 sm:mx-auto bg-gray-200 p-3 md:mr-2"
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
                handleSearchProgress(keyData,pageData)
              }}
            />
          </form>
          {searchData.length > 0 && keyData != "" ? (
            <div className="search_hint absolute z-10 bg-white p-3">
              {searchData.length > 0
                ? searchData.map((item) => {
                    const { maKhoaHoc, tenKhoaHoc, hinhAnh } = item;
                    const coursesCode = maKhoaHoc + "searchList";
                    return (
                      <a
                        href={`/detail/${maKhoaHoc}`}
                        className="flex items-center"
                        key={coursesCode}
                      >
                        <div className="w-24 p-2 object-cover">
                          <img src={hinhAnh} alt="#" className="block w-full" />
                        </div>
                        <p className="font-normal text-base mx-2">
                          {tenKhoaHoc}
                        </p>
                      </a>
                    );
                  })
                : null}
              <button
                type="button"
                className="font-bold"
                onClick={() => {
                  let count = pageData + 1;
                  setPageData(count);
                  handleSearchProgress(keyData,pageData)
                }}
              >
                Load more
              </button>
            </div>
          ) : null}
          <ul
            className="sm:hidden sm:space-y-3 md:space-y-0 mx-3 md:flex list-none md:items-center sm:text-center"
          >
            <li>
              <Link
                to={"/business"}
                className="text-sm text-slate-700 mx-3 font-normal hover:text-purple-500 duration-500"
              >
                Udemy Business
              </Link>
            </li>
            <li>
              <Link
                to={"/teacher"}
                className="text-sm text-slate-700 mx-3 font-normal hover:text-purple-500 duration-500"
              >
                Teach on Udemy
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
      </nav>
      <nav className="py-2 sm:hidden md:block category_nav">
        <ul className="flex justify-center list-none items-center">
          {category.map((item) => {
            const { maDanhMuc, tenDanhMuc } = item;
            return (
              <li key={maDanhMuc}>
                <a
                  href={`/category/${maDanhMuc}`}
                  className="text-sm text-slate-700 mx-3 font-medium hover:text-purple-500 duration-500"
                >
                  {tenDanhMuc}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <ResponsiveMenu/>
    </header>
  );
};

export default Header;
