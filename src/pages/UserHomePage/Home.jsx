import React, { createContext, useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Banner from './Banner'
import StartLearning from './StartLearning'
import RecomendCourse from './RecomendCourse'
import RecomendedForYou from './RecomendedForYou'
import TopicRecomended from './TopicRecomended'
import { fetchCourses } from '../../redux/reducer/userHomePageSlice'
import { fetchCoursesCategory } from '../../redux/reducer/coursesCategorySlice'

import { endedLoading, startedLoading } from '../../redux/reducer/loadingDataSlice'
import { useAllCategory } from '../../components/customCategoryHook'

const Home = () => {
  const dispatch = useDispatch()
  const {courses} = useSelector((state) => state.userHomePageSlice)
  const category = useAllCategory()

  useEffect(() =>{
    dispatch(startedLoading())
    try {
      dispatch(fetchCourses())
      dispatch(fetchCoursesCategory())
      dispatch(endedLoading())
    } catch (error) {
      dispatch(endedLoading())
    }
  },[])

  const generateRandomNumber = () =>{
    return Math.floor(Math.random() * courses.length)
  }

  const getRandomData = (first,last) =>{
      let data = []
      for(let i = first; i < last; i ++){
        if(courses[generateRandomNumber()] && !data.includes(data[i])){
          data[i] = courses[generateRandomNumber()]
        }
      }
      return data
  }

  const RanDomCourseList = createContext(null)

  return (
    <div className='container mx-auto'>

        <Banner/>
        <RanDomCourseList.Provider value={getRandomData(0,7)}>
          <StartLearning courses={RanDomCourseList}/>
        </RanDomCourseList.Provider>

        <RanDomCourseList.Provider value={getRandomData(0,1)}>
          <RecomendCourse courses={RanDomCourseList}/>
        </RanDomCourseList.Provider>
        
        <RanDomCourseList.Provider value={getRandomData(0,10)}>
          <RecomendedForYou courses={RanDomCourseList}/>
        </RanDomCourseList.Provider>
        
        <TopicRecomended category = {category}/>
    </div>
  )
}

export default Home