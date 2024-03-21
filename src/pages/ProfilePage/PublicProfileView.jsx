import React from 'react'
import { Card,Rate } from 'antd'
import { getLocalStore } from "../../utils/local";
import { useRecoilValue } from 'recoil';
import { fetchSubcriptionRecoil } from '../../redux/recoil/subscriptionListRecoil';
import EmptyMyLearning from '../../components/EmptyMyLearning';
import { Link } from 'react-router-dom';

const PublicProfileView = () => {
    const user = getLocalStore("user_info");
    const subscribeCourses = useRecoilValue(fetchSubcriptionRecoil)
  return (
    <div className='bg-slate-700'>
        <div className="font-sans font-serif font-bold text-5xl container mx-auto md:text-left sm:text-center">
            <p className='text-white py-10'>{user.hoTen}</p>
        </div>
        <div className="bg-gray-100 py-5">
            <div className="container mx-auto">
                <h2 className='font-bold text-lg text-center'>Course You're enroled in</h2>
                {
                    subscribeCourses ? <div className="grid grid-cols-4 items-center my-6">
                    {
                        subscribeCourses.map(item =>{
                            const {maKhoaHoc,tenKhoaHoc,nguoiTao,hinhAnh,ngayTao,luotXem} = item
                            return <Card cover={<img src={hinhAnh}/>} className='rounded-none border-none bg-transparent' key={maKhoaHoc}>
                            <Link to={`/detail/${maKhoaHoc}`} className='font-bold text-sm line-clamp-2 leading-4'>{tenKhoaHoc}</Link>
                            <span className='font-normal text-xs mb-1'>{nguoiTao.hoTen}</span>
                            <div className="flex items-center">
                                <p className='font-semibold text-base text-amber-900'>4.3</p>
                                <Rate allowHalf defaultValue={4.3} className='mx-1 text-sm space-x-0.5'/>
                                <span className='font-medium text-xs'>({luotXem})</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className='font-bold text-base'>₫279,000</span>
                            </div>
                        </Card>
                        })
                    }
                </div> : <EmptyMyLearning/>
                }
                
            </div>
        </div>
    </div>
  )
}

export default PublicProfileView