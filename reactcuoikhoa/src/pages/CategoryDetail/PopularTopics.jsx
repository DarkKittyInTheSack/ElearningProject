import React from 'react'
import { Carousel,Card,Rate } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import './PopularTopics.scss'

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

const PopularTopics = () => {

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
    <div className='mb-5'>
        <h2 className='font-bold text-2xl'>Popular Topics</h2>

        <Carousel {...setting} className='my-4'>
            <div className="px-1">
                <button className='px-2 py-3 font-bold text-base border block border-black mb-1 w-full'>Python</button>
                <button className='px-2 py-3 font-bold text-base border block border-black mb-1 w-full'>Unreal Engine</button>
            </div>
            <div className="px-1">
                <button className='px-2 py-3 font-bold text-base border block border-black mb-1 w-full'>Data Science</button>
                <button className='px-2 py-3 font-bold text-base border block border-black mb-1 w-full'>Unreal Engine Blueprint</button>
            </div>
            <div className="px-1">
                <button className='px-2 py-3 font-bold text-base border block border-black mb-1 w-full'>Machine Learning</button>
                <button className='px-2 py-3 font-bold text-base border block border-black mb-1 w-full'>Game Development</button>
            </div>
            <div className="px-1">
                <button className='px-2 py-3 font-bold text-base border block border-black mb-1 w-full'>Flask</button>
                <button className='px-2 py-3 font-bold text-base border block border-black mb-1 w-full'>3D Game Development</button>
            </div>
            <div className="px-1">
                <button className='px-2 py-3 font-bold text-base border block border-black mb-1 w-full'>Web Scraping</button>
                <button className='px-2 py-3 font-bold text-base border block border-black mb-1 w-full'>Game Design</button>
            </div>
            <div className="px-1">
                <button className='px-2 py-3 font-bold text-base border block border-black mb-1 w-full'>Programming Fundamental</button>
                <button className='px-2 py-3 font-bold text-base border block border-black mb-1 w-full'>C++</button>
            </div>
        </Carousel>
    </div>
  )
}

export default PopularTopics