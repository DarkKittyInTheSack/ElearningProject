import React from "react";
import { Rate } from "antd";
import "./RecomendCourse.scss";
import { Link } from "react-router-dom";

const RecomendCourse = ({ courses }) => {
  return (
    <div className="m-5">
      <h2 className="font-bold font-serif text-4xl mb-7">What to learn next</h2>
      <span className="font-bold text-2xl">Our top pick for you</span>

      {courses.map((item) => {
        const {
          maKhoaHoc,
          tenKhoaHoc,
          hinhAnh,
          ngayTao,
          danhMucKhoaHoc,
          luotXem,
          nguoiTao,
        } = item;
        return (
          <div
            className="mb-10 mt-5 flex p-6 border bg-gray-100 border-gray-200"
            key={maKhoaHoc}
          >
            <Link
              to={`/detail/${maKhoaHoc}`}
              className="img_recomend_course"
              style={{
                backgroundImage: `url(${hinhAnh})`,
              }}
            >
              {/* <img
                src={hinhAnh}
                alt=""
                className="block "
                width={"480px"}
                height={"270px"}
                loading="lazy"
              /> */}
            </Link>

            <div className="mx-6">
              <Link to={`/detail/${maKhoaHoc}`}>
                <h2 className="font-bold text-3xl">{tenKhoaHoc}</h2>
              </Link>

              <p className="font-medium text-base text-black my-1">
                {danhMucKhoaHoc.tenDanhMucKhoaHoc}
              </p>
              <p className="font-normal text-xs text-gray-700 my-1">
                By {nguoiTao.hoTen}
              </p>
              <p className="font-normal text-xs text-gray-700 my-1">
                Updated{" "}
                <span className="font-medium text-xs mr-2 text-gray-900">
                  {ngayTao}
                </span>
                <br className="md:hidden sm:block"/>
                89.5 total hours  &#8226; 774 lectures <br className="md:hidden sm:block"/> &#8226; All Levels
              </p>
              <div className="flex my-2 items-center">
                <p className="font-semibold text-base text-amber-900">4.3</p>
                <Rate
                  allowHalf
                  defaultValue={4.3}
                  className="mx-1 text-sm space-x-0.5"
                />
                <span className="font-medium text-xs">({luotXem})</span>
              </div>
              <div className="mt-14 flex items-center space-x-2">
                <span className="font-bold text-xl">₫279,000</span>
                <span className="font-medium text-xl line-through text-gray-500">
                  ₫1,799,000
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecomendCourse;
