
import { loadPublicProducts } from "../../helpers";
import { addNewEmptyCartProduct, addNewEmptyWishProduct, deleteCartProductById, deleteWishProductById,setCart, setProducts, setWishProducts } from "./storefrontSlice";
import { v4 as uuid } from 'uuid';
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const startLoadingPublicProducts = () => {
    return async (dispatch) => {

        const uid = 'eu1fjYLeV8cxmKcYfLDBAHIB97y2'
        // if ( !uid ) throw new Error('El UID del usuario no existe');

        const products = await loadPublicProducts(uid);
        dispatch(setProducts(products));

        // Obtener los datos actuales del objeto de LocalStorage
        let localStorageData = JSON.parse(localStorage.getItem('wishListViV_Twins')) || [];

        if (!Array.isArray(localStorageData)) {
            // Si los datos no son un array, establecerlos como un array vacío
            localStorageData = [];
        }

        dispatch(setWishProducts(localStorageData));

    }
}

export const startNewWishProduct = (id, imageUrls = [], price, title) => {
    return async (dispatch, getState) => {
  
      const { auth } = getState(); // Obtén la parte del estado que contiene la información de autenticación
      const { uid } = auth; // Obtiene el UID del usuario actual
  
      const newWishProduct = {
        id,
        imageUrls,
        price,
        title,
      };
  
      dispatch(addNewEmptyWishProduct(newWishProduct));
  
      let localStorageData = JSON.parse(localStorage.getItem('wishListViV_Twins')) || [];
  
      if (!Array.isArray(localStorageData)) {
        // Si los datos no son un array, establecerlos como un array vacío
        localStorageData = [];
      }
  
      // Agregar el nuevo dato al array
      localStorageData.push(newWishProduct);
  
      // Guardar los datos actualizados en LocalStorage
      localStorage.setItem('wishListViV_Twins', JSON.stringify(localStorageData));
  
      if (uid) {
        // Si hay un UID disponible, sube el producto de deseo a Firebase
        // Utiliza las funciones de Firebase adecuadas según la estructura de datos que estés utilizando (Firestore, Realtime Database, etc.)
        // Por ejemplo, para subir a Firestore:
        try {
          const docRef = doc(FirebaseDB, `users/${uid}/wishlist/${newWishProduct.id}`);
  
          // Sube los datos del producto de deseo al documento
          await setDoc(docRef, newWishProduct);
        } catch (error) {
          console.log('Error al subir el producto de deseo a Firebase:', error);
        }
      }
    };
  };
  


  export const startDeleteWishProduct = (id) => {
    return async (dispatch, getState) => {
      // Dispatch para eliminar el producto de deseo localmente
      dispatch(deleteWishProductById(id));
  
      // Obtener los datos actuales del objeto de LocalStorage
      let datosLocalStorage = JSON.parse(localStorage.getItem('wishListViV_Twins')) || [];
  
      // Remover el dato con el id especificado del objeto
      const datosActualizados = datosLocalStorage.filter((dato) => dato.id !== id);
  
      // Guardar los datos actualizados en LocalStorage
      localStorage.setItem('wishListViV_Twins', JSON.stringify(datosActualizados));
  
      // Obtener el UID del usuario actual
      const { auth } = getState();
      const { uid } = auth;
  
      if (uid) {
        // Si hay un UID disponible, eliminar el producto de deseo de Firebase
        try {
          const docRef = doc(FirebaseDB, `users/${uid}/wishlist/${id}`);
  
          // Eliminar el documento de Firebase
          await deleteDoc(docRef);
        } catch (error) {
          console.log('Error al eliminar el producto de deseo de Firebase:', error);
        }
      }
    };
  };
  

export const startNewCartProduct = (imageUrls = [], price, title, quantity, rating = 0) => {
    return async (dispatch, getState) => {

        // const { wishList } = getState().storefront;

        // const id = wishList.activeWishProduct;

        const id = uuid();

        const newCartProduct = {
            id,
            imageUrls,
            price: parseInt(price),
            title,
            userQuantity: 1,
            rating: parseInt(rating)
        }
        dispatch(addNewEmptyCartProduct(newCartProduct));
    }
}

export const updateProductRating = ({ id, newRating }) => {

    const newId = id.id


    return async (dispatch, getState) => {
        const { products } = getState().storefront;
        const updatedProduct = products.map((product) => {
            if (product.newId === id) {
                return { ...product, rating: newRating };
            }
            return product;
        });
        dispatch(setProducts(updatedProduct));
        console.log('newRating')
        console.log(newRating)
        console.log(id.id)
    };
};


export const updateCartProductQuantity = ({ id, newQuantity }) => {
    return async (dispatch, getState) => {
        const { cart } = getState().storefront;
        const updatedCart = cart.map((product) => {
            if (product.id === id) {
                return { ...product, userQuantity: newQuantity };
            }
            return product;
        });
        dispatch(setCart(updatedCart));
    };
};




export const startDeleteCartProduct = (id) => {
    return async (dispatch) => {

        //! dispatch 

        dispatch(deleteCartProductById(id))

    }
}