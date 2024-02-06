import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CoursesService } from '../../services/CoursesService';

export const getDataThunk = createAsyncThunk('coursesByID/getByThunk', async (id) =>{
    try {
        const dataThunk = await CoursesService.getCoursesByID(id)
        return dataThunk.data
    } catch (error) {
        return error
    }
})


const initialState = {
    courses: {}
}

const coursesByIDSlice = createSlice({
  name: 'coursesByID',
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(getDataThunk.fulfilled, (state,action) =>{
        state.courses = action.payload
    })
  }
});

export const {} = coursesByIDSlice.actions

export default coursesByIDSlice.reducer