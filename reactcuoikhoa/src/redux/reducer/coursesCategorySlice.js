import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    category: []
}

const coursesCategorySlice = createSlice({
  name: 'coursesCategory',
  initialState,
  reducers: {
    fetchCoursesCategory: (state) =>{

    },
    getAllCoursesCategory: (state,action) =>{
        state.category = action.payload
    }
  }
});

export const {fetchCoursesCategory,getAllCoursesCategory} = coursesCategorySlice.actions

export default coursesCategorySlice.reducer