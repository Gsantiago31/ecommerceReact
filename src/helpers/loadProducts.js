import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";


export const loadProducts = async( uid = '') => {
    if ( !uid ) throw new Error('El UID del usuario no existe');

    const collectionRef = collection( FirebaseDB, `${ uid }/store/products` );
    const docs = await getDocs(collectionRef);
    console.log(docs)
    const products = [];
    docs.forEach( doc => {
        products.push({ id: doc.id, ...doc.data() });
    });
    console.log(uid)
    console.log(products)
    return products;

}