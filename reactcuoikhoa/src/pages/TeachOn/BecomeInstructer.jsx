import React from 'react'
import { Link } from 'react-router-dom'

const BecomeInstructer = () => {
  return (
    <div className='bg-gray-200 py-10'>
        <div className="container mx-auto font-bold text-center">
            <h2 className='font-sans mt-5 font-serif text-4xl'>Become an instructor today</h2>
            <span className='my-5 block text-xl font-normal'>Join one of the world's largest online learning <br /> marketplaces.</span>
            <Link to={'newCourses'} className=' inline-block w-1/4 bg-black py-3 text-white'>Get Started</Link>
        </div>
    </div>
  )
}

export default BecomeInstructer