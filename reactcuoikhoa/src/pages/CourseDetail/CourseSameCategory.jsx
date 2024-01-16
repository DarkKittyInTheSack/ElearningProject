import React from 'react'

const CourseSameCategory = () => {
  return (
    <div className='w-4/6'>
      <h2 className='font-bold text-2xl'>Same Category</h2>
      <ul>
        <li className='border-b border-black py-3'>
          <div className="flex items-center justify-between">
            <div className="flex items-center w-4/6">
              <img src="https://img-b.udemycdn.com/course/50x50/548278_b005_9.jpg" width={'64px'} height={'64px'} loading='lazy' alt="" />
              <div className="mx-3 font-bold text-base leading-6 block">
                <p className='line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ullam.</p>
                <span className='font-normal text-sm my-1'><span className='font-bold text-green-700'>99.5 total hours</span> &#8226; Updated 12/2/2024</span>
              </div>
            </div>
            <ul className="flex items-center font-bold text-base justify-between w-3/6">
              <li>
                <p className='text-yellow-800'>4.5 <i className='fa-solid fa-star text-yellow-600'></i></p>
              </li>
              <li>
                <p className='font-normal text-sm'>40,571 <i className='fa-solid fa-user-group'></i></p>
              </li>
              <li>
                <p>đ1,700,000</p>
              </li>
              <li>
                <button className='text-center'><i className='fa-regular fa-heart p-3 text-base rounded-full border text-center border-black leading-4'></i></button>
              </li>
            </ul>
          </div>
        </li>
        <li className='border-b border-black py-3'>
          <div className="flex items-center justify-between">
            <div className="flex items-center w-4/6">
              <img src="https://img-b.udemycdn.com/course/50x50/548278_b005_9.jpg" width={'64px'} height={'64px'} loading='lazy' alt="" />
              <div className="mx-3 font-bold text-base leading-6 block">
                <p className='line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ullam.</p>
                <span className='font-normal text-sm my-1'><span className='font-bold text-green-700'>99.5 total hours</span> &#8226; Updated 12/2/2024</span>
              </div>
            </div>
            <ul className="flex items-center font-bold text-base justify-between w-3/6">
              <li>
                <p className='text-yellow-800'>4.5 <i className='fa-solid fa-star text-yellow-600'></i></p>
              </li>
              <li>
                <p className='font-normal text-sm'>40,571 <i className='fa-solid fa-user-group'></i></p>
              </li>
              <li>
                <p>đ1,700,000</p>
              </li>
              <li>
                <button className='text-center'><i className='fa-regular fa-heart p-3 text-base rounded-full border text-center border-black leading-4'></i></button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <button className='w-full py-2 text-center font-bold text-base my-3 border border-black'>Show More</button>
    </div>
  )
}

export default CourseSameCategory