import React from 'react'
import { Carousel,Card,Rate } from 'antd'

const PublicProfileView = () => {
  return (
    <div className='bg-slate-700'>
        <div className="font-sans font-serif font-bold text-5xl container mx-auto">
            <p className='text-white py-10'>Username</p>
        </div>
        <div className="bg-white">
            <div className="font-bold text-5xl container mx-auto">
                <p className='text-white px-8 py-10 bg-black inline-block my-5 rounded-full'>US</p>
            </div>
        </div>
        <div className="bg-gray-100 py-5">
            <div className="container mx-auto">
                <h2 className='font-bold text-lg text-center'>Course You're enroled in</h2>
                <div className="grid grid-cols-4 items-center my-6">
                    <Card cover={<img src='https://img-b.udemycdn.com/course/240x135/657932_c7e0_6.jpg'/>} className='rounded-none border-none bg-transparent'>
                        <h3 className='font-bold text-sm line-clamp-2 leading-4'>Unreal Engine 5 C++ Developer: <br />Learn C++ & Make Video Games</h3>
                        <span className='font-normal text-xs mb-1'>Ben Tristem, GameDev.tv Team</span>
                        <div className="flex items-center">
                            <p className='font-semibold text-base text-amber-900'>4.3</p>
                            <Rate allowHalf defaultValue={4.3} className='mx-1 text-sm space-x-0.5'/>
                            <span className='font-medium text-xs'>(1,428)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className='font-bold text-base'>₫279,000</span>
                        </div>
                    </Card>
                    <Card cover={<img src='https://img-b.udemycdn.com/course/240x135/657932_c7e0_6.jpg'/>} className='rounded-none border-none bg-transparent'>
                        <h3 className='font-bold text-sm line-clamp-2 leading-4'>Unreal Engine 5 C++ Developer: <br />Learn C++ & Make Video Games</h3>
                        <span className='font-normal text-xs mb-1'>Ben Tristem, GameDev.tv Team</span>
                        <div className="flex items-center">
                            <p className='font-semibold text-base text-amber-900'>4.3</p>
                            <Rate allowHalf defaultValue={4.3} className='mx-1 text-sm space-x-0.5'/>
                            <span className='font-medium text-xs'>(1,428)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className='font-bold text-base'>₫279,000</span>
                        </div>
                    </Card>
                    <Card cover={<img src='https://img-b.udemycdn.com/course/240x135/657932_c7e0_6.jpg'/>} className='rounded-none border-none bg-transparent'>
                        <h3 className='font-bold text-sm line-clamp-2 leading-4'>Unreal Engine 5 C++ Developer: <br />Learn C++ & Make Video Games</h3>
                        <span className='font-normal text-xs mb-1'>Ben Tristem, GameDev.tv Team</span>
                        <div className="flex items-center">
                            <p className='font-semibold text-base text-amber-900'>4.3</p>
                            <Rate allowHalf defaultValue={4.3} className='mx-1 text-sm space-x-0.5'/>
                            <span className='font-medium text-xs'>(1,428)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className='font-bold text-base'>₫279,000</span>
                        </div>
                    </Card>
                    <Card cover={<img src='https://img-b.udemycdn.com/course/240x135/657932_c7e0_6.jpg'/>} className='rounded-none border-none bg-transparent'>
                        <h3 className='font-bold text-sm line-clamp-2 leading-4'>Unreal Engine 5 C++ Developer: <br />Learn C++ & Make Video Games</h3>
                        <span className='font-normal text-xs mb-1'>Ben Tristem, GameDev.tv Team</span>
                        <div className="flex items-center">
                            <p className='font-semibold text-base text-amber-900'>4.3</p>
                            <Rate allowHalf defaultValue={4.3} className='mx-1 text-sm space-x-0.5'/>
                            <span className='font-medium text-xs'>(1,428)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className='font-bold text-base'>₫279,000</span>
                        </div>
                    </Card>
                    <Card cover={<img src='https://img-b.udemycdn.com/course/240x135/657932_c7e0_6.jpg'/>} className='rounded-none border-none bg-transparent'>
                        <h3 className='font-bold text-sm line-clamp-2 leading-4'>Unreal Engine 5 C++ Developer: <br />Learn C++ & Make Video Games</h3>
                        <span className='font-normal text-xs mb-1'>Ben Tristem, GameDev.tv Team</span>
                        <div className="flex items-center">
                            <p className='font-semibold text-base text-amber-900'>4.3</p>
                            <Rate allowHalf defaultValue={4.3} className='mx-1 text-sm space-x-0.5'/>
                            <span className='font-medium text-xs'>(1,428)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className='font-bold text-base'>₫279,000</span>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PublicProfileView