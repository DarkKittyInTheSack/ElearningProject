import { https } from "./configServ";

export const signUp = {
  SignUp: (data) => {
    return https.post("/api/QuanLyNguoiDung/DangKy", data);
  },
  

};
