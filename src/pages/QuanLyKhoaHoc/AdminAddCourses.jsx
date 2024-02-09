import React, { useEffect, useState } from "react";
import {Input,DatePicker} from 'antd'
import { useForm } from "react-hook-form";

import { fetchCoursesCategory } from "../../redux/reducer/coursesCategorySlice";
import { getLocalStore } from "../../utils/local";
import moment from "moment";
import { CoursesService } from "../../services/CoursesService";
import { useRecoilValue } from "recoil";
import { fetchCategoryRecoil } from "../../redux/recoil/categoryRecoil";
const {TextArea} = Input

const AdminAddCourses = () => {
    const [imagePicker, setImagePicker] = useState()
    const [dateTimePicker,setDatetimePicker] = useState('')
    const user = getLocalStore('user_info')
    const category = useRecoilValue(fetchCategoryRecoil)

    const {register, handleSubmit, formState: {errors},setValue} = useForm(
        {
            defaultValues:{
                maKhoaHoc: "",
                biDanh: '',
                tenKhoaHoc: '',
                moTa: "",
                luotXem: 0,
                danhGia: 0,
                hinhAnh: "",
                maNhom: "GP01",
                ngayTao: "",
                maDanhMucKhoaHoc: "",
                taiKhoanNguoiTao: user.taiKhoan
            }
        }
    )
    
    const onSubmit = (data, {resetForm}) =>{
        data.hinhAnh = data.hinhAnh[0]
        data.ngayTao = dateTimePicker
        
        let formDataSubmit = new FormData()
        for(let key in data){
            if(key === 'hinhAnh'){
                formDataSubmit.append('File',data[key])
            }else{
                formDataSubmit.append(key,data[key])
            }
        }

        CoursesService.addNewCourses(data)
        .then((result) => {
            CoursesService.uploadFileImageCourses(formDataSubmit)
            .then((result) => {

            }).catch((err) => {

            });
            resetForm()
        }).catch((err) => {

        });
    }

    return (
      <div className="container mx-auto">
        <div className="mb-10">
          <h2 className="font-bold font-sans text-2xl ">Add new Course</h2>
          <span className="font-normal text-base my-3 ">Share your knowledge for everyone</span>
        </div>
  
        <form onSubmit={handleSubmit(onSubmit)}>
            <ul className="font-bold space-y-3">
                <li>
                    <div className="flex items-center space-x-2">
                        <div className="w-1/2">
                            <input
                            type="text"
                            {...register('maKhoaHoc',{required: 'Course Code is required'})}
                            placeholder="Course Code"
                            className="font-normal text-base p-3 placeholder:font-bold outline-none border border-black w-full"
                            />
                        </div>
                        
                        <div className="w-1/2">
                            <input
                            type="text"
                            {...register('biDanh',{required: 'Course Alias is required'})}
                            placeholder="Course Alias"
                            className="font-normal text-base p-3 placeholder:font-bold outline-none border border-black w-full"
                            />
                        </div>
                        
                    </div>
                </li>
                <li>
                    <input
                            type="text"
                            {...register('tenKhoaHoc',{required: 'Course Code is required'})}
                            placeholder="Course Name"
                            className="font-normal text-base p-3 placeholder:font-bold outline-none border border-black w-full"
                            />
                </li>
                <li>
                    <textarea
                    {...register('moTa')}
                    className="font-bold text-base p-3 placeholder:font-bold outline-none border border-black w-full rounded-none hover:border-black" rows={4} placeholder='Course Description '/>
                </li>
                <li>
                    <select
                        {...register('maDanhMucKhoaHoc', 'Course Category is required')}
                     className="font-bold text-base p-3 placeholder:font-bold outline-none border border-black w-full">
                        <option value="" className="font-bold text-base block">
                        Course Category
                        </option>
                        {
                        category ? (
                            category.map((item) =>{
                                const {maDanhMuc,tenDanhMuc} = item
                                const categoryKey = 'categoryAdminKeyData' + maDanhMuc
                                return <option key={categoryKey} value={maDanhMuc}>{tenDanhMuc}</option>
                            })
                        ): null
                        }
                    </select>
                </li>
            </ul>
            <ul className="font-bold space-y-3 my-10">
                <li>
                    <label htmlFor="date">Date created:</label>
                    <DatePicker
                     {...register('ngayTao',
                    //   {required: 'Date created is required'}
                      )}className="mx-3 font-bold text-base"
                       onChange={(date, dateString) => {
                        setDatetimePicker(dateString.replaceAll('-','/'))
                       }} format={'DD-MM-YYYY'}/>
                </li>
                <li>
                    <label htmlFor="image">Course Image:</label>
                    <input type="file"
                    {...register('hinhAnh',{required:'Course Image is required'})}
                     accept="image/*" 
                    className="mx-3"
                        onChange={(event) =>{
                        const image = event.target.files[0]
                            if(image){
                                const imageUrl = URL.createObjectURL(image)
                                setImagePicker(imageUrl)
                            }
                        }} />
                    <div className="w-1/4 my-3">
                        <img src={imagePicker} alt="" className="w-full block"/>
                    </div>
                
                </li>
                <li>
                    <button type="submit" className="bg-black text-base font-bold py-3 w-full text-white my-10">
                        Submit
                    </button>
                </li>
            </ul>
        </form>
      </div>
    );
}

export default AdminAddCourses