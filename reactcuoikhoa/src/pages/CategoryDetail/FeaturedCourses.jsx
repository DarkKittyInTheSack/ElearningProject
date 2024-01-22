import React from 'react'
import { Carousel,Rate } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import './FeaturedCourses.scss'

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

const FeaturedCourses = () => {
    const setting = {
        autoplay: true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        arrows: true,
        dots:false
      };

  return (
    <div>
        <h2 className='font-bold text-2xl'>Featured Courses</h2>
        <Carousel {...setting} >
            <div className='my-5'>
                <div className="mb-10 mt-5 flex p-6 border bg-gray-100 border-gray-200">
                    <img src="https://img-b.udemycdn.com/course/480x270/4505104_8592_8.jpg" alt="" className='block ' />
                    <div className="mx-6">
                        <h2 className='font-bold text-3xl'>The Full Stack Web Development <br /> Bootcamp  2024 - MERN STACK</h2>
                        <p className='font-medium text-base text-black my-1'>fullstack web development  MERN STACK, ChatGPT, nodejs, react,<br /> mongodb, javascript, HTML, CSS, express, API, & more</p>
                        <p className='font-normal text-xs text-gray-700 my-1'>By Masynctech Coding School and 1 other</p>
                        <p className='font-normal text-xs text-gray-700 my-1'>Updated <span className='font-medium text-xs mr-2 text-gray-900'>January 2024</span>89.5 total hours &#8226; 774 lectures &#8226; All Levels</p>
                        <div className="flex my-2 items-center">
                            <p className='font-semibold text-base text-amber-900'>4.3</p>
                            <Rate allowHalf defaultValue={4.3} className='mx-1 text-sm space-x-0.5'/>
                            <span className='font-medium text-xs'>(1,428)</span>
                        </div>
                        <div className="mt-14 flex items-center space-x-2">
                            <span className='font-bold text-xl'>₫279,000</span>
                            <span className='font-medium text-xl line-through text-gray-500'>₫1,799,000</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-5'>
                <div className="mb-10 mt-5 flex p-6 border bg-gray-100 border-gray-200">
                    <img src="https://img-b.udemycdn.com/course/480x270/4505104_8592_8.jpg" alt="" className='block ' />
                    <div className="mx-6">
                        <h2 className='font-bold text-3xl'>The Full Stack Web Development <br /> Bootcamp  2024 - MERN STACK</h2>
                        <p className='font-medium text-base text-black my-1'>fullstack web development  MERN STACK, ChatGPT, nodejs, react,<br /> mongodb, javascript, HTML, CSS, express, API, & more</p>
                        <p className='font-normal text-xs text-gray-700 my-1'>By Masynctech Coding School and 1 other</p>
                        <p className='font-normal text-xs text-gray-700 my-1'>Updated <span className='font-medium text-xs mr-2 text-gray-900'>January 2024</span>89.5 total hours &#8226; 774 lectures &#8226; All Levels</p>
                        <div className="flex my-2 items-center">
                            <p className='font-semibold text-base text-amber-900'>4.3</p>
                            <Rate allowHalf defaultValue={4.3} className='mx-1 text-sm space-x-0.5'/>
                            <span className='font-medium text-xs'>(1,428)</span>
                        </div>
                        <div className="mt-14 flex items-center space-x-2">
                            <span className='font-bold text-xl'>₫279,000</span>
                            <span className='font-medium text-xl line-through text-gray-500'>₫1,799,000</span>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    </div> 
  )
}

export default FeaturedCourses