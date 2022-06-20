import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: null,
    token: null,
    refreshToken: null,
    userId: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.refreshToken = action.refreshToken;
            state.userId = action.payload.id;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.refreshToken = null;
            state.userId = null;

            localStorage.removeItem("user");
        }
    },
})

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;