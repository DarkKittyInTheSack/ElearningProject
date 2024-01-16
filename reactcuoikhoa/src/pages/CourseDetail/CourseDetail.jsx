import React from 'react'
import CourseOveral from './CourseOveral'
import WhatYouLearn from './WhatYouLearn'
import TopCompanyChoose from './TopCompanyChoose'
import CourseContent from './CourseContent'
import CourseMoreDetail from './CourseMoreDetail'
import CourseInstructors from './CourseInstructors'
import CourseSameCategory from './CourseSameCategory'
import CourseRating from './CourseRating'
import RelativeCourse from './RelativeCourse'

const CourseDetail = () => {
  return (
    <div>
        <div className='bg-slate-800'>
            <div className='container mx-auto '>
                <CourseOveral/>
            </div>
        </div>
        <div className="container mx-auto px-10">
            <WhatYouLearn/>
            <TopCompanyChoose/>
            <CourseContent/>
            <CourseMoreDetail/>
            <CourseInstructors/>
            <CourseSameCategory/>
            <CourseRating/>
            <RelativeCourse/>
        </div>
        
    </div>
  )
}

export default CourseDetail