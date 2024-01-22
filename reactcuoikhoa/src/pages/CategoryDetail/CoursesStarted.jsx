import React from 'react'
import { Tabs } from 'antd'
import CoursesStartedList from './CoursesStartedList';

const CoursesStarted = () => {
    const items = [
        {
          key: '1',
          label: <p className='font-bold text-base px-2 py-1'>Most popular</p>,
          children: <CoursesStartedList/>,
        },
        {
          key: '2',
          label: <p className='font-bold text-base px-2 py-1'>New</p>,
          children: <CoursesStartedList/>,
        },
        {
          key: '3',
          label: <p className='font-bold text-base px-2 py-1'>Trending</p>,
          children: <CoursesStartedList/>,
        },
    ];
  return (
    <div className='mb-10'>
        <h2 className='font-bold text-2xl'>Couses to get you started</h2>
        <Tabs defaultActiveKey='1' items={items} style={{border: 'none'}} className='mt-5'/>
    </div>
  )
}

export default CoursesStarted