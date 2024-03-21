import React, { useState } from "react";
import "./CourseRightColumn.scss";
import { Link } from "react-router-dom";
import { CoursesService } from "../../services/CoursesService";
import { getLocalStore } from "../../utils/local";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchSubcriptionRecoil, subscriptionListRecoil } from "../../redux/recoil/subscriptionListRecoil";
import { fetchWishlistRecoil, wishlistCoursesRecoil } from "../../redux/recoil/wishlistCoursesRecoil";

const CourseRightColumn = ({ image, code,courses }) => {
  const user = getLocalStore('user_info')
  const [successData, setSuccessData] = useState('')
  const [failData, setFailData] = useState('')
  const [_,setSubscriptionList] = useRecoilState(subscriptionListRecoil)
  const [currentWishlist,setWishlist] = useRecoilState(wishlistCoursesRecoil)
  const wishlist = useRecoilValue(fetchWishlistRecoil)
  const subscriptionList = useRecoilValue(fetchSubcriptionRecoil)
  let list = []

  const subscribeCourse = (user,code) =>{
    if(user!= null){
      CoursesService.subscribeCourse({
        "maKhoaHoc": String(code),
        "taiKhoan": user.taiKhoan
      }).then((result) => {
        document.getElementById('successNotification').style.display = 'block'
        document.getElementById('failNotification').style.display = 'none'
        list.push(courses)
        if(subscriptionList.length == 0){
          setSubscriptionList(() => list)
        }else{
          setSubscriptionList((current) => current.concat(list))
        }

        setFailData('')
        setSuccessData('You has been subscribe this courses')

      }).catch((err) => {
        console.log(err)
        document.getElementById('successNotification').style.display = 'none'
        document.getElementById('failNotification').style.display = 'block'
        
        setFailData('Sorry, maybe you has been subscribe this before')
        setSuccessData('')
      });
    }else{
      window.location.href = 'http://localhost:3000/login'
    }
  }

  const addToWishlist = (courses) =>{
    let list = []
              if(wishlist.length == 0){
                list.push(courses)
                setWishlist(() =>list)

                document.getElementById('successNotification').style.display = 'block'
                document.getElementById('failNotification').style.display = 'none'

                setSuccessData('This courses has been add to your wishlist')
              }else{
                list.push(courses)
                setWishlist((current) =>current.concat(list))

                document.getElementById('successNotification').style.display = 'block'
                document.getElementById('failNotification').style.display = 'none'

                setSuccessData('This courses has been add to your wishlist')
              }
  }

  return (
    <div className=" bg-white course_right_column md:block sm:hidden">
      <div className="max-h-80 max-w-80 mx-auto mt-5 py-5 overflow-hidden object-cover">
        <img
          src={image}
          alt=""
          className="block w-full p-1 course_right_column_img"
          loading="eager"
        />
      </div>

      <ul className="my-5 font-bold text-3xl px-4">
        <li>
          <p>đ1,750,000</p>
        </li>
        <li>
          <div className="flex items-center my-2">
            {
              subscriptionList.find(item => item.maKhoaHoc === code) ? <button className="text-lg w-full bg-purple-500 border border-purple-500 text-white py-3">Already Subscribe</button> : <button type="button" onClick={() =>{
                subscribeCourse(user,code)
              }} className="text-lg w-full bg-purple-500 border border-purple-500 text-white py-3">
                  Subscribe
                </button>
            }
            
            <button onClick={() =>{
              addToWishlist(courses)
            }}>
              <i className="fa-regular fa-heart text-lg py-3 px-4 text-center ml-2 border border-black hover:bg-gray-100 duration-500"></i>
            </button>
          </div>
        </li>
        
        <li>
          {
            subscriptionList.find(item => item.maKhoaHoc === code) ? null :
            <Link to={user!= null ?'/checkout' : '/login'} className="w-full inline-block text-center text-lg border border-black py-3 hover:bg-gray-100 duration-500">
              Buy Now
            </Link>
          }
          
          <span className="font-normal text-gray-600 text-center w-full block text-sm my-3">
            30-Day Money-back guarantee
          </span>
          <span id='successNotification' className="font-normal text-green-600 w-full text-center text-sm inline-block hidden">{successData}</span>
          <span id='failNotification' className="font-normal text-red-600 w-full text-center text-sm inline-block hidden">{failData}</span>
        </li>
      </ul>
      <ul className="px-4 font-bold text-black my-5 space-y-2 border-b">
        <li>
          <h2 className="text-lg">This courses include</h2>
        </li>
        <li>
          <div className="flex font-normal text-sm items-center">
            <i className="fa-solid fa-video mr-3"></i>
            <p>73.5 hours on-demand video</p>
          </div>
        </li>
        <li>
          <div className="flex font-normal text-sm items-center">
            <i className="fa-solid fa-code mr-3"></i>
            <p>62 coding exercises</p>
          </div>
        </li>
        <li>
          <div className="flex font-normal text-sm items-center">
            <i className="fa-regular fa-file mr-5"></i>
            <p>59 articles</p>
          </div>
        </li>
        <li>
          <div className="flex font-normal text-sm items-center">
            <i className="fa-solid fa-download mr-4"></i>
            <p>133 downloadable sources</p>
          </div>
        </li>
        <li>
          <div className="flex font-normal text-sm items-center">
            <i className="fa-solid fa-mobile mr-5"></i>
            <p>Access on any devices</p>
          </div>
        </li>
        <li>
          <div className="flex font-normal text-sm items-center">
            <i className="fa-solid fa-infinity mr-3"></i>
            <p>Full lifetime access</p>
          </div>
        </li>
        <li>
          <div className="flex font-normal text-sm items-center">
            <i className="fa-solid fa-award mr-5"></i>
            <p>Certificate of completion</p>
          </div>
        </li>
        <li>
          <div className="flex mb-5 items-center text-base underline decoration-purple-500 underline-offset-4 justify-between">
            <button>Share</button>
            <button>Gift this course</button>
            <button>Apply Coupon</button>
          </div>
        </li>
      </ul>
      <div className="my-5 px-4 font-bold text-xl text-black">
        <h2 className="">Training 5 or more people?</h2>
        <span className="font-normal text-base text-gray-500 leading-3">
          Get your team access to 25,000+ top Udemy courses anytime, anywhere.
        </span>
        <button className="my-2 text-base border border-black w-full py-3 hover:bg-gray-100 duration-500">
          Try Udemy Business
        </button>
      </div>
    </div>
  );
};

export default CourseRightColumn;
