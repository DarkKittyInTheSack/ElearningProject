import {  createSlice } from '@reduxjs/toolkit'


const initialState = {
    coursesByCategory :[]
}

const coursesByCategorySlice = createSlice({
  name: 'coursesByCategory',
  initialState,
  reducers: {
    getDataToFetch: (state,action) =>{

    },

    getCoursesByCategory: (state,action) =>{
        state.coursesByCategory = action.payload
    }
  }
});

export const {getDataToFetch,getCoursesByCategory} = coursesByCategorySlice.actions

export default coursesByCategorySlice.reducer