import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
        uid: null,
        email: null,
        displayName: null,
        rol: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        loginAdmin: ( state, { payload } ) => {
            state.status = 'admin', // 'checking', 'not-authenticated', 'authenticated'
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.rol = payload.rol;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        login: ( state, { payload } ) => {
            state.status = 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.rol = payload.rol;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: ( state, { payload } ) => {
            state.status = 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.rol = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, loginAdmin, logout, checkingCredentials } = authSlice.actions;

