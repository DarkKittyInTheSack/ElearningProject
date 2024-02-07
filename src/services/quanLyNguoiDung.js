import { https } from "./configServ";

export const QuanLyNguoiDung = {
  layDanhSachLoaiNguoiDung: () => {
    return https.get(`/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung
        `);
  },
};
