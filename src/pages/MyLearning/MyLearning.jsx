import React from 'react'
import { Tabs } from 'antd'
import './MyLearning.scss'
import AllCourses from './AllCourses';
import EmptyMyLearning from '../../components/EmptyMyLearning';
import LearningReminder from './LearningReminder';
import UnsubscribeCourses from './UnsubscribeCourses';

const MyLearning = () => {
    const items = [
        {
          key: '1',
          label: <p className='font-bold text-base px-2 py-1'>All Courses</p>,
          children: <AllCourses/>,
        },
        {
          key: '2',
          label: <p className='font-bold text-base px-2 py-1'>My List</p>,
          children: <EmptyMyLearning/>,
        },
        {
          key: '3',
          label: <p className='font-bold text-base px-2 py-1'>Wishlist</p>,
          children: <EmptyMyLearning/>,
        },
        {
            key: '4',
            label: <p className='font-bold text-base px-2 py-1'>Archives</p>,
            children: <EmptyMyLearning/>,
        },
        {
            key: '5',
            label: <p className='font-bold text-base px-2 py-1'>Learning Tools</p>,
            children: <LearningReminder/>,
        },
        {
          key: '6',
          label: <p className='font-bold text-base px-2 py-1'>Unsubscribe</p>,
          children: <UnsubscribeCourses/>,
      },
    ];

  return (
    <div>
        <div className="bg-slate-900">
            <div className="container mx-auto">
                <p className="py-10 font-bold font-serif text-4xl text-white">My learning</p>
            </div>
            
        </div>
        <div className="container mx-auto">
            <Tabs defaultActiveKey='1' items={items} className='container mx-auto' style={{border: 'none'}}/>
        </div>
    </div>
  )
}

export default MyLearning