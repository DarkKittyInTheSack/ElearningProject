import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./StartLearning.scss";
import { Link } from "react-router-dom";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "#fff",
        background: "#2d2f31",
        width: "40px",
        height: "40px",
        textAlign: "center",
        fontSize: "20px",
        lineHeight: "35px",
        borderRadius: "50%",
        marginRight: "25px",
        border: "1px solid #fff",
      }}
      onClick={onClick}
    >
      <RightOutlined />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "#fff",
        background: "#2d2f31",
        width: "40px",
        height: "40px",
        textAlign: "center",
        fontSize: "20px",
        lineHeight: "35px",
        borderRadius: "50%",
        border: "1px solid #fff",
        marginLeft: "20px",
        zIndex: "2",
      }}
      onClick={onClick}
    >
      <LeftOutlined />
    </div>
  );
};

const SampleNextArrowResponsive = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "#fff",
        background: "#2d2f31",
        width: "40px",
        height: "40px",
        textAlign: "center",
        fontSize: "20px",
        lineHeight: "35px",
        borderRadius: "50%",
        marginRight: "35px",
        border: "1px solid #fff",
      }}
      onClick={onClick}
    >
      <RightOutlined />
    </div>
  );
};

const SamplePrevArrowResponsive = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "#fff",
        background: "#2d2f31",
        width: "40px",
        height: "40px",
        textAlign: "center",
        fontSize: "20px",
        lineHeight: "35px",
        borderRadius: "50%",
        border: "1px solid #fff",
        marginLeft: "25px",
        zIndex: "2",
      }}
      onClick={onClick}
    >
      <LeftOutlined />
    </div>
  );
};

const StartLearning = ({ courses }) => {
  const setting = {
    infinite: false,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          infinite: false,
          nextArrow: <SampleNextArrowResponsive />,
          prevArrow: <SamplePrevArrowResponsive />,
        },
      },
    ],
  };

  return (
    <div className="my-10">
      <h2 className="font-bold font-serif md:text-4xl sm:text-2xl mb-8 px-5">
        Let's start learning, Username
      </h2>
      <Carousel {...setting} className="my-3 w-full space-x-4">
        <div className="md:flex md:justify-between items-center px-2 py-4 border start_learning_data sm:hidden">
          <img
            width={"96px"}
            height={"96px"}
            src="https://s.udemycdn.com/design-system/expressive-icons/light/1x/clock.png"
            alt="#"
            className="block mr-3 mb-3"
          />
          <div className="mx-3">
            <h4 className="font-bold text-lg mb-3">Schedule time to learn</h4>
            <span className="font-medium text-base mb-3 md:block sm:hidden">
              A little each day adds up. Get <br /> reminders from your
              calendar.
            </span>
            <button className="font-bold text-base text-blue-800">
              Get started
            </button>
          </div>
        </div>
        {courses
          ? courses.map((item) => {
              const { maKhoaHoc, tenKhoaHoc, hinhAnh, danhMucKhoaHoc } = item;
              return (
                <div
                  className="flex items-center border start_learning_data"
                  key={maKhoaHoc}
                >
                  <Link
                    to={`/detail/${maKhoaHoc}`}
                    className="w-28 h-36 block overflow-hidden relative"
                  >
                    <img
                      width={"240px"}
                      height={"135px"}
                      loading="lazy"
                      className="course_image absolute h-full left-2/4 max-w-none top-0 w-auto -translate-x-2/4"
                      src={hinhAnh}
                      alt=""
                    />
                    <span className="flex justify-center items-center absolute top-0 left-0 w-full h-full text-white">
                      <i className="fa-solid fa-circle-play text-3xl"></i>
                    </span>
                  </Link>
                  <div className="mx-4 w-8/12 flex flex-col">
                    <Link to={`/detail/${maKhoaHoc}`}>
                      <p className="font-bold text-sm text-gray-600 my-1 line-clamp-1">
                        {tenKhoaHoc}
                      </p>
                    </Link>

                    <span className="font-bold text-base mb-3">
                      1. {danhMucKhoaHoc.tenDanhMucKhoaHoc}
                    </span>
                    <p className="font-bold text-sm text-gray-500 md:mt-10 sm:mt-9 sm:mb-1">
                      Lecture &#8226; <span className="font-medium">2m</span>
                    </p>
                  </div>
                </div>
              );
            })
          : null}
      </Carousel>

      <div
        className="p-5 my-10 bg-black md:flex text-white md:justify-between items-center sm:grid sm:grid-cols-1"
        id="remind_notification"
      >
        <h2 className="font-medium text-base">
          <span className="font-bold">Training 5 or more people?</span>Get your
          team access to Udemy's top 25,000+ courses
        </h2>
        <div className="md:my-1 sm:my-3">
          <Link
            to={"/business"}
            className="p-2 bg-white text-black border border-white font-medium md:mx-3 sm:mr-3"
          >
            Get Udemy Business
          </Link>
          <button
            className="font-medium p-2 border border-white"
            onClick={() => {
              const notificationPage = document.getElementById(
                "remind_notification"
              );
              notificationPage.style.display = "none";
            }}
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartLearning;
