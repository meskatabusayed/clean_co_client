import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [isLoading , setIsLoading] = useState(true);

    const createUser = (email , password) => {
        setIsLoading(true);
       return createUserWithEmailAndPassword(auth , email , password)

    }


    const login  = (email , password) => {
        setIsLoading(true);
       return signInWithEmailAndPassword(auth , email , password)

    }

    const logOut = () => {
        setIsLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth , (createUser) => {
            setUser(createUser);
            setIsLoading(false);
        });

        return () => {
            return unsubscribe();
        }
        
    } ,[])




    const values = { createUser , login , user , isLoading , logOut }
    return (
        <AuthContext.Provider value={values}>
            {children}

        </AuthContext.Provider>
    )
}

export default AuthProvider;