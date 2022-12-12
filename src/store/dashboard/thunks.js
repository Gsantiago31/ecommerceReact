import { async } from "@firebase/util"
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload, loadProducts } from "../../helpers";
import { addNewEmptyProduct, savingNewProduct, setActiveProduct, setPhotosToActiveProduct, setProducts, setSaving, updateProduct } from "./dashboardSlice";


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
            color: '',
            price: '',
            date: new Date().getTime(),
            imageUrls: [],
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

export const startSaveProduct = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:product } = getState().dashboard;

        const productToFireStore = { ...product };
        delete productToFireStore.id;
    
        const docRef = doc( FirebaseDB, `${ uid }/store/products/${ product.id }` );
        await setDoc( docRef, productToFireStore, { merge: true });

        dispatch( updateProduct( product ) );

    }
}


export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {
        dispatch( setSaving() );
            
        await fileUpload( files[0] );
        const fileUploadPromises = [];
        for ( const file of files ) {
            fileUploadPromises.push( fileUpload( file ) )
        }

        const photosUrls = await Promise.all( fileUploadPromises );
        
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