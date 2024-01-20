import React from 'react'
import { Rate } from 'antd'

const SearchResultList = () => {
  return (
    <div className='my-3 mx-4 w-full'>
        <ul>
            <li className='mb-4'>
                <div className="flex justify-between items-center border-b pb-4">
                    <img src="https://img-c.udemycdn.com/course/240x135/2473048_8255_5.jpg" className='block' alt="" loading='lazy' width={'260px'} height={'145px'} />
                    <div className="mx-3 font-bold text-lg w-2/3">
                        <h2 className='mb-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
                        <span className='font-normal text-base line-clamp-2 leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum provident optio asperiores fugit et neque.</span>
                        <p className='font-normal text-sm text-gray-500'>Dr lorem</p>
                        <div className="flex items-center">
                            <p className='font-semibold text-base text-amber-900'>4.3</p>
                            <Rate allowHalf defaultValue={4.3} className='mx-1 text-sm space-x-0.5'/>
                            <span className='font-medium text-sm'>(1,428)</span>
                        </div>
                        <p className='font-normal text-sm text-gray-500'>22 total hours &#8226; 156 lectures &#8226; All level</p>
                    </div>
                    <p className='font-bold text-lg'>đ1,960,000</p>
                </div>
            </li>
            <li className='mb-4'>
                <div className="flex justify-between items-center border-b pb-4">
                    <img src="https://img-c.udemycdn.com/course/240x135/2473048_8255_5.jpg" className='block' alt="" loading='lazy' width={'260px'} height={'145px'} />
                    <div className="mx-3 font-bold text-lg w-2/3">
                        <h2 className='mb-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
                        <span className='font-normal text-base line-clamp-2 leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum provident optio asperiores fugit et neque.</span>
                        <p className='font-normal text-sm text-gray-500'>Dr lorem</p>
                        <div className="flex items-center">
                            <p className='font-semibold text-base text-amber-900'>4.3</p>
                            <Rate allowHalf defaultValue={4.3} className='mx-1 text-sm space-x-0.5'/>
                            <span className='font-medium text-sm'>(1,428)</span>
                        </div>
                        <p className='font-normal text-sm text-gray-500'>22 total hours &#8226; 156 lectures &#8226; All level</p>
                    </div>
                    <p className='font-bold text-lg'>đ1,960,000</p>
                </div>
            </li>
        </ul>
        <div className="my-2 font-bold text-lg">
            <h2>Related search <i className='fa-solid fa-circle-exclamation text-base ms-2'></i></h2>
            <ul className="flex items-center text-base text-white my-1 space-x-3">
                <li className='px-4 py-2 bg-black rounded-full'>
                    <p className='m-0 p-0 leading-6'>python for beginner</p>
                </li>
                <li className='px-4 py-2 bg-black rounded-full'>
                    <p className='m-0 p-0 leading-6'>python for beginner</p>
                </li>
                <li className='px-4 py-2 bg-black rounded-full'>
                    <p className='m-0 p-0 leading-6'>python for beginner</p>
                </li>
                <li className='px-4 py-2 bg-black rounded-full'>
                    <p className='m-0 p-0 leading-6'>python for beginner</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SearchResultList