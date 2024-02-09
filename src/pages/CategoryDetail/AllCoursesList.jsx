import React from 'react'
import {Rate, List} from 'antd'
import { Link } from 'react-router-dom'
import './AllCoursesList.scss'

const AllCoursesList = ({courses}) => {
  return (
    <div className='my-3 mx-4 w-full'>
        <List
            itemLayout='vertical'
            size='large'
            pagination={{pageSize:4}}
            dataSource={courses ? courses : null}
            renderItem={(item) =>{
                const {maKhoaHoc,tenKhoaHoc, nguoiTao, luotXem, hinhAnh,moTa} = item
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
                        <span className='font-normal text-base line-clamp-2 leading-6'>{moTa}</span>
                        <p className='font-normal text-sm text-gray-500'>{nguoiTao.hoTen}</p>
                        <div className="flex items-center">
                            <p className='font-semibold text-base text-amber-900'>4.3</p>
                            <Rate allowHalf defaultValue={4.3} className='mx-1 text-sm space-x-0.5'/>
                            <span className='font-medium text-sm'>({luotXem})</span>
                        </div>
                        <p className='font-normal text-sm text-gray-500'>22 total hours &#8226; 156 lectures &#8226; All level</p>
                    </div>
                    <p className='font-bold text-lg'>đ1,960,000</p>
                </div>
            </li>
            }}
        />
    </div>
  )
}

export default AllCoursesList