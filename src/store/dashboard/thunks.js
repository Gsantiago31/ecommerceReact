import { async } from "@firebase/util"
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload, loadProducts } from "../../helpers";
import { addNewEmptyProduct, deleteProductById, savingNewProduct, setActiveProduct, setPhotosToActiveProduct, setProducts, setSaving, updateProduct } from "./dashboardSlice";
import { addNewUser } from "./analythicSlice";


export const startNewProduct = () => {
    return async( dispatch, getState ) => {

        dispatch( savingNewProduct() );

        const { uid } = getState().auth;

        const newProduct = {
            title: '',
            description: '',
            shortDescription: '',
            available: true,
            tags: '',
            category: '',
            color: [],
            price: '',
            date: new Date().getTime(),
            imageUrls: [],
            rating: 0,
            quantity: 0,
            weight: 1
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/store/products`) );
        await setDoc( newDoc, newProduct );

        newProduct.id = newDoc.id;  

        //! dispatch
        dispatch( addNewEmptyProduct( newProduct ) );
        dispatch( setActiveProduct( newProduct ) );

    }
}


export const startLoadingProducts = () => {
    return async( dispatch, getState ) => {
        
        const { uid } = getState().auth;
        if ( !uid ) throw new Error('El UID del usuario no existe');


        const products = await loadProducts( uid );
        dispatch( setProducts( products ) );
    }
}

export const startSaveProduct = (formState) => {
    return async (dispatch, getState) => {
      const { uid } = getState().auth;
      const productToFirestore = { ...formState };
      delete productToFirestore.id;
  
      const docRef = doc(FirebaseDB, `${uid}/store/products/${formState.id}`);
      await setDoc(docRef, productToFirestore, { merge: true });
  
      dispatch(updateProduct(formState));
    };
  };


export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch, getState ) => {
        dispatch( setSaving() );

        const { active:product } = getState().dashboard;

        const id = product.id;

        const result = await fileUpload( files );
        console.log(result)
        const fileUploadPromises = [];
        for ( const file of files ) {
            fileUploadPromises.push( fileUpload( file, id ) )
        }

        const photosUrls = await Promise.all( fileUploadPromises );
        
        console.log(`Lista de ${photosUrls}`);

        dispatch( setPhotosToActiveProduct( photosUrls ));
        
    }
}


export const startDeletingProduct = () => {
    return async( dispatch, getState) => {

        const { uid } = getState().auth;
        const { active: product } = getState().dashboard;

        const docRef = doc( FirebaseDB, `${ uid }/store/products/${ product.id }`);
        await deleteDoc( docRef );

        dispatch( deleteProductById(product.id) );

    }
}

