import React, { useState } from "react";
import { Card, Input, message } from "antd";
import { getLocalStore, saveLocalStore } from "../../utils/local";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { UserService } from "../../services/UserService";

const PublicProfile = () => {
  const { TextArea } = Input;
  const [successData, setSuccessData] = useState("");
  const [failData, setFailData] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const user = getLocalStore("user_info");
  const password = getLocalStore("password");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user.email,
      hoTen: user.hoTen,
      maLoaiNguoiDung: user.maLoaiNguoiDung,
      maNhom: user.maNhom,
      soDT: user.soDT,
      taiKhoan: user.taiKhoan,
      matKhau: password,
    },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    UserService.updateUser(data)
      .then((result) => {
        document.getElementById("successNotification").style.display = "block";
        document.getElementById("failNotification").style.display = "none";

        setFailData("");
        setSuccessData("Your personal data has been update");
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
      })
      .catch((err) => {
        document.getElementById("successNotification").style.display = "none";
        document.getElementById("failNotification").style.display = "block";

        setFailData("Sorry, you cannot update your data");
        setSuccessData("");
      });
  };

  return (
    <div>
      <Card
        title={
          <div className="font-bold text-2xl text-center pb-5">
            <p>Public Profile</p>
            <span className="font-normal text-base">
              Add information about yourself
            </span>
          </div>
        }
        bordered={false}
        style={{ width: "100%", borderRadius: "0px" }}
      >
        <ul className="font-bold text-base w-2/3 mx-auto">
          <li>
            <h2>Basic:</h2>
          </li>
          <li className="py-4 border-b">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                {...register("hoTen", { required: "Full Name is required" })}
                className="border border-black w-full p-3 font-normal outline-none my-2"
                placeholder="Full Name"
              />
              <ErrorMessage
                errors={errors}
                name="hoTen"
                render={({ message }) => {
                  return (
                    <p className="font-normal text-sm text-red-500">
                      {message}
                    </p>
                  );
                }}
              />

              <input
                type="text"
                {...register("soDT", { required: "Phone Number is required" })}
                className="border border-black w-full p-3 font-normal outline-none my-2"
                placeholder="Phone Number"
              />
              <ErrorMessage
                errors={errors}
                name="soDT"
                render={({ message }) => {
                  return (
                    <p className="font-normal text-sm text-red-500">
                      {message}
                    </p>
                  );
                }}
              />
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Email is not valid !!!",
                  },
                })}
                className="border border-black w-full p-3 font-normal outline-none my-2"
                placeholder="Email"
              />
              <ErrorMessage
                errors={errors}
                name="email"
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
                className=" bg-black py-3 px-4 text-lg text-white my-5"
              >
                Update Profile
              </button>
            </form>

            <span
              id="successNotification"
              className="font-normal text-green-600 w-full text-start text-sm inline-block hidden"
            >
              {successData}
            </span>
            <span
              id="failNotification"
              className="font-normal text-red-600 w-full text-start text-sm inline-block hidden"
            >
              {failData}
            </span>
          </li>
          <li className="py-3">
            <h2>Link:</h2>
          </li>
          <li>
            <form action="#">
              <input
                type="text"
                className="border border-black w-full p-3 font-normal outline-none my-2"
                placeholder="Website (https://)"
              />
              <input
                type="text"
                className="border border-black w-full p-3 font-normal outline-none my-2"
                placeholder="Last-name"
              />
              <input
                type="text"
                className="border border-black w-full p-3 font-normal outline-none my-2"
                placeholder="Headline"
              />

              <input
                className="w-full border border-black p-3 font-normal outline-none rounded-none my-2"
                placeholder="Twitter Profile"
              />
              <span className="font-normal text-sm text-gray-600 outline-none">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </span>

              <input
                className="w-full border border-black p-3 font-normal outline-none rounded-none my-2"
                placeholder="Facebook Profile"
              />
              <span className="font-normal text-sm text-gray-600 outline-none">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </span>

              <input
                className="w-full border border-black p-3 font-normal outline-none rounded-none my-2"
                placeholder="LinkIn Profile"
              />
              <span className="font-normal text-sm text-gray-600 outline-none">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </span>

              <input
                className="w-full border border-black p-3 font-normal outline-none rounded-none my-2"
                placeholder="YouTube Profile"
              />
              <span className="font-normal text-sm text-gray-600 outline-none">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </span>
            </form>
          </li>

          <li>
            <button className=" bg-black py-3 px-4 text-lg text-white my-5">
              Save
            </button>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default PublicProfile;
