import { createSlice } from '@reduxjs/toolkit';

export const analythicSlice = createSlice({
    name: 'analythic',
    initialState: {
        users: [],
        sales: [],
        orders: [],
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        addNewUser: (state, action ) => {
            state.users.push( action.payload );
            state.isSaving = false;
        },
        setSales: (state, action) => {
            state.users = action.payload;
        },
        addNewSale: (state, action ) => {
            state.sales.push( action.payload );
            state.isSaving = false;
        },
        setOrders: (state, action) => {
            state.users = action.payload;
        },
        addNewOrder: (state, action ) => {
            state.orders.push( action.payload );
            state.isSaving = false;
        },
        
    }
});


// Action creators are generated for each case reducer function
export const { setOrders, addNewOrder, setSales, addNewSale, setUsers, addNewUser } = analythicSlice.actions;