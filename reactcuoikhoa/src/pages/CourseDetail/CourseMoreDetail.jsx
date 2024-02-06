import React from 'react'

const CourseMoreDetail = ({description}) => {

  return (
    <div className='md:w-4/6 sm:w-full'>
        <h2 className='font-bold text-2xl'>Requirements</h2>
        <ul className='font-normal text-base list-disc p-5 space-y-1'>
            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, esse!</p></li>
            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, esse!</p></li>
        </ul>

        <h2 className='font-bold text-2xl'>Description</h2>
        <p className='font-normal text-base leading-6 my-2 '>{description}</p>

        <h2 className='font-bold text-2xl mt-5'>Who's this course for</h2>
        <ul className='font-normal text-base list-disc p-4 space-y-1'>
            <li><p>Lorem ipsum dolor sit amet consectetur</p></li>
            <li><p>Lorem ipsum dolor sit amet consectetur</p></li>
            <li><p>Lorem ipsum dolor sit amet consectetur</p></li>
            <li><p>Lorem ipsum dolor sit amet consectetur</p></li>
        </ul>
    </div>
  )
}

export default CourseMoreDetail