import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { CoursesService } from "../../services/CoursesService";
import {useDispatch, useSelector} from 'react-redux'
import { fetchCourses } from "../../redux/reducer/userHomePageSlice";

const columns = [
  {
    title: "Tên Khóa Học",
    dataIndex: "tenKhoaHoc",
    key: "tenKhoaHoc",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Hình Ảnh",
    dataIndex: "hinhAnh",
    key: "hinhAnh",
    render: (hinhAnh) => {
      return <img src={hinhAnh} className="w-20" />;
    },
  },
  {
    title: "Người Tạo",
    dataIndex: "nguoiTao",
    key: "nguoiTao",
    render: (nguoiTao) => <p>{nguoiTao.hoTen}</p>,
  },

  {
    title: "Hành động",
    key: "hanhDong",
    render: (_, record) => (
      <div className="space-x-3">
        <button onClick={() =>{
          CoursesService.deleteCourses(record.maKhoaHoc)
          .then((result) => {

          }).catch((err) => {

          });
        }} className="text-white bg-red-600 py-2 px-4 rounded-md">
          Xóa
        </button>
        <Link className="text-white bg-yellow-600 py-2 px-4 rounded-md">
          Sửa
        </Link>
      </div>
    ),
  },
];
const QuanLyKhoaHoc = () => {

  const {courses} = useSelector((state) => state.userHomePageSlice)
  const dispatch = useDispatch()

  const [coursesDisplay, setCoursesDisplay] = useState([]);

  useEffect(() => {
    dispatch(fetchCourses())
    setCoursesDisplay(courses);
  }, []);

  return (
    <div>
      <h2 className="font-bold text-2xl">Quản lý tài khoản Giáo Viên</h2>
      <div className="flex items-center justify-between">
        <input
          type="text"
          id="moTa"
          name="moTa"
          className="bg-gray-50 w-10/12 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 my-3 outline-none"
          placeholder="Nhập khóa học bạn muốn tìm kiếm"
        />

        <Link to={'/admin/addCourses'} className="py-2 px-3 bg-black font-bold text-base text-white rounded">
          Thêm Khóa học
        </Link>
      </div>
      {coursesDisplay.length > 0 ? (
        <Table
          columns={columns}
          dataSource={coursesDisplay}
          pagination={{
            pageSize: 10,
          }}
        />
      ) : (
        <Table
          columns={columns}
          dataSource={courses}
          pagination={{
            pageSize: 10,
          }}
        />
      )}
    </div>
  );
};

export default QuanLyKhoaHoc;
