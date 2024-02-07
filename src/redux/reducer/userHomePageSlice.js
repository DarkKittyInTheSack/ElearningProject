import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    courses: []
}

const userHomePageSlice = createSlice({
  name: 'userHome',
  initialState,
  reducers: {
    fetchCourses: (state) =>{

    },
    getAllCourses: (state,actions) =>{
        state.courses = actions.payload
    }
  },
});

export const {getAllCourses,fetchCourses} = userHomePageSlice.actions

export default userHomePageSlice.reducer