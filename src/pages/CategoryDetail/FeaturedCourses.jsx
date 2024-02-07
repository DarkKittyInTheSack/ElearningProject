import React from 'react'
import { Carousel,Rate } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import './FeaturedCourses.scss'
import { Link } from 'react-router-dom'

const SampleNextArrow = props => {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          color: '#fff',
          background: '#2d2f31',
          width: '40px',
          height: '40px',
          textAlign: 'center',
          fontSize: '20px',
          lineHeight: '35px',
          borderRadius: '50%',
          marginRight: '10px',
          border: '1px solid #fff'
        }}
        onClick={onClick}
      >
        <RightOutlined />
      </div>
    )
}
  
const SamplePrevArrow = props => {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          color: '#fff',
          background: '#2d2f31',
          width: '40px',
          height: '40px',
          textAlign: 'center',
          fontSize: '20px',
          lineHeight: '35px',
          borderRadius: '50%',
          border: '1px solid #fff',
          marginLeft: '10px',
          zIndex: '2'
        }}
        onClick={onClick}
      >
        <LeftOutlined />
      </div>
    )
}

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
          marginLeft: "30px",
          zIndex: "2",
        }}
        onClick={onClick}
      >
        <LeftOutlined />
      </div>
    );
};

const FeaturedCourses = ({courses}) => {
    const setting = {
        autoplay: true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        arrows: true,
        dots:false,
        responsive: [
          {
            breakpoint: 651,
            settings: {
              slidesToShow: 1,
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
    <div className='m-5'>
        <h2 className='font-bold text-2xl'>Featured Courses</h2>
        <Carousel {...setting} >
          {
            courses ? (
              courses.map((item) =>{
                const {maKhoaHoc,tenKhoaHoc, hinhAnh,luotXem, nguoiTao, moTa,ngayTao,danhMucKhoaHoc} = item
                const categoryCoursesCode = maKhoaHoc + 'categoryCoursesCode'
                return <div className='my-5' key={categoryCoursesCode}>
                <div className="mb-10 mt-5 flex p-6 border bg-gray-100 border-gray-200">
                  <Link to={`/detail/${maKhoaHoc}`} className='img_recomend_course' style={{
                    backgroundImage: `url(${hinhAnh})`
                  }}>
                    {/* <img src= {hinhAnh} alt="" className='block w-full' /> */}
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
              <div className="mt-10 flex items-center space-x-2">
                <span className="font-bold text-xl">₫279,000</span>
                <span className="font-medium text-xl line-through text-gray-500">
                  ₫1,799,000
                </span>
              </div>
            </div>
                </div>
            </div>
              })
            ) : null
          }
        </Carousel>
    </div> 
  )
}

export default FeaturedCourses