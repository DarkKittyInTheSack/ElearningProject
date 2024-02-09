import React from 'react'
import CoursesStarted from './CoursesStarted'
import FeaturedCourses from './FeaturedCourses'
import PopularTopics from './PopularTopics'
import AllCourses from './AllCourses'
import {useLocation} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { getDataToFetch } from '../../redux/reducer/coursesByCategorySlice'
import { useSignalEffect } from '@preact/signals-react/runtime'
import { useRecoilValue } from 'recoil'
import { fetchCategoryRecoil } from '../../redux/recoil/categoryRecoil'

const CategoryDetail = () => {
  const location = useLocation().pathname.split('/')[2]
  let data = {}
  const {coursesByCategory} = useSelector((state) => state.coursesByCategorySlice)
  // const {category} = useSelector((state) => state.coursesCategorySlice)
  const category = useRecoilValue(fetchCategoryRecoil)
  const dispatch = useDispatch()

  useSignalEffect(() =>{
    data.maDanhMucKhoahoc = location
    if(data){
      dispatch(getDataToFetch(data))
    }
  },[])

  const generateRandomNumber = () =>{
    return Math.floor(Math.random() * coursesByCategory.length)
  }

  const getRandomData = (first,last) =>{
      let data = []
      for(let i = first; i < last; i ++){
        if(coursesByCategory[generateRandomNumber()]){
          data[i] = coursesByCategory[generateRandomNumber()]
        }
      }
      return data
  }

  return (
    <div className='container mx-auto'>
      {
        coursesByCategory ? (coursesByCategory.slice(0,1).map((item) =>{
          return <h2 className="font-bold font-serif font-sans text-4xl text-black my-10 mx-5" key={item.danhMucKhoaHoc.maDanhMucKhoahoc}>{item.danhMucKhoaHoc.tenDanhMucKhoaHoc}</h2>
        })) : null
      }
        <CoursesStarted courses = {getRandomData(0,6)}/>
        <FeaturedCourses courses = {getRandomData(0,3)}/>
        <PopularTopics category = {category}/>
        <AllCourses courses = {coursesByCategory}/>
    </div>
  )
}

export default CategoryDetail