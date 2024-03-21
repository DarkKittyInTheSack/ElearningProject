import React, { useState } from "react";
import { CoursesService } from "../../services/CoursesService";
import { Link } from "react-router-dom";
import { Table } from "antd";

let input = ''
const columns = [
  {
    title: "Mã khóa học",
    dataIndex: "maKhoaHoc",
    key: "maKhoaHoc",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tên khóa học",
    dataIndex: "tenKhoaHoc",
    key: "tenKhoaHoc",
    render: (text) => <a>{text}</a>,
  },

  {
    title: "Hành động",
    key: "hanhDong",
    render: (_, record) => (
      <div className="space-x-3">
        <button
          onClick={() => {
            CoursesService.unSubscribeCourses(record.maKhoaHoc)
              .then((result) => {})
              .catch((err) => {
                
              });
          }}
          className="text-white bg-red-600 py-2 px-4 rounded-md"
        >
          Hủy xét duyệt
        </button>

        <button
          onClick={() => {
            CoursesService.RegisterStudent({
                "maKhoaHoc": record.maKhoaHoc,
              "taiKhoan": input
            })
              .then((result) => {
                window.location.href = 'http://localhost:3000/admin/qlgdkhcxd'
              })
              .catch((err) => {
                console.log(err)
              });
          }}
          className="text-white bg-green-600 py-2 px-4 rounded-md"
        >
          Ghi danh
        </button>
      </div>
    ),
  },
];
const QuanLyGhiDanhKhoaHocCHoXetDuyet = () => {
  const [course, setCourse] = useState([]);
  return (
    <div>
      <h2 className="font-bold text-2xl">
        Quản lý ghi danh khóa học chờ xét duyệt
      </h2>
      <div className="flex items-center justify-between">
        <input
          type="text"
          id="moTa"
          name="moTa"
          className="bg-gray-50 w-10/12 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 my-3 outline-none"
          placeholder="Nhập tài khoản bạn muốn tìm kiếm"
          onChange={(event) => {
            input = event.target.value
            CoursesService.getCourseSubscribeByStudentId({
              taiKhoan: event.target.value,
            })
              .then((result) => {
                console.log(result);
                setCourse(result.data);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        />
      </div>
      {course.length > 0 ? (
        <Table
          columns={columns}
          dataSource={course}
          pagination={{
            pageSize: 10,
          }}
        />
      ) : (
        <Table
          columns={columns}
          dataSource={course}
          pagination={{
            pageSize: 10,
          }}
        />
      )}
    </div>
  );
};

export default QuanLyGhiDanhKhoaHocCHoXetDuyet;
