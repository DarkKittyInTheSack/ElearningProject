import React, { memo, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./SearchMenu.scss";
import SearchResultList from "./SearchResultList";
import { fetchCoursesPaging } from "../../redux/reducer/coursesPagingSlice";
import MenuSide from "../CategoryDetail/MenuSide";

const SearchResult = () => {

  const location = useLocation().pathname.split("/")[2];
  const dispatch = useDispatch();
  const [pagingInput, setPagingInput] = useState({
    coursesKey: location,
    page: 1,
    pageSize: 5,
  });
  const { coursesPaging } = useSelector((state) => state.coursesPagingSlice);

  const handleChange = useCallback((data) => {
    let customData = {
      coursesKey: pagingInput.coursesKey,
      page: data,
      pageSize: pagingInput.pageSize,
    };

    data != 0 ? dispatch(fetchCoursesPaging(customData)) : (data = 0);
  }, [pagingInput]);

  useEffect(() => {
    dispatch(fetchCoursesPaging(pagingInput));
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-3xl my-10 sm:mx-3 md:mx-0">
        All results for "{location.replaceAll('%20'," ")}"
      </h2>
      <div className="flex my-5 items-center justify-between sm:mx-3 md:mx-0">
        <div className="flex font-bold text-base">
          <button className="border border-black px-3 py-4">
            <i className="fa-solid fa-arrow-up-wide-short mr-2"></i>Filter
          </button>
          <div className="mx-3 border border-black p-2">
            <p className="my-1">Sort by</p>
            <select
              name=""
              id=""
              className="font-normal md:text-base sm:text-sm outline-none"
            >
              <option value="#" className="md:text-base sm:text-sm">
                Highest view
              </option>
              <option value="#" className="md:text-base sm:text-sm">
                Most relevant
              </option>
              <option value="#" className="md:text-base sm:text-sm">
                Most rating
              </option>
            </select>
          </div>
        </div>
        <span className="font-bold text-gray-600">10,000 results</span>
      </div>
      <div className="flex">
        <MenuSide/>
        {coursesPaging ? (
          <SearchResultList
            searchData={coursesPaging}
            searchKey={location}
            dataModify={handleChange}
          />
        ) : null}
      </div>
    </div>
  );
};

export default memo(SearchResult);
