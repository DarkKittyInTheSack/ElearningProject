import React from 'react'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import './StartLearning.scss'


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
          marginRight: '25px',
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
          marginLeft: '20px',
          zIndex: '2'
        }}
        onClick={onClick}
      >
        <LeftOutlined />
      </div>
    )
  }


const StartLearning = () => {
    const setting = {
        autoplay: false,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        arrows: true,
        dots:false,
        slidesToShow: 3,
        slidesToScroll: 1,
    }

  return (
    <div className='my-10'>
        <h2 className='font-bold font-serif text-4xl mb-8 px-5'>Let's start learning, Username</h2>
        <Carousel {...setting} className='my-3 w-full space-x-4'>
            <div className="flex justify-between items-center px-2 py-4 border start_learning_data">
                <img width={'96px'} height={'96px'} src="https://s.udemycdn.com/design-system/expressive-icons/light/1x/clock.png" alt="#" className='block mr-3 mb-3'/>
                <div className="mx-3">
                    <h4 className='font-bold text-lg mb-3'>Schedule time to learn</h4>
                    <span className='font-medium text-base mb-3'>A little each day adds up. Get <br /> reminders from your calendar.</span>
                    <button className='font-bold text-base text-blue-800'>Get started</button>
                </div>
            </div>
            <div className="flex items-center border start_learning_data">
                <div className='w-28 h-36 block overflow-hidden relative'>
                    <img width={'240px'} height={'135px'} loading='lazy'
                    className='course_image absolute h-full left-2/4 max-w-none top-0 w-auto -translate-x-2/4' src="https://mp4-b.udemycdn.com/2019-02-16_11-31-09-b6ac7981e2a132eda222dd95ffe8a3fc/thumb-1.jpg?secure=U79MW01Uw6LQdJ1Ed5UZoQ%3D%3D%2C1705063406" alt="" />
                    <span className='flex justify-center items-center absolute top-0 left-0 w-full h-full text-white'>
                        <i className='fa-solid fa-circle-play text-3xl'></i>
                    </span>
                </div>
                <div className="mx-4 w-8/12 flex flex-col">
                    <p className='font-bold text-sm text-gray-600 my-1 line-clamp-1'>NodeJS API development for beginners</p>
                    <span className='font-bold text-base mb-3'>1. What's NodeJS</span>
                    <p className='font-bold text-sm text-gray-500 mt-10'>Lecture &#8226; <span className='font-medium'>2m</span></p>
                </div>
            </div>
            <div className="flex items-center border start_learning_data">
                <div className='w-28 h-36 block overflow-hidden relative'>
                    <img width={'240px'} height={'135px'} loading='lazy'
                    className='course_image absolute h-full left-2/4 max-w-none top-0 w-auto -translate-x-2/4' src="https://mp4-b.udemycdn.com/2021-04-16_11-26-46-ffc36ba144069eb804a9e8ea9d531097/1/thumb-1.jpg?secure=qG3vMIwlToGHGyA5UjUgwQ%3D%3D%2C1705063406" alt="" />
                    <span className='flex justify-center items-center absolute top-0 left-0 w-full h-full text-white'>
                        <i className='fa-solid fa-circle-play text-3xl'></i>
                    </span>
                </div>
                <div className="mx-4 w-8/12 flex flex-col">
                    <p className='font-bold text-sm text-gray-600 my-1 line-clamp-1'>HTML 5,Python,Flask Framework All In One Complete Course</p>
                    <span className='font-bold text-base mb-3 uppercase'>1. Introduction to html</span>
                    <p className='font-bold text-sm text-gray-500 mt-10'>Lecture &#8226; <span className='font-medium'>10m</span></p>
                </div>
            </div>
            <div className="flex items-center border start_learning_data">
                <div className='w-28 h-36 block overflow-hidden relative'>
                    <img width={'240px'} height={'135px'} loading='lazy'
                    className='course_image absolute h-full left-2/4 max-w-none top-0 w-auto -translate-x-2/4' src="https://mp4-b.udemycdn.com/2018-09-10_01-18-36-aa9d00352bc10db6eb9ace8d87315fab/thumb-1.jpg?secure=b7-JMjzD-fPG4lVnTmiXjg%3D%3D%2C1705063406" alt="" />
                    <span className='flex justify-center items-center absolute top-0 left-0 w-full h-full text-white'>
                        <i className='fa-solid fa-circle-play text-3xl'></i>
                    </span>
                </div>
                <div className="mx-4 w-8/12 flex flex-col">
                    <p className='font-bold text-sm text-gray-600 my-1 line-clamp-1'>Git: Become an Expert in Git & GitHub in 4 Hours</p>
                    <span className='font-bold text-base mb-3'>6. Section Introduction</span>
                    <p className='font-bold text-sm text-gray-500 mt-10'>Lecture &#8226; <span className='font-medium'>2m</span></p>
                </div>
            </div>
            <div className="flex items-center border start_learning_data">
                <div className='w-28 h-36 block overflow-hidden relative'>
                    <img width={'240px'} height={'135px'} loading='lazy'
                    className='course_image absolute h-full left-2/4 max-w-none top-0 w-auto -translate-x-2/4' src="https://mp4-b.udemycdn.com/2015-08-26_22-07-30-793eb6326dd7241eaa6b01671ade69f5/thumb-1.jpg?secure=dkkJIFbWV9wuBINKZVa-rg%3D%3D%2C1705063407" alt="" />
                    <span className='flex justify-center items-center absolute top-0 left-0 w-full h-full text-white'>
                        <i className='fa-solid fa-circle-play text-3xl'></i>
                    </span>
                </div>
                <div className="mx-4 w-8/12 flex flex-col">
                    <p className='font-bold text-sm text-gray-600 my-1 line-clamp-1'>HTML5 and CSS3 Fundamentals</p>
                    <span className='font-bold text-base mb-3'>1. Introduction</span>
                    <p className='font-bold text-sm text-gray-500 mt-10'>Lecture &#8226; <span className='font-medium'>2m</span></p>
                </div>
            </div>
            <div className="flex items-center border start_learning_data">
                <div className='w-28 h-36 block overflow-hidden relative'>
                    <img width={'240px'} height={'135px'} loading='lazy'
                    className='course_image absolute h-full left-2/4 max-w-none top-0 w-auto -translate-x-2/4' src="https://mp4-b.udemycdn.com/2016-01-21_11-31-53-818500383ff5cd8b626d0ee71deebffb/thumb-1.jpg?secure=63gw4N-WyqbcQQN9-6bKLg%3D%3D%2C1705063407" alt="" />
                    <span className='flex justify-center items-center absolute top-0 left-0 w-full h-full text-white'>
                        <i className='fa-solid fa-circle-play text-3xl'></i>
                    </span>
                </div>
                <div className="mx-4 w-8/12 flex flex-col">
                    <p className='font-bold text-sm text-gray-600 my-1 line-clamp-1'>Javascript Essentials</p>
                    <span className='font-bold text-base mb-3'>1. Introduction</span>
                    <p className='font-bold text-sm text-gray-500 mt-10'>Lecture &#8226; <span className='font-medium'>2m</span></p>
                </div>
            </div>
            <div className="flex items-center border start_learning_data">
                <div className='w-28 h-36 block overflow-hidden relative'>
                    <img width={'240px'} height={'135px'} loading='lazy'
                    className='course_image absolute h-full left-2/4 max-w-none top-0 w-auto -translate-x-2/4' src="https://mp4-b.udemycdn.com/2015-04-03_22-01-25-d5765e21ecd303c590e296fbfabfd062/2/thumb_0001.png?secure=vImdeanCF9dKnDC3evZqKw%3D%3D%2C1705063407" alt="" />
                    <span className='flex justify-center items-center absolute top-0 left-0 w-full h-full text-white'>
                        <i className='fa-solid fa-circle-play text-3xl'></i>
                    </span>
                </div>
                <div className="mx-4 w-8/12 flex flex-col">
                    <p className='font-bold text-sm text-gray-600 my-1 line-clamp-1'>Code Your First Game: Arcade Classic in JavaScript on Canvas</p>
                    <span className='font-bold text-base mb-3 '>1. Introduction and First Code File</span>
                    <p className='font-bold text-sm text-gray-500 mt-10'>Lecture &#8226; <span className='font-medium'>14m</span></p>
                </div>
            </div>
            <div className="flex items-center border start_learning_data">
                <div className='w-28 h-36 block overflow-hidden relative'>
                    <img width={'240px'} height={'135px'} loading='lazy'
                    className='course_image absolute h-full left-2/4 max-w-none top-0 w-auto -translate-x-2/4' src="https://mp4-b.udemycdn.com/2020-02-29_22-57-36-1e967971f5c8aec3668b5dfd303a91aa/thumb-1.jpg?secure=j7v59PWp7kUlnPmfqI4N_A%3D%3D%2C1705063407" alt="" />
                    <span className='flex justify-center items-center absolute top-0 left-0 w-full h-full text-white'>
                        <i className='fa-solid fa-circle-play text-3xl'></i>
                    </span>
                </div>
                <div className="mx-4 w-8/12 flex flex-col">
                    <p className='font-bold text-sm text-gray-600 my-1 line-clamp-1'>Python OOP : Object Oriented Programming in Python</p>
                    <span className='font-bold text-base mb-3 line-clamp-1'>1. Introduction to Object Oriented Python</span>
                    <p className='font-bold text-sm text-gray-500 mt-10'>Lecture &#8226; <span className='font-medium'>6m</span></p>
                </div>
            </div>
        </Carousel>

        <div className="p-5 my-10 bg-black flex text-white justify-between items-center">
            <h2 className='font-medium text-base'><span className='font-bold'>Training 5 or more people?</span>Get your team access to Udemy's top 25,000+ courses</h2>
            <div className='my-1'>
                <button className='p-2 bg-white text-black font-medium mx-3'>Get Udemy Business</button>
                <button className='font-medium p-2 border border-white'>Dismiss</button>
            </div>
        </div>
    </div>
        
  )
}

export default StartLearning