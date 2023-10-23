import { loginWithEmailPassword, registerUserWithEmailPassword, logoutFirebase, singInWithGoogle } from '../../firebase/providers';
import { clearProductsLogout } from '../dashboard/dashboardSlice';
// import { clearCardsLogout } from '../dashboard';
import { checkingCredentials, logout, login, loginAdmin } from './';

export const checkingAuthentication = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        
    }
}


export const startGoogleSignIn = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await singInWithGoogle();
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        console.log(result);
        if (result.uid === 'eu1fjYLeV8cxmKcYfLDBAHIB97y2') {
            dispatch( loginAdmin(result))
        }else {
             dispatch( login( result ))
        }

    }
}


export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await registerUserWithEmailPassword({ email, password, displayName });
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ))

    }

}


export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({ email, password });
        console.log(result);

        if ( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ));

    }
}


export const startLogout = () => {
    return async( dispatch ) => {
        
        await logoutFirebase();
        dispatch( clearProductsLogout() );
        dispatch( logout() );

    }
}