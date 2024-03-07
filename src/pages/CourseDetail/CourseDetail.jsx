import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CourseOveral from "./CourseOveral";
import WhatYouLearn from "./WhatYouLearn";
import TopCompanyChoose from "./TopCompanyChoose";
import CourseContent from "./CourseContent";
import CourseMoreDetail from "./CourseMoreDetail";
import CourseInstructors from "./CourseInstructors";
import CourseSameCategory from "./CourseSameCategory";
import CourseRating from "./CourseRating";
import RelativeCourse from "./RelativeCourse";
import CourseRightColumn from "./CourseRightColumn";
import { getDataThunk } from "../../redux/reducer/coursesByIDSlice";

const CourseDetail = () => {
  const location = useLocation().pathname.split("/")[2];
  const { courses } = useSelector((state) => state.coursesByIDSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataThunk(location));
    const handleScroll = (event) => {
      let stickyData = document.getElementById("fixedScroll");
      let img = document.querySelector(".course_right_column_img");

      if (
        window.pageYOffset >= Number(60) &&
        window.pageYOffset <= Number(2756)
      ) {
        img.style.display = "none";
        stickyData.style.display = "fixed";
        stickyData.style.top = 0;
        stickyData.style.right = "8rem";
        stickyData.style.transition = "all 0.5s";
        stickyData.style.zIndex = "10";
        stickyData.style.opacity = "1";
      } else {
        if (
          window.pageYOffset <= Number(60) ||
          window.pageYOffset <= Number(2756)
        ) {
          img.style.display = "block";
          stickyData.style.display = "fixed";
          stickyData.style.top = "9rem";
          stickyData.style.right = "8rem";
          stickyData.style.transition = "all 0.5s";
          stickyData.style.zIndex = "10";
          stickyData.style.opacity = "1";
        } else {
          stickyData.style.opacity = "0";
          stickyData.style.zIndex = "-1";
          stickyData.style.transition = "all 0.1s";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="bg-slate-800">
        <div className="container mx-auto ">
          <CourseOveral courses={courses} />
          <div className="w-1/4 fixed top-36 right-32" id="fixedScroll">
            <CourseRightColumn
              image={courses.hinhAnh}
              code={courses.maKhoaHoc}
              courses = {courses}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-10">
        <WhatYouLearn />
        <TopCompanyChoose />
        <CourseContent coursesListData={courses.danhMucKhoaHoc} />
        <CourseMoreDetail description={courses.moTa} />
        <CourseInstructors author={courses.nguoiTao} />
        {courses.danhMucKhoaHoc ? (
          <CourseSameCategory category={courses.danhMucKhoaHoc} />
        ) : null}

        <CourseRating />
        <RelativeCourse />
      </div>
    </div>
  );
};

export default CourseDetail;
