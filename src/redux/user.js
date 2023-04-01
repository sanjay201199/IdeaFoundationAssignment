import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userDetails: (state, action) => {
      debugger
      state.user = {...state.user, ...action.payload}
    },
  },
})

// Action creators are generated for each case reducer function
export const { userDetails } = userSlice.actions

export default userSlice.reducer