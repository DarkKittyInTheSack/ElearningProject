import React from "react";
import { Rate } from 'antd';

const CourseRating = () => {
  return (
    <div className="md:w-4/6 sm:w-full">
      <h2 className="font-bold text-2xl my-5">
        <i className="fa-solid fa-star text-yellow-800 mr-3"></i>4.3 course
        ratting &#8226; 1K ratings
      </h2>

      <form action="#" className="space-y-2 mb-3">
        <div className="mb-3 space-y-1">
          <label htmlFor="comment" className="font-bold text-lg">
            Comment
          </label>
          <textarea
            className="font-normal text-base w-full comment px-3 py-1 border border-black rounded outline-none"
            name="comment"
            id="comment"
            rows={4}
            placeholder="Write your comment here"
          ></textarea>
        </div>

        <div className="mb-3 space-y-1">
          <label htmlFor="rate" className="font-bold text-lg">
            Rate
          </label>

          <Rate className="mx-2 rate" id="rate"/>
          
        </div>

        <button className="bg-purple-500 font-bold text-white px-3 py-2 mb-3 rounded">Submit your comment</button>
      </form>

      <div className="grid grid-cols-2 gap-5 items-center mb-5">
        <ul>
          <li className="border-t">
            <div className="flex items-center justify-between py-5">
              <div className="flex items-center">
                <img
                  src="https://img-b.udemycdn.com/course/50x50/548278_b005_9.jpg"
                  className="w-1/5 rounded-full mr-3"
                  alt=""
                  width={"4.8rem"}
                  height={"4.8rem"}
                />
                <div className="mx-2 font-bold text-base w-full">
                  <p className="line-clamp-1">Andrea C</p>
                  <div className="space-x-1 text-xs text-yellow-600">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <span className="font-medium text-sm text-gray-600">
                      {" "}
                      a month ago
                    </span>
                  </div>
                </div>
              </div>
              <button>
                <i className="fa-solid fa-ellipsis-vertical text-lg mx-3"></i>
              </button>
            </div>
          </li>
          <li>
            <p className="font-normal text-base leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem placeat deleniti numquam ex impedit harum, consequuntur
              amet! Corporis, perspiciatis ducimus!
            </p>
          </li>
          <li>
            <div className="flex items-center">
              <p className="font-normal text-sm text-gray-500">Helpful?</p>
              <div className="mx-3 space-x-2">
                <button className="p-2 text-base">
                  <i className="fa-regular fa-thumbs-up"></i>
                </button>
                <button className="p-2 text-base">
                  <i className="fa-regular fa-thumbs-down"></i>
                </button>
              </div>
            </div>
          </li>
        </ul>

        <ul>
          <li className="border-t">
            <div className="flex items-center justify-between py-5">
              <div className="flex items-center">
                <img
                  src="https://img-b.udemycdn.com/course/50x50/548278_b005_9.jpg"
                  className="w-1/5 rounded-full mr-3"
                  alt=""
                  width={"4.8rem"}
                  height={"4.8rem"}
                />
                <div className="mx-2 font-bold text-base w-full">
                  <p className="line-clamp-1">Andrea C</p>
                  <div className="space-x-1 text-xs text-yellow-600">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <span className="font-medium text-sm text-gray-600">
                      {" "}
                      a month ago
                    </span>
                  </div>
                </div>
              </div>
              <button>
                <i className="fa-solid fa-ellipsis-vertical text-lg mx-3"></i>
              </button>
            </div>
          </li>
          <li>
            <p className="font-normal text-base leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem placeat deleniti numquam ex impedit harum, consequuntur
              amet! Corporis, perspiciatis ducimus!
            </p>
          </li>
          <li>
            <div className="flex items-center">
              <p className="font-normal text-sm text-gray-500">Helpful?</p>
              <div className="mx-3 space-x-2">
                <button className="p-2 text-base">
                  <i className="fa-regular fa-thumbs-up"></i>
                </button>
                <button className="p-2 text-base">
                  <i className="fa-regular fa-thumbs-down"></i>
                </button>
              </div>
            </div>
          </li>
        </ul>

        <ul>
          <li className="border-t">
            <div className="flex items-center justify-between py-5">
              <div className="flex items-center">
                <img
                  src="https://img-b.udemycdn.com/course/50x50/548278_b005_9.jpg"
                  className="w-1/5 rounded-full mr-3"
                  alt=""
                  width={"4.8rem"}
                  height={"4.8rem"}
                />
                <div className="mx-2 font-bold text-base w-full">
                  <p className="line-clamp-1">Andrea C</p>
                  <div className="space-x-1 text-xs text-yellow-600">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <span className="font-medium text-sm text-gray-600">
                      {" "}
                      a month ago
                    </span>
                  </div>
                </div>
              </div>
              <button>
                <i className="fa-solid fa-ellipsis-vertical text-lg mx-3"></i>
              </button>
            </div>
          </li>
          <li>
            <p className="font-normal text-base leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem placeat deleniti numquam ex impedit harum, consequuntur
              amet! Corporis, perspiciatis ducimus!
            </p>
          </li>
          <li>
            <div className="flex items-center">
              <p className="font-normal text-sm text-gray-500">Helpful?</p>
              <div className="mx-3 space-x-2">
                <button className="p-2 text-base">
                  <i className="fa-regular fa-thumbs-up"></i>
                </button>
                <button className="p-2 text-base">
                  <i className="fa-regular fa-thumbs-down"></i>
                </button>
              </div>
            </div>
          </li>
        </ul>

        <ul>
          <li className="border-t">
            <div className="flex items-center justify-between py-5">
              <div className="flex items-center">
                <img
                  src="https://img-b.udemycdn.com/course/50x50/548278_b005_9.jpg"
                  className="w-1/5 rounded-full mr-3"
                  alt=""
                  width={"4.8rem"}
                  height={"4.8rem"}
                />
                <div className="mx-2 font-bold text-base w-full">
                  <p className="line-clamp-1">Andrea C</p>
                  <div className="space-x-1 text-xs text-yellow-600">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <span className="font-medium text-sm text-gray-600">
                      {" "}
                      a month ago
                    </span>
                  </div>
                </div>
              </div>
              <button>
                <i className="fa-solid fa-ellipsis-vertical text-lg mx-3"></i>
              </button>
            </div>
          </li>
          <li>
            <p className="font-normal text-base leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem placeat deleniti numquam ex impedit harum, consequuntur
              amet! Corporis, perspiciatis ducimus!
            </p>
          </li>
          <li>
            <div className="flex items-center">
              <p className="font-normal text-sm text-gray-500">Helpful?</p>
              <div className="mx-3 space-x-2">
                <button className="p-2 text-base">
                  <i className="fa-regular fa-thumbs-up"></i>
                </button>
                <button className="p-2 text-base">
                  <i className="fa-regular fa-thumbs-down"></i>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseRating;
