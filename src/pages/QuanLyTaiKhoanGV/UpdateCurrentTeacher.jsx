import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { UserService } from "../../services/UserService";
import { useLocation } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import { fetchUserData } from "../../redux/reducer/userGetByIDSlice";

const UpdateCurrentTeacher = () => {
    const location = useLocation().pathname.split("/")[3];

    const {user} = useSelector((state) => state.userGetByIDSlice)
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(fetchUserData({taiKhoan: location}))
    }, []);
  
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue
    } = useForm({
      defaultValues: {
            taiKhoan: location,
            hoTen: user.hoTen,
            soDT: user.soDt,
            maLoaiNguoiDung: "GV",
            maNhom: "GP01",
            email: user.email,
          },
      mode: "onChange",
    });
  
    const onSubmit = (data, { resetForm }) => {
      UserService.updateUser(data)
        .then((result) => {

          window.location.href = "http://localhost:3000/admin/qlhv";
        })
        .catch((err) => {

        });
    };
  
    return (
      <div className="container mx-auto">
        <h2 className="font-bold text-2xl ">Update current Teacher data</h2>
  
        {user ? (
          <form onSubmit={handleSubmit(onSubmit)} className="my-3 space-y-5">
            <input
              type="text"
              disabled
              className="font-bold text-base p-3 border border-black w-full"
              placeholder="Teacher Account"
              {...register("taiKhoan", {
                required: "teacher Account is required",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="taiKhoan"
              render={({ message }) => {
                return (
                  <p className="font-normal inline text-sm text-red-500">
                    {message}
                  </p>
                );
              }}
            />
  
            <input
              type="text"
              className="font-bold text-base p-3 border border-black w-full outline-none"
              placeholder="Teacher Fullname"
              {...register("hoTen", { required: "Teacher Fullname is required",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="hoTen"
              render={({ message }) => {
                return (
                  <p className="font-normal inline text-sm text-red-500">
                    {message}
                  </p>
                );
              }}
            />
  
            <input
              type="text"
              className="font-bold text-base p-3 border border-black w-full"
              placeholder="Teacher Phone Number"
              {...register("soDT", {
                required: "Teacher Phone Number is required",
                pattern:{
                  value: /^[0-9\+]{1,}[0-9\-]{3,15}$/,
                  message: "Teacher Phone number is not valid"
                }
              })}
            />
            <ErrorMessage
              errors={errors}
              name="soDT"
              render={({ message }) => {
                return (
                  <p className="font-normal inline text-sm text-red-500">
                    {message}
                  </p>
                );
              }}
            />
  
            <input
              type="email"
              className="font-bold text-base p-3 border border-black w-full"
              placeholder="Teacher Email"
              {...register("email", {
                required: "Teacher Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Email is not valid !!!",
                },
              })}
            />
  
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => {
                return (
                  <p className="font-normal inline text-sm text-red-500">
                    {message}
                  </p>
                );
              }}
            />
  
            <button
              type="submit"
              className="p-3 w-full bg-black font-bold text-base text-center text-white"
            >
              Submit
            </button>
          </form>
        ) : null}
      </div>
    );
}

export default UpdateCurrentTeacher