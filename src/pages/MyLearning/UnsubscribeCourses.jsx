import React, { useState } from "react";
import { getLocalStore } from "../../utils/local";
import { CoursesService } from "../../services/CoursesService";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchSubcriptionRecoil, subscriptionListRecoil } from "../../redux/recoil/subscriptionListRecoil";

const UnsubscribeCourses = () => {
  const user = getLocalStore("user_info");
  const courseSubscription = useRecoilValue(fetchSubcriptionRecoil)
  const [_,setNewSubscriptionList] = useRecoilState(subscriptionListRecoil)

  const [notificationData,setNotification] = useState('')
  return (
    <div className="container mx-auto my-5">
      <p className="font-normal text-base text-black my-3">
        <i className="fa-solid fa-circle-exclamation text-red-500 me-1"></i>
        <span className=" text-red-500 font-bold ">Warning:</span> You will lost
        all of your access after unsubscribe this courses
      </p>

      <ul className="w-1/2">
        {
          courseSubscription ? (
            courseSubscription.map((item,index) =>{
              const {maKhoaHoc, tenKhoaHoc,hinhAnh,nguoiTao} = item
              return(
                <li className='border-b border-black py-3' key={maKhoaHoc}>
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
                <ul className="flex items-center font-bold text-base justify-end w-3/6">
                  <li>
                    <button className='text-center bg-red-500 text-white px-2 py-3 rounded' onClick={() =>{
                      
                      CoursesService.unSubscribeCourses({
                        maKhoaHoc: maKhoaHoc,
                        taiKhoan: user.taiKhoan,
                      })
                        .then((result) => {
                          let clone  = JSON.parse(JSON.stringify(courseSubscription))
                          let index = clone.findIndex(item => item.maKhoaHoc === String(maKhoaHoc))
                          clone.splice(index,1)


                          setNotification('Success, You has been unsubscribe The courses')
                          localStorage.removeItem('recoil-persist-subscription-list')
                          setNewSubscriptionList(() => clone)

                        })
                        .catch((err) => {
                          console.log(err)
                          setNotification('The courses ID is not valid,please try again')
                        });
                    }}>Unsubscribe</button>
                  </li>
                </ul>
              </div>
            </li>
              )
            })
          ) : null
        }
        
      </ul>
      <p className="font-bold text-base">
            {notificationData}
      </p>
    </div>
  );
};

export default UnsubscribeCourses;
