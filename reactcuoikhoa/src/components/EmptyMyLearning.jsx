import React from 'react'
import { Link } from 'react-router-dom'

const EmptyMyLearning = () => {
  return (
    <div className='container font-bold text-lg mx-auto text-center py-10'>
        <p className='py-3'>Organize and access your courses faster !</p>
        <span className='font-normal text-base'><Link to={''} className='font-bold underline underline-offset-1 text-purple-500'>Go to the all courses tabs</Link> to create a list !</span>
    </div>
  )
}

export default EmptyMyLearning