import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, loginAdmin, logout } from "../store";
import { startLoadingProducts } from "../store/dashboard/thunks";
import { startLoadingPublicProducts } from "../store/storefront";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) {
        dispatch(logout());
        dispatch(startLoadingPublicProducts());
      } else if (user.uid === 'eu1fjYLeV8cxmKcYfLDBAHIB97y2') {
        dispatch(loginAdmin({ 
          uid: user.uid, 
          email: user.email, 
          displayName: user.displayName, 
          photoURL: user.photoURL 
        }));
        dispatch(startLoadingProducts());
      } else {
        dispatch(login({ 
          uid: user.uid, 
          email: user.email, 
          displayName: user.displayName, 
          photoURL: user.photoURL 
        }));
        dispatch(startLoadingPublicProducts());
      }
    });
  }, []);

  return status;
};
