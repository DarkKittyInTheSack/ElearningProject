import React from 'react'
import { Rate } from 'antd'
import { Link } from 'react-router-dom'

const CourseOveral = () => {
  return (
    <div className='mx-5 p-5 text-white relative'>
        <div className="flex my-3 items-center font-medium text-purple-400">
            <Link to={''} className='my-2 block text-sm'>Development</Link>
            <i className='fa-solid fa-chevron-right block text-xs text-white mx-2'></i>
            <Link to={''} className='my-2 block text-sm'>Development</Link>
            <i className='fa-solid fa-chevron-right block text-xs text-white mx-2'></i>
            <Link to={''} className='my-2 block text-sm'>Development</Link>
        </div>

        <h2 className='font-bold text-3xl'>The Full Stack Web Development Bootcamp <br /> 2024 - MERN STACK</h2>
        <p className='font-medium text-lg my-2'>fullstack web development  MERN STACK, ChatGPT, nodejs, react, mongodb, <br /> javascript, HTML, CSS, express, API, & more</p>
        
        <div className="flex my-2 items-center">
            <p className='font-semibold text-base text-yellow-500'>4.3</p>
            <Rate allowHalf defaultValue={4.3} className='mx-1 text-sm space-x-0.5'/>
            <span className='font-normal underline text-purple-300 text-sm'> (1,428 ratings) </span>
        </div>

        <p className='font-normal text-sm my-1'>Created by <span className='font-normal underline text-purple-300'>Masynctech Coding School</span>, <span className='font-normal underline text-purple-300'>Pretty Akyeremu Akyeremu</span> </p>
        <p className='font-normal text-sm my-1'>
            <i className='fa-solid fa-triangle-exclamation mr-2'></i>
            Last Updated 1/4/2024
            <i className='fa-solid fa-globe ml-4 mr-2'></i>
            English
            <i className='fa-solid fa-closed-captioning ml-4 mr-2'></i>
            English[CC], Simplify Chinese[Auto]
        </p>
    </div>
  )
}

export default CourseOveral