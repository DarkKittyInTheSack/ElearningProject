import { https } from "./configService"
import axios from "axios";
import { getLocalStore } from "../utils/local";

const dataUser = getLocalStore("user_info");
export const CoursesService = {
    getAllCourses: () =>{
        return https.get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
    },

    getCoursesByID: (id) =>{
        return https.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`)
    },

    getCoursesByCategory: (categoryType) =>{
        return https.get(`/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${categoryType}&MaNhom=GP01`)
    },

    getCoursesPaging: (coursesKey,page,pageSize) =>{
        return https.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?tenKhoaHoc=${coursesKey}&page=${page}&pageSize=${pageSize}&MaNhom=GP01`)
    },

    subscribeCourse: (data) =>{
        return axios.post(
            "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc",
            data,
            {
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${dataUser.accessToken}`,
                "TokenCybersoft": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsIkhldEhhblN0cmluZyI6IjMwLzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNzAyNzIwMDAwMCIsIm5iZiI6MTY5MjI5MTYwMCwiZXhwIjoxNzE3MTc0ODAwfQ.7MW8E_eXXd0bcbNFchNRQTlWpRBVvM0yUAkLRSo12ws'
              },
            }
          )
    },

    getCoursesByAccount: (accountId) =>{
        return https.post('/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet',accountId)
    },

    unSubscribeCourses: (data) =>{
        return axios.post(
            "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh",
            data,
            {
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${dataUser.accessToken}`,
                "TokenCybersoft": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsIkhldEhhblN0cmluZyI6IjMwLzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNzAyNzIwMDAwMCIsIm5iZiI6MTY5MjI5MTYwMCwiZXhwIjoxNzE3MTc0ODAwfQ.7MW8E_eXXd0bcbNFchNRQTlWpRBVvM0yUAkLRSo12ws'
              },
            }
          )
    },
    deleteCourses: (data) =>{
        return axios.delete(
            `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${data}`,
            {
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${dataUser.accessToken}`,
                "TokenCybersoft": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsIkhldEhhblN0cmluZyI6IjMwLzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNzAyNzIwMDAwMCIsIm5iZiI6MTY5MjI5MTYwMCwiZXhwIjoxNzE3MTc0ODAwfQ.7MW8E_eXXd0bcbNFchNRQTlWpRBVvM0yUAkLRSo12ws'
              },
            }
          )
    },
    addNewCourses: (data) =>{
      return axios.post(
        'https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc',
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${dataUser.accessToken}`,
            "TokenCybersoft": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsIkhldEhhblN0cmluZyI6IjMwLzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNzAyNzIwMDAwMCIsIm5iZiI6MTY5MjI5MTYwMCwiZXhwIjoxNzE3MTc0ODAwfQ.7MW8E_eXXd0bcbNFchNRQTlWpRBVvM0yUAkLRSo12ws'
          },
        }
      )
    },

    uploadFileImageCourses: (data) =>{
      return https.post('/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc',data)
    }
}