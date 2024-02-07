import { https } from "./configService"

export const UserService = {
    userLogin: (data) =>{
        return https.post('/api/QuanLyNguoiDung/DangNhap',data)
    },

    deleteUser: (id) =>{
        return https.delete('/api/QuanLyNguoiDung/XoaNguoiDung',id)
    }, 

    updateUser: (data) =>{
        return https.put('/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',data)
    }
}