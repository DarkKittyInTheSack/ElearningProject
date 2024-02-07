import { https } from "./configServ";

export const userLogin = {
  loginServ: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", data);
  },
};
