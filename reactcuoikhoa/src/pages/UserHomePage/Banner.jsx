import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import "./Banner.scss";

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
        marginRight: "70px",
        borderRadius: "50%",
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
        marginLeft: "70px",
        zIndex: "2",
      }}
      onClick={onClick}
    >
      <LeftOutlined />
    </div>
  );
};

const Banner = () => {
  const setting = {
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    arrows: true,
    dots: false,
  };
  return (
    <div>
      <Carousel {...setting}>
        <div className="flex px-5 items-center">
          <div className="absolute px-5 py-3 md:translate-x-24 sm:translate-x-20 md:top-14 sm:top-7 bg-white z-10 banner_item">
            <h2 className="font-serif font-bold md:text-4xl sm:text-2xl md:my-3 sm:my-1">
              Our New Year's Sale <br className="md:block sm:hidden" /> ends
              today
            </h2>
            <span className="font-medium md:text-base sm:text-sm block md:mb-4 sm:mb-1">
              GenAI is the #1 surging skill for 2024. Are you ready?
              <br />
              Learn the latest skills from ₫199,000 to set yourself up
              <br />
              for success.
            </span>
          </div>
          <img
            width={"1340px"}
            height={"400px"}
            src="https://img-b.udemycdn.com/notices/web_carousel_slide/image/18cffdcf-25e9-43e1-92bc-13a7a9b461a3.jpg"
            alt="#"
            className="relative"
          />
        </div>
        <div className="flex px-5 items-center">
          <div className="absolute px-5 py-3 md:translate-x-24 sm:translate-x-20 md:top-14 sm:top-7 bg-white z-10 banner_item">
            <h2 className="font-serif font-bold md:text-4xl sm:text-2xl md:my-3 sm:my-1">
              Prep for your IT <br className="md:block sm:hidden" />
              certificate
            </h2>
            <span className="font-medium md:text-base sm:text-sm block md:mb-4 sm:mb-1">
              <u className="text-blue-700">Explore a future in IT</u>. Start
              learning toward AWS
              <br /> certification, CompTIA A+ certification, and more.
            </span>
          </div>
          <img
            width={"1340px"}
            height={"400px"}
            src="https://img-b.udemycdn.com/notices/featured_carousel_slide/image/34c63aef-8d1f-483e-b0ea-0ead94879e56.jpg"
            alt=""
          />
        </div>
        <div className="flex px-5 items-center">
          <div className="absolute px-5 py-3 md:translate-x-24 sm:translate-x-20 md:top-14 sm:top-7 bg-white z-10 banner_item">
            <h2 className="font-serif font-bold md:text-4xl sm:text-2xl md:my-3 sm:my-1">
              Slow and steady
            </h2>
            <span className="font-medium md:text-base sm:text-sm block md:mb-4 sm:mb-1">
              Try learning just 5-10 minutes a day.
              <u className="text-blue-700">
                Continue your <br className="md:block sm:hidden"/> course
              </u>{" "}
              and reach your peak potential.
            </span>
          </div>
          <img
            width={"1340px"}
            height={"400px"}
            src="https://img-b.udemycdn.com/notices/featured_carousel_slide/image/9ea59bc2-bd61-463e-9ce9-7e71e8e586ae.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
