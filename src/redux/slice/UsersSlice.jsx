import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    usersdata: [],
    filteredusers: []
}
export const getUsers = createAsyncThunk('users/getUsers', async () => {
    return fetch('http://localhost:3000/src/DB/users.json')
        .then((respons) => { return respons.json() })
});
const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        filterUsersBySearch(state, action) {
            const { users, search } = action.payload;
            let temp = []
            users.filter((user) => {
                if (user.username.toLowerCase().includes(search.toLowerCase())) {
                    temp.push(user)
                }
            })

            state.filteredusers = temp;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, () => { })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.usersdata = []
            for (const key in action.payload) {
                state.usersdata.push({
                    id: action.payload[key].userID,
                    username: action.payload[key].username,
                    email: action.payload[key].email,
                    phoneNumber: action.payload[key].phone,
                    photoimage: action.payload[key].image,
                    role: action.payload[key].role,
                })
            }
        })
        builder.addCase(getUsers.rejected, () => { })
    }
});
export const { filterUsersBySearch } = usersSlice.actions;
export const usersdata = (state) => state.users.usersdata;
export const filterusers = (state) => state.users.filteredusers;
export default usersSlice;
