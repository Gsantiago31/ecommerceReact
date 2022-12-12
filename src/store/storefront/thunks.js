import {loadPublicProducts } from "../../helpers";
import { setProducts } from "./storefrontSlice";


export const startLoadingPublicProducts = () => {
    return async( dispatch) => {
        
        const uid = 'eu1fjYLeV8cxmKcYfLDBAHIB97y2'
        // if ( !uid ) throw new Error('El UID del usuario no existe');

        const products = await loadPublicProducts( uid );
        dispatch( setProducts( products ) );
    }
}