import React from 'react'
import { useRecoilValue } from 'recoil'
import { fetchSubcriptionRecoil } from '../../redux/recoil/subscriptionListRecoil'
import { Link } from 'react-router-dom'

const AllCourses = () => {
    const subscribeCourses = useRecoilValue(fetchSubcriptionRecoil)
  return (
    <div className='bg-white w-full '>
        <div className="container mx-auto my-4">
            <div className="w-full flex space-x-5 p-5 border my_learning_reminder">
                <i className='fa-solid fa-clock text-3xl'></i>
                <div className="mx-2 font-bold text-lg">
                    <p className='leading-5'>Schedule learning time</p>
                    <span className='font-normal text-base block mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut beatae quae veniam libero officia delectus nobis adipisci! Reprehenderit, fugit?</span>
                    <div className="flex space-x-3">
                        <button className='bg-black text-white text-base p-2'>Get started</button>
                        <button type='button' onClick={() =>{
                            document.querySelector('.my_learning_reminder').style.display = 'none'
                        }} className='p-2 text-base'>Dismiss</button>
                    </div>
                </div>
            </div>

            <ul className="my-3 flex font-normal text-base space-x-3">
                <li>
                    <label htmlFor="sortby">Sort by</label>
                    <div className='border border-black px-1 py-2 my-2'>
                        <select name="sortby" id="" className='block font-bold text-black px-2 outline-none'>
                            <option value="#">Recently Added</option>
                            <option value="#">Recently Added</option>
                        </select>
                    </div>
                </li>
                <li>
                    <label htmlFor="filterby">Filter by</label>
                    <ul className="flex space-x-3">
                        <li>
                            <div className='border border-black px-1 py-2 my-2'>
                                <select name="filterby" id="" className='block font-bold text-black px-1 outline-none'>
                                    <option value="#">Categories</option>
                                    <option value="#">Categories</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <div className='border border-black px-1 py-2 my-2'>
                                <select name="filterby" id="" className='block font-bold text-black px-1 outline-none'>
                                    <option value="#">Categories</option>
                                    <option value="#">Categories</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <div className='border border-black px-1 py-2 my-2'>
                                <select name="filterby" id="" className='block font-bold text-black px-1 outline-none'>
                                    <option value="#">Categories</option>
                                    <option value="#">Categories</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <button className='text-black font-bold p-2 my-2' disabled>Reset</button>
                        </li>
                    </ul>
                </li>
                
            </ul>

            <div className="grid grid-cols-4 items-center mx-auto">
                {
                    subscribeCourses ? (subscribeCourses.map(item =>{
                        const {maKhoaHoc,tenKhoaHoc,hinhAnh,nguoiTao} = item
                        return <div className="item" style={{width: '250px'}} key={maKhoaHoc}>
                            <div className="py-3 font-bold text-lg border-b">
                                <img src={hinhAnh} alt="" loading='lazy' width={'240px'} height={'135px'}/>
                                <p className='leading-6 line-clamp-2'>{tenKhoaHoc}</p>
                                <span className='font-normal text-sm leading-5'>{nguoiTao.hoTen}</span>
                            </div>
                            <div className="border-t">
                                <Link to={`/detail/${maKhoaHoc}`}><p className='font-normal text-base uppercase'>Start course</p></Link>
                            </div>
                        </div>
                    })) : null
                }
            </div>
        </div>
    </div>
  )
}

export default AllCourses