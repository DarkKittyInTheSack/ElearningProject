import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { fetchCourses } from '../../redux/reducer/userHomePageSlice'
import {List} from 'antd'
import SubscriptionList from './SubscriptionList'


const AllYourCourse = () => {
    const location = useLocation().pathname.split('/')[3]
    const dispatch = useDispatch()
    const [courseList,setCourseList] = useState([])
    const [courseId,setCourseId] = useState('')
    const {courses} = useSelector((state) => state.userHomePageSlice)
    let arr = []

    useEffect(() =>{
        dispatch(fetchCourses())

        courses.forEach((item) => {
            if(item.nguoiTao.taiKhoan === location){
                arr.push(item)
            }
        });

        setCourseList(arr)
    },[])


  return (
    <div className='container w-full mx-auto'>
        <h2 className='font-bold text-3xl my-5'>All your course</h2>

        <div className="flex my-8 space-x-5">
            <div className="w-1/2">
            {
                courseList ? <List
                itemLayout='vertical'
                size='large'
                pagination={{pageSize:4}}
                dataSource={courseList ? courseList : null}
                renderItem={(item) =>{
                    const {maKhoaHoc,tenKhoaHoc, hinhAnh} = item
                    return <li className='mb-4' key={maKhoaHoc}>
                    <div className="flex justify-between items-center border-b pb-4">
                            <Link to={`/detail/${maKhoaHoc}`} className='list_data_img'
                            style={{
                                backgroundImage: `url(${hinhAnh})`,
                            }}>
                            </Link>
                        <div className="mx-3 font-bold text-lg w-2/3">
                            <Link to={`/detail/${maKhoaHoc}`}>
                                <h2 className='mb-1 hover:text-black'>{tenKhoaHoc}</h2>
                            </Link>
                        </div>
                        <button onClick={() => {setCourseId(maKhoaHoc)}} className='bg-green-500 text-white rounded px-2 py-3'>Subscription</button>
                    </div>
                </li>
                }}
            /> : null
            }
                    
            </div>
            <div className="w-1/2">
                <SubscriptionList courseId = {courseId}/>
            </div>
        </div>
    </div>
  )
}

export default AllYourCourse