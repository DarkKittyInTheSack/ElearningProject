import axios from "axios";
import { https } from "./configService";
import { getLocalStore } from "../utils/local";

const dataUser = getLocalStore("user_info");
export const AdminCourseManagerService = {
    getUserNotSubscribeCourses: (data) =>{
        return axios.post(
            'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh',data,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${dataUser.accessToken}`,
                    "TokenCybersoft": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsIkhldEhhblN0cmluZyI6IjMwLzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNzAyNzIwMDAwMCIsIm5iZiI6MTY5MjI5MTYwMCwiZXhwIjoxNzE3MTc0ODAwfQ.7MW8E_eXXd0bcbNFchNRQTlWpRBVvM0yUAkLRSo12ws'
                },
            }
        )
    }
}