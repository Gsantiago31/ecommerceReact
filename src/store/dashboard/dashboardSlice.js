import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        isSaving: false,
        messageSaved: '',
        products: [],
        active: null,
    },
    reducers: {
        savingNewProduct: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyProduct: (state, action ) => {
            state.products.push( action.payload );
            state.isSaving = false;
        },
        setActiveProduct: (state, action ) => {
            state.active = action.payload;
            state.messageSaved = '';
        },
        setProducts: (state, action ) => {
            state.products = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
            // TODO: mensaje de error...
        },
        updateProduct: (state, action ) => { // payload : note
            state.isSaving = false;
            state.products = state.products.map(product => {

                if (product.id === action.payload.id) {
                    return action.payload;
                }

                return product;
            });

            // Todo: Mostrar mensaje de actualización
            state.messageSaved = `${ action.payload.title }, actualizada correctamente`;
        },
        setPhotosToActiveProduct: ( state, action) => {
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
            state.isSaving = false;
        },
        clearProductsLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.products = [];
            state.active = null;
        },
        deleteProductById: (state, action ) => {
            state.active = null;
            state.products = state.products.filter( product => product.id !== action.payload );
        }
    }
});


// Action creators are generated for each case reducer function
export const { savingNewProduct, addNewEmptyProduct, setActiveProduct, setProducts, setSaving, updateProduct, setPhotosToActiveProduct, clearProductsLogout, deleteProductById } = dashboardSlice.actions;