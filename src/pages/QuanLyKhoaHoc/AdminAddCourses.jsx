import React, { useState } from "react";
import { Input, DatePicker } from "antd";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { getLocalStore } from "../../utils/local";
import { CoursesService } from "../../services/CoursesService";
import { useAllCategory } from "../../components/customCategoryHook";
const { TextArea } = Input;

const AdminAddCourses = () => {
  const [imagePicker, setImagePicker] = useState();
  const [dateTimePicker, setDatetimePicker] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const user = getLocalStore("user_info");
  const category = useAllCategory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: "",
      maNhom: "GP01",
      ngayTao: "",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: user.taiKhoan,
    },
  });

  const onSubmit = (data, { resetForm }) => {
    data.hinhAnh = data.hinhAnh[0];
    data.ngayTao = dateTimePicker;
    data.moTa = courseDescription;

    let formDataSubmit = new FormData();
    for (let key in data) {
      if (key === "hinhAnh") {
        formDataSubmit.append("File", data[key]);
      } else {
        formDataSubmit.append(key, data[key]);
      }
    }

    console.log(data);

    CoursesService.addNewCourses(formDataSubmit)
      .then((result) => {
        CoursesService.uploadFileImageCourses(formDataSubmit)
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
        console.log(result);
        resetForm();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mx-auto">
      <div className="mb-10">
        <h2 className="font-bold font-sans text-2xl ">Add new Course</h2>
        <span className="font-normal text-base my-3 ">
          Share your knowledge for everyone
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="font-bold space-y-3">
          <li>
            <input
              type="text"
              {...register("maKhoaHoc", {
                required: "Course Code is required",
                maxLength: {
                  value: 20,
                  message: "Course code max character is 20",
                },
                minLength: {
                  value: 6,
                  message: "Course code min character is 6",
                },
              })}
              placeholder="Course Code"
              className="font-normal text-base p-3 placeholder:font-bold outline-none border border-black w-full"
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
          </li>
          <li>
            <input
              type="text"
              {...register("biDanh", {
                required: "Course Alias is required",
                maxLength: {
                  value: 20,
                  message: "Course alias max character is 20",
                },
                minLength: {
                  value: 3,
                  message: "Course alias min character is 3",
                },
              })}
              placeholder="Course Alias"
              className="font-normal text-base p-3 placeholder:font-bold outline-none border border-black w-full"
            />
            <ErrorMessage
              errors={errors}
              name="biDanh"
              render={({ message }) => {
                return (
                  <p className="font-normal text-sm text-red-500">{message}</p>
                );
              }}
            />
          </li>
          <li>
            <input
              type="text"
              {...register("tenKhoaHoc", {
                required: "Course Code is required",
              })}
              placeholder="Course Name"
              className="font-normal text-base p-3 placeholder:font-bold outline-none border border-black w-full"
            />
            <ErrorMessage
              errors={errors}
              name="tenKhoaHoc"
              render={({ message }) => {
                return (
                  <p className="font-normal text-start text-sm text-red-500 mt-2">
                    {message}
                  </p>
                );
              }}
            />
          </li>
          <li>
            <TextArea
              onChange={(event) => {
                setCourseDescription(event.target.value);
              }}
              className="font-bold text-base p-3 placeholder:font-bold outline-none border border-black w-full rounded-none hover:border-black"
              rows={4}
              placeholder="Course Description "
            />
            <ErrorMessage
              errors={errors}
              name="moTa"
              render={({ message }) => {
                return (
                  <p className="font-normal text-start text-sm text-red-500 mt-2">
                    {message}
                  </p>
                );
              }}
            />
          </li>
          <li>
            <select
              {...register("maDanhMucKhoaHoc", "Course Category is required")}
              className="font-bold text-base p-3 placeholder:font-bold outline-none border border-black w-full"
            >
              <option value="" className="font-bold text-base block">
                Course Category
              </option>
              {category
                ? category.map((item) => {
                    const { maDanhMuc, tenDanhMuc } = item;
                    const categoryKey = "categoryAdminKeyData" + maDanhMuc;
                    return (
                      <option key={categoryKey} value={maDanhMuc}>
                        {tenDanhMuc}
                      </option>
                    );
                  })
                : null}
            </select>
          </li>
        </ul>
        <ul className="font-bold space-y-3 my-10">
          <li>
            <label htmlFor="date">Date created:</label>
            <DatePicker
              {...register("ngayTao")}
              className="mx-3 font-bold text-base"
              onChange={(date, dateString) => {
                setDatetimePicker(dateString.replaceAll("-", "/"));
              }}
              format={"DD-MM-YYYY"}
            />
            <ErrorMessage
              errors={errors}
              name="ngayTao"
              render={({ message }) => {
                return (
                  <p className="font-normal text-start text-sm text-red-500 mt-2">
                    {message}
                  </p>
                );
              }}
            />
          </li>
          <li>
            <label htmlFor="image">Course Image:</label>
            <input
              type="file"
              accept="image/*"
              {...register("hinhAnh", { required: "You must choose Image" })}
              className="mx-3"
              onChange={(event) => {
                const image = event.target.files[0];
                if (image) {
                  const imageUrl = URL.createObjectURL(image);
                  setImagePicker(imageUrl);
                }
              }}
            />
            <ErrorMessage
              errors={errors}
              name="hinhAnh"
              render={({ message }) => {
                return (
                  <p className="font-normal text-start text-sm text-red-500 mt-2">
                    {message}
                  </p>
                );
              }}
            />
            <div className="w-1/4 my-3">
              <img src={imagePicker} alt="" className="w-full block" />
            </div>
          </li>
          <li>
            <button
              type="submit"
              className="bg-black text-base font-bold py-3 w-full text-white my-10"
            >
              Create new Course
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default AdminAddCourses;
