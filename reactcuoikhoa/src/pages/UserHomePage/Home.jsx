import React from 'react'
import Banner from './Banner'
import StartLearning from './StartLearning'
import RecomendCourse from './RecomendCourse'
import RecomendedForYou from './RecomendedForYou'
import TopicRecomended from './TopicRecomended'

const Home = () => {
  return (
    <div className='container mx-auto'>
        <Banner/>
        <StartLearning/>
        <RecomendCourse/>
        <RecomendedForYou/>
        <TopicRecomended/>
    </div>
  )
}

export default Home