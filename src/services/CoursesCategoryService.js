import { https } from "./configService"

export const CoursesCategoryService = {
    getAllCategory: () =>{
        return https.get('/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
    }
}