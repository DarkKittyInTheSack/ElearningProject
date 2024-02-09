import React, { useEffect } from "react";
import { Card, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../redux/reducer/userHomePageSlice";
import "./RelativeCourse.scss";

const RelativeCourse = () => {
  const { courses } = useSelector((state) => state.userHomePageSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * courses.length);
  };

  const getRandomData = (first, last) => {
    let data = [];
    for (let i = first; i < last; i++) {
      if (courses[generateRandomNumber()]) {
        data[i] = courses[generateRandomNumber()];
      }
    }
    return data;
  };

  return (
    <div className="md:w-4/6 sm:w-full">
      <h2 className="font-bold text-2xl mt-8">More course you may know</h2>
      <div className="grid grid-cols-3 my-3">
        {courses
          ? getRandomData(0, 6).map((item) => {
              const { maKhoaHoc, hinhAnh, tenKhoaHoc, nguoiTao, luotXem } =
                item;
              return (
                <Card
                  cover={
                    <a href={`/detail/${maKhoaHoc}`}>
                      <img
                        src={hinhAnh}
                        className="block w-full h-auto align-middle"
                        width={"240"}
                        height={"135"}
                        loading="lazy"
                      />
                    </a>
                  }
                  className="rounded-none border-none"
                  key={maKhoaHoc}
                >
                  <a href={`/detail/${maKhoaHoc}`}>
                    <h3 className="font-bold text-sm line-clamp-2 leading-4">
                      {tenKhoaHoc}
                    </h3>
                  </a>

                  <span className="font-normal text-xs mb-1">
                    {nguoiTao.hoTen}
                  </span>
                  <div className="flex items-center">
                    <p className="font-semibold text-base text-amber-900">
                      4.3
                    </p>
                    <Rate
                      allowHalf
                      defaultValue={4.3}
                      className="mx-1 text-sm space-x-0.5"
                    />
                    <span className="font-medium text-xs">({luotXem})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-base">₫279,000</span>
                    <span className="font-medium text-base line-through text-gray-500">
                      ₫1,799,000
                    </span>
                  </div>
                  <span className="py-1 px-2 bg-yellow-200 font-bold text-sm my-2 inline-block">
                    Bestseller
                  </span>
                </Card>
              );
            })
          : "Loading Courses Related ..."}
      </div>
    </div>
  );
};

export default RelativeCourse;
