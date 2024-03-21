import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { AdminCourseManagerService } from "../../services/AdminCourseManagerService";
import { CoursesService } from "../../services/CoursesService";


let input = ''
const columns = [
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Bí danh",
      dataIndex: "nguoiTao",
      key: "nguoiTao",
      render: (text) => <p>{text}</p>,
    },
  
    {
      title: "Hành động",
      key: "hanhDong",
      render: (_, record) => (
        <div className="space-x-3">
          <button onClick={() =>{
            CoursesService.RegisterStudent({
              "maKhoaHoc": input,
              "taiKhoan": record.taiKhoan
            }).then((result) => {
              window.location.href = 'http://localhost:3000/admin/qlgdkh'
            }).catch((err) => {
              console.log(err)
            });
          }} className="text-white bg-green-500 py-2 px-4 rounded-md">
            Ghi danh
          </button>

        </div>
      ),
    },
];

const QuanLyGhiDanhKhoaHoc = () => {
    const [user,setUserList] = useState([])
  
    useEffect(() => {
    }, []);

    return (
        <div>
          <h2 className="font-bold text-2xl">Quản lý ghi danh khóa học</h2>
          <div className="flex items-center justify-between">
            <input
              type="text"
              id="moTa"
              name="moTa"
              onChange={(event) =>{
                input = event.target.value
                AdminCourseManagerService.getUserNotSubscribeCourses({
                    'MaKhoaHoc':event.target.value
                }).then((result) => {
                  setUserList(result.data)
                }).catch((err) => {
                    
                });
              }}
              className="bg-gray-50 w-10/12 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 my-3 outline-none"
              placeholder="Nhập khóa học bạn muốn tìm kiếm"
            />
          </div>
          {user.length > 0 ? (
            <Table
              columns={columns}
              dataSource={user}
              pagination={{
                pageSize: 10,
              }}
            />
          ) : (
            <Table
              columns={columns}
              dataSource={user}
              pagination={{
                pageSize: 10,
              }}
            />
          )}
        </div>
      );
}

export default QuanLyGhiDanhKhoaHoc