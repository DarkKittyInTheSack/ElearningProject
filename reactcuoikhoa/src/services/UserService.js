import { https } from "./configService"

export const UserService = {
    userLogin: (data) =>{
        return https.post('/api/QuanLyNguoiDung/DangNhap',data)
    }
}