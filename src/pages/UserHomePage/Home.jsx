import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Banner from './Banner'
import StartLearning from './StartLearning'
import RecomendCourse from './RecomendCourse'
import RecomendedForYou from './RecomendedForYou'
import TopicRecomended from './TopicRecomended'
import { fetchCourses } from '../../redux/reducer/userHomePageSlice'
import { fetchCoursesCategory } from '../../redux/reducer/coursesCategorySlice'
import { useRecoilState} from 'recoil'

import { endedLoading, startedLoading } from '../../redux/reducer/loadingDataSlice'
import { categoryRecoil } from '../../redux/recoil/categoryRecoil'

const Home = () => {
  const dispatch = useDispatch()
  const {courses} = useSelector((state) => state.userHomePageSlice)
  const {category} = useSelector((state) => state.coursesCategorySlice)
  const [_,setCategoryList] = useRecoilState(categoryRecoil)

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
        if(courses[generateRandomNumber()]){
          data[i] = courses[generateRandomNumber()]
        }
      }
      return data
  }

  return (
    <div className='container mx-auto'>
      {
        category ? (setCategoryList(() => category)) : (setCategoryList(() => category))
      }
        <Banner/>
        <StartLearning courses={getRandomData(0,7)}/>
        <RecomendCourse courses={getRandomData(0,1)}/>
        <RecomendedForYou courses={getRandomData(0,10)}/>
        <TopicRecomended category = {category}/>
    </div>
  )
}

export default Home