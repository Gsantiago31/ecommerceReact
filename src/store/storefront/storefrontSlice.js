import { createSlice } from '@reduxjs/toolkit';

export const storefrontSlice = createSlice({
    name: 'publicApp',
    initialState: {
        products: [],
    },
    reducers: {
        setProducts: (state, action ) => {
            state.products = action.payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setProducts } = storefrontSlice.actions;