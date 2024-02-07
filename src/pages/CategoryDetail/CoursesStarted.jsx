import React from 'react'
import { Tabs } from 'antd'
import CoursesStartedList from './CoursesStartedList';

const CoursesStarted = ({courses}) => {
    const items = [
        {
          key: '1',
          label: <p className='font-bold text-base px-2 py-1'>Most popular</p>,
          children: <CoursesStartedList courses = {courses}/>,
        },
        {
          key: '2',
          label: <p className='font-bold text-base px-2 py-1'>New</p>,
          children: <CoursesStartedList courses = {courses}/>,
        },
        {
          key: '3',
          label: <p className='font-bold text-base px-2 py-1'>Trending</p>,
          children: <CoursesStartedList courses = {courses}/>,
        },
    ];
  return (
    <div className='mb-10 mx-5'>
        <h2 className='font-bold text-2xl'>Couses to get you started</h2>
        <Tabs defaultActiveKey='1' items={items} style={{border: 'none'}} className='mt-5 w-full'/>
    </div>
  )
}

export default CoursesStarted