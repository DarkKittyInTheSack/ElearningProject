import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../redux/reducer/userDataSlice";
import { UserService } from "../../services/UserService";

const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDt",
      key: "soDt",
    },
    {
      title: "Hành động",
      key: "hanhDong",
      render: (_, record) => (
        <div className="space-x-3">
          <button
            type="button"
            onClick={() => {
              UserService.deleteUser(record.taiKhoan)
              .then((result) => {
                console.log(result)
              }).catch((err) => {
                console.log(err)
              });
            }}
            className="text-white bg-red-600 py-2 px-4 rounded-md"
          >
            Xóa
          </button>
          <Link to={`/admin/updateStudent/${record.taiKhoan}`}
            className="text-white bg-yellow-600 py-2 px-4 rounded-md"
          >
            Sửa
          </Link>
        </div>
      ),
    },
  ]
 const QuanLyTaiKhoanHV = () => {
    const dispatch = useDispatch();
    const { userList } = useSelector((state) => state.userDataSlice);
    const [userListFilter, setUserlistFilter] = useState([]);

    useEffect(() => {
      dispatch(getAllUser());
      setUserlistFilter(
        userList.filter((data) => data.maLoaiNguoiDung === "HV")
      );
    }, []);

    return (
      <div>
        <h2 className="font-bold text-2xl">Quản lý tài khoản Học Viên</h2>
        <div className="flex items-center justify-between">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-10/12  p-2 my-3"
            placeholder="Nhập tài khoản bạn muốn tìm kiếm"
            onChange={(event) =>{
              setUserlistFilter(
                userList.filter((data) => data.maLoaiNguoiDung === "HV" && data.taiKhoan.includes(event.target.value) )
              )
            }}
          />

          <Link
            to={"/admin/addNewStudent"}
            className="px-3 py-2 bg-black rounded text-white font-bold"
          >
            Thêm học viên
          </Link>
        </div>
        {userListFilter.length > 0 ? (
          <Table
            columns={columns}
            dataSource={userListFilter}
            pagination={{
              pageSize: 10,
            }}
          />
        ) : (
          <Table
            columns={columns}
            dataSource={userList.filter(
              (data) => data.maLoaiNguoiDung === "HV"
            )}
            pagination={{
              pageSize: 10,
            }}
          />
        )}
      </div>
    );
  };

export default QuanLyTaiKhoanHV;
