import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { fetchCourses } from "../redux/reducer/userHomePageSlice";

export function useCoursesByCategory(categoryId){

    const {courses} = useSelector((state) => state.userHomePageSlice)
    const dispatch = useDispatch()
    const [coursePick,setCoursePick] = useState([])
    let arr = []

    useEffect(() =>{
        dispatch(fetchCourses())
        if(courses.length != 0){
            courses.forEach((item) => {
                if(item.danhMucKhoaHoc.maDanhMucKhoahoc === categoryId){
                    arr.push(item)
                }
            });
            setCoursePick(arr)
        }
    },[])

    

    if(coursePick.length != 0){
        return coursePick
    }else{
        return []
    }
    
}