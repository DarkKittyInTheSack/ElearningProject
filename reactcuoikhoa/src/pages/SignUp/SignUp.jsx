import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { saveLocalStore } from "../../utils/local";
import { message } from "antd";
import { signUp } from "../../services/signUp";
const SignUp = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    // reset,
  } = useFormik({
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
          // thông báo thành công
          // messageApi.open({
          //   type: "success",
          //   content: "Đăng kí thành công",
          // });
          // lưu thông tin người dùng
          saveLocalStore(res.data.content, "user_info");
          // chuyển hướng người dùng tới trang chủ
        })
        .catch((err) => {
          // lỗi không đăng ký được
          //   messageApi.open({
          //     type: "error",
          //     content: "Đăng ký không thành công",
          //   });
          console.log(err);
        });
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Vui lòng không bỏ trống"),
      hoTen: Yup.string().required("Vui lòng không bỏ trống"),
      email: Yup.string().required("Vui lòng không bỏ trống"),
      matKhau: Yup.string().required("Vui lòng không bỏ trống"),
      // maNhom: Yup.string().required("Vui lòng không bỏ trống"),
    }),
  });
  return (
    <>
      {contextHolder}
      <div className="container mx-auto ">
        <div className="col_right md:mx-4 sm:my-3">
          <h2 className="font-bold text-3xl block sm:text-center p-3 ">
            Sign up and start learning
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="text-center">
              <input
                type="text"
                id="taiKhoan"
                name="taiKhoan"
                className="bg-gray-50 border border-black  w-1/3 p-4 mx-center "
                placeholder="Tài khoản"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.taiKhoan}
              />
              {errors.taiKhoan && touched.taiKhoan ? (
                <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
              ) : null}
            </div>
            <div className="text-center">
              <input
                type="password"
                id="matKhau"
                name="matKhau"
                className="bg-gray-50 border border-black  w-1/3 p-4 mx-center"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.matKhau}
              />
              {errors.matKhau && touched.matKhau ? (
                <p className="text-red-500 text-xs mt-1">{errors.matKhau}</p>
              ) : null}
            </div>
            <div className="text-center">
              <input
                type="text"
                id="hoTen"
                name="hoTen"
                className="bg-gray-50 border border-black  w-1/3 p-4 mx-center "
                placeholder="Full Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.hoTen}
              />
              {errors.hoTen && touched.hoTen ? (
                <p className="text-red-500 text-xs mt-1">{errors.hoTen}</p>
              ) : null}
            </div>
            <div className="text-center">
              <input
                type="text"
                id="soDT"
                name="soDT"
                className="bg-gray-50 border border-black  w-1/3 p-4 mx-center "
                placeholder="So Dien Thoai"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.soDT}
              />
              {errors.soDT && touched.soDT ? (
                <p className="text-red-500 text-xs mt-1">{errors.soDT}</p>
              ) : null}
            </div>
            {/* <div className=" text-center">
              <input
                type="maNhom"
                id="maNhom"
                name="maNhom"
                className="bg-gray-50 border border-black  w-1/3 p-4 mx-center"
                placeholder="maNhom"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.maNhom}
              />
              {errors.maNhom && touched.maNhom ? (
                <p className="text-red-500 text-xs mt-1">{errors.maNhom}</p>
              ) : null}
            </div> */}
            <div className="text-center">
              <input
                type="text"
                id="email"
                name="email"
                className="bg-gray-50 border border-black  w-1/3 p-4 mx-center "
                placeholder="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              ) : null}
            </div>

            <div className="flex justify-center">
              <input type="checkbox" id="" name="" className="w-6 " />
              <p className="p-2.5 text-xl  text-left m-4">
                Send me special offers, <br /> personalized recommendations, and
                learning tips.
              </p>
            </div>
            <div className=" text-center ">
              <button
                type="submit"
                className=" text-white text-2xl font-bold bg-violet-600 border-black w-1/3 p-4 mx-center"
              >
                Sign Up
              </button>
            </div>
            <div className="text-center">
              <h2 className="p-2.5 text-xxl">
                By signing up, you agree to our Terms of Use and Privacy Policy.
              </h2>
            </div>
            <div className="justify-center flex">
              <h2 className=" p-2.5 text-xl">Already have an account?</h2>
              <Link
                to={"/login"}
                className=" text-violet-700 text-xl p-2 font-bold"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
