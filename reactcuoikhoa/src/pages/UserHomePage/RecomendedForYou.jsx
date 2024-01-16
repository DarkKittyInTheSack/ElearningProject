import React from 'react'
import { Carousel,Card,Rate } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import './RecomendedForYou.scss'

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

const RecomendedForYou = () => {
    const setting = {
        autoplay: false,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        arrows: true,
        dots:false,
        slidesToShow: 5,
        slidesToScroll: 1,
    }

  return (
    <div className='m-3'>
        <h2 className='font-bold text-2xl mb-5 px-2'>Recomended for you</h2>

        

        <Carousel {...setting} className='mb-10'>
            <Card cover={<img src='https://img-b.udemycdn.com/course/240x135/657932_c7e0_6.jpg' className='rounded-none'/>} className='rounded-none border-none'>
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
                <h3 className='font-bold text-sm line-clamp-2 leading-4'>Unreal Engine 5 C++ Developer: <br />Learn C++ & Make Video Games</h3>
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
                <h3 className='font-bold text-sm line-clamp-2 leading-4'>Unreal Engine 5 C++ Developer: <br />Learn C++ & Make Video Games</h3>
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
                <h3 className='font-bold text-sm line-clamp-2 leading-4'>Unreal Engine 5 C++ Developer: <br />Learn C++ & Make Video Games</h3>
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
                <h3 className='font-bold text-sm line-clamp-2 leading-4'>Unreal Engine 5 C++ Developer: <br />Learn C++ & Make Video Games</h3>
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
                <h3 className='font-bold text-sm line-clamp-2 leading-4'>Unreal Engine 5 C++ Developer: <br />Learn C++ & Make Video Games</h3>
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
        </Carousel>
    </div>
  )
}

export default RecomendedForYou