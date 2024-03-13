import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getDataToFetch } from '../../redux/reducer/coursesByCategorySlice'
import { useRecoilState, useRecoilValue } from 'recoil'
import { fetchWishlistRecoil, wishlistCoursesRecoil } from '../../redux/recoil/wishlistCoursesRecoil'


const CourseSameCategory = ({category}) => {
  const dispatch = useDispatch()
  const {coursesByCategory} = useSelector((state) => state.coursesByCategorySlice)

  const wishList = useRecoilValue(fetchWishlistRecoil)
  const [wishlistData,setWishList] = useRecoilState(wishlistCoursesRecoil)

  useEffect(() =>{
    if(category){
      dispatch(getDataToFetch(category))
    }
  },[])

  return (
    <div className='md:w-4/6 sm:w-full'>
      <h2 className='font-bold text-2xl'>Same Category</h2>
      <ul>
        {
          coursesByCategory ? (
            coursesByCategory.slice(0,5).map((item) =>{
              const {maKhoaHoc,tenKhoaHoc,luotXem,hinhAnh} = item
              return <li className='border-b border-black py-3' key={maKhoaHoc}>
              <div className="flex items-center justify-between">
                <div className="flex items-center w-4/6">
                  <a href={`/detail/${maKhoaHoc}`}>
                    <img src={hinhAnh} width={'64px'} height={'64px'} loading='lazy' alt="" />
                  </a>
                  
                  <div className="mx-3 font-bold text-base leading-6 block">
                    <a href={`/detail/${maKhoaHoc}`}>
                      <p className='line-clamp-2'>{tenKhoaHoc}</p>
                    </a>
                    <span className='font-normal text-sm my-1'><span className='font-bold text-green-700'>99.5 total hours</span> &#8226; Updated 12/2/2024</span>
                  </div>
                </div>
                <ul className="flex items-center font-bold text-base justify-between w-3/6">
                  <li>
                    <p className='text-yellow-800'>4.5 <i className='fa-solid fa-star text-yellow-600'></i></p>
                  </li>
                  <li>
                    <p className='font-normal text-sm'>{luotXem} <i className='fa-solid fa-user-group'></i></p>
                  </li>
                  <li>
                    <p>đ1,700,000</p>
                  </li>
                  <li>
                    <button className='text-center' onClick={(data = 0) =>{
                      wishList.find(item => item.maKhoaHoc === maKhoaHoc) ? data = 1 : setWishList((current) => current.concat(item))
                    }}><i className='fa-regular fa-heart p-3 text-base rounded-full border text-center border-black leading-4'></i></button>
                  </li>
                </ul>
              </div>
            </li>
            })
          ) : <div>No same Courses</div>
        }

      </ul>
    </div>
  )
}

export default CourseSameCategory