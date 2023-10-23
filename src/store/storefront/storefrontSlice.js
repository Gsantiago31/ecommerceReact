import { createSlice } from '@reduxjs/toolkit';

export const storefrontSlice = createSlice({
    name: 'publicApp',
    initialState: {
        products: [],
        wishList: [],
        active: null,
        activeWishProduct: [],
        cart: []
    },
   reducers: {
        setProducts: (state, action ) => {
            state.products = action.payload;
        },
        setWishProducts: (state, action ) => {
            state.wishList = action.payload;
        },
        setCart: (state, action) => {
            state.cart = action.payload;
        },
        addNewEmptyCartProduct: (state, action) => {
            state.cart.push( action.payload );
        },
        deleteCartProductById: ( state, action) => {
            state.cart = state.cart.filter( cart => cart.id !== action.payload );
        },
        addNewEmptyWishProduct: (state, action ) => {
            state.wishList.push( action.payload );
        },
        setActiveWishProduct: (state, action ) => {
            state.activeWishProduct = action.payload;
        },
        deleteWishProductById: (state, action ) => {
            state.activeWishProduct = null;
            state.wishList = state.wishList.filter( wishList => wishList.id !== action.payload );
        },
    }
});


// Action creators are generated for each case reducer function
export const { setProducts, setWishProducts, deleteWishProductById, addNewEmptyWishProduct, setActiveWishProduct, addNewEmptyCartProduct, setCart, deleteCartProductById } = storefrontSlice.actions;