
import { https } from "./configService";

export const AdminCourseManagerService = {
    getUserNotSubscribeCourses: (data) =>{
        return https.post('/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh',data)
    }
}