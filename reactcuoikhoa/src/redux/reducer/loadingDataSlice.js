import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isActive: false,
    count: 0
}

const loadingDataSlice = createSlice({
  name: 'loadingDataSlice',
  initialState,
  reducers: {
    startedLoading: (state, action) => {
        state.isActive = true;
        state.count++
    },
    endedLoading: (state, action) => {
        state.count--
        if(state.count == 0){
          state.isActive = false
        }
    },
  }
});

export const {startedLoading,endedLoading} = loadingDataSlice.actions

export default loadingDataSlice.reducer