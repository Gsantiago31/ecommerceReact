import { collection, doc, setDoc } from "firebase/firestore/lite";
import { useSelector } from "react-redux";
import { stringify } from "uuid";
import { FirebaseDB } from "../../firebase/config";
import { loadPublicProducts } from "../../helpers";
import { addNewEmptyCartProduct, addNewEmptyWishProduct, deleteCartProductById, deleteWishProductById, setActiveWishProduct, setProducts, setWishProducts } from "./storefrontSlice";
import { v4 as uuid } from 'uuid';

export const startLoadingPublicProducts = () => {
    return async (dispatch) => {

        const uid = 'eu1fjYLeV8cxmKcYfLDBAHIB97y2'
        // if ( !uid ) throw new Error('El UID del usuario no existe');

        const products = await loadPublicProducts(uid);
        dispatch(setProducts(products));

        // Obtener los datos actuales del objeto de LocalStorage
        const localStorageData = JSON.parse(localStorage.getItem('wishListViV_Twins')) || [];

        if (!Array.isArray(localStorageData)) {
            // Si los datos no son un array, establecerlos como un array vacío
            localStorageData = [];
        }

        dispatch(setWishProducts(localStorageData));

    }
}

export const startNewWishProduct = (id, imageUrls = [], price, title) => {
    return async (dispatch, getState) => {

        // const { wishList } = getState().storefront;

        // const id = wishList.activeWishProduct;

        const newWishProduct = {
            id,
            imageUrls,
            price,
            title
        }
        console.log('probando')
        //! dispatch 

        dispatch(addNewEmptyWishProduct(newWishProduct));

        const localStorageData = JSON.parse(localStorage.getItem('wishListViV_Twins')) || [];

        if (!Array.isArray(localStorageData)) {
            // Si los datos no son un array, establecerlos como un array vacío
            localStorageData = [];
        }

        // Agregar el nuevo dato al array
        localStorageData.push(newWishProduct);

        // Guardar los datos actualizados en LocalStorage
        localStorage.setItem('wishListViV_Twins', JSON.stringify(localStorageData));

    }
}

export const startDeleteWishProduct = (id) => {
    return async (dispatch) => {

        console.log(`borrar ${id}`)
        //! dispatch 

        dispatch(deleteWishProductById(id))

        // Obtener los datos actuales del objeto de LocalStorage
        const datosLocalStorage = JSON.parse(localStorage.getItem('wishListViV_Twins')) || [];

        // Remover el dato con el id especificado del objeto
        const datosActualizados = datosLocalStorage.filter(dato => dato.id !== id);

        // Guardar los datos actualizados en LocalStorage
        localStorage.setItem('wishListViV_Twins', JSON.stringify(datosActualizados));

    }
}

export const startNewCartProduct = (imageUrls = [], price, title) => {
    return async (dispatch, getState) => {

        // const { wishList } = getState().storefront;

        // const id = wishList.activeWishProduct;

        const id = uuid(); 

        const newCartProduct = {
            id,
            imageUrls,
            price,
            title
        }

        dispatch(addNewEmptyCartProduct(newCartProduct));
    }
}

export const startDeleteCartProduct = (id) => {
    return async (dispatch) => {

        console.log(`borrar ${id}`)
        //! dispatch 

        dispatch(deleteCartProductById (id))

    }
}