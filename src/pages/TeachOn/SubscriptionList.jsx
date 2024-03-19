import React, { useEffect, useState } from 'react'
import { Table,message } from "antd";
import { CoursesService } from '../../services/CoursesService';

const SubscriptionList = ({courseId}) => {
    const [messageApi, contextHolder] = message.useMessage();
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
          title: "Hành động",
          key: "hanhDong",
          render: (_, record) => (
            <div className="space-x-3">
              <button
                type="button"
                onClick={() => {
                  CoursesService.cancelRegistration({
                    'maKhoaHoc': courseId,
                    'taiKhoan': record.taiKhoan
                  }).then((result) => {
                    messageApi.open({
                        type: "success",
                        content: "Success removed the student",
                      });
                  }).catch((err) => {
                    message.error('Error occurred, cannot remove the student');
                  });
                }}
                className="text-white bg-red-600 py-2 px-4 rounded-md"
              >
                Cancel registration
              </button>
            </div>
          ),
        },
      ]
    const [studentList,setStudentList] = useState([])
    useEffect(() =>{
        CoursesService.getCourseStudentList({
            "maKhoaHoc": courseId
        }).then((result) => {
            setStudentList(result.data)
        }).catch((err) => {
        });
    },[courseId])

  return (
    <div className='w-full'>
        <Table
            columns={columns}
            dataSource={studentList ? studentList : []}
            pagination={{
              pageSize: 10,
            }}
          />
    </div>
  )
}

export default SubscriptionList