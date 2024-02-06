import React from "react";
import { Carousel, Card, Rate } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./TopicRecomended.scss";
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
        marginRight: "10px",
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
        marginLeft: "10px",
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
        marginRight: "17px",
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
        marginLeft: "20px",
        zIndex: "2",
      }}
      onClick={onClick}
    >
      <LeftOutlined />
    </div>
  );
};
const TopicRecomended = ({ category }) => {
  const setting = {
    infinite: false,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    arrows: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 3,
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
    <div className="m-3">
      <h2 className="font-bold text-2xl mb-5 px-2">
        Topics recommended for you
      </h2>

      <Carousel {...setting}>
        {category.map((item) => {
          const { maDanhMuc, tenDanhMuc } = item;
          return (
            <div className="px-1" key={maDanhMuc}>
              <Link
                to={`/category/${maDanhMuc}`}
                className="px-2 py-3 font-bold text-base border block border-black mb-1 w-full text-center hover:bg-gray-100 hover:text-black duration-500"
                key={maDanhMuc}
              >
                {tenDanhMuc}
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TopicRecomended;
