import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { UserService } from "../../services/UserService";
import { useLocation } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import { fetchUserData } from "../../redux/reducer/userGetByIDSlice";

const UpdateCurrentStudent = () => {
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
          maLoaiNguoiDung: "HV",
          maNhom: "GP01",
          email: user.email,
        },
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
      <h2 className="font-bold text-2xl ">Update current Student data</h2>

      {user ? (
        <form onSubmit={handleSubmit(onSubmit)} className="my-3 space-y-5">
          <input
            type="text"
            disabled
            className="font-bold text-base p-3 border border-black w-full"
            placeholder="Student Account"
            {...register("taiKhoan")}
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
            placeholder="Student Fullname"
            {...register("hoTen", { required: "Student Fullname is required",
            })}
            defaultValue={user.hoTen}
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
            className="font-bold text-base p-3 border border-black w-full outline-none"
            placeholder="Student Phone Number"
            {...register("soDT", {
              required: "Student Phone Number is required",
              pattern:{
                value: /^[0-9\+]{1,}[0-9\-]{3,15}$/,
                message: "Student Phone number is not valid"
              }
            })}
            defaultValue={user.soDt}
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
            className="font-bold text-base p-3 border border-black w-full outline-none"
            placeholder="Student Email"
            {...register("email", {
              required: "Student Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email is not valid !!!",
              },
            })}
            defaultValue={user.email}
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
};

export default UpdateCurrentStudent;
