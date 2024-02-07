import { https } from "./configService"

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
    }
}