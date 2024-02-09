import axios from "axios";
import { https } from "./configService";
import { getLocalStore } from "../utils/local";

const dataUser = getLocalStore("user_info")
export const UserService = {
  userLogin: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);
  },

  deleteUser: (id) => {
    return axios.delete(
      `https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${dataUser.accessToken}`,
          "TokenCybersoft": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsIkhldEhhblN0cmluZyI6IjMwLzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNzAyNzIwMDAwMCIsIm5iZiI6MTY5MjI5MTYwMCwiZXhwIjoxNzE3MTc0ODAwfQ.7MW8E_eXXd0bcbNFchNRQTlWpRBVvM0yUAkLRSo12ws'
        },
      }
    )
  },

  updateUser: (data) => {
    return axios.put(
      "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
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

  getAllUser: () =>{
    return https.get('/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01')
  },

  getUserById: (id) =>{
    return https.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${id}`)
  },

  addNewUser: (data) =>{
    return axios.post(
      "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${dataUser.accessToken}`,
          "TokenCybersoft": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsIkhldEhhblN0cmluZyI6IjMwLzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNzAyNzIwMDAwMCIsIm5iZiI6MTY5MjI5MTYwMCwiZXhwIjoxNzE3MTc0ODAwfQ.7MW8E_eXXd0bcbNFchNRQTlWpRBVvM0yUAkLRSo12ws'
        },
      }
    )
  }
};
