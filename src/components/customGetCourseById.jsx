import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataThunk } from "../redux/reducer/coursesByIDSlice";

export function useCourseById(id){
    const { courses } = useSelector((state) => state.coursesByIDSlice);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getDataThunk(id))
    },[])

    return courses
}