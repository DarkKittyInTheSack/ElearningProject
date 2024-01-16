import React from 'react'
import {Card,Rate} from 'antd'

const RelativeCourse = () => {
  return (
    <div className='w-4/6'>
        <h2 className='font-bold text-2xl mt-8'>More course you may know</h2>
        <div className="grid grid-cols-3 my-3">
            
            <Card cover={<img src='https://img-b.udemycdn.com/course/240x135/657932_c7e0_6.jpg'/>} className='rounded-none border-none'>
                <h3 className='font-bold text-sm line-clamp-2 leading-4'>Unreal Engine 5 C++ Developer:<br />Learn C++ & Make Video Games</h3>
                <span className='font-normal text-xs mb-1'>Ben Tristem, GameDev.tv Team</span>
                <div className="flex items-center">
                    <p className='font-semibold text-base text-amber-900'>4.3</p>
                    <Rate allowHalf defaultValue={4.3} className='mx-1 text-sm space-x-0.5'/>
                    <span className='font-medium text-xs'>(1,428)</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className='font-bold text-base'>₫279,000</span>
                    <span className='font-medium text-base line-through text-gray-500'>₫1,799,000</span>
                </div>
                <span className='py-1 px-2 bg-yellow-200 font-bold text-sm my-2 inline-block'>Bestseller</span>
            </Card>

            <Card cover={<img src='https://img-b.udemycdn.com/course/240x135/657932_c7e0_6.jpg'/>} className='rounded-none border-none'>
                <h3 className='font-bold text-sm line-clamp-2 leading-4'>Unreal Engine 5 C++ Developer:<br />Learn C++ & Make Video Games</h3>
                <span className='font-normal text-xs mb-1'>Ben Tristem, GameDev.tv Team</span>
                <div className="flex items-center">
                    <p className='font-semibold text-base text-amber-900'>4.3</p>
                    <Rate allowHalf defaultValue={4.3} className='mx-1 text-sm space-x-0.5'/>
                    <span className='font-medium text-xs'>(1,428)</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className='font-bold text-base'>₫279,000</span>
                    <span className='font-medium text-base line-through text-gray-500'>₫1,799,000</span>
                </div>
                <span className='py-1 px-2 bg-yellow-200 font-bold text-sm my-2 inline-block'>Bestseller</span>
            </Card>

            <Card cover={<img src='https://img-b.udemycdn.com/course/240x135/657932_c7e0_6.jpg'/>} className='rounded-none border-none'>
                <h3 className='font-bold text-sm line-clamp-2 leading-4'>Unreal Engine 5 C++ Developer:<br />Learn C++ & Make Video Games</h3>
                <span className='font-normal text-xs mb-1'>Ben Tristem, GameDev.tv Team</span>
                <div className="flex items-center">
                    <p className='font-semibold text-base text-amber-900'>4.3</p>
                    <Rate allowHalf defaultValue={4.3} className='mx-1 text-sm space-x-0.5'/>
                    <span className='font-medium text-xs'>(1,428)</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className='font-bold text-base'>₫279,000</span>
                    <span className='font-medium text-base line-through text-gray-500'>₫1,799,000</span>
                </div>
                <span className='py-1 px-2 bg-yellow-200 font-bold text-sm my-2 inline-block'>Bestseller</span>
            </Card>

        </div>
        
    </div>
  )
}

export default RelativeCourse