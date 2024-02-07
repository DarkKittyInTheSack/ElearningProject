import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    coursesPaging: []
}

const coursesPagingSlice = createSlice({
  name: 'coursesPagingSlice',
  initialState,
  reducers: {
    fetchCoursesPaging: (state,action) =>{

    },
    getCoursesPaging: (state,action) =>{
        state.coursesPaging = action.payload
    }
  }
});

export const {fetchCoursesPaging,getCoursesPaging} = coursesPagingSlice.actions

export default coursesPagingSlice.reducer