import React, { useState } from "react";
import { getLocalStore } from "../../utils/local";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { CoursesService } from "../../services/CoursesService";

const UnsubscribeCourses = () => {
  const user = getLocalStore("user_info");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      maKhoaHoc: "",
      taiKhoan: user.taiKhoan,
    },
    mode: "onChange",
  });

  const [notificationData,setNotification] = useState('')

  const onSubmit = (data) => {
    CoursesService.unSubscribeCourses({
      maKhoaHoc: data.maKhoaHoc,
      taiKhoan: data.taiKhoan,
    })
      .then((result) => {
        setNotification('Success, You has been unsubscribe The courses')
      })
      .catch((err) => {
        setNotification('The courses ID is not valid,please try again')
      });
  };
  return (
    <div className="container mx-auto my-5">
      <p className="font-normal text-base text-black my-3">
        <i className="fa-solid fa-circle-exclamation text-red-500 me-1"></i>
        <span className=" text-red-500 font-bold ">Warning:</span> You will lost
        all of your access after unsubscribe this courses
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className=" w-1/3">
        <input
          type="text"
          {...register("maKhoaHoc", {
            required: "Course ID is required",
          })}
          className="border border-black p-3 font-normal text-base w-full outline-none"
          placeholder="Course ID"
        />
        <ErrorMessage
          errors={errors}
          name="maKhoaHoc"
          render={({ message }) => {
            return (
              <p className="font-normal text-sm text-red-500">{message}</p>
            );
          }}
        />
        <button
          type="submit"
          className="px-3 py-2 my-3 font-bold bg-black text-white"
        >
          Unsubscribe
        </button>

        <p className="font-bold text-base">
            {notificationData}
        </p>
        
      </form>
    </div>
  );
};

export default UnsubscribeCourses;
