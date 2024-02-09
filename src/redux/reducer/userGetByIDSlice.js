import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UserService } from '../../services/UserService';

export const getUserByIdThunk = createAsyncThunk('userGetByIDSlice/getUserByIDThunk', async (id) =>{
    try {
        const dataThunk = await UserService.getUserById(id)
        return dataThunk.data[0]
    } catch (error) {
        return error
    }
})

const initialState = {
    user: {}
}

const userGetByIDSlice = createSlice({
  name: 'userGetByIDSlice',
  initialState,
  reducers: {
    fetchUserData: (state,actions) =>{

    },

    getDataFromfetch: (state,actions) =>{
        state.user = actions.payload
    }
  },
  extraReducers: (builder) =>{
    builder.addCase(getUserByIdThunk.fulfilled,(state,actions) =>{
        state.user = actions.payload
    })
  }
});

export const {fetchUserData,getDataFromfetch} = userGetByIDSlice.actions

export default userGetByIDSlice.reducer