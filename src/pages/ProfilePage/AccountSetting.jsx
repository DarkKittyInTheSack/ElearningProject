import React from "react";
import { Card, message } from "antd";
import { getLocalStore, saveLocalStore } from "../../utils/local";
import { useForm } from "react-hook-form";
import { UserService } from "../../services/UserService";
import { ErrorMessage } from "@hookform/error-message";

const AccountSetting = ({ email }) => {
  const user = getLocalStore("user_info");
  const password = getLocalStore("password");
  const [messageApi, contextHolder] = message.useMessage();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      matKhau: password,
      matKhauNhapLai: ''
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    UserService.updateUser({
        email: user.email,
        hoTen: user.hoTen,
        maLoaiNguoiDung: user.maLoaiNguoiDung,
        maNhom: user.maNhom,
        soDT: user.soDT,
        taiKhoan: user.taiKhoan,
        matKhau: data.matKhau,
    })
      .then((result) => {
        messageApi.open({
          type: "success",
          content: "Your password has been updated !!",
        });
        saveLocalStore(
          {
            accessToken: user.accessToken,
            email: data.email,
            hoTen: data.hoTen,
            maLoaiNguoiDung: data.maLoaiNguoiDung,
            maNhom: data.maNhom,
            soDT: data.soDT,
            taiKhoan: data.taiKhoan,
          },
          "user_info"
        );

        saveLocalStore(data.matKhau, "password");
      })
      .catch((err) => {
        message.error(err.response.data);
      });
  };
  return (
    <div>
      <Card
        title={
          <div className="font-bold text-2xl text-center pb-5">
            <p>Account</p>
            <span className="font-normal text-base">
              Edit your account settings and change your password here.
            </span>
          </div>
        }
        bordered={false}
        style={{ width: "100%", borderRadius: "0px" }}
      >
        <ul className="font-bold text-base ">
          <li className="w-2/3 mx-auto">
            <h2>Email</h2>
          </li>
          <li className="py-3 border-b">
            <div className="p-3 border border-black font-normal w-2/3 mx-auto">
              <p>
                Your email address is <span className="font-bold">{email}</span>
              </p>
            </div>
          </li>
          <li className="py-3 border-b">
            <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 mx-auto">
              <input
                type="password"
                {...register("matKhau", {
                  required: "Password is required",
                })}
                className="p-3 border border-black w-full font-normal my-2 outline-none"
                placeholder="Enter new password"
              />

              <ErrorMessage
                errors={errors}
                name="matKhau"
                render={({ message }) => {
                  return (
                    <p className="font-normal text-sm text-red-500">
                      {message}
                    </p>
                  );
                }}
              />

              <input
                type="password"
                id="re_password"
                {...register('matKhauNhapLai',{
                    required: 'Re-write password is required'
                })}
                className="p-3 border border-black w-full font-normal my-2 outline-none"
                placeholder="Re-type new password"
              />

                <ErrorMessage
                    errors={errors}
                    name="matKhauNhapLai"
                    render={({ message }) => {
                    return (
                        <p className="font-normal text-sm text-red-500">
                        {message}
                        </p>
                    );
                }}
              />

              <button
                type="submit"
                className=" bg-black py-3 px-4 text-lg text-white my-3"
              >
                Change password
              </button>
            </form>
          </li>

          <li className="my-4">
            <Card className="w-2/3 mx-auto text-base">
              <div className="px-3">
                <p className="my-2 text-lg">Multi-factor Authentication</p>
                <span className="font-normal">
                  Increase your account security by requiring that a code
                  emailed to you be entered when you log in. For more
                  information on how multi-factor authentication works, refer to
                  our{" "}
                  <span className="text-purple-500 underline underline-offset-2">
                    Help Center article
                  </span>
                  .
                </span>
                <button className=" bg-black py-3 px-4 text-lg text-white mt-4 mb-3 block">
                  Enable
                </button>
              </div>
            </Card>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default AccountSetting;
