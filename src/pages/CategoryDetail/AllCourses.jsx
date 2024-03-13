import React, { useState } from 'react'
import { Menu} from 'antd'
import './AllCourses.scss'
import AllCoursesList from './AllCoursesList'
import MenuSide from './MenuSide'

const AllCourses = ({courses}) => {
    const [filterCoursesList,setFilterCoursesList] = useState(courses)

    const onFilterData = (key,courseList)=>{
        switch(key){
            case 'highest':
                {
                    setFilterCoursesList([...courseList].sort((a,b) => {return b.luotXem - a.luotXem}))
                    break
                }
            case 'date':
                {
                    setFilterCoursesList([...courseList].sort((a,b) =>{return new Date(a.ngayTao).getTime() - new Date(b.ngayTao).getTime()}))
                    break
                }
            default: 
                    setFilterCoursesList(courseList)
        }
    }

  return (
    <div className='m-5'>
        <h2 className='font-bold text-2xl mt-10 mb-5 '>All development courses</h2>
        <div className="flex my-5 items-center justify-between">
            <div className="flex font-bold text-base">
                <button className='border border-black px-3 py-4'><i className='fa-solid fa-arrow-up-wide-short mr-2'></i>Filter</button>
                <div className="mx-3 border border-black p-2">
                    <p className='my-1'>Sort by</p>
                    <select name="" id="" onChange={(data) => {
                        onFilterData(data.target.value,courses)
                    }} className='font-normal text-base outline-none'>
                        <option value="basic">Basic</option>
                        <option value="highest">Highest view</option>
                        <option value="date">Date created</option>
                    </select>
                </div>
            </div>
            <span className='font-bold text-gray-600'>10,000 results</span>
        </div>
        <div className="flex">
            <MenuSide/>
            {
                filterCoursesList.length > 0 ? (<AllCoursesList courses = {filterCoursesList}/>) : (<AllCoursesList courses = {courses}/>)
            }
            
        </div>
    </div>
  )
}

export default AllCourses