import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchCoursesCategory } from '../redux/reducer/coursesCategorySlice'

export function useAllCategory(){
    const dispatch = useDispatch()
    const {category} = useSelector((state) => state.coursesCategorySlice)

    useEffect(() =>{
        dispatch(fetchCoursesCategory())
    },[])

    return category
}