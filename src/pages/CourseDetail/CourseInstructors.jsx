import { effect } from "@preact/signals-react";
import React from "react";

const CourseInstructors = ({ author }) => {
  return (
    <div className="md:w-4/6 sm:w-full" key={"coursesData.nguoiTao.hoTen"}>
      <h2 className="font-bold text-xl mt-5">Instructors</h2>
      {author ? (
        <div className="grid grid-cols-2 items-center gap-2 mb-8">
          <div className="my-3">
            <div className="font-bold text-lg">
              <h2 className="text-purple-700 leading-5">{author.hoTen}</h2>
              <span className="text-base font-medium text-gray-600">
                {author.taiKhoan}
              </span>
            </div>

            <div className="flex items-center justify-center my-2">
              <img
                src="	https://img-b.learnitcdn.com/user/200_H/38530966_a581_11.jpg"
                alt=""
                className="w-1/3 rounded-full"
              />
              <ul className="mx-5 space-y-1 font-normal text-sm">
                <li>
                  <i className="fa-solid fa-star mx-1"></i> 4.4 Instructor
                  Ratting
                </li>
                <li>
                  <i className="fa-solid fa-award mx-2"></i>1,6105 Reviews
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        "Loading...."
      )}
    </div>
  );
};

export default CourseInstructors;
