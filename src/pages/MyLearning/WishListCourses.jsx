import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import EmptyMyLearning from '../../components/EmptyMyLearning'
import { fetchWishlistRecoil, wishlistCoursesRecoil } from '../../redux/recoil/wishlistCoursesRecoil'
import { Link } from 'react-router-dom'

const WishListCourses = () => {
    const wishlistCourses = useRecoilValue(fetchWishlistRecoil)
    const [_,setWishlishUpdate] = useRecoilState(wishlistCoursesRecoil)
    return (
      <div className='bg-white w-full mb-5'>
              <div className="grid grid-cols-4 items-center mx-auto">
                  {
                      wishlistCourses ? (wishlistCourses.map((item,index) =>{
                          const {maKhoaHoc,tenKhoaHoc,hinhAnh} = item
                          return <div className="item" style={{width: '250px'}} key={maKhoaHoc}>
                              <div className="py-3 font-bold text-lg border-b overflow-hidden">
                                  <img src={hinhAnh} alt="" loading='lazy' width={'240px'} height={'135px'} className='block w-full max-w-80 max-h-52'/>
                                  <Link to={`/detail/${maKhoaHoc}`} className='leading-6 line-clamp-1'>{tenKhoaHoc}</Link>
                              </div>
                              <div className="border-t flex items-center justify-between">
                                  <Link to={`/detail/${maKhoaHoc}`}><p className='font-normal text-base uppercase'>Subscribe</p></Link>
                                  <button onClick={() =>{
                                        let clone  = JSON.parse(JSON.stringify(wishlistCourses))
                                        clone.splice(index,1)
                                        setWishlishUpdate(() => clone)
                                  }}><p className='font-normal text-base text-red-500 uppercase'>Remove</p></button>
                              </div>
                          </div>
                      })) : <EmptyMyLearning/>
                  }
              </div>
      </div>
    )
}

export default WishListCourses