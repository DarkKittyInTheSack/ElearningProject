import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../services/userLogin";
import { useDispatch } from "react-redux";
import { saveInfoUser } from "../../redux/slice/userSlice";
import { message } from "antd";
import { saveLocalStore } from "../../utils/local";
const Login = () => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
      },
      onSubmit: (values) => {
        userLogin
          .loginServ(values)
          .then((res) => {
            console.log(res);
            // thông báo thành công
            messageApi.open({
              type: "success",
              content: "Đăng nhập thành công",
            });
            // lưu thông tin người dùng
            dispatch(saveInfoUser(res.data));
            saveLocalStore(res.data, "user_info");
            // chuyển hướng người dùng tới trang chủ
            setTimeout(() => {
              navigate("/");
            }, 1000);
          })
          .catch((err) => {
            // lỗi không đăng nhập được
            // messageApi.open({
            //   type: "error",
            //   content: err.response.data.content,
            // });
            message.error(err.response.data);
            console.log(err);
          });
      },
      validationSchema: Yup.object({
        taiKhoan: Yup.string().required("Vui lòng không bỏ trống"),
        matKhau: Yup.string().required("Vui lòng không bỏ trống"),
      }),
    });

  return (
    <>
      {contextHolder}
      <div className="container  ">
        <div className="col_right md:mx-4 sm:my-3">
          <h2 className="font-bold text-3xl block sm:text-center ">
            Đăng nhập
          </h2>
          <div className="flex justify-center  py-5">
            <Link
              to={
                "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?gsiwebsdk=3&client_id=700206021005-as1l679sch207mp70msgjhma1krf3k9q.apps.googleusercontent.com&scope=email%20profile&redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.udemy.com%3Fid%3Dauth863183&prompt=consent&access_type=offline&response_type=code&include_granted_scopes=true&enable_granular_consent=true&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow"
              }
              className="text-xl bg-gray-50 border border-black block w-1/3 p-4 font-bold "
            >
              <i class="fa-brands fa-google"></i> Continue with Google
            </Link>
            {/* {errors.taiKhoan && touched.taiKhoan ? (
              <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
            ) : null} */}
          </div>
          <div className="flex justify-center py-5">
            <Link
              to={"https://www.facebook.com/"}
              className=" text-xl bg-gray-50 border border-black block w-1/3 p-4 font-bold "
            >
              <i class="fa-brands fa-facebook"></i> Continue with Facebook
            </Link>
            {/* {errors.taiKhoan && touched.taiKhoan ? (
              <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
            ) : null} */}
          </div>
          <div className="flex justify-center  py-5">
            <Link
              to={"https://www.apple.com/"}
              className=" text-xl bg-gray-50 border border-black block w-1/3 p-4 font-bold "
            >
              {" "}
              <i class="fa-brands fa-apple"></i> Continue with Apple
            </Link>
            {/* {errors.taiKhoan && touched.taiKhoan ? (
              <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
            ) : null} */}
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex justify-center">
              <input
                type="text"
                id="taiKhoan"
                name="taiKhoan"
                className=" text-xl bg-gray-50 border border-black block w-1/3 p-4 font-bold"
                placeholder="Tài Khoản"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.taiKhoan}
              />
              {errors.taiKhoan && touched.taiKhoan ? (
                <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
              ) : null}
            </div>
            <div className="flex justify-center">
              <input
                type="password"
                id="matKhau"
                name="matKhau"
                className="text-xl bg-gray-50 border border-black block w-1/3 p-4 font-bold"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.matKhau}
              />
              {errors.matKhau && touched.matKhau ? (
                <p className="text-red-500 text-xs mt-1">{errors.matKhau}</p>
              ) : null}
            </div>
            <div className=" flex justify-center">
              <button
                type="submit"
                className=" text-white text-2xl font-bold bg-violet-600 border-black block w-1/3 p-4"
              >
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
