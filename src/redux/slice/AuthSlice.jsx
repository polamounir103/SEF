import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    auth: null,
    isloading: true
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setActiveUserHandler: (state, action) => {
            state.isloading = false;
            state.auth = action.payload;
        },
        removeActiveUserHandler: (state) => {
            state.isloading = false;
            state.auth = null;
        },
    },
})
export const authuser = state => state.auth.auth
export const isloading = state => state.auth.isloading
export const { setActiveUserHandler, removeActiveUserHandler } = authSlice.actions
export default authSlice
