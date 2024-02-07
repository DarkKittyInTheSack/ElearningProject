import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { saveLocalStore } from "../../utils/local";
import { message } from "antd";
import { signUp } from "../../services/signUp";
import { addLoginUserData } from "../../utils/localStorageLogin";
const SignUp = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "HV",
        email: "",
      },
      enableReinitialize: true,
      onSubmit: (values, { resetForm }) => {
        signUp
          .SignUp(values)
          .then((res) => {
            resetForm();
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      validationSchema: Yup.object({
        taiKhoan: Yup.string().required("Username is required"),
        hoTen: Yup.string().required("Full name is required"),
        email: Yup.string().required("Email is required"),
        matKhau: Yup.string().required("Password is required"),
        soDT: Yup.string().required("Phone Number is required"),
      }),
    });
  return (
    <>
      {contextHolder}
      <div className="container mx-auto ">
        <div className="col_right md:mx-4 sm:mx-5 sm:my-3">
          <h2 className="font-bold text-3xl block text-center p-3 ">
            Sign up and start learning
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5 md:my-3 sm:my-5">
            <div className="text-center">
              <input
                type="text"
                id="taiKhoan"
                name="taiKhoan"
                className="text-lg bg-gray-50 border border-black block md:w-1/3 sm:w-full p-4 font-bold mx-auto "
                placeholder="Username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.taiKhoan}
              />
              {errors.taiKhoan && touched.taiKhoan ? (
                <p className="text-red-500 md:w-1/3 sm:w-full text-xs mt-1 text-left mx-auto">{errors.taiKhoan}</p>
              ) : null}
            </div>
            <div className="text-center">
              <input
                type="password"
                id="matKhau"
                name="matKhau"
                className="text-lg bg-gray-50 border border-black block md:w-1/3 sm:w-full p-4 font-bold mx-auto"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.matKhau}
              />
              {errors.matKhau && touched.matKhau ? (
                <p className="text-red-500 md:w-1/3 sm:w-full text-xs mt-1 text-left mx-auto">{errors.matKhau}</p>
              ) : null}
            </div>
            <div className="text-center">
              <input
                type="text"
                id="hoTen"
                name="hoTen"
                className="text-lg bg-gray-50 border border-black block md:w-1/3 sm:w-full p-4 font-bold mx-auto "
                placeholder="Full Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.hoTen}
              />
              {errors.hoTen && touched.hoTen ? (
                <p className="text-red-500 md:w-1/3 sm:w-full text-xs mt-1 text-left mx-auto">{errors.hoTen}</p>
              ) : null}
            </div>
            <div className="text-center">
              <input
                type="text"
                id="soDT"
                name="soDT"
                className="text-lg bg-gray-50 border border-black block md:w-1/3 sm:w-full p-4 font-bold mx-auto "
                placeholder="Phone Number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.soDT}
              />
              {errors.soDT && touched.soDT ? (
                <p className="text-red-500 md:w-1/3 sm:w-full text-xs mt-1 text-left mx-auto">{errors.soDT}</p>
              ) : null}
            </div>

            <div className="text-center">
              <input
                type="text"
                id="email"
                name="email"
                className="text-lg bg-gray-50 border border-black block md:w-1/3 sm:w-full p-4 font-bold mx-auto "
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <p className="text-red-500 md:w-1/3 sm:w-full text-xs mt-1 text-left mx-auto">{errors.email}</p>
              ) : null}
            </div>

            <div className="flex md:justify-center sm:justify-start space-x-2">
              <input type="checkbox" id="" name="" className="w-5 " />
              <p className="px-2 text-base text-left my-0">
                Send me special offers, <br /> personalized recommendations, and
                learning tips.
              </p>
            </div>
            <div className=" text-center ">
              <button
                type="submit"
                className=" text-white text-2xl font-bold bg-violet-600 border-black md:w-1/3 sm:w-full p-4 mx-auto"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center">
            <h2 className="w-full text-sm md:text-center sm:text-left">
              By signing up, you agree to our Terms of Use and Privacy Policy.
            </h2>
          </div>
          <div className="md:justify-center sm:justify-start flex items-center space-x-2 my-2">
            <h2 className="py-1 text-base">Already have an account?</h2>
            <Link
              to={"/login"}
              className=" text-violet-700 text-base font-bold"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
