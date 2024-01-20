import React from 'react'
import './CourseRightColumn.scss'

const CourseRightColumn = () => {
  return (
    <div className='w-1/4 bg-white absolute top-36 right-32 course_right_column'>
        <img src="https://img-b.udemycdn.com/course/240x135/4505104_8592_8.jpg" alt="" className='w-full p-1' width={'240px'} height={'135px'} loading='eager'/>
        <ul className="my-5 font-bold text-3xl px-4 border-b">
            <li>
                <p>đ1,750,000</p>
            </li>
            <li>
                <div className="flex items-center my-2">
                    <button className='text-lg w-full bg-purple-500 border border-purple-500 text-white py-3'>Add to cart</button>
                    <button><i className="fa-regular fa-heart text-lg py-3 px-4 text-center ml-2 border border-black"></i></button>
                </div>
            </li>
            <li>
                <button className='w-full text-lg border border-black py-3'>Buy Now</button>
                <span className='font-normal text-gray-600 text-center w-full block text-sm my-3'>30-Day Money-back guarantee</span>
            </li>
            <li>
                <div className="flex mb-5 items-center text-base underline decoration-blue-500 underline-offset-4 justify-between">
                    <button>Share</button>
                    <button>Gift this course</button>
                    <button>Apply Coupon</button>
                </div>
            </li>
        </ul>
        <div className="my-5 px-4 font-bold text-xl text-black">
            <h2 className=''>Training 5 or more people?</h2>
            <span className='font-normal text-base text-gray-500 leading-3'>Get your team access to 25,000+ top Udemy courses anytime, anywhere.</span>
            <button className='my-2 text-base border border-black w-full py-3'>Try Udemy Business</button>
        </div>
    </div>
  )
}

export default CourseRightColumn