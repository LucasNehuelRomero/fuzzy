import {createSlice} from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        SET_USER: (state, action) => {
            state.user = action.payload // dispatch(SET_USET({name: "javascriptdenoobapro"}))
            
        }
    }
})

export const {SET_USET} = userSlice.actions;

export default userSlice.reducer;