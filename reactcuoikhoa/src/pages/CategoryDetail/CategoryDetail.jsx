import React from 'react'
import CoursesStarted from './CoursesStarted'
import FeaturedCourses from './FeaturedCourses'
import PopularTopics from './PopularTopics'
import AllCourses from './AllCourses'

const CategoryDetail = () => {
  return (
    <div className='container mx-auto'>
        <h2 className="font-bold font-serif font-sans text-4xl text-black my-10">Development Courses</h2>
        <CoursesStarted/>
        <FeaturedCourses/>
        <PopularTopics/>
        <AllCourses/>
    </div>
  )
}

export default CategoryDetail