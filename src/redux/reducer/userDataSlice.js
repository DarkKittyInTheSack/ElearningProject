import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userList: []
}

const userDataSlice = createSlice({
  name: 'userDataSlice',
  initialState,
  reducers: {
    getAllUser: (state) =>{

    },

    fetchUserToState: (state,actions) =>{
        state.userList = actions.payload
    }
  }
});

export const {getAllUser,fetchUserToState} = userDataSlice.actions

export default userDataSlice.reducer